import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Über uns als Zitat-Block mit Akzentlinie statt einer normalen Überschrift
 * — hebt den Satz optisch heraus, ohne eine neue Farbe oder ein Foto zu
 * brauchen. Bg-mist grenzt den Abschnitt weiterhin von den weissen
 * Nachbarn ab.
 */
export default function UeberUnsSection() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <Container>
        <p className="mb-4 text-xs uppercase tracking-widest text-stone">Über uns</p>
        <div className="border-l-[3px] border-ink pl-6 md:pl-8">
          {/* Wörtlich von der Über-uns-Seite. */}
          <h2 className="max-w-[20ch] text-4xl font-medium leading-[1.15] tracking-tight text-ink md:text-5xl lg:text-6xl">
            Wir gestalten Architektur mit Verantwortung — für Menschen, Orte und
            Zukunft.
          </h2>
          <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-graphite">
            Jedes Projekt beginnt mit dem Zuhören. Aus den Anforderungen der Aufgabe,
            dem Charakter des Ortes und den Bedürfnissen der Nutzenden entwickeln wir
            individuelle Lösungen mit klarer Haltung und präziser Gestaltung.
          </p>
          <div className="mt-7">
            <Button href="/ueber-uns" variant="text">
              Mehr über uns
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
