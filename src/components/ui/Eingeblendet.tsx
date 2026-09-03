'use client';

import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useSichtbar } from '@/lib/bewegung';

interface EingeblendetProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Blendet Kinder-Elemente sanft ein (Fade + Hochgleiten), sobald sie beim
 * Scrollen in den sichtbaren Bereich kommen. Die Beobachtung steckt in
 * `lib/bewegung.ts` und wird mit ProjektBilder geteilt.
 */
export default function Eingeblendet({ children, className }: EingeblendetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const sichtbar = useSichtbar(ref);

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
