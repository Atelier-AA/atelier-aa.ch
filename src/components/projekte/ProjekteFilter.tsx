'use client';

import { useMemo, useState } from 'react';
import ProjektGrid from './ProjektGrid';
import type { Projekt } from '@/types';
import { cn } from '@/lib/utils';

interface ProjekteFilterProps {
  projekte: Projekt[];
}

const KATEGORIEN = [
  'Alle',
  'Umbau',
  'Neubau',
  'Mieterausbau',
  'Wohnen',
  'Arbeiten',
  'Büro',
  'Gewerbe',
];

export default function ProjekteFilter({ projekte }: ProjekteFilterProps) {
  const [aktiv, setAktiv] = useState('Alle');

  const gefiltert = useMemo(() => {
    if (aktiv === 'Alle') return projekte;
    return projekte.filter((p) => p.kategorien.includes(aktiv));
  }, [projekte, aktiv]);

  return (
    <div>
      <nav
        aria-label="Projekte filtern"
        className="mb-16 flex flex-wrap gap-x-6 gap-y-3 md:mb-24"
      >
        {KATEGORIEN.map((kategorie) => (
          <button
            key={kategorie}
            type="button"
            onClick={() => setAktiv(kategorie)}
            aria-pressed={aktiv === kategorie}
            className={cn(
              'text-sm underline-offset-4 transition-colors md:text-base',
              aktiv === kategorie
                ? 'font-medium text-ink underline'
                : 'text-stone hover:text-ink'
            )}
          >
            {kategorie}
          </button>
        ))}
      </nav>

      {gefiltert.length > 0 ? (
        <ProjektGrid projekte={gefiltert} />
      ) : (
        <p className="text-graphite">
          Aktuell keine Projekte in dieser Kategorie.
        </p>
      )}
    </div>
  );
}
