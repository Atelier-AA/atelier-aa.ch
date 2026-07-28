import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { leistungen } from '@/data/startseite';

/**
 * Leistungsübersicht auf der Startseite.
 *
 * Beantwortet die Frage «was macht dieses Büro» mit ausgeschriebenen
 * Leistungsbegriffen — die Grundlage dafür, in der Suche zu den einzelnen
 * Leistungen gefunden zu werden.
 */
export default function LeistungenSection() {
  return (
    <section className="py-16 md:py-20 border-t border-mist">
      <Container>
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Leistungen</p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight">
            Von der Machbarkeitsstudie bis zur Schlüsselübergabe
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {leistungen.map((l) => (
            <div key={l.titel}>
              <h3 className="text-xl font-medium text-ink mb-2">{l.titel}</h3>
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
