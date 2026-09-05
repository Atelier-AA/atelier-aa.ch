import AppKit
import Carbon.HIToolbox
import ServiceManagement

final class AppDelegate: NSObject, NSApplicationDelegate {

    private var statusEintrag: NSStatusItem?
    private var offeneFenster: [EditorFenster] = []
    private var kuerzel: [Tastenkuerzel] = []
    private var aufnahmeLaeuft = false
    private var kuerzelFehlgeschlagen = false

    private var anmeldenEintrag: NSMenuItem?
    private var ordnerEintrag: NSMenuItem?

    // MARK: - Start

    func applicationDidFinishLaunching(_ benachrichtigung: Notification) {
        baueHauptmenue()
        registriereKuerzel()        // vor dem Menue: es zeigt an, wenn ein Kürzel belegt ist
        baueStatusEintrag()
        richteAnmeldestartEin()

        if !Bildschirmaufnahme.werkzeugVorhanden {
            Ausgabe.zeigeFehler(
                "Bildschirmaufnahme nicht verfügbar",
                text: "Das eingebaute Werkzeug \(Bildschirmaufnahme.werkzeug) wurde nicht gefunden. "
                    + "Ohne dieses Werkzeug kann Atelier Shot keine Aufnahme machen.")
        }
    }

    /// Wird nach dem Anmelden vom System oder von Hand aufgerufen — beides
    /// landet hier. Das Programm bleibt still im Hintergrund.
    func applicationShouldHandleReopen(_ programm: NSApplication, hasVisibleWindows: Bool) -> Bool {
        false
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ programm: NSApplication) -> Bool {
        false        // Das Programm lebt in der Menueleiste weiter.
    }

    func applicationSupportsSecureRestorableState(_ programm: NSApplication) -> Bool {
        true
    }

    // MARK: - Sichtbarkeit: Dock-Symbol nur, solange ein Fenster offen ist

    private func zeigeAlsProgramm() {
        if NSApp.activationPolicy() != .regular {
            NSApp.setActivationPolicy(.regular)
        }
    }

    private func verschwindeInDenHintergrund() {
        guard offeneFenster.isEmpty else { return }
        NSApp.setActivationPolicy(.accessory)
    }

    // MARK: - Aufnahme

    @objc func aufnahmeAusschnitt(_ absender: Any?) { starteAufnahme(.ausschnitt) }
    @objc func aufnahmeVollbild(_ absender: Any?) { starteAufnahme(.vollbild) }
    @objc func aufnahmeFenster(_ absender: Any?) { starteAufnahme(.fenster) }

    private func starteAufnahme(_ art: Aufnahmeart) {
        guard !aufnahmeLaeuft else { return }

        // Vorher pruefen, ob macOS die Aufnahme ueberhaupt zulaesst. Sonst
        // laeuft screencapture ins Leere und niemand erfaehrt, warum.
        if !CGPreflightScreenCaptureAccess() {
            // Zeigt Apples Dialog, falls noch nie gefragt wurde.
            if !CGRequestScreenCaptureAccess() {
                zeigeBerechtigungsHinweis()
            }
            return
        }

        aufnahmeLaeuft = true

        // Eigene Fenster kurz wegblenden, damit sie nicht im Bild landen.
        let hatteFenster = !offeneFenster.isEmpty
        if hatteFenster { NSApp.hide(nil) }

        DispatchQueue.main.asyncAfter(deadline: .now() + (hatteFenster ? 0.2 : 0.02)) {
            Bildschirmaufnahme.starte(art) { [weak self] ergebnis in
                guard let self else { return }
                self.aufnahmeLaeuft = false
                guard let ergebnis else {
                    // Esc oder fehlende Berechtigung — ausgeblendete Fenster zurückholen.
                    if hatteFenster, NSApp.isHidden { NSApp.unhide(nil) }
                    return
                }
                self.oeffne(ergebnis)
            }
        }
    }

    private func oeffne(_ aufnahme: Aufnahme) {
        zeigeAlsProgramm()
        if NSApp.isHidden { NSApp.unhide(nil) }
        NSApp.activate(ignoringOtherApps: true)

        let fenster = EditorFenster(aufnahme: aufnahme)
        fenster.beiSchliessen = { [weak self] geschlossenes in
            guard let self else { return }
            self.offeneFenster.removeAll { $0 === geschlossenes }
            // Erst nach dem Schliessen umschalten, sonst friert das Fenster kurz ein.
            DispatchQueue.main.async { self.verschwindeInDenHintergrund() }
        }
        offeneFenster.append(fenster)
        fenster.zeige()

        if Einstellungen.geteilte.automatischKopieren {
            Ausgabe.inZwischenablage(fenster.dokument)
        }
    }

    /// `⌘Q` im Fenster: alles schliessen, aber nicht beenden — das Programm
    /// bleibt wie das Apple-Werkzeug im Hintergrund bereit.
    @objc func alleFensterSchliessen(_ absender: Any?) {
        for fenster in offeneFenster {
            fenster.window?.performClose(nil)
        }
    }

    // MARK: - Globale Kuerzel

    private func registriereKuerzel() {
        let belegung: [(Int, Aufnahmeart)] = [
            (Tastenkuerzel.ausschnittTaste, .ausschnitt),
            (Tastenkuerzel.vollbildTaste, .vollbild),
            (Tastenkuerzel.fensterTaste, .fenster)
        ]

        for (taste, art) in belegung {
            if let eintrag = Tastenkuerzel(taste: taste, zusatztasten: Tastenkuerzel.zusatztasten,
                                           aktion: { [weak self] in self?.starteAufnahme(art) }) {
                kuerzel.append(eintrag)
            } else {
                kuerzelFehlgeschlagen = true
            }
        }
    }

    /// Erklaert die haeufigste Ursache: Schalter steht auf "an", gilt aber
    /// fuer eine fruehere Fassung des Programms.
    private func zeigeBerechtigungsHinweis() {
        NSApp.activate(ignoringOtherApps: true)
        let hinweis = NSAlert()
        hinweis.messageText = "macOS lässt die Bildschirmaufnahme noch nicht zu"
        hinweis.informativeText =
            "Atelier Shot braucht einmalig die Berechtigung »Bildschirmaufnahme«.\n\n"
            + "So geht es:\n"
            + "1. Systemeinstellungen → Datenschutz & Sicherheit → Bildschirmaufnahme\n"
            + "2. Schalter neben »Atelier Shot« einschalten — fehlt der Eintrag, "
            + "mit + aus dem Ordner »Programme« hinzufügen\n"
            + "3. Atelier Shot über das Menüleisten-Symbol beenden und neu öffnen\n\n"
            + "Das Programm merkt sich beim Start, ob es darf. Deshalb ist der Neustart nötig."
        hinweis.addButton(withTitle: "Systemeinstellungen öffnen")
        hinweis.addButton(withTitle: "Später")
        if hinweis.runModal() == .alertFirstButtonReturn {
            oeffneBerechtigungen(nil)
        }
    }

    // MARK: - Beim Anmelden starten

    private func richteAnmeldestartEin() {
        let gewuenscht = Einstellungen.geteilte.beimAnmeldenStarten
        let dienst = SMAppService.mainApp
        if gewuenscht, dienst.status != .enabled {
            try? dienst.register()
        } else if !gewuenscht, dienst.status == .enabled {
            try? dienst.unregister()
        }
        anmeldenEintrag?.state = (dienst.status == .enabled) ? .on : .off
    }

    @objc private func schalteAnmeldestart(_ absender: NSMenuItem) {
        Einstellungen.geteilte.beimAnmeldenStarten.toggle()
        richteAnmeldestartEin()
        if Einstellungen.geteilte.beimAnmeldenStarten, SMAppService.mainApp.status != .enabled {
            Ausgabe.zeigeFehler(
                "Start beim Anmelden nicht möglich",
                text: "macOS hat die Anmeldung verweigert. Das klappt zuverlässig nur, wenn das "
                    + "Programm in /Applications liegt — mit  ./bauen.sh installieren  kommt es dorthin. "
                    + "Nachsehen lässt sich das unter Systemeinstellungen → Allgemein → Anmeldeobjekte.")
        }
    }

    // MARK: - Menueleisten-Symbol

    private func baueStatusEintrag() {
        let eintrag = NSStatusBar.system.statusItem(withLength: NSStatusItem.variableLength)
        if let knopf = eintrag.button {
            if let bild = NSImage(systemSymbolName: "square.dashed.inset.filled",
                                  accessibilityDescription: "Atelier Shot") {
                knopf.image = bild
            } else {
                knopf.title = "AS"
            }
            knopf.toolTip = "Atelier Shot"
        }

        let menue = NSMenu()
        menue.addItem(eintragMit("Ausschnitt aufnehmen   ⌃⇧4", #selector(aufnahmeAusschnitt(_:))))
        menue.addItem(eintragMit("Ganzen Bildschirm aufnehmen   ⌃⇧3", #selector(aufnahmeVollbild(_:))))
        menue.addItem(eintragMit("Fenster aufnehmen   ⌃⇧5", #selector(aufnahmeFenster(_:))))
        menue.addItem(.separator())

        if kuerzelFehlgeschlagen {
            let hinweis = NSMenuItem(title: "Achtung: ⌃⇧-Kürzel von einem anderen Programm belegt",
                                     action: nil, keyEquivalent: "")
            hinweis.isEnabled = false
            menue.addItem(hinweis)
        }

        let anmelden = NSMenuItem(title: "Beim Anmelden starten",
                                  action: #selector(schalteAnmeldestart(_:)), keyEquivalent: "")
        anmelden.target = self
        menue.addItem(anmelden)
        anmeldenEintrag = anmelden

        let kopieren = NSMenuItem(title: "Aufnahme sofort kopieren",
                                  action: #selector(schalteAutomatischKopieren(_:)), keyEquivalent: "")
        kopieren.target = self
        kopieren.state = Einstellungen.geteilte.automatischKopieren ? .on : .off
        menue.addItem(kopieren)

        let schliessen = NSMenuItem(title: "Beim Schliessen sichern",
                                    action: #selector(schalteBeimSchliessenSichern(_:)), keyEquivalent: "")
        schliessen.target = self
        schliessen.state = Einstellungen.geteilte.beimSchliessenSichern ? .on : .off
        menue.addItem(schliessen)

        let ordner = eintragMit("", #selector(waehleAblageordner(_:)))
        menue.addItem(ordner)
        ordnerEintrag = ordner
        zeigeAblageordner()
        menue.addItem(eintragMit("Berechtigung „Bildschirmaufnahme“ öffnen …",
                                 #selector(oeffneBerechtigungen(_:))))
        menue.addItem(.separator())
        menue.addItem(eintragMit("Über Atelier Shot", #selector(ueberDasProgramm(_:))))
        menue.addItem(eintragMit("Atelier Shot beenden", #selector(beenden(_:))))

        menue.delegate = self
        eintrag.menu = menue
        statusEintrag = eintrag
    }

    private func eintragMit(_ titel: String, _ aktion: Selector) -> NSMenuItem {
        let eintrag = NSMenuItem(title: titel, action: aktion, keyEquivalent: "")
        eintrag.target = self
        return eintrag
    }

    @objc private func beenden(_ absender: Any?) {
        NSApp.terminate(nil)
    }

    @objc private func schalteAutomatischKopieren(_ absender: NSMenuItem) {
        Einstellungen.geteilte.automatischKopieren.toggle()
        absender.state = Einstellungen.geteilte.automatischKopieren ? .on : .off
    }

    @objc private func schalteBeimSchliessenSichern(_ absender: NSMenuItem) {
        Einstellungen.geteilte.beimSchliessenSichern.toggle()
        absender.state = Einstellungen.geteilte.beimSchliessenSichern ? .on : .off
    }

    /// Zeigt im Menue, wohin gesichert wird — z. B. "Ablageordner: Schreibtisch …".
    private func zeigeAblageordner() {
        let ordner = Einstellungen.geteilte.ablageordner
        let istSchreibtisch = ordner.standardizedFileURL.path == Einstellungen.schreibtisch.standardizedFileURL.path
        let name = istSchreibtisch ? "Schreibtisch" : ordner.lastPathComponent
        ordnerEintrag?.title = "Ablageordner: \(name) …"
    }

    @objc private func waehleAblageordner(_ absender: Any?) {
        zeigeAlsProgramm()
        NSApp.activate(ignoringOtherApps: true)
        let dialog = NSOpenPanel()
        dialog.canChooseDirectories = true
        dialog.canChooseFiles = false
        dialog.canCreateDirectories = true
        dialog.message = "Ordner für gesicherte Bildschirmfotos wählen"
        dialog.directoryURL = Einstellungen.geteilte.ablageordner
        if dialog.runModal() == .OK, let ordner = dialog.url {
            Einstellungen.geteilte.ablageordner = ordner
            zeigeAblageordner()
        }
        verschwindeInDenHintergrund()
    }

    @objc private func oeffneBerechtigungen(_ absender: Any?) {
        let ziel = "x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture"
        if let adresse = URL(string: ziel) {
            NSWorkspace.shared.open(adresse)
        }
    }

    @objc private func ueberDasProgramm(_ absender: Any?) {
        zeigeAlsProgramm()
        NSApp.activate(ignoringOtherApps: true)
        NSApp.orderFrontStandardAboutPanel(options: [
            .applicationName: "Atelier Shot",
            .credits: NSAttributedString(
                string: "Bildschirmfotos aufnehmen und für die Planprüfung beschriften.\n"
                    + "Atelier AA Architekten",
                attributes: [.font: NSFont.systemFont(ofSize: 11)])
        ])
    }

    // MARK: - Hauptmenue

    private func baueHauptmenue() {
        let hauptmenue = NSMenu()

        // Programm
        let programmEintrag = NSMenuItem()
        let programmMenue = NSMenu()
        programmMenue.addItem(eintragMit("Über Atelier Shot", #selector(ueberDasProgramm(_:))))
        programmMenue.addItem(.separator())
        programmMenue.addItem(eintragMit("Ablageordner wählen …", #selector(waehleAblageordner(_:))))
        programmMenue.addItem(eintragMit("Berechtigung „Bildschirmaufnahme“ öffnen …",
                                         #selector(oeffneBerechtigungen(_:))))
        programmMenue.addItem(.separator())
        programmMenue.addItem(NSMenuItem(title: "Atelier Shot ausblenden",
                                         action: #selector(NSApplication.hide(_:)), keyEquivalent: "h"))
        programmMenue.addItem(kuerzelEintrag("Alle Fenster schliessen", #selector(alleFensterSchliessen(_:)),
                                             taste: "q", zusatz: [.command], ziel: self))
        programmMenue.addItem(eintragMit("Atelier Shot beenden", #selector(beenden(_:))))
        programmEintrag.submenu = programmMenue
        hauptmenue.addItem(programmEintrag)

        // Aufnahme
        let aufnahmeEintrag = NSMenuItem()
        let aufnahmeMenue = NSMenu(title: "Aufnahme")
        aufnahmeMenue.addItem(kuerzelEintrag("Ausschnitt aufnehmen", #selector(aufnahmeAusschnitt(_:)),
                                             taste: "4", zusatz: [.control, .shift], ziel: self))
        aufnahmeMenue.addItem(kuerzelEintrag("Ganzen Bildschirm aufnehmen", #selector(aufnahmeVollbild(_:)),
                                             taste: "3", zusatz: [.control, .shift], ziel: self))
        aufnahmeMenue.addItem(kuerzelEintrag("Fenster aufnehmen", #selector(aufnahmeFenster(_:)),
                                             taste: "5", zusatz: [.control, .shift], ziel: self))
        aufnahmeEintrag.submenu = aufnahmeMenue
        hauptmenue.addItem(aufnahmeEintrag)

        // Ablage
        let ablageEintrag = NSMenuItem()
        let ablageMenue = NSMenu(title: "Ablage")
        ablageMenue.addItem(kuerzelEintrag("Sichern …", #selector(EditorFenster.sichern(_:)),
                                           taste: "s", zusatz: [.command], ziel: nil))
        ablageMenue.addItem(kuerzelEintrag("In den Ablageordner sichern",
                                           #selector(EditorFenster.sichernInOrdner(_:)),
                                           taste: "s", zusatz: [.command, .shift], ziel: nil))
        ablageMenue.addItem(.separator())
        ablageMenue.addItem(NSMenuItem(title: "Fenster schliessen",
                                       action: #selector(NSWindow.performClose(_:)), keyEquivalent: "w"))
        ablageEintrag.submenu = ablageMenue
        hauptmenue.addItem(ablageEintrag)

        // Bearbeiten
        let bearbeitenEintrag = NSMenuItem()
        let bearbeitenMenue = NSMenu(title: "Bearbeiten")
        bearbeitenMenue.addItem(kuerzelEintrag("Rückgängig", #selector(EditorFenster.rueckgaengigAktion(_:)),
                                               taste: "z", zusatz: [.command], ziel: nil))
        bearbeitenMenue.addItem(kuerzelEintrag("Wiederherstellen",
                                               #selector(EditorFenster.wiederherstellenAktion(_:)),
                                               taste: "z", zusatz: [.command, .shift], ziel: nil))
        bearbeitenMenue.addItem(.separator())
        bearbeitenMenue.addItem(kuerzelEintrag("Bild kopieren", #selector(EditorFenster.kopieren(_:)),
                                               taste: "c", zusatz: [.command], ziel: nil))
        bearbeitenMenue.addItem(kuerzelEintrag("Anmerkungsliste kopieren",
                                               #selector(EditorFenster.listeKopieren(_:)),
                                               taste: "c", zusatz: [.command, .option], ziel: nil))
        bearbeitenMenue.addItem(.separator())
        bearbeitenMenue.addItem(kuerzelEintrag("Hintergrund entfernen",
                                               #selector(EditorFenster.hintergrundEntfernen(_:)),
                                               taste: "b", zusatz: [.command], ziel: nil))
        bearbeitenMenue.addItem(kuerzelEintrag("Original wiederherstellen",
                                               #selector(EditorFenster.originalWiederherstellen(_:)),
                                               taste: "z", zusatz: [.command, .option], ziel: nil))
        bearbeitenMenue.addItem(.separator())
        bearbeitenMenue.addItem(kuerzelEintrag("Alle Anmerkungen entfernen",
                                               #selector(EditorFenster.alleAnmerkungenEntfernen(_:)),
                                               taste: "", zusatz: [], ziel: nil))
        bearbeitenEintrag.submenu = bearbeitenMenue
        hauptmenue.addItem(bearbeitenEintrag)

        // Werkzeuge
        let werkzeugEintrag = NSMenuItem()
        let werkzeugMenue = NSMenu(title: "Werkzeuge")
        for werkzeug in Werkzeug.allCases {
            let eintrag = NSMenuItem(title: "\(werkzeug.titel)   \(werkzeug.taste.uppercased())",
                                     action: #selector(EditorFenster.werkzeugAusMenue(_:)),
                                     keyEquivalent: "")
            eintrag.representedObject = werkzeug.rawValue
            werkzeugMenue.addItem(eintrag)
            if werkzeug == .auswahl || werkzeug == .marker { werkzeugMenue.addItem(.separator()) }
        }
        werkzeugEintrag.submenu = werkzeugMenue
        hauptmenue.addItem(werkzeugEintrag)

        // Darstellung
        let darstellungEintrag = NSMenuItem()
        let darstellungMenue = NSMenu(title: "Darstellung")
        darstellungMenue.addItem(kuerzelEintrag("Originalgrösse (100 %)",
                                                #selector(EditorFenster.aufOriginalgroesse(_:)),
                                                taste: "0", zusatz: [.command], ziel: nil))
        darstellungMenue.addItem(kuerzelEintrag("Ins Fenster einpassen",
                                                #selector(EditorFenster.einpassen(_:)),
                                                taste: "9", zusatz: [.command], ziel: nil))
        darstellungEintrag.submenu = darstellungMenue
        hauptmenue.addItem(darstellungEintrag)

        // Fenster
        let fensterEintrag = NSMenuItem()
        let fensterMenue = NSMenu(title: "Fenster")
        fensterMenue.addItem(NSMenuItem(title: "Im Dock ablegen",
                                        action: #selector(NSWindow.performMiniaturize(_:)),
                                        keyEquivalent: "m"))
        fensterEintrag.submenu = fensterMenue
        hauptmenue.addItem(fensterEintrag)

        NSApp.mainMenu = hauptmenue
        NSApp.windowsMenu = fensterMenue
    }

    private func kuerzelEintrag(_ titel: String, _ aktion: Selector, taste: String,
                                zusatz: NSEvent.ModifierFlags, ziel: AnyObject?) -> NSMenuItem {
        let eintrag = NSMenuItem(title: titel, action: aktion, keyEquivalent: taste)
        eintrag.keyEquivalentModifierMask = zusatz
        eintrag.target = ziel        // nil = ueber die Responderkette ans aktive Fenster
        return eintrag
    }
}

// MARK: - Menue der Menueleiste: Stand vor dem Aufklappen nachfuehren

extension AppDelegate: NSMenuDelegate {
    func menuNeedsUpdate(_ menu: NSMenu) {
        anmeldenEintrag?.state = (SMAppService.mainApp.status == .enabled) ? .on : .off
        zeigeAblageordner()
    }
}
