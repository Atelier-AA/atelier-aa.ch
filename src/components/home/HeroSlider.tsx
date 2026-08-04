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
    href: '/referenzen/mfh-alte-poststrasse',
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
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}
      {/* Dezenter Verlauf am Bild-/Panel-Übergang statt einer flächigen
          Abdunkelung — das Panel selbst liefert den nötigen Kontrast für
          den Text, das Bild bleibt grösstenteils in Originalhelligkeit. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent md:bg-gradient-to-r md:from-ink/35 md:via-transparent md:to-transparent" />

      {/* Split-Panel: auf Desktop eine feste, dunkle Spalte links neben dem
          Bild; auf Mobile unten angedockt (volle Breite), wie zuvor der
          Text-Block. */}
      <div className="relative z-10 flex h-full flex-col md:flex-row">
        <div className="mt-auto w-full bg-ink/90 px-8 py-10 backdrop-blur-[2px] md:mt-0 md:flex md:w-[44%] md:max-w-[560px] md:flex-col md:justify-center md:px-14 md:py-14 lg:px-20">
          <p className="mb-4 text-xs uppercase tracking-[0.16em] text-white/60">
            {slides[current].projekt} · {ortMitKanton(slides[current])}
          </p>
          {/* Einheitliche Schriftstärke, bewusst ohne den fett/normal-Kontrast
              der Statement-Sätze weiter unten auf der Seite. */}
          <h1 className="mb-6 max-w-[16ch] text-[2.25rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-[2.75rem] lg:text-[3.25rem]">
            Architektur mit Bestand
          </h1>
          <p className="mb-8 max-w-[38ch] leading-relaxed text-white/75">
            Architektur, Umbau und Verdichtung mit Schwerpunkt Zürich, Aargau und Zug.
          </p>
          <Link
            href={slides[current].href}
            className="w-fit border-b border-white/40 pb-1 text-sm uppercase tracking-[0.08em] text-white transition-colors hover:border-white hover:text-white"
          >
            Projekt ansehen →
          </Link>

          <div className="mt-10 flex gap-3">
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
    </section>
  );
}
