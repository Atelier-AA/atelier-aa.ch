import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektCard from '@/components/projekte/ProjektCard';
import { getProjekt } from '@/data/projekte';

/**
 * Vier ausgewählte Referenzprojekte auf der Startseite, alle gleich gross
 * in einer Reihe — bewusst festgelegte Auswahl und Reihenfolge statt der
 * ersten vier `featured`-Projekte in Datenreihenfolge.
 */
const AUSWAHL = ['mfh-sihlaurain', 'defh-safenwil', 'efh-jonen', 'mfh-letten'];

export default function ReferenzenSection() {
  const projekte = AUSWAHL.map((slug) => getProjekt(slug)).filter((p) => p !== undefined);

  return (
    <section className="py-16 md:py-20 border-t border-mist">
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-stone mb-4">Projekte</p>
            <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight">
              Referenzen
            </h2>
          </div>
          <Button href="/projekte" variant="text" className="shrink-0">
            alle Projekte ansehen
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projekte.map((p, idx) => (
            <ProjektCard key={p.slug} projekt={p} priority={idx < 2} />
          ))}
        </div>
      </Container>
    </section>
  );
}
