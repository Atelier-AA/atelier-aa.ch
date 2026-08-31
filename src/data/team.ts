import type { TeamMember } from '@/types';

/**
 * Team.
 *
 * Namen und Rollen vom Büro bestätigt (Stand Juli 2026). Bei allen ausser
 * Alisami Aljili ist nur die Rolle bestätigt, kein ausführlicher Werdegang —
 * bitte bei Gelegenheit ausbauen.
 *
 * Reihenfolge in der Datei = Reihenfolge auf der Seite: die ersten drei
 * (Alisami Aljili, Ejup Bajrami, Yakup Uslu) stehen in der ersten Zeile,
 * die restlichen zwei darunter, daneben eine Karriere-Kachel — siehe
 * `ueber-uns/team/page.tsx`.
 */
export const team: TeamMember[] = [
  {
    slug: 'alisami-aljili',
    name: 'Alisami Aljili',
    rolle: 'Inhaber, Geschäftsführer',
    bild: '/images/team/atelier-aa-alisami-aljili.jpg',
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
      'Sein Schwerpunkt liegt im Wohnbau: vom Mehrfamilienhaus über die Wohnüberbauung bis zur Verdichtung bestehender Parzellen, realisiert in der ganzen Schweiz. Besonders interessieren ihn Aufgaben, bei denen Ausnutzung, Ortsbild und Nachbarschaft in Konflikt stehen und eine Lösung erst gefunden werden muss. Wo das Büro die Bauleitung selbst übernimmt, liegt sie in der Regel bei ihm.',
      '«Wir entwerfen nicht für den Moment. Wir schaffen Orte mit Bestand.» Dieses Motto beschreibt, woran er jedes Projekt misst.',
    ],
    email: 'info@atelier-aa.ch',
    editorial: {
      absaetze: [
        'Bevor ich Atelier AA gegründet habe, durfte ich in renommierten Schweizer Architekturbüros an unterschiedlichen Projekten und Aufgabenstellungen arbeiten. Diese Jahre haben nicht nur meine architektonische Haltung geprägt, sondern auch ein Netzwerk entstehen lassen, das mit der Zeit gewachsen ist.',
        'Aus beruflichen Kontakten wurden langfristige Beziehungen, aus Begegnungen Vertrauen und teilweise auch Freundschaften. Immer häufiger entstanden daraus Gespräche über eigene Projekte, Grundstücke und Ideen. Der Schritt in die Selbstständigkeit war deshalb kein abrupter Wechsel, sondern eine natürliche Entwicklung, getragen von Erfahrung, einem gewachsenen Netzwerk und Menschen, die mir ihr Vertrauen geschenkt haben.',
        'Ein Entwurf ist für mich nie beim ersten Gedanken abgeschlossen. Architektur entwickelt sich. Man analysiert, entwirft, hinterfragt, verwirft und präzisiert, so lange, bis aus unterschiedlichen Anforderungen eine klare Antwort entsteht.',
        'Dabei gibt es für mich keine Architektur nach Schema. Jedes Projekt hat andere Voraussetzungen: einen anderen Ort, eine andere Bauherrschaft, ein anderes Budget und andere Ziele. Genau darin liegt für mich die eigentliche Aufgabe des Architekten: diese unterschiedlichen Bedingungen zu verstehen und daraus ein stimmiges Ganzes zu entwickeln.',
        'Gute Architektur allein genügt jedoch nicht. Ein Projekt braucht ebenso Struktur, Führung und Klarheit in den Entscheidungen. Gestaltung, Kosten, Termine, Bewilligungsfähigkeit und Ausführung müssen zusammen gedacht werden. Deshalb verstehen wir Architektur nicht nur als Entwurf, sondern als Verantwortung für den gesamten Prozess.',
        'Ein Investor betrachtet ein Projekt anders als eine private Bauherrschaft. Ein Wettbewerb stellt andere Fragen als eine Projektentwicklung. Manche Projekte beginnen mit einer klaren wirtschaftlichen Zielsetzung, andere mit einer Vorstellung von Raum, Atmosphäre oder Lebensqualität.',
        'Unsere Aufgabe ist es, genau zuzuhören, die richtigen Fragen zu stellen und daraus eine Lösung zu entwickeln, die gestalterisch überzeugt und gleichzeitig realisierbar bleibt.',
        'Dabei geht es nicht darum, jedem Projekt unsere eigene Handschrift aufzuzwingen. Es geht darum, das Potenzial einer Aufgabe zu erkennen und gemeinsam die richtige Antwort darauf zu finden.',
      ],
      schlusszeile: 'Das Projekt steht im Vordergrund.',
    },
  },
  {
    slug: 'ejup-bajrami',
    name: 'Ejup Bajrami',
    rolle: 'Projektleiter',
    bild: '/images/team/atelier-aa-ejup-bajrami.jpg',
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
    bild: '/images/team/atelier-aa-yakup-uslu.jpg',
    kurz: 'Leitet Projekte in der Planung.',
    schwerpunkte: ['Projektleitung', 'Planung', 'Bauherren- und Behördenkontakt'],
    absaetze: [
      'Yakup Uslu ist ebenfalls als Projektleiter tätig und begleitet Bauherrschaften und Behörden durch die Planungsphase.',
    ],
    email: null,
  },
  {
    slug: 'fatime-aljili',
    name: 'Fatime Aljili',
    rolle: 'Personal',
    bild: '/images/team/atelier-aa-fatime-aljili.jpg',
    kurz: 'Verantwortlich für Personalfragen im Büro.',
    schwerpunkte: ['Personalwesen', 'Büroorganisation'],
    absaetze: [
      'Fatime Aljili ist im Büro für Personalfragen verantwortlich.',
    ],
    email: null,
  },
  {
    slug: 'ricarda-tscharner',
    name: 'Ricarda Tscharner',
    rolle: 'Assistentin der Geschäftsleitung',
    bild: '/images/team/atelier-aa-ricarda-tscharner.jpg',
    kurz: 'Unterstützt die Geschäftsleitung in administrativen und organisatorischen Aufgaben.',
    schwerpunkte: ['Administration', 'Büroorganisation', 'Unterstützung der Geschäftsleitung'],
    absaetze: [
      'Ricarda Tscharner unterstützt die Geschäftsleitung in administrativen und organisatorischen Belangen.',
    ],
    email: null,
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
