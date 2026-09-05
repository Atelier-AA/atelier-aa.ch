# Konzept — „Rotstift"

Ein Bildschirmfoto-Werkzeug für den Mac, gebaut für die Planprüfung.
Arbeitsname: **Rotstift** — nach dem, womit im Büro seit jeher korrigiert wird.

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
  ⌃⇧4  ────►  Auswahl auf dem      ────►  Fenster „Rotstift" öffnet sich
  drücken     Bildschirm ziehen           direkt an der Stelle der Aufnahme,
                                          Bild in Originalgrösse

                                            │
                                            ▼

                                    Beschriften: Pfeil, Wolke,
                                    Textfahne, Nummer, Mass …

                                            │
                                            ▼

              ⌘C kopieren   ·   ⌘S sichern   ·   ⌘⇧S in Projektordner
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
│  ▣ Rotstift — Ausschnitt 1284 × 842                     ⌄    │  Titelzeile
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
| `⌘⇧S` | Sichern in den Projektordner mit Namensschema (siehe unten) |
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

## Einstellungen

Bewusst kurz gehalten:

- Tastenkürzel für Ausschnitt und Vollbild
- Standard-Projektordner
- Standardfarbe und Standardstrichstärke
- Kürzel für den Stempel (z. B. „AA")
- Automatisch in die Zwischenablage kopieren: ja/nein
- Programm beim Anmelden starten: ja/nein

---

## Ausbaustufen

**Stufe 1 — der Kern** (das, was den Alltag sofort besser macht)
Aufnahme über Kürzel (Ausschnitt, Vollbild, Fenster) · eigenes Vorschaufenster
in Originalgrösse · Auswählen/Verschieben · Pfeil, Linie, Rechteck, Ellipse,
Freihand, Text, Marker · Revisionswolke · Textfahne · Nummern · Unkenntlich
machen · Farben und Strichstärken · Rückgängig · Kopieren, Sichern, Ziehen ·
Menüleisten-Symbol

**Stufe 2 — die Bauwerkzeuge**
Massstab kalibrieren und messen (Länge, Fläche, Winkel) · Stempel ·
Lupe · Zuschneiden · PDF-Export · Anmerkungsliste als Text ·
Projektordner mit Namensschema

**Stufe 3 — Kür**
Scrollende Aufnahme langer Seiten · Texterkennung im Bild (Adresse aus einem
Plankopf herauskopieren) · Vergleich zweier Aufnahmen nebeneinander ·
eigene Stempel- und Werkzeugvorlagen · Umstellung der Aufnahme auf
ScreenCaptureKit

---

## Technik in einem Absatz

Swift, native Mac-Anwendung, kein Fremdcode von aussen. Die Aufnahme läuft in
Stufe 1 über Apples eingebautes `screencapture` — dieselbe Auswahl-Oberfläche,
die du kennst — hinter einem austauschbaren Baustein, damit später ohne Umbau
auf ScreenCaptureKit gewechselt werden kann. Anmerkungen sind Objekte in einem
Dokumentmodell und werden erst beim Export gerechnet; deshalb bleibt alles bis
zuletzt verschiebbar. Gebaut wird mit dem Swift Package Manager über ein
Skript (`bauen.sh`), das ein fertiges `Rotstift.app` erzeugt — dafür genügen
die Command Line Tools, das vollständige Xcode ist nicht nötig.

Einzelheiten und Begründungen: `RECHERCHE.md`, Abschnitte 4 und 5.

---

## Abgrenzung — was das Programm nicht wird

- **Kein Bildbearbeitungsprogramm.** Keine Ebenen, keine Filter, keine
  Farbkorrektur.
- **Keine Videoaufnahme** in Stufe 1 und 2. Wenn Bildschirmvideos gebraucht
  werden, kann macOS das bereits mit `⌘⇧5`.
- **Kein Ersatz für Bluebeam.** Wer ein ganzes Plan-PDF prüft, prüft es dort.
  Rotstift ist für den schnellen Ausschnitt zwischendurch.
- **Keine Cloud, kein Konto, kein Teilen-Link.**
