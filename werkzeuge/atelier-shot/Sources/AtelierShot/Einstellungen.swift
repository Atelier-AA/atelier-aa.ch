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
        static let kuerzelHinweis = "kuerzelHinweisGezeigt"
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

    /// Der Hinweis zu den Apple-Kuerzeln wird nur einmal als Dialog gezeigt,
    /// danach steht er still im Menue.
    var kuerzelHinweisGezeigt: Bool {
        get { vorgaben.bool(forKey: Schluessel.kuerzelHinweis) }
        set { vorgaben.set(newValue, forKey: Schluessel.kuerzelHinweis) }
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

    /// Zuletzt verwendeter Ablageordner.
    var ablageordner: URL? {
        get {
            guard let pfad = vorgaben.string(forKey: Schluessel.ordner) else { return nil }
            return URL(fileURLWithPath: pfad, isDirectory: true)
        }
        set { vorgaben.set(newValue?.path, forKey: Schluessel.ordner) }
    }

    var standardstil: Stil {
        Stil(farbe: standardfarbe, staerke: standardstaerke)
    }
}
