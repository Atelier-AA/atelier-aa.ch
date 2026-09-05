import AppKit

/// Zeichnet Anmerkungen und beantwortet, ob ein Klick eine Anmerkung trifft.
///
/// Alle Koordinaten sind Bildschirmpunkte im Bildraum, Ursprung unten links —
/// dieselbe Rechnung wie in einem gewoehnlichen AppKit-Zeichenkontext. Dadurch
/// laesst sich derselbe Code fuer die Anzeige im Fenster und fuer den Export
/// in die fertige Datei verwenden.
enum Zeichner {

    // MARK: - Textmasse

    static func schrift(_ anmerkung: Anmerkung) -> [NSAttributedString.Key: Any] {
        [
            .font: NSFont.systemFont(ofSize: anmerkung.stil.schriftgroesse, weight: .semibold),
            .foregroundColor: anmerkung.stil.farbe.farbe
        ]
    }

    static func anzeigetext(_ anmerkung: Anmerkung) -> String {
        let inhalt = anmerkung.text.trimmingCharacters(in: .whitespacesAndNewlines)
        return inhalt.isEmpty ? "Text …" : anmerkung.text
    }

    static func textGroesse(_ anmerkung: Anmerkung) -> CGSize {
        let zeichenkette = NSAttributedString(string: anzeigetext(anmerkung),
                                              attributes: schrift(anmerkung))
        var groesse = zeichenkette.size()
        groesse.width = max(groesse.width, 20)
        groesse.height = max(groesse.height, anmerkung.stil.schriftgroesse + 4)
        return groesse
    }

    /// Rechteck des freien Textes — Ankerpunkt ist die linke untere Ecke.
    static func textRechteck(_ anmerkung: Anmerkung) -> CGRect {
        let groesse = textGroesse(anmerkung)
        return CGRect(x: anmerkung.start.x, y: anmerkung.start.y,
                      width: groesse.width + 10, height: groesse.height + 6)
    }

    /// Kasten der Textfahne. `start` ist die Spitze, `ende` die Lage des Kastens.
    static func fahnenRechteck(_ anmerkung: Anmerkung) -> CGRect {
        let groesse = textGroesse(anmerkung)
        return CGRect(x: anmerkung.ende.x, y: anmerkung.ende.y,
                      width: groesse.width + 16, height: groesse.height + 10)
    }

    static func nummerRadius(_ anmerkung: Anmerkung) -> CGFloat {
        11 + anmerkung.stil.staerke * 1.5
    }

    // MARK: - Zeichnen

    static func zeichne(_ anmerkung: Anmerkung, dokument: Dokument, ausgewaehlt: Bool) {
        let farbe = anmerkung.stil.farbe.farbe
        let staerke = anmerkung.stil.staerke

        switch anmerkung.art {

        case .auswahl:
            break

        case .linie:
            farbe.setStroke()
            let pfad = NSBezierPath()
            pfad.move(to: anmerkung.start)
            pfad.line(to: anmerkung.ende)
            pfad.lineWidth = staerke
            pfad.lineCapStyle = .round
            pfad.stroke()

        case .pfeil:
            zeichnePfeil(von: anmerkung.start, nach: anmerkung.ende,
                         farbe: farbe, staerke: staerke)

        case .rechteck:
            farbe.setStroke()
            let pfad = NSBezierPath(rect: anmerkung.aufgezogenesRechteck)
            pfad.lineWidth = staerke
            pfad.lineJoinStyle = .round
            pfad.stroke()

        case .ellipse:
            farbe.setStroke()
            let pfad = NSBezierPath(ovalIn: anmerkung.aufgezogenesRechteck)
            pfad.lineWidth = staerke
            pfad.stroke()

        case .freihand:
            guard anmerkung.punkte.count > 1 else { break }
            farbe.setStroke()
            let pfad = NSBezierPath()
            pfad.move(to: anmerkung.punkte[0])
            for punkt in anmerkung.punkte.dropFirst() { pfad.line(to: punkt) }
            pfad.lineWidth = staerke
            pfad.lineCapStyle = .round
            pfad.lineJoinStyle = .round
            pfad.stroke()

        case .marker:
            let rechteck = anmerkung.aufgezogenesRechteck
            farbe.withAlphaComponent(0.32).setFill()
            NSBezierPath(rect: rechteck).fill()

        case .wolke:
            farbe.setStroke()
            let pfad = wolkenPfad(anmerkung.aufgezogenesRechteck, bogen: 9 + staerke * 2)
            pfad.lineWidth = staerke
            pfad.lineJoinStyle = .round
            pfad.stroke()

        case .text:
            let rechteck = textRechteck(anmerkung)
            NSColor.white.withAlphaComponent(0.86).setFill()
            NSBezierPath(roundedRect: rechteck, xRadius: 3, yRadius: 3).fill()
            NSAttributedString(string: anzeigetext(anmerkung), attributes: schrift(anmerkung))
                .draw(at: CGPoint(x: rechteck.minX + 5, y: rechteck.minY + 3))

        case .fahne:
            zeichneFahne(anmerkung)

        case .nummer:
            zeichneNummer(anmerkung)

        case .unkenntlich:
            zeichneUnkenntlich(anmerkung, dokument: dokument)
        }

        if ausgewaehlt {
            zeichneAuswahlrahmen(anmerkung)
        }
    }

    // MARK: - Einzelne Formen

    private static func zeichnePfeil(von start: CGPoint, nach ende: CGPoint,
                                     farbe: NSColor, staerke: CGFloat) {
        let laenge = hypot(ende.x - start.x, ende.y - start.y)
        guard laenge > 0.5 else { return }

        let kopflaenge = min(max(11, staerke * 4.5), laenge)
        let kopfbreite = kopflaenge * 0.62
        let richtungX = (ende.x - start.x) / laenge
        let richtungY = (ende.y - start.y) / laenge
        // Schaft endet kurz vor der Spitze, damit die Linie nicht durchsticht.
        let schaftende = CGPoint(x: ende.x - richtungX * kopflaenge * 0.85,
                                 y: ende.y - richtungY * kopflaenge * 0.85)

        farbe.setStroke()
        let schaft = NSBezierPath()
        schaft.move(to: start)
        schaft.line(to: schaftende)
        schaft.lineWidth = staerke
        schaft.lineCapStyle = .round
        schaft.stroke()

        let basis = CGPoint(x: ende.x - richtungX * kopflaenge,
                            y: ende.y - richtungY * kopflaenge)
        let quer = CGPoint(x: -richtungY, y: richtungX)
        farbe.setFill()
        let kopf = NSBezierPath()
        kopf.move(to: ende)
        kopf.line(to: CGPoint(x: basis.x + quer.x * kopfbreite / 2,
                              y: basis.y + quer.y * kopfbreite / 2))
        kopf.line(to: CGPoint(x: basis.x - quer.x * kopfbreite / 2,
                              y: basis.y - quer.y * kopfbreite / 2))
        kopf.close()
        kopf.fill()
    }

    /// Revisionswolke: Bogen an Bogen entlang des Rechtecks, nach aussen gewoelbt.
    static func wolkenPfad(_ rechteck: CGRect, bogen: CGFloat) -> NSBezierPath {
        let pfad = NSBezierPath()
        guard rechteck.width > 1, rechteck.height > 1 else { return pfad }

        // Gegen den Uhrzeigersinn — dann zeigt die Aussenseite nach rechts.
        let ecken = [
            CGPoint(x: rechteck.minX, y: rechteck.minY),
            CGPoint(x: rechteck.maxX, y: rechteck.minY),
            CGPoint(x: rechteck.maxX, y: rechteck.maxY),
            CGPoint(x: rechteck.minX, y: rechteck.maxY)
        ]

        for index in 0..<4 {
            let von = ecken[index]
            let nach = ecken[(index + 1) % 4]
            let laenge = hypot(nach.x - von.x, nach.y - von.y)
            guard laenge > 0.5 else { continue }

            let anzahl = max(1, Int((laenge / max(bogen, 4)).rounded()))
            let schritt = laenge / CGFloat(anzahl)
            let richtungX = (nach.x - von.x) / laenge
            let richtungY = (nach.y - von.y) / laenge
            let winkel = atan2(richtungY, richtungX) * 180 / .pi

            for teil in 0..<anzahl {
                let mitte = CGPoint(
                    x: von.x + richtungX * (CGFloat(teil) + 0.5) * schritt,
                    y: von.y + richtungY * (CGFloat(teil) + 0.5) * schritt
                )
                pfad.appendArc(withCenter: mitte,
                               radius: schritt * 0.56,
                               startAngle: winkel + 195,
                               endAngle: winkel - 15,
                               clockwise: false)
            }
        }
        return pfad
    }

    private static func zeichneFahne(_ anmerkung: Anmerkung) {
        let farbe = anmerkung.stil.farbe.farbe
        let kasten = fahnenRechteck(anmerkung)
        let spitze = anmerkung.start

        // Fuehrungslinie vom Kastenrand zur Spitze.
        let ansatz = CGPoint(x: min(max(spitze.x, kasten.minX + 6), kasten.maxX - 6),
                             y: spitze.y > kasten.midY ? kasten.maxY : kasten.minY)
        farbe.setStroke()
        let linie = NSBezierPath()
        linie.move(to: ansatz)
        linie.line(to: spitze)
        linie.lineWidth = max(1.5, anmerkung.stil.staerke * 0.7)
        linie.stroke()

        // Punkt an der Spitze.
        farbe.setFill()
        let punkt = CGRect(x: spitze.x - 3, y: spitze.y - 3, width: 6, height: 6)
        NSBezierPath(ovalIn: punkt).fill()

        // Kasten.
        NSColor.white.withAlphaComponent(0.94).setFill()
        let rahmen = NSBezierPath(roundedRect: kasten, xRadius: 4, yRadius: 4)
        rahmen.fill()
        farbe.setStroke()
        rahmen.lineWidth = max(1.5, anmerkung.stil.staerke * 0.7)
        rahmen.stroke()

        NSAttributedString(string: anzeigetext(anmerkung), attributes: schrift(anmerkung))
            .draw(at: CGPoint(x: kasten.minX + 8, y: kasten.minY + 5))
    }

    private static func zeichneNummer(_ anmerkung: Anmerkung) {
        let radius = nummerRadius(anmerkung)
        let mitte = anmerkung.start
        let kreis = CGRect(x: mitte.x - radius, y: mitte.y - radius,
                           width: radius * 2, height: radius * 2)

        anmerkung.stil.farbe.farbe.setFill()
        NSBezierPath(ovalIn: kreis).fill()
        NSColor.white.setStroke()
        let rand = NSBezierPath(ovalIn: kreis.insetBy(dx: 1, dy: 1))
        rand.lineWidth = 1.5
        rand.stroke()

        let beschriftung = NSAttributedString(
            string: "\(anmerkung.nummer)",
            attributes: [
                .font: NSFont.systemFont(ofSize: radius * 1.15, weight: .bold),
                .foregroundColor: NSColor.white
            ])
        let groesse = beschriftung.size()
        beschriftung.draw(at: CGPoint(x: mitte.x - groesse.width / 2,
                                      y: mitte.y - groesse.height / 2))
    }

    /// Verpixelt den Bereich wirklich: Ausschnitt klein rechnen und ohne
    /// Glaettung wieder gross zeichnen. Beim Export bleibt davon nichts
    /// Lesbares uebrig — anders als bei einem schwarzen Balken darueber.
    private static func zeichneUnkenntlich(_ anmerkung: Anmerkung, dokument: Dokument) {
        let bereich = anmerkung.aufgezogenesRechteck
        guard bereich.width > 2, bereich.height > 2 else { return }

        let blockgroesse: CGFloat = max(6, anmerkung.stil.staerke * 3)
        let kleinBreite = max(1, (bereich.width / blockgroesse).rounded(.down))
        let kleinHoehe = max(1, (bereich.height / blockgroesse).rounded(.down))

        let klein = NSImage(size: NSSize(width: kleinBreite, height: kleinHoehe))
        klein.lockFocus()
        NSGraphicsContext.current?.imageInterpolation = .medium
        dokument.bild.draw(in: NSRect(x: 0, y: 0, width: kleinBreite, height: kleinHoehe),
                           from: bereich, operation: .copy, fraction: 1)
        klein.unlockFocus()

        NSGraphicsContext.saveGraphicsState()
        NSGraphicsContext.current?.imageInterpolation = .none
        klein.draw(in: bereich, from: .zero, operation: .sourceOver, fraction: 1)
        NSGraphicsContext.restoreGraphicsState()
    }

    private static func zeichneAuswahlrahmen(_ anmerkung: Anmerkung) {
        let rahmen = umfassendesRechteck(anmerkung).insetBy(dx: -5, dy: -5)
        NSColor.controlAccentColor.setStroke()
        let pfad = NSBezierPath(rect: rahmen)
        pfad.lineWidth = 1
        pfad.setLineDash([4, 3], count: 2, phase: 0)
        pfad.stroke()

        for griff in griffe(anmerkung) {
            let kaestchen = CGRect(x: griff.x - 3.5, y: griff.y - 3.5, width: 7, height: 7)
            NSColor.white.setFill()
            NSBezierPath(rect: kaestchen).fill()
            NSColor.controlAccentColor.setStroke()
            let umriss = NSBezierPath(rect: kaestchen)
            umriss.lineWidth = 1
            umriss.stroke()
        }
    }

    /// Punkte, an denen eine ausgewaehlte Anmerkung angefasst werden kann.
    static func griffe(_ anmerkung: Anmerkung) -> [CGPoint] {
        switch anmerkung.art {
        case .freihand, .nummer, .text, .auswahl:
            return []
        default:
            return [anmerkung.start, anmerkung.ende]
        }
    }

    // MARK: - Treffer

    /// Umschliessendes Rechteck einschliesslich gezeichnetem Beiwerk.
    static func umfassendesRechteck(_ anmerkung: Anmerkung) -> CGRect {
        switch anmerkung.art {
        case .text:
            return textRechteck(anmerkung)
        case .fahne:
            return fahnenRechteck(anmerkung).union(
                CGRect(x: anmerkung.start.x - 3, y: anmerkung.start.y - 3, width: 6, height: 6))
        case .nummer:
            let radius = nummerRadius(anmerkung)
            return CGRect(x: anmerkung.start.x - radius, y: anmerkung.start.y - radius,
                          width: radius * 2, height: radius * 2)
        case .wolke:
            return anmerkung.aufgezogenesRechteck.insetBy(dx: -12, dy: -12)
        default:
            return anmerkung.rahmen.insetBy(dx: -anmerkung.stil.staerke,
                                            dy: -anmerkung.stil.staerke)
        }
    }

    static func trifft(_ anmerkung: Anmerkung, punkt: CGPoint) -> Bool {
        let toleranz = max(7, anmerkung.stil.staerke + 4)

        switch anmerkung.art {
        case .auswahl:
            return false

        case .linie, .pfeil:
            return abstand(punkt, zurStrecke: anmerkung.start, anmerkung.ende) <= toleranz

        case .freihand:
            guard anmerkung.punkte.count > 1 else { return false }
            for index in 0..<(anmerkung.punkte.count - 1) {
                if abstand(punkt, zurStrecke: anmerkung.punkte[index],
                           anmerkung.punkte[index + 1]) <= toleranz {
                    return true
                }
            }
            return false

        case .nummer:
            let radius = nummerRadius(anmerkung)
            return hypot(punkt.x - anmerkung.start.x, punkt.y - anmerkung.start.y) <= radius + 2

        default:
            return umfassendesRechteck(anmerkung).contains(punkt)
        }
    }

    static func abstand(_ punkt: CGPoint, zurStrecke a: CGPoint, _ b: CGPoint) -> CGFloat {
        let dx = b.x - a.x
        let dy = b.y - a.y
        let laengeQuadrat = dx * dx + dy * dy
        guard laengeQuadrat > 0.0001 else {
            return hypot(punkt.x - a.x, punkt.y - a.y)
        }
        var anteil = ((punkt.x - a.x) * dx + (punkt.y - a.y) * dy) / laengeQuadrat
        anteil = min(max(anteil, 0), 1)
        let naechster = CGPoint(x: a.x + anteil * dx, y: a.y + anteil * dy)
        return hypot(punkt.x - naechster.x, punkt.y - naechster.y)
    }
}
