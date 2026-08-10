import type { NavLink } from '@/types';

// Reihenfolge und Beschriftung nach Kundenwunsch: Projekte, dann Kompetenzen
// (vormals "Leistungen", zwischenzeitlich "Disziplinen"), dann Büro (vormals
// "Über uns", zwischenzeitlich "Atelier"). Die Ziel-URLs bleiben unverändert
// (/leistungen, /ueber-uns) — nur Label und Reihenfolge im Menü ändern sich.
//
// Grössenstufen im Vollbild-Menü (siehe MobileMenu.tsx): Projekte und Büro
// gleich gross als die beiden wichtigsten Punkte; die übrigen kleiner —
// statt fünf/sechs gleich grosser Zeilen.
export const navigation: NavLink[] = [
  { href: '/projekte', label: 'Projekte', stufe: 1 },
  {
    href: '/ueber-uns',
    label: 'Büro',
    stufe: 1,
    unterlink: { href: '/ueber-uns/team', label: 'Team' },
  },
  { href: '/leistungen', label: 'Kompetenzen', stufe: 3 },
  { href: '/studien', label: 'Studien', stufe: 3 },
  { href: '/insights', label: 'Insights', stufe: 3 },
  { href: '/kontakt', label: 'Kontakt', stufe: 3 },
];

// Nicht im Hauptmenü, nur im Footer verlinkt.
export const footerZusatz: NavLink[] = [
  { href: '/kleinprojekte', label: 'Kleinprojekte' },
  { href: '/leistungen/machbarkeitsstudie', label: 'Machbarkeitsstudie' },
  { href: '/leistungen/projektentwicklung', label: 'Projektentwicklung' },
  { href: '/ueber-uns/team', label: 'Team' },
  { href: '/ueber-uns/karriere', label: 'Karriere' },
  { href: '/haeufige-fragen', label: 'Häufige Fragen' },
];

export const footerLegal: NavLink[] = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutzerklaerung', label: 'Datenschutzerklärung' },
];
