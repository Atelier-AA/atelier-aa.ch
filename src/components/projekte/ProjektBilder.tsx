import type { ProjektPlan } from '@/types';
import { cn } from '@/lib/utils';

interface ProjektBilderProps {
  heroImage: string;
  galerie: string[];
  plaene?: ProjektPlan[];
  projektTitel: string;
}

/**
 * Aus dem PDF-Pfad den Pfad des dazu konvertierten Vorschaubilds ableiten:
 * `/dokumente/projekte/<slug>/<name>.pdf` → `/images/projekte/<slug>/plaene/<name>.jpg`.
 */
function planBild(datei: string): string {
  return datei
    .replace('/dokumente/projekte/', '/images/projekte/')
    .replace(/\/([^/]+)\.pdf$/, '/plaene/$1.jpg');
}

/**
 * Wiederkehrendes Zeilenmuster für Abwechslung in der Bilderstrecke:
 * ein grosses Einzelbild, ein gleichmässiges Paar, ein Einzelbild, ein
 * ungleiches Paar — dann von vorn. Fotos und Pläne durchlaufen dasselbe
 * Muster, keine Sonderbehandlung für Pläne.
 */
const MUSTER = ['voll', 'paar', 'voll', 'paar-versetzt'] as const;
type ZeilenTyp = (typeof MUSTER)[number];

function baueZeilen(bilder: string[]) {
  const zeilen: { typ: ZeilenTyp; bilder: string[] }[] = [];
  let i = 0;
  let m = 0;
  while (i < bilder.length) {
    const typ = MUSTER[m % MUSTER.length];
    const anzahl = typ === 'voll' ? 1 : 2;
    zeilen.push({ typ, bilder: bilder.slice(i, i + anzahl) });
    i += anzahl;
    m += 1;
  }
  return zeilen;
}

/**
 * Alle Bilder eines Projekts — Hauptbild, Fotos und aus PDF konvertierte
 * Pläne — als eine Bilderstrecke mit Abständen und wechselnden Formaten.
 * Fotos und Pläne erhalten dieselbe Behandlung, keine Unterscheidung
 * sichtbar.
 */
export default function ProjektBilder({
  heroImage,
  galerie,
  plaene,
  projektTitel,
}: ProjektBilderProps) {
  const bilder = [heroImage, ...galerie, ...(plaene ?? []).map((p) => planBild(p.datei))];
  const zeilen = baueZeilen(bilder);
  let index = 0;

  return (
    <div className="space-y-4 md:space-y-6">
      {zeilen.map((zeile, zeilenIdx) => {
        if (zeile.typ === 'voll') {
          const bild = zeile.bilder[0];
          const nr = index++;
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={bild}
              src={bild}
              alt={`${projektTitel} – Ansicht ${nr + 1}`}
              loading={nr === 0 ? 'eager' : 'lazy'}
              className="block h-auto w-full bg-mist"
            />
          );
        }

        const versetzt = zeile.typ === 'paar-versetzt';
        return (
          <div
            key={zeilenIdx}
            className={cn(
              'grid grid-cols-2 gap-4 md:gap-6',
              versetzt && 'grid-cols-[3fr_2fr]'
            )}
          >
            {zeile.bilder.map((bild, i) => {
              const nr = index++;
              return (
                <div
                  key={bild}
                  className={cn(
                    'relative overflow-hidden bg-mist',
                    versetzt && i === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={bild}
                    alt={`${projektTitel} – Ansicht ${nr + 1}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
