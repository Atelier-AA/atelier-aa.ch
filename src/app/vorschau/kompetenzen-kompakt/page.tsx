import type { Metadata } from 'next';
import KompetenzenKompaktDemo from './KompetenzenKompaktDemo';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/**
 * Vorschau: nur 3 der 5 Kompetenzen sofort sichtbar, die restlichen 2 hinter
 * «weitere anzeigen» — alle 5 stehen aber unverändert im HTML (nur per
 * CSS-Klasse `hidden`, nicht per bedingtem Rendering ausgeblendet), damit
 * Suchmaschinen und KI-Crawler den vollständigen Text weiterhin sehen.
 */
export default function VorschauKompetenzenKompakt() {
  return (
    <div className="min-h-screen">
      <div className="bg-white px-6 py-3 text-center text-sm text-ink">
        Vorschau — erst 3 Kompetenzen sichtbar, restliche 2 hinter «weitere anzeigen» (alle 5
        stehen unverändert im HTML, für Suchmaschinen/KI unverändert sichtbar)
      </div>
      <KompetenzenKompaktDemo />
    </div>
  );
}
