'use client';

import { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Ob die Textspalte gerade vom Sticky-Verhalten befreit ist. `null` ausserhalb
 * eines Providers, damit ProjektTextSpalte einen Fehler bekäme, würde sie
 * versehentlich ausserhalb von ProjektZeile verwendet.
 */
const HoverContext = createContext<boolean | null>(null);

export function useZeilenHover() {
  const value = useContext(HoverContext);
  if (value === null) {
    throw new Error('useZeilenHover muss innerhalb von ProjektZeile verwendet werden.');
  }
  return value;
}

/**
 * Umschliesst Bilderspalte und Textspalte gemeinsam als eine Hover-Zone.
 *
 * Der Hover-Zustand wird hier auf Zeilenebene erfasst (nicht nur auf der
 * Textspalte selbst) — sonst würde ein Wechsel von der Text- zur
 * Bilderspalte das Sticky-Verhalten sofort wieder aktivieren und die
 * Textspalte an ihre sticky-Position zurückspringen lassen. Solange die
 * Maus irgendwo über Bildern oder Text steht, bleibt die Textspalte
 * "entsperrt" und scrollt normal mit; erst wenn die Maus die ganze Zeile
 * verlässt, greift Sticky wieder.
 */
export default function ProjektZeile({ children }: { children: React.ReactNode }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn('flex flex-col pt-[5.4rem] md:pt-[6.3rem] lg:flex-row lg:items-start')}
    >
      <HoverContext.Provider value={hover}>{children}</HoverContext.Provider>
    </div>
  );
}
