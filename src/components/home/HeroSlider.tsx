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
  {
    image: '/images/hero/slide-wuerenlingen-1.jpg',
    projekt: 'Mehrfamilienhaus',
    ort: 'Würenlingen',
    kanton: 'AG',
    href: '/referenzen/mfh-wuerenlingen',
  },
  {
    image: '/images/hero/slide-wohnzimmer-1.jpg',
    projekt: 'Mehrfamilienhaus',
    ort: 'Künten',
    kanton: 'AG',
    href: '/referenzen/mfh-kuenten',
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
            alt={`${slide.projekt}, ${ortMitKanton(slide)}, Atelier AA Architekten`}
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
          {/* Leerzeichen als eigene Textnode zwischen den beiden Blöcken:
              visuell erzwingt "block" ohnehin den Zeilenumbruch, aber ohne
              dieses Leerzeichen verschmilzt roher Text (Screenreader,
              Crawler ohne CSS-Rendering) zu "ArchitekturmitBestand". */}
          {/* Bewusst keine Subline im Hero: Die Erklärung des Hauptclaims
              steht im zweiten Startseiten-Block (IntroSection), der Hero
              selbst bleibt visuell und inhaltlich ruhig. */}
          <h1 className="text-left text-[2.1rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-[3.8rem] lg:text-[5.6rem]">
            <span className="block whitespace-nowrap">Architektur mit</span>{' '}
            <span className="block whitespace-nowrap">Bestand.</span>
          </h1>

          <div className="flex items-end justify-between gap-6 md:w-72 md:flex-col md:items-start md:gap-4">
            {/* Projekt-Bezeichnung immer auf genau einer Zeile (truncate),
                zusammen mit dem Ort darunter also fest auf zwei Zeilen. */}
            <Link href={slides[current].href} className="group block w-full min-w-0 text-white">
              <p className="truncate text-xl font-medium">{slides[current].projekt}</p>
              <p className="mt-1 truncate text-sm uppercase tracking-[0.15em] text-white/60">
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

        {/* Reserviert Platz in Höhe des Cookie-Banners (CSS-Variable, siehe
            CookieBanner.tsx), damit dieser den Titel beim ersten Besuch
            nicht überdeckt — beide sind sonst unabhängig an der
            Fensterunterkante verankert. */}
        <div
          aria-hidden="true"
          className="shrink-0 transition-[height] duration-300"
          style={{ height: 'var(--cookie-banner-h, 0px)' }}
        />
      </div>
    </section>
  );
}
