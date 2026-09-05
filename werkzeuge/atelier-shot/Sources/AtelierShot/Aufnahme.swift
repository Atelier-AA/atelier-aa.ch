import AppKit

enum Aufnahmeart {
    case ausschnitt
    case vollbild
    case fenster

    var titel: String {
        switch self {
        case .ausschnitt: return "Ausschnitt aufnehmen"
        case .vollbild:   return "Ganzen Bildschirm aufnehmen"
        case .fenster:    return "Fenster aufnehmen"
        }
    }
}

/// Ergebnis einer Aufnahme. Trennt bewusst Punkte von Bildpunkten —
/// daran haengt die Regel, dass nichts skaliert wird.
struct Aufnahme {
    let bild: NSImage
    /// So gross war der Ausschnitt auf dem Bildschirm.
    let punktGroesse: CGSize
    /// So viele echte Bildpunkte hat die Datei (auf Retina doppelt so viele).
    let pixelGroesse: CGSize
    /// Ungefaehre Lage auf dem Schirm — dient nur der Fensterplatzierung.
    let mausort: CGPoint
}

/// Die Aufnahme selbst.
///
/// Stufe 1 nutzt Apples eingebautes `screencapture`. Damit ist die
/// Auswahl-Oberflaeche exakt die gewohnte (Fadenkreuz, Leertaste fuer
/// Fensterauswahl, Esc bricht ab), und die Datei kommt mit korrekter
/// Bildpunktdichte heraus. Der Aufruf steckt hinter dieser einen Stelle,
/// damit spaeter ohne Umbau auf ScreenCaptureKit gewechselt werden kann.
enum Bildschirmaufnahme {

    static let werkzeug = "/usr/sbin/screencapture"

    static func starte(_ art: Aufnahmeart, fertig: @escaping (Aufnahme?) -> Void) {
        let ziel = URL(fileURLWithPath: NSTemporaryDirectory())
            .appendingPathComponent("atelier-shot-\(UUID().uuidString).png")

        var argumente: [String]
        switch art {
        case .ausschnitt:
            argumente = ["-i", "-x"]
        case .fenster:
            argumente = ["-i", "-w", "-o", "-x"]
        case .vollbild:
            if let bereich = bereichDesSchirmsUnterDerMaus() {
                argumente = ["-x", "-R\(bereich)"]
            } else {
                argumente = ["-x", "-m"]
            }
        }
        argumente.append(ziel.path)

        let prozess = Process()
        prozess.executableURL = URL(fileURLWithPath: werkzeug)
        prozess.arguments = argumente
        prozess.terminationHandler = { beendet in
            let erfolgreich = beendet.terminationStatus == 0
            DispatchQueue.main.async {
                defer { try? FileManager.default.removeItem(at: ziel) }
                guard erfolgreich, FileManager.default.fileExists(atPath: ziel.path) else {
                    fertig(nil)          // Esc gedrueckt oder Berechtigung fehlt
                    return
                }
                fertig(ausDatei(ziel))
            }
        }

        do {
            try prozess.run()
        } catch {
            DispatchQueue.main.async { fertig(nil) }
        }
    }

    /// Liest die Datei und rechnet Bildpunkte in Bildschirmpunkte um.
    static func ausDatei(_ ort: URL) -> Aufnahme? {
        guard let daten = try? Data(contentsOf: ort),
              let darstellung = NSBitmapImageRep(data: daten) else { return nil }

        let pixel = CGSize(width: CGFloat(darstellung.pixelsWide),
                           height: CGFloat(darstellung.pixelsHigh))
        guard pixel.width > 0, pixel.height > 0 else { return nil }

        // `size` der Darstellung ergibt sich aus der Bildpunktdichte in der
        // Datei: 144 dpi auf Retina heisst halb so viele Punkte wie Bildpunkte.
        var punkt = CGSize(width: darstellung.size.width, height: darstellung.size.height)
        let faktor = punkt.width > 0 ? pixel.width / punkt.width : 0
        if !(faktor > 0.9 && faktor < 3.5) {
            punkt = pixel                                  // Angabe unbrauchbar
        }

        darstellung.size = NSSize(width: punkt.width, height: punkt.height)
        let bild = NSImage(size: NSSize(width: punkt.width, height: punkt.height))
        bild.addRepresentation(darstellung)

        return Aufnahme(bild: bild,
                        punktGroesse: punkt,
                        pixelGroesse: pixel,
                        mausort: NSEvent.mouseLocation)
    }

    /// `-R x,y,b,h` erwartet den Ursprung oben links des Hauptbildschirms.
    /// AppKit rechnet von unten links — deshalb die Umrechnung.
    private static func bereichDesSchirmsUnterDerMaus() -> String? {
        let maus = NSEvent.mouseLocation
        let schirm = NSScreen.screens.first(where: { $0.frame.contains(maus) })
            ?? NSScreen.main
        guard let schirm, let haupt = NSScreen.screens.first else { return nil }

        let rahmen = schirm.frame
        let obenLinksY = haupt.frame.maxY - rahmen.maxY
        return "\(Int(rahmen.minX)),\(Int(obenLinksY)),\(Int(rahmen.width)),\(Int(rahmen.height))"
    }

    /// Prueft, ob das eingebaute Werkzeug vorhanden ist.
    static var werkzeugVorhanden: Bool {
        FileManager.default.isExecutableFile(atPath: werkzeug)
    }
}
