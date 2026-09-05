# Konzept — „Atelier Shot"

Ein Bildschirmfoto-Werkzeug für den Mac, gebaut für die Planprüfung.
Name: **Atelier Shot** — gehört zum Büro, ist auch gegenüber Dritten
unverfänglich, wenn das Fenster einmal in einer Besprechung mitläuft.

Grundlage: `RECHERCHE.md`.

---

## Leitgedanke

> **Aufnehmen. Sofort beschriften. Weitergeben.**
> Ohne Umweg über Schreibtisch, Finder und Vorschau.
> Und: **das Bild bleibt genau so gross, wie es auf dem Bildschirm war.**

Drei Regeln, an denen sich jede Entscheidung im Programm messen lassen muss:

1. **Nichts wird skaliert.** 100 % heisst: so gross wie vorher auf dem Schirm.
2. **Nichts ist endgültig.** Jede Anmerkung bleibt verschiebbar, bis exportiert wird.
3. **Nichts verlässt das Gerät.** Keine Cloud, kein Konto, keine Anmeldung.

---

## Der Ablauf

```
  ⌃⇧4  ────►  Auswahl auf dem      ────►  Fenster „Atelier Shot" öffnet sich
  drücken     Bildschirm ziehen           direkt an der Stelle der Aufnahme,
                                          Bild in Originalgrösse

                                            │
                                            ▼

                                    Beschriften: Pfeil, Wolke,
                                    Textfahne, Nummer, Mass …

                                            │
                                            ▼

              ⌘C kopieren   ·   Fenster zu = gesichert   ·   ⌘⇧S in Projektordner
              (fertig in unter zehn Sekunden)
```

Kein schwebendes Vorschaubild, das nach fünf Sekunden verschwindet. Das
Fenster bleibt offen, bis du es schliesst.

---

## Der Werkzeugkasten

Die Auswahl folgt der Redline-Logik aus der Planprüfung (siehe
`RECHERCHE.md`, Abschnitt 3). Ziffern = Tastaturkürzel, ohne Zusatztaste.

### Grundwerkzeuge — hat jedes Programm, muss aber gut sein

| Taste | Werkzeug | Anmerkung |
|---|---|---|
| `V` | **Auswählen / Verschieben** | Jede gesetzte Anmerkung wieder anfassen, verschieben, in der Grösse ändern, löschen |
| `1` | **Pfeil** | Mit ordentlichem Kopf. Mit `⇧` auf 15°-Schritte einrasten (waagrecht, senkrecht, diagonal) |
| `2` | **Linie** | Gerade, gestrichelt umschaltbar |
| `3` | **Rechteck** | Rahmen oder gefüllt |
| `4` | **Ellipse** | Rahmen oder gefüllt |
| `5` | **Freihand** | Für schnelles Umkringeln |
| `6` | **Text** | Mit hellem Hintergrund hinterlegbar, damit er auf jedem Plan lesbar bleibt |
| `7` | **Marker** | Halbdurchsichtig, wie ein Leuchtstift |

### Bauwerkzeuge — der eigentliche Grund für das Projekt

| Taste | Werkzeug | Wofür |
|---|---|---|
| `W` | **Revisionswolke** | Der Standard, um Änderungen und Korrekturen zu markieren. Bogenweite einstellbar, wahlweise mit Revisionsnummer im Anhänger |
| `F` | **Textfahne** (Callout) | Textkasten am Rand mit Führungslinie auf die Stelle. Verdeckt den Plan nicht |
| `N` | **Nummer** | Zählt automatisch hoch: ①②③. Für Mängellisten, Pendenzen und Protokollpunkte. Die Liste lässt sich als Text herauskopieren |
| `M` | **Mass** | Zuerst einmalig kalibrieren: eine bekannte Strecke im Bild anklicken und ihr Mass eingeben („5.00 m"). Danach zeigt jede gezogene Strecke Meter statt Bildpunkte. Auch Flächen (Rechteck) und Winkel |
| `S` | **Stempel** | „geprüft", „zur Ausführung", „Revision A", frei ergänzbar — jeweils mit Datum und Kürzel |
| `U` | **Unkenntlich machen** | Bauherrenname, Adresse, Preis. Wahlweise verpixeln, weichzeichnen oder schwarz. Wird beim Export **wirklich überschrieben**, nicht nur überdeckt |
| `L` | **Lupe** | Vergrössert einen Ausschnitt im Bild — für Details, die im Vollbild untergehen |
| `C` | **Zuschneiden** | Nachträglich enger fassen |

### Farben — feste Konvention statt Farbwähler

| Taste | Farbe | Bedeutung |
|---|---|---|
| `R` | Rot | Korrektur, Mangel, muss geändert werden |
| `G` | Grün | Erledigt, freigegeben, neu |
| `B` | Blau | Frage, Hinweis, zur Klärung |
| `Y` | Gelb | Marker/Hervorhebung |
| `K` | Schwarz/Weiss | Neutrale Beschriftung |

Strichstärke mit `[` und `]`, Rückgängig `⌘Z`, Wiederherstellen `⌘⇧Z`.

---

## Das Fenster

```
┌──────────────────────────────────────────────────────────────┐
│  ▣ Atelier Shot — Ausschnitt 1284 × 842                     ⌄    │  Titelzeile
├──────────────────────────────────────────────────────────────┤
│ V │ ↗ ─ □ ○ ✎ T ▮ │ ☁ ⚑ ① ↔ ⬗ ▨ ⌕ ⛶ │ ● ● ● ● │ [ ]  ↶ ↷    │  Werkzeugleiste
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                    Bild in Originalgrösse                    │
│                        (100 % = 1:1)                         │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ 100 %  ·  Massstab: 1 px = 2.4 cm      Kopieren   Sichern ▾  │  Fusszeile
└──────────────────────────────────────────────────────────────┘
```

- Das Fenster öffnet sich **dort, wo aufgenommen wurde**, nicht in der Mitte.
- Grösse folgt dem Bild. Ist das Bild grösser als der Bildschirm, wird
  einmalig eingepasst — die Zoomstufe steht dann sichtbar unten links, damit
  klar ist, dass gerade nicht 1:1 zu sehen ist.
- `⌘0` stellt jederzeit 100 % wieder her.
- Mehrere Aufnahmen = mehrere Fenster. Keine Bibliothek, keine Verwaltung.

---

## Weitergeben

| Kürzel | Was passiert |
|---|---|
| `⌘C` | Fertiges Bild in die Zwischenablage — für Mail, Teams, WhatsApp |
| `⌘S` | Sichern als PNG, volle Auflösung, mit Bildpunktdichte in der Datei |
| **Fenster schliessen** | **Sichert von selbst** in den Ablageordner (Vorgabe: Schreibtisch). Zumachen ist Sichern — kein Dialog, kein Ort wählen. Nur wenn seit der letzten Änderung schon gesichert wurde, passiert nichts doppelt |
| `⌘⇧S` | Sichern in den Projektordner mit Namensschema (siehe unten), Fenster bleibt offen |
| `⌘P` | Als PDF sichern — zum Anhängen an Protokolle |
| Ziehen | Bild aus dem Fenster direkt in Mail oder den Finder ziehen |
| `⌘⌥C` | Nur die Anmerkungsliste als Text kopieren (aus dem Nummern-Werkzeug) |

**Namensschema** — angelehnt an die Regeln im `HANDBUCH.md` der Website
(Kleinschreibung, Bindestriche, keine Umlaute):

```
2026-09-05_efh-othmarsingen_fassade-ost_01.png
JJJJ-MM-TT_projekt_thema_nr.png
```

Projekt und Thema werden beim Sichern einmal gewählt und für die nächste
Aufnahme gemerkt.

---

## Betrieb — wie das Apple-Werkzeug, nur besser

Atelier Shot läuft neben dem eingebauten Bildschirmfoto-Werkzeug, so still wie
dieses. Daraus folgt:

- **Dieselbe Logik bei den Kürzeln, nur mit `ctrl`.** `⌃⇧3` ganzer Bildschirm,
  `⌃⇧4` Ausschnitt, `⌃⇧5` Fenster. Apples eigene `⌘⇧3/4/5` bleiben
  unangetastet — nichts muss in den Systemeinstellungen umgestellt werden,
  und wer einmal Apples Werkzeug braucht, hat es weiterhin.
- **Feste Kennung.** Das Programm wird mit einem eigenen Zertifikat signiert,
  das beim ersten Bau im Schlüsselbund angelegt wird — ohne Apple-Konto.
  Dadurch erkennt macOS es nach jedem Neubau wieder, und die Berechtigung
  „Bildschirmaufnahme" wird nur ein einziges Mal erteilt. Ohne feste Kennung
  wäre jede neue Fassung ein neues Programm; genau das hat beim ersten Aufbau
  für Verwirrung gesorgt.
- **Läuft im Hintergrund.** Startet beim Anmelden von selbst, hat kein
  Dock-Symbol und muss nie beendet werden. Sichtbar ist nur das Symbol in der
  Menüleiste. Erst wenn ein Fenster offen ist, erscheint das Programm mit
  Menüleiste und Dock-Symbol — und verschwindet wieder, sobald das letzte
  Fenster zu ist.
- **`⌘Q` beendet nicht.** Es schliesst alle Fenster, das Programm bleibt im
  Hintergrund bereit. Beenden geht nur bewusst über das Menüleisten-Symbol.
- **Liegt in `/Applications`.** Nur dort kann macOS es beim Anmelden zuverlässig
  starten. `./bauen.sh installieren` legt es dorthin.

---

## Einstellungen

Bewusst kurz gehalten, alle im Menü des Menüleisten-Symbols:

- Beim Anmelden starten: ja/nein
- Aufnahme sofort in die Zwischenablage: ja/nein
- Ablageordner
- Standardfarbe, Standardwerkzeug und Strichstärke merken sich von selbst
- Kürzel für den Stempel (z. B. „AA") — ab Stufe 2

---

## Ausbaustufen

**Stufe 1 — der Kern** (das, was den Alltag sofort besser macht)
Aufnahme über Kürzel (Ausschnitt, Vollbild, Fenster) · eigenes
Vorschaufenster in Originalgrösse · Auswählen/Verschieben · Pfeil, Linie,
Rechteck, Ellipse, Freihand, Text, Marker · Revisionswolke · Textfahne ·
Nummern · Unkenntlich machen · **Hintergrund entfernen** (Apples
Bilderkennung, läuft auf dem Gerät) · Farben und Strichstärken · Rückgängig ·
Kopieren, Sichern, Ziehen, Anmerkungsliste als Text · Menüleisten-Symbol ·
Hintergrundbetrieb mit Start beim Anmelden

**Stufe 2 — die Bauwerkzeuge und der Projektbezug**
**Projekt wählen nach der Aufnahme** (Liste aus dem Projektordner, ein Klick,
Datei liegt richtig und heisst richtig) · Massstab kalibrieren und messen
(Länge, Fläche, Winkel) · Stempel · Lupe · Zuschneiden · **Am Bildschirm
anheften** (Aufnahme als schwebendes Fenster über Archicad liegen lassen) ·
**Direkt als E-Mail** · PDF-Export

**Stufe 3 — Kür**
**Vorher/Nachher** (zwei Planstände übereinander, Transparenzregler) ·
**Verlauf der letzten 30 Aufnahmen** · Texterkennung im Bild (Adresse aus
einem Plankopf herauskopieren, auf dem Gerät) · Scrollende Aufnahme langer
Seiten · Aufgabe aus dem Ausschnitt erstellen (sobald klar ist, wo die
Aufgaben des Büros leben) · eigene Stempel- und Werkzeugvorlagen · Umstellung
der Aufnahme auf ScreenCaptureKit

**Bewusst offen: KI-Funktionen.** Ausschnitt an eine KI schicken, Planstände
vergleichen lassen, Sprachnotizen transkribieren — alles machbar, aber dann
verlässt das Bild das Gerät. Das widerspricht Regel 3 und ist deshalb keine
Nebensache, sondern eine eigene Entscheidung: mit Kosten, einem Konto beim
Anbieter und einem Schalter, der pro Bild ausdrücklich gedrückt werden muss.
Wird erst nach Stufe 3 entschieden.

---

## Technik in einem Absatz

Swift, native Mac-Anwendung, kein Fremdcode von aussen. Die Aufnahme läuft in
Stufe 1 über Apples eingebautes `screencapture` — dieselbe Auswahl-Oberfläche,
die du kennst — hinter einem austauschbaren Baustein, damit später ohne Umbau
auf ScreenCaptureKit gewechselt werden kann. Anmerkungen sind Objekte in einem
Dokumentmodell und werden erst beim Export gerechnet; deshalb bleibt alles bis
zuletzt verschiebbar. Gebaut wird mit dem Swift Package Manager über ein
Skript (`bauen.sh`), das ein fertiges `Atelier Shot.app` erzeugt — dafür genügen
die Command Line Tools, das vollständige Xcode ist nicht nötig.

Einzelheiten und Begründungen: `RECHERCHE.md`, Abschnitte 4 und 5.

---

## Abgrenzung — was das Programm nicht wird

- **Kein Bildbearbeitungsprogramm.** Keine Ebenen, keine Filter, keine
  Farbkorrektur.
- **Keine Videoaufnahme, kein GIF.** Wenn ein Bildschirmvideo gebraucht wird,
  macht das die Bildschirmaufnahme von macOS weiterhin — sie bleibt über das
  Launchpad erreichbar, nur das Kürzel gehört jetzt Atelier Shot.
- **Kein Ersatz für Bluebeam.** Wer ein ganzes Plan-PDF prüft, prüft es dort.
  Atelier Shot ist für den schnellen Ausschnitt zwischendurch.
- **Keine Cloud, kein Konto, kein Teilen-Link, keine Grössen für Instagram.**
  Das Büro prüft Pläne, es veröffentlicht keine Inhalte.
- **Kein Fotowerkzeug.** Perspektive korrigieren gehört zu Baustellenfotos vom
  Handy, nicht zu Bildschirmfotos. Farben misst der „Digital Color Meter", der
  auf jedem Mac liegt.
