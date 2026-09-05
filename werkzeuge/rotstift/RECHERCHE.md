# Recherche — Screenshot-Werkzeug für den Mac

Stand: September 2026. Grundlage für das Konzept in `KONZEPT.md`.

---

## 1. Ausgangslage: was der Mac heute macht und was daran stört

macOS bringt ein Bildschirmfoto-Werkzeug mit (`⌘⇧3` ganzer Bildschirm,
`⌘⇧4` Ausschnitt, `⌘⇧5` Leiste mit Aufnahme). Es nimmt technisch sauber auf.
Was danach passiert, ist der wunde Punkt:

| Was passiert | Warum das im Büroalltag stört |
|---|---|
| Unten rechts erscheint ein kleines schwebendes Vorschaubild | Verschwindet nach Sekunden. Wer nicht schnell klickt, muss die Datei im Finder suchen. |
| Klick darauf öffnet die **Schnellansicht mit Markierungen** | Nur Stift, Formen, Text, Signatur. Kein Pfeil mit ordentlichem Kopf, keine Wolke, keine Nummerierung, keine Unschärfe. |
| Doppelklick öffnet **Vorschau.app** | Vorschau skaliert das Bild auf die Fenstergrösse. Ein Ausschnitt von 800 × 600 Punkten sieht dort plötzlich kleiner oder grösser aus als auf dem Bildschirm. |
| Die Datei landet auf dem Schreibtisch | `Bildschirmfoto 2026-09-05 um 14.22.31.png` — nach zehn Aufnahmen weiss niemand mehr, welches zu welchem Projekt gehört. |
| Markierungen werden beim Sichern fest eingebrannt | Ein Pfeil, der zwei Zentimeter danebenliegt, lässt sich später nicht mehr verschieben. |

Der Kern der Beschwerde — *„das Bild darf nicht kleiner oder grösser werden"* —
hat eine technische Ursache, siehe Abschnitt 4.3.

---

## 2. Was es am Markt bereits gibt

Die Kategorie ist gut besetzt. Es lohnt sich, nichts zu erfinden, was dort
schon gut gelöst ist, und stattdessen genau dort zu ergänzen, wo alle drei
schwach sind.

| Programm | Preis | Stärken | Was für uns fehlt |
|---|---|---|---|
| **CleanShot X** | einmalig ~29 $ | Sieben Werkzeuge in einem: Foto, Video, GIF, Anmerkungen, Cloud, scrollende Aufnahme, Texterkennung. Sofort-Overlay zum Beschriften. | Keine Revisionswolke, keine kalibrierte Messung, keine Mängel-Nummerierung im Bausinn. Cloud-Ablage ist bei Bauherrendaten heikel. |
| **Shottr** | kostenlos | Erstaunlich vollständig: Pixelmessung, Texterkennung, scrollende Aufnahme. Sehr schnell, sehr klein. | Keine Videoaufnahme, keine Maßstabskalibrierung, keine Stempel, keine Projektablage. |
| **Snagit** | ~39 $/Jahr | Für Dokumentation gebaut: Vorlagen, Schritt-für-Schritt-Anleitungen, Bibliothek, Windows und Mac. | Abo, schwergewichtig, auf Software-Handbücher zugeschnitten, nicht auf Pläne. |
| **Xnapper / Monosnap** | teils kostenlos | Hübsche Hintergründe, schnelles Teilen. | Reine Präsentationswerkzeuge. |
| **Skitch** (Evernote) | eingestellt | War genau das, was hier gesucht wird — Pfeile und Textfahnen in Sekunden. | Wird nicht mehr gepflegt. |

**Schlussfolgerung:** Bei „Pfeil, Text, Rechteck" sind alle gleich gut. Die
Lücke liegt bei allem, was aus der Planprüfung kommt — und genau da wird
täglich gearbeitet.

---

## 3. Was ein Architekturbüro zusätzlich braucht

Referenz ist die Redline-Logik aus Bluebeam Revu, dem Standard für
Planprüfung im Bauwesen. Übertragen auf Bildschirmfotos ergibt das:

| Bluebeam-Werkzeug | Wozu im Büro | Übertragung auf den Screenshot |
|---|---|---|
| **Revisionswolke** (Cloud+) | Markiert, was sich gegenüber der letzten Planversion geändert hat oder korrigiert gehört. Das Erkennungszeichen jeder Planprüfung. | Wolkenrahmen um einen Bereich, wahlweise mit Nummer |
| **Callout / Textfahne** | Bemerkung ausserhalb des Plans mit Führungslinie auf die Stelle | Textkasten mit Zeiger — verdeckt nichts und ist trotzdem eindeutig |
| **Stempel** | „geprüft", „zur Ausführung", „Revision A" | Kürzel + Datum, wiederverwendbar |
| **Kalibrierte Messung** | Nach dem Setzen einer Referenzstrecke werden Längen und Flächen direkt in Metern gelesen | Referenzstrecke im Bild antippen, Maßstab eingeben („diese Strecke = 5.00 m"), danach messen |
| **Farbkonvention** | Rot = Korrektur, Grün = erledigt/neu, Blau = Frage | Feste Palette statt Farbwähler-Suche |
| **Nummerierte Markups** | Mängelliste, Pendenzen, Protokollpunkte | Zähler, der beim Klicken automatisch hochzählt: ①②③ |
| **Markup-Liste** | Alle Anmerkungen als Liste neben dem Plan | Export als Textliste zum Einkleben ins Protokoll |

Dazu kommt ein Punkt, den Bluebeam nicht hat, der aber bei Bildschirmfotos
täglich auftritt: **Unkenntlichmachen.** Bauherrenname, Adresse, Kaufpreis
oder Honorar stehen im Ausschnitt und dürfen nicht mitgehen. Das braucht
echtes Überschreiben der Bildpunkte beim Export, nicht nur einen schwarzen
Balken darüber.

---

## 4. Technische Recherche

### 4.1 Aufnahme

- **ScreenCaptureKit** ist Apples aktuelle Schnittstelle (ab macOS 12.3).
  Für Einzelbilder ist `SCScreenshotManager` zuständig; ab macOS 26 gibt es
  `captureScreenshot(rect:configuration:)`, davor `captureImage(in:)`.
  `SCContentFilter` bestimmt, was aufgenommen wird — Bildschirm, Programm
  oder einzelnes Fenster.
- Die alten Wege (`CGWindowListCreateImage`, `CGDisplayStream`) sind
  abgekündigt und lösen auf neueren Systemen Warnhinweise aus. Nicht verwenden.
- **Alternative:** das eingebaute Kommandozeilenwerkzeug
  `/usr/sbin/screencapture` aufrufen. Vorteil: Apples eigene Auswahl-Oberfläche
  (Fadenkreuz, Leertaste für Fensterauswahl, Esc zum Abbrechen) muss nicht
  nachgebaut werden, und die Datei kommt mit korrekter Auflösung und
  Bildpunktdichte heraus. Genau dafür setzen viele Programme sie ein.
  Nachteil: die Berechtigung aus 4.2 wird trotzdem verlangt.

### 4.2 Berechtigung „Bildschirmaufnahme"

- Jedes Programm ausser den eingebauten Apple-Funktionen braucht in den
  Systemeinstellungen unter *Datenschutz & Sicherheit → Bildschirmaufnahme*
  eine Freigabe.
- Seit macOS Sequoia fragt das System bei solchen Programmen periodisch nach.
- **Wichtig für uns:** Bei einem nur „ad hoc" signierten Programm — also ohne
  Apple-Entwicklerzertifikat — ändert sich die Signaturprüfsumme bei *jedem*
  Neubau. macOS erkennt die neue Fassung dann nicht als dasselbe Programm und
  fragt erneut, obwohl der Schalter in den Einstellungen weiter aktiv aussieht.
  Im Alltag heisst das: einmal bauen, einmal freigeben, fertig — aber nach
  jeder neuen Fassung noch einmal freigeben. Sauber lösbar nur mit einem
  Apple-Entwicklerzertifikat (99 $/Jahr).

### 4.3 Warum das Bild „grösser" wirkt — Punkte gegen Bildpunkte

Ein Retina-Bildschirm stellt jeden Bildschirmpunkt mit 2 × 2 Bildpunkten dar.
Ein Ausschnitt von 800 × 600 **Punkten** ergibt daher eine Datei mit
1600 × 1200 **Bildpunkten**. Programme, die diesen Faktor ignorieren, zeigen
die Datei doppelt so gross an — deshalb sieht ein Bildschirmfoto in vielen
Betrachtern grösser aus als das Original.

Die Regel für unser Programm lautet deshalb:

1. Aufnehmen immer in voller Bildpunktzahl (nichts verkleinern).
2. Im Fenster den Bildpunktfaktor berücksichtigen: **100 % = genau so gross
   wie vorher auf dem Bildschirm.**
3. Fenstergrösse aus dem Bild ableiten, nicht umgekehrt. Passt das Bild nicht
   auf den Bildschirm, wird gescrollt oder bewusst verkleinert angezeigt —
   nie automatisch skaliert.
4. Beim Sichern die Bildpunktdichte in die Datei schreiben, damit auch andere
   Programme richtig anzeigen.

### 4.4 Globales Tastenkürzel

- `RegisterEventHotKey` (Carbon) funktioniert weiterhin, braucht **keine**
  Zusatzberechtigung und ist der übliche Weg für globale Kürzel.
- `NSEvent.addGlobalMonitorForEvents` würde zusätzlich die Berechtigung
  *Bedienungshilfen* verlangen. Vermeiden.
- Kürzel dürfen die Apple-Vorgaben nicht überschreiben. Vorschlag:
  `⌃⇧4` (Ausschnitt) und `⌃⇧3` (ganzer Bildschirm) — dieselbe Logik wie
  gewohnt, nur mit `ctrl` statt `cmd`.

### 4.5 Bauen ohne Xcode

Ein Mac-Programm lässt sich allein mit dem Swift Package Manager bauen:
`Package.swift` schreiben, `swift build`, danach das Programmpaket
(`.app`-Ordner mit `Info.plist`, ausführbarer Datei und Symbol) von Hand
zusammensetzen und ad hoc signieren. Es braucht dafür die **Command Line
Tools** (`xcode-select --install`, rund 1 GB) — das vollständige Xcode
(über 10 GB) ist nicht nötig.

Ohne Xcode fehlt allerdings der Fehlersuch-Komfort. Für den ersten Bau ist
das in Ordnung, für die Weiterentwicklung ist Xcode angenehmer.

---

## 5. Entscheidungen aus der Recherche

| Frage | Entscheidung | Begründung |
|---|---|---|
| Web-App oder Mac-Programm? | **Mac-Programm** (Swift) | Ein Browser darf den Bildschirm nicht ohne Weiteres abgreifen, keine globalen Kürzel, kein Menüleisten-Symbol. |
| Electron oder nativ? | **Nativ** | 200 MB Laufzeitumgebung für ein Werkzeug, das in 300 ms auf sein muss, lohnt nicht. Nativ startet sofort und braucht kaum Speicher. |
| Aufnahme über ScreenCaptureKit oder `screencapture`? | **Stufe 1: `screencapture`**, später ScreenCaptureKit | Apples Auswahl-Oberfläche ist genau die, die du schon kennst und magst. Spart das Nachbauen der Auswahl über mehrere Bildschirme und liefert von Anfang an bildpunktgenaue Dateien. Die Aufnahme wird als austauschbarer Baustein gebaut. |
| Anmerkungen fest einbrennen? | **Nein, verschiebbar bis zum Export** | Jede Anmerkung bleibt ein Objekt, das anklickbar, verschiebbar und löschbar ist. Erst beim Sichern/Kopieren wird gerechnet. Ausnahme: Unkenntlichmachen wird beim Export wirklich überschrieben. |
| Cloud? | **Nein** | Bauherrendaten, Grundrisse, Honorare. Alles bleibt auf dem Gerät. |

---

## 6. Risiken und offene Punkte

| Punkt | Bewertung |
|---|---|
| **Hier nicht baubar.** Diese Arbeitsumgebung ist Linux, ohne Swift-Werkzeugkette und ohne macOS-Bausteine. Der Programmcode kann geschrieben, aber nicht kompiliert und nicht ausprobiert werden. | hoch — der erste Bau auf deinem Mac wird voraussichtlich noch ein, zwei Übersetzungsfehler zeigen, die dann nachgezogen werden. Das Bauskript gibt die Fehler verständlich aus. |
| Berechtigung nach jedem Neubau erneut erteilen (siehe 4.2) | mittel — nur bei neuen Fassungen, mit einem Entwicklerzertifikat behebbar |
| Kalibrierte Messung ist nur so genau wie die Referenzstrecke | mittel — im Programm ausdrücklich als Schätzhilfe kennzeichnen, nicht als Vermessung |
| Programm ist nicht bei Apple beglaubigt („notarisiert") | niedrig — beim ersten Start einmal über *Systemeinstellungen → Datenschutz & Sicherheit → Dennoch öffnen* freigeben |

---

## Quellen

- [ScreenCaptureKit — Apple Developer Forums](https://developer.apple.com/forums/tags/screencapturekit)
- [ScreenCaptureKit macOS xcode26.0 b1 (API-Änderungen, `SCScreenshotManager`)](https://github.com/dotnet/macios/wiki/ScreenCaptureKit-macOS-xcode26.0-b1)
- [macOS ScreenCaptureKit Explained](https://ldbypass.com/guides/macos-screencapturekit-explained)
- [Sequoia Screen Recording Prompts and the Persistent Content Capture Entitlement — Michael Tsai](https://mjtsai.com/blog/2024/08/08/sequoia-screen-recording-prompts-and-the-persistent-content-capture-entitlement/)
- [Why does my app lose Screen Recording permission after updating (adhoc signature)? — Apple Developer Forums](https://developer.apple.com/forums/thread/795739)
- [Local dev builds unable to test screen recording on macOS Sequoia — Cap, Issue #1722](https://github.com/CapSoftware/Cap/issues/1722)
- [Mac Screen Recording Permission: Fix + tccutil Reset](https://www.screenify.studio/blog/2026-04-23-macos-screen-recording-permissions)
- [PDF Markup Guide for Architects — Bluebeam](https://www.bluebeam.com/resources/pdf-markups-for-architects-2026-guide/)
- [Understanding Bluebeam's Markup Tools — Microsol Resources](https://microsolresources.com/tech-resources/article/understanding-bluebeams-markup-tools/)
- [PDF Markup and Measurement Software — Bluebeam](https://www.bluebeam.com/product/markups-and-data/)
- [CleanShot X vs Shottr — TheSweetBits](https://thesweetbits.com/cleanshot-vs-shottr/)
- [CleanShot X vs Snagit 2026](https://josephnilo.com/blog/cleanshot-x-vs-snagit/)
- [Best Snagit Alternative for Mac in 2026](https://www.screensnap.pro/blog/best-snagit-alternative-for-mac-in-2026)
- [SwiftUI: Running a Mac App Without an Xcode Project — objc.io](https://www.objc.io/blog/2020/05/19/swiftui-without-an-xcodeproj/)
- [How to build macOS apps using only the Swift Package Manager — The.Swift.Dev.](https://theswiftdev.com/how-to-build-macos-apps-using-only-the-swift-package-manager/)
- [Saving NSImage Produces 2X Size Image — Apple Developer Forums](https://developer.apple.com/forums/thread/103621)
- [Screenshot app resolution higher than display — Apple Community](https://discussions.apple.com/thread/253529444)
