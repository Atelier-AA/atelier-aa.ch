import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Fünf Eigenschaften als Wort-Stapel, jede durch eine Haarlinie getrennt.
 *
 * Ergänzt UeberUnsSection um ein konkretes, unaufgeregtes Element: statt
 * abstrakter Werte fünf Wörter, die sich direkt auf eine Aussage im Text
 * links stützen — keine austauschbaren Marketing-Adjektive.
 */
const eigenschaften = ['Ortskundig', 'Direkt', 'Ehrlich', 'Erfahren', 'Verbindlich'];

export default function CharakterSection() {
  return (
    <section className="py-20 md:py-28 border-t border-mist">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Haltung</p>
            <h2 className="max-w-[18ch] text-3xl md:text-4xl font-medium leading-tight text-ink">
              Wer mit uns baut, merkt das schnell.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-graphite">
              Wir sagen, was Sache ist — auch wenn es nicht das ist, was Sie hören
              wollten. Kostenrahmen, Bewilligungschancen, Bauzeit: Wir legen die Zahlen
              so früh wie möglich offen, damit Entscheidungen auf echter Grundlage
              fallen.
            </p>
            <div className="mt-8">
              <Button href="/ueber-uns" variant="text">
                Über uns
              </Button>
            </div>
          </div>

          <div className="lg:pt-2">
            {eigenschaften.map((wort) => (
              <p
                key={wort}
                className="border-b border-mist py-5 text-3xl font-semibold leading-none tracking-tight text-ink first:border-t md:text-4xl"
              >
                {wort}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
