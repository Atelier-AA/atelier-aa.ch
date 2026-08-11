import type { TeamMember } from '@/types';

/**
 * Team.
 *
 * Namen und Rollen vom Büro bestätigt (Stand Juli 2026). Bei allen ausser
 * Alisami Aljili ist nur die Rolle bestätigt, kein ausführlicher Werdegang —
 * bitte bei Gelegenheit ausbauen.
 *
 * Reihenfolge in der Datei = Reihenfolge auf der Seite: die ersten zwei
 * (Alisami Aljili, Fatime Aljili) stehen in der ersten Zeile, die
 * restlichen drei darunter — siehe `ueber-uns/page.tsx`.
 */
export const team: TeamMember[] = [
  {
    slug: 'alisami-aljili',
    name: 'Alisami Aljili',
    rolle: 'Inhaber, Geschäftsführer',
    bild: '/images/team/alisami-aljili.jpg',
    bildAlt:
      'Alisami Aljili, Architekt in Zürich, Aargau und Zug, Gründer und Geschäftsführer von Atelier AA Architekten',
    kurz: 'Gründer von Atelier AA Architekten, verantwortlich für Entwurf und Projektleitung.',
    schwerpunkte: [
      'Entwurf und Projektentwicklung',
      'Wohnbau und Verdichtung',
      'Baurecht und Bewilligungsverfahren',
      'Bauherrenberatung',
    ],
    absaetze: [
      'Alisami Aljili hat Atelier AA Architekten 2021 in Obfelden gegründet, nach über fünfzehn Jahren in der Bau- und Immobilienpraxis. Diese Erfahrung prägt seine Arbeit: Er entwirft nicht am Markt vorbei, sondern kennt die Zahlen, die über die Realisierbarkeit eines Projekts entscheiden.',
      'Sein Schwerpunkt liegt im Wohnbau — vom Mehrfamilienhaus über die Wohnüberbauung bis zur Verdichtung bestehender Parzellen, realisiert in der ganzen Schweiz. Besonders interessieren ihn Aufgaben, bei denen Ausnutzung, Ortsbild und Nachbarschaft in Konflikt stehen und eine Lösung erst gefunden werden muss. Wo das Büro die Bauleitung selbst übernimmt, liegt sie in der Regel bei ihm.',
      '«Wir entwerfen nicht für den Moment. Wir schaffen Orte mit Bestand.» Dieses Motto beschreibt, woran er jedes Projekt misst.',
    ],
    email: 'info@atelier-aa.ch',
  },
  {
    slug: 'fatime-aljili',
    name: 'Fatime Aljili',
    rolle: 'Personal',
    bild: '/images/team/fatime-aljili.jpg',
    kurz: 'Verantwortlich für Personalfragen im Büro.',
    schwerpunkte: ['Personalwesen', 'Büroorganisation'],
    absaetze: [
      'Fatime Aljili ist im Büro für Personalfragen verantwortlich.',
    ],
    email: null,
  },
  {
    slug: 'ejup-bajrami',
    name: 'Ejup Bajrami',
    rolle: 'Projektleiter',
    bild: '/images/team/ejup-bajrami.jpg',
    kurz: 'Leitet Projekte in der Planung.',
    schwerpunkte: ['Projektleitung', 'Planung', 'Bauherren- und Behördenkontakt'],
    absaetze: [
      'Ejup Bajrami leitet Projekte während der Planung und ist in dieser Phase Ansprechpartner für Bauherrschaft und Behörden.',
    ],
    email: null,
  },
  {
    slug: 'yakup-uslu',
    name: 'Yakup Uslu',
    rolle: 'Projektleiter',
    bild: '/images/team/yakup-uslu.jpg',
    kurz: 'Leitet Projekte in der Planung.',
    schwerpunkte: ['Projektleitung', 'Planung', 'Bauherren- und Behördenkontakt'],
    absaetze: [
      'Yakup Uslu ist ebenfalls als Projektleiter tätig und begleitet Bauherrschaften und Behörden durch die Planungsphase.',
    ],
    email: null,
  },
  {
    slug: 'riccarda-tscharner',
    name: 'Riccarda Tscharner',
    rolle: 'Assistentin der Geschäftsleitung',
    bild: '/images/team/riccarda-tscharner.jpg',
    kurz: 'Unterstützt die Geschäftsleitung in administrativen und organisatorischen Aufgaben.',
    schwerpunkte: ['Administration', 'Büroorganisation', 'Unterstützung der Geschäftsleitung'],
    absaetze: [
      'Riccarda Tscharner unterstützt die Geschäftsleitung in administrativen und organisatorischen Belangen.',
    ],
    email: null,
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
