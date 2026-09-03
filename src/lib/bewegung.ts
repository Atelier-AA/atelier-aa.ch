'use client';

import { useEffect, useState } from 'react';

/**
 * Gemeinsame Sichtbarkeitsprüfung.
 *
 * Vorher stand dieselbe IntersectionObserver-Logik zweimal im Code
 * (`ui/Eingeblendet.tsx` und `projekte/ProjektBilder.tsx`), mit identischem
 * Schwellwert und identischem Aufräumen. Zwei Kopien laufen bei Änderungen
 * auseinander, deshalb hier einmal.
 */

/** Wahr, sobald das Element erstmals ins Blickfeld gescrollt ist. */
export function useSichtbar<T extends Element>(
  ref: React.RefObject<T | null>,
  schwelle = 0.15,
): boolean {
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const beobachter = new IntersectionObserver(
      ([eintrag]) => {
        if (eintrag.isIntersecting) setSichtbar(true);
      },
      { threshold: schwelle },
    );
    beobachter.observe(el);
    return () => beobachter.disconnect();
  }, [ref, schwelle]);

  return sichtbar;
}
