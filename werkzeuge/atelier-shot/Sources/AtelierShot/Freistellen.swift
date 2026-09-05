import AppKit
import Vision
import CoreImage

/// Hintergrund entfernen — mit Apples eigener Bilderkennung (Vision).
///
/// Dieselbe Technik, die die Vorschau beim Rechtsklick "Hintergrund entfernen"
/// nutzt. Sie laeuft vollstaendig auf dem Geraet; nichts wird hochgeladen.
/// Das Ergebnis ersetzt das Bild im Dokument, das Original bleibt erhalten
/// und laesst sich jederzeit wiederherstellen.
enum Freistellen {

    /// Braucht macOS 14. Auf aelteren Systemen bleibt der Menuepunkt grau.
    static var verfuegbar: Bool {
        if #available(macOS 14.0, *) { return true }
        return false
    }

    static func freistellen(_ dokument: Dokument, fertig: @escaping (NSImage?) -> Void) {
        guard #available(macOS 14.0, *) else {
            fertig(nil)
            return
        }
        let quelle = dokument.originalbild
        let punktGroesse = dokument.punktGroesse

        DispatchQueue.global(qos: .userInitiated).async {
            let ergebnis = rechne(quelle, punktGroesse: punktGroesse)
            DispatchQueue.main.async { fertig(ergebnis) }
        }
    }

    @available(macOS 14.0, *)
    private static func rechne(_ bild: NSImage, punktGroesse: CGSize) -> NSImage? {
        // Volle Bildpunktzahl verwenden, nicht die Punktgroesse.
        let cgBild: CGImage?
        if let darstellung = bild.representations.first as? NSBitmapImageRep {
            cgBild = darstellung.cgImage
        } else {
            cgBild = bild.cgImage(forProposedRect: nil, context: nil, hints: nil)
        }
        guard let cgBild else { return nil }

        let anfrage = VNGenerateForegroundInstanceMaskRequest()
        let bearbeiter = VNImageRequestHandler(cgImage: cgBild, options: [:])
        do {
            try bearbeiter.perform([anfrage])
        } catch {
            return nil
        }
        guard let beobachtung = anfrage.results?.first else { return nil }   // kein Motiv erkannt

        guard let puffer = try? beobachtung.generateMaskedImage(
            ofInstances: beobachtung.allInstances,
            from: bearbeiter,
            croppedToInstancesExtent: false) else { return nil }

        let ciBild = CIImage(cvPixelBuffer: puffer)
        let kontext = CIContext()
        guard let ausgabe = kontext.createCGImage(ciBild, from: ciBild.extent) else { return nil }

        return NSImage(cgImage: ausgabe,
                       size: NSSize(width: punktGroesse.width, height: punktGroesse.height))
    }
}
