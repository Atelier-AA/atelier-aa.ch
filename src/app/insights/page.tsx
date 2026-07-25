import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import InsightCard from '@/components/insights/InsightCard';
import Button from '@/components/ui/Button';
import { insights } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Fachbeiträge von Atelier AA Architekten GmbH zu KI im Entwurf, kreislauffähigem Bauen und der Rolle des Architekten. Mit Antworten auf häufige Fragen zu Honorar, Planungsphasen und Ablauf.',
};

export default function InsightsPage() {
  return (
    <div className="pt-32 md:pt-40">
      <Container>
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Insights</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-tight">
            Gedanken zu Architektur
            <br />
            und Planung
          </h1>
          <p className="mt-10 text-lg md:text-xl text-graphite leading-relaxed">
            Wie verändert sich unser Beruf, wenn Werkzeuge mehr können? Was heisst
            Nachhaltigkeit jenseits von Zertifikaten? Wir schreiben über Fragen, die
            uns in der täglichen Arbeit begegnen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {insights.map((insight, idx) => (
            <InsightCard key={insight.slug} insight={insight} priority={idx < 2} />
          ))}
        </div>

        <div className="max-w-3xl mt-32 md:mt-40 py-16 border-t border-mist">
          <h2 className="text-2xl md:text-3xl font-light text-ink mb-6">
            Sie haben ein Vorhaben?
          </h2>
          <p className="text-graphite leading-relaxed mb-8">
            Ob Neubau, Umbau oder eine erste Machbarkeitsfrage – wir hören zu und sagen
            Ihnen offen, was wir für sinnvoll halten.
          </p>
          <Button href="/kontakt" variant="text">
            Kontaktieren Sie uns
          </Button>
        </div>
      </Container>
    </div>
  );
}
