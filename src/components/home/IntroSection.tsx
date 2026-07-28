import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Asymmetrischer Split statt einer zentrierten Textspalte: die Haltung
 * grossformatig links, die erklärenden Sätze schmaler rechts, durch eine
 * feine Linie getrennt — wie ein Manifest, nicht wie ein Absatz.
 */
export default function IntroSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone mb-6">
              Atelier AA Architekten
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-ink leading-[1.05] tracking-tight">
              Wir glauben an Architektur mit bleibendem Wert.
            </h2>
          </div>

          {/* Text wörtlich von der alten Startseite (Post 15, "Starseite"). */}
          <div className="lg:border-l lg:border-mist lg:pl-16 lg:pt-2">
            <p className="text-lg text-graphite leading-relaxed mb-4">
              Jeder Ort erzählt eine Geschichte. Jede Aufgabe trägt ihre eigene Identität
              in sich. Mit Sorgfalt, Klarheit und einem tiefen Verständnis für Menschen
              und Räume entwickeln wir Architektur, die mehr ist als ein Gebäude – sie
              schafft Lebensqualität, Orientierung und Zugehörigkeit.
            </p>
            <p className="text-lg text-graphite leading-relaxed mb-8">
              Entdecken Sie Projekte, die aus Haltung entstehen und für die Zukunft
              gedacht sind.
            </p>
            <Button href="/projekte" variant="text">
              alle Projekte ansehen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
