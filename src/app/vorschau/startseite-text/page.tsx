import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata = { robots: { index: false, follow: false } };

/**
 * Vorschau D2: dieselbe Sektion wie IntroSection.tsx auf der echten
 * Startseite, mit einem zusätzlichen, konkreten Satz direkt nach der
 * Überschrift. Die bestehende Überschrift und der atmosphärische Absatz
 * bleiben erhalten — nichts wird ersetzt, nur ergänzt.
 */
export default function StartseiteTextVorschau() {
  return (
    <div className="pt-24 pb-20 md:pt-28 md:pb-28">
      <div className="mb-10 bg-ink px-6 py-3 text-center text-sm text-white">
        Vorschau D2 — ergänzter Startseiten-Text (nicht die Live-Seite)
      </div>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
            <div className="lg:col-start-1 lg:row-start-1">
              <h2 className="max-w-[18ch] text-[2rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.5rem]">
                Wir glauben an <span className="font-semibold">Architektur</span> mit
                bleibendem <span className="font-semibold">Wert.</span>
              </h2>

              {/* Neu: konkreter Satz direkt nach der Überschrift — beantwortet
                  "wer seid ihr, was macht ihr, wo" in einem Satz, für
                  Menschen wie für Suchmaschinen/KI. */}
              <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-ink">
                Atelier AA Architekten plant und realisiert Einfamilienhäuser,
                Mehrfamilienhäuser und Wohnüberbauungen sowie
                Generalplanungsmandate in Zürich, Aargau und Zug — von der
                Machbarkeitsstudie bis zur Bauleitung.
              </p>

              <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-graphite">
                Jeder Ort erzählt eine Geschichte. Jede Aufgabe trägt ihre eigene
                Identität in sich. Mit Sorgfalt, Klarheit und einem tiefen
                Verständnis für Menschen und Räume entwickeln wir Architektur, die
                mehr ist als ein Gebäude – sie schafft Lebensqualität, Orientierung
                und Zugehörigkeit. Dabei führen wir jedes Projekt durch die
                SIA-Leistungsphasen und legen Kosten so früh wie möglich offen.
              </p>
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
    </div>
  );
}
