import { Fragment } from 'react';
import ProjektCard from './ProjektCard';
import KontaktKachel from './KontaktKachel';
import Eingeblendet from '@/components/ui/Eingeblendet';
import type { Projekt } from '@/types';

interface ProjektGridProps {
  projekte: Projekt[];
}

/** Kachelbreiten und -abstand, dieselben für Projekte und die Kontakt-Kachel. */
const KACHEL_KLASSE = 'w-full sm:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.834rem)]';

/** Nach jeweils so vielen Projekten erscheint die Kontakt-Kachel im Raster —
 *  wiederholt sich, statt nur einmal aufzutauchen (Kundenwunsch: mehr als
 *  eine Kachel). Erscheint nicht direkt nach dem letzten Projekt, da dort
 *  schon der "Nächster Schritt"-Abschnitt der Seite folgt. */
const KONTAKT_INTERVALL = 6;

export default function ProjektGrid({ projekte }: ProjektGridProps) {
  return (
    // Spaltenbreiten und Abstand 1:1 aus stage.atelier-aa.ch/projekte/
    // (.referenzen-list / .referenzen-item): eine Spalte mobil, zwei ab
    // 600px, drei ab 1280px, 1.25rem Abstand.
    <div className="flex flex-wrap gap-x-5 gap-y-8 xl:gap-y-16">
      {projekte.map((projekt, idx) => {
        const nachDiesemProjekt =
          (idx + 1) % KONTAKT_INTERVALL === 0 && idx + 1 < projekte.length;

        return (
          <Fragment key={projekt.slug}>
            <Eingeblendet className={KACHEL_KLASSE}>
              <ProjektCard projekt={projekt} priority={idx < 2} />
            </Eingeblendet>
            {nachDiesemProjekt && (
              <Eingeblendet className={KACHEL_KLASSE}>
                <KontaktKachel variante={Math.floor((idx + 1) / KONTAKT_INTERVALL) - 1} />
              </Eingeblendet>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
