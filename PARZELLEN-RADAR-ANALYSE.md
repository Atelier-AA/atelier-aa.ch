# Parzellen-Radar Aargau / Uri — Machbarkeitsanalyse

Stand: 3. September 2026. Frage von AA: Kann ein Tool die öffentlichen
Kataster (Kanton Aargau, Kanton Uri) automatisch nach leeren Parzellen
absuchen und jede einzeln mit allen Informationen liefern?

## Kurzfazit

**Ja, das ist machbar** — und für beide Kantone mit frei zugänglichen,
amtlichen Daten. Drei Dinge muss AA vorher wissen:

1. **"Leer" muss definiert werden.** Sinnvoll ist: Liegenschaft in einer
   Bauzone, auf der die Amtliche Vermessung kein Gebäude führt. Der Kanton
   Aargau führt diesen Überbauungsstand sogar selbst jährlich nach, der
   Kanton Uri publiziert eine kantonsweite Baulanddatenbank. Das Tool
   erfindet also nichts, es verschneidet und filtert amtliche Daten.
2. **Eigentümer lassen sich nicht automatisch mitliefern.** Im Aargau gibt
   es eine kostenlose Online-Eigentümerabfrage, aber nur per Klick,
   registriert, maximal zehn Grundstücke pro Tag. In Uri geht es über das
   Grundbuchamt. Das Tool liefert also alles ausser dem Namen; der Name
   wird für die wenigen Parzellen, die wirklich interessieren, von Hand
   nachgetragen.
3. **Bauen und testen kann ich das hier nicht.** Die Netzfreigabe dieser
   Arbeitsumgebung sperrt sämtliche Schweizer Geodaten-Server
   (geodienste.ch, geo.admin.ch, ag.ch, ur.ch, geocat.ch). Den Code kann
   ich schreiben, gegen echte Daten laufen muss er lokal oder in einer
   Umgebung mit erweiterter Netzfreigabe.

## Was "leere Parzelle" für das Tool heisst

Der Kataster kennt keine "leeren" Parzellen. Er kennt Liegenschaften
(Parzellen mit Nummer, EGRID und Fläche) und Bodenbedeckung (Gebäude,
Strasse, Wiese, Wald usw.). Die Nutzungsplanung kennt Zonen. Leer im Sinn
von AA ist die Schnittmenge:

| Stufe | Definition | Woher |
| --- | --- | --- |
| Unüberbaut | Liegenschaft ganz oder überwiegend in Wohn-, Misch-, Kern- oder Arbeitszone, kein Gebäude in der Bodenbedeckung | AV-Verschnitt, im Aargau zusätzlich amtlicher Überbauungsstand |
| Baulücke | wie oben, aber allseitig von überbauten Parzellen umgeben, Fläche typisch 400–1500 m² | Nachbarschaftsanalyse |
| Untergenutzt | überbaut, aber Gebäudegrundfläche weit unter dem, was die Nutzungsziffer zulässt | AV + Nutzungsziffer aus Zone (spätere Ausbaustufe) |

Wichtig für die Akquise: **Unüberbaut heisst nicht verfügbar.** Ein grosser
Teil der Baulandreserven wird bewusst gehalten (Familienland, Reserve für
Nachkommen, Landwirtschaft in der Bauzone). Das Tool zeigt, wo Bauland
liegt; ob jemand bauen will, zeigt es nicht. Deshalb gehört das Ergebnis
als Vorstufe in den Akquise-Radar und nicht direkt in ein Anschreiben.

## Datenlage je Kanton

### Kanton Aargau

| Datensatz | Inhalt | Zugang |
| --- | --- | --- |
| Amtliche Vermessung (AGIS, Datenmodell DM.01-AV-AG) | Liegenschaften, Bodenbedeckung, Gebäude, Gebäudeadressen, EGRID | Open Data, Direktdownload via opendata.swiss / AGIS Geodatenshop, zusätzlich WMS/WFS via geodienste.ch |
| Nutzungsplanung Grundnutzung (Bauzonen- und Kulturlandplan) | Rechtsgültige Zonen aller Gemeinden mit Originalbezeichnung, Nutzungsziffern, Lärmempfindlichkeitsstufe, Stand der Erschliessung | Open Data, WMS/WFS, Download |
| Raumbeobachtung: Bauzonen | Überbauungsstand je Fläche (überbaut / unüberbaut, Kategorien nach kantonaler Definition), jährlich per 31.12. nachgeführt | Geodatenshop, Datensatzelement 6930 |
| ÖREB-Kataster | Je Grundstück alle öffentlich-rechtlichen Eigentumsbeschränkungen: Zone, Baulinien, Gefahrenkarte, Grundwasserschutz, Lärm, Denkmalschutz, Waldabstand | Maschinenschnittstelle (XML/JSON-Auszug per EGRID), api.geo.ag.ch |
| Eigentümerabfrage | Name und Adresse des Grundeigentümers | Geoportal, kostenlos, Registrierung mit Mobilnummer, **max. 10 Abfragen pro Tag, nur per Klick** |

### Kanton Uri

| Datensatz | Inhalt | Zugang |
| --- | --- | --- |
| Amtliche Vermessung (Lisag AG, GIS Uri) | Liegenschaften, Bodenbedeckung, Gebäude, Adressen, EGRID | Open Government Data, Download und WFS über geo.ur.ch und geodienste.ch, Quellenangabe "Lisag AG" |
| Nutzungsplanung | Rechtsgültige Bauzonen aller Gemeinden | geo.ur.ch, opendata.swiss |
| **Baulanddatenbank Uri** | Kantonsweit alle möglichen Bauflächen in Wohn- und Arbeitszonen, weitgehend unüberbaut, nach Methode Raum+ mit den Gemeinden erhoben; ausdrücklich auch Flächen, die nicht aktiv angeboten werden | ur.ch/bauland, opendata.swiss, geocat |
| Landwertzonen | Kantonale Landwertzonen (Preisniveau) | opendata.swiss |
| ÖREB-Kataster | wie Aargau, geführt von Lisag | ÖREB-Webservice Uri |
| Grundbucheinsicht | Name und Adresse ohne Interessennachweis, weitere Angaben nur mit Interessennachweis | Grundbuchamt Uri, keine Online-Massenabfrage |

Für Uri ist die Arbeit zu einem grossen Teil schon gemacht: Die
Baulanddatenbank ist genau die Liste, die AA sucht. Das Tool muss sie nur
regelmässig abholen, mit Parzellendaten und ÖREB anreichern und
Veränderungen melden.

### Bund als Rückfallebene

Das ARE publiziert "Bauzonen Schweiz (harmonisiert)" über geo.admin.ch
(WFS, Layer ch.are.bauzonen). Damit lässt sich das Tool später auf weitere
Kantone ausdehnen (Zürich, Zug, Luzern), ohne pro Kanton neu anzufangen.
Rechtsgültig sind aber immer die kantonalen Daten.

## Was das Tool pro Parzelle liefern kann

Alles davon stammt aus öffentlichen, amtlichen Quellen:

- Gemeinde, Parzellennummer, EGRID, Fläche in m², Perimeter
- Zone mit Originalbezeichnung, Nutzungsziffer, Lärmempfindlichkeitsstufe
- Überbauungsstand und Stand der Erschliessung (Aargau amtlich, Uri aus Baulanddatenbank)
- Bodenbedeckung auf der Parzelle (Wiese, Acker, Gartenanlage, befestigt)
- Gebäude auf der Parzelle: keines, oder Anzahl und Grundfläche
- Strasse und nächste Adresse, Nachbarbebauung (Baulücke ja/nein)
- ÖREB-Beschränkungen: Baulinien, Gefahrenstufe, Grundwasserschutzzone, Waldabstand, Denkmalschutz, Planungszonen
- Hangneigung und Exposition aus dem Höhenmodell swissALTI3D (relevant für Machbarkeitsstudien)
- Landwertzone (Uri) beziehungsweise Gemeinde-Richtwerte (Aargau, wo publiziert)
- Direktlinks: AGIS-Karte oder geo.ur.ch, map.geo.admin.ch, ÖREB-Auszug als PDF
- Veränderung seit dem letzten Lauf: neu unüberbaut, neu überbaut, Zone geändert, Fläche geändert (Parzellierung)
- Eigentümer: leeres Feld zum manuellen Nachtragen, im Aargau mit Link auf die Eigentümerabfrage

## Technischer Vorschlag

**Prinzip: Batch-Lauf statt Live-Abfrage.** Die AV-Daten eines Kantons sind
einige hundert Megabyte. Die verschneidet man nicht bei jedem Aufruf,
sondern einmal pro Woche oder Monat, speichert das Ergebnis und schaut nur
noch auf die Veränderungen.

1. **Abholen.** AV (GeoPackage) und Bauzonen je Kanton, Uri zusätzlich die Baulanddatenbank.
2. **Verschneiden.** Liegenschaften mit Bauzonen; Gebäude aus der Bodenbedeckung abziehen; Filter nach Zonentyp, Mindestfläche, Gemeinde- oder Regionsliste.
3. **Anreichern.** Für jede Treffer-Parzelle ÖREB-Auszug per EGRID (JSON), Hangneigung, Adresse, Nachbarschaft.
4. **Vergleichen.** Gegen den letzten Lauf: Was ist neu, was ist weggefallen, was hat sich geändert.
5. **Ausgeben.** Excel/CSV je Gemeinde, ein Kartenlink pro Parzelle, ein kurzer Änderungsbericht. Optional ein passwortgeschützter Bereich auf atelier-aa.ch, da die Website ohnehin auf Vercel mit API-Routen läuft.

**Werkzeuge.** Python mit GeoPandas oder DuckDB Spatial für den Verschnitt
(bewährt, schnell, keine Datenbank nötig), Lauf über GitHub Actions oder
einen lokalen Rechner nach Zeitplan. Das Ergebnis ist eine kleine Datei,
die die Website oder Excel lesen kann. Die Website selbst bleibt
unverändert; der Radar ist ein eigenes, kleines Repository oder ein
Unterordner, der nicht mit veröffentlicht wird (siehe VEROEFFENTLICHEN.md).

**Grössenordnung.** Ohne Filter liefert der Aargau Zehntausende
unüberbaute Flächen, davon sehr viele Restflächen, Vorgärten und
Strassenparzellen. Mit Mindestfläche, Zonentyp und einer Gemeindeliste
(Freiamt, Lenzburg, Baden, Zurzibiet) wird daraus eine Liste von einigen
hundert Parzellen, die man tatsächlich durchsehen kann.

## Grenzen und Risiken

- **Eigentümer.** Automatisierte Abfragen im Aargauer Geoportal verstossen gegen dessen Nutzungsbedingungen und sind auf zehn pro Tag begrenzt. Das Tool darf sie nicht umgehen, und das würde ich auch nicht bauen. Zehn Handabfragen pro Tag reichen für die Leads, die nach der Filterung übrig bleiben.
- **Datenschutz.** Eigentümernamen dürfen intern für die Kontaktaufnahme erfasst werden, gehören aber nicht in geteilte Dateien oder auf die Website. Die bestehende Regel aus VEROEFFENTLICHEN.md (keine Bauherrschaftsnamen nach aussen) gilt hier doppelt.
- **Aktualität.** Die AV wird laufend nachgeführt, aber ein Neubau erscheint erst nach der Bauabnahme als Gebäude. Ein Rohbau gilt im Tool noch als unüberbaut. Der Aargauer Überbauungsstand ist ein Jahresstand. Für die Akquise ist beides eher ein Vorteil: Parzellen, die gerade aus der Liste fallen, zeigen, wo eben gebaut wurde.
- **Zonenlogik.** Sonderzonen, Gestaltungsplanpflicht und Erschliessungsvorbehalte lassen sich nur über ÖREB und Gemeindereglemente klären. Das Tool markiert, es beurteilt nicht.
- **Nutzungsbedingungen.** Die Daten sind frei, verlangen aber Quellenangabe (AGIS, Lisag AG). Weitergabe der Rohdaten an Dritte ist nicht vorgesehen und auch nicht nötig.
- **Umgebung.** In dieser Sitzung sind alle nötigen Server gesperrt. Ich kann Pipeline, Filter und Ausgabe schreiben und mit Beispieldaten prüfen, den echten Lauf aber nicht. Das muss AA lokal starten oder die Netzfreigabe der Umgebung erweitern.

## Empfehlung

In drei Schritten bauen, jeder für sich nützlich:

1. **Uri zuerst (1–2 Arbeitstage).** Baulanddatenbank abholen, mit Parzellen und ÖREB anreichern, als Excel und Karte ausgeben. Kleiner Kanton, fertige Grundlage, sofortiger Nutzen.
2. **Aargau (3–5 Arbeitstage).** Eigener Verschnitt AV × Bauzonen, abgeglichen mit dem amtlichen Überbauungsstand, mit Gemeinde- und Flächenfilter.
3. **Monitoring und Anschluss an den Akquise-Radar (2–3 Arbeitstage).** Wöchentlicher Lauf, Änderungsbericht, Übergabe der interessanten Parzellen in das bestehende Lead-Format mit Score.

Bevor es losgeht, braucht es von AA vier Entscheidungen:

- Welche Gemeinden oder Regionen in beiden Kantonen (Vollabdeckung oder Fokus)?
- Mindestfläche und Zonentypen (nur Wohnen, oder auch Arbeiten und Kern)?
- Ausgabe: Excel, interne Webseite, oder beides?
- Wo läuft das Tool: lokal bei AA, GitHub Actions, oder Vercel-Cron?

## Quellen (abgerufen 3. September 2026)

- Amtliche Vermessung Aargau, Datenmodell Aargau, Open Data: https://opendata.swiss/de/dataset/av-daten-der-amtlichen-vermessung-datenmodell-aargau
- Nutzungsplanung Grundnutzung Aargau: https://opendata.swiss/de/dataset/nutzungsplanung-grundnutzung-im-bauzonen-und-kulturlandplan
- Raumbeobachtung Bauzonen Aargau (Überbauungsstand): https://www.ag.ch/geoportal/geodatenshop/Datendokumentation.aspx?Datensatzelement=6930
- Definition Überbauungsstand-Kategorien Aargau: https://www.ag.ch/media/kanton-aargau/bvu/raumentwicklung/grundlagen-und-kantonalplanung/bzstat-definition-ueberbauungsstand.pdf
- ÖREB-Kataster Aargau: https://apps.geo.ag.ch/oereb/client/
- Eigentümerabfrage Aargau (10 pro Tag, Registrierung): https://geometer-rheinfelden.ch/eigentuemerabfrage/ und https://www.aargauerzeitung.ch/aargau/kanton-aargau/grundeigentum-kanton-macht-transparent-wem-was-gehort-ld.1316671
- Geoportal Uri: https://geo.ur.ch/ und https://www.ur.ch/dienstleistungen/4523
- Liegenschaften Uri, Open Data: https://opendata.swiss/en/dataset/liegenschaften-ur
- Baulanddatenbank Uri: https://www.ur.ch/dienstleistungen/4297 und https://opendata.swiss/de/dataset/baulanddatenbank
- Nutzungsbestimmungen GIS Uri: https://www.lisag.ch/nutzungsbestimmungen-gis-uri
- Grundbucheinsicht Uri: https://www.ur.ch/dienstleistungen/3868
- geodienste.ch Amtliche Vermessung: https://www.geodienste.ch/services/av
- ÖREB-Webservice (M2M-Schnittstelle, Bund): https://www.cadastre.ch/de/oereb-webservice
- Bauzonen Schweiz harmonisiert (ARE): https://opendata.swiss/de/dataset/bauzonen-schweiz-harmonisiert
