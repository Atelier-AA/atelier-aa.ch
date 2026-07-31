import type { TeamMember } from '@/types';

/**
 * Team.
 *
 * Namen und Rollen vom Büro bestätigt (Stand Juli 2026). Bei allen ausser
 * Aljili Aljisami ist nur die Rolle bestätigt, kein ausführlicher Werdegang —
 * bitte bei Gelegenheit ausbauen.
 *
 * Reihenfolge in der Datei = Reihenfolge auf der Seite: die ersten zwei
 * (Aljili Aljisami, Fatime Aljili) stehen in der ersten Zeile, die
 * restlichen drei darunter — siehe `ueber-uns/page.tsx`.
 */
export const team: TeamMember[] = [
  {
    slug: 'aljili-aljisami',
    name: 'Aljili Aljisami',
    rolle: 'Inhaber, Geschäftsführer',
    bild: '/images/team/aljili-aljisami.jpg',
    kurz: 'Gründer von Atelier AA, verantwortlich für Entwurf und Projektleitung.',
    schwerpunkte: [
      'Entwurf und Projektentwicklung',
      'Wohnbau und Verdichtung',
      'Baurecht und Bewilligungsverfahren',
      'Bauherrenberatung',
    ],
    absaetze: [
      'Aljili Aljisami hat Atelier AA Architekten 2021 in Obfelden gegründet, nach über zehn Jahren in der Bau- und Immobilienpraxis. Er ist zudem Inhaber von Elindo Immobilien GmbH in Zug, wo gemeinsam über fünfzehn Jahre Erfahrung in Bau und Immobilien zusammenkommen. Diese doppelte Herkunft prägt seine Arbeit: Er entwirft nicht am Markt vorbei, sondern kennt die Zahlen, die über die Realisierbarkeit eines Projekts entscheiden.',
      'Sein Schwerpunkt liegt im Wohnbau — vom Mehrfamilienhaus über die Wohnüberbauung bis zur Verdichtung bestehender Parzellen, realisiert in der ganzen Schweiz. Besonders interessieren ihn Aufgaben, bei denen Ausnutzung, Ortsbild und Nachbarschaft in Konflikt stehen und eine Lösung erst gefunden werden muss. Wo das Büro die Bauleitung selbst übernimmt, liegt sie in der Regel bei ihm.',
      '«Wir entwerfen nicht für den Moment. Wir schaffen Orte mit Bestand.» Dieser Satz begleitet als Motto jede Seite dieser Website — er beschreibt, woran er ein Projekt messen lässt.',
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
      'Fatime Aljili ist im Büro für Personalfragen verantwortlich. [ENTWURF — bitte mit echter Angabe ersetzen: seit wann im Büro, ein konkreter Aspekt der Rolle über die allgemeine Beschreibung hinaus, z. B. Rekrutierung oder Onboarding neuer Mitarbeitender.]',
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
      'Ejup Bajrami leitet Projekte während der Planung und ist in dieser Phase Ansprechpartner für Bauherrschaft und Behörden. [ENTWURF — bitte ersetzen: ein bis zwei Sätze dazu, was er konkret tut oder welches Projekt er massgeblich mitgeleitet hat, z. B. aus `src/data/projekte.ts`.]',
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
      'Yakup Uslu leitet Projekte während der Planung und ist in dieser Phase Ansprechpartner für Bauherrschaft und Behörden. [ENTWURF — bitte ersetzen: ein bis zwei Sätze zu seiner konkreten Aufgabe oder einem Projekt, das er mitgeleitet hat — anders als bei Ejup Bajrami, damit sich die Profile unterscheiden.]',
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
      'Riccarda Tscharner unterstützt die Geschäftsleitung in administrativen und organisatorischen Belangen. [ENTWURF — bitte mit echter Angabe ersetzen, die sich klar von Fatime Aljilis Text unterscheidet, z. B. Kundenkontakt, Terminkoordination oder ein anderer konkreter Aufgabenbereich.]',
    ],
    email: null,
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
