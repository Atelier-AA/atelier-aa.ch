'use client';

import { cn } from '@/lib/utils';
import { useZeilenHover } from './ProjektZeile';

/**
 * Sticky-Textspalte, die beim Mauskontakt normal mitscrollt.
 *
 * `position: sticky` allein reagiert nicht auf Hover — deshalb hier ein
 * kleiner Client-Component-Zustand: Solange die Maus nicht über der
 * gesamten Zeile (Bilder oder Text, siehe `ProjektZeile`) steht, bleibt die
 * Spalte wie gewohnt sticky. Sobald die Maus die Zeile berührt, wechselt
 * die Spalte auf `static` und scrollt normal mit — unabhängig davon, an
 * welcher Stelle des Texts sie gerade steht. Der Hover-Zustand kommt von
 * der ganzen Zeile, nicht nur vom Text selbst: sonst würde ein Wechsel von
 * Text zu Bildern das Sticky-Verhalten sofort zurückholen und einen Sprung
 * verursachen.
 */
export default function ProjektTextSpalte({ children }: { children: React.ReactNode }) {
  const hover = useZeilenHover();

  return (
    <div
      className={cn(
        'order-1 w-full px-6 pt-[2.783rem] pb-12 md:px-10 md:pb-16 lg:order-2 lg:top-28 lg:w-2/5 lg:px-16 lg:pb-28',
        hover ? 'lg:static' : 'lg:sticky'
      )}
    >
      {children}
    </div>
  );
}
