import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MehrLesen from '@/components/ui/MehrLesen';

/**
 * Manifest-Satz mit Gewichts-Kontrast innerhalb derselben Zeile: die
 * tragenden Schlüsselwörter fett, der Rest der Zeile normal — nicht
 * umgekehrt. Daneben ein Bild eines Referenzprojekts statt einer Kennzahl
 * (Gründungsjahr): für Besucher ist das der relevantere Einstiegspunkt.
 *
 * Der Button steht bewusst in einer eigenen Grid-Zeile unterhalb von
 * Überschrift und Fliesstext (nur in der Textspalte) — so richtet sich das
 * Bild rechts nur an der Höhe von Überschrift und Text aus, nicht zusätzlich
 * an der Höhe des Buttons.
 */
export default function IntroSection() {
  return (
    <section className="py-20 md:py-28">
      <Container maxWidth="max-w-[1900px]">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
          {/* Text wörtlich von der alten Startseite (Post 15, "Starseite"). */}
          <div className="lg:col-start-1 lg:row-start-1">
            <h2 className="max-w-[18ch] text-[2rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.5rem]">
              Wir glauben an <span className="font-semibold">Architektur</span> mit
              bleibendem <span className="font-semibold">Wert.</span>
            </h2>
            {/* Zwei konkrete Sätze direkt nach der Überschrift: Wer wir sind, was
                wir bauen, wo — für Menschen wie für Suchmaschinen/KI-Systeme
                eindeutig als Leistungskatalog erkennbar, bevor der
                atmosphärische Absatz folgt. */}
            <p className="mt-8 max-w-[48ch] text-lg leading-relaxed text-ink">
              Atelier AA Architekten ist ein Architekturbüro mit Sitz in Obfelden im
              Kanton Zürich. Wir planen und realisieren Einfamilienhäuser,
              Mehrfamilienhäuser und Wohnüberbauungen ebenso wie Umbauten und
              Sanierungen im Bestand — als Architekten oder im Generalplaner-Mandat.
            </p>
            <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-ink">
              Von der ersten Machbarkeitsstudie über Baugesuch und
              Ausführungsplanung bis zur Bauleitung begleiten wir jedes Projekt
              durch alle SIA-Leistungsphasen, mit Schwerpunkt in den Kantonen
              Zürich, Aargau und Zug.
            </p>
            <MehrLesen className="mt-6 max-w-[42ch]">
              <p className="text-lg leading-relaxed text-graphite">
                Jeder Ort erzählt eine Geschichte. Jede Aufgabe trägt ihre eigene Identität in
                sich. Mit Sorgfalt, Klarheit und einem tiefen Verständnis für Menschen und
                Räume entwickeln wir Architektur, die mehr ist als ein Gebäude – sie schafft
                Lebensqualität, Orientierung und Zugehörigkeit. Wie das konkret aussieht,
                zeigen unsere realisierten Projekte.
              </p>
            </MehrLesen>
          </div>

          <div className="relative min-h-[16rem] w-full bg-mist lg:col-start-2 lg:row-start-1 lg:min-h-0">
            <Image
              src="/images/projekte/efh-jonen/16.jpg"
              alt="Treppe mit Lichtband, Einfamilienhaus Jonen"
              fill
              className="object-cover"
              sizes="(max-width: 1100px) 100vw, 50vw"
            />
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <Button href="/projekte" variant="text">
              alle Projekte ansehen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
