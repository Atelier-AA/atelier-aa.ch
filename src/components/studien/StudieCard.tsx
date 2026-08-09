import Image from 'next/image';
import Link from 'next/link';
import { ortMitKanton } from '@/lib/utils';
import type { Studie } from '@/types';

interface StudieCardProps {
  studie: Studie;
  priority?: boolean;
}

/**
 * Gleiche Behandlung wie `ProjektCard`: quadratisches Bild, Titel/Ort
 * erscheinen erst als Verlauf-Overlay beim Hover — hier zusätzlich mit der
 * Kategorie (Machbarkeitsstudie/Konzeptstudie/Wettbewerbsbeitrag/
 * Bauherrenvertretung), damit auf der Karte selbst sichtbar bleibt, dass es
 * sich nicht um ein gebautes Projekt handelt.
 */
export default function StudieCard({ studie, priority = false }: StudieCardProps) {
  const bild = studie.luftbild ?? studie.katasterplan ?? studie.projektbild;
  const titel = studie.strasse ? `${studie.ort}, ${studie.strasse}` : studie.ort;

  return (
    <Link
      href={`/studien/${studie.slug}`}
      className="group block min-w-0"
      aria-label={`Zur Studie ${titel}, Atelier AA Architekten`}
    >
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
    </Link>
  );
}
