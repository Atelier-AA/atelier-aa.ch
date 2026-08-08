'use client';

import { useEffect, useRef, useState } from 'react';
import type { ProjektPlan } from '@/types';
import { cn } from '@/lib/utils';

interface ProjektBilderProps {
  heroImage: string;
  galerie: string[];
  plaene?: ProjektPlan[];
  projektTitel: string;
  /** Für aussagekräftige Alt-Texte (Ort in der lokalen Suche relevant). */
  ort?: string;
}

/**
 * Aus dem PDF-Pfad den Pfad des dazu konvertierten Vorschaubilds ableiten:
 * `/dokumente/projekte/<slug>/<name>.pdf` → `/images/projekte/<slug>/plaene/<name>.jpg`.
 */
function planBild(datei: string): string {
  return datei
    .replace('/dokumente/projekte/', '/images/projekte/')
    .replace(/\/([^/]+)\.pdf$/, '/plaene/$1.jpg');
}

interface BildProps {
  src: string;
  alt: string;
  eager?: boolean;
}

/** Ein Bild, das beim Reinscrollen sanft einblendet und leicht hochgleitet. */
function EingeblendetesBild({ src, alt, eager }: BildProps) {
  const ref = useRef<HTMLImageElement>(null);
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
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      className={cn(
        'block h-auto w-full bg-mist transition-[opacity,transform] duration-[800ms] ease-out motion-reduce:transition-none',
        sichtbar ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
      )}
    />
  );
}

/**
 * Alle Bilder eines Projekts — Hauptbild, Fotos und aus PDF konvertierte
 * Pläne — als Bilderstrecke mit Abständen, alle im gleichen Format
 * (volle Breite, natürliches Seitenverhältnis). Fotos und Pläne erhalten
 * dieselbe Behandlung, keine Unterscheidung sichtbar. Jedes Bild blendet
 * beim Reinscrollen sanft ein und gleitet leicht von unten nach oben.
 *
 * Bewusst mit nativen `<img>`-Elementen statt `next/image`: Die Bilder
 * stehen in ihrem natürlichen Seitenverhältnis untereinander, ohne dass
 * für jedes einzelne die genauen Pixelmasse gepflegt werden müssten.
 */
export default function ProjektBilder({
  heroImage,
  galerie,
  plaene,
  projektTitel,
  ort,
}: ProjektBilderProps) {
  const bilder = [heroImage, ...galerie, ...(plaene ?? []).map((p) => planBild(p.datei))];
  const bezeichnung = ort ? `${projektTitel}, ${ort}` : projektTitel;

  return (
    <div className="space-y-4 md:space-y-6">
      {bilder.map((bild, idx) => (
        <EingeblendetesBild
          key={bild}
          src={bild}
          alt={`${bezeichnung} – Ansicht ${idx + 1}, Atelier AA Architekten`}
          eager={idx === 0}
        />
      ))}
    </div>
  );
}
