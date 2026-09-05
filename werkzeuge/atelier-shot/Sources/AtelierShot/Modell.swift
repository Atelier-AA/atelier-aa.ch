import AppKit

// MARK: - Werkzeuge

enum Werkzeug: String, CaseIterable {
    case auswahl
    case pfeil
    case linie
    case rechteck
    case ellipse
    case freihand
    case text
    case marker
    case wolke
    case fahne
    case nummer
    case unkenntlich

    var titel: String {
        switch self {
        case .auswahl:      return "Auswählen"
        case .pfeil:        return "Pfeil"
        case .linie:        return "Linie"
        case .rechteck:     return "Rechteck"
        case .ellipse:      return "Ellipse"
        case .freihand:     return "Freihand"
        case .text:         return "Text"
        case .marker:       return "Marker"
        case .wolke:        return "Revisionswolke"
        case .fahne:        return "Textfahne"
        case .nummer:       return "Nummer"
        case .unkenntlich:  return "Unkenntlich machen"
        }
    }

    /// Taste ohne Zusatztaste. Wird in der Leinwand ausgewertet, nicht im Menue,
    /// damit sie beim Schreiben von Text nicht dazwischenfunkt.
    var taste: String {
        switch self {
        case .auswahl:      return "v"
        case .pfeil:        return "1"
        case .linie:        return "2"
        case .rechteck:     return "3"
        case .ellipse:      return "4"
        case .freihand:     return "5"
        case .text:         return "6"
        case .marker:       return "7"
        case .wolke:        return "w"
        case .fahne:        return "f"
        case .nummer:       return "n"
        case .unkenntlich:  return "u"
        }
    }

    var symbolname: String {
        switch self {
        case .auswahl:      return "cursorarrow"
        case .pfeil:        return "arrow.up.right"
        case .linie:        return "line.diagonal"
        case .rechteck:     return "rectangle"
        case .ellipse:      return "circle"
        case .freihand:     return "scribble"
        case .text:         return "textformat"
        case .marker:       return "highlighter"
        case .wolke:        return "cloud"
        case .fahne:        return "text.bubble"
        case .nummer:       return "1.circle"
        case .unkenntlich:  return "eye.slash"
        }
    }

    /// Ersatzbeschriftung, falls das Symbol auf diesem System fehlt.
    var kurzzeichen: String {
        switch self {
        case .auswahl:      return "▷"
        case .pfeil:        return "↗"
        case .linie:        return "╱"
        case .rechteck:     return "▭"
        case .ellipse:      return "○"
        case .freihand:     return "✎"
        case .text:         return "T"
        case .marker:       return "▬"
        case .wolke:        return "☁"
        case .fahne:        return "⚑"
        case .nummer:       return "①"
        case .unkenntlich:  return "▨"
        }
    }

    /// Werkzeuge, die aus zwei Eckpunkten bestehen (Ziehen von A nach B).
    var istZweipunkt: Bool {
        switch self {
        case .pfeil, .linie, .rechteck, .ellipse, .marker, .wolke, .unkenntlich, .fahne:
            return true
        case .auswahl, .freihand, .text, .nummer:
            return false
        }
    }
}

// MARK: - Farben

enum Stiftfarbe: String, CaseIterable {
    case rot
    case gruen
    case blau
    case gelb
    case schwarz

    var titel: String {
        switch self {
        case .rot:      return "Rot — Korrektur"
        case .gruen:    return "Grün — erledigt"
        case .blau:     return "Blau — Frage"
        case .gelb:     return "Gelb — Hervorhebung"
        case .schwarz:  return "Schwarz — neutral"
        }
    }

    var taste: String {
        switch self {
        case .rot:      return "r"
        case .gruen:    return "g"
        case .blau:     return "b"
        case .gelb:     return "y"
        case .schwarz:  return "k"
        }
    }

    var farbe: NSColor {
        switch self {
        case .rot:      return NSColor(srgbRed: 0.85, green: 0.11, blue: 0.11, alpha: 1)
        case .gruen:    return NSColor(srgbRed: 0.10, green: 0.60, blue: 0.28, alpha: 1)
        case .blau:     return NSColor(srgbRed: 0.06, green: 0.40, blue: 0.85, alpha: 1)
        case .gelb:     return NSColor(srgbRed: 0.98, green: 0.78, blue: 0.10, alpha: 1)
        case .schwarz:  return NSColor(srgbRed: 0.10, green: 0.10, blue: 0.10, alpha: 1)
        }
    }
}

// MARK: - Stil

struct Stil {
    var farbe: Stiftfarbe = .rot
    var staerke: CGFloat = 3
    var schriftgroesse: CGFloat = 15
}

// MARK: - Anmerkung

/// Eine einzelne Anmerkung im Bild. Bewusst ein Wert und keine Klasse:
/// dadurch ist "Rueckgaengig" ein simpler Schnappschuss der ganzen Liste.
struct Anmerkung {
    let kennung = UUID()
    var art: Werkzeug
    var punkte: [CGPoint]
    var text: String = ""
    var nummer: Int = 0
    var stil: Stil

    var start: CGPoint { punkte.first ?? .zero }
    var ende: CGPoint { punkte.last ?? .zero }

    /// Umschliessendes Rechteck in Bildpunkten (Punkte, nicht Pixel).
    var rahmen: CGRect {
        guard let erster = punkte.first else { return .zero }
        var minX = erster.x, maxX = erster.x, minY = erster.y, maxY = erster.y
        for p in punkte {
            minX = min(minX, p.x); maxX = max(maxX, p.x)
            minY = min(minY, p.y); maxY = max(maxY, p.y)
        }
        return CGRect(x: minX, y: minY, width: maxX - minX, height: maxY - minY)
    }

    /// Rechteck fuer Werkzeuge, die aus zwei Eckpunkten aufgezogen werden.
    var aufgezogenesRechteck: CGRect {
        let a = start, b = ende
        return CGRect(x: min(a.x, b.x), y: min(a.y, b.y),
                      width: abs(b.x - a.x), height: abs(b.y - a.y))
    }

    mutating func verschiebe(um versatz: CGPoint) {
        for i in punkte.indices {
            punkte[i].x += versatz.x
            punkte[i].y += versatz.y
        }
    }
}

// MARK: - Dokument

/// Bild plus Anmerkungen plus Verlauf. Kennt keine Ansicht.
final class Dokument {

    /// Das Bild, wie es gezeigt und exportiert wird. Kann durch
    /// "Hintergrund entfernen" ersetzt werden — das Original bleibt erhalten.
    var bild: NSImage
    let originalbild: NSImage
    var istFreigestellt: Bool { bild !== originalbild }

    /// Groesse in Bildschirmpunkten — so gross war der Ausschnitt auf dem Schirm.
    let punktGroesse: CGSize
    /// Groesse in echten Bildpunkten der Datei.
    let pixelGroesse: CGSize
    /// 1 auf einem gewoehnlichen Schirm, 2 auf Retina.
    var bildpunktfaktor: CGFloat {
        guard punktGroesse.width > 0 else { return 1 }
        return pixelGroesse.width / punktGroesse.width
    }

    var anmerkungen: [Anmerkung] = []

    /// Zaehlt jede inhaltliche Aenderung. Damit weiss das Fenster beim
    /// Schliessen, ob seit dem letzten Sichern etwas passiert ist.
    private(set) var aenderungsstand = 0

    private var verlaufZurueck: [[Anmerkung]] = []
    private var verlaufVor: [[Anmerkung]] = []

    init(bild: NSImage, punktGroesse: CGSize, pixelGroesse: CGSize) {
        self.bild = bild
        self.originalbild = bild
        self.punktGroesse = punktGroesse
        self.pixelGroesse = pixelGroesse
    }

    /// Vor jeder Aenderung aufrufen. Legt einen Schnappschuss ab.
    func merken() {
        verlaufZurueck.append(anmerkungen)
        if verlaufZurueck.count > 100 { verlaufZurueck.removeFirst() }
        verlaufVor.removeAll()
        aenderungsstand += 1
    }

    var kannZurueck: Bool { !verlaufZurueck.isEmpty }
    var kannVor: Bool { !verlaufVor.isEmpty }

    func rueckgaengig() {
        guard let vorher = verlaufZurueck.popLast() else { return }
        verlaufVor.append(anmerkungen)
        anmerkungen = vorher
        aenderungsstand += 1
    }

    func wiederherstellen() {
        guard let nachher = verlaufVor.popLast() else { return }
        verlaufZurueck.append(anmerkungen)
        anmerkungen = nachher
        aenderungsstand += 1
    }

    /// Bild ersetzen (Hintergrund entfernen / Original zurueck).
    func setzeBild(_ neues: NSImage) {
        bild = neues
        aenderungsstand += 1
    }

    /// Fortlaufende Nummer fuer das Nummern-Werkzeug.
    var naechsteNummer: Int {
        (anmerkungen.filter { $0.art == .nummer }.map { $0.nummer }.max() ?? 0) + 1
    }

    /// Alle Nummern und Texte als Liste — zum Einkleben ins Protokoll.
    func anmerkungsliste() -> String {
        let nummerierte = anmerkungen
            .filter { $0.art == .nummer || $0.art == .fahne || $0.art == .text }
            .sorted { links, rechts in
                if links.nummer != rechts.nummer { return links.nummer < rechts.nummer }
                return links.rahmen.minY > rechts.rahmen.minY
            }
        var zeilen: [String] = []
        for eintrag in nummerierte {
            let inhalt = eintrag.text.trimmingCharacters(in: .whitespacesAndNewlines)
            if eintrag.art == .nummer {
                zeilen.append("\(eintrag.nummer). \(inhalt)")
            } else if !inhalt.isEmpty {
                zeilen.append("– \(inhalt)")
            }
        }
        return zeilen.joined(separator: "\n")
    }
}
