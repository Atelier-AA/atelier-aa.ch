import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import InsightCard from '@/components/insights/InsightCard';
import Eingeblendet from '@/components/ui/Eingeblendet';
import Button from '@/components/ui/Button';
import { insights } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Fachbeiträge von Atelier AA Architekten GmbH zu KI im Entwurf, kreislauffähigem Bauen und der Rolle des Architekten. Mit Antworten auf häufige Fragen zu Honorar, Planungsphasen und Ablauf.',
  alternates: { canonical: '/insights' },
};

export default function InsightsPage() {
  return (
    <div className="pt-32 md:pt-40">
      <Container>
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Insights</p>
          <h1 className="text-4xl font-normal leading-tight text-ink md:text-5xl lg:text-6xl">
            Gedanken zu <span className="font-semibold">Architektur</span>
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

        <div className="mt-32 border-t border-mist pt-16 pb-20 md:mt-40 md:pb-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">
              Nächster Schritt
            </p>
            <h2 className="mb-6 max-w-[18ch] text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
              Sie haben ein Vorhaben?
            </h2>
            <p className="mb-8 text-lg text-graphite leading-relaxed">
              Ob Neubau, Umbau oder eine erste Machbarkeitsfrage – wir hören zu und sagen
              Ihnen offen, was wir für sinnvoll halten.
            </p>
            <Button href="/kontakt" variant="text">
              Kontaktieren Sie uns
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
