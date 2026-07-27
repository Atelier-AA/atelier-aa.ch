import Arrow from '@/components/ui/Arrow';
import type { ProjektPlan } from '@/types';

interface ProjektPlaeneProps {
  plaene: ProjektPlan[];
}

/**
 * Liste der Original-Pläne (Kataster, Grundrisse, Fassaden …) als PDF-Links.
 * Öffnet in einem neuen Tab, da es sich um Dokumente statt Seiten handelt.
 */
export default function ProjektPlaene({ plaene }: ProjektPlaeneProps) {
  if (!plaene.length) return null;

  return (
    <div className="mt-16 max-w-3xl">
      <h2 className="mb-6 text-xs uppercase tracking-widest text-stone">
        Pläne
      </h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {plaene.map((plan) => (
          <li key={plan.datei}>
            <a
              href={plan.datei}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 text-ink transition-colors hover:text-graphite"
            >
              <Arrow className="h-[11px] w-[30px] shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-[0.2em]" />
              {plan.titel}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
