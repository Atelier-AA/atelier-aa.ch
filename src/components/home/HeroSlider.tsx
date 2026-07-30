'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn, ortMitKanton } from '@/lib/utils';

interface Slide {
  image: string;
  projekt: string;
  ort: string;
  /** Kantonskürzel, wie auf der alten Website hinter dem Ort geführt. */
  kanton: string;
  href: string;
}

// Ausschliesslich Mehrfamilienhaus-Projekte, vom Nutzer aus einer Vorschau
// mit allen verfügbaren Projektfotos ausgewählt und in dieser Reihenfolge
// festgelegt.
const slides: Slide[] = [
  {
    image: '/images/hero/slide-hochwarting-2.jpg',
    projekt: 'Mehrfamilienhäuser',
    ort: 'Glashütten',
    kanton: 'AG',
    href: '/referenzen/mfh-hochwarting',
  },
  {
    image: '/images/hero/slide-kuenten-1.jpg',
    projekt: 'Mehrfamilienhaus',
    ort: 'Künten',
    kanton: 'AG',
    href: '/referenzen/mfh-kuenten',
  },
  {
    image: '/images/hero/slide-wuerenlingen-1.jpg',
    projekt: 'Mehrfamilienhaus',
    ort: 'Würenlingen',
    kanton: 'AG',
    href: '/referenzen/mfh-wuerenlingen',
  },
  {
    image: '/images/hero/slide-untersiggenthal-1.jpg',
    projekt: 'Mehrfamilienhaus',
    ort: 'Untersiggenthal',
    kanton: 'AG',
    href: '/referenzen/mfh-untersiggenthal',
  },
  {
    image: '/images/hero/slide-hochwarting-1.jpg',
    projekt: 'Mehrfamilienhäuser',
    ort: 'Glashütten',
    kanton: 'AG',
    href: '/referenzen/mfh-hochwarting',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Volle Bildschirmhöhe wie im alten Theme (`.fullscreen .n2-section-smartslider
  // { height: 100vh }`). `h-svh` nutzt auf Mobilgeräten die sichtbare Höhe, damit die
  // ein-/ausfahrende Browserleiste den Hero nicht abschneidet; `h-screen` bleibt
  // Fallback für Browser ohne svh-Support.
  return (
    <section className="relative w-full h-screen h-svh overflow-hidden bg-ink">
      {slides.map((slide, idx) => (
        <div
          key={slide.image}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            idx === current ? 'opacity-100' : 'opacity-0'
          )}
          aria-hidden={idx !== current}
        >
          <Image
            src={slide.image}
            alt={`${slide.projekt}, ${ortMitKanton(slide)}`}
            fill
            priority={idx === 0}
            className="object-cover opacity-[0.62]"
            sizes="100vw"
          />
        </div>
      ))}
      {/* Gradient über allen Slides statt pro Slide dupliziert — von leicht
          oben bis kräftig unten, damit Kopf- und Fusszeile immer lesbar
          bleiben, unabhängig vom jeweiligen Bild. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/15 to-ink/75" />

      <div className="relative z-10 flex h-full flex-col justify-end px-8 py-8 md:px-14 md:py-12 lg:px-20 lg:py-14">
        <div className="flex flex-col items-start justify-end gap-6 md:flex-row md:items-end md:justify-between">
          {/* Einheitliche Schriftstärke, bewusst ohne den fett/normal-Kontrast
              der Statement-Sätze weiter unten auf der Seite. */}
          <h1 className="max-w-[16ch] text-[2.75rem] font-semibold leading-[0.94] tracking-tight text-white sm:text-[4rem] lg:text-[6rem]">
            Architektur mit Bestand
          </h1>

          <div className="flex items-end justify-between gap-6 md:flex-col md:items-end md:gap-4">
            <Link href={slides[current].href} className="group text-white">
              <p className="text-xl font-medium">{slides[current].projekt}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.15em] text-white/60">
                {slides[current].ort}
              </p>
            </Link>
            <div className="flex gap-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Slide ${idx + 1} anzeigen`}
                  className={cn(
                    'h-px transition-all duration-300',
                    idx === current ? 'w-16 bg-white' : 'w-8 bg-white/40'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
