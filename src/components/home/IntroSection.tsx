import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MehrLesen from '@/components/ui/MehrLesen';

/**
 * Diese Sektion trägt die "Erklärung" der Marke (Markenhierarchie: Marke im
 * Hero → Erklärung hier → Haltung im Büro-Abschnitt weiter unten). Bewusst
 * kein zweiter, konkurrierender Claim wie vorher "Wir glauben an Architektur
 * mit bleibendem Wert." — der Satz war inhaltlich zu ähnlich zu "Architektur
 * mit Bestand." im Hero direkt darüber.
 * Daneben ein Bild eines Referenzprojekts statt einer Kennzahl
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
      <Container>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[2fr_3fr]">
          {/* Text wörtlich von der alten Startseite (Post 15, "Starseite"). */}
          <div className="lg:col-start-1 lg:row-start-1">
            <h2 className="max-w-[20ch] text-[2rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.5rem]">
              Wir gestalten Architektur aus dem{' '}
              <span className="font-semibold">Verständnis für Ort, Aufgabe</span>{' '}
              und <span className="font-semibold">Potenzial.</span>
            </h2>
            {/* Nur der erste, konkreteste Satz bleibt sichtbar; die weiteren
                zwei Absätze stehen hinter "mehr lesen" — Bildspalte kann so
                breiter werden (2fr/3fr statt 1fr/1fr). */}
            <p className="mt-8 max-w-[48ch] text-lg leading-relaxed text-ink">
              Atelier AA Architekten ist ein Architekturbüro mit Sitz in Obfelden im
              Kanton Zürich. Wir planen und realisieren Einfamilienhäuser,
              Mehrfamilienhäuser und Wohnüberbauungen ebenso wie Umbauten und
              Sanierungen im Bestand, als Architekten oder im Generalplaner-Mandat.
            </p>
            <MehrLesen className="mt-4 max-w-[48ch] space-y-4">
              <p className="text-lg leading-relaxed text-ink">
                Von der ersten Machbarkeitsstudie über Baugesuch und
                Ausführungsplanung bis zur Bauleitung begleiten wir jedes Projekt
                durch alle SIA-Leistungsphasen, mit Schwerpunkt in den Kantonen
                Zürich, Aargau und Zug.
              </p>
              <p className="max-w-[42ch] text-lg leading-relaxed text-graphite">
                Wir beginnen nicht mit einer Form, sondern mit dem Ort: mit dem, was auf dem
                Grundstück bereits steht, mit den baurechtlichen Möglichkeiten und mit dem,
                was die Nutzenden tatsächlich brauchen. Architektur entsteht für uns als
                Konsequenz aus dieser Analyse, nicht davor. Wie das konkret aussieht, zeigen
                unsere realisierten Projekte.
              </p>
            </MehrLesen>
          </div>

          {/* Feste Bildhöhe (aspect-video) statt Grid-Stretch auf die
              Zeilenhöhe — sonst zieht sich das Bild in die Länge, sobald
              "mehr lesen" den Text daneben verlängert. */}
          <div className="relative min-h-[16rem] w-full self-start bg-mist lg:col-start-2 lg:row-start-1 lg:aspect-video lg:min-h-0">
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
