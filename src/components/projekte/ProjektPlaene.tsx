import Image from 'next/image';
import type { ProjektPlan } from '@/types';

interface ProjektPlaeneProps {
  plaene: ProjektPlan[];
  projektTitel: string;
}

/**
 * Aus dem PDF-Pfad den Pfad des dazu konvertierten Vorschaubilds ableiten:
 * `/dokumente/projekte/<slug>/<name>.pdf` → `/images/projekte/<slug>/plaene/<name>.jpg`.
 * Erspart, für alle vorhandenen Pläne in `data/projekte.ts` einen zweiten
 * Pfad zu pflegen — die Konvertierung folgt einer festen Namenskonvention.
 */
function planBild(datei: string): string {
  return datei
    .replace('/dokumente/projekte/', '/images/projekte/')
    .replace(/\/([^/]+)\.pdf$/, '/plaene/$1.jpg');
}

/**
 * Die Original-Pläne (Kataster, Grundrisse, Fassaden …) als Bildkacheln —
 * gleiches Raster wie die Fotogalerie, ohne Beschriftung und ohne
 * Klickverhalten, exakt wie die Fotos: nur zum Anschauen.
 */
export default function ProjektPlaene({ plaene, projektTitel }: ProjektPlaeneProps) {
  if (!plaene.length) return null;

  return (
    <div className="mt-16">
      <h2 className="mb-6 text-xs uppercase tracking-widest text-stone">Pläne</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {plaene.map((plan) => (
          <div key={plan.datei} className="relative aspect-[4/3] overflow-hidden bg-mist">
            <Image
              src={planBild(plan.datei)}
              alt={`${projektTitel} – ${plan.titel}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
