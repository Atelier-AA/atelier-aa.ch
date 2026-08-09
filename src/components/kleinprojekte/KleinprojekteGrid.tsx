import KleinprojektCard from './KleinprojektCard';
import type { Kleinprojekt } from '@/types';

interface KleinprojekteGridProps {
  projekte: Kleinprojekt[];
}

export default function KleinprojekteGrid({ projekte }: KleinprojekteGridProps) {
  return (
    <div className="max-w-3xl border-t border-mist">
      {projekte.map((projekt) => (
        <KleinprojektCard key={projekt.slug} projekt={projekt} />
      ))}
    </div>
  );
}
