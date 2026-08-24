'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface ProjektBild {
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * Wenn gesetzt, wird an dieser Stelle eine kurze, stumme Kamerafahrt über
   * genau dieses Bild gezeigt statt des Fotos. Die Quellen werden erst
   * eingehängt, sobald das Element ins Blickfeld scrollt — vorher steht nur
   * das Poster-Bild da, es wird also nichts vorab geladen.
   */
  video?: { mp4: string; webm: string; poster: string };
}

interface ProjektBilderProps {
  bilder: ProjektBild[];
}

/** Ein Bild oder Video, das beim Reinscrollen sanft einblendet und leicht hochgleitet. */
function EingeblendetesBild({ src, alt, width, height, video, eager }: ProjektBild & { eager?: boolean }) {
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
        sichtbar ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
      )}
    >
      {video ? (
        <video
          className="block h-auto w-full bg-mist"
          width={width}
          height={height}
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-label={alt}
        >
          {/* Quellen erst, sobald sichtbar — vorher lädt nur das Poster-Bild. */}
          {sichtbar && <source src={video.webm} type="video/webm" />}
          {sichtbar && <source src={video.mp4} type="video/mp4" />}
        </video>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={eager}
          loading={eager ? undefined : 'lazy'}
          className="block h-auto w-full bg-mist"
          sizes="(max-width: 1100px) 100vw, 60vw"
        />
      )}
    </div>
  );
}

/**
 * Alle Bilder eines Projekts — Hauptbild, Fotos und aus PDF konvertierte
 * Pläne — als Bilderstrecke mit Abständen, alle im gleichen Format
 * (volle Breite, natürliches Seitenverhältnis). Fotos und Pläne erhalten
 * dieselbe Behandlung, keine Unterscheidung sichtbar. Jedes Bild blendet
 * beim Reinscrollen sanft ein und gleitet leicht von unten nach oben.
 *
 * `next/image` statt nativer `<img>`-Elemente (früherer Stand): Die
 * Pixelmasse werden zur Build-Zeit serverseitig gelesen (siehe
 * `lib/bildmasse.ts`) und hier nur noch verwendet — dadurch automatische
 * Grössenreduktion, AVIF/WebP und keine unsized-images-Warnung, ohne die
 * Masse pro Bild von Hand pflegen zu müssen.
 */
export default function ProjektBilder({ bilder }: ProjektBilderProps) {
  return (
    <div className="space-y-4 md:space-y-6">
      {bilder.map((bild, idx) => (
        <EingeblendetesBild key={bild.src} {...bild} eager={idx === 0} />
      ))}
    </div>
  );
}
