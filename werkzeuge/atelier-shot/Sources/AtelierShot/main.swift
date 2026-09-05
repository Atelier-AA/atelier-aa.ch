import AppKit

// Einstiegspunkt. Bewusst ohne SwiftUI-Programmgeruest, damit der Ablauf
// beim Start eindeutig bleibt: Programm anlegen, Delegierten setzen, starten.

let programm = NSApplication.shared
let delegierter = AppDelegate()
programm.delegate = delegierter
programm.setActivationPolicy(.regular)
programm.run()
