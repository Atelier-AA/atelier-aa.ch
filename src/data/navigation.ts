import type { NavLink } from '@/types';

// Reihenfolge und Beschriftung nach Kundenwunsch: Projekte, dann Kompetenzen
// (vormals "Leistungen", zwischenzeitlich "Disziplinen"), dann Büro (vormals
// "Über uns", zwischenzeitlich "Atelier"). Die Ziel-URLs bleiben unverändert
// (/leistungen, /ueber-uns) — nur Label und Reihenfolge im Menü ändern sich.
//
// Ab lg stehen alle sechs Punkte offen in der Kopfzeile — kein Burger mehr.
// Ein Büro mit sechs Seiten braucht kein verstecktes Menü. Auf dem Handy
// bleibt der Burger, dort passen sechs Punkte nicht in eine Zeile.
//
// Im Vollbild-Menü (siehe MobileMenu.tsx) sind alle Punkte gleich gross —
// unterschiedliche Grössenstufen wurden vom Kunden ausdrücklich abgelehnt.
//
// "Studien" steht bewusst nicht mehr hier, sondern nur noch im Footer: 70
// Studien gegenüber 22 Projekten haben im Hauptmenü die Projekte verdrängt,
// die als Visitenkarte eines Architekturbüros zuerst wirken sollen. Die Seite
// /studien bleibt vollständig bestehen, verlinkt und indexierbar.
export const navigation: NavLink[] = [
  { href: '/projekte', label: 'Projekte' },
  { href: '/ueber-uns', label: 'Büro' },
  { href: '/ueber-uns/team', label: 'Team' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/insights', label: 'Journal' },
  { href: '/kontakt', label: 'Kontakt' },
];

// Footer, zwei inhaltlich getrennte Gruppen statt einer langen Linkliste —
// "Büro" und "Arbeit" (was wir tun). Die Spalte hiess bis zum Launch-Cleanup
// "Atelier"; verbindlich ist jetzt websiteweit "Büro".
export const footerAtelier: NavLink[] = [
  { href: '/ueber-uns', label: 'Büro' },
  { href: '/ueber-uns/team', label: 'Team' },
  { href: '/insights', label: 'Journal' },
  { href: '/ueber-uns/karriere', label: 'Karriere' },
  { href: '/haeufige-fragen', label: 'Häufige Fragen' },
];

/**
 * Footer-Spalte "Arbeit", wieder in voller Länge.
 *
 * "Studien" und "Werkliste" zeigen auf ihre neuen Ziele: /studien und
 * /kleinprojekte gibt es als eigene Übersichten nicht mehr, sie leiten nur
 * noch weiter. Ein Link auf eine Weiterleitung wäre auf jeder der 228 Seiten
 * ein unnötiger Umweg.
 */
export const footerArbeit: NavLink[] = [
  { href: '/projekte', label: 'Projekte' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/leistungen/machbarkeitsstudie', label: 'Studien' },
  { href: '/leistungen/projektentwicklung', label: 'Projektentwicklung' },
  { href: '/projekte#werkliste', label: 'Werkliste' },
];

export const footerLegal: NavLink[] = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutzerklaerung', label: 'Datenschutzerklärung' },
];
