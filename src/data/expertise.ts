import type { InsightFrage } from '@/types';

/**
 * Inhalte der Expertise-Seite.
 *
 * Die beiden ersten Schwerpunkte stammen wörtlich von der alten Website
 * (Post 162), die weiteren sind ergänzt. Ziel ist, das Leistungsspektrum so
 * auszuweisen, dass Atelier AA für die gesamte Bandbreite gefunden wird — nicht
 * nur für «Architekt», sondern für Verdichtung, Bauleitung, Machbarkeitsstudie
 * und hindernisfreies Bauen einzeln.
 */

/** Grosse Themenblöcke mit Bild. */
export const schwerpunkte = [
  {
    titel: 'Funktion, Gestaltung und Nachhaltigkeit im Einklang',
    bild: '/images/expertise/neubau.webp',
    absaetze: [
      'Ob Architektur oder Innenarchitektur – wir verbinden ökologische, ökonomische und soziokulturelle Anforderungen zu einem nachhaltigen Ganzen. Räume werden zu Orten, die heutige Bedürfnisse erfüllen, inspirieren und begeistern. Bestehende Gebäude revitalisieren wir nach den Prinzipien des zirkulären Bauens und machen sie zukunftsfähig.',
      'Konkret heisst das: Wir rechnen Lebenszykluskosten neben den Erstellungskosten, legen die Annahmen offen und zeigen, welche Massnahmen sich über die Nutzungsdauer tragen. Nachhaltigkeit ist bei uns eine Rechenaufgabe, keine Absichtserklärung.',
    ],
  },
  {
    titel: 'Für Menschen gedacht und gebaut',
    bild: '/images/expertise/innenarchitektur.png',
    absaetze: [
      'Als Strategie- und Planungsbüro gestalten wir kommerzielle Räume mit klarem Konzept. Zu Projektbeginn analysieren wir die Bedürfnisse der Menschen, die Nutzung des Raums und die Anforderungen des Marktes. Die gewonnenen Erkenntnisse fliessen in die Customer Journey, den Designprozess und die Architektur ein.',
      'Im Wohnbau bedeutet dieselbe Haltung: Grundrisse, die in zwanzig Jahren noch brauchbar sind. Nutzungsoffenheit ist kein Zusatz, sondern die Voraussetzung dafür, dass ein Gebäude nicht abgerissen wird, wenn sich die Anforderungen ändern.',
    ],
  },
  {
    titel: 'Verdichtung als Antwort auf knappes Bauland',
    bild: '/images/expertise/umbau.jpg',
    absaetze: [
      'In den Kantonen Zürich, Aargau und Zug ist Bauland knapp und teuer. Die Reserve liegt im Bestand: Parzellen aus den Sechziger- und Siebzigerjahren nutzen ihre zulässige Ausnutzung häufig nur zur Hälfte.',
      'Wir prüfen, welcher Weg trägt — Aufstockung, Anbau oder Ersatzneubau — und rechnen die Varianten mit Kostenrahmen und Ertragsschätzung durch. Erst danach wird gestaltet.',
    ],
  },
];

/** Leistungen mit Kurzbeschreibung, tabellarisch. */
export const leistungsbereiche = [
  {
    titel: 'Architektur und Neubau',
    text: 'Mehrfamilienhäuser, Wohnüberbauungen, Einfamilienhäuser, Gewerbe- und Verwaltungsbauten. Von der Volumenstudie über das Baugesuch bis zur Schlüsselübergabe.',
  },
  {
    titel: 'Umbau und Sanierung',
    text: 'Energetische Sanierung, Aufstockung, Anbau, Umnutzung. Auch im bewohnten Zustand mit Etappierung, die für die Bewohnenden erträglich bleibt.',
  },
  {
    titel: 'Verdichtung und Innenentwicklung',
    text: 'Prüfung von Ausnutzungsreserven, Variantenvergleich zwischen Aufstockung und Ersatzneubau, Begleitung durch das Bewilligungsverfahren.',
  },
  {
    titel: 'Projektentwicklung',
    text: 'Machbarkeitsstudien, Kostenrahmen, Ertragsrechnung und Wohnungsmix — die Grundlagen, auf denen sich Investitionsentscheide treffen lassen.',
  },
  {
    titel: 'Innenarchitektur',
    text: 'Grundrisse, Materialisierung, Licht- und Farbkonzepte für Wohnungen, Büros und Verkaufsräume.',
  },
  {
    titel: 'Hindernisfreies Bauen',
    text: 'Umbau für das Wohnen im Alter nach den Massen der Norm SIA 500: schwellenlose Zugänge, bodengleiche Duschen, Vorbereitung für einen späteren Lift.',
  },
  {
    titel: 'Bauleitung und Kostenkontrolle',
    text: 'Ausschreibung, Vergabe, Koordination der Unternehmer, Prüfung von Nachträgen. Wir vertreten Ihre Interessen auf der Baustelle.',
  },
  {
    titel: 'Generalplanung',
    text: 'Auf Wunsch übernehmen wir als Generalplaner die Verantwortung für die gesamte Projektierung — ein Vertrags- und Ansprechpartner für alle Fachplaner und die Bauherrschaft.',
  },
  {
    titel: 'Baugesuch und Behördenverfahren',
    text: 'Vollständige Dossiers für die Kantone Zürich, Aargau und Zug, Begleitung durch Auflage, Einsprachen und Auflagen der Bewilligung.',
  },
  {
    titel: 'Bauherrenberatung',
    text: 'Beurteilung von Grundstücken vor dem Kauf, Prüfung fremder Projekte, Zweitmeinung zu Kostenschätzungen und Werkverträgen.',
  },
];

/** Gebäudetypen, für die wir Erfahrung mitbringen. */
export const gebaeudetypen = [
  'Mehrfamilienhaus',
  'Wohnüberbauung',
  'Einfamilienhaus',
  'Aufstockung',
  'Ersatzneubau',
  'Umbau und Sanierung',
  'Gewerbebau',
  'Verwaltungsbau',
  'Verkaufsraum und Ladenbau',
  'Wohnen im Alter',
  'Bürobau',
  'Öffentliches Gebäude',
  'Schul- und Bildungsbau',
  'Gesundheits- und Pflegebau',
];

/** Häufige Fragen zu Leistungen und Zusammenarbeit. */
export const expertiseFragen: InsightFrage[] = [
  {
    frage: 'Welche Leistungen erbringen Sie nach SIA?',
    antwort:
      'Wir arbeiten nach der Ordnung SIA 102 und deren Leistungsphasen: Strategische Planung, Vorstudien, Projektierung, Ausschreibung, Realisierung und Bewirtschaftung. Sie können alle Phasen beauftragen oder einzelne — üblich ist der Einstieg mit Vorstudie und Vorprojekt.',
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
      'Der Gründer bringt über fünfzehn Jahre Bau- und Immobilienpraxis mit. Das führt dazu, dass wirtschaftliche Fragen — Mietzinsniveau, Wohnungsmix, Vermietbarkeit — von Anfang an im Entwurf mitgedacht werden, statt erst am Ende geprüft zu werden.',
  },
];
