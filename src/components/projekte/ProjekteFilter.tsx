'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
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
  'Büro',
  'Gewerbe',
];

// Führen auf eigene Seiten statt hier zu filtern — Machbarkeitsstudien,
// Wettbewerbsbeiträge und kleinere Umbauten sollen nicht in der
// Projekte-Übersicht auftauchen, sollen von hier aus aber auffindbar sein.
const EXTERNE_VERWEISE = [
  { label: 'Studien', href: '/leistungen/machbarkeitsstudie' },
  { label: 'Kleinprojekte', href: '#kleinprojekte' },
];

export default function ProjekteFilter({ projekte }: ProjekteFilterProps) {
  const [aktiv, setAktiv] = useState('Alle');

  const gefiltert = useMemo(() => {
    if (aktiv === 'Alle') return projekte;
    return projekte.filter((p) => p.kategorien.includes(aktiv));
  }, [projekte, aktiv]);

  const verweisKlasse = 'text-sm text-stone underline-offset-4 transition-colors hover:text-ink md:text-base';

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
        <span aria-hidden="true" className="mx-1 text-mist">
          |
        </span>
        {EXTERNE_VERWEISE.map((verweis) => (
          <Link key={verweis.href} href={verweis.href} className={verweisKlasse}>
            {verweis.label}
          </Link>
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
