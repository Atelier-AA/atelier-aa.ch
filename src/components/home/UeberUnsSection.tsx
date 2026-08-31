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
            {/* Wortlaut aus der Fassung vor Commit 248fc4b, auf Kundenwunsch
                zurückgeholt: Er benennt die Haltung mit Verantwortung statt
                nur die Reihenfolge von Verstehen und Gestalten. Kein fester
                Umbruch — der Satz ist zu lang dafür und bräche je nach
                Fensterbreite an der falschen Stelle. */}
            <h2 className="max-w-[20ch] text-h2 font-normal leading-[1.15] tracking-tight text-ink md:text-h1">
              Wir gestalten <span className="font-semibold">Architektur</span> mit
              Verantwortung für Menschen, Orte und{' '}
              <span className="font-semibold">Zukunft.</span>
            </h2>
            <div className="mt-8 max-w-lesbar space-y-5 text-lg leading-relaxed text-graphite">
              <p>
                Jedes Projekt beginnt mit dem Zuhören. Aus den Anforderungen der Aufgabe,
                dem Charakter des Ortes und den Bedürfnissen der Nutzenden entsteht der
                Entwurf, geprüft anhand der SIA-Leistungsphasen und einer frühen
                Kostenschätzung.
              </p>
              <p>
                Atelier AA Architekten GmbH hat ihren Sitz in Obfelden im Kanton Zürich.
                Wir planen und realisieren Einfamilienhäuser, Mehrfamilienhäuser und
                Wohnüberbauungen, auf Wunsch auch im Generalplanermandat.
              </p>
              <p>
                Verantwortlich für Entwurf und Projektleitung ist Alisami Aljili, der das
                Büro gegründet hat und jedes Projekt persönlich begleitet.
              </p>
            </div>
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
