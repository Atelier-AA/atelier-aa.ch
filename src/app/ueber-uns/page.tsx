import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import TeamGrid from '@/components/ueber-uns/TeamGrid';
import OffeneStellen from '@/components/ueber-uns/OffeneStellen';
import { team } from '@/data/team';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Das Team von Atelier AA Architekten GmbH in Obfelden ZH. Geführt von Aljili Aljisami. Wir planen Wohn- und Gewerbebauten mit Fokus auf Nachhaltigkeit und langfristigen Wert.',
};

export default function UeberUnsPage() {
  return (
    <>
      <div className="pt-24 md:pt-28">
        <Container className="mt-16 md:mt-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone mb-4">
                Über uns
              </p>
              {/* Überschrift und Absätze wörtlich von der alten Seite (Post 2);
                  tragende Begriffe fett, der Rest der Zeile normal. */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-ink leading-[1.1] tracking-tight mb-10">
                Wir gestalten <span className="font-semibold">Architektur</span> mit
                Verantwortung – für Menschen, Orte und{' '}
                <span className="font-semibold">Zukunft.</span>
              </h1>
              <div className="space-y-6 text-graphite leading-relaxed">
                <p className="text-lg">
                  Zuhören heisst bei uns: ein Gespräch vor Ort führen, das Grundstück in
                  seiner Umgebung verstehen, und die Fragen stellen, die sich im
                  Projektverlauf sonst erst später ergeben. Erst danach beginnt der
                  Entwurf — nie umgekehrt.
                </p>
                <p>
                  Wir führen das Atelier AA mit dieser Haltung — mit einem engagierten,
                  fachlich qualifizierten Team und zeitgemässen Werkzeugen wie der
                  3D-Planung, die unsere Prozesse unterstützen, ohne unsere Grundhaltung zu
                  ersetzen.
                </p>
                <p>
                  Wir verbinden Architektur, Funktion und Wirtschaftlichkeit zu
                  nachhaltigen Konzepten mit langfristigem Mehrwert. Dabei denken wir
                  Ressourcen, Konstruktion und Lebenszyklus von Anfang an mit. Im engen
                  Dialog mit Bauherrschaften und Planungspartnern entstehen Gebäude und
                  Räume, die sich selbstverständlich in ihren Kontext einfügen und
                  zugleich eine eigene Identität schaffen. Diese Haltung tragen wir seit
                  der Gründung 2021 in jedes Projekt.
                </p>
                <p className="text-lg text-ink">
                  Wir entwerfen nicht für den Moment. Wir schaffen Orte mit Bestand.
                </p>
              </div>
            </div>
            {/* Gleiches Format/Position wie die Videomontage auf /leistungen —
                hier ein Team-Video statt Projekt-Drohnenaufnahmen. */}
            <div className="relative aspect-video w-full overflow-hidden bg-mist lg:aspect-[3/4]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/videos/ueber-uns-team.mp4"
                poster="/images/team/ueber-uns-team-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              />
            </div>
          </div>
        </Container>

        <Container className="mt-20 md:mt-28">
          <p className="text-xs uppercase tracking-widest text-stone mb-10">
            Team
          </p>
          {/* Geschäftsleitung (2) in der ersten Zeile, das übrige Team (3)
              darunter. Beide Reihen mit lgCols=3, damit die Porträts gleich
              gross bleiben — die erste Reihe lässt den dritten Platz frei,
              statt die Bilder auf 2 Spalten zu vergrössern. */}
          <TeamGrid members={team.slice(0, 2)} lgCols={3} />
          <div className="mt-8 md:mt-10">
            <TeamGrid members={team.slice(2)} lgCols={3} />
          </div>
        </Container>
      </div>

      <OffeneStellen />
    </>
  );
}
