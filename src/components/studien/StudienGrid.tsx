'use client';

import { useState } from 'react';
import StudieCard from './StudieCard';
import Eingeblendet from '@/components/ui/Eingeblendet';
import { cn } from '@/lib/utils';
import type { Studie } from '@/types';

interface StudienGridProps {
  studien: Studie[];
}

/** Anfangs 21 Studien, der Rest ist über "Mehr zeigen" erreichbar statt
 *  alle auf einmal (deutlich mehr Studien als Projekte). */
const ANZAHL_ANFANGS = 21;

/** Kachelbreite, dieselbe wie bei den Studien-Kacheln. */
const KACHEL_KLASSE = 'w-full sm:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.834rem)]';

export default function StudienGrid({ studien }: StudienGridProps) {
  const [sichtbar, setSichtbar] = useState(ANZAHL_ANFANGS);
  const restlich = studien.length - Math.min(sichtbar, studien.length);

  return (
    <div>
      {/* Alle Studien stehen immer im HTML (nur per CSS-Klasse `hidden`
          ausgeblendet, nicht bedingt gerendert), damit Suchmaschinen/KI-
          Crawler alle Studienseiten weiterhin verlinkt finden. Keine
          periodisch eingestreute Kontakt-Kachel mehr: zu viele
          Conversion-Unterbrechungen zwischen den Studien. */}
      <div className="flex flex-wrap gap-x-5 gap-y-8 xl:gap-y-16">
        {studien.map((studie, idx) => {
          const ausgeblendet = idx >= sichtbar;

          return (
            <Eingeblendet
              key={studie.slug}
              className={cn(KACHEL_KLASSE, ausgeblendet && 'hidden')}
            >
              <StudieCard studie={studie} priority={idx < 2} />
            </Eingeblendet>
          );
        })}
      </div>

      {restlich > 0 && (
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={() => setSichtbar((n) => n + ANZAHL_ANFANGS)}
            className="border border-ink px-8 py-4 text-sm font-medium uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Mehr zeigen
          </button>
        </div>
      )}
    </div>
  );
}
