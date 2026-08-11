import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Atelier AA Architekten GmbH in Obfelden ZH: Architekturbüro für Neubau, Umbau, Sanierung, Projektentwicklung und Generalplanung in Zürich, Aargau und Zug.',
  alternates: { canonical: '/ueber-uns' },
};

/**
 * Reine Firmenseite: Haltung, was konkret gebaut wird, Region. Die
 * Team-Galerie steht auf einer eigenen Seite (/ueber-uns/team), damit diese
 * Seite nicht überladen wirkt, jetzt wo der Text konkreter/länger ist.
 */
export default function UeberUnsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <Container className="mt-16 md:mt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone mb-4">
              Über uns
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-ink leading-[1.1] tracking-tight mb-10">
              Wir gestalten <span className="font-semibold">Architektur</span> mit
              Verantwortung – für Menschen, Orte und{' '}
              <span className="font-semibold">Zukunft.</span>
            </h1>
            <div className="space-y-6 text-graphite leading-relaxed">
              <p className="text-lg text-ink">
                Atelier AA Architekten GmbH ist ein Architekturbüro mit Sitz in Obfelden
                im Kanton Zürich. Wir planen und realisieren Einfamilienhäuser,
                Mehrfamilienhäuser und Wohnüberbauungen sowie Generalplanungsmandate in
                Zürich, Aargau und Zug — von der Machbarkeitsstudie über Baugesuch und
                Ausführungsplanung bis zur Bauleitung.
              </p>
              <p className="text-lg">
                Zuhören heisst bei uns: ein Gespräch vor Ort führen, das Grundstück in
                seiner Umgebung verstehen, und die Fragen stellen, die sich im
                Projektverlauf sonst erst später ergeben. Erst danach beginnt der
                Entwurf — nie umgekehrt.
              </p>
              <p>
                Wir führen das Atelier AA Architekten mit dieser Haltung — mit einem engagierten,
                fachlich qualifizierten Team und zeitgemässen Werkzeugen wie der
                3D-Planung, die unsere Prozesse unterstützen, ohne unsere Grundhaltung zu
                ersetzen.
              </p>
              <p>
                Wir verbinden Architektur, Funktion und Wirtschaftlichkeit zu
                nachhaltigen Konzepten mit langfristigem Mehrwert. Dabei denken wir
                Ressourcen, Konstruktion und Lebenszyklus von Anfang an mit. Diese
                Haltung tragen wir seit der Gründung 2021 in jedes Projekt.
              </p>
              <p className="text-lg text-ink">
                Wir entwerfen nicht für den Moment. Wir schaffen Orte mit Bestand.
              </p>
            </div>
            <div className="mt-10">
              <Button href="/ueber-uns/team" variant="text">
                Unser Team ansehen
              </Button>
            </div>
          </div>
          {/* Dieselbe Drohnen-Montage wie auf /leistungen — zeigt reale,
              laufende Projekte statt eines gestellten Büro-/Teamfotos. Das
              Teamvideo (ueber-uns-team.mp4) steht jetzt auf /ueber-uns/team,
              wo es thematisch besser passt. */}
          <div className="relative aspect-video w-full overflow-hidden bg-mist lg:aspect-[3/4]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/leistungen-projekte-montage.mp4"
              poster="/images/leistungen/montage-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            />
          </div>
        </div>
      </Container>

      <Container className="mt-16 border-t border-mist pb-20 pt-16 md:mt-28 md:pb-28">
        <p className="mb-4 text-xs uppercase tracking-widest text-stone">
          Nächster Schritt
        </p>
        <h2 className="mb-6 max-w-[18ch] text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
          Sie haben ein Vorhaben?
        </h2>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-graphite">
          Sprechen wir über Ihr Projekt — offen, konkret und unverbindlich.
        </p>
        <Button href="/kontakt" variant="text">
          Kontaktieren Sie uns
        </Button>
      </Container>
    </div>
  );
}
