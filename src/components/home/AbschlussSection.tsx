import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Abschliessender Kontakt-Aufruf der Startseite: Statement-Satz und zwei
 * Wege (Kontakt aufnehmen oder weiter zu den Projekten) — bewusst ohne
 * Bild oder Skizze daneben, rein textbasiert.
 */
export default function AbschlussSection() {
  return (
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <div className="max-w-2xl">
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
      </Container>
    </section>
  );
}
