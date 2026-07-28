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
// mit allen verfügbaren Projektfotos ausgewählt.
const slides: Slide[] = [
  {
    image: '/images/hero/slide-untersiggenthal-1.jpg',
    projekt: 'MFH Untersiggenthal',
    ort: 'Untersiggenthal',
    kanton: 'AG',
    href: '/referenzen/mfh-untersiggenthal',
  },
  {
    image: '/images/hero/slide-untersiggenthal2-1.jpg',
    projekt: 'Wohnüberbauung Untersiggenthal',
    ort: 'Untersiggenthal',
    kanton: 'AG',
    href: '/referenzen/mfh-untersiggenthal-2',
  },
  {
    image: '/images/hero/slide-kuenten-1.jpg',
    projekt: 'Mehrfamilienhaus Künten',
    ort: 'Künten',
    kanton: 'AG',
    href: '/referenzen/mfh-kuenten',
  },
  {
    image: '/images/hero/slide-hochwarting-1.jpg',
    projekt: 'Mehrfamilienhaus Hochwarting',
    ort: 'Glashütten',
    kanton: 'AG',
    href: '/referenzen/mfh-hochwarting',
  },
  {
    image: '/images/hero/slide-hochwarting-2.jpg',
    projekt: 'Mehrfamilienhaus Hochwarting',
    ort: 'Glashütten',
    kanton: 'AG',
    href: '/referenzen/mfh-hochwarting',
  },
  {
    image: '/images/hero/slide-wuerenlingen-1.jpg',
    projekt: 'MFH Würenlingen',
    ort: 'Würenlingen',
    kanton: 'AG',
    href: '/referenzen/mfh-wuerenlingen',
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
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>
      ))}

      <div className="absolute bottom-10 md:bottom-16 left-0 right-0 z-10">
        <div className="mx-auto w-full max-w-content px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <Link href={slides[current].href} className="text-white group">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
                {slides[current].projekt}
                {/* Ort mit Kantonskürzel, uppercase und gesperrt wie
                    `.referenzen__ort` im alten Theme. */}
                <span className="block text-base md:text-lg mt-2 uppercase tracking-[0.1em] opacity-80">
                  {ortMitKanton(slides[current])}
                </span>
              </h1>
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
