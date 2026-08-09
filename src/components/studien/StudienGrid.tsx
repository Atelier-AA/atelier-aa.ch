import StudieCard from './StudieCard';
import Eingeblendet from '@/components/ui/Eingeblendet';
import type { Studie } from '@/types';

interface StudienGridProps {
  studien: Studie[];
}

export default function StudienGrid({ studien }: StudienGridProps) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-8 xl:gap-y-16">
      {studien.map((studie, idx) => (
        <Eingeblendet
          key={studie.slug}
          className="w-full sm:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.834rem)]"
        >
          <StudieCard studie={studie} priority={idx < 2} />
        </Eingeblendet>
      ))}
    </div>
  );
}
