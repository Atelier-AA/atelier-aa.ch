import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import InsightCard from '@/components/insights/InsightCard';
import { insights } from '@/data/insights';

/**
 * Die drei neuesten Fachbeiträge auf der Startseite.
 *
 * Zwei Gründe: Besucher sehen, dass hier fachlich gearbeitet wird, und die
 * Beiträge werden von der Startseite aus verlinkt — was ihre Auffindbarkeit
 * deutlich verbessert, weil die Startseite die stärkste Seite der Domain ist.
 */
export default function InsightsSection() {
  const neueste = insights.slice(0, 3);

  return (
    <section className="py-16 md:py-20 border-t border-mist">
      <Container>
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Insights</p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight">
            Fachbeiträge aus unserer Arbeit
          </h2>
          <p className="mt-4 text-lg text-graphite leading-relaxed">
            Verdichtung, Bewilligungsverfahren, Umbau im Alter, KI im Entwurf — wir
            schreiben über die Fragen, die uns Bauherrschaften stellen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {neueste.map((i) => (
            <InsightCard key={i.slug} insight={i} />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/insights" variant="text">
            alle Beiträge lesen
          </Button>
        </div>
      </Container>
    </section>
  );
}
