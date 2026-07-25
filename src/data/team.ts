import type { TeamMember } from '@/types';

/**
 * Team.
 *
 * Namen und Rollen aus der alten Website (Post 2). Die Texte für die
 * Personenseiten sind Beispiele und fachlich zu prüfen — sie zeigen den
 * gewünschten Aufbau: ein Einzeiler, drei bis vier Schwerpunkte und zwei bis
 * drei Absätze zu Werdegang und Haltung.
 *
 * Reihenfolge in der Datei = Reihenfolge auf der Seite.
 */
export const team: TeamMember[] = [
  {
    slug: 'aljili-aljisami',
    name: 'Aljili Aljisami',
    rolle: 'Geschäftsführer, Dipl. Architekt',
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
    slug: 'melissa-hoffmann',
    name: 'Melissa Hoffmann',
    rolle: 'Architektin',
    bild: '/images/team/melissa-hoffmann.jpg',
    kurz: 'Verantwortet Ausführungsplanung und Detailentwicklung.',
    schwerpunkte: [
      'Ausführungsplanung',
      'Detailentwicklung',
      'Materialisierung',
      'Ausschreibung und Vergabe',
    ],
    absaetze: [
      'Melissa Hoffmann begleitet Projekte von der Bewilligung bis zur Baufreigabe — die Phase, in der ein Entwurf zur Konstruktion wird. Ihre Arbeit entscheidet darüber, ob eine gestalterische Absicht am Bau ankommt oder auf dem Weg verloren geht.',
      'Ihr besonderes Interesse gilt Anschlüssen und Übergängen: wie ein Fenster in der Fassade sitzt, wie ein Balkon thermisch getrennt wird, wie zwei Materialien aufeinandertreffen. Details, die niemandem auffallen, wenn sie stimmen.',
      'In der Ausschreibung achtet sie darauf, dass die Beschriebe präzise sind. Eine unklare Position wird auf der Baustelle teuer oder falsch ausgeführt — meist beides.',
    ],
    email: null,
  },
  {
    slug: 'veronique-mayer',
    name: 'Veronique Mayer',
    rolle: 'Architektin',
    bild: '/images/team/veronique-mayer.jpg',
    kurz: 'Arbeitet an Entwurf, Wettbewerben und Machbarkeitsstudien.',
    schwerpunkte: [
      'Entwurf und Wettbewerbe',
      'Machbarkeitsstudien',
      'Nachhaltigkeit und zirkuläres Bauen',
      'Visualisierung',
    ],
    absaetze: [
      'Veronique Mayer arbeitet am Anfang der Projekte: Machbarkeitsstudien, Volumenuntersuchungen, Wettbewerbsbeiträge. Sie prüft, was auf einem Grundstück möglich ist, bevor über Gestaltung gesprochen wird.',
      'Nachhaltigkeit versteht sie als Rechenaufgabe, nicht als Haltungsfrage. Sie bringt Lebenszykluskosten und graue Energie früh in die Diskussion — dann, wenn Entscheide noch günstig zu ändern sind.',
      'Ihre Visualisierungen dienen der Klärung, nicht der Werbung: Sie zeigen Bauherrschaften, was entstehen wird, auch wenn ein anderes Bild leichter zu verkaufen wäre.',
    ],
    email: null,
  },
  {
    slug: 'sandor-azzati',
    name: 'Sandor Azzati',
    rolle: 'Architekt',
    bild: '/images/team/sandor-azzati.jpg',
    kurz: 'Führt Bauleitung und Kostenkontrolle auf der Baustelle.',
    schwerpunkte: [
      'Bauleitung',
      'Kostenkontrolle',
      'Terminplanung',
      'Umbau im bewohnten Zustand',
    ],
    absaetze: [
      'Sandor Azzati ist auf der Baustelle, wenn aus Plänen Gebäude werden. Er koordiniert Unternehmer, kontrolliert Ausführung und Kosten und vertritt dabei die Interessen der Bauherrschaft.',
      'Seine Erfahrung liegt besonders bei Umbauten im bewohnten Zustand — Sanierungen, bei denen die Mieterschaft während der Arbeiten im Haus bleibt. Das verlangt eine Etappierung, die technisch funktioniert und für die Bewohnenden erträglich bleibt.',
      'Bei Nachträgen prüft er konsequent, ob eine Leistung tatsächlich zusätzlich ist oder im Werkvertrag bereits enthalten war. Diese Arbeit ist unspektakulär und macht einen erheblichen Teil der Kostensicherheit aus.',
    ],
    email: null,
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
