import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { leistungen } from '@/data/startseite';

/**
 * Leistungsübersicht auf der Startseite.
 *
 * Statt eines gleichförmigen Kartenrasters eine nummerierte Liste, wie ein
 * Inhaltsverzeichnis — jede Leistung eine Zeile, die grosse Ziffer davor gibt
 * der Aufzählung Rhythmus und macht sofort klar, wie viele es sind.
 *
 * Beantwortet die Frage «was macht dieses Büro» mit ausgeschriebenen
 * Leistungsbegriffen — die Grundlage dafür, in der Suche zu den einzelnen
 * Leistungen gefunden zu werden.
 */
export default function LeistungenSection() {
  return (
    <section className="py-16 md:py-20 border-t border-mist">
      <Container>
        <div className="max-w-3xl mb-10 md:mb-16">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Leistungen</p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight">
            Von der Machbarkeitsstudie bis zur Schlüsselübergabe
          </h2>
        </div>

        <div className="border-t border-mist">
          {leistungen.map((l, idx) => (
            <div
              key={l.titel}
              className="group grid grid-cols-1 gap-3 border-b border-mist py-8 transition-colors md:grid-cols-[3.5rem_1fr_2fr] md:items-baseline md:gap-10 md:py-10"
            >
              <span className="text-sm tabular-nums text-stone md:text-base">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="text-2xl font-medium text-ink transition-colors group-hover:text-graphite md:text-3xl">
                {l.titel}
              </h3>
              <p className="text-graphite leading-relaxed">{l.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/expertise" variant="text">
            Unsere Expertise
          </Button>
        </div>
      </Container>
    </section>
  );
}
