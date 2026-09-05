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

    /// `⌃⇧4` — bewusst mit ctrl statt cmd, damit Apples eigene Kuerzel
    /// (`⌘⇧3`, `⌘⇧4`, `⌘⇧5`) unangetastet bleiben.
    static let ausschnittTaste = kVK_ANSI_4
    static let vollbildTaste = kVK_ANSI_3
    static let fensterTaste = kVK_ANSI_5
    static let zusatztasten = controlKey | shiftKey
}
