/**
 * Elindo Immobilien als Immobilienpartner.
 *
 * Angaben geprüft im Juli 2026 auf elindo.ch. Beide Unternehmen sind rechtlich
 * eigenständig und arbeiten projektbezogen zusammen — das muss bei jeder
 * Erwähnung erkennbar bleiben, damit keine falsche Verbundenheit suggeriert
 * wird.
 *
 * Verlinkt an drei Stellen:
 * - Startseite, Abschnitt "Partner" (nach den Referenzen)
 * - Expertise, bei Projektentwicklung und Vermarktung
 * - Insights-Beitrag "Partnerschaft mit Elindo Immobilien"
 *
 * Externe Links tragen `rel="noopener"`; `sponsored` oder `nofollow` sind hier
 * nicht angebracht, weil es keine bezahlte Platzierung ist.
 */
export const elindo = {
  name: 'Elindo Immobilien GmbH',
  kurzname: 'Elindo Immobilien',
  url: 'https://www.elindo.ch',
  strasse: 'Baarerstrasse 52',
  plz: '6300',
  ort: 'Zug',
  telefon: '+41 41 630 11 00',
  telefonHref: '+41416301100',
  email: 'info@elindo.ch',
  /** Einzeiler für Verweise im Fliesstext. */
  claim: 'Inhabergeführtes Familienunternehmen mit über 15 Jahren Bau- und Immobilienerfahrung.',
  regionen: 'Grossraum Zug und Zürich, Deutschschweiz',
  leistungen: [
    'Immobilienverkauf mit Bewertung und Vermarktung',
    'Immobilienbewertung (hedonisch, Ertrags- und Realwert)',
    'Vermarktung von Neubauprojekten',
    'Off-Market-Vermittlungen',
    'Downsizing und Wohnen im Alter',
    'Fotografie, Homestaging, 360°-Besichtigungen',
  ],
} as const;
