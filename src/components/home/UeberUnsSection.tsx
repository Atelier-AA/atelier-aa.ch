import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Über uns als Zitat-Block mit Akzentlinie statt einer normalen Überschrift
 * — hebt den Satz optisch heraus. Bg-mist grenzt den Abschnitt weiterhin von
 * den weissen Nachbarn ab; ein Porträt des Gründers füllt die Fläche neben
 * dem Text.
 *
 * "Bevor wir gestalten, wollen wir verstehen." ist laut Markenhierarchie die
 * Haltungs-Aussage, die ausschliesslich hier steht (Büro-Abschnitt) — nicht
 * im Hero und nicht im Intro darüber. Der Fliesstext darunter blieb bewusst
 * weitgehend der ursprüngliche Text.
 */
export default function UeberUnsSection() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <Container>
        <p className="mb-4 text-xs uppercase tracking-widest text-stone">Büro</p>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            {/* Fester Umbruch nach dem Komma: Der Satz besteht aus Bedingung
                und Folge, und genau dort soll er brechen — nicht dort, wo die
                Zeile zufällig zu Ende ist. */}
            <h2 className="text-h2 font-normal leading-[1.15] tracking-tight text-ink md:text-h1">
              Bevor wir gestalten,{' '}
              <br />
              wollen wir <span className="font-semibold">verstehen.</span>
            </h2>
            <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-graphite">
              Jedes Projekt beginnt mit dem Zuhören. Aus den Anforderungen der Aufgabe,
              dem Charakter des Ortes und den Bedürfnissen der Nutzenden entsteht der
              Entwurf, geprüft anhand der SIA-Leistungsphasen und einer frühen
              Kostenschätzung.
            </p>
            <div className="mt-7">
              <Button href="/ueber-uns" variant="text">
                Mehr über uns
              </Button>
            </div>
          </div>
          <div className="relative aspect-[3/4] w-full max-w-sm bg-stone/10 lg:max-w-none">
            <Image
              src="/images/team/atelier-aa-alisami-aljili.jpg"
              alt="Alisami Aljili, Architekt in Zürich, Aargau und Zug, Gründer und Geschäftsführer von Atelier AA Architekten"
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
