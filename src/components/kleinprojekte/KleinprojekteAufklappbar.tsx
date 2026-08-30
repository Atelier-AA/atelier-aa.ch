'use client';

import { useState } from 'react';
import KleinprojekteGrid from './KleinprojekteGrid';
import type { Kleinprojekt } from '@/types';

interface Props {
  projekte: Kleinprojekt[];
}

/**
 * Kleinprojekte unten auf /projekte, standardmässig eingeklappt.
 *
 * Offen dargestellt hing dort eine lange Textliste unter dem Bildraster und
 * zog die Seite in die Länge, ohne etwas zu zeigen. Als Zeile mit Anzahl
 * bleibt sie eine Fussnote — wer sie sucht, findet sie; wer nicht, scrollt
 * daran vorbei.
 *
 * Bewusst `useState` statt `<details>`: So lässt sich der Zustand mit
 * denselben Übergängen wie im übrigen Seitenbild gestalten, und die
 * Beschriftung kann sich mitändern.
 */
export default function KleinprojekteAufklappbar({ projekte }: Props) {
  const [offen, setOffen] = useState(false);

  return (
    <div id="kleinprojekte" className="scroll-mt-32 border-t border-mist pt-8">
      <button
        type="button"
        onClick={() => setOffen(!offen)}
        aria-expanded={offen}
        aria-controls="kleinprojekte-liste"
        className="group flex w-full items-baseline justify-between gap-6 rounded-sm py-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <span className="text-h2 text-ink">
          Kleinprojekte{' '}
          <span className="text-stone">({projekte.length})</span>
        </span>
        <span
          aria-hidden="true"
          className="relative mt-2 block h-3 w-3 shrink-0 text-stone transition-colors group-hover:text-ink"
        >
          <span className="absolute top-1/2 left-0 block h-px w-3 bg-current" />
          <span
            className={`absolute top-1/2 left-0 block h-px w-3 bg-current transition-transform duration-300 ease-out ${
              offen ? 'rotate-0' : 'rotate-90'
            }`}
          />
        </span>
      </button>

      <p className="mt-2 max-w-lesbar text-karte leading-relaxed text-graphite">
        Umbauten, Anbauten und kleinere Aufträge neben den grösseren Projekten.
      </p>

      {offen && (
        <div id="kleinprojekte-liste" className="mt-8">
          <KleinprojekteGrid projekte={projekte} />
        </div>
      )}
    </div>
  );
}
