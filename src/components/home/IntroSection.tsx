import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function IntroSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">
            Atelier AA Architekten
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight mb-6">
            Wir glauben an Architektur mit bleibendem Wert.
          </h2>
          {/* Text wörtlich von der alten Startseite (Post 15, "Starseite"). */}
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
      </Container>
    </section>
  );
}
