import { kleinprojekte } from '@/data/kleinprojekte';

/**
 * Werkliste der kleineren Aufträge, unten auf /projekte.
 *
 * Hiess früher "Kleinprojekte". Der Begriff wertete die eigene Arbeit ab und
 * traf sie nicht einmal: Dahinter stehen Umbauten von Wohn- und
 * Gewerbebauten, Anbauten, Pools und kleinere Neubauten — reale Aufträge,
 * nur kleiner im Umfang.
 *
 * Bewusst offen statt eingeklappt: Eine gut gesetzte Werkliste ist selbst ein
 * Argument. Eingeklappt hing dort eine Zeile mit einem einsamen Plus, die
 * nichts zeigte und nichts versprach.
 *
 * Als Tabelle mit gleichmässigen Zeilen, wie ein Werkverzeichnis — die Fotos
 * bleiben bewusst aussen vor (siehe die Begründung in `KleinprojektCard`
 * zur Bilder-Sitemap).
 */
export default function WeitereArbeiten() {
  return (
    <div id="weitere-arbeiten" className="scroll-mt-32 bg-mist px-6 py-12 md:px-10 md:py-16">
      <p className="mb-3 text-xs uppercase tracking-widest text-stone">Werkliste</p>
      <h2 className="text-h2 text-ink">Weitere Arbeiten</h2>
      <p className="mt-4 max-w-lesbar leading-relaxed text-graphite">
        Umbauten, Anbauten und kleinere Neubauten, die wir neben den grösseren
        Projekten ausgeführt haben.
      </p>

      <ul className="mt-10 border-t border-stone/25">
        {kleinprojekte.map((p) => (
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
    </div>
  );
}
