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

/** Nach so vielen Projekten erscheint die Kontakt-Kachel im Raster —
 *  Besucher haben dann schon einen Eindruck der Arbeit gewonnen. */
const KONTAKT_NACH = 5;

export default function ProjektGrid({ projekte }: ProjektGridProps) {
  return (
    // Spaltenbreiten und Abstand 1:1 aus stage.atelier-aa.ch/projekte/
    // (.referenzen-list / .referenzen-item): eine Spalte mobil, zwei ab
    // 600px, drei ab 1280px, 1.25rem Abstand.
    <div className="flex flex-wrap gap-x-5 gap-y-8 xl:gap-y-16">
      {projekte.map((projekt, idx) => (
        <Fragment key={projekt.slug}>
          <Eingeblendet className={KACHEL_KLASSE}>
            <ProjektCard projekt={projekt} priority={idx < 2} />
          </Eingeblendet>
          {idx === KONTAKT_NACH - 1 && projekte.length > KONTAKT_NACH && (
            <Eingeblendet className={KACHEL_KLASSE}>
              <KontaktKachel />
            </Eingeblendet>
          )}
        </Fragment>
      ))}
    </div>
  );
}
