import type { TeamMember } from '@/types';

/**
 * Team.
 *
 * Namen und Rollen vom Büro bestätigt (Stand Juli 2026). Fatime Aljili und
 * Riccarda Tscharner sind kurz gehalten, da nur die Rolle bestätigt ist, nicht
 * ein ausführlicher Werdegang — bitte bei Gelegenheit ausbauen. Ejup Bajrami
 * und Yakup Uslu (beide Projektleiter) fehlen noch, bis ihre Fotos vorliegen.
 *
 * Reihenfolge in der Datei = Reihenfolge auf der Seite.
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
      'Aljili Aljisami hat Atelier AA Architekten 2021 in Obfelden gegründet, nach über fünfzehn Jahren in der Bau- und Immobilienpraxis. Diese doppelte Herkunft prägt seine Arbeit: Er entwirft nicht am Markt vorbei, sondern kennt die Zahlen, die über die Realisierbarkeit eines Projekts entscheiden.',
      'Sein Schwerpunkt liegt im Wohnbau — vom Mehrfamilienhaus über die Wohnüberbauung bis zur Verdichtung bestehender Parzellen in den Kantonen Zürich, Aargau und Zug. Besonders interessieren ihn Aufgaben, bei denen Ausnutzung, Ortsbild und Nachbarschaft in Konflikt stehen und eine Lösung erst gefunden werden muss.',
      '«Wir entwerfen nicht für den Moment. Wir schaffen Orte mit Bestand.» Dieser Satz steht nicht zufällig auf der Startseite — er beschreibt, woran er ein Projekt messen lässt.',
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
      'Fatime Aljili ist im Büro für Personalfragen verantwortlich. Sie sorgt dafür, dass organisatorische Abläufe im Hintergrund reibungslos funktionieren.',
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
      'Riccarda Tscharner unterstützt die Geschäftsleitung in administrativen und organisatorischen Belangen und sorgt für einen reibungslosen Ablauf im Büroalltag.',
    ],
    email: null,
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
