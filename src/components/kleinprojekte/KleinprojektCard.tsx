import type { Kleinprojekt } from '@/types';

interface KleinprojektCardProps {
  projekt: Kleinprojekt;
}

/**
 * Bewusst ohne Bild: reine Textzeile statt Bildkachel. Die Fotos existieren
 * weiterhin als Dateien (für Google Bilder/KI-Crawler über die
 * Bilder-Sitemap, siehe sitemap.ts), werden aber niemandem, der die Website
 * durchklickt, gezeigt. Ausserdem bewusst KEIN Link zur Detailseite — siehe
 * StudieCard.tsx für die Begründung.
 */
export default function KleinprojektCard({ projekt }: KleinprojektCardProps) {
  const titel = projekt.strasse ? `${projekt.ort}, ${projekt.strasse}` : projekt.ort;

  return (
    <div className="flex flex-col gap-1 border-b border-mist py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <p className="text-lg font-medium leading-tight text-ink">{titel}</p>
      <p className="text-karte text-stone sm:text-right">
        {projekt.gebaeudetyp}
        {projekt.jahr ? ` · ${projekt.jahr}` : ''}
      </p>
    </div>
  );
}
