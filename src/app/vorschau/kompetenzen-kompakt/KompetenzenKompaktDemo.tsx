'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { kompetenzen } from '@/data/expertise';
import { getProjekt } from '@/data/projekte';
import { ortMitKanton } from '@/lib/utils';
import type { Projekt } from '@/types';

const AUSWAHL = ['mfh-sihlaurain', 'defh-safenwil', 'efh-jonen', 'mfh-letten'];

/** Ab dieser Anzahl werden die restlichen Punkte hinter "weitere anzeigen"
 *  versteckt. Alle fünf stehen aber immer im HTML — nur optisch verborgen
 *  (per CSS-Klasse, nicht per bedingtem Rendering), damit Suchmaschinen und
 *  KI-Crawler, die die rohe Seite lesen, den vollen Text weiterhin sehen. */
const SICHTBAR_OHNE_KLICK = 3;

function ReferenzBild({ projekt, priority }: { projekt: Projekt; priority: boolean }) {
  return (
    <Link
      href={`/referenzen/${projekt.slug}`}
      className="group block min-w-0"
      aria-label={`Zum Projekt ${projekt.title} in ${ortMitKanton(projekt)}`}
    >
      <div className="relative h-60 overflow-hidden bg-mist">
        <Image
          src={projekt.thumbnail}
          alt={`${projekt.title}, ${ortMitKanton(projekt)}`}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 1100px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="truncate text-lg font-medium leading-tight text-white">
            {projekt.title}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/70">
            {ortMitKanton(projekt)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function KompetenzenKompaktDemo() {
  const [alleSichtbar, setAlleSichtbar] = useState(false);
  const projekte = AUSWAHL.map((slug) => getProjekt(slug)).filter((p) => p !== undefined);

  return (
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <p className="mb-3 text-xs uppercase tracking-widest text-stone">
          Kompetenzen &amp; Projekte
        </p>

        <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-[1fr_1px_1fr]">
          <div className="lg:col-start-1 lg:row-start-1">
            <h2 className="mb-12 text-[2rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.5rem]">
              Fünf <span className="font-semibold">Kompetenzen</span>, sichtbar in echten{' '}
              <span className="font-semibold">Projekten.</span>
            </h2>
            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {kompetenzen.map((k, idx) => (
                <details
                  key={k.titel}
                  className={
                    idx >= SICHTBAR_OHNE_KLICK && !alleSichtbar
                      ? 'group hidden border-b border-mist py-4'
                      : 'group border-b border-mist py-4'
                  }
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base font-medium text-ink transition-colors group-hover:text-graphite">
                      {k.titel}
                    </h3>
                    <span aria-hidden="true" className="relative block h-3 w-3 shrink-0 text-stone">
                      <span className="absolute top-1/2 left-0 block h-px w-3 bg-current" />
                      <span className="absolute top-1/2 left-0 block h-px w-3 rotate-90 bg-current transition-transform duration-300 ease-out group-open:rotate-0" />
                    </span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm text-graphite leading-relaxed">{k.text}</p>
                </details>
              ))}
            </div>

            {!alleSichtbar && kompetenzen.length > SICHTBAR_OHNE_KLICK && (
              <button
                type="button"
                onClick={() => setAlleSichtbar(true)}
                className="mt-4 text-sm font-medium text-stone underline decoration-mist underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
              >
                {kompetenzen.length - SICHTBAR_OHNE_KLICK} weitere anzeigen
              </button>
            )}
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <Button href="/leistungen" variant="text">
              alle Kompetenzen ansehen
            </Button>
          </div>

          <div
            className="hidden bg-mist lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:block"
            aria-hidden="true"
          />

          <div className="lg:col-start-3 lg:row-start-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {projekte.map((p, idx) => (
                <ReferenzBild key={p.slug} projekt={p} priority={idx < 2} />
              ))}
            </div>
          </div>

          <div className="lg:col-start-3 lg:row-start-2">
            <Button href="/projekte" variant="text">
              alle Projekte ansehen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
