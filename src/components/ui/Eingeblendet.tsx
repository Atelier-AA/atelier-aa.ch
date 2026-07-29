'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface EingeblendetProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Blendet Kinder-Elemente sanft ein (Fade + Hochgleiten), sobald sie beim
 * Scrollen in den sichtbaren Bereich kommen. Gleiches Muster wie bei den
 * Bildern auf der Projektdetailseite (ProjektBilder).
 */
export default function Eingeblendet({ children, className }: EingeblendetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const beobachter = new IntersectionObserver(
      ([eintrag]) => {
        if (eintrag.isIntersecting) setSichtbar(true);
      },
      { threshold: 0.15 }
    );
    beobachter.observe(el);
    return () => beobachter.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-[800ms] ease-out motion-reduce:transition-none',
        sichtbar ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
}
