'use client';

import { useState } from 'react';
import Arrow from './Arrow';
import { cn } from '@/lib/utils';

/**
 * Versteckt zusätzlichen Text hinter "mehr lesen", ohne ihn aus dem HTML zu
 * entfernen, nur per CSS-Klasse ausgeblendet (nicht bedingt gerendert),
 * damit Suchmaschinen und KI-Crawler den vollständigen Text weiterhin sehen.
 *
 * Farbe und Grösse wie die kleinen Eyebrow-Titel ("Über uns",
 * "Referenzen" usw.: text-xs uppercase tracking-widest text-stone),
 * plus ein kleiner Pfeil im Stil der übrigen Buttons.
 */
export default function MehrLesen({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [offen, setOffen] = useState(false);

  return (
    <>
      <div className={cn(!offen && 'hidden', className)}>{children}</div>
      <button
        type="button"
        onClick={() => setOffen((v) => !v)}
        className="group mt-3 inline-flex items-center gap-3 text-xs uppercase tracking-widest text-stone transition-colors hover:text-ink"
      >
        {offen ? 'weniger anzeigen' : 'mehr lesen'}
        <Arrow
          className={cn(
            'h-[8px] w-[28px] shrink-0 transition-transform duration-300 ease-out',
            offen ? 'rotate-180' : 'group-hover:translate-x-[0.2em]'
          )}
        />
      </button>
    </>
  );
}
