import Container from './Container';
import Button from './Button';

/**
 * Der "Allgemein"-CTA aus dem CTA-System: exakt ein Wortlaut für Startseite,
 * Büro, Journal, Studien, Leistungen und Projektübersicht, statt an jeder
 * Stelle eine eigene, leicht abweichende Formulierung.
 */
export default function VorhabenCta() {
  return (
    <div className="border-t border-mist pt-16 pb-20 md:pb-28">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">Nächster Schritt</p>
          <h2 className="mb-6 max-w-[18ch] text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
            Sie haben ein Vorhaben?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-graphite">
            Ob Neubau, Umbau oder eine erste Machbarkeitsfrage, wir hören zu, prüfen die
            Ausgangslage und sagen offen, was wir für sinnvoll halten.
          </p>
          <Button href="/kontakt" variant="text">
            Kontaktieren Sie uns
          </Button>
        </div>
      </Container>
    </div>
  );
}
