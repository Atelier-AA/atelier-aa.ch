import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Manifest-Satz mit Gewichts-Kontrast innerhalb derselben Zeile (fett/dünn
 * gemischt, gleiche Schriftfamilie) statt eines gleichmässig gesetzten
 * Titels — dazu eine echte Kennzahl (Gründungsjahr) als grosses Gegenstück
 * zum Fliesstext, um die Fläche nicht nur mit Text zu füllen.
 */
export default function IntroSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        {/* Text wörtlich von der alten Startseite (Post 15, "Starseite"). */}
        <h2 className="max-w-[18ch] text-[2rem] font-medium leading-[1.1] tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.5rem]">
          Wir glauben an <span className="font-light text-graphite">Architektur</span> mit
          bleibendem <span className="font-light text-graphite">Wert.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 items-end gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <p className="max-w-[42ch] text-lg leading-relaxed text-graphite">
            Jeder Ort erzählt eine Geschichte. Jede Aufgabe trägt ihre eigene Identität in
            sich. Mit Sorgfalt, Klarheit und einem tiefen Verständnis für Menschen und
            Räume entwickeln wir Architektur, die mehr ist als ein Gebäude – sie schafft
            Lebensqualität, Orientierung und Zugehörigkeit.
          </p>
          <div className="text-left lg:text-right">
            <p className="text-[3rem] font-semibold leading-none tracking-tight text-ink sm:text-[4rem] lg:text-[5rem]">
              2021
            </p>
            <p className="mt-2 text-sm text-stone">gegründet in Obfelden</p>
            <div className="mt-6">
              <Button href="/projekte" variant="text">
                alle Projekte ansehen
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
