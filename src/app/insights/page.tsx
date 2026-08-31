import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import InsightCard from '@/components/insights/InsightCard';
import Eingeblendet from '@/components/ui/Eingeblendet';
import VorhabenCta from '@/components/ui/VorhabenCta';
import { insights } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Fachbeiträge von Atelier AA Architekten zu KI im Entwurf, kreislauffähigem Bauen und der Rolle des Architekten.',
  alternates: { canonical: '/insights' },
};

export default function InsightsPage() {
  return (
    <div className="pt-32 md:pt-40">
      <Container>
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Journal</p>
          <h1 className="text-h2 font-normal leading-tight text-ink md:text-h1">
            Gedanken zu <span className="font-semibold">Architektur</span>{' '}
            <br />
            und <span className="font-semibold">Planung</span>
          </h1>
          <p className="mt-10 text-lg md:text-xl text-graphite leading-relaxed">
            Wie verändert sich unser Beruf, wenn Werkzeuge mehr können? Was heisst
            Nachhaltigkeit jenseits von Zertifikaten? Wir schreiben über Fragen, die
            uns in der täglichen Arbeit begegnen.
          </p>
        </div>

        {/* Gleiche Kartengrösse wie auf der Startseite: vier statt drei
            Spalten, damit die Bilder identisch klein erscheinen. */}
        <div className="flex flex-wrap gap-x-5 gap-y-8 xl:gap-y-16">
          {insights.map((insight, idx) => (
            <Eingeblendet
              key={insight.slug}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]"
            >
              <InsightCard insight={insight} priority={idx < 2} />
            </Eingeblendet>
          ))}
        </div>
      </Container>

      <div className="mt-32 md:mt-40">
        <VorhabenCta variante="journal" />
      </div>
    </div>
  );
}
