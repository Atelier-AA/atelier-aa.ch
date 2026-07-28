import type { ProjektPlan } from '@/types';

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
 * Alle Bilder eines Projekts — Hauptbild, Fotos und aus PDF konvertierte
 * Pläne — als eine einzige, lückenlose Bilderstrecke. Fotos und Pläne
 * erhalten dieselbe Behandlung, keine Unterscheidung sichtbar.
 *
 * Bewusst mit nativen `<img>`-Elementen statt `next/image`: Die Bilder
 * stehen in ihrem natürlichen Seitenverhältnis untereinander, ohne dass
 * für jedes einzelne die genauen Pixelmasse gepflegt werden müssten.
 */
export default function ProjektBilder({
  heroImage,
  galerie,
  plaene,
  projektTitel,
}: ProjektBilderProps) {
  const bilder = [heroImage, ...galerie, ...(plaene ?? []).map((p) => planBild(p.datei))];

  return (
    <div>
      {bilder.map((bild, idx) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={bild}
          src={bild}
          alt={`${projektTitel} – Ansicht ${idx + 1}`}
          loading={idx === 0 ? 'eager' : 'lazy'}
          className="block h-auto w-full bg-mist"
        />
      ))}
    </div>
  );
}
