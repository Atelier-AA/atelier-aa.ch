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
    image: '/images/hero/slide-treppenhaus-1.jpg',
    projekt: 'Einfamilienhaus',
    ort: 'Jonen',
    kanton: 'AG',
    href: '/referenzen/efh-jonen',
  },
  {
    image: '/images/hero/slide-fassade-1.jpg',
    projekt: 'Mehrfamilienhäuser Sihlaurain',
    ort: 'Adliswil',
    kanton: 'ZH',
    href: '/referenzen/mfh-sihlaurain',
  },
  {
    image: '/images/hero/slide-modell-1.jpg',
    projekt: 'Mehrfamilienhaus Zelgi',
    ort: 'Untersiggenthal',
    kanton: 'AG',
    href: '/referenzen/wohnueberbauung-zelgi',
  },
  // Noch offen: zu welchem Projekt gehört das Wohnzimmer-Rendering? Bis
  // geklärt bleibt es mit Platzhalter-Angabe.
  {
    image: '/images/hero/slide-wohnzimmer-1.jpg',
    projekt: 'Vorschau (Visualisierung)',
    ort: 'Projekt noch zuordnen',
    kanton: '',
    href: '/projekte',
  },
  {
    image: '/images/hero/slide-skizze-1.jpg',
    projekt: 'Vorschau (Skizze)',
    ort: 'Projekt noch zuordnen',
    kanton: '',
    href: '/projekte',
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
      {/* Gradient über allen Slides statt pro Slide dupliziert — nur unten,
          wo Titel und Bildunterschrift lesbar bleiben müssen; der Rest des
          Bilds bleibt in Originalhelligkeit statt gleichmässig abgedunkelt. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-14">
        <div className="flex flex-col items-start justify-end gap-6 md:flex-row md:items-end md:justify-between">
          {/* Links auf gleicher Höhe wie das Logo im Header (Container-Padding
              px-6/md:px-10/lg:px-16). Vorschau: normale Gross-/Kleinschreibung
              statt Versalien. */}
          <h1 className="text-left text-[1.65rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-[2.4rem] lg:text-[3.6rem]">
            <span className="block whitespace-nowrap">Verantwortungsvoll</span>
            <span className="block whitespace-nowrap">geplant, gemeinsam gebaut.</span>
          </h1>

          <div className="flex items-end justify-between gap-6 md:w-60 md:flex-col md:items-start md:gap-4">
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
