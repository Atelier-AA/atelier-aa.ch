import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import InsightCard from '@/components/insights/InsightCard';
import { insights } from '@/data/insights';

/**
 * Die drei neuesten Fachbeiträge auf der Startseite.
 *
 * Als horizontal überlaufender Streifen statt eines starren Rasters — auf
 * dem Mobiltelefon liest sich das wie ein Magazin-Vorschau-Band, das man
 * durchwischt, statt drei Kacheln untereinander abzuscrollen.
 *
 * Zwei Gründe für den Abschnitt selbst: Besucher sehen, dass hier fachlich
 * gearbeitet wird, und die Beiträge werden von der Startseite aus verlinkt —
 * was ihre Auffindbarkeit deutlich verbessert, weil die Startseite die
 * stärkste Seite der Domain ist.
 */
export default function InsightsSection() {
  const neueste = insights.slice(0, 3);

  return (
    <section className="py-16 md:py-20 border-t border-mist">
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-stone mb-4">Insights</p>
            <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight">
              Fachbeiträge aus unserer Arbeit
            </h2>
            <p className="mt-4 text-lg text-graphite leading-relaxed">
              Verdichtung, Bewilligungsverfahren, Umbau im Alter, KI im Entwurf — wir
              schreiben über die Fragen, die uns Bauherrschaften stellen.
            </p>
          </div>
          <Button href="/insights" variant="text" className="shrink-0">
            alle Beiträge lesen
          </Button>
        </div>

        {/* Negative Rand hebt den Container-Innenabstand auf, damit der
            Streifen bis an dieselbe Kante reicht wie der Rest der Seite,
            aber innerhalb der Inhaltsbreite bleibt (kein Vollbild-Bleed). */}
        <div className="-mx-6 overflow-x-auto md:-mx-10 lg:-mx-16">
          <div className="flex gap-8 px-6 pb-2 md:px-10 lg:px-16">
            {neueste.map((i) => (
              <div key={i.slug} className="w-[80%] shrink-0 sm:w-[55%] lg:w-[calc((100%-4rem)/3)]">
                <InsightCard insight={i} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
