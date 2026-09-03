# Parzellen-Radar ZH / AG / ZG / LU — Machbarkeitsanalyse

Stand: 3. September 2026. Frage von AA: Kann ein Tool die öffentlichen
Kataster der Kantone Zürich, Aargau, Zug und Luzern automatisch nach
unüberbauten Parzellen absuchen und jede einzeln mit allen Informationen
liefern — **inklusive Eigentümer**?

## Kurzfazit

**Parzellen: ja, vollautomatisch.** Alle vier Kantone geben die Amtliche
Vermessung und die Bauzonen als Open Data ab. Luzern und Zürich
publizieren die unüberbauten Bauzonen sogar als fertigen Datensatz, der
Aargau den Überbauungsstand je Fläche. Nur Zug braucht einen eigenen
Verschnitt.

**Eigentümer: ja, aber nur von Hand und nur einzeln.** Alle vier Kantone
bieten eine kostenlose Online-Eigentümerabfrage an. Sie ist bewusst auf
Einzelabfragen begrenzt: Zürich 5 pro Tag, Aargau 10, Luzern 5, Zug mit
SMS-Code und Protokollierung. Serienabfragen sind nach Bundesrecht
unzulässig (ZGB 970, GBV 26), die Kantone protokollieren und sperren bei
Missbrauch. Ein Tool, das Eigentümer automatisch abgreift, wäre
rechtswidrig und würde AA den Zugang kosten. Das baue ich nicht.

**Was stattdessen funktioniert:** Das Tool reduziert Zehntausende Flächen
auf einige hundert wirklich interessante Parzellen, ordnet sie nach
Priorität und bereitet die Handabfrage so vor, dass sie pro Parzelle eine
Minute dauert. Mit den Tageslimiten der vier Kantone sind das rund
**20 Eigentümer pro Arbeitstag, 100 pro Woche**. Das reicht für die Akquise
bei weitem; der Engpass ist nicht die Abfrage, sondern die Nacharbeit.

**Umgebung:** Diese Arbeitsumgebung sperrt alle Schweizer Geodaten-Server.
Den Code kann ich schreiben, der echte Lauf muss lokal bei AA erfolgen.

## Eigentümer: Rechtslage und Zugang je Kanton

### Was das Gesetz erlaubt

- **Öffentlich ohne Interessennachweis** sind je Grundstück: Bezeichnung
  und Beschreibung, Name und Identifikation des Eigentümers, Eigentumsform
  und Erwerbsdatum (ZGB Art. 970 Abs. 2, GBV Art. 26).
- **Nur grundstücksbezogen.** Eine Suche nach Personen ist nicht erlaubt,
  ebenso wenig Serien- oder Sammelabfragen. Auskunft über eine grössere
  Zahl von Grundstücken gibt es nur mit glaubhaft gemachtem, für den
  Grundbuchzweck relevantem Interesse. Akquise ist kein solches Interesse.
- **Konsequenz für das Tool:** Es darf keine Eigentümer abrufen. Es darf
  die Handabfrage vorbereiten, verlinken und das Ergebnis speichern.

### Zugang je Kanton

| Kanton | Wo | Kosten | Limite | Besonderheiten |
| --- | --- | --- | --- | --- |
| Zürich | GIS-Browser maps.zh.ch, Notariate | kostenlos | 5 Grundstücke pro Tag, SMS-Code an CH-Mobilnummer, Code 5 Minuten gültig | Seit 2025 können Eigentümer ihre Daten sperren lassen (§ 35c kGBV); dann bleibt nur die schriftliche Anfrage beim Notariat |
| Aargau | Geoportal ag.ch | kostenlos | 10 Grundstücke pro Tag, Registrierung mit Mobilnummer | Klick auf die Parzelle in der Karte, Ausgabe Name und Adresse |
| Zug | ZugMap.ch | kostenlos | Limite nicht publiziert, SMS-Code 5 Tage gültig, Logging aller Abfragen | Sperre bei Verdacht auf Serienabfragen. Zusätzlich verbindliche Eigentümerliste auf Bestellung, kostenpflichtig ab CHF 45, Zweck nötig |
| Luzern | grundbuch.lu.ch, geoportal.lu.ch | kostenlos | 5 Grundstücke pro Tag | Kanton protokolliert alle Abfragen zwei Jahre; Nutzer müssen die Angemessenheit auf Verlangen belegen |

Die Limiten gelten pro registrierter Person. Wer bei AA die Abfragen
macht, registriert sich mit der eigenen Mobilnummer. Keine geteilten oder
fremden Konten.

### Weitere rechtmässige Wege zum Eigentümer

Diese lassen sich teilweise automatisieren, weil sie öffentliche Quellen
sind, die den Eigentümer selbst nennen:

- **Öffentliche Hand.** Zonen für öffentliche Bauten und Gemeindeland sind
  aus dem Zonenplan erkennbar; viele Gemeinden führen ihr Bauland auf der
  Website. Eigentümer ist dann Gemeinde, Kanton oder Kirchgemeinde.
- **Baupublikationen.** Amtsblätter nennen die Bauherrschaft. Wer auf der
  Nachbarparzelle baut, ist oft auch Eigentümer der leeren Parzelle
  daneben. Das ist bereits Teil des Akquise-Radars.
- **Handelsregister (Zefix).** Sobald eine Firma als Eigentümerin
  feststeht, liefert Zefix Sitz, Organe und Zeichnungsberechtigte.
- **Inserate.** Bauland-Angebote auf den Portalen nennen Anbieter oder
  Makler.
- **Terravis-Auskunftsportal.** Berufszugang für Notare, Geometer, Banken,
  Anwälte, institutionelle Eigentümer und "weitere berechtigte Personen"
  je nach Kanton. Architekturbüros gehören nicht zum Standardkreis. Eine
  Anfrage beim Grundbuchamt kostet nichts, die Chance ist aber gering.
- **Zug, Eigentümerliste auf Bestellung.** Ob das Amt eine Liste für einen
  Perimeter ohne Bauvorhaben abgibt, ist zu klären. Vermutlich nicht.

## Parzellen: Datenlage je Kanton

| Kanton | Unüberbaute Bauzonen | Amtliche Vermessung | Eigenleistung des Tools |
| --- | --- | --- | --- |
| Zürich | OGD-Datensatz "Zonenpläne, Überbauungs- und Erschliessungsstand der Gemeinden", alle Gemeinden, Jahresstand Ende 2024, über den OGD-WFS des Kantons (geolion) | Open Data | Abholen, mit Liegenschaften verschneiden, filtern |
| Aargau | "Raumbeobachtung: Bauzonen" mit Überbauungsstand je Fläche, Jahresstand 31.12., plus Nutzungsplanung Grundnutzung mit Nutzungsziffern und Erschliessungsstand | Open Data (Datenmodell AG) | Abholen, mit Liegenschaften verschneiden, filtern |
| Zug | Kein fertiger Datensatz gefunden; Zonenplan Grundnutzung vorhanden | Kostenlos über ZugMap | Eigener Verschnitt Liegenschaften × Bauzone minus Gebäude |
| Luzern | "Unüberbaute Bauzonen, in Kraft" laufend nachgeführt, dazu Jahresstände 2021 bis 2025, Lizenz Open-By, Direktdownload daten.geo.lu.ch | Open Data | Abholen, anreichern, filtern; kaum Eigenleistung |

Dazu in allen vier Kantonen der ÖREB-Kataster mit Maschinenschnittstelle
(XML/JSON-Auszug per EGRID) und als Rückfallebene "Bauzonen Schweiz
(harmonisiert)" des ARE über geo.admin.ch.

## Was "leere Parzelle" für das Tool heisst

| Stufe | Definition | Woher |
| --- | --- | --- |
| Unüberbaut | Liegenschaft ganz oder überwiegend in Wohn-, Misch-, Kern- oder Arbeitszone, kein Gebäude | kantonale Datensätze, in Zug AV-Verschnitt |
| Baulücke | wie oben, allseitig von überbauten Parzellen umgeben, typisch 400–1500 m² | Nachbarschaftsanalyse |
| Untergenutzt | überbaut, aber Gebäudegrundfläche weit unter dem, was die Nutzungsziffer zulässt | AV + Nutzungsziffer, spätere Ausbaustufe |

**Unüberbaut heisst nicht verfügbar.** Viel Bauland wird bewusst gehalten.
Das Tool zeigt, wo Bauland liegt und wem es gehört, nicht ob jemand bauen
will. Deshalb gehört das Ergebnis in den Akquise-Radar mit Score, nicht
direkt in ein Anschreiben.

## Was das Tool pro Parzelle liefert

- Gemeinde, Parzellennummer, EGRID, Fläche, Perimeter
- Zone mit Originalbezeichnung, Nutzungsziffer, Lärmempfindlichkeitsstufe
- Überbauungs- und Erschliessungsstand
- Bodenbedeckung, Gebäude (keines oder Anzahl und Grundfläche)
- Strasse, nächste Adresse, Nachbarbebauung (Baulücke ja/nein)
- ÖREB: Baulinien, Gefahrenstufe, Grundwasserschutz, Waldabstand, Denkmalschutz, Planungszonen
- Hangneigung und Exposition (swissALTI3D)
- Direktlinks: kantonale Karte, map.geo.admin.ch, ÖREB-Auszug, **Eigentümerabfrage des Kantons mit der Parzelle vorausgewählt**
- Veränderung seit dem letzten Lauf: neu unüberbaut, neu überbaut, Zone geändert, parzelliert
- **Eigentümer:** Name, Adresse, Eigentumsform, Erwerbsdatum, abgefragt am, abgefragt durch, Quelle. Von Hand eingetragen, im Tool gespeichert, nie automatisch geholt.

## Der Eigentümer-Ablauf im Tool

1. Das Tool sortiert die gefilterten Parzellen nach Priorität: Fläche,
   Zone, Lage, Baulücke, Nähe zu laufenden Bauvorhaben, Region.
2. Jeden Morgen zeigt es eine **Tagesliste**: 5 Zürich, 10 Aargau,
   5 Luzern, einige Zug. Jede Zeile hat den Direktlink zur kantonalen
   Abfrage.
3. Die Person bei AA klickt, liest, trägt den Eigentümer ein. Eine Minute
   pro Parzelle, eine halbe Stunde pro Tag.
4. Das Tool erkennt Wiederholungen: Derselbe Eigentümer auf mehreren
   Parzellen ist ein stärkerer Lead. Firmen werden mit Zefix verknüpft.
5. Leads ab Schwelle gehen in das bestehende Lead-Format des
   Akquise-Radars. Anschreiben nur nach Freigabe von AA.

Die Eigentümerdaten bleiben intern. Sie gehören nicht in geteilte Dateien
und nicht auf die Website. Das Tool verlangt bei jeder Abfrage einen
Zweck ("Machbarkeitsstudie anbieten", "Nachbarparzelle zu Projekt X"),
damit AA die Angemessenheit belegen kann, wenn Luzern oder Zug nachfragen.

## Technischer Vorschlag

**Batch-Lauf statt Live-Abfrage.** Einmal pro Woche: Datensätze je Kanton
abholen, verschneiden, filtern, per EGRID mit ÖREB anreichern, gegen den
letzten Lauf vergleichen, Ergebnis als kleine Datei speichern.

**Werkzeuge.** Python mit GeoPandas oder DuckDB Spatial; Lauf lokal oder
über GitHub Actions. Für die Eigentümer-Erfassung eine kleine, passwortgeschützte
Oberfläche: Tagesliste, Direktlinks, Eingabemaske, Verlauf. Das kann eine
interne Route auf atelier-aa.ch sein (die Website läuft auf Vercel mit
API-Routen) oder eine lokale Web-App. Die Website selbst bleibt unverändert;
der Radar ist ein eigenes kleines Repository.

**Grössenordnung.** Ohne Filter liefern die vier Kantone zusammen
Zehntausende unüberbaute Flächen, darunter viele Restflächen, Vorgärten
und Strassenparzellen. Mit Mindestfläche, Zonentyp und Gemeindeliste
(Knonauer Amt, Freiamt, Lenzburg, Baden, Zug, Luzern Agglomeration) werden
daraus einige hundert Parzellen, die man in wenigen Wochen mit Eigentümern
versehen kann.

## Grenzen und Risiken

- **Keine Automatisierung der Eigentümerabfrage.** Rechtlich unzulässig,
  technisch durch SMS-Code und Logging unterbunden, und ein Verstoss
  kostet den Zugang. Das Tool bereitet vor, der Mensch fragt ab.
- **Sperrungen in Zürich.** Eigentümer können ihre Daten seit 2025 sperren
  lassen. Für gesperrte Parzellen bleibt nur die schriftliche Anfrage beim
  Notariat, ebenfalls ohne Interessennachweis für Name und Adresse.
- **Datenschutz.** Eigentümernamen sind Personendaten. Intern für die
  Kontaktaufnahme zulässig, mit Zweck und Datum dokumentiert, nicht
  weitergegeben, nach Abschluss oder Absage gelöscht. Die Regel aus
  VEROEFFENTLICHEN.md (keine Bauherrschaftsnamen nach aussen) gilt doppelt.
- **Aktualität.** Neubauten erscheinen erst nach Bauabnahme als Gebäude;
  Jahresstände hinken bis zu zwölf Monate nach. Für die Akquise ist das ein
  Vorteil: Parzellen, die aus der Liste fallen, zeigen, wo eben gebaut wurde.
- **Zonenlogik.** Gestaltungsplanpflicht, Sonderzonen und
  Erschliessungsvorbehalte klären sich nur über ÖREB und Gemeindereglemente.
  Das Tool markiert, es beurteilt nicht.
- **Umgebung.** In dieser Sitzung sind alle nötigen Server gesperrt.
  Pipeline, Filter, Oberfläche und Ausgabe lassen sich schreiben und mit
  Beispieldaten prüfen, der echte Lauf nicht.

## Empfehlung

1. **Luzern zuerst (1–2 Arbeitstage).** Fertiger, laufend nachgeführter
   Datensatz. Abholen, anreichern, filtern, Tagesliste, Eigentümer-Maske.
   Damit steht der ganze Ablauf einmal durch.
2. **Zürich und Aargau (3–4 Arbeitstage).** Kantonale Überbauungsstände
   mit Liegenschaften verschneiden, gleiche Ausgabe.
3. **Zug (1–2 Arbeitstage).** Eigener Verschnitt aus AV und Zonenplan.
4. **Monitoring und Akquise-Radar (2 Arbeitstage).** Wöchentlicher Lauf,
   Änderungsbericht, Übergabe in das Lead-Format mit Score.

Laufender Aufwand danach: rund eine halbe Stunde pro Tag für die
Eigentümerabfragen, plus Nacharbeit an den Leads.

Vier Entscheidungen von AA, bevor es losgeht:

- Welche Gemeinden oder Regionen in den vier Kantonen: Vollabdeckung oder Fokus?
- Mindestfläche und Zonentypen: nur Wohnen, oder auch Arbeiten und Kern?
- Wer bei AA macht die täglichen Eigentümerabfragen, mit welcher Mobilnummer?
- Wo läuft das Tool: lokal bei AA, GitHub Actions, oder als interner Bereich auf atelier-aa.ch?

## Quellen (abgerufen 3. September 2026)

Eigentümer und Recht

- ZGB Art. 970, Öffentlichkeit des Grundbuchs: https://gesetzestexte.help.ch/zgb/artikel.cfm?key=1110&art=Besitz_und_Grundbuch
- HEV Schweiz, "Das Grundbuch ist öffentlich, aber nicht unbeschränkt": https://www.hev-schweiz.ch/news/detail/News/das-grundbuch-ist-oeffentlich-aber-nicht-unbeschraenkt
- Notariate Kanton Zürich, elektronische Eigentumsabfrage: https://www.notariate-zh.ch/de/grundbuch/elektronische-eigentumsabfrage
- Notariate Kanton Zürich, Sperrung der Eigentümerauskunft: https://www.notariate-zh.ch/de/grundbuch/elektronische-eigentumsabfrage/sperrung-entsperrung-elektronische-eigentuemerauskunft
- LAW.CH, Zürcher Eigentümerabfrage, 5 pro Tag: https://law.ch/lawnews/2024/04/zuercher-grundbuch-digitale-eigentuemerabfrage-wieder-moeglich-5-abfragen-pro-tag/
- Aargau, Eigentümerabfrage im Geoportal (10 pro Tag): https://geometer-rheinfelden.ch/eigentuemerabfrage/ und https://www.aargauerzeitung.ch/aargau/kanton-aargau/grundeigentum-kanton-macht-transparent-wem-was-gehort-ld.1316671
- Kanton Zug, Auskunft über die Eigentümerschaft: https://zg.ch/de/planen-bauen/grundbuch/eigentuemerauskunft
- Kanton Zug, interaktive Karten und Nutzungsbestimmungen ZugMap: https://zg.ch/de/planen-bauen/geoinformation/geoinformationen-nutzen/interaktive-karten-zum-klicken
- Kanton Luzern, Eigentümerabfrage (5 pro Tag, Protokollierung): https://grundbuch.lu.ch/onlinedienste/eigentuemerabfrage
- Terravis-Auskunftsportal, Benutzerkreis: https://www.six-group.com/dam/download/sites/terravis/dienstleistungen/auskunft/anleitungen/bedienungsanleitung-auskunftsportal-de.pdf und https://zg.ch/de/planen-bauen/grundbuch/uebersicht-zum-grundbuch/elektronische-grundbuchauskunft

Parzellen und Bauzonen

- Kanton Zürich, OGD-WFS mit Zonenplänen und Überbauungs-/Erschliessungsstand: https://www.geolion.zh.ch/geodatenservice/2030
- Kanton Zürich, Überbauungs- und Erschliessungsstand der Gemeinden (OGD): https://data.stadt-zuerich.ch/dataset/ktzh_ueberbauungs__und_erschliessungsstand_der_gemeinden__ogd_
- Kanton Zürich, offene Geodaten: https://www.zh.ch/de/politik-staat/opendata/offene-geodaten.html
- Aargau, Amtliche Vermessung Open Data: https://opendata.swiss/de/dataset/av-daten-der-amtlichen-vermessung-datenmodell-aargau
- Aargau, Nutzungsplanung Grundnutzung: https://opendata.swiss/de/dataset/nutzungsplanung-grundnutzung-im-bauzonen-und-kulturlandplan
- Aargau, Raumbeobachtung Bauzonen mit Überbauungsstand: https://www.ag.ch/geoportal/geodatenshop/Datendokumentation.aspx?Datensatzelement=6930
- Aargau, Definition Überbauungsstand: https://www.ag.ch/media/kanton-aargau/bvu/raumentwicklung/grundlagen-und-kantonalplanung/bzstat-definition-ueberbauungsstand.pdf
- Zug, Geoinformationen nutzen (AV kostenlos, Zonenplan): https://zg.ch/de/planen-bauen/geoinformation/geoinformationen-nutzen und https://zg.ch/de/planen-bauen/geoinformation/geoinformationen-nutzen/geoinformationen-von-a-bis-z
- Luzern, Unüberbaute Bauzonen in Kraft (laufend): https://daten.geo.lu.ch/download/ubebauzo_ds_v1
- Luzern, Unüberbaute Bauzonen 2025 Jahresstand: https://daten.geo.lu.ch/produkt/ubauzo25_ds_v1
- Luzern, Metadaten Unüberbaute Bauzonen: https://www.geo.lu.ch/meta?metauid=UBEBAUZO_DS
- ÖREB-Webservice, Maschinenschnittstelle (Bund): https://www.cadastre.ch/de/oereb-webservice
- Bauzonen Schweiz harmonisiert (ARE): https://opendata.swiss/de/dataset/bauzonen-schweiz-harmonisiert
- geodienste.ch, Amtliche Vermessung: https://www.geodienste.ch/services/av
