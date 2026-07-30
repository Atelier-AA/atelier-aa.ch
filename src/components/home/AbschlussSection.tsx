import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Abschliessender Kontakt-Aufruf der Startseite: Statement-Satz und ein
 * einziger, klarer Weg (Kontakt aufnehmen) — bewusst ohne Bild, Skizze oder
 * zweiten Link daneben, damit die Aussage nicht verwässert wird.
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
          <div className="mt-8">
            <Button href="/kontakt" variant="primary">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
