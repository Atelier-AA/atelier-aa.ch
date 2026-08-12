import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import TeamGrid from '@/components/ueber-uns/TeamGrid';
import OffeneStellen from '@/components/ueber-uns/OffeneStellen';
import { team } from '@/data/team';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Atelier AA Architekten GmbH in Obfelden ZH: Architekturbüro für Neubau, Umbau, Sanierung, Projektentwicklung und Generalplanung in Zürich, Aargau und Zug — mit Team.',
  alternates: { canonical: '/ueber-uns' },
};

/**
 * Firmenseite mit Team-Galerie in einem Stück statt auf zwei dünnen,
 * inhaltlich überschneidenden Seiten (Büro/Team waren zuvor getrennt) —
 * eine konsolidierte Seite ist für Suchmaschinen und KI-Crawler leichter
 * zu erfassen. /ueber-uns/team leitet per Redirect hierher.
 */
export default function UeberUnsPage() {
  return (
    <div className="pt-32 md:pt-40">
      <Container>
        {/* "Über uns" steht über beiden Spalten, auch über dem Video, statt
            nur über dem Text. */}
        <p className="text-xs uppercase tracking-widest text-stone mb-8">Über uns</p>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* H1 und Fliesstext zusammen in der linken Spalte, so hoch wie
              das Video daneben. Engere Zeilen- und Absatzabstände, damit der
              Text unten auf derselben Höhe endet. Der Team-Button steht
              direkt darunter, linksbündig mit dem Text statt unter dem
              Video. */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-ink leading-[1.1] tracking-tight mb-4">
              Wir gestalten <span className="font-semibold">Architektur</span> mit
              Verantwortung, für Menschen, Orte und{' '}
              <span className="font-semibold">Zukunft.</span>
            </h1>
            <div className="space-y-3 text-graphite leading-snug">
              <p className="text-lg text-ink">
                Atelier AA Architekten GmbH ist ein Architekturbüro mit Sitz in Obfelden
                im Kanton Zürich. Wir planen und realisieren Einfamilienhäuser,
                Mehrfamilienhäuser und Wohnüberbauungen sowie Generalplanungsmandate in
                Zürich, Aargau und Zug, von der Machbarkeitsstudie über Baugesuch und
                Ausführungsplanung bis zur Bauleitung.
              </p>
              <p>
                Zuhören heisst bei uns: ein Gespräch vor Ort führen, das Grundstück in
                seiner Umgebung verstehen, und die Fragen stellen, die sich im
                Projektverlauf sonst erst später ergeben. Erst danach beginnt der
                Entwurf, nie umgekehrt.
              </p>
              <p>
                Wir führen das Atelier AA Architekten mit dieser Haltung, mit einem
                engagierten, fachlich qualifizierten Team und zeitgemässen Werkzeugen wie
                der 3D-Planung, die unsere Prozesse unterstützen, ohne unsere
                Grundhaltung zu ersetzen.
              </p>
              <p>
                Wir verbinden Architektur, Funktion und Wirtschaftlichkeit zu
                nachhaltigen Konzepten mit langfristigem Mehrwert. Dabei denken wir
                Ressourcen, Konstruktion und Lebenszyklus von Anfang an mit. Diese
                Haltung tragen wir seit der Gründung 2021 in jedes Projekt.
              </p>
            </div>
            <div className="mt-6">
              <Button href="#team" variant="text">
                Zum Team
              </Button>
            </div>
          </div>

          {/* Team-Video statt der Baustellen-Drohnenmontage — passt inhaltlich
              besser, jetzt wo Firma und Team wieder auf einer Seite stehen. */}
          <div className="relative aspect-video w-full overflow-hidden bg-mist lg:aspect-square">
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

      {/* Team-Galerie: Geschäftsleitung (2) in der ersten Zeile, das übrige
          Team (3) darunter, beide mit lgCols=3, damit die Porträts gleich
          gross bleiben. */}
      <Container id="team" className="mt-20 scroll-mt-32 md:mt-28 md:scroll-mt-40">
        <p className="mb-10 text-xs uppercase tracking-widest text-stone">Team</p>
        <TeamGrid members={team.slice(0, 2)} lgCols={3} />
        <div className="mt-8 md:mt-10">
          <TeamGrid members={team.slice(2)} lgCols={3} />
        </div>
      </Container>

      <div className="mt-16 md:mt-20">
        <OffeneStellen />
      </div>

      {/* Trennstrich ausserhalb des Container, randvoll über die ganze
          Fensterbreite, wie auf der Startseite. */}
      <div className="mt-16 border-t border-mist pt-16 pb-20 md:mt-20 md:pb-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Nächster Schritt</p>
            <h2 className="mb-6 text-4xl font-normal leading-tight text-ink md:text-5xl">
              Sie haben ein <span className="font-semibold">Vorhaben?</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-graphite">
              Sprechen wir über Ihr Projekt, offen, konkret und unverbindlich.
            </p>
            <Button href="/kontakt" variant="text">
              Kontaktieren Sie uns
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
