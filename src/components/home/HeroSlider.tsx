'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Slide {
  image: string;
  projekt: string;
  ort: string;
  href: string;
}

const slides: Slide[] = [
  {
    image: '/images/hero/hero-kuenten.jpg',
    projekt: 'MFH Künten',
    ort: 'Künten',
    href: '/referenzen/mfh-kuenten',
  },
  {
    image: '/images/hero/hero-untersiggenthal.jpg',
    projekt: 'MFH Untersiggenthal',
    ort: 'Untersiggenthal',
    href: '/referenzen/mfh-untersiggenthal',
  },
  {
    image: '/images/hero/hero-hohwarting.png',
    projekt: 'MFH Hochwarting',
    ort: 'Baden',
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

  return (
    <section className="relative w-full h-[92vh] min-h-[560px] overflow-hidden bg-ink">
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
            alt={`${slide.projekt}, ${slide.ort}`}
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
              <p className="text-xs uppercase tracking-widest mb-3 opacity-80">
                Aktuelles Projekt
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">
                {slides[current].projekt}
                <span className="block text-lg md:text-xl mt-2 opacity-80">
                  {slides[current].ort}
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
