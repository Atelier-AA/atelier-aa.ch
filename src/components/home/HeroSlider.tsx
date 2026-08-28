'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from '@/components/ui/Arrow';
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
        <div className="flex flex-col gap-20 md:gap-28">
          {/* Headline-Gruppe: allein, mit grossem Abstand nach unten zur
              Zeile mit "Entdecken"-Link und Bildunterschrift — auf
              Kundenwunsch deutlich höher positioniert statt direkt am
              unteren Rand. */}
          {/* Leerzeichen als eigene Textnode zwischen den beiden Blöcken:
              visuell erzwingt "block" ohnehin den Zeilenumbruch, aber ohne
              dieses Leerzeichen verschmilzt roher Text (Screenreader,
              Crawler ohne CSS-Rendering) zu "ArchitekturmitBestand". */}
          <div>
            <h1
              className="text-left font-bold leading-[1.1] tracking-tight text-white"
              style={{ fontSize: 'clamp(2.52rem, 1.68rem + 2.52vw, 5.32rem)' }}
            >
              Architektur mit Bestand.
            </h1>
            <p className="mt-3 text-[0.78rem] uppercase tracking-[0.15em] text-white/70 sm:text-[0.9rem]">
              Wir schaffen Orte, die bleiben
            </p>
          </div>

          {/* "Entdecken"-Link links, bündig mit Headline/Subline, und
              Bildunterschrift rechts — beide auf der ursprünglichen Höhe
              am unteren Rand, wie vor der letzten Anpassung. */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <Link
              href="/projekte"
              className="group inline-flex shrink-0 items-center gap-3 whitespace-nowrap text-xs uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Unsere Projekte entdecken
              <Arrow className="h-[8px] w-[28px] shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-[0.2em] group-focus-visible:translate-x-[0.2em]" />
            </Link>

            <Link href={slides[current].href} className="group block max-w-full min-w-0 text-white">
              <p className="truncate text-xs uppercase tracking-[0.15em] text-white/70">
                {slides[current].projekt.toUpperCase()}
                {' · '}
                {String(current + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
              </p>
            </Link>
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
