'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Sticky-Textspalte, die beim Mauskontakt normal mitscrollt.
 *
 * `position: sticky` allein reagiert nicht auf Hover — deshalb hier ein
 * kleiner Client-Component-Zustand: Solange die Maus nicht über dem Text
 * steht, bleibt die Spalte wie gewohnt sticky (bleibt stehen, während die
 * Bilder daneben weiterlaufen). Sobald die Maus den Text berührt, wechselt
 * die Spalte auf `static` und scrollt normal mit — unabhängig davon, an
 * welcher Stelle des Texts sie gerade steht.
 */
export default function ProjektTextSpalte({ children }: { children: React.ReactNode }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        'order-1 w-full px-6 pt-[2.783rem] pb-12 md:px-10 md:pb-16 lg:order-2 lg:top-28 lg:w-2/5 lg:px-16 lg:pb-28',
        hover ? 'lg:static' : 'lg:sticky'
      )}
    >
      {children}
    </div>
  );
}
