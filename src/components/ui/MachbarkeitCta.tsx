import Container from './Container';
import Button from './Button';

/**
 * Der "Machbarkeit"-CTA aus dem CTA-System: nur für die Machbarkeitsstudie-
 * und Projektentwicklungs-Seite sowie den passenden Startseitenblock.
 */
export default function MachbarkeitCta() {
  return (
    <div className="border-t border-mist pt-16 pb-20 md:pb-28">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">Machbarkeit</p>
          <h2 className="mb-6 text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Fragen Sie sich, ob auf Ihrem Grundstück mehr möglich wäre?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-graphite">
            Wir prüfen in einer Machbarkeitsstudie, was auf Ihrem Grundstück baurechtlich
            und räumlich möglich ist, mit Volumenstudie und Kostenrahmen.
          </p>
          <Button href="/leistungen/machbarkeitsstudie" variant="text">
            Machbarkeitsstudie ansehen
          </Button>
        </div>
      </Container>
    </div>
  );
}
