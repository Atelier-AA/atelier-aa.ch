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
 */
export const kompetenzen = [
  {
    titel: 'Beratung',
    punkte: [
      'Beratung vor Projektbeginn',
      'Branchenspezifische Bedarfsermittlung',
      'Raum- und Funktionsprogramm: Entwicklung eines Organisationsschemas',
      'Grundstücksanalyse: Standortfaktoren und der Genius Loci',
    ],
    text: 'Bevor die erste Linie gezeichnet ist, klären wir, was Ihr Projekt wirklich braucht — fachlich fundiert und auf Ihr Grundstück zugeschnitten.',
  },
  {
    titel: 'Analyse und Konzept',
    punkte: [
      'Leistungsphasen 1–2: Konzept und Machbarkeitsstudien',
      'Weichenstellung: Projektentwicklung',
      'Wettbewerbe',
      'Planungsinstrumente: Simulation und Modell',
    ],
    text: 'In dieser Phase entsteht die Grundlage jeder Entscheidung: Wir prüfen Potenzial und Machbarkeit, bevor Ressourcen in die Ausführung fliessen.',
  },
  {
    titel: 'Planung und Koordination',
    punkte: [
      'Leistungsphase 3: Nutzerspezifische Entwurfsplanung',
      'Generalplanung: Das Planungsteam als Mannschaft',
      'Leistungsphase 4: Genehmigungsplanung',
      'Leistungsphase 5: Ausführungs- und Detailplanung',
    ],
    text: 'Wir führen Entwurf, Bewilligung und Ausführungsplanung so zusammen, dass alle Fachplaner auf denselben Stand hinarbeiten.',
  },
  {
    titel: 'Realisierung',
    punkte: [
      'Leistungsphase 6: Erstellung von Leistungsverzeichnissen und Ausschreibung',
      'Leistungsphase 7: Auswertung der Angebote und Vergabe',
      'Leistungsphasen 8–9: Bauüberwachung während der Realisierung',
      'Kosten- und Terminkontrolle',
    ],
    text: 'Von der Ausschreibung bis zur Übergabe begleiten wir die Baustelle und sichern Qualität, Kosten und Termine.',
  },
  {
    titel: 'Generalplanung',
    punkte: [
      'Vollumfängliche Planung Ihres individuellen Bauvorhabens',
      'Übernahme Ihrer koordinativen Aufgaben und Pflichten',
      'Atelier AA als Ihr alleiniger Vertrags- und Ansprechpartner',
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

/** Planungsphasen nach SIA 102, für den Abschnitt "Planungsphasen". */
export const planungsphasen = [
  {
    nummer: '01',
    titel: 'Machbarkeitsstudie',
    text: 'Klärung von Potenzial, Rahmenbedingungen und ersten Varianten.',
  },
  {
    nummer: '02',
    titel: 'Vorprojekt',
    text: 'Entwicklung des architektonischen Konzepts, erste Kostenschätzung.',
  },
  {
    nummer: '03',
    titel: 'Bauprojekt',
    text: 'Detaillierung von Gestaltung, Konstruktion und Kosten.',
  },
  {
    nummer: '04',
    titel: 'Baubewilligungsverfahren',
    text: 'Aufbereitung und Begleitung des Bewilligungsverfahrens.',
  },
  {
    nummer: '05',
    titel: 'Ausschreibung',
    text: 'Ausschreibung, Offertvergleich und Vergabe an Unternehmer.',
  },
  {
    nummer: '06',
    titel: 'Ausführungsplanung',
    text: 'Detailpläne für die Realisierung.',
  },
  {
    nummer: '07',
    titel: 'Realisierung und Bauleitung',
    text: 'Bauüberwachung, Qualitäts-, Kosten- und Terminkontrolle.',
  },
  {
    nummer: '08',
    titel: 'Inbetriebnahme und Abschluss',
    text: 'Übergabe, Mängelbehebung, Dokumentation.',
  },
];

/** Häufige Fragen zu Leistungen und Zusammenarbeit. */
export const expertiseFragen: InsightFrage[] = [
  {
    frage: 'Welche Leistungen erbringen Sie nach SIA?',
    antwort:
      'Wir arbeiten nach der Ordnung SIA 102 und deren Leistungsphasen: Strategische Planung, Vorstudien, Projektierung, Ausschreibung und Realisierung. Sie können diese Phasen einzeln oder zusammen beauftragen — üblich ist der Einstieg mit Vorstudie und Vorprojekt.',
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
      'Ja. Minergie, Minergie-P und SNBS sind uns vertraut. Wir weisen aber offen darauf hin, wo ein Zertifikat Mehrkosten verursacht, die sich im Betrieb nicht rechnen — die Entscheidung liegt bei Ihnen.',
  },
  {
    frage: 'Wie stellen Sie Kostensicherheit her?',
    antwort:
      'In drei Stufen: Kostenrahmen im Vorprojekt (Genauigkeit etwa ±20 Prozent), Kostenschätzung im Bauprojekt (±10 Prozent) und Kostenvoranschlag nach der Vergabe (±5 Prozent). Während der Ausführung prüfen wir Nachträge einzeln auf Berechtigung.',
  },
  {
    frage: 'Was unterscheidet Sie von anderen Architekturbüros?',
    antwort:
      'Der Gründer bringt über fünfzehn Jahre eigene Bau- und Immobilienpraxis mit. Das führt dazu, dass wirtschaftliche Fragen — Mietzinsniveau, Wohnungsmix, Vermietbarkeit — von Anfang an im Entwurf mitgedacht werden, statt erst am Ende geprüft zu werden.',
  },
  {
    frage: 'Welche Leistungen bieten Sie an?',
    antwort:
      'Architektur und Entwurf, Umbau und Sanierung, Projektentwicklung sowie Bauleitung — von der Machbarkeitsstudie über das Baugesuch bis zur Übergabe. Wir übernehmen einzelne Phasen oder die gesamte Planung.',
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
];
