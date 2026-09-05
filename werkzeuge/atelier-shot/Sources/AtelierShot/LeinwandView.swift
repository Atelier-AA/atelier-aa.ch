import AppKit

protocol LeinwandDelegat: AnyObject {
    /// Etwas hat sich geaendert — Fussleiste und Werkzeugleiste nachfuehren.
    func leinwandGeaendert(_ leinwand: LeinwandView)
}

/// Die Zeichenflaeche: zeigt das Bild und nimmt alle Anmerkungen entgegen.
///
/// Nicht gespiegelt (Ursprung unten links) — dieselbe Rechnung wie beim
/// Export. Dadurch zeichnet `Zeichner` in beide Ziele mit demselben Code.
final class LeinwandView: NSView, NSTextFieldDelegate {

    let dokument: Dokument
    weak var delegat: LeinwandDelegat?

    var werkzeug: Werkzeug = .pfeil {
        didSet {
            beendeTextbearbeitung()
            if werkzeug != .auswahl { ausgewaehlt = nil }
            window?.invalidateCursorRects(for: self)
            needsDisplay = true
            delegat?.leinwandGeaendert(self)
        }
    }

    var stil = Stil() {
        didSet {
            // Aenderung wirkt auch auf die gerade ausgewaehlte Anmerkung.
            if let index = ausgewaehlterIndex {
                dokument.anmerkungen[index].stil = stil
                needsDisplay = true
            }
            delegat?.leinwandGeaendert(self)
        }
    }

    var zoom: CGFloat = 1 {
        didSet {
            beendeTextbearbeitung()
            groesseNachfuehren()
            needsDisplay = true
            delegat?.leinwandGeaendert(self)
        }
    }

    private var ausgewaehlt: UUID?
    private var entwurf: Anmerkung?
    private var ziehmodus: Ziehmodus = .keiner
    private var letzterPunkt: CGPoint = .zero
    /// Sorgt dafür, dass Verschieben und Ziehen an einem Griff nur einen
    /// Schritt im Verlauf erzeugen und nicht einen pro Mausbewegung.
    private var aenderungGemerkt = false
    private var textfeld: NSTextField?
    private var bearbeiteteKennung: UUID?

    private enum Ziehmodus {
        case keiner
        case neu
        case verschieben
        case griff(Int)
    }

    // MARK: - Aufbau

    init(dokument: Dokument) {
        self.dokument = dokument
        super.init(frame: NSRect(origin: .zero, size: dokument.punktGroesse))
        wantsLayer = true
    }

    required init?(coder: NSCoder) { fatalError("nicht verwendet") }

    override var isFlipped: Bool { false }
    override var acceptsFirstResponder: Bool { true }
    override func acceptsFirstMouse(for event: NSEvent?) -> Bool { true }

    private func groesseNachfuehren() {
        setFrameSize(NSSize(width: dokument.punktGroesse.width * zoom,
                            height: dokument.punktGroesse.height * zoom))
    }

    override func resetCursorRects() {
        discardCursorRects()
        addCursorRect(bounds, cursor: werkzeug == .auswahl ? .arrow : .crosshair)
    }

    // MARK: - Zeichnen

    override func draw(_ dirtyRect: NSRect) {
        NSColor.windowBackgroundColor.setFill()
        dirtyRect.fill()

        NSGraphicsContext.saveGraphicsState()
        NSGraphicsContext.current?.imageInterpolation = zoom < 1 ? .high : .none

        let umrechnung = NSAffineTransform()
        umrechnung.scale(by: zoom)
        umrechnung.concat()

        dokument.bild.draw(in: CGRect(origin: .zero, size: dokument.punktGroesse),
                           from: .zero, operation: .copy, fraction: 1)

        for anmerkung in dokument.anmerkungen {
            let istAusgewaehlt = anmerkung.kennung == ausgewaehlt && anmerkung.kennung != bearbeiteteKennung
            Zeichner.zeichne(anmerkung, dokument: dokument, ausgewaehlt: istAusgewaehlt)
        }
        if let entwurf {
            Zeichner.zeichne(entwurf, dokument: dokument, ausgewaehlt: false)
        }

        NSGraphicsContext.restoreGraphicsState()
    }

    // MARK: - Umrechnung

    private func bildpunkt(_ ereignis: NSEvent) -> CGPoint {
        let inAnsicht = convert(ereignis.locationInWindow, from: nil)
        return CGPoint(x: inAnsicht.x / zoom, y: inAnsicht.y / zoom)
    }

    private func ansichtspunkt(_ bildpunkt: CGPoint) -> CGPoint {
        CGPoint(x: bildpunkt.x * zoom, y: bildpunkt.y * zoom)
    }

    private var ausgewaehlterIndex: Int? {
        guard let ausgewaehlt else { return nil }
        return dokument.anmerkungen.firstIndex(where: { $0.kennung == ausgewaehlt })
    }

    // MARK: - Maus

    override func mouseDown(with event: NSEvent) {
        window?.makeFirstResponder(self)
        beendeTextbearbeitung()
        let punkt = bildpunkt(event)
        letzterPunkt = punkt

        switch werkzeug {

        case .auswahl:
            // Zuerst Griffe der bestehenden Auswahl, dann Anmerkungen von oben.
            if let index = ausgewaehlterIndex {
                let griffe = Zeichner.griffe(dokument.anmerkungen[index])
                for (nummer, griff) in griffe.enumerated()
                where hypot(griff.x - punkt.x, griff.y - punkt.y) * zoom <= 8 {
                    aenderungGemerkt = false
                    ziehmodus = .griff(nummer)
                    return
                }
            }
            if let treffer = dokument.anmerkungen.last(where: { Zeichner.trifft($0, punkt: punkt) }) {
                ausgewaehlt = treffer.kennung
                stil = treffer.stil
                // Doppelklick auf Text oder Fahne oeffnet die Bearbeitung.
                if event.clickCount == 2, treffer.art == .text || treffer.art == .fahne {
                    ziehmodus = .keiner
                    needsDisplay = true
                    bearbeiteText(treffer.kennung)
                    return
                }
                aenderungGemerkt = false
                ziehmodus = .verschieben
            } else {
                ausgewaehlt = nil
                ziehmodus = .keiner
            }
            needsDisplay = true

        case .text:
            dokument.merken()
            let neu = Anmerkung(art: .text, punkte: [punkt], stil: stil)
            dokument.anmerkungen.append(neu)
            ausgewaehlt = neu.kennung
            ziehmodus = .keiner
            needsDisplay = true
            bearbeiteText(neu.kennung)

        case .nummer:
            dokument.merken()
            var neu = Anmerkung(art: .nummer, punkte: [punkt], stil: stil)
            neu.nummer = dokument.naechsteNummer
            dokument.anmerkungen.append(neu)
            ziehmodus = .keiner
            needsDisplay = true
            delegat?.leinwandGeaendert(self)

        case .freihand:
            entwurf = Anmerkung(art: .freihand, punkte: [punkt], stil: stil)
            ziehmodus = .neu

        default:
            entwurf = Anmerkung(art: werkzeug, punkte: [punkt, punkt], stil: stil)
            ziehmodus = .neu
        }
    }

    override func mouseDragged(with event: NSEvent) {
        let punkt = bildpunkt(event)
        let mitUmschalt = event.modifierFlags.contains(.shift)

        switch ziehmodus {

        case .keiner:
            return

        case .neu:
            guard var laufend = entwurf else { return }
            if laufend.art == .freihand {
                if hypot(punkt.x - letzterPunkt.x, punkt.y - letzterPunkt.y) > 1.2 {
                    laufend.punkte.append(punkt)
                    letzterPunkt = punkt
                }
            } else {
                laufend.punkte[1] = mitUmschalt
                    ? eingerastet(von: laufend.punkte[0], nach: punkt, art: laufend.art)
                    : punkt
            }
            entwurf = laufend

        case .verschieben:
            guard let index = ausgewaehlterIndex else { return }
            merkeEinmal()
            let versatz = CGPoint(x: punkt.x - letzterPunkt.x, y: punkt.y - letzterPunkt.y)
            dokument.anmerkungen[index].verschiebe(um: versatz)
            letzterPunkt = punkt

        case .griff(let nummer):
            guard let index = ausgewaehlterIndex else { return }
            merkeEinmal()
            var anmerkung = dokument.anmerkungen[index]
            let gegenpunkt = nummer == 0 ? anmerkung.ende : anmerkung.start
            let neuerPunkt = mitUmschalt
                ? eingerastet(von: gegenpunkt, nach: punkt, art: anmerkung.art)
                : punkt
            if nummer == 0 {
                anmerkung.punkte[0] = neuerPunkt
            } else {
                anmerkung.punkte[anmerkung.punkte.count - 1] = neuerPunkt
            }
            dokument.anmerkungen[index] = anmerkung
        }

        needsDisplay = true
    }

    override func mouseUp(with event: NSEvent) {
        defer {
            ziehmodus = .keiner
            entwurf = nil
            needsDisplay = true
            delegat?.leinwandGeaendert(self)
        }

        guard case .neu = ziehmodus, var fertig = entwurf else { return }

        if fertig.art == .freihand {
            guard fertig.punkte.count > 2 else { return }
        } else {
            let laenge = hypot(fertig.ende.x - fertig.start.x, fertig.ende.y - fertig.start.y)
            guard laenge > 4 else { return }
        }

        dokument.merken()

        if fertig.art == .fahne {
            // Beim Aufziehen zeigt die Spitze auf den Startpunkt,
            // der Kasten liegt am Endpunkt.
            dokument.anmerkungen.append(fertig)
            ausgewaehlt = fertig.kennung
            bearbeiteText(fertig.kennung)
            return
        }

        if fertig.art == .marker {
            fertig.stil.staerke = stil.staerke
        }
        dokument.anmerkungen.append(fertig)
    }

    private func merkeEinmal() {
        guard !aenderungGemerkt else { return }
        dokument.merken()
        aenderungGemerkt = true
    }

    /// Auf 15-Grad-Schritte einrasten, bei Flaechen auf ein Quadrat.
    private func eingerastet(von: CGPoint, nach: CGPoint, art: Werkzeug) -> CGPoint {
        let dx = nach.x - von.x
        let dy = nach.y - von.y

        switch art {
        case .pfeil, .linie:
            let laenge = hypot(dx, dy)
            guard laenge > 0 else { return nach }
            let schritt = CGFloat.pi / 12
            let winkel = (atan2(dy, dx) / schritt).rounded() * schritt
            return CGPoint(x: von.x + cos(winkel) * laenge, y: von.y + sin(winkel) * laenge)
        default:
            let seite = max(abs(dx), abs(dy))
            return CGPoint(x: von.x + (dx < 0 ? -seite : seite),
                           y: von.y + (dy < 0 ? -seite : seite))
        }
    }

    // MARK: - Tastatur

    override func keyDown(with event: NSEvent) {
        if textfeld != nil {
            super.keyDown(with: event)
            return
        }
        if event.modifierFlags.contains(.command) {
            super.keyDown(with: event)
            return
        }

        // Entfernen / Rueckschritt
        if event.keyCode == 51 || event.keyCode == 117 {
            loescheAuswahl()
            return
        }
        // Esc
        if event.keyCode == 53 {
            ausgewaehlt = nil
            needsDisplay = true
            return
        }

        guard let zeichen = event.charactersIgnoringModifiers?.lowercased(), !zeichen.isEmpty else {
            super.keyDown(with: event)
            return
        }

        if let gewaehlt = Werkzeug.allCases.first(where: { $0.taste == zeichen }) {
            werkzeug = gewaehlt
            return
        }
        if let farbe = Stiftfarbe.allCases.first(where: { $0.taste == zeichen }) {
            stil.farbe = farbe
            return
        }
        if zeichen == "[" {
            stil.staerke = max(1, stil.staerke - 1)
            return
        }
        if zeichen == "]" {
            stil.staerke = min(24, stil.staerke + 1)
            return
        }
        if zeichen == "\r" || zeichen == "\n" {
            if let index = ausgewaehlterIndex,
               dokument.anmerkungen[index].art == .text || dokument.anmerkungen[index].art == .fahne {
                bearbeiteText(dokument.anmerkungen[index].kennung)
                return
            }
        }
        super.keyDown(with: event)
    }

    func loescheAuswahl() {
        guard let index = ausgewaehlterIndex else { return }
        dokument.merken()
        dokument.anmerkungen.remove(at: index)
        ausgewaehlt = nil
        needsDisplay = true
        delegat?.leinwandGeaendert(self)
    }

    // MARK: - Text schreiben

    private func bearbeiteText(_ kennung: UUID) {
        guard let index = dokument.anmerkungen.firstIndex(where: { $0.kennung == kennung }) else { return }
        let anmerkung = dokument.anmerkungen[index]

        let bereich = anmerkung.art == .fahne
            ? Zeichner.fahnenRechteck(anmerkung)
            : Zeichner.textRechteck(anmerkung)

        let feld = NSTextField(frame: NSRect(
            x: ansichtspunkt(CGPoint(x: bereich.minX, y: bereich.minY)).x,
            y: ansichtspunkt(CGPoint(x: bereich.minX, y: bereich.minY)).y,
            width: max(140, bereich.width * zoom),
            height: max(22, bereich.height * zoom)))
        feld.stringValue = anmerkung.text
        feld.font = NSFont.systemFont(ofSize: max(11, anmerkung.stil.schriftgroesse * zoom),
                                      weight: .semibold)
        feld.textColor = anmerkung.stil.farbe.farbe
        feld.backgroundColor = NSColor.white
        feld.isBordered = true
        feld.bezelStyle = .roundedBezel
        feld.focusRingType = .default
        feld.delegate = self
        feld.placeholderString = "Bemerkung …"

        addSubview(feld)
        textfeld = feld
        bearbeiteteKennung = kennung
        needsDisplay = true
        window?.makeFirstResponder(feld)
    }

    func controlTextDidEndEditing(_ obj: Notification) {
        beendeTextbearbeitung()
    }

    /// Uebernimmt den geschriebenen Text und raeumt das Eingabefeld weg.
    func beendeTextbearbeitung() {
        guard let feld = textfeld, let kennung = bearbeiteteKennung else { return }
        let inhalt = feld.stringValue

        textfeld = nil
        bearbeiteteKennung = nil
        feld.delegate = nil
        feld.removeFromSuperview()

        if let index = dokument.anmerkungen.firstIndex(where: { $0.kennung == kennung }) {
            if inhalt.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty {
                dokument.anmerkungen.remove(at: index)   // leere Anmerkung nicht behalten
                ausgewaehlt = nil
            } else {
                dokument.anmerkungen[index].text = inhalt
            }
        }

        if window?.firstResponder !== self {
            window?.makeFirstResponder(self)
        }
        needsDisplay = true
        delegat?.leinwandGeaendert(self)
    }

    // MARK: - Von der Werkzeugleiste und vom Menue

    func alleEntfernen() {
        guard !dokument.anmerkungen.isEmpty else { return }
        dokument.merken()
        dokument.anmerkungen.removeAll()
        ausgewaehlt = nil
        needsDisplay = true
        delegat?.leinwandGeaendert(self)
    }

    func zurueck() {
        beendeTextbearbeitung()
        dokument.rueckgaengig()
        ausgewaehlt = nil
        needsDisplay = true
        delegat?.leinwandGeaendert(self)
    }

    func vor() {
        beendeTextbearbeitung()
        dokument.wiederherstellen()
        ausgewaehlt = nil
        needsDisplay = true
        delegat?.leinwandGeaendert(self)
    }
}
