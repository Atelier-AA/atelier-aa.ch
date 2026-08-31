'use client';

import { useState } from 'react';
import { kleinprojekte } from '@/data/kleinprojekte';
import type { Kleinprojekt } from '@/types';

/**
 * Jahr als Zahl für die Sortierung.
 *
 * Die Daten enthalten neben einfachen Jahreszahlen auch Zeiträume wie
 * "2021 bis 2022" — dort zählt das Abschlussjahr, nicht der Beginn. Einträge
 * ohne verwertbare Jahreszahl wandern ans Ende, statt sich als 0 an den
 * Anfang zu setzen.
 */
function abschlussjahr(p: Kleinprojekt): number {
  const jahre = (p.jahr ?? '').match(/\d{4}/g);
  if (!jahre) return Number.POSITIVE_INFINITY;
  return Math.max(...jahre.map(Number));
}

const sortiert = [...kleinprojekte].sort((a, b) => abschlussjahr(a) - abschlussjahr(b));

/**
 * Werkliste der kleineren Aufträge, unten auf /projekte.
 *
 * Hiess früher "Kleinprojekte". Der Begriff wertete die eigene Arbeit ab und
 * traf sie nicht einmal: Dahinter stehen Umbauten von Wohn- und
 * Gewerbebauten, Anbauten, Pools und kleinere Neubauten — reale Aufträge,
 * nur kleiner im Umfang.
 *
 * Eingeklappt, damit die Liste das Bildraster darüber nicht in die Länge
 * zieht. Anders als in einer früheren Fassung steht der Auslöser aber nicht
 * als einsames Plus am rechten Rand: Er sitzt beim Titel, ist beschriftet
 * und nennt die Anzahl — man weiss also, was einen erwartet, bevor man
 * klickt.
 *
 * Die Fotos bleiben bewusst aussen vor, siehe die Begründung in
 * `KleinprojektCard` zur Bilder-Sitemap.
 */
export default function Werkliste() {
  const [offen, setOffen] = useState(false);

  return (
    <div
      id="werkliste"
      className="scroll-mt-32 border-t border-stone/30 bg-mist px-6 py-12 md:px-10 md:py-16"
    >
      <h2 className="text-h2 text-ink">Werkliste</h2>
      <p className="mt-4 max-w-lesbar leading-relaxed text-graphite">
        Umbauten, Anbauten und kleinere Neubauten, die wir neben den grösseren
        Projekten ausgeführt haben.
      </p>

      <button
        type="button"
        onClick={() => setOffen(!offen)}
        aria-expanded={offen}
        aria-controls="werkliste-eintraege"
        className="group mt-8 flex items-center gap-3 rounded-sm text-sm uppercase tracking-widest text-ink transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <span
          aria-hidden="true"
          className="relative block h-3 w-3 shrink-0"
        >
          <span className="absolute top-1/2 left-0 block h-px w-3 bg-current" />
          <span
            className={`absolute top-1/2 left-0 block h-px w-3 bg-current transition-transform duration-300 ease-out ${
              offen ? 'rotate-0' : 'rotate-90'
            }`}
          />
        </span>
        {offen ? 'Werkliste schliessen' : `Werkliste ansehen (${sortiert.length})`}
      </button>

      {offen && (
        <ul id="werkliste-eintraege" className="mt-10 border-t border-stone/25">
          {sortiert.map((p) => (
            <li
              key={p.slug}
              className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b border-stone/25 py-4 sm:grid-cols-[1fr_1fr_auto]"
            >
              <span className="font-medium text-ink">
                {p.strasse ? `${p.ort}, ${p.strasse}` : p.ort}
              </span>
              <span className="col-span-2 text-karte text-graphite sm:col-span-1 sm:col-start-2">
                {p.gebaeudetyp}
              </span>
              <span className="col-start-2 row-start-1 text-karte tabular-nums text-stone sm:col-start-3">
                {p.jahr ?? '—'}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
