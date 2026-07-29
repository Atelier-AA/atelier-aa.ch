import ProjektCard from './ProjektCard';
import Eingeblendet from '@/components/ui/Eingeblendet';
import type { Projekt } from '@/types';

interface ProjektGridProps {
  projekte: Projekt[];
}

export default function ProjektGrid({ projekte }: ProjektGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
      {projekte.map((projekt, idx) => (
        <Eingeblendet key={projekt.slug}>
          <ProjektCard projekt={projekt} priority={idx < 2} />
        </Eingeblendet>
      ))}
    </div>
  );
}
