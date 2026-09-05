import AppKit
import UniformTypeIdentifiers

/// Fertiges Bild herstellen und weitergeben.
///
/// Gerechnet wird immer in der vollen Bildpunktzahl der Aufnahme: die
/// Darstellung bekommt die Pixelmasse der Datei und zugleich die Punktmasse
/// des Bildschirmausschnitts. Dadurch zeichnet derselbe Code wie im Fenster,
/// das Ergebnis hat aber die volle Aufloesung — und die Bildpunktdichte steht
/// in der Datei, damit andere Programme richtig anzeigen.
enum Ausgabe {

    static func fertigeDarstellung(_ dokument: Dokument) -> NSBitmapImageRep? {
        let breite = Int(dokument.pixelGroesse.width.rounded())
        let hoehe = Int(dokument.pixelGroesse.height.rounded())
        guard breite > 0, hoehe > 0 else { return nil }

        guard let darstellung = NSBitmapImageRep(
            bitmapDataPlanes: nil,
            pixelsWide: breite,
            pixelsHigh: hoehe,
            bitsPerSample: 8,
            samplesPerPixel: 4,
            hasAlpha: true,
            isPlanar: false,
            colorSpaceName: .deviceRGB,
            bytesPerRow: 0,
            bitsPerPixel: 0
        ) else { return nil }

        darstellung.size = NSSize(width: dokument.punktGroesse.width,
                                  height: dokument.punktGroesse.height)

        guard let kontext = NSGraphicsContext(bitmapImageRep: darstellung) else { return nil }

        NSGraphicsContext.saveGraphicsState()
        NSGraphicsContext.current = kontext
        kontext.imageInterpolation = .none

        dokument.bild.draw(in: CGRect(origin: .zero, size: dokument.punktGroesse),
                           from: .zero, operation: .copy, fraction: 1)
        for anmerkung in dokument.anmerkungen {
            Zeichner.zeichne(anmerkung, dokument: dokument, ausgewaehlt: false)
        }

        kontext.flushGraphics()
        NSGraphicsContext.restoreGraphicsState()
        return darstellung
    }

    static func pngDaten(_ dokument: Dokument) -> Data? {
        fertigeDarstellung(dokument)?.representation(using: .png, properties: [:])
    }

    // MARK: - Zwischenablage

    static func inZwischenablage(_ dokument: Dokument) {
        guard let darstellung = fertigeDarstellung(dokument) else { return }
        let ablage = NSPasteboard.general
        ablage.declareTypes([.png, .tiff], owner: nil)
        if let png = darstellung.representation(using: .png, properties: [:]) {
            ablage.setData(png, forType: .png)
        }
        if let tiff = darstellung.tiffRepresentation {
            ablage.setData(tiff, forType: .tiff)
        }
    }

    static func listeInZwischenablage(_ dokument: Dokument) {
        let liste = dokument.anmerkungsliste()
        guard !liste.isEmpty else { return }
        let ablage = NSPasteboard.general
        ablage.declareTypes([.string], owner: nil)
        ablage.setString(liste, forType: .string)
    }

    // MARK: - Sichern

    static func vorschlagsname(endung: String = "png") -> String {
        let formatierer = DateFormatter()
        formatierer.dateFormat = "yyyy-MM-dd_HH.mm.ss"
        return "Atelier Shot \(formatierer.string(from: Date())).\(endung)"
    }

    /// Fragt nach Ort und Namen. Gibt den gesicherten Ort zurueck.
    @discardableResult
    static func sichernMitDialog(_ dokument: Dokument, fenster: NSWindow?) -> URL? {
        guard let daten = pngDaten(dokument) else { return nil }

        let dialog = NSSavePanel()
        dialog.allowedContentTypes = [UTType.png]
        dialog.nameFieldStringValue = vorschlagsname()
        dialog.canCreateDirectories = true
        dialog.message = "Bildschirmfoto sichern"
        dialog.directoryURL = Einstellungen.geteilte.ablageordner

        fenster?.makeKeyAndOrderFront(nil)
        guard dialog.runModal() == .OK, let ziel = dialog.url else { return nil }
        do {
            try daten.write(to: ziel)
            return ziel
        } catch {
            zeigeFehler("Sichern nicht möglich", text: error.localizedDescription)
            return nil
        }
    }

    /// Sichert ohne Rueckfrage in den Ablageordner. Gibt es den Namen schon,
    /// wird hochgezaehlt statt ueberschrieben.
    @discardableResult
    static func sichernInAblageordner(_ dokument: Dokument, leise: Bool = false) -> URL? {
        let ordner = Einstellungen.geteilte.ablageordner
        guard let daten = pngDaten(dokument) else { return nil }

        let name = vorschlagsname()
        var ziel = ordner.appendingPathComponent(name)
        var zaehler = 2
        while FileManager.default.fileExists(atPath: ziel.path) {
            let ohneEndung = (name as NSString).deletingPathExtension
            ziel = ordner.appendingPathComponent("\(ohneEndung) \(zaehler).png")
            zaehler += 1
        }

        do {
            try FileManager.default.createDirectory(at: ordner, withIntermediateDirectories: true)
            try daten.write(to: ziel)
            return ziel
        } catch {
            if !leise {
                zeigeFehler("Sichern nicht möglich", text: error.localizedDescription)
            }
            return nil
        }
    }

    /// Datei im Zwischenspeicher — Grundlage fuers Herausziehen ins Programm daneben.
    static func temporaereDatei(_ dokument: Dokument) -> URL? {
        guard let daten = pngDaten(dokument) else { return nil }
        let ziel = URL(fileURLWithPath: NSTemporaryDirectory())
            .appendingPathComponent(vorschlagsname())
        do {
            try daten.write(to: ziel)
            return ziel
        } catch {
            return nil
        }
    }

    static func zeigeFehler(_ titel: String, text: String) {
        let hinweis = NSAlert()
        hinweis.messageText = titel
        hinweis.informativeText = text
        hinweis.alertStyle = .warning
        hinweis.addButton(withTitle: "Verstanden")
        hinweis.runModal()
    }
}

/// Kleines Feld in der Fussleiste, aus dem das fertige Bild in ein anderes
/// Programm gezogen werden kann — Mail, Finder, Nachrichten.
final class ZiehFeld: NSView, NSDraggingSource {

    var dokumentGeber: (() -> Dokument?)?

    override func mouseDown(with event: NSEvent) {
        guard let dokument = dokumentGeber?(),
              let ort = Ausgabe.temporaereDatei(dokument) else { return }

        let element = NSDraggingItem(pasteboardWriter: ort as NSURL)
        let vorschau = NSImage(size: NSSize(width: 64, height: 44))
        vorschau.lockFocus()
        dokument.bild.draw(in: NSRect(x: 0, y: 0, width: 64, height: 44),
                           from: .zero, operation: .copy, fraction: 1)
        vorschau.unlockFocus()
        element.setDraggingFrame(NSRect(x: 0, y: 0, width: 64, height: 44), contents: vorschau)

        beginDraggingSession(with: [element], event: event, source: self)
    }

    func draggingSession(_ session: NSDraggingSession,
                         sourceOperationMaskFor context: NSDraggingContext) -> NSDragOperation {
        .copy
    }
}
