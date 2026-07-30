import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { leistungsangebot } from '@/data/expertise';

/**
 * Kompetenzen als knappe, zweispaltige Übersicht statt der ausführlichen,
 * nummerierten Liste — jeder Punkt lässt sich per Klick aufklappen, steht
 * aber standardmässig zugeklappt da. Details und vollständige Texte stehen
 * zusätzlich auf /leistungen.
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

        <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
          {leistungsangebot.map((l) => (
            <details key={l.titel} className="group border-b border-mist py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-medium text-ink transition-colors group-hover:text-graphite md:text-xl">
                  {l.titel}
                </h3>
                {/* Plus-Zeichen, das beim Öffnen zum Minus wird. */}
                <span
                  aria-hidden="true"
                  className="relative block h-3 w-3 shrink-0 text-stone"
                >
                  <span className="absolute top-1/2 left-0 block h-px w-3 bg-current" />
                  <span className="absolute top-1/2 left-0 block h-px w-3 rotate-90 bg-current transition-transform duration-300 ease-out group-open:rotate-0" />
                </span>
              </summary>
              <p className="mt-3 pr-8 text-graphite leading-relaxed">{l.text}</p>
            </details>
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
