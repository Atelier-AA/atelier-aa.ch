import AppKit

/// Werkzeugleiste oben im Fenster. Meldet Auswahl ueber Rueckrufe —
/// sie kennt weder Dokument noch Fenster.
final class WerkzeugLeiste: NSView {

    var beiWerkzeug: ((Werkzeug) -> Void)?
    var beiFarbe: ((Stiftfarbe) -> Void)?
    var beiStaerke: ((CGFloat) -> Void)?
    var beiZurueck: (() -> Void)?
    var beiVor: (() -> Void)?
    var beiAllesLoeschen: (() -> Void)?

    private var werkzeugKnoepfe: [(Werkzeug, NSButton)] = []
    private var farbKnoepfe: [(Stiftfarbe, NSButton)] = []
    private let staerkeWahl = NSSegmentedControl()
    private let zurueckKnopf = NSButton()
    private let vorKnopf = NSButton()
    private let loeschenKnopf = NSButton()
    private var trenner: [NSBox] = []

    static let staerken: [CGFloat] = [2, 3.5, 6, 9]
    private let knopfBreite: CGFloat = 30
    private let knopfHoehe: CGFloat = 26
    private let farbBreite: CGFloat = 22
    private let rand: CGFloat = 10
    private let gruppenabstand: CGFloat = 12

    override init(frame frameRect: NSRect) {
        super.init(frame: frameRect)
        baueAuf()
    }

    required init?(coder: NSCoder) { fatalError("nicht verwendet") }

    private func baueAuf() {
        wantsLayer = true

        for werkzeug in Werkzeug.allCases {
            let knopf = NSButton()
            knopf.bezelStyle = .texturedRounded
            knopf.setButtonType(.pushOnPushOff)
            if let bild = NSImage(systemSymbolName: werkzeug.symbolname,
                                  accessibilityDescription: werkzeug.titel) {
                knopf.image = bild
                knopf.imagePosition = .imageOnly
            } else {
                knopf.title = werkzeug.kurzzeichen
            }
            knopf.toolTip = "\(werkzeug.titel)  (\(werkzeug.taste.uppercased()))"
            knopf.target = self
            knopf.action = #selector(werkzeugGewaehlt(_:))
            addSubview(knopf)
            werkzeugKnoepfe.append((werkzeug, knopf))
        }

        for farbe in Stiftfarbe.allCases {
            let knopf = NSButton()
            knopf.bezelStyle = .texturedRounded
            knopf.setButtonType(.pushOnPushOff)
            knopf.image = farbplaettchen(farbe.farbe)
            knopf.imagePosition = .imageOnly
            knopf.toolTip = "\(farbe.titel)  (\(farbe.taste.uppercased()))"
            knopf.target = self
            knopf.action = #selector(farbeGewaehlt(_:))
            addSubview(knopf)
            farbKnoepfe.append((farbe, knopf))
        }

        staerkeWahl.segmentCount = WerkzeugLeiste.staerken.count
        staerkeWahl.segmentStyle = .texturedRounded
        staerkeWahl.trackingMode = .selectOne
        for (index, staerke) in WerkzeugLeiste.staerken.enumerated() {
            staerkeWahl.setImage(strichplaettchen(staerke), forSegment: index)
            staerkeWahl.setWidth(30, forSegment: index)
        }
        staerkeWahl.selectedSegment = 1
        staerkeWahl.target = self
        staerkeWahl.action = #selector(staerkeGewaehlt(_:))
        staerkeWahl.toolTip = "Strichstärke  ([ und ])"
        addSubview(staerkeWahl)

        richteEin(zurueckKnopf, symbol: "arrow.uturn.backward", ersatz: "↶",
                  hinweis: "Rückgängig  (⌘Z)", aktion: #selector(zurueckGedrueckt))
        richteEin(vorKnopf, symbol: "arrow.uturn.forward", ersatz: "↷",
                  hinweis: "Wiederherstellen  (⇧⌘Z)", aktion: #selector(vorGedrueckt))
        richteEin(loeschenKnopf, symbol: "trash", ersatz: "␡",
                  hinweis: "Alle Anmerkungen entfernen", aktion: #selector(loeschenGedrueckt))

        for _ in 0..<3 {
            let strich = NSBox()
            strich.boxType = .separator
            addSubview(strich)
            trenner.append(strich)
        }
    }

    private func richteEin(_ knopf: NSButton, symbol: String, ersatz: String,
                           hinweis: String, aktion: Selector) {
        knopf.bezelStyle = .texturedRounded
        if let bild = NSImage(systemSymbolName: symbol, accessibilityDescription: hinweis) {
            knopf.image = bild
            knopf.imagePosition = .imageOnly
        } else {
            knopf.title = ersatz
        }
        knopf.toolTip = hinweis
        knopf.target = self
        knopf.action = aktion
        addSubview(knopf)
    }

    // MARK: - Plaettchen

    private func farbplaettchen(_ farbe: NSColor) -> NSImage {
        let groesse = NSSize(width: 14, height: 14)
        let bild = NSImage(size: groesse)
        bild.lockFocus()
        farbe.setFill()
        NSBezierPath(ovalIn: NSRect(x: 1, y: 1, width: 12, height: 12)).fill()
        NSColor.black.withAlphaComponent(0.25).setStroke()
        let rand = NSBezierPath(ovalIn: NSRect(x: 1, y: 1, width: 12, height: 12))
        rand.lineWidth = 1
        rand.stroke()
        bild.unlockFocus()
        return bild
    }

    private func strichplaettchen(_ staerke: CGFloat) -> NSImage {
        let groesse = NSSize(width: 20, height: 14)
        let bild = NSImage(size: groesse)
        bild.lockFocus()
        NSColor.labelColor.setStroke()
        let strich = NSBezierPath()
        strich.move(to: NSPoint(x: 2, y: 7))
        strich.line(to: NSPoint(x: 18, y: 7))
        strich.lineWidth = staerke
        strich.lineCapStyle = .round
        strich.stroke()
        bild.unlockFocus()
        bild.isTemplate = true
        return bild
    }

    // MARK: - Aktionen

    @objc private func werkzeugGewaehlt(_ absender: NSButton) {
        guard let eintrag = werkzeugKnoepfe.first(where: { $0.1 === absender }) else { return }
        beiWerkzeug?(eintrag.0)
    }

    @objc private func farbeGewaehlt(_ absender: NSButton) {
        guard let eintrag = farbKnoepfe.first(where: { $0.1 === absender }) else { return }
        beiFarbe?(eintrag.0)
    }

    @objc private func staerkeGewaehlt(_ absender: NSSegmentedControl) {
        let index = absender.selectedSegment
        guard index >= 0, index < WerkzeugLeiste.staerken.count else { return }
        beiStaerke?(WerkzeugLeiste.staerken[index])
    }

    @objc private func zurueckGedrueckt() { beiZurueck?() }
    @objc private func vorGedrueckt() { beiVor?() }
    @objc private func loeschenGedrueckt() { beiAllesLoeschen?() }

    // MARK: - Stand anzeigen

    func zeige(werkzeug: Werkzeug, stil: Stil, kannZurueck: Bool, kannVor: Bool) {
        for (art, knopf) in werkzeugKnoepfe {
            knopf.state = (art == werkzeug) ? .on : .off
        }
        for (farbe, knopf) in farbKnoepfe {
            knopf.state = (farbe == stil.farbe) ? .on : .off
        }
        if let index = WerkzeugLeiste.staerken.firstIndex(where: { abs($0 - stil.staerke) < 0.01 }) {
            staerkeWahl.selectedSegment = index
        }
        zurueckKnopf.isEnabled = kannZurueck
        vorKnopf.isEnabled = kannVor
    }

    // MARK: - Anordnung

    var mindestbreite: CGFloat {
        let werkzeuge = CGFloat(werkzeugKnoepfe.count) * knopfBreite
        let farben = CGFloat(farbKnoepfe.count) * farbBreite
        let staerke = CGFloat(WerkzeugLeiste.staerken.count) * 30
        let steuerung = 3 * knopfBreite
        return rand * 2 + werkzeuge + farben + staerke + steuerung + gruppenabstand * 4
    }

    override func setFrameSize(_ newSize: NSSize) {
        super.setFrameSize(newSize)
        needsLayout = true
    }

    override func layout() {
        super.layout()
        let mitte = (bounds.height - knopfHoehe) / 2
        var x = rand

        for (index, eintrag) in werkzeugKnoepfe.enumerated() {
            eintrag.1.frame = NSRect(x: x, y: mitte, width: knopfBreite, height: knopfHoehe)
            x += knopfBreite
            // Nach dem Auswahlwerkzeug und nach den Grundformen etwas Luft.
            if index == 0 || index == 7 { x += 6 }
        }

        x += gruppenabstand
        setzeTrenner(0, bei: x - gruppenabstand / 2)

        for eintrag in farbKnoepfe {
            eintrag.1.frame = NSRect(x: x, y: mitte, width: farbBreite, height: knopfHoehe)
            x += farbBreite
        }

        x += gruppenabstand
        setzeTrenner(1, bei: x - gruppenabstand / 2)

        let staerkeBreite = CGFloat(WerkzeugLeiste.staerken.count) * 30
        staerkeWahl.frame = NSRect(x: x, y: mitte, width: staerkeBreite, height: knopfHoehe)
        x += staerkeBreite + gruppenabstand
        setzeTrenner(2, bei: x - gruppenabstand / 2)

        zurueckKnopf.frame = NSRect(x: x, y: mitte, width: knopfBreite, height: knopfHoehe)
        x += knopfBreite
        vorKnopf.frame = NSRect(x: x, y: mitte, width: knopfBreite, height: knopfHoehe)
        x += knopfBreite + 6
        loeschenKnopf.frame = NSRect(x: x, y: mitte, width: knopfBreite, height: knopfHoehe)
    }

    private func setzeTrenner(_ index: Int, bei x: CGFloat) {
        guard index < trenner.count else { return }
        trenner[index].frame = NSRect(x: x, y: 8, width: 1, height: bounds.height - 16)
    }
}
