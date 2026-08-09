import Image from 'next/image';
import { ortMitKanton } from '@/lib/utils';
import type { Studie } from '@/types';

interface StudieCardProps {
  studie: Studie;
  priority?: boolean;
}

/**
 * Gleiche Optik wie `ProjektCard`: quadratisches Bild, Titel/Ort erscheinen
 * erst als Verlauf-Overlay beim Hover — hier zusätzlich mit der Kategorie
 * (Machbarkeitsstudie/Konzeptstudie/Wettbewerbsbeitrag/Bauherrenvertretung).
 *
 * Bewusst KEIN Link zur Detailseite: Die einzelnen Studien-Seiten bleiben
 * über Google/Sitemap auffindbar (z. B. für eine betroffene Person, die
 * gezielt danach sucht), sollen aber nicht von der eigenen Übersichtsseite
 * aus anklickbar sein — sonst liessen sich alle Studien bequem nebeneinander
 * durchklicken und vergleichen.
 */
export default function StudieCard({ studie, priority = false }: StudieCardProps) {
  const bild = studie.luftbild ?? studie.katasterplan ?? studie.projektbild;
  const titel = studie.strasse ? `${studie.ort}, ${studie.strasse}` : studie.ort;

  return (
    <div className="group block min-w-0" aria-label={`${titel}, Atelier AA Architekten`}>
      <div className="relative aspect-square overflow-hidden bg-mist">
        {bild && (
          <Image
            src={bild}
            alt={`${studie.kategorie} in ${ortMitKanton({ ort: studie.ort, kanton: studie.kanton })}, Atelier AA Architekten`}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="mb-1 text-xs uppercase tracking-[0.1em] text-white/80">
            {studie.kategorie}
          </p>
          <p className="truncate text-lg font-medium leading-tight text-white">{titel}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/70">
            {ortMitKanton({ ort: studie.ort, kanton: studie.kanton })}
          </p>
        </div>
      </div>
    </div>
  );
}
