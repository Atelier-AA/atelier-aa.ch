import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata = { robots: { index: false, follow: false } };

/**
 * Vorschau D3, Teil 1 (überarbeitet nach Feedback): "Über uns" als
 * Firmenseite — jetzt mit Bild/Video statt nur Text, und mit demselben
 * "Nächster Schritt"-Abschluss wie die übrigen Seiten (Konsistenz statt
 * Sonderfall). Die Team-Galerie bleibt in der eigenen Seite
 * (/vorschau/ueber-uns-team).
 */
export default function UeberUnsFirmaVorschau() {
  return (
    <div className="pt-24 md:pt-28">
      <Container>
        <div className="mb-10 bg-ink px-6 py-3 text-center text-sm text-white">
          Vorschau D3 (1/2, überarbeitet) — Über uns als Firmenseite mit Video (nicht die Live-Seite)
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Über uns</p>
            <h1 className="mb-10 text-4xl font-normal leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
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
              <Button href="/vorschau/ueber-uns-team" variant="text">
                Unser Team ansehen
              </Button>
            </div>
          </div>

          {/* Dieselbe Drohnen-Montage wie auf /leistungen — zeigt reale,
              laufende Projekte statt eines gestellten Büro-/Teamfotos. */}
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

        <div className="mt-20 max-w-3xl border-t border-mist pt-16 pb-20 md:mt-28 md:pb-28">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">
            Nächster Schritt
          </p>
          <h2 className="mb-6 max-w-[18ch] text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
            Sie haben ein Vorhaben?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-graphite">
            Sprechen wir über Ihr Projekt — offen, konkret und unverbindlich.
          </p>
          <Button href="/kontakt" variant="text">
            Kontaktieren Sie uns
          </Button>
        </div>
      </Container>
    </div>
  );
}
