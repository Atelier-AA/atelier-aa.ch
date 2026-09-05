import AppKit

/// Wenige Einstellungen, bewusst ohne eigenes Fenster — sie stehen im
/// Menue der Menueleiste und werden in den Benutzervorgaben abgelegt.
final class Einstellungen {

    static let geteilte = Einstellungen()

    private let vorgaben = UserDefaults.standard

    private enum Schluessel {
        static let farbe = "standardfarbe"
        static let staerke = "standardstaerke"
        static let werkzeug = "standardwerkzeug"
        static let autoKopieren = "automatischKopieren"
        static let ordner = "ablageordner"
        static let anmelden = "beimAnmeldenStarten"
        static let beimSchliessen = "beimSchliessenSichern"
    }

    /// Fenster zu heisst gesichert — ohne Dialog, ohne Ort waehlen.
    var beimSchliessenSichern: Bool {
        get {
            if vorgaben.object(forKey: Schluessel.beimSchliessen) == nil { return true }
            return vorgaben.bool(forKey: Schluessel.beimSchliessen)
        }
        set { vorgaben.set(newValue, forKey: Schluessel.beimSchliessen) }
    }

    /// Beim Anmelden starten — Vorgabe ja, denn das Programm soll wie das
    /// Apple-Werkzeug einfach da sein.
    var beimAnmeldenStarten: Bool {
        get {
            if vorgaben.object(forKey: Schluessel.anmelden) == nil { return true }
            return vorgaben.bool(forKey: Schluessel.anmelden)
        }
        set { vorgaben.set(newValue, forKey: Schluessel.anmelden) }
    }


    private init() {}

    var standardfarbe: Stiftfarbe {
        get {
            guard let roh = vorgaben.string(forKey: Schluessel.farbe),
                  let farbe = Stiftfarbe(rawValue: roh) else { return .rot }
            return farbe
        }
        set { vorgaben.set(newValue.rawValue, forKey: Schluessel.farbe) }
    }

    var standardstaerke: CGFloat {
        get {
            let wert = vorgaben.double(forKey: Schluessel.staerke)
            return wert > 0 ? CGFloat(wert) : 3
        }
        set { vorgaben.set(Double(newValue), forKey: Schluessel.staerke) }
    }

    var standardwerkzeug: Werkzeug {
        get {
            guard let roh = vorgaben.string(forKey: Schluessel.werkzeug),
                  let werkzeug = Werkzeug(rawValue: roh) else { return .pfeil }
            return werkzeug
        }
        set { vorgaben.set(newValue.rawValue, forKey: Schluessel.werkzeug) }
    }

    /// Aufnahme sofort in die Zwischenablage legen, zusaetzlich zum Fenster.
    var automatischKopieren: Bool {
        get { vorgaben.bool(forKey: Schluessel.autoKopieren) }
        set { vorgaben.set(newValue, forKey: Schluessel.autoKopieren) }
    }

    /// Ablageordner — Vorgabe ist der Schreibtisch, wie beim Apple-Werkzeug.
    var ablageordner: URL {
        get {
            if let pfad = vorgaben.string(forKey: Schluessel.ordner) {
                return URL(fileURLWithPath: pfad, isDirectory: true)
            }
            return Einstellungen.schreibtisch
        }
        set { vorgaben.set(newValue.path, forKey: Schluessel.ordner) }
    }

    static var schreibtisch: URL {
        FileManager.default.urls(for: .desktopDirectory, in: .userDomainMask).first
            ?? URL(fileURLWithPath: NSHomeDirectory()).appendingPathComponent("Desktop", isDirectory: true)
    }

    var standardstil: Stil {
        Stil(farbe: standardfarbe, staerke: standardstaerke)
    }
}
