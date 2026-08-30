import type { InsightFrage } from '@/types';

/**
 * Inhalte der Expertise-Seite.
 *
 * Ziel ist, das Leistungsspektrum so auszuweisen, dass Atelier AA für die
 * gesamte Bandbreite gefunden wird — nicht nur für «Architekt», sondern für
 * Verdichtung, Bauleitung, Machbarkeitsstudie und hindernisfreies Bauen
 * einzeln.
 */

/**
 * Kompetenzen: fünf Rollen entlang des Planungsprozesses («wofür können Sie
 * uns beauftragen»), statt Bauaufgaben (Neubau, Umbau, Verdichtung …) als
 * gleichrangige Punkte aufzuführen — die stehen als Beispiele innerhalb von
 * "Planung und Koordination" sowie separat, sr-only, im Abschnitt Bauaufgaben.
 * `punkte` sind die konkreten Leistungen je Kompetenz, `text` ordnet sie ein.
 *
 * Ein Punkt ist entweder eine einfache Zeichenkette oder — wo es einen
 * Normbezug gibt — ein Objekt aus Klartext und SIA-Angabe. Bauherrschaften
 * lesen zuerst, was gemacht wird; die Phasennummer steht darunter kleiner für
 * Fachleute. Früher stand die Nummer voran ("SIA-Teilphase 33:
 * Bewilligungsverfahren"), was den verständlichen Teil verdeckt hat.
 */
export type KompetenzPunkt = string | { text: string; sia: string };
export const kompetenzen = [
  {
    titel: 'Beratung',
    punkte: [
      'Beratung vor Projektbeginn',
      'Klärung der Nutzungsanforderungen',
      'Raum- und Funktionsprogramm: Entwicklung eines Organisationsschemas',
      'Grundstücksanalyse: Standort, Kontext und Rahmenbedingungen',
    ],
    text: 'Bevor die erste Linie gezeichnet ist, klären wir, was Ihr Projekt wirklich braucht, fachlich fundiert und auf Ihr Grundstück zugeschnitten.',
  },
  {
    titel: 'Analyse und Konzept',
    punkte: [
      { text: 'Strategische Planung und Vorstudien mit Machbarkeitsstudie', sia: 'SIA-Phasen 1/2' },
      'Weichenstellung: Projektentwicklung',
      'Wettbewerbe',
      'Planungsinstrumente: Simulation und Modell',
    ],
    text: 'In dieser Phase entsteht die Grundlage jeder Entscheidung: Wir prüfen Potenzial und Machbarkeit, bevor Ressourcen in die Ausführung fliessen.',
    links: [
      { label: 'Studien', href: '/leistungen/machbarkeitsstudie' },
      { label: 'Projektentwicklung', href: '/leistungen/projektentwicklung' },
    ],
  },
  {
    titel: 'Planung und Koordination',
    punkte: [
      { text: 'Vorprojekt und Bauprojekt', sia: 'SIA-Teilphasen 31/32' },
      'Generalplanung: ein Ansprechpartner für das gesamte Planungsteam',
      { text: 'Bewilligungsverfahren', sia: 'SIA-Teilphase 33' },
      { text: 'Ausführungsprojekt', sia: 'SIA-Teilphase 51' },
    ],
    text: 'Wir führen Entwurf, Bewilligung und Ausführungsplanung so zusammen, dass alle Fachplaner auf denselben Stand hinarbeiten.',
  },
  {
    titel: 'Realisierung',
    punkte: [
      { text: 'Ausschreibung und Offertvergleich', sia: 'SIA-Teilphase 41' },
      { text: 'Vergabe', sia: 'SIA-Teilphase 42' },
      { text: 'Ausführung und Abschluss', sia: 'SIA-Teilphasen 52/53' },
      'Kosten- und Terminkontrolle',
    ],
    text: 'Von der Ausschreibung bis zur Übergabe begleiten wir die Baustelle und sichern Qualität, Kosten und Termine.',
  },
  {
    titel: 'Generalplanung',
    punkte: [
      'Vollumfängliche Planung Ihres individuellen Bauvorhabens',
      'Übernahme Ihrer koordinativen Aufgaben und Pflichten',
      'Ein zentraler Ansprechpartner für das gesamte Planungsteam',
    ],
    text: 'Als Generalplaner arbeiten wir konsequent auf einen termin- und kostengerechten Projekterfolg mit hoher architektonischer Qualität hin.',
  },
];

/** Bauaufgaben, gruppiert nach Nutzung, für die wir Erfahrung mitbringen. */
export const bauaufgaben = [
  {
    kategorie: 'Wohnen',
    beispiele: 'Einfamilienhäuser, Mehrfamilienhäuser, Wohnüberbauungen',
  },
  {
    kategorie: 'Arbeitswelt',
    beispiele: 'Büro- und Gewerbebauten, Industrie- und Verwaltungsbauten',
  },
];

/** Häufige Fragen zu Leistungen und Zusammenarbeit. */
export const expertiseFragen: InsightFrage[] = [
  {
    frage: 'Welche Leistungen erbringen Sie nach SIA?',
    antwort:
      'Wir arbeiten nach der Ordnung SIA 102 und deren Leistungsphasen: Strategische Planung, Vorstudien, Projektierung, Ausschreibung und Realisierung. Sie können diese Phasen einzeln oder zusammen beauftragen. Üblich ist der Einstieg mit Vorstudie und Vorprojekt.',
  },
  {
    frage: 'Können wir nur eine Machbarkeitsstudie beauftragen?',
    antwort:
      'Ja, das ist ein häufiger und sinnvoller Einstieg. Wir prüfen Bauordnung, Ausnutzung und Erschliessung, erstellen eine Volumenstudie und einen Kostenrahmen. Der Aufwand liegt im vierstelligen Bereich und schafft die Grundlage für die Entscheidung, ob und wie weitergebaut wird.',
  },
  {
    frage: 'Übernehmen Sie auch die Bauleitung, wenn ein anderes Büro geplant hat?',
    antwort:
      'Ja. Wir prüfen dann zuerst die Ausführungsunterlagen auf Vollständigkeit und Widersprüche, weil wir für die Umsetzung Verantwortung tragen. Diese Prüfung weisen wir als eigene Leistung aus.',
  },
  {
    frage: 'Arbeiten Sie mit Generalunternehmern zusammen?',
    antwort:
      'Sowohl mit Einzelunternehmern als auch mit Generalunternehmern. Bei Einzelvergaben ist die Kostenkontrolle transparenter, bei GU-Verträgen die Terminsicherheit höher. Wir zeigen Ihnen die Vor- und Nachteile für Ihr Projekt und empfehlen ein Vorgehen.',
  },
  {
    frage: 'Planen Sie auch Minergie oder zertifizierte Bauten?',
    antwort:
      'Ja. Minergie, Minergie-P und SNBS sind uns vertraut. Wir weisen aber offen darauf hin, wo ein Zertifikat Mehrkosten verursacht, die sich im Betrieb nicht rechnen. Die Entscheidung liegt bei Ihnen.',
  },
  {
    frage: 'Wie stellen Sie Kostensicherheit her?',
    antwort:
      'Die Kostengenauigkeit vereinbaren wir projektspezifisch und verfeinern sie in Stufen: ein grober Kostenrahmen im Vorprojekt (SIA-Richtwert rund ±15 Prozent), eine genauere Kostenschätzung im Bauprojekt (rund ±10 Prozent) und ein verbindlicher Kostenvoranschlag nach der Vergabe. Während der Ausführung prüfen wir Nachträge einzeln auf Berechtigung.',
  },
  {
    frage: 'Was unterscheidet Sie von anderen Architekturbüros?',
    antwort:
      'Der Gründer bringt über fünfzehn Jahre eigene Bau- und Immobilienpraxis mit. Das führt dazu, dass wirtschaftliche Fragen (Mietzinsniveau, Wohnungsmix, Vermietbarkeit) von Anfang an im Entwurf mitgedacht werden, statt erst am Ende geprüft zu werden.',
  },
  {
    frage: 'Welche Leistungen bieten Sie an?',
    antwort:
      'Architektur und Entwurf, Umbau und Sanierung, Projektentwicklung sowie Bauleitung: von der Machbarkeitsstudie über das Baugesuch bis zur Übergabe. Wir übernehmen einzelne Phasen oder die gesamte Planung.',
  },
  {
    frage: 'In welchen Regionen arbeitet Atelier AA Architekten?',
    antwort:
      'Unser Büro ist in Obfelden im Kanton Zürich. Wir planen und realisieren Projekte in der ganzen Schweiz, mit einem Schwerpunkt im Knonauer Amt sowie in den Kantonen Zürich, Aargau und Zug.',
  },
  {
    frage: 'Welche Arten von Gebäuden planen Sie?',
    antwort:
      'Schwerpunkt sind Mehrfamilienhäuser und Wohnbauten. Dazu kommen Einfamilienhäuser, Aufstockungen, Gewerbe- und Verwaltungsbauten sowie Sanierungen im Bestand.',
  },
  {
    frage: 'Was kostet ein erstes Gespräch?',
    antwort:
      'Das Erstgespräch ist kostenlos und unverbindlich. Wir klären darin Ihr Vorhaben, den Ort und den Rahmen und sagen Ihnen offen, was wir für machbar und sinnvoll halten.',
  },
  {
    frage: 'Wie erreichen wir Sie am besten?',
    antwort:
      'Telefonisch unter +41 44 770 05 06 oder per E-Mail an info@atelier-aa.ch. Wir melden uns in der Regel innerhalb eines Arbeitstages zurück.',
  },
  // Vormals auf /leistungen/machbarkeitsstudie, hierher verschoben, damit
  // Häufige Fragen an einem Ort gesammelt sind statt auf einzelnen
  // Leistungsseiten zu stehen — anders als bei Projekt-/Studien-/Insights-
  // Detailseiten, wo eine themenspezifische FAQ direkt passend bleibt.
  {
    frage: 'Was kostet eine Machbarkeitsstudie?',
    antwort:
      'Der Aufwand liegt im vierstelligen Bereich und richtet sich nach Grundstück und Fragestellung. Ein genaues Angebot erhalten Sie nach einem kurzen Erstgespräch.',
  },
  {
    frage: 'Wie lange dauert eine Machbarkeitsstudie?',
    antwort:
      'In der Regel wenige Wochen, abhängig davon, wie schnell die Gemeinde Grundlagenpläne und Auskünfte liefert.',
  },
  {
    frage: 'Muss ich danach mit Atelier AA Architekten weiterbauen?',
    antwort:
      'Nein. Die Studie ist ein eigenständiges Ergebnis. Viele Bauherrschaften entscheiden sich danach für die Zusammenarbeit, verpflichtet sind Sie dazu nicht.',
  },
  {
    frage: 'Was, wenn sich herausstellt, dass nichts möglich ist?',
    antwort:
      'Auch das ist ein Ergebnis, und günstiger, als es ohne Prüfung erst in der Bauplanung zu erfahren.',
  },
  // Vormals auf /leistungen/projektentwicklung.
  {
    frage: 'Für wen ist Projektentwicklung gedacht?',
    antwort:
      'Für Investoren, Grundstückeigentümer und institutionelle Bauherrschaften, die aus einem Grundstück oder einer Liegenschaft ein wirtschaftlich tragfähiges Bauprojekt entwickeln möchten.',
  },
  {
    frage: 'Was unterscheidet Projektentwicklung von einer Machbarkeitsstudie?',
    antwort:
      'Die Machbarkeitsstudie klärt, was grundsätzlich möglich ist. Projektentwicklung geht weiter: Varianten, Wirtschaftlichkeit, Planung und Bewilligung bis zum realisierungsreifen Projekt.',
  },
  {
    frage: 'Übernehmen Sie auch die Rolle als Generalplaner?',
    antwort:
      'Ja. Auf Wunsch koordinieren wir alle Fachplaner und sind Ihr alleiniger Vertrags- und Ansprechpartner bis zur Übergabe.',
  },
];
