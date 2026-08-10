import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata = { robots: { index: false, follow: false } };

/**
 * Vorschau D3, Teil 1: "Über uns" als reine Firmenseite — Haltung, was
 * konkret gebaut wird, Region. Die Team-Galerie zieht in eine eigene Seite
 * (siehe /vorschau/ueber-uns-team), damit diese Seite nicht überladen wirkt,
 * wenn der Text konkreter/länger wird.
 */
export default function UeberUnsFirmaVorschau() {
  return (
    <div className="pt-24 pb-20 md:pt-28 md:pb-28">
      <Container>
        <div className="mb-10 bg-ink px-6 py-3 text-center text-sm text-white">
          Vorschau D3 (1/2) — Über uns als Firmenseite, Team getrennt (nicht die Live-Seite)
        </div>

        <div className="max-w-2xl">
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
      </Container>
    </div>
  );
}
