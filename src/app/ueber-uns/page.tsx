import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import TeamVideo from '@/components/ueber-uns/TeamVideo';
import TeamGrid from '@/components/ueber-uns/TeamGrid';
import OffeneStellen from '@/components/ueber-uns/OffeneStellen';
import { team } from '@/data/team';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Wir gestalten Architektur mit Verantwortung. Lernen Sie das Team von Atelier AA Architekten kennen.',
};

export default function UeberUnsPage() {
  return (
    <>
      <div className="pt-24 md:pt-28">
        <TeamVideo />

        <Container className="mt-16 md:mt-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-stone mb-4">
              Über uns
            </p>
            {/* Überschrift und Absätze wörtlich von der alten Seite (Post 2). */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-ink leading-tight mb-10">
              Wir gestalten Architektur mit Verantwortung – für Menschen, Orte und
              Zukunft.
            </h1>
            <div className="space-y-6 text-graphite leading-relaxed">
              <p className="text-lg">
                Jedes Projekt beginnt mit dem Zuhören. Aus den Anforderungen der
                Aufgabe, dem Charakter des Ortes und den Bedürfnissen der Nutzer
                entwickeln wir individuelle Lösungen mit klarer Haltung und präziser
                Gestaltung.
              </p>
              <p>
                Wir verbinden Architektur, Funktion und Wirtschaftlichkeit zu
                nachhaltigen Konzepten mit langfristigem Mehrwert. Dabei denken wir
                Ressourcen, Konstruktion und Lebenszyklus von Anfang an mit.
              </p>
              <p>
                Im engen Dialog mit Bauherrschaften und Planungspartnern entstehen
                Gebäude und Räume, die sich selbstverständlich in ihren Kontext
                einfügen und zugleich eine eigene Identität schaffen.
              </p>
              <p className="text-lg text-ink">
                Wir entwerfen nicht für den Moment. Wir schaffen Orte mit Bestand.
              </p>
            </div>
          </div>
        </Container>

        <Container className="mt-20 md:mt-28">
          <p className="text-xs uppercase tracking-widest text-stone mb-10">
            Team
          </p>
          <TeamGrid members={team} />
        </Container>
      </div>

      <OffeneStellen />
    </>
  );
}
