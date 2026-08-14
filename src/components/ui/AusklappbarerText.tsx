'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface AusklappbarerTextProps {
  children: React.ReactNode;
  className?: string;
  /** Tailwind-Höhenklasse im eingeklappten Zustand, z. B. "max-h-36". */
  vorschauKlasse?: string;
}

/**
 * Kürzt langen Fliesstext auf Mobile mit einer festen Vorschauhöhe,
 * Verlaufsblende und "Mehr lesen"-Button. Ab `lg` — wo dieser Text meist
 * neben einem Bild/Video steht und dafür bemessen ist — immer vollständig
 * sichtbar, ohne Button.
 */
export default function AusklappbarerText({
  children,
  className,
  vorschauKlasse = 'max-h-36',
}: AusklappbarerTextProps) {
  const [offen, setOffen] = useState(false);

  return (
    <div>
      <div
        className={cn(
          'relative overflow-hidden lg:max-h-none lg:overflow-visible',
          !offen && vorschauKlasse,
          className
        )}
      >
        {children}
        {!offen && (
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent lg:hidden"
          />
        )}
      </div>
      <button
        type="button"
        onClick={() => setOffen((o) => !o)}
        aria-expanded={offen}
        className="mt-3 text-sm font-medium text-ink underline underline-offset-4 lg:hidden"
      >
        {offen ? 'Weniger lesen' : 'Mehr lesen'}
      </button>
    </div>
  );
}
