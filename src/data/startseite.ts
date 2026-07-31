/**
 * Inhalte der Startseiten-Abschnitte.
 *
 * Die Startseite ist die Seite, die Suchmaschinen und KI-Systeme zuerst
 * auswerten. Sie soll deshalb die drei Fragen beantworten, mit denen Menschen
 * suchen: Wer seid ihr, was macht ihr, wo arbeitet ihr — und das mit
 * ausgeschriebenen Ortsnamen und Leistungsbegriffen.
 */

/** Ablauf eines Projekts in vier Phasen, für den Abschnitt "So arbeiten wir". */
export const ablauf = [
  {
    nummer: '01',
    titel: 'Erstgespräch',
    text: 'Wir hören zu: Was ist Ihr Vorhaben, was gibt der Ort her, welcher Rahmen steht zur Verfügung. Kostenlos und unverbindlich.',
  },
  {
    nummer: '02',
    titel: 'Machbarkeit',
    text: 'Wir prüfen Bauordnung, Ausnutzung und Erschliessung und zeigen Ihnen in einer Volumenstudie, was möglich ist — mit Kostenrahmen.',
  },
  {
    nummer: '03',
    titel: 'Entwurf und Bewilligung',
    text: 'Aus mehreren Ansätzen wählen Sie einen. Wir entwickeln ihn zum Baugesuch und führen es durch das Bewilligungsverfahren.',
  },
  {
    nummer: '04',
    titel: 'Realisierung',
    text: 'Ausführungsplanung, Ausschreibung, Vergabe und Bauleitung bis zur Übergabe. Ein Ansprechpartner über die ganze Zeit.',
  },
];

/**
 * Schwerpunktregion nach Kantonen (nicht das gesamte Einsatzgebiet — wir
 * arbeiten schweizweit, hier liegt aber unser Kerngebiet rund um den
 * Bürostandort).
 *
 * Ausgeschriebene Gemeindenamen sind für die regionale Suche entscheidend:
 * Wer "Architekt Affoltern am Albis" sucht, findet nur, was diesen Namen
 * enthält.
 */
export const regionen = [
  {
    kanton: 'Kanton Zürich',
    kuerzel: 'ZH',
    orte:
      'Obfelden, Affoltern am Albis, Ottenbach, Mettmenstetten, Knonau, Bonstetten, Wettswil, Birmensdorf, Urdorf, Dietikon, Adliswil, Zürich und Umgebung',
  },
  {
    kanton: 'Kanton Aargau',
    kuerzel: 'AG',
    orte:
      'Untersiggenthal, Künten, Bremgarten, Wohlen, Muri, Baden, Wettingen, Mellingen, Lenzburg und Umgebung',
  },
  {
    kanton: 'Kanton Zug',
    kuerzel: 'ZG',
    orte: 'Zug, Baar, Cham, Steinhausen, Hünenberg, Risch-Rotkreuz, Unterägeri und Umgebung',
  },
];

/**
 * Kundenstimmen.
 *
 * ACHTUNG: Diese Einträge sind Platzhalter und dürfen so nicht veröffentlicht
 * werden. Erfundene Bewertungen sind nach dem Bundesgesetz gegen den unlauteren
 * Wettbewerb (UWG) unzulässig.
 *
 * Vorgehen: Echte Rückmeldungen einholen, schriftliche Freigabe für die
 * Nennung einholen, dann hier eintragen. Erst danach `zeigeStimmen` auf `true`
 * setzen. Google-Bewertungen können zusätzlich als Quelle verlinkt werden —
 * `AggregateRating`-Markup darf aber nur echte, überprüfbare Bewertungen
 * abbilden, sonst droht eine Abstrafung durch Google.
 */
export const zeigeStimmen = false;

export const stimmen = [
  {
    text: 'Platzhalter — echte Kundenstimme mit schriftlicher Freigabe einsetzen.',
    person: 'Name, Ort',
    projekt: 'Projektbezeichnung',
  },
];

/** Zahlen zum Büro. Nur belegbare Angaben verwenden. */
export const zahlen = [
  { wert: '2021', label: 'gegründet in Obfelden' },
  { wert: '10+', label: 'Jahre eigene Bau- und Immobilienpraxis' },
  { wert: 'CH', label: 'Schweizweit tätig' },
  { wert: '5', label: 'Personen im Planungsteam' },
];
