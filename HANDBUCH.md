# Handbuch — Website Atelier AA Architekten

Praktische Anleitung für Änderungen an dieser Next.js-Website. Geschrieben für
Redaktion und Pflege, nicht für Entwickler: Wo möglich genügt es, eine Datei im
Ordner `src/data/` zu bearbeiten.

**Die wichtigste Regel:** Inhalte stehen in `src/data/`, Aussehen in
`src/components/`. Wer nur Inhalte pflegt, muss nie eine Komponente anfassen.

---

## Inhalt

1. [Vor jeder Änderung](#1-vor-jeder-änderung)
2. [Nach jeder Änderung: Kontrollliste](#2-nach-jeder-änderung-kontrollliste)
3. [Neues Projekt ergänzen](#3-neues-projekt-ergänzen)
4. [Neue Mitarbeiterin oder neuen Mitarbeiter ergänzen](#4-neue-mitarbeiterin-oder-neuen-mitarbeiter-ergänzen)
5. [Neuen Insights-Beitrag schreiben](#5-neuen-insights-beitrag-schreiben)
6. [Startseite ändern](#6-startseite-ändern)
7. [Bilder austauschen](#7-bilder-austauschen)
8. [Dateien und Ablagepfade — vollständige Referenz](#8-dateien-und-ablagepfade--vollständige-referenz)
9. [Design nicht kaputt machen](#9-design-nicht-kaputt-machen)
10. [Für Gemini und KI-Suche optimieren](#10-für-gemini-und-ki-suche-optimieren)
11. [Firmenangaben ändern](#11-firmenangaben-ändern)
12. [Claude-Skills zum Delegieren](#12-claude-skills-zum-delegieren)
13. [Offene Punkte](#13-offene-punkte)

---

## 1. Vor jeder Änderung

```bash
git pull                 # neuesten Stand holen
npm install              # nur nötig, wenn package.json sich geändert hat
npm run dev              # Entwicklungsserver, meist http://localhost:3000
```

Der Dev-Server zeigt Änderungen sofort im Browser. Lass ihn während der Arbeit
laufen.

---

## 2. Nach jeder Änderung: Kontrollliste

Diese vier Schritte **immer** durchlaufen, auch bei kleinen Textänderungen:

```bash
npm run type-check       # findet Tippfehler in Feldnamen und fehlende Felder
npm run build            # muss ohne Fehler durchlaufen
```

Dann im Browser prüfen:

- [ ] Die geänderte Seite sieht richtig aus
- [ ] **Mobil prüfen**: Browserfenster auf ca. 390px Breite ziehen (oder
      F12 → Gerätesymbol). Der grösste Teil der Besucher kommt mobil.
- [ ] **Zwischengrösse prüfen**: ca. 800px und ca. 1200px. Bei 1100px wechselt
      die Navigation zwischen Burger-Menü und Desktop-Leiste — genau dort
      entstehen Fehler.
- [ ] Alle Bilder werden geladen (kein grauer Kasten)
- [ ] Links funktionieren

**Wenn `npm run build` einen Fehler in `.next/types/...` meldet:** Cache
löschen und neu bauen — das ist ein Überrest einer gelöschten Seite, kein
echter Fehler:

```bash
rm -rf .next && npm run build
```

Dann committen:

```bash
git add -A
git commit -m "Kurze Beschreibung, was geändert wurde"
git push
```

> **Warum die ganze Seite prüfen?** Inhalte werden mehrfach verwendet. Ein
> Projekt erscheint auf der Projektseite, in „Weitere Projekte" unter jedem
> anderen Projekt und auf der Expertise-Seite. Ein Beitrag erscheint in der
> Insights-Übersicht und unter anderen Beiträgen. Wer ein Feld ändert, ändert
> mehrere Seiten gleichzeitig.

---

## 3. Neues Projekt ergänzen

### Schritt 1: Bilder ablegen

Ordner anlegen unter `public/images/projekte/<slug>/`. Der `<slug>` ist der
Name, der später in der Adresse steht — **kleingeschrieben, ohne Umlaute,
Wörter mit Bindestrich**:

| Projekttitel | richtiger Slug |
|---|---|
| MFH Untersiggenthal | `mfh-untersiggenthal` |
| Mehrfamilienhaus Künten | `mfh-kuenten` (ü → ue) |
| Wohnhaus Bärenweg | `wohnhaus-baerenweg` |

Dateien in diesen Ordner legen, **genau so benannt**:

| Datei | Zweck | Format | Grösse |
|---|---|---|---|
| `thumb.jpg` | Kachel in der Übersicht | 4:3 querformat | ca. 1200×900 px |
| `hero.jpg` | Grosses Bild oben auf der Projektseite | 16:9 querformat | ca. 1600×900 px |
| `01.jpg` … `04.jpg` | Galerie | beliebig | max. 1600 px lange Kante |

Regeln für Bilddateien:

- **Kleinbuchstaben**, keine Leerzeichen, keine Umlaute im Dateinamen
- `.jpg` für Fotos, `.png` nur für Grafiken mit Transparenz
- **Unter 500 KB pro Datei.** Grössere Bilder machen die Seite langsam. Zum
  Verkleinern: [squoosh.app](https://squoosh.app) im Browser, Qualität ca. 80.
- Wenn eine Datei `.png` ist, muss sie in den Daten auch `.png` heissen — die
  Endung muss zum echten Format passen.

### Schritt 2: Eintrag in `src/data/projekte.ts`

Am **Anfang** der Liste einfügen (neuestes Projekt zuerst — diese Reihenfolge
bestimmt die Anzeige):

```ts
{
  slug: 'wohnhaus-baerenweg',            // muss dem Ordnernamen entsprechen
  title: 'Wohnhaus Bärenweg',            // wie er angezeigt wird, mit Umlauten
  ort: 'Affoltern am Albis',
  kanton: 'ZH',                          // Kürzel, erscheint als "AFFOLTERN AM ALBIS ZH"
  kunde: 'Muster AG',                    // oder null, wenn nicht genannt werden darf
  jahr: '2026',
  beschreibung:
    'Zwei bis drei Sätze über das Projekt. Was war die Aufgabe, was ist die '
    + 'Antwort darauf. Nüchtern, ohne Werbesprache.',
  thumbnail: '/images/projekte/wohnhaus-baerenweg/thumb.jpg',
  heroImage: '/images/projekte/wohnhaus-baerenweg/hero.jpg',
  galerie: [
    '/images/projekte/wohnhaus-baerenweg/01.jpg',
    '/images/projekte/wohnhaus-baerenweg/02.jpg',
    '/images/projekte/wohnhaus-baerenweg/03.jpg',
    '/images/projekte/wohnhaus-baerenweg/04.jpg',
  ],
  featured: true,                        // true = erscheint auch auf der Expertise-Seite
},
```

Wichtig zu den Feldern:

- **`kunde`**: Wenn die Bauherrschaft nicht genannt werden soll, `null`
  schreiben (ohne Anführungszeichen). Die Zeile verschwindet dann automatisch
  von der Projektseite. Bitte **keine Platzhalter** wie „Privat" oder „test AG".
- **`featured`**: Auf der Expertise-Seite werden die ersten drei Projekte mit
  `featured: true` gezeigt. Mehr als drei ist erlaubt, es erscheinen aber nur
  drei.
- **Bildpfade** beginnen immer mit `/images/...` (ohne `public`).

### Schritt 3: Prüfen

Die neue Seite entsteht automatisch unter `/referenzen/<slug>`. Kontrolliere:

- [ ] `/projekte` — neue Kachel da, Bild lädt, Titel und Ort richtig
- [ ] `/referenzen/<slug>` — Detailseite komplett
- [ ] `/expertise` — falls `featured: true`
- [ ] Unter einem **anderen** Projekt bei „Weitere Projekte"
- [ ] Mobil bei 390px

**Kein Eintrag in einer Menü- oder Sitemap-Datei nötig** — beides entsteht
automatisch aus `projekte.ts`.

---

## 4. Neue Mitarbeiterin oder neuen Mitarbeiter ergänzen

### Schritt 1: Foto vorbereiten

- **Quadratisch zuschneiden** (1:1), ca. 800×800 px
- Möglichst gleiche Bildsprache wie die bestehenden Porträts: gleicher
  Hintergrund, ähnlicher Ausschnitt, ähnliche Helligkeit. Ein Foto, das
  herausfällt, sieht im Raster sofort falsch aus.
- Unter 200 KB
- Ablegen als `public/images/team/vorname-nachname.jpg` —
  **kleingeschrieben, Bindestrich, keine Umlaute**:
  - Aljili Aljisami → `aljili-aljisami.jpg`
  - Céline Müller → `celine-mueller.jpg`

### Schritt 2: Eintrag in `src/data/team.ts`

```ts
{
  name: 'Céline Müller',
  rolle: 'Architektin',
  bild: '/images/team/celine-mueller.jpg',
},
```

Die Reihenfolge in der Datei ist die Reihenfolge auf der Seite. Geschäftsführung
steht zuoberst.

Übliche Rollenbezeichnungen (bitte konsistent halten):
`Geschäftsführer, Dipl. Architekt` · `Architektin` · `Architekt` ·
`Bauleiter` · `Praktikantin`

### Schritt 3: Prüfen

- [ ] `/ueber-uns` — Foto lädt, Name und Rolle richtig geschrieben
- [ ] Das Raster ist noch ausgeglichen (bei 4 oder 8 Personen sieht es am
      besten aus; bei 5 entsteht eine Lücke — das ist normal)
- [ ] Mobil

**Wenn jemand das Büro verlässt:** Eintrag aus `team.ts` entfernen **und** die
Bilddatei löschen. Ein Foto, das im Netz bleibt, obwohl die Person gegangen
ist, kann datenschutzrechtlich problematisch sein.

---

## 5. Neuen Insights-Beitrag schreiben

### Schritt 1: Bild ablegen

`public/images/insights/<thema>.jpg` — sprechender Name, kleingeschrieben:
`ki-entwurf.png`, `kreislauf-bauen.jpg`, `holzbau-mehrgeschossig.jpg`.
Querformat, ca. 1600×900 px, unter 500 KB.

### Schritt 2: Eintrag in `src/data/insights.ts`

Am **Anfang** der Liste (neuester Beitrag zuerst):

```ts
{
  slug: 'holzbau-mehrgeschossig',        // erscheint in der Adresse
  titel: 'Mehrgeschossiger Holzbau: Was heute möglich ist',
  lead: 'Ein Satz, der neugierig macht und das Thema benennt. Erscheint in '
    + 'der Übersicht und in Suchergebnissen.',
  kategorie: 'Konstruktion',             // siehe Liste unten
  datum: '2026-08-15',                   // Format JJJJ-MM-TT, sonst Fehler
  lesezeit: 6,                           // Zahl, ohne "Min."
  bild: '/images/insights/holzbau-mehrgeschossig.jpg',
  abschnitte: [
    {
      titel: 'Zwischentitel als Frage oder Aussage',
      absaetze: [
        'Erster Absatz.',
        'Zweiter Absatz.',
      ],
    },
    // 3 bis 4 Abschnitte sind eine gute Länge
  ],
  fragen: [
    {
      frage: 'Eine Frage, die eine Bauherrschaft wirklich stellt?',
      antwort: 'Zwei bis vier Sätze. Konkret, ohne Ausweichen.',
    },
    // 4 bis 5 Fragen
  ],
},
```

### Verwendete Kategorien

Bitte bestehende weiterverwenden, statt neue zu erfinden:
`Digitalisierung` · `Nachhaltigkeit` · `Haltung` · `Konstruktion` · `Recht`

### Wie die Texte geschrieben sein sollen

Der Ton der Website ist nüchtern und in der Wir-Form. Was dazu passt:

- Kurze Sätze, konkrete Beispiele, Zahlen wenn belegbar
- Auch Grenzen benennen („oft ja, aber nicht immer")
- Schweizer Schreibweise: **ss statt ß** (grösste, Grundstücksgrösse)

Was nicht dazu passt: Superlative („einzigartig", „revolutionär"),
Ausrufezeichen, Werbefloskeln, leere Behauptungen ohne Begründung.

### Der Q&A-Teil ist der wichtigste Teil

Nicht Beiwerk, sondern der Abschnitt, über den neue Anfragen kommen. Er wird
von Google und KI-Systemen direkt als Antwort ausgelesen.

**Formuliere die Fragen so, wie ein Kunde sie eintippt oder einer KI stellt:**

| gut | schlecht |
|---|---|
| „Was kostet die Planung?" | „Honorarfragen" |
| „Ab wann sollten wir einen Architekten einbeziehen?" | „Zeitpunkt der Beauftragung" |
| „Lohnt sich ein Umbau gegenüber einem Neubau?" | „Bestand vs. Neubau" |

Regeln für die Antworten:

- **Der erste Satz muss die Frage beantworten.** KI-Systeme zitieren oft nur
  den Anfang. Also „Vor dem Grundstückskauf, wenn möglich." und dann die
  Begründung — nicht umgekehrt.
- 2 bis 4 Sätze. Länger wird nicht mehr als Antwort erkannt.
- Ohne Verweise wie „siehe oben" — jede Antwort muss allein verständlich sein,
  weil sie einzeln ausgeliefert wird.
- Keine Preise in Franken, die veralten. Lieber das Prinzip nennen
  („nach den SIA-Ordnungen als Prozentsatz der Baukosten").

### Schritt 3: Prüfen

- [ ] `/insights` — Kachel da, Datum richtig formatiert
- [ ] `/insights/<slug>` — Text vollständig, Bild lädt
- [ ] **Q&A aufklappen** — alle Fragen öffnen und schliessen sich
- [ ] Unter einem anderen Beitrag bei „Weitere Beiträge"
- [ ] Mobil

---

## 6. Startseite ändern

Die Startseite besteht aus zwei Teilen:

### Der Bildbereich oben (Slider)

Datei: `src/components/home/HeroSlider.tsx`, Liste `slides` ganz oben.

```ts
{
  image: '/images/hero/slide-baerenweg.jpg',
  projekt: 'Wohnhaus Bärenweg',
  ort: 'Affoltern am Albis',
  kanton: 'ZH',
  href: '/referenzen/wohnhaus-baerenweg',   // muss auf ein echtes Projekt zeigen
},
```

Zu beachten:

- **Bilder gehören nach `public/images/hero/`**, benannt `slide-<name>.jpg`
- Der Bildbereich ist **bildschirmhoch**. Das Bild wird beschnitten, wenn das
  Fenster ein anderes Verhältnis hat. Wähle Bilder, bei denen das Motiv mittig
  liegt und unten nichts Wichtiges ist — dort steht die Projektbezeichnung.
- Querformat, ca. 2000×1200 px, unter 600 KB
- Der Slider wechselt automatisch alle 6 Sekunden. Drei bis vier Slides sind
  sinnvoll; bei mehr sieht kaum jemand die letzten.
- **`href` muss auf ein bestehendes Projekt zeigen**, sonst führt der Klick auf
  eine Fehlerseite. Diese Verknüpfung wird nicht automatisch geprüft.

### Der Textblock darunter

Datei: `src/components/home/IntroSection.tsx`. Überschrift und zwei Absätze
stehen direkt im Text — hier darf geändert werden, aber der Ton sollte bleiben.

### Prüfen

- [ ] Bildbereich füllt den Bildschirm ganz, ohne Scrollbalken
- [ ] Alle Slides durchlaufen (ca. 20 Sekunden warten)
- [ ] Klick auf die Projektbezeichnung führt zum richtigen Projekt
- [ ] **Mobil**: Logo und Menü sind über dem Bild lesbar
- [ ] Nach unten scrollen: Logo schrumpft zum „A", Kopfzeile wird weiss

---

## 7. Bilder austauschen

**Der sicherste Weg: gleicher Dateiname.** Wenn das neue Bild genauso heisst
wie das alte, muss im Code nichts geändert werden.

```bash
# Beispiel: Titelbild eines Projekts ersetzen
cp ~/Downloads/neues-bild.jpg public/images/projekte/mfh-kuenten/thumb.jpg
```

**Wenn der Name sich ändert** (oder die Endung von `.jpg` zu `.png`), musst du
**alle** Stellen finden, die darauf zeigen:

```bash
# Zeigt jede Stelle, die das alte Bild verwendet
grep -rn "altes-bild" src/
```

Jeden Treffer anpassen. Dann prüfen, dass keine Verweise ins Leere zeigen:

```bash
# Listet alle Bildpfade aus dem Code, die es als Datei nicht gibt
grep -rhoE "'/images/[^']+'" src/ | tr -d "'" | sort -u \
  | while read p; do [ -f "public$p" ] || echo "FEHLT: $p"; done
```

Ausgabe leer = alles in Ordnung. Diesen Befehl **nach jedem Bildwechsel**
laufen lassen — ein fehlendes Bild bricht den Build nicht, hinterlässt aber
eine graue Fläche auf der Seite.

Ein Bild kann an mehreren Stellen verwendet werden. Prüfe deshalb immer, wo es
noch auftaucht, bevor du es löschst.

---

## 8. Dateien und Ablagepfade — vollständige Referenz

### Wo liegt welcher Inhalt?

| Was du ändern willst | Datei |
|---|---|
| Projekte (alle Angaben) | `src/data/projekte.ts` |
| Team | `src/data/team.ts` |
| Insights-Beiträge | `src/data/insights.ts` |
| Fragen auf der Kontaktseite | `src/data/insights.ts`, Liste `kontaktFragen` |
| Adresse, Telefon, E-Mail, UID | `src/data/firma.ts` |
| Menüpunkte | `src/data/navigation.ts` |
| Text der Startseite | `src/components/home/IntroSection.tsx` |
| Slider der Startseite | `src/components/home/HeroSlider.tsx` |
| Text „Über uns" | `src/app/ueber-uns/page.tsx` |
| Text „Expertise" | `src/app/expertise/page.tsx` |
| Text „offene Stellen" | `src/components/ueber-uns/OffeneStellen.tsx` |
| Impressum | `src/app/impressum/page.tsx` |
| Datenschutzerklärung | `src/app/datenschutzerklaerung/page.tsx` |

### Wo liegt welches Bild?

```
public/
├── favicon-32.png                      Symbol im Browser-Tab
├── apple-touch-icon.png                Symbol auf iPhone-Startbildschirm
└── images/
    ├── logo/
    │   ├── atelier-aa-logo.svg         Wortmarke (im Code eingebettet, Datei als Reserve)
    │   └── atelier-aa-signet-512.png   Das „A" allein
    ├── hero/
    │   └── slide-<name>.jpg            Slider der Startseite
    ├── projekte/
    │   └── <slug>/                     ein Ordner je Projekt
    │       ├── thumb.jpg               Kachel, 4:3
    │       ├── hero.jpg                Titelbild, 16:9
    │       └── 01.jpg … 04.jpg         Galerie
    ├── team/
    │   └── vorname-nachname.jpg        Porträt, quadratisch
    ├── insights/
    │   └── <thema>.jpg                 Beitragsbild, querformat
    └── kontakt/
        └── kontakt-hero.jpg            Titelbild Kontaktseite
```

### Namensregeln (gelten überall)

| Regel | richtig | falsch |
|---|---|---|
| Kleinbuchstaben | `thumb.jpg` | `Thumb.JPG` |
| Bindestriche statt Leerzeichen | `mfh-kuenten` | `MFH Künten` |
| Umlaute ausschreiben | `kuenten`, `baerenweg` | `künten`, `bärenweg` |
| Endung = echtes Format | PNG-Datei heisst `.png` | PNG-Datei heisst `.jpg` |
| Pfad im Code ohne `public` | `/images/team/x.jpg` | `/public/images/team/x.jpg` |

### Grössen und Gewichte

| Verwendung | Seitenverhältnis | Pixel | maximal |
|---|---|---|---|
| Slider Startseite | 16:9 oder breiter | 2000×1200 | 600 KB |
| Projekt-Titelbild | 16:9 | 1600×900 | 500 KB |
| Projekt-Kachel | 4:3 | 1200×900 | 400 KB |
| Projekt-Galerie | beliebig | max. 1600 lange Kante | 500 KB |
| Porträt | 1:1 | 800×800 | 200 KB |
| Insights-Bild | 16:9 | 1600×900 | 500 KB |

Zum Verkleinern: [squoosh.app](https://squoosh.app), Qualität 80, Format
behalten.

### Was nicht angefasst werden sollte

| Datei | warum |
|---|---|
| `src/components/layout/Logo.tsx` | Logo als Vektorpfade, 1:1 aus der alten Website |
| `src/components/ui/Arrow.tsx` | Pfeil-Symbol, ebenfalls übernommen |
| `tailwind.config.ts` | Farben und Umschaltpunkte — Änderungen wirken auf alle Seiten |
| `src/app/layout.tsx` | Schriftart und Firmendaten für Suchmaschinen |
| `src/app/sitemap.ts`, `robots.ts` | entstehen automatisch, nur bei neuen Seitentypen anpassen |
| `vorlage-wordpress/` | Archiv der alten Website, wird nicht veröffentlicht |

---

## 9. Design nicht kaputt machen

### Nur diese Farben verwenden

In `tailwind.config.ts` definiert. Immer diese Namen benutzen, nie eigene
Farbwerte:

| Name | Farbe | wofür |
|---|---|---|
| `ink` | fast schwarz | Text, Überschriften |
| `graphite` | dunkelgrau | Fliesstext |
| `stone` | mittelgrau | Kleintext, Beschriftungen |
| `mist` | hellgrau | Trennlinien, Flächen |
| `paper` | fast weiss | Hintergründe |

Also `text-ink`, nicht `text-black`. Und nie `text-[#222222]`.

### Wiederkehrende Muster

Wenn du eine neue Seite oder einen Abschnitt anlegst, kopiere die Muster einer
bestehenden Seite, statt eigene Werte zu erfinden:

| Element | Schreibweise |
|---|---|
| Abstand oben auf Unterseiten | `pt-32 md:pt-40` |
| Textbreite | `max-w-3xl` |
| Kleine Beschriftung über Titeln | `text-xs uppercase tracking-widest text-stone` |
| Grosse Überschrift | `text-4xl md:text-5xl lg:text-6xl font-light` |
| Trennlinie | `border-t border-mist` |
| Übergänge | `duration-300` (Standard), `duration-500` (Bilder) |

Schriftschnitte: Es werden nur `font-light` (300) und `font-medium` (500)
verwendet. **Kein `font-bold`** — das passt nicht zur Anmutung.

### Umschaltpunkte

| Kürzel | ab Breite | Bedeutung |
|---|---|---|
| (keins) | 0 px | Mobil — die Grundlage |
| `md:` | 768 px | Tablet |
| `lg:` | **1100 px** | Desktop, Navigation wechselt hier |

`lg` ist bewusst auf 1100px gesetzt (nicht der Tailwind-Standard 1024px), weil
fünf Menüpunkte und das Logo darunter nicht nebeneinander passen. **Wenn ein
sechster Menüpunkt dazukommt, muss dieser Wert erhöht werden** — sonst
überlappt die Navigation das Logo.

### Drei Effekte, die überall gleich sein müssen

Diese Effekte stammen aus der alten Website und sind Teil des
Erscheinungsbilds. Wenn du neue Elemente baust, verwende dieselben Werte:

1. **Menü-Unterstreichung**: Linie 1.5px, wächst von links auf volle Breite,
   300ms. In `Navigation.tsx`, gilt für Desktop und Mobil.
2. **Pfeil-Link**: Pfeil wandert beim Überfahren 0.2em nach rechts, 300ms.
   Erreichbar über `<Button variant="text">`.
3. **Projektkachel**: dunkles Feld über dem Bild plus weisser Pfeil, 400ms;
   Bild vergrössert sich auf 102%, 500ms.

### Häufige Fehler

| Fehler | Folge |
|---|---|
| Eigene Farbwerte statt der Namen | Farbe passt nicht, fällt später auf |
| `font-bold` verwenden | wirkt fremd im Schriftbild |
| Nur am Desktop geprüft | mobil verschoben oder abgeschnitten |
| Sehr grosses Bild hochgeladen | Seite lädt langsam |
| Bild umbenannt, Pfad nicht angepasst | graue Fläche statt Bild |
| Sechster Menüpunkt ohne `lg`-Anpassung | Navigation überlappt Logo |

---

## 10. Für Gemini und KI-Suche optimieren

KI-Systeme wie Google Gemini beantworten Fragen direkt, statt nur Links zu
zeigen. Damit die Website als Quelle genannt wird, braucht sie klar
strukturierten, eindeutig zugeordneten Text.

### Was bereits eingerichtet ist

Diese Dinge laufen automatisch mit — nicht ändern, aber wissen, dass sie da
sind:

| Was | Wo | Zweck |
|---|---|---|
| `robots.txt` | `src/app/robots.ts` | erlaubt ausdrücklich `Google-Extended` — den Zugriff, den Gemini nutzt. Ohne das kann Gemini die Seite nicht zitieren. |
| `sitemap.xml` | `src/app/sitemap.ts` | listet alle Seiten, wächst automatisch mit |
| Firmendaten für Maschinen | `src/app/layout.tsx` | Adresse, Leistungen, Einsatzgebiet als `ArchitecturalService` |
| Beitrag + Q&A für Maschinen | `src/app/insights/[slug]/page.tsx` | `Article` und `FAQPage` |
| Fragen der Kontaktseite | `src/app/kontakt/page.tsx` | `FAQPage` |
| Aufklappbare Q&A | `src/components/insights/FragenAntworten.tsx` | nutzt `<details>` — der Antworttext steht **auch geschlossen** im Seitenquelltext |

Der letzte Punkt ist entscheidend: Ein Aufklapp-Element, das Text erst beim
Klick nachlädt, liefert einer KI nichts. Darum ist bewusst die einfache
HTML-Variante gewählt. **Wenn jemand das gegen eine JavaScript-Lösung
austauscht, verliert die Seite ihre Auffindbarkeit.**

### Was du bei jedem neuen Inhalt tun musst

**1. Beschreibung für Suchmaschinen setzen.** Jede Seite hat oben ein
`description`-Feld. Es muss Ort, Leistung und konkrete Begriffe enthalten:

```ts
// gut — beantwortet "wer, was, wo"
description:
  'Referenzprojekte von Atelier AA Architekten GmbH aus Obfelden ZH: '
  + 'Mehrfamilienhäuser in Untersiggenthal, Murgenthal und Künten. '
  + 'Wohnbau, Umbau und Sanierung in den Kantonen Zürich und Aargau.',

// schlecht — sagt nichts Auffindbares
description: 'Unsere Projekte.',
```

Faustregel: 150 bis 200 Zeichen, mit **Ortsnamen** und **Leistung**.

**2. Q&A ergänzen.** Bei jedem neuen Beitrag 4 bis 5 Fragen, formuliert wie
gesprochene Suchanfragen (siehe [Abschnitt 5](#5-neuen-insights-beitrag-schreiben)).

**3. Orte und Fachbegriffe ausschreiben.** KI-Systeme verbinden Text mit Orten.
Also „Mehrfamilienhaus in Untersiggenthal, Kanton Aargau" statt „das Projekt in
UT". Bei Fachbegriffen einmal die volle Form nennen: „graue Energie (Emissionen
aus Herstellung und Transport)".

**4. Konkret statt allgemein.** „Wir planen Mehrfamilienhäuser in den Kantonen
Zürich und Aargau" ist auffindbar. „Wir gestalten Lebensräume" ist es nicht.

### Nach dem Veröffentlichen

- Neue Seiten in der [Google Search Console](https://search.google.com/search-console)
  anmelden (URL prüfen → Indexierung beantragen)
- Strukturierte Daten testen:
  [Rich Results Test](https://search.google.com/test/rich-results) — die URL
  einfügen, es müssen `FAQPage` und `Article` erkannt werden
- Gegenprobe: Gemini oder Google fragen „Architekt in Obfelden" und schauen, ob
  die Seite auftaucht. Das dauert nach einer Änderung einige Wochen.

### Was der Auffindbarkeit schadet

- Text als Bild (etwa eine Grafik mit Adresse) — Maschinen lesen das nicht
- Wichtige Inhalte hinter Klicks verstecken
- Dünne Seiten mit zwei Sätzen
- Gleiche `description` auf mehreren Seiten
- Schlagwortlisten ohne Sätze

---

## 11. Firmenangaben ändern

Adresse, Telefon, E-Mail und UID stehen **nur** in `src/data/firma.ts`. Eine
Änderung dort wirkt gleichzeitig auf Kopf- und Fusszeile, Impressum,
Datenschutzerklärung, Kontaktseite und die Firmendaten für Suchmaschinen.

Nach einer Änderung prüfen:

- [ ] Fusszeile auf jeder Seite
- [ ] `/kontakt`, `/impressum`, `/datenschutzerklaerung`
- [ ] `telefonHref` ebenfalls angepasst (Nummer ohne Leerzeichen, für den
      Anrufen-Link auf dem Handy)

**Ausserhalb der Website nicht vergessen:** Bei einem Umzug oder einer neuen
Nummer müssen auch die Einträge bei Google Business, search.ch, local.ch und
im Handelsregister nachgezogen werden. Der Stand Juli 2026: search.ch und
local.ch führten noch die veraltete Bachstrasse 29.

---

## 12. Claude-Skills zum Delegieren

Skills sind gespeicherte Arbeitsanweisungen, die du mit `/name` aufrufst. Sie
liegen als Markdown-Dateien im Projekt und lassen sich mit dem Team teilen —
so muss niemand die Schritte im Kopf haben.

### Anlegen

Ordner `.claude/skills/` im Projekt, darin eine Datei je Skill:

```
.claude/skills/
├── neues-projekt.md
├── neuer-beitrag.md
├── neues-teammitglied.md
├── bilder-pruefen.md
├── seite-pruefen.md
└── ki-check.md
```

Aufbau einer solchen Datei:

```markdown
---
name: neues-projekt
description: Legt ein neues Referenzprojekt an — Bilder einsortieren,
  Eintrag in projekte.ts, alle betroffenen Seiten prüfen.
---

Du ergänzt ein Referenzprojekt. Frage zuerst nach: Titel, Ort, Kanton,
Jahr, Bauherrschaft (oder ob sie ungenannt bleibt), Kurzbeschreibung
und wo die Bilder liegen.

Dann:
1. Slug bilden: kleingeschrieben, Umlaute ausschreiben, Bindestriche.
2. Ordner public/images/projekte/<slug>/ anlegen.
3. Bilder einsortieren als thumb.jpg (4:3), hero.jpg (16:9),
   01.jpg bis 04.jpg. Bei über 500 KB auf die Grösse hinweisen.
4. Eintrag am Anfang von src/data/projekte.ts einfügen. Bauherrschaft
   null setzen, wenn ungenannt — keine Platzhalter erfinden.
5. npm run type-check und npm run build.
6. Prüfen: /projekte, /referenzen/<slug>, /expertise (bei featured),
   "Weitere Projekte" unter einem anderen Projekt, mobil bei 390px.
7. Zusammenfassen, was geändert wurde, und Screenshots zeigen.

Halte dich an HANDBUCH.md. Erfinde keine Angaben — frag nach.
```

### Sechs empfohlene Skills

| Skill | Aufgabe | Für wen |
|---|---|---|
| `/neues-projekt` | Projekt anlegen, Bilder einsortieren, prüfen | Assistenz |
| `/neuer-beitrag` | Insights-Beitrag anlegen, inkl. Q&A-Vorschläge | Marketing |
| `/neues-teammitglied` | Porträt zuschneiden, Eintrag ergänzen | Assistenz |
| `/bilder-pruefen` | Alle Bildpfade auf Lücken prüfen, zu grosse Dateien melden | alle |
| `/seite-pruefen` | Build, Typecheck und Screenshots aller Seiten in drei Breiten | vor jedem Push |
| `/ki-check` | Beschreibungen und strukturierte Daten auf Vollständigkeit prüfen | Marketing |

Diese vier lohnen sich am meisten: `/neues-projekt` und `/neuer-beitrag`, weil
sie die häufigsten Aufgaben sind, sowie `/seite-pruefen` und `/bilder-pruefen`,
weil sie die häufigsten Fehler abfangen.

### Praktisch beim Delegieren

- **Anweisungen in die Datei, nicht ins Gespräch.** Eine Mitarbeiterin ruft
  `/neues-projekt` auf und wird durch die Schritte geführt — sie muss das
  Handbuch nicht gelesen haben.
- **Verweise auf `HANDBUCH.md`** in jedem Skill. Dann gilt eine Quelle, und
  Änderungen an den Regeln müssen nur an einer Stelle nachgezogen werden.
- **Schreib hinein, was nicht passieren darf**: keine Angaben erfinden, keine
  Farben ausserhalb der Palette, `null` statt Platzhalter.
- **Prüfschritte immer mit aufnehmen.** Ein Skill, der nur anlegt und nicht
  prüft, verlagert das Problem nur.
- Die Skills liegen im Git-Repository und sind damit für alle im Team gleich.

Beim Delegieren an Personen ohne Programmiererfahrung: Die Abschnitte 3 bis 7
dieses Handbuchs reichen für die Inhaltspflege aus. Alles darüber hinaus
(Komponenten, Farben, Umschaltpunkte) sollte über einen Skill oder mit
Rückfrage laufen.

---

## 13. Offene Punkte

Stand Juli 2026 — Dinge, die bewusst offen sind:

| Punkt | Stand |
|---|---|
| **Kontaktformular** | Nicht umgesetzt. Die alte Website hatte ein Forminator-Formular mit fünf Feldern. Für den Nachbau braucht es eine Entscheidung über den Mailversand (z. B. Resend) und die Empfängeradresse. Aktuell zeigt die Kontaktseite Adresse, Telefon und E-Mail. |
| **Projektbeschreibungen** | Neu geschrieben, weil in der alten Datenbank Lorem ipsum stand. Bitte fachlich prüfen. |
| **Bauherrschaften** | Bei drei von vier Projekten auf `null`, weil in der alten Datenbank „testkunde" bzw. „test AG" stand. Echte Namen können ergänzt werden. |
| **Insights-Bilder** | Behelfsweise Architekturfotos von Atelier AA. Eigene Motive zum Thema wären besser. |
| **Galeriebilder** | Die Dateien `01.jpg` bis `04.jpg` sind teils noch aus dem alten Bestand und nicht alle projektspezifisch geprüft. |
| **Verzeichniseinträge** | search.ch und local.ch führen noch Bachstrasse 29 statt 39. |
| **Handelsregisternummer** | Die alte Website nannte „CH-020.4.074.716-1" — eine Nummer der bis 2016 gültigen Systematik, extern nicht bestätigt. Im Impressum steht jetzt die UID, die heute maßgeblich ist. |

---

## Kurzreferenz

```bash
npm run dev              # Entwicklungsserver
npm run type-check       # Feldnamen und Typen prüfen
npm run build            # muss vor jedem Push fehlerfrei sein
rm -rf .next             # bei merkwürdigen Fehlern in .next/types

# Alle Bildpfade auf Lücken prüfen
grep -rhoE "'/images/[^']+'" src/ | tr -d "'" | sort -u \
  | while read p; do [ -f "public$p" ] || echo "FEHLT: $p"; done

# Wo wird ein Bild verwendet?
grep -rn "dateiname" src/
```

Prüfbreiten: **390 px** (Handy) · **800 px** (Tablet) · **1200 px** (Desktop)
