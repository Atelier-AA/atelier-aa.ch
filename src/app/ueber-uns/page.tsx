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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-ink leading-tight mb-10">
              Wir gestalten Architektur mit Verantwortung.
            </h1>
            <p className="text-lg text-graphite leading-relaxed mb-6">
              Atelier AA Architekten ist ein Zürcher Architekturbüro mit Sitz in
              Obfelden. Wir entwerfen und realisieren Bauten, die durch klare
              Formensprache, sorgfältige Materialisierung und einen respektvollen
              Umgang mit dem Ort überzeugen.
            </p>
            <p className="text-base text-graphite leading-relaxed">
              Unser Team vereint langjährige Erfahrung mit frischen Perspektiven.
              Wir arbeiten interdisziplinär, hören unseren Bauherrschaften genau
              zu und begleiten jedes Projekt mit Sorgfalt vom Entwurf bis zur
              Ausführung.
            </p>
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
