import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Manifest-Satz mit Gewichts-Kontrast innerhalb derselben Zeile: die
 * tragenden Schlüsselwörter fett, der Rest der Zeile normal — nicht
 * umgekehrt. Daneben ein Bild eines Referenzprojekts statt einer Kennzahl
 * (Gründungsjahr): für Besucher ist das der relevantere Einstiegspunkt.
 */
export default function IntroSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        {/* Text wörtlich von der alten Startseite (Post 15, "Starseite"). */}
        <h2 className="max-w-[18ch] text-[2rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.5rem]">
          Wir glauben an <span className="font-semibold">Architektur</span> mit
          bleibendem <span className="font-semibold">Wert.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <p className="max-w-[42ch] text-lg leading-relaxed text-graphite">
              Jeder Ort erzählt eine Geschichte. Jede Aufgabe trägt ihre eigene Identität in
              sich. Mit Sorgfalt, Klarheit und einem tiefen Verständnis für Menschen und
              Räume entwickeln wir Architektur, die mehr ist als ein Gebäude – sie schafft
              Lebensqualität, Orientierung und Zugehörigkeit.
            </p>
            <div className="mt-6">
              <Button href="/projekte" variant="text">
                alle Projekte ansehen
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full bg-mist">
            <Image
              src="/images/projekte/mfh-sihlaurain/hero.jpg"
              alt="Mehrfamilienhäuser Sihlaurain, Adliswil ZH"
              fill
              className="object-cover"
              sizes="(max-width: 1100px) 100vw, 40vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
