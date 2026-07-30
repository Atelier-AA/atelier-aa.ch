import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Kurzer Über-uns-Text auf der Startseite — bislang war "Über uns" die
 * einzige Hauptseite ohne eigenen Startseiten-Abschnitt. Bewusst reiner
 * Text ohne Teamfotos, mit leicht getöntem Hintergrund (bg-mist) statt
 * Weiss, um sich von den umliegenden Abschnitten abzuheben.
 */
export default function UeberUnsSection() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <Container>
        <div className="max-w-[780px]">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">Über uns</p>
          {/* Wörtlich von der Über-uns-Seite. */}
          <h2 className="mb-6 text-4xl font-medium leading-tight text-ink md:text-5xl">
            Wir gestalten Architektur mit Verantwortung — für Menschen, Orte und
            Zukunft.
          </h2>
          <p className="mb-8 max-w-[46ch] text-lg leading-relaxed text-graphite">
            Jedes Projekt beginnt mit dem Zuhören. Aus den Anforderungen der Aufgabe,
            dem Charakter des Ortes und den Bedürfnissen der Nutzenden entwickeln wir
            individuelle Lösungen mit klarer Haltung und präziser Gestaltung.
          </p>
          <Button href="/ueber-uns" variant="text">
            Mehr über uns
          </Button>
        </div>
      </Container>
    </section>
  );
}
