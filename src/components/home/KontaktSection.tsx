import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { firma } from '@/data/firma';

/** Abschliessender Aufruf zur Kontaktaufnahme auf der Startseite. */
export default function KontaktSection() {
  return (
    <section className="py-20 md:py-28 border-t border-mist">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Kontakt</p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight">
            Der erste Schritt ist ein Gespräch.
          </h2>
          <p className="mt-8 text-lg text-graphite leading-relaxed">
            Ob Neubau, Umbau oder eine erste Frage zur Machbarkeit — wir hören zu und
            sagen Ihnen offen, was wir für sinnvoll halten. Das Erstgespräch ist
            kostenlos.
          </p>

          <div className="mt-10 flex flex-col gap-2 text-lg text-ink">
            <a
              href={`tel:${firma.telefonHref}`}
              className="w-fit transition-colors hover:text-graphite"
            >
              {firma.telefon}
            </a>
            <a
              href={`mailto:${firma.email}`}
              className="w-fit transition-colors hover:text-graphite"
            >
              {firma.email}
            </a>
          </div>

          <div className="mt-12">
            <Button href="/kontakt" variant="text">
              Kontaktformular
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
