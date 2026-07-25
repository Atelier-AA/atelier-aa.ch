import ProjektCard from './ProjektCard';
import type { Projekt } from '@/types';

interface ProjektGridProps {
  projekte: Projekt[];
}

export default function ProjektGrid({ projekte }: ProjektGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
      {projekte.map((projekt, idx) => (
        <ProjektCard key={projekt.slug} projekt={projekt} priority={idx < 2} />
      ))}
    </div>
  );
}
