/**
 * Von Hand geschriebene Kurzbeschreibungen für die Suchergebnisse.
 *
 * Warum es diese Datei gibt: Die Beschreibung entstand bisher, indem der
 * Fliesstext einer Studie oder eines Projekts bei 155 Zeichen abgeschnitten
 * wurde. Das ergab bei 52 Seiten Sätze, die mitten im Gedanken endeten —
 * «… ein Mehrfamilienhaus mit rund 293 m² …» oder «… erlaubt so 71.5 % …».
 * In den Suchergebnissen ist das die einzige Zeile Text, die ein Mensch
 * ausser dem Titel zu sehen bekommt; sie sollte einen vollständigen Gedanken
 * enthalten.
 *
 * Jeder Eintrag ist deshalb eigens geschrieben, hält 155 Zeichen ein und
 * bildet einen ganzen Satz. Die Zahlen stammen unverändert aus den
 * Analysetexten in `studien.ts` und `projekte.ts` — hier ist nichts
 * gerundet oder hinzuerfunden worden.
 *
 * Fehlt ein Slug, greift wieder `kurzbeschreibung()`. Kommt eine neue Studie
 * hinzu, muss hier also nichts nachgeführt werden; die Seite funktioniert
 * ohne Eintrag, sie liest sich nur weniger gut.
 *
 * Angelegt am 03.09.2026.
 */

export const STUDIE_BESCHREIBUNG: Record<string, string> = {
  'bad-zurzach':
    'Machbarkeitsstudie in Bad Zurzach AG: Ein Wohn- und Gewerbehaus mit sieben Wohnungen ersetzt an der Baslerstrasse ein bestehendes Einfamilienhaus.',
  bergdietikon:
    'Machbarkeitsstudie in Bergdietikon AG: Die Zone W2L mit Ausnützung 0.25 lässt auf 2’035 m² drei Doppeleinfamilienhäuser zu, rund 509 m² Wohnfläche.',
  birmensdorf:
    'Machbarkeitsstudie in Birmensdorf ZH: 880 m² an der Alten Zürcherstrasse erlauben mit 30 % Ausnützung ein Mehrfamilienhaus mit rund 409 m² Wohnfläche.',
  boswil:
    'Machbarkeitsstudie in Boswil AG: Die Zone WA3 regelt über Höhen statt Geschosse; 1’226 m² erlauben ein Mehrfamilienhaus mit Gewerbe und Tiefgarage.',
  brugg:
    'Machbarkeitsstudie in Brugg AG: Die Wohnzone 2 erlaubt mit 50 % Ausnützung auf 587 m² ein Mehrfamilienhaus mit rund 293 m² Wohnfläche.',
  'buelach-unterweg':
    'Machbarkeitsstudie in Bülach ZH: Mit Baumassenziffer 3.0 lässt sich das 441 m² kleine Grundstück am Unterweg auf rund 1’435 m³ verdichten.',
  'chilling-lounge':
    'Konzeptstudie in Obfelden ZH: Umnutzung eines Gewerberaums an der Zwillikerstrasse zu einer Lounge mit Raucher- und Nichtraucherzone.',
  duebendorf:
    'Machbarkeitsstudie in Dübendorf ZH: Die Zentrumzone 4 ergibt auf 2’134 m² rund 4’868 m² Ausnützung, mit 40 bis 80 % Wohnanteil zwingend eine Mischnutzung.',
  effingen:
    'Machbarkeitsstudie in Effingen AG: Die Dorfzone D lässt auf 1’760 m² zwei eigenständige Mehrfamilienhäuser zu, mit rund 1’723 m² Ausnützungsfläche.',
  ennetbaden:
    'Machbarkeitsstudie in Ennetbaden AG: Die Wohnzone 2S erlaubt mit 60 % Ausnützung auf 993 m² ein Mehrfamilienhaus mit rund 596 m² Wohnfläche.',
  'fisibach-wettbewerb':
    'Wettbewerbsbeitrag in Fisibach AG: Für die Überbauung «Eichhölzli» fünf einzelne Baukörper mit gemeinsamem Gemeinschaftsbau. Nicht ausgezeichnet.',
  hallwil:
    'Machbarkeitsstudie in Hallwil AG: Als Arealüberbauung steigt die Ausnützung auf 2’091 m² von 45 auf 60 %, sieben statt fünf Doppeleinfamilienhäuser.',
  hermetschwil:
    'Machbarkeitsstudie in Hermetschwil-Staffeln AG: Auf 2’849 m² entsteht eine Wohnüberbauung mit rund 1’210 m² neuer Wohnfläche; zwei Bauten bleiben.',
  hoeri:
    'Machbarkeitsstudie in Höri ZH: Zwei benachbarte Parzellen in der Zone E2 erlauben mit 40 % Ausnützung je ein Einfamilienhaus mit rund 140 m² Wohnfläche.',
  hunzenschwil:
    'Machbarkeitsstudie in Hunzenschwil AG: Die Zone W3 erlaubt auf 773 m² ein Mehrfamilienhaus mit Attika, Tiefgarage und rund 538 m² Wohnfläche.',
  islisberg:
    'Machbarkeitsstudie in Islisberg AG: Ohne Ausnützungsziffer zählen Geschosszahl und Länge; 612 m² ergeben ein Doppelhaus mit rund 608 m² Wohnfläche.',
  'killwangen-bollackerweg':
    'Machbarkeitsstudie in Killwangen AG: Die 1’507 m² am Bollackerweg reichen in der Zone W2 für vier Einfamilienhäuser mit rund 694 m² Wohnfläche.',
  'killwangen-zuercherstrasse':
    'Machbarkeitsstudie in Killwangen AG: Auf 415 m² ersetzt ein Mehrfamilienhaus mit drei Wohnungen und rund 264 m² Wohnfläche ein Einfamilienhaus.',
  'kuenten-dorfstrasse':
    'Machbarkeitsstudie in Künten AG: In der Dorfzone sind Geschosszahl und Grenzabstände offen; 1’211 m² ergeben rund 913 m² Wohnfläche mit Dachgeschoss.',
  'kuenten-egg':
    'Machbarkeitsstudie in Künten AG: An der Egg erlaubt die Zone W2 mit 55 % Ausnützung auf 1’116 m² ein Gebäude mit rund 1’071 m² Wohnfläche.',
  lommis:
    'Machbarkeitsstudie in Lommis TG: Die Dorfzone D3 erlaubt auf 629 m² ein dreigeschossiges Mehrfamilienhaus mit rund 440 m² Wohnfläche, nur mit Schrägdach.',
  mettmenstetten:
    'Bauherrenvertretung in Mettmenstetten ZH: Ersatzneubau mit vier Reiheneinfamilienhäusern und einem Mehrfamilienhaus, gemeinsame Tiefgarage, 1’490 m².',
  muemliswil:
    'Machbarkeitsstudie in Mümliswil SO: Die Wohnzone W2 erlaubt mit 40 % Ausnützung auf 675 m² ein Doppeleinfamilienhaus mit rund 270 m² Wohnfläche.',
  neuenhof:
    'Machbarkeitsstudie in Neuenhof AG: 628 m² am Hafnerweg erlauben mit Überbauungsziffer 0.35 ein Einfamilienhaus mit rund 571 m² Ausnützungsfläche.',
  niederhasli:
    'Machbarkeitsstudie in Niederhasli ZH: Die Zone E2 kennt keine Ausnützungsziffer; 1’412 m² liessen sich in drei Einfamilienhäuser aufteilen.',
  niederwil:
    'Machbarkeitsstudie in Niederwil AG: Die Dorfzone erlaubt mit Ausnützung 0.6 auf 1’715 m² ein Mehrfamilienhaus mit rund 1’372 m² Wohnfläche.',
  'nussbaumen-flurstrasse-w4':
    'Machbarkeitsstudie in Nussbaumen AG: 3’248 m² in der Zone W4 erlauben bei Ausnützung 1.2 ein Haus mit sieben Obergeschossen, rund 3’898 m² Wohnfläche.',
  'nussbaumen-hertensteinstrasse':
    'Machbarkeitsstudie in Nussbaumen AG: Die Zone ZZ2 arbeitet mit einer Gesamthöhe von 15 m und erlaubt auf 1’336 m² einen Ersatzneubau.',
  obfelden:
    'Machbarkeitsstudie in Obfelden ZH: In der Wohnzone W1 mit nur einem Vollgeschoss erlauben 3’279 m² eine Aufteilung in fünf Einfamilienhäuser.',
  'obfelden-bachstrasse':
    'Machbarkeitsstudie in Obfelden ZH: Die Gewerbezone G erlaubt mit Baumassenziffer 4 auf 2’025 m² ein Gebäude mit rund 8’100 m³ umbautem Raum.',
  'oberwil-lieli':
    'Machbarkeitsstudie in Oberwil-Lieli AG: 4’140 m² in der Dorfzone D1 reichen für drei Mehrfamilienhäuser mit total rund 2’268 m² Wohnfläche.',
  rieden:
    'Machbarkeitsstudie in Rieden AG: Die Zone W2 erlaubt auf 964 m² drei in den Hang gestaffelte Terrassenwohnungen mit rund 386 m² Wohnfläche.',
  rombach:
    'Machbarkeitsstudie in Rombach AG: Die Zone W2 erlaubt am Alpenblickweg auf 1’108 m² ein Mehrfamilienhaus mit rund 720 m² Wohnfläche.',
  root:
    'Konzeptstudie in Root LU: Anbau an ein bestehendes Vereinslokal, der Saal, Bühne, Vorplatz und Küche auf rund 13 × 26 Metern zusammenführt.',
  rothrist:
    'Machbarkeitsstudie in Rothrist AG: Die Zone Za erlaubt auf 2’686 m² ein viergeschossiges Mehrfamilienhaus mit Gewerbe, rund 4’200 m² Wohnfläche.',
  'schinznach-bad':
    'Machbarkeitsstudie in Schinznach Bad AG: 703 m² in der Wohnzone 2 erlauben mit 50 % Überbauung ein Mehrfamilienhaus mit rund 545 m² Ausnützungsfläche.',
  sempach:
    'Machbarkeitsstudie in Sempach LU: Im Städtli erlauben 163 m² mit Ausnützung 0.55 ein Wohn- und Geschäftshaus mit rund 582 m² Fläche.',
  windisch:
    'Machbarkeitsstudie in Windisch AG: Die Kernzone erlaubt 71.5 % Ausnützung; auf 1’036 m² ergibt das rund 1’111 m² Wohnfläche.',
  'zuerich-drusbergstrasse':
    'Machbarkeitsstudie in Zürich ZH: Die Zone W2bII erlaubt auf 893 m² an der Drusbergstrasse ein Gebäude mit rund 357 m² Ausnützungsfläche plus Attika.',
};

/**
 * Dasselbe für die Projektseiten. Hier steht Bautyp und Ort schon am Anfang
 * des Beschreibungstexts, deshalb tragen diese Sätze keinen zusätzlichen
 * Vorspann.
 */
export const PROJEKT_BESCHREIBUNG: Record<string, string> = {
  'defh-safenwil':
    'Doppeleinfamilienhaus in Safenwil AG: Zwei Einheiten in einem kubischen Baukörper mit zurückversetztem Attikageschoss und Dachterrasse.',
  'defh-weiningen':
    'Einfamilienhaus und Doppeleinfamilienhaus in Weiningen ZH für eine Erbengemeinschaft, verbunden durch eine gemeinsame Tiefgarage mit Autolift.',
  'efh-buchs':
    'Studie für ein zusätzliches Einfamilienhaus in Buchs AG auf einem Grundstück mit Ausnützungsreserve. Bewilligt, bislang nicht realisiert.',
  'efh-dietikon':
    'Kernsanierung eines Einfamilienhauses in Dietikon ZH, aktuell in der Bauphase: zurückgebaut bis auf das tragende Backsteinmauerwerk.',
  'efh-jonen':
    'Neubau eines Einfamilienhauses in Jonen AG mit zwei Vollgeschossen, Dachgeschoss und Untergeschoss, heller Putzfassade und dunklen Fenstern.',
  'efh-merenschwand':
    'Totalsanierung eines Einfamilienhauses in Merenschwand AG: weiss verputzter Baukörper unter Flachdach, dunkel gerahmte Fenster, aussenliegende Storen.',
  'efh-rupperswil':
    'Kernsanierung und Erweiterung in Rupperswil AG: Die weiss verputzte Fassade verbindet einen giebelständigen Hauptbau mit einem flachdachigen Nebenbau.',
  'efh-wuerenlos':
    'Kernsanierung eines Einfamilienhauses in Würenlos AG: Putzfassade in warmem Sandton, dunkelbraunes Ziegeldach, neuer Balkon über der Terrasse.',
  'kleintierpraxis-obfelden':
    'Nutzungsänderung in Obfelden ZH zu einer Kleintierpraxis: Umbau und Parkplatznachweis für den Betrieb im Erdgeschoss einer Gewerbeliegenschaft.',
  'mfh-hochwarting':
    'Wohnbau in Glashütten AG: Ein einfaches Raster ordnet Fenster, Balkone und Wohnungstrennungen. Bei den Materialien stand Dauerhaftigkeit im Vordergrund.',
  'mfh-kuenten':
    'Mehrfamilienhaus am Hang in Künten AG: Das Volumen folgt in drei Stufen dem Gelände und gibt jeder Wohnung Terrasse und Aussicht, bei minimalem Aushub.',
  'mfh-wuerenlingen':
    'Neubau eines Mehrfamilienhauses in Würenlingen AG, in Ausführung: Satteldachbau mit drei Vollgeschossen, ausgebautem Dachgeschoss und Balkonen.',
  'refh-hochfelden':
    'Drei Reiheneinfamilienhäuser in Hochfelden ZH für einen Investor: giebelständige Baukörper mit steilem Satteldach und heller Putzfassade.',
};
