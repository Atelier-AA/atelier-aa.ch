import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Abschliessender Kontakt-Aufruf der Startseite, mit Vorschau abgestimmt:
 * Statement-Satz und zwei Wege (Kontakt aufnehmen oder weiter zu den
 * Projekten) links, eine reduzierte Architekturskizze rechts statt eines
 * Fotos — derselbe Linien-Stil, den die Leistungen-Seite bereits verwendet
 * (siehe `leistungen/PlanArt.tsx`, hier ohne die dortige Beschriftung, da
 * die Skizze hier nicht an eine einzelne Leistung gebunden ist).
 */
export default function AbschlussSection() {
  return (
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Kontakt</p>
            <h2 className="max-w-[16ch] text-[2rem] font-normal leading-[1.15] tracking-tight text-ink sm:text-[2.5rem]">
              Sprechen wir über <span className="font-semibold">Ihr Projekt.</span>
            </h2>
            <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-graphite">
              Ob erste Idee oder konkretes Vorhaben — wir hören zu und sagen Ihnen
              offen, was wir für sinnvoll halten.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
              <Button href="/kontakt" variant="primary">
                Kontakt aufnehmen
              </Button>
              <Button href="/projekte" variant="text">
                alle Projekte ansehen
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center bg-mist p-12">
            <svg
              viewBox="0 0 300 220"
              aria-hidden="true"
              className="h-auto w-full text-ink"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M90 175 L90 110 L150 75 L210 110 L210 175 Z" />
              <line x1="30" y1="185" x2="270" y2="185" opacity="0.5" />
              <path d="M180 155 L189 164 L206 143" strokeWidth={1.6} opacity="0.85" />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
