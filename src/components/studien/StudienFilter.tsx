'use client';

import { useMemo, useState } from 'react';
import StudienGrid from './StudienGrid';
import type { Studie } from '@/types';
import { cn } from '@/lib/utils';

interface StudienFilterProps {
  studien: Studie[];
}

const KATEGORIEN = [
  'Alle',
  'Machbarkeitsstudie',
  'Konzeptstudie',
  'Wettbewerbsbeitrag',
  'Bauherrenvertretung',
];

export default function StudienFilter({ studien }: StudienFilterProps) {
  const [aktiv, setAktiv] = useState('Alle');

  const vorhandeneKategorien = useMemo(
    () => KATEGORIEN.filter((k) => k === 'Alle' || studien.some((s) => s.kategorie === k)),
    [studien]
  );

  const gefiltert = useMemo(() => {
    if (aktiv === 'Alle') return studien;
    return studien.filter((s) => s.kategorie === aktiv);
  }, [studien, aktiv]);

  return (
    <div>
      <nav
        aria-label="Studien filtern"
        className="mb-16 flex flex-wrap gap-x-6 gap-y-3 md:mb-24"
      >
        {vorhandeneKategorien.map((kategorie) => (
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
        <StudienGrid studien={gefiltert} />
      ) : (
        <p className="text-graphite">Aktuell keine Studien in dieser Kategorie.</p>
      )}
    </div>
  );
}
