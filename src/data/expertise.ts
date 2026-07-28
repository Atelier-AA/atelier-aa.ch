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
 * Leistungsangebot: echte Mandatsarten («wofür können Sie uns beauftragen»),
 * statt Bauaufgaben (Neubau, Umbau, Verdichtung …) als gleichrangige Punkte
 * aufzuführen — die stehen als Beispiele innerhalb von "Planung und Entwurf"
 * sowie separat, sr-only, im Abschnitt Bauaufgaben.
 */
export const leistungsangebot = [
  {
    titel: 'Beratung',
    text: 'Beurteilung von Grundstücken vor dem Kauf, Prüfung fremder Projekte, Zweitmeinung zu Kostenschätzungen und Werkverträgen. Wir sagen Ihnen offen, wenn ein Vorhaben nicht trägt — bevor Planungskosten entstehen.',
  },
  {
    titel: 'Projektentwicklung',
    text: 'Machbarkeitsstudien, Kostenrahmen, Ertragsrechnung und Wohnungsmix — die Grundlagen, auf denen sich Investitionsentscheide treffen lassen. So lässt sich vor der ersten Skizze abschätzen, ob sich ein Vorhaben wirtschaftlich trägt.',
  },
  {
    titel: 'Planung und Entwurf',
    text: 'Neubau, Umbau, Verdichtung, Innenarchitektur und hindernisfreies Bauen — von der ersten Volumenstudie bis zum ausführungsreifen Projekt, für Wohn- und Gewerbebauten gleichermassen. Jedes Projekt beginnt mit der Analyse von Ort, Nutzung und Bauordnung, bevor der Entwurf entsteht.',
  },
  {
    titel: 'Baugesuch und Bewilligung',
    text: 'Vollständige Dossiers für die Kantone Zürich, Aargau und Zug, Begleitung durch Auflage, Einsprachen und Bewilligungsauflagen. Wir kennen die Praxis der Bewilligungsbehörden in allen drei Kantonen und planen Fristen entsprechend ein.',
  },
  {
    titel: 'Bauleitung und Kostenkontrolle',
    text: 'Ausschreibung, Vergabe, Koordination der Unternehmer, Prüfung von Nachträgen. Wir vertreten Ihre Interessen auf der Baustelle und gleichen den Kostenvoranschlag laufend mit dem effektiven Baufortschritt ab.',
  },
  {
    titel: 'Generalplanung',
    text: 'Koordination sämtlicher Fachplaner unter einem Mandat — für einen direkten Draht zwischen Bauherrschaft und allen Beteiligten, mit klaren Verantwortlichkeiten und kurzen Entscheidungswegen. Damit übernehmen wir die Verantwortung, die sonst zwischen mehreren Vertragspartnern verloren gehen kann.',
  },
  {
    titel: 'Wettbewerbe und Studien',
    text: 'Beteiligung an Architekturwettbewerben, Studien und Testplanungen — auch ausserhalb konkreter Bauvorhaben, etwa zur Standort- oder Arealentwicklung. Der Wettbewerb bleibt für uns ein wichtiges Verfahren, um neue Lösungsansätze zu erproben.',
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
  {
    kategorie: 'Öffentliche Institutionen',
    beispiele: 'Verwaltungsgebäude, Gemeindebauten, öffentliche Anlagen',
  },
  {
    kategorie: 'Bildungswesen',
    beispiele: 'Schulhäuser, Kindergärten, Bildungs- und Betreuungseinrichtungen',
  },
  {
    kategorie: 'Gesundheitswesen',
    beispiele: 'Alters- und Pflegeheime, medizinische Einrichtungen',
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
