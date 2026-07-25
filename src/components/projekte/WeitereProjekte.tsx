import Container from '@/components/ui/Container';
import ProjektCard from './ProjektCard';
import type { Projekt } from '@/types';

interface WeitereProjekteProps {
  projekte: Projekt[];
}

export default function WeitereProjekte({ projekte }: WeitereProjekteProps) {
  if (projekte.length === 0) return null;

  return (
    <section className="py-20 md:py-28 border-t border-mist mt-20">
      <Container>
        <h2 className="text-xs uppercase tracking-widest text-stone mb-12">
          Weitere Projekte
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projekte.map((projekt) => (
            <ProjektCard key={projekt.slug} projekt={projekt} />
          ))}
        </div>
      </Container>
    </section>
  );
}
