import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { leistungsangebot } from '@/data/expertise';

/** Nur der erste Satz eines Leistungstexts — als kurzer Teaser auf der Startseite. */
function ersterSatz(text: string) {
  const ende = text.indexOf('. ');
  return ende === -1 ? text : text.slice(0, ende + 1);
}

/**
 * Kompetenzen als knappe, zweispaltige Übersicht statt der ausführlichen,
 * nummerierten Liste — Details und vollständige Texte stehen auf /leistungen.
 */
export default function LeistungenSection() {
  return (
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-3 text-xs uppercase tracking-widest text-stone">Kompetenzen</p>
          <h2 className="text-2xl font-medium leading-tight text-ink md:text-3xl">
            Wofür Sie uns beauftragen können
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {leistungsangebot.map((l) => (
            <div key={l.titel}>
              <h3 className="text-lg font-medium text-ink md:text-xl">{l.titel}</h3>
              <p className="mt-2 text-graphite leading-relaxed">{ersterSatz(l.text)}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-right md:mt-16">
          <Button href="/leistungen" variant="text">
            alle Leistungen ansehen
          </Button>
        </div>
      </Container>
    </section>
  );
}
