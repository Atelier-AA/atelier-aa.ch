/**
 * Firmen- und Kontaktangaben.
 *
 * Quelle ist das Footer-Widget der alten Website (`widget_block` in
 * wp_options) — dort stehen Adresse und Telefonnummer konsistent zusammen.
 *
 * Achtung: Die alte Website widerspricht sich an anderen Stellen. Die
 * Kontaktseite nennt "Bachstrasse 39", das Impressum die Telefonnummer
 * "+41 41 630 11 00". Beides weicht vom Footer ab und wurde hier nicht
 * übernommen; im Zweifel bitte gegen den Handelsregistereintrag prüfen.
 */
export const firma = {
  name: 'Atelier AA Architekten GmbH',
  strasse: 'Bachstrasse 29',
  plz: '8912',
  ort: 'Obfelden',
  land: 'Schweiz',
  telefon: '+41 44 770 05 06',
  /** Telefonnummer in maschinenlesbarer Form für tel:-Links. */
  telefonHref: '+41447700506',
  email: 'info@atelier-aa.ch',
  uid: 'CHE-237.040.294',
  handelsregister: 'CH-020.4.074.716-1',
  vertretungsberechtigt: 'Aljili Alisami',
} as const;
