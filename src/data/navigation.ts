import type { NavLink } from '@/types';

// Reihenfolge wie im Hauptmenü der alten Website (wp_terms "main",
// menu_order 1-4), erweitert um Insights.
export const navigation: NavLink[] = [
  { href: '/projekte', label: 'Projekte' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/leistungen', label: 'Leistungen' },
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
