import type { NavLink } from '@/types';

// Reihenfolge und Beschriftung nach Kundenwunsch: Projekte, dann Kompetenzen
// (vormals "Leistungen", zwischenzeitlich "Disziplinen"), dann Büro (vormals
// "Über uns", zwischenzeitlich "Atelier"). Die Ziel-URLs bleiben unverändert
// (/leistungen, /ueber-uns) — nur Label und Reihenfolge im Menü ändern sich.
//
// Im Vollbild-Menü (siehe MobileMenu.tsx) sind alle Punkte gleich gross —
// unterschiedliche Grössenstufen wurden vom Kunden ausdrücklich abgelehnt.
export const navigation: NavLink[] = [
  { href: '/projekte', label: 'Projekte' },
  {
    href: '/ueber-uns',
    label: 'Büro',
    unterlink: { href: '/ueber-uns/team', label: 'Team' },
  },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/studien', label: 'Studien' },
  { href: '/insights', label: 'Insights' },
  { href: '/kontakt', label: 'Kontakt' },
];

// Nicht im Hauptmenü, nur im Footer verlinkt.
export const footerZusatz: NavLink[] = [
  { href: '/leistungen/projektentwicklung', label: 'Projektentwicklung' },
  { href: '/leistungen/machbarkeitsstudie', label: 'Machbarkeitsstudie' },
  { href: '/kleinprojekte', label: 'Kleinprojekte' },
  { href: '/ueber-uns/karriere', label: 'Karriere' },
  { href: '/haeufige-fragen', label: 'Häufige Fragen' },
];

export const footerLegal: NavLink[] = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutzerklaerung', label: 'Datenschutzerklärung' },
];
