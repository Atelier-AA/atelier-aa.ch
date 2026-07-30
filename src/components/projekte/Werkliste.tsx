import Link from 'next/link';
import type { Projekt } from '@/types';

interface WerklisteProps {
  projekte: Projekt[];
}

/**
 * Dichte Text-Gesamtübersicht aller Projekte, zusätzlich zum Bilder-Raster.
 *
 * Mehr crawlbarer Fliesstext auf einer Seite — Titel, Ort, Jahr und Typ
 * jedes Projekts ausgeschrieben statt nur im Bild versteckt.
 */
export default function Werkliste({ projekte }: WerklisteProps) {
  return (
    <div className="max-w-3xl">
      <h2 className="mb-4 text-xs uppercase tracking-widest text-stone">Werkliste</h2>
      <ul className="divide-y divide-mist border-t border-mist">
        {projekte.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/referenzen/${p.slug}`}
              className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4 text-ink transition-colors hover:text-graphite"
            >
              <span className="font-medium">
                {p.title}
                <span className="ml-2 font-normal text-stone">{p.ort}</span>
              </span>
              <span className="text-sm text-stone">
                {p.typ} · {p.jahr}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
