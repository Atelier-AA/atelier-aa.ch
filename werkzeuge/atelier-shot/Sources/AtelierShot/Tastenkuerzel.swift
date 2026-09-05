import AppKit
import Carbon.HIToolbox

/// Globale Tastenkuerzel — sie wirken auch, wenn ein anderes Programm vorne ist.
///
/// Bewusst ueber Carbon `RegisterEventHotKey`: das ist der einzige Weg, der
/// **keine** Zusatzberechtigung verlangt. Der naheliegende
/// `NSEvent.addGlobalMonitorForEvents` wuerde die Berechtigung
/// "Bedienungshilfen" erfordern — dafuer gibt es hier keinen Grund.
final class Tastenkuerzel {

    private static var aktionen: [UInt32: () -> Void] = [:]
    private static var naechsteKennung: UInt32 = 1
    private static var handlerInstalliert = false

    private var verweis: EventHotKeyRef?
    private let kennung: UInt32

    /// Legt ein Kuerzel an. Gibt `nil` zurueck, wenn die Tastenkombination
    /// bereits von einem anderen Programm belegt ist.
    init?(taste: Int, zusatztasten: Int, aktion: @escaping () -> Void) {
        Tastenkuerzel.installiereHandler()

        kennung = Tastenkuerzel.naechsteKennung
        Tastenkuerzel.naechsteKennung += 1

        let kennzeichen = EventHotKeyID(signature: OSType(0x41415348), id: kennung) // "AASH"
        let ergebnis = RegisterEventHotKey(UInt32(taste),
                                           UInt32(zusatztasten),
                                           kennzeichen,
                                           GetApplicationEventTarget(),
                                           0,
                                           &verweis)
        guard ergebnis == noErr, verweis != nil else { return nil }
        Tastenkuerzel.aktionen[kennung] = aktion
    }

    deinit {
        if let verweis {
            UnregisterEventHotKey(verweis)
        }
        Tastenkuerzel.aktionen[kennung] = nil
    }

    private static func installiereHandler() {
        guard !handlerInstalliert else { return }
        handlerInstalliert = true

        var art = EventTypeSpec(eventClass: OSType(kEventClassKeyboard),
                                eventKind: UInt32(kEventHotKeyPressed))

        InstallEventHandler(GetApplicationEventTarget(), { (_, ereignis, _) -> OSStatus in
            guard let ereignis else { return OSStatus(eventNotHandledErr) }
            var kennzeichen = EventHotKeyID()
            let status = GetEventParameter(ereignis,
                                           EventParamName(kEventParamDirectObject),
                                           EventParamType(typeEventHotKeyID),
                                           nil,
                                           // numericCast statt eines festen Typnamens:
                                           // Carbons "ByteCount" ist in Swift nicht sichtbar.
                                           numericCast(MemoryLayout<EventHotKeyID>.size),
                                           nil,
                                           &kennzeichen)
            guard status == noErr else { return status }
            if let aktion = Tastenkuerzel.aktionen[kennzeichen.id] {
                DispatchQueue.main.async { aktion() }
            }
            return noErr
        }, 1, &art, nil, nil)
    }

    // MARK: - Die Kuerzel des Programms

    /// Atelier Shot ersetzt das Apple-Werkzeug und uebernimmt dessen Kuerzel:
    /// `⌘⇧3` Bildschirm, `⌘⇧4` Ausschnitt, `⌘⇧5` Fenster. Damit sie bei uns
    /// ankommen, muessen Apples eigene in den Systemeinstellungen abgeschaltet
    /// sein — sonst faengt das System sie vorher ab. Bis dahin gelten die
    /// Ersatzkuerzel mit ctrl.
    static let ausschnittTaste = kVK_ANSI_4
    static let vollbildTaste = kVK_ANSI_3
    static let fensterTaste = kVK_ANSI_5
    static let zusatztasten = cmdKey | shiftKey
    static let ersatzZusatztasten = controlKey | shiftKey

    // MARK: - Sind Apples Kuerzel noch aktiv?

    /// Liest die Systemeinstellung fuer die Bildschirmfoto-Kuerzel.
    /// Kennungen: 28/29 = ⌘⇧3, 30/31 = ⌘⇧4, 184 = ⌘⇧5.
    /// Fehlt ein Eintrag, ist das Kuerzel bei Apple standardmaessig aktiv.
    static var appleKuerzelNochAktiv: Bool {
        guard let vorgaben = UserDefaults(suiteName: "com.apple.symbolichotkeys"),
              let alle = vorgaben.dictionary(forKey: "AppleSymbolicHotKeys") else {
            return true
        }
        for kennung in ["28", "29", "30", "31", "184"] {
            if let eintrag = alle[kennung] as? [String: Any],
               let aktiv = eintrag["enabled"] as? Bool, aktiv == false {
                continue
            }
            return true
        }
        return false
    }

    /// Oeffnet die Systemeinstellungen bei den Tastaturkurzbefehlen.
    static func oeffneTastaturEinstellungen() {
        let ziel = "x-apple.systempreferences:com.apple.Keyboard-Settings.extension?Shortcuts"
        if let adresse = URL(string: ziel) {
            NSWorkspace.shared.open(adresse)
        }
    }
}
