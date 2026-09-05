// Zeichnet das Programmsymbol und legt es als PNG-Satz ab.
// Wird von bauen.sh aufgerufen; schlaegt es fehl, wird ohne Symbol gebaut.
//
// Aufruf:  swift Ressourcen/symbol.swift <zielordner>

import AppKit

// Genau die Kantenlaengen, die `iconutil` in einem .iconset erwartet.
let groessen = [16, 32, 128, 256, 512]

let zielordner = CommandLine.arguments.count > 1
    ? CommandLine.arguments[1]
    : FileManager.default.currentDirectoryPath

func zeichne(_ kante: Int) -> Data? {
    let seite = CGFloat(kante)
    let bild = NSImage(size: NSSize(width: seite, height: seite))
    bild.lockFocus()

    // Hintergrund: heller Papierton mit weicher Rundung.
    let flaeche = NSRect(x: seite * 0.06, y: seite * 0.06,
                         width: seite * 0.88, height: seite * 0.88)
    NSColor(srgbRed: 0.97, green: 0.96, blue: 0.94, alpha: 1).setFill()
    NSBezierPath(roundedRect: flaeche, xRadius: seite * 0.22, yRadius: seite * 0.22).fill()

    // Angedeuteter Planausschnitt: zwei feine graue Linien.
    NSColor(srgbRed: 0.72, green: 0.71, blue: 0.68, alpha: 1).setStroke()
    let raster = NSBezierPath()
    raster.move(to: NSPoint(x: seite * 0.20, y: seite * 0.34))
    raster.line(to: NSPoint(x: seite * 0.80, y: seite * 0.34))
    raster.move(to: NSPoint(x: seite * 0.38, y: seite * 0.18))
    raster.line(to: NSPoint(x: seite * 0.38, y: seite * 0.78))
    raster.lineWidth = max(1, seite * 0.025)
    raster.stroke()

    // Der rote Vermerk darueber.
    NSColor(srgbRed: 0.85, green: 0.11, blue: 0.11, alpha: 1).setStroke()
    let vermerk = NSBezierPath()
    vermerk.move(to: NSPoint(x: seite * 0.26, y: seite * 0.60))
    vermerk.line(to: NSPoint(x: seite * 0.66, y: seite * 0.60))
    vermerk.lineWidth = max(1, seite * 0.075)
    vermerk.lineCapStyle = .round
    vermerk.stroke()

    NSColor(srgbRed: 0.85, green: 0.11, blue: 0.11, alpha: 1).setFill()
    let spitze = NSBezierPath()
    spitze.move(to: NSPoint(x: seite * 0.82, y: seite * 0.60))
    spitze.line(to: NSPoint(x: seite * 0.62, y: seite * 0.71))
    spitze.line(to: NSPoint(x: seite * 0.62, y: seite * 0.49))
    spitze.close()
    spitze.fill()

    bild.unlockFocus()

    guard let daten = bild.tiffRepresentation,
          let darstellung = NSBitmapImageRep(data: daten) else { return nil }
    darstellung.size = NSSize(width: seite, height: seite)
    return darstellung.representation(using: .png, properties: [:])
}

for kante in groessen {
    let ordner = URL(fileURLWithPath: zielordner)

    if let daten = zeichne(kante) {
        try? daten.write(to: ordner.appendingPathComponent("icon_\(kante)x\(kante).png"))
    }
    // Dieselbe Kantenlaenge in doppelter Aufloesung — Name nach Apples Vorgabe.
    if let daten = zeichne(kante * 2) {
        try? daten.write(to: ordner.appendingPathComponent("icon_\(kante)x\(kante)@2x.png"))
    }
}
