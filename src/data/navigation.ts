import type { NavLink } from '@/types';

// Reihenfolge und Beschriftung nach Kundenwunsch: Projekte, dann Disziplinen
// (vormals "Leistungen"), dann Atelier (vormals "Über uns"). Die Ziel-URLs
// bleiben unverändert (/leistungen, /ueber-uns) — nur Label und Reihenfolge
// im Menü ändern sich.
export const navigation: NavLink[] = [
  { href: '/projekte', label: 'Projekte' },
  { href: '/leistungen', label: 'Disziplinen' },
  { href: '/ueber-uns', label: 'Atelier' },
  { href: '/insights', label: 'Insights' },
  { href: '/kontakt', label: 'Kontakt' },
];

// Nicht im Hauptmenü, nur im Footer verlinkt.
export const footerZusatz: NavLink[] = [
  { href: '/haeufige-fragen', label: 'Häufige Fragen' },
];

export const footerLegal: NavLink[] = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutzerklaerung', label: 'Datenschutzerklärung' },
];
