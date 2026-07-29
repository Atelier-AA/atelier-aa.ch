import ProjektCard from './ProjektCard';
import Eingeblendet from '@/components/ui/Eingeblendet';
import type { Projekt } from '@/types';

interface ProjektGridProps {
  projekte: Projekt[];
}

export default function ProjektGrid({ projekte }: ProjektGridProps) {
  return (
    // Spaltenbreiten und Abstand 1:1 aus stage.atelier-aa.ch/projekte/
    // (.referenzen-list / .referenzen-item): eine Spalte mobil, zwei ab
    // 600px, drei ab 1280px, 1.25rem Abstand.
    <div className="flex flex-wrap gap-x-5 gap-y-8 xl:gap-y-16">
      {projekte.map((projekt, idx) => (
        <Eingeblendet
          key={projekt.slug}
          className="w-full sm:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.834rem)]"
        >
          <ProjektCard projekt={projekt} priority={idx < 2} />
        </Eingeblendet>
      ))}
    </div>
  );
}
