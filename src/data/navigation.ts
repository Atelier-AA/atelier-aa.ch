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
// "Atelier" (das Büro) und "Arbeit" (was wir tun).
export const footerAtelier: NavLink[] = [
  { href: '/ueber-uns', label: 'Büro' },
  { href: '/ueber-uns/team', label: 'Team' },
  { href: '/insights', label: 'Journal' },
  { href: '/ueber-uns/karriere', label: 'Karriere' },
  { href: '/haeufige-fragen', label: 'Häufige Fragen' },
];

/**
 * Footer: nur noch Einstiege, nicht die ganze Seitenstruktur.
 *
 * Entfallen sind Studien/Machbarkeitsstudie, Projektentwicklung und
 * Kleinprojekte. Die ersten beiden stehen als Unterlinks bei der Kompetenz
 * "Analyse und Konzept" auf /leistungen, die Kleinprojekte unten auf
 * /projekte — dort, wo sie inhaltlich hingehören. Für Suchmaschinen zählt,
 * DASS eine Seite verlinkt ist, nicht dass sie im Footer steht; über die
 * jeweilige Hauptseite ist jede von überall zwei Klicks entfernt.
 */
export const footerArbeit: NavLink[] = [
  { href: '/projekte', label: 'Projekte' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/kontakt', label: 'Kontakt' },
];

export const footerLegal: NavLink[] = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutzerklaerung', label: 'Datenschutzerklärung' },
];
