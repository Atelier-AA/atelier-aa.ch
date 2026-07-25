import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektCard from '@/components/projekte/ProjektCard';
import { getFeaturedProjekte } from '@/data/projekte';

/** Drei ausgewählte Referenzprojekte auf der Startseite. */
export default function ReferenzenSection() {
  const projekte = getFeaturedProjekte().slice(0, 3);

  return (
    <section className="py-20 md:py-28 border-t border-mist">
      <Container>
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Referenzen</p>
          <h2 className="text-3xl md:text-4xl font-light text-ink leading-tight">
            Ausgewählte Projekte
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projekte.map((p) => (
            <ProjektCard key={p.slug} projekt={p} />
          ))}
        </div>

        <div className="mt-16">
          <Button href="/projekte" variant="text">
            alle Projekte ansehen
          </Button>
        </div>
      </Container>
    </section>
  );
}
