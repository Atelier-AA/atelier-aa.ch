'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Versteckt zusätzlichen Text hinter "mehr lesen", ohne ihn aus dem HTML zu
 * entfernen, nur per CSS-Klasse ausgeblendet (nicht bedingt gerendert),
 * damit Suchmaschinen und KI-Crawler den vollständigen Text weiterhin sehen.
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
        className="mt-2 text-sm font-medium text-stone underline decoration-mist underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
      >
        {offen ? 'weniger anzeigen' : 'mehr lesen'}
      </button>
    </>
  );
}
