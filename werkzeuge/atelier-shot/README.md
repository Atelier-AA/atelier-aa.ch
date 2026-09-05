# Atelier Shot

Bildschirmfoto-Werkzeug für den Mac, gebaut für die Planprüfung im
Architekturbüro. Aufnehmen, sofort beschriften, weitergeben — ohne Umweg über
Schreibtisch, Finder und Vorschau, und **ohne dass das Bild dabei skaliert
wird**.

| | |
|---|---|
| Phase | Stufe 1 gebaut und auf dem Mac lauffähig |
| System | macOS 13 oder neuer, „Hintergrund entfernen" ab macOS 14 |
| Sprache | Swift, natives Mac-Programm, keine Fremdbibliotheken |
| Datenschutz | Alles bleibt auf dem Gerät. Keine Cloud, kein Konto |

---

## Bauen

Einmal im Terminal:

```bash
cd werkzeuge/atelier-shot
./bauen.sh installieren
```

Das Skript prüft zuerst selbst, ob alles Nötige da ist, und sagt im Klartext,
was zu tun ist, falls etwas fehlt. Gebraucht werden nur die **Command Line
Tools** (`xcode-select --install`, rund 1 GB) — das vollständige Xcode ist
**nicht** nötig.

Die drei Aufrufe:

| | |
|---|---|
| `./bauen.sh` | nur bauen, Ergebnis unter `build/` — zum Ausprobieren |
| `./bauen.sh installieren` | bauen, nach `/Applications` legen, starten — der Normalfall |
| `./bauen.sh neu` | alles Alte entfernen (Programm, Bauergebnisse, Berechtigung, Einstellungen), dann wie `installieren` — der saubere Neuanfang |

**Zertifikat:** Beim ersten Bau legt das Skript ein eigenes Zertifikat
„Atelier Shot Signatur" im Schlüsselbund an, ohne Apple-Konto. macOS fragt
dabei ein- bis zweimal nach dem Anmeldepasswort. Damit hat das Programm eine
feste Kennung: macOS erkennt es nach jedem Neubau wieder, und die Berechtigung
„Bildschirmaufnahme" muss nur ein einziges Mal erteilt werden. Ohne das
Zertifikat wäre jede neue Fassung ein neues Programm mit erneuter Nachfrage.

Der Code wurde in einer Linux-Umgebung ohne Swift geschrieben; der erste Bau
auf dem Mac brauchte eine Korrektur, seither übersetzt er sauber. Kommt nach
einer Änderung eine Fehlermeldung: Text ab `error:` weitergeben, sie nennt
Datei und Zeile.

## Erster Start

1. **Erste Aufnahme mit `⌃⇧4`** (ctrl + shift + 4). macOS fragt nach der
   Berechtigung *Bildschirmaufnahme*. **Erlauben.**
2. **Beenden und neu öffnen.** Über das Menüleisten-Symbol oben rechts
   *Atelier Shot beenden*, dann `⌘Leertaste`, „Atelier Shot", Enter. Das
   Programm merkt sich beim Start, ob es darf — deshalb der Neustart. Einmalig.
3. Ab jetzt läuft es wie das Apple-Werkzeug: **startet beim Anmelden von selbst,
   kein Dock-Symbol, muss nie beendet werden.** Nur das Symbol oben rechts in
   der Menüleiste ist sichtbar. Sobald ein Fenster offen ist, erscheinen
   Menüleiste und Dock-Symbol — und verschwinden mit dem letzten Fenster wieder.
   `⌘Q` schliesst nur die Fenster; beenden geht bewusst nur über das
   Menüleisten-Symbol.

Meldet macOS beim Öffnen, das Programm stamme nicht aus dem App Store:
*Systemeinstellungen → Datenschutz & Sicherheit* → ganz unten *Dennoch öffnen*.

Kommt beim Kürzel ein Fenster „macOS lässt die Bildschirmaufnahme noch nicht
zu": Es sagt Schritt für Schritt, was zu tun ist, und öffnet die richtige
Stelle in den Systemeinstellungen.

---

## Bedienung

### Aufnehmen

| Kürzel | |
|---|---|
| `⌃⇧4` | Ausschnitt ziehen (Leertaste wechselt zur Fensterauswahl, `Esc` bricht ab) |
| `⌃⇧3` | Ganzer Bildschirm — der, auf dem der Zeiger steht |
| `⌃⇧5` | Einzelnes Fenster |

Dieselbe Logik wie bei Apple, nur mit `ctrl` statt `cmd`. Apples eigene Kürzel
`⌘⇧3/4/5` bleiben unangetastet und funktionieren weiter wie bisher.

### Werkzeuge

Ziffern und Buchstaben wirken direkt im Fenster, ohne Zusatztaste.

| Taste | Werkzeug | |
|---|---|---|
| `V` | Auswählen | Anfassen, verschieben, an den Griffen ändern, `⌫` löscht |
| `1` | Pfeil | mit `⇧` auf 15°-Schritte einrasten |
| `2` | Linie | |
| `3` | Rechteck | mit `⇧` quadratisch |
| `4` | Ellipse | |
| `5` | Freihand | |
| `6` | Text | heller Hintergrund, damit er auf jedem Plan lesbar bleibt |
| `7` | Marker | halbdurchsichtig |
| `W` | **Revisionswolke** | der Standard für Änderungen und Korrekturen |
| `F` | **Textfahne** | Kasten mit Führungslinie — verdeckt den Plan nicht |
| `N` | **Nummer** | zählt automatisch hoch: ①②③ für Mängel und Pendenzen |
| `U` | **Unkenntlich machen** | verpixelt wirklich, nicht nur überdeckt |

Doppelklick auf einen Text oder eine Fahne öffnet ihn wieder zum Ändern.

### Farben und Stärke

| Taste | | Bedeutung |
|---|---|---|
| `R` | Rot | Korrektur, Mangel |
| `G` | Grün | erledigt, freigegeben |
| `B` | Blau | Frage, Hinweis |
| `Y` | Gelb | Hervorhebung |
| `K` | Schwarz | neutral |

`[` und `]` ändern die Strichstärke. Eine Farbänderung wirkt auch auf die
gerade ausgewählte Anmerkung.

### Weitergeben

| Kürzel | |
|---|---|
| `⌘C` | Bild in die Zwischenablage |
| `⌘S` | Sichern als PNG, volle Auflösung, mit Bildpunktdichte in der Datei |
| **Fenster schliessen** (rotes X, `⌘W`) | **Sichert von selbst** als PNG auf den Schreibtisch, mit Datum und Uhrzeit im Namen — auch ohne Anmerkung. Kein Dialog, kein Ort wählen. Wurde seit der letzten Änderung schon von Hand gesichert, passiert nichts doppelt |
| `⇧⌘S` | Jetzt schon in den Ablageordner sichern, ohne Rückfrage, Fenster bleibt offen |
| `⌥⌘C` | Nur die Anmerkungsliste als Text — zum Einkleben ins Protokoll |
| Ziehen | Das kleine Feld in der Fussleiste ins Mailfenster oder in den Finder ziehen |
| `⌘Z` / `⇧⌘Z` | Rückgängig / Wiederherstellen |
| `⌘B` | **Hintergrund entfernen** — Apples Bilderkennung, läuft auf dem Gerät. Ergebnis ist ein PNG mit durchsichtigem Hintergrund |
| `⌥⌘Z` | Original wiederherstellen (nach „Hintergrund entfernen") |
| `⌘0` / `⌘9` | Originalgrösse / ins Fenster einpassen |

**Ablageordner:** Vorgabe ist der Schreibtisch, wie beim Apple-Werkzeug. Über
das Menüleisten-Symbol lässt er sich ändern; der Menüpunkt zeigt, welcher
gerade gilt. Dort steht auch der Schalter *Beim Schliessen sichern*.

### Die Grössenregel

100 % heisst: genau so gross wie der Ausschnitt vorher auf dem Bildschirm war.
Passt ein Bild nicht auf den Schirm, wird es beim Öffnen einmalig verkleinert —
und die Fussleiste sagt dann ausdrücklich *nicht Originalgrösse*. `⌘0` stellt
jederzeit 1:1 her. Gesichert wird immer in voller Auflösung.

---

## Unterlagen

| Datei | Inhalt |
|---|---|
| [`RECHERCHE.md`](RECHERCHE.md) | Marktübersicht, Übernahme aus der Planprüfung, technische Grundlagen, Entscheidungen, Risiken, Quellen |
| [`KONZEPT.md`](KONZEPT.md) | Leitgedanke, Ablauf, Werkzeugkasten, Fensteraufbau, Export, Ausbaustufen, Abgrenzung |

## Aufbau des Programms

| Datei | Aufgabe |
|---|---|
| `Sources/AtelierShot/main.swift` | Einstieg |
| `AppDelegate.swift` | Menüleisten-Symbol, Hauptmenü, globale Kürzel, Aufnahme anstossen |
| `Tastenkuerzel.swift` | Globale Kürzel über Carbon — der einzige Weg ohne Zusatzberechtigung |
| `Aufnahme.swift` | Die Aufnahme selbst. Einzige Stelle, die später auf ScreenCaptureKit umgestellt wird |
| `Modell.swift` | Werkzeuge, Farben, Anmerkung, Dokument, Verlauf |
| `Zeichnen.swift` | Zeichnet jede Anmerkung und beantwortet Klicktreffer |
| `LeinwandView.swift` | Zeichenfläche, Maus, Tastatur, Texteingabe |
| `WerkzeugLeiste.swift` | Werkzeugleiste oben |
| `EditorFenster.swift` | Das Vorschaufenster samt Grössenregel |
| `Ausgabe.swift` | Fertiges Bild rechnen, kopieren, sichern, herausziehen |
| `Freistellen.swift` | Hintergrund entfernen über Apples Vision — auf dem Gerät, ab macOS 14 |
| `Einstellungen.swift` | Die wenigen Vorgaben |

## Was noch nicht drin ist

Stufe 2 und 3 aus dem Konzept: Massstab kalibrieren und messen, Stempel, Lupe,
Zuschneiden, PDF-Export, Projektordner mit Namensschema, scrollende Aufnahme,
Texterkennung.

## Hinweis

Dieses Verzeichnis gehört nicht zur Website. Es liegt nur im selben Ablageort,
damit alles an einem Platz bleibt. `npm run build` der Website fasst es nicht an.
