import AppKit

// Einstiegspunkt. Bewusst ohne SwiftUI-Programmgeruest, damit der Ablauf
// beim Start eindeutig bleibt: Programm anlegen, Delegierten setzen, starten.

let programm = NSApplication.shared
let delegierter = AppDelegate()
programm.delegate = delegierter
// Im Hintergrund wie das Apple-Werkzeug: kein Dock-Symbol, nur die Menueleiste.
// Sobald ein Fenster offen ist, schaltet der AppDelegate auf .regular um.
programm.setActivationPolicy(.accessory)
programm.run()
