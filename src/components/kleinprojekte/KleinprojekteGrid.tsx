import KleinprojektCard from './KleinprojektCard';
import Eingeblendet from '@/components/ui/Eingeblendet';
import type { Kleinprojekt } from '@/types';

interface KleinprojekteGridProps {
  projekte: Kleinprojekt[];
}

export default function KleinprojekteGrid({ projekte }: KleinprojekteGridProps) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-8 xl:gap-y-16">
      {projekte.map((projekt, idx) => (
        <Eingeblendet
          key={projekt.slug}
          className="w-full sm:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.834rem)]"
        >
          <KleinprojektCard projekt={projekt} priority={idx < 2} />
        </Eingeblendet>
      ))}
    </div>
  );
}
