'use client';

import { Fragment, useState } from 'react';
import StudieCard from './StudieCard';
import Eingeblendet from '@/components/ui/Eingeblendet';
import KontaktKachel from '@/components/projekte/KontaktKachel';
import { cn } from '@/lib/utils';
import type { Studie } from '@/types';

interface StudienGridProps {
  studien: Studie[];
}

/** Anfangs so viele Studien wie aktuell insgesamt auf /projekte stehen,
 *  statt alle auf einmal (deutlich mehr Studien als Projekte). */
const ANZAHL_ANFANGS = 22;

/** Kachelbreite, dieselbe wie bei den Studien-Kacheln. */
const KACHEL_KLASSE = 'w-full sm:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.834rem)]';

/** Wie im Projekte-Raster: alle 6 Einträge eine Kontakt-Kachel. */
const KONTAKT_INTERVALL = 6;

export default function StudienGrid({ studien }: StudienGridProps) {
  const [sichtbar, setSichtbar] = useState(ANZAHL_ANFANGS);
  const restlich = studien.length - Math.min(sichtbar, studien.length);

  return (
    <div>
      {/* Alle Studien stehen immer im HTML (nur per CSS-Klasse `hidden`
          ausgeblendet, nicht bedingt gerendert), damit Suchmaschinen/KI-
          Crawler alle Studienseiten weiterhin verlinkt finden. */}
      <div className="flex flex-wrap gap-x-5 gap-y-8 xl:gap-y-16">
        {studien.map((studie, idx) => {
          const ausgeblendet = idx >= sichtbar;
          const nachDieserStudie =
            (idx + 1) % KONTAKT_INTERVALL === 0 && idx + 1 < studien.length;

          return (
            <Fragment key={studie.slug}>
              <Eingeblendet className={cn(KACHEL_KLASSE, ausgeblendet && 'hidden')}>
                <StudieCard studie={studie} priority={idx < 2} />
              </Eingeblendet>
              {nachDieserStudie && (
                <Eingeblendet className={cn(KACHEL_KLASSE, ausgeblendet && 'hidden')}>
                  <KontaktKachel variante={Math.floor((idx + 1) / KONTAKT_INTERVALL) - 1} />
                </Eingeblendet>
              )}
            </Fragment>
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
