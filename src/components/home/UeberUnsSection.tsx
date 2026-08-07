import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const eigenschaften = ['Ortskundig', 'Direkt', 'Ehrlich', 'Erfahren', 'Verbindlich'];

/**
 * Über uns als Zitat-Block mit Akzentlinie statt einer normalen Überschrift
 * — hebt den Satz optisch heraus. Bg-mist grenzt den Abschnitt weiterhin von
 * den weissen Nachbarn ab; ein Porträt des Gründers füllt die Fläche neben
 * dem Text.
 *
 * Die fünf Eigenschaften standen zunächst in einer eigenen Sektion
 * (`CharakterSection`), wirkten dort zusammen mit Ablauf und Kompetenzen
 * überladen. Jetzt eine kompakte Zeile hier statt eines eigenen Screens.
 */
export default function UeberUnsSection() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <Container>
        <p className="mb-4 text-xs uppercase tracking-widest text-stone">Über uns</p>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            {/* Wörtlich von der Über-uns-Seite; tragende Begriffe fett,
                der Rest der Zeile normal. */}
            <h2 className="max-w-[20ch] text-4xl font-normal leading-[1.15] tracking-tight text-ink md:text-5xl lg:text-6xl">
              Wir gestalten <span className="font-semibold">Architektur</span> mit
              Verantwortung — für Menschen, Orte und{' '}
              <span className="font-semibold">Zukunft.</span>
            </h2>
            <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-graphite">
              Jedes Projekt beginnt mit dem Zuhören. Aus den Anforderungen der Aufgabe,
              dem Charakter des Ortes und den Bedürfnissen der Nutzenden entwickeln wir
              individuelle Lösungen mit klarer Haltung und präziser Gestaltung — geprüft
              anhand der SIA-Leistungsphasen und einer frühen Kostenschätzung.
            </p>
            <div className="mt-7">
              <Button href="/ueber-uns" variant="text">
                Mehr über uns
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-stone/20 pt-6">
              {eigenschaften.map((wort) => (
                <span
                  key={wort}
                  className="text-sm font-semibold uppercase tracking-wide text-ink"
                >
                  {wort}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-[3/4] w-full max-w-sm bg-stone/10 lg:max-w-none">
            <Image
              src="/images/team/aljili-aljisami.jpg"
              alt="Aljili Aljisami, Gründer und Geschäftsführer von Atelier AA Architekten"
              fill
              className="object-cover"
              sizes="(max-width: 1100px) 100vw, 30vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
