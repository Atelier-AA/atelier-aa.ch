'use client';

import { useState } from 'react';
import Arrow from './Arrow';
import { cn } from '@/lib/utils';

/**
 * Versteckt zusätzlichen Text hinter "mehr lesen", ohne ihn aus dem HTML zu
 * entfernen, nur per CSS-Klasse ausgeblendet (nicht bedingt gerendert),
 * damit Suchmaschinen und KI-Crawler den vollständigen Text weiterhin sehen.
 *
 * Gleiches Pfeil-Muster wie `Button` (`variant="text"`), nur in der
 * kleineren Textgrösse dieser Stelle statt der grösseren Standardgrösse.
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
        className="group mt-3 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-ink transition-colors hover:text-graphite"
      >
        {offen ? 'weniger anzeigen' : 'mehr lesen'}
        <Arrow
          className={cn(
            'h-[10px] w-[34px] shrink-0 transition-transform duration-300 ease-out',
            offen ? 'rotate-180' : 'group-hover:translate-x-[0.2em]'
          )}
        />
      </button>
    </>
  );
}
