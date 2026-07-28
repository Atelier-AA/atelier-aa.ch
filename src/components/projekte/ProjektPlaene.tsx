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
 * optisch identisch zur Fotogalerie, damit kein Unterschied sichtbar ist,
 * ob eine Kachel ein Foto oder ein aus PDF konvertierter Plan ist. Ein
 * Klick öffnet weiterhin das Original-PDF in Druckqualität.
 */
export default function ProjektPlaene({ plaene, projektTitel }: ProjektPlaeneProps) {
  if (!plaene.length) return null;

  return (
    <div className="mt-16">
      <h2 className="mb-6 text-xs uppercase tracking-widest text-stone">Pläne</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {plaene.map((plan) => (
          <a
            key={plan.datei}
            href={plan.datei}
            target="_blank"
            rel="noopener"
            className="group block"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-mist">
              <Image
                src={planBild(plan.datei)}
                alt={`${projektTitel} – ${plan.titel}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-2 text-xs uppercase tracking-widest text-stone">{plan.titel}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
