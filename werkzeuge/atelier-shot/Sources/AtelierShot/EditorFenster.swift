import AppKit

/// Haelt die Leinwand mittig, wenn das Fenster groesser ist als das Bild.
final class MittigerAusschnitt: NSClipView {
    override func constrainBoundsRect(_ proposedBounds: NSRect) -> NSRect {
        var bereich = super.constrainBoundsRect(proposedBounds)
        guard let inhalt = documentView else { return bereich }
        if bereich.width > inhalt.frame.width {
            bereich.origin.x = (inhalt.frame.width - bereich.width) / 2
        }
        if bereich.height > inhalt.frame.height {
            bereich.origin.y = (inhalt.frame.height - bereich.height) / 2
        }
        return bereich
    }
}

/// Fensterinhalt: Werkzeugleiste oben, Bild in der Mitte, Fussleiste unten.
final class EditorInhalt: NSView {

    static let leistenhoehe: CGFloat = 42
    static let fusshoehe: CGFloat = 34

    var leiste: NSView?
    var mitte: NSView?
    var fuss: NSView?

    override func setFrameSize(_ newSize: NSSize) {
        super.setFrameSize(newSize)
        needsLayout = true
    }

    override func resizeSubviews(withOldSize oldSize: NSSize) {
        super.resizeSubviews(withOldSize: oldSize)
        layout()
    }

    override func layout() {
        super.layout()
        let breite = bounds.width
        leiste?.frame = NSRect(x: 0, y: bounds.height - EditorInhalt.leistenhoehe,
                               width: breite, height: EditorInhalt.leistenhoehe)
        fuss?.frame = NSRect(x: 0, y: 0, width: breite, height: EditorInhalt.fusshoehe)
        mitte?.frame = NSRect(x: 0, y: EditorInhalt.fusshoehe, width: breite,
                              height: max(0, bounds.height - EditorInhalt.leistenhoehe - EditorInhalt.fusshoehe))
    }
}

/// Das Vorschaufenster — der Kern des Programms.
///
/// Es oeffnet in Originalgroesse: 100 % heisst genau so gross wie der
/// Ausschnitt vorher auf dem Bildschirm war. Nur wenn das Bild nicht auf den
/// Schirm passt, wird einmalig verkleinert — und die Zoomstufe steht dann
/// sichtbar in der Fussleiste.
final class EditorFenster: NSWindowController, NSWindowDelegate, LeinwandDelegat, NSMenuItemValidation {

    let dokument: Dokument
    var beiSchliessen: ((EditorFenster) -> Void)?

    /// Aenderungsstand des Dokuments beim letzten Sichern — nil heisst: noch nie.
    private var gesichertBeiStand: Int?

    private let leinwand: LeinwandView
    private let leiste = WerkzeugLeiste(frame: .zero)
    private let bildlauf = NSScrollView()
    private let fuss = NSView()
    private let zoomAnzeige = NSTextField(labelWithString: "")
    private let meldung = NSTextField(labelWithString: "")
    private let ziehFeld = ZiehFeld()

    init(aufnahme: Aufnahme) {
        dokument = Dokument(bild: aufnahme.bild,
                            punktGroesse: aufnahme.punktGroesse,
                            pixelGroesse: aufnahme.pixelGroesse)
        leinwand = LeinwandView(dokument: dokument)

        // Zoomstufe und Fenstergroesse bestimmen.
        let schirm = NSScreen.screens.first(where: { $0.frame.contains(aufnahme.mausort) })
            ?? NSScreen.main
        let verfuegbar = schirm?.visibleFrame ?? NSRect(x: 0, y: 0, width: 1280, height: 800)
        let maxBreite = verfuegbar.width - 60
        let maxHoehe = verfuegbar.height - 60 - EditorInhalt.leistenhoehe - EditorInhalt.fusshoehe
        let anfangsZoom = min(1, min(maxBreite / max(aufnahme.punktGroesse.width, 1),
                                     maxHoehe / max(aufnahme.punktGroesse.height, 1)))

        let inhaltsbreite = max(aufnahme.punktGroesse.width * anfangsZoom, 520)
        let inhaltshoehe = aufnahme.punktGroesse.height * anfangsZoom
            + EditorInhalt.leistenhoehe + EditorInhalt.fusshoehe

        let fenster = NSWindow(
            contentRect: NSRect(x: 0, y: 0, width: inhaltsbreite, height: inhaltshoehe),
            styleMask: [.titled, .closable, .miniaturizable, .resizable],
            backing: .buffered,
            defer: false)
        fenster.title = "Atelier Shot"
        fenster.minSize = NSSize(width: 520, height: 220)
        fenster.isReleasedWhenClosed = false

        super.init(window: fenster)

        leinwand.zoom = anfangsZoom
        leinwand.delegat = self
        leinwand.stil = Einstellungen.geteilte.standardstil
        leinwand.werkzeug = Einstellungen.geteilte.standardwerkzeug

        baueOberflaeche()
        fenster.delegate = self
        fenster.title = fenstertitel()

        // Fenster dort zeigen, wo aufgenommen wurde.
        var ursprung = CGPoint(x: aufnahme.mausort.x - inhaltsbreite / 2,
                               y: aufnahme.mausort.y - inhaltshoehe / 2)
        ursprung.x = min(max(ursprung.x, verfuegbar.minX + 10), verfuegbar.maxX - inhaltsbreite - 10)
        ursprung.y = min(max(ursprung.y, verfuegbar.minY + 10), verfuegbar.maxY - inhaltshoehe - 10)
        fenster.setFrameOrigin(ursprung)

        zeigeStand()
    }

    required init?(coder: NSCoder) { fatalError("nicht verwendet") }

    private func fenstertitel() -> String {
        let punkte = "\(Int(dokument.punktGroesse.width.rounded())) × \(Int(dokument.punktGroesse.height.rounded())) Punkte"
        let pixel = "\(Int(dokument.pixelGroesse.width.rounded())) × \(Int(dokument.pixelGroesse.height.rounded())) Bildpunkte"
        return dokument.bildpunktfaktor > 1.5
            ? "Atelier Shot — \(punkte) · \(pixel)"
            : "Atelier Shot — \(pixel)"
    }

    // MARK: - Aufbau

    private func baueOberflaeche() {
        guard let fenster = window else { return }

        let inhaltsgroesse = fenster.contentRect(forFrameRect: fenster.frame).size
        let inhalt = EditorInhalt(frame: NSRect(origin: .zero, size: inhaltsgroesse))
        inhalt.autoresizingMask = [.width, .height]
        // Die Fussleiste ordnet ihre Knoepfe von rechts an — dafuer muss sie
        // ihre Breite schon kennen, bevor sie gefuellt wird.
        fuss.frame = NSRect(x: 0, y: 0, width: inhaltsgroesse.width, height: EditorInhalt.fusshoehe)

        // Mitte
        bildlauf.contentView = MittigerAusschnitt()
        bildlauf.documentView = leinwand
        bildlauf.hasVerticalScroller = true
        bildlauf.hasHorizontalScroller = true
        bildlauf.autohidesScrollers = true
        bildlauf.borderType = .noBorder
        bildlauf.drawsBackground = true
        bildlauf.backgroundColor = .underPageBackgroundColor

        // Werkzeugleiste
        leiste.beiWerkzeug = { [weak self] werkzeug in
            self?.leinwand.werkzeug = werkzeug
            Einstellungen.geteilte.standardwerkzeug = werkzeug
        }
        leiste.beiFarbe = { [weak self] farbe in
            self?.leinwand.stil.farbe = farbe
            Einstellungen.geteilte.standardfarbe = farbe
        }
        leiste.beiStaerke = { [weak self] staerke in
            self?.leinwand.stil.staerke = staerke
            Einstellungen.geteilte.standardstaerke = staerke
        }
        leiste.beiZurueck = { [weak self] in self?.leinwand.zurueck() }
        leiste.beiVor = { [weak self] in self?.leinwand.vor() }
        leiste.beiAllesLoeschen = { [weak self] in self?.leinwand.alleEntfernen() }

        baueFussleiste()

        inhalt.addSubview(leiste)
        inhalt.addSubview(bildlauf)
        inhalt.addSubview(fuss)
        inhalt.leiste = leiste
        inhalt.mitte = bildlauf
        inhalt.fuss = fuss

        fenster.contentView = inhalt
        fenster.minSize = NSSize(width: max(520, leiste.mindestbreite), height: 220)
        fenster.makeFirstResponder(leinwand)
    }

    private func baueFussleiste() {
        fuss.wantsLayer = true

        let trenner = NSBox()
        trenner.boxType = .separator
        trenner.frame = NSRect(x: 0, y: EditorInhalt.fusshoehe - 1, width: 2000, height: 1)
        trenner.autoresizingMask = [.width]
        fuss.addSubview(trenner)

        zoomAnzeige.font = .systemFont(ofSize: 11)
        zoomAnzeige.textColor = .secondaryLabelColor
        zoomAnzeige.frame = NSRect(x: 12, y: 9, width: 260, height: 16)
        fuss.addSubview(zoomAnzeige)

        meldung.font = .systemFont(ofSize: 11, weight: .medium)
        meldung.textColor = .secondaryLabelColor
        meldung.alignment = .center
        meldung.frame = NSRect(x: 280, y: 9, width: 220, height: 16)
        meldung.autoresizingMask = [.width]
        fuss.addSubview(meldung)

        let originalKnopf = NSButton(title: "100 %", target: self,
                                     action: #selector(aufOriginalgroesse(_:)))
        let einpassenKnopf = NSButton(title: "Einpassen", target: self,
                                      action: #selector(einpassen(_:)))
        let kopierenKnopf = NSButton(title: "Kopieren", target: self,
                                     action: #selector(kopieren(_:)))
        let sichernKnopf = NSButton(title: "Sichern …", target: self,
                                    action: #selector(sichern(_:)))
        for knopf in [originalKnopf, einpassenKnopf, kopierenKnopf, sichernKnopf] {
            knopf.bezelStyle = .rounded
            knopf.autoresizingMask = [.minXMargin]
            fuss.addSubview(knopf)
        }

        ziehFeld.dokumentGeber = { [weak self] in self?.dokument }
        ziehFeld.toolTip = "Bild in ein anderes Programm ziehen"
        ziehFeld.autoresizingMask = [.minXMargin]
        fuss.addSubview(ziehFeld)

        // Anordnung von rechts nach links.
        let breite = fuss.bounds.width
        var x = breite - 12
        for knopf in [sichernKnopf, kopierenKnopf] {
            let groesse: CGFloat = 92
            x -= groesse
            knopf.frame = NSRect(x: x, y: 5, width: groesse, height: 24)
            x -= 6
        }
        x -= 10
        ziehFeld.frame = NSRect(x: x - 34, y: 5, width: 34, height: 24)
        x -= 44
        for knopf in [einpassenKnopf, originalKnopf] {
            let groesse: CGFloat = 78
            x -= groesse
            knopf.frame = NSRect(x: x, y: 5, width: groesse, height: 24)
            x -= 6
        }
    }

    // MARK: - Stand anzeigen

    func leinwandGeaendert(_ leinwand: LeinwandView) {
        zeigeStand()
    }

    private func zeigeStand() {
        leiste.zeige(werkzeug: leinwand.werkzeug,
                     stil: leinwand.stil,
                     kannZurueck: dokument.kannZurueck,
                     kannVor: dokument.kannVor)

        let prozent = Int((leinwand.zoom * 100).rounded())
        var text = "\(prozent) %"
        if prozent != 100 {
            text += "  ·  nicht Originalgrösse (⌘0)"
        } else {
            text += "  ·  Originalgrösse"
        }
        text += "  ·  \(dokument.anmerkungen.count) Anmerkungen"
        zoomAnzeige.stringValue = text
    }

    private func melde(_ text: String) {
        meldung.stringValue = text
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) { [weak self] in
            if self?.meldung.stringValue == text { self?.meldung.stringValue = "" }
        }
    }

    // MARK: - Befehle

    @objc func kopieren(_ absender: Any?) {
        leinwand.beendeTextbearbeitung()
        Ausgabe.inZwischenablage(dokument)
        melde("In die Zwischenablage kopiert")
    }

    @objc func sichern(_ absender: Any?) {
        leinwand.beendeTextbearbeitung()
        if let ort = Ausgabe.sichernMitDialog(dokument, fenster: window) {
            gesichertBeiStand = dokument.aenderungsstand
            melde("Gesichert: \(ort.lastPathComponent)")
        }
    }

    @objc func sichernInOrdner(_ absender: Any?) {
        leinwand.beendeTextbearbeitung()
        if let ort = Ausgabe.sichernInAblageordner(dokument) {
            gesichertBeiStand = dokument.aenderungsstand
            melde("Gesichert: \(ort.lastPathComponent)")
        }
    }

    /// Fenster zu heisst gesichert — ausser es wurde seit der letzten
    /// Aenderung schon von Hand gesichert.
    private func beimSchliessenSichern() {
        guard Einstellungen.geteilte.beimSchliessenSichern else { return }
        guard gesichertBeiStand != dokument.aenderungsstand else { return }
        leinwand.beendeTextbearbeitung()
        if Ausgabe.sichernInAblageordner(dokument, leise: true) != nil {
            gesichertBeiStand = dokument.aenderungsstand
        }
    }

    @objc func listeKopieren(_ absender: Any?) {
        leinwand.beendeTextbearbeitung()
        let liste = dokument.anmerkungsliste()
        guard !liste.isEmpty else {
            melde("Keine Nummern oder Texte vorhanden")
            return
        }
        Ausgabe.listeInZwischenablage(dokument)
        melde("Anmerkungsliste kopiert")
    }

    @objc func hintergrundEntfernen(_ absender: Any?) {
        leinwand.beendeTextbearbeitung()
        guard Freistellen.verfuegbar else {
            melde("Braucht macOS 14 oder neuer")
            return
        }
        melde("Hintergrund wird entfernt …")
        Freistellen.freistellen(dokument) { [weak self] ergebnis in
            guard let self else { return }
            if let ergebnis {
                self.dokument.setzeBild(ergebnis)
                self.leinwand.needsDisplay = true
                self.melde("Hintergrund entfernt — ⌘⌥Z stellt das Original wieder her")
            } else {
                self.melde("Kein Motiv erkannt")
            }
        }
    }

    @objc func originalWiederherstellen(_ absender: Any?) {
        guard dokument.istFreigestellt else { return }
        dokument.setzeBild(dokument.originalbild)
        leinwand.needsDisplay = true
        melde("Original wiederhergestellt")
    }

    @objc func rueckgaengigAktion(_ absender: Any?) { leinwand.zurueck() }
    @objc func wiederherstellenAktion(_ absender: Any?) { leinwand.vor() }
    @objc func alleAnmerkungenEntfernen(_ absender: Any?) { leinwand.alleEntfernen() }

    @objc func aufOriginalgroesse(_ absender: Any?) {
        leinwand.zoom = 1
    }

    @objc func einpassen(_ absender: Any?) {
        let sichtbar = bildlauf.contentView.bounds.size
        let breite = sichtbar.width / max(dokument.punktGroesse.width, 1)
        let hoehe = sichtbar.height / max(dokument.punktGroesse.height, 1)
        leinwand.zoom = max(0.1, min(1, min(breite, hoehe)))
    }

    @objc func werkzeugAusMenue(_ absender: NSMenuItem) {
        guard let roh = absender.representedObject as? String,
              let werkzeug = Werkzeug(rawValue: roh) else { return }
        leinwand.werkzeug = werkzeug
    }

    func validateMenuItem(_ menuItem: NSMenuItem) -> Bool {
        switch menuItem.action {
        case #selector(rueckgaengigAktion(_:)):
            return dokument.kannZurueck
        case #selector(wiederherstellenAktion(_:)):
            return dokument.kannVor
        case #selector(listeKopieren(_:)):
            return !dokument.anmerkungsliste().isEmpty
        case #selector(hintergrundEntfernen(_:)):
            return Freistellen.verfuegbar && !dokument.istFreigestellt
        case #selector(originalWiederherstellen(_:)):
            return dokument.istFreigestellt
        case #selector(werkzeugAusMenue(_:)):
            if let roh = menuItem.representedObject as? String {
                menuItem.state = (roh == leinwand.werkzeug.rawValue) ? .on : .off
            }
            return true
        default:
            return true
        }
    }

    // MARK: - Fenster

    func windowWillClose(_ notification: Notification) {
        beimSchliessenSichern()
        beiSchliessen?(self)
    }

    func zeige() {
        showWindow(nil)
        window?.makeKeyAndOrderFront(nil)
        window?.makeFirstResponder(leinwand)
    }
}
