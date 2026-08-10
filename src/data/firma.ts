/**
 * Firmen- und Kontaktangaben.
 *
 * Geprüft im Juli 2026 gegen die laufende Website atelier-aa.ch, das
 * Handelsregister (business-monitor.ch, Moneyhouse) und Branchenverzeichnisse.
 *
 * Adresse: Bachstrasse 39. Die alte WordPress-Seite war widersprüchlich
 * (Footer und Impressum "29", Kontaktseite "39"); die 39 ist durch die
 * aktuelle Website, das Handelsregister und architektvergleich.ch bestätigt.
 * search.ch und local.ch führen weiterhin die veraltete 29 — dort sollte der
 * Eintrag korrigiert werden.
 *
 * Telefon: +41 44 770 05 06, bestätigt durch Website und Verzeichnisse. Das
 * alte Impressum nannte abweichend "+41 41 630 11 00" (Vorwahl 041).
 *
 * Firmenname: Im Handelsregister in Versalien geführt ("ATELIER AA Architekten
 * GmbH"). Hier in gemischter Schreibweise, wie die Website ihn verwendet.
 */
export const firma = {
  name: 'Atelier AA Architekten GmbH',
  strasse: 'Bachstrasse 39',
  plz: '8912',
  ort: 'Obfelden',
  land: 'Schweiz',
  telefon: '+41 44 770 05 06',
  /** Telefonnummer in maschinenlesbarer Form für tel:-Links. */
  telefonHref: '+41447700506',
  email: 'info@atelier-aa.ch',
  uid: 'CHE-237.040.294',
  /**
   * Sitzkanton des Handelsregistereintrags. Die alte Website nannte zusätzlich
   * "CH-020.4.074.716-1" — eine Nummer der bis 2016 gültigen kantonalen
   * Systematik, die durch die UID ersetzt wurde und extern nicht
   * verifizierbar war. Sie ist deshalb nicht übernommen.
   */
  handelsregisterKanton: 'Kanton Zürich',
  /**
   * Gesellschafter und Geschäftsführer mit Einzelunterschrift, eingetragen
   * seit 19.07.2021. Vorname Alisami, Nachname Aljili — vom Kunden direkt
   * bestätigt (2026-08-10). Eine frühere Session war hier von "Vorname
   * Aljili, Nachname Aljisami" ausgegangen (angeblich gegen das
   * Handelsregister geprüft) — das war falsch; sollte beim nächsten
   * Handelsregisterauszug zur Sicherheit gegengeprüft werden.
   */
  vertretungsberechtigt: 'Alisami Aljili',
  /** Gründung gemäss Handelsregister. */
  gruendung: '2021',
} as const;
