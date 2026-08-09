import Image from 'next/image';
import Link from 'next/link';
import type { Kleinprojekt } from '@/types';

interface KleinprojektCardProps {
  projekt: Kleinprojekt;
  priority?: boolean;
}

/**
 * Gleiche Behandlung wie `ProjektCard`/`StudieCard`: quadratisches Bild,
 * Titel/Ort erscheinen erst als Verlauf-Overlay beim Hover.
 */
export default function KleinprojektCard({ projekt, priority = false }: KleinprojektCardProps) {
  const titel = projekt.strasse ? `${projekt.ort}, ${projekt.strasse}` : projekt.ort;

  return (
    <Link
      href={`/kleinprojekte/${projekt.slug}`}
      className="group block min-w-0"
      aria-label={`Zum Projekt ${titel}, Atelier AA Architekten`}
    >
      <div className="relative aspect-square overflow-hidden bg-mist">
        <Image
          src={projekt.bilder[0]}
          alt={`${projekt.gebaeudetyp}, ${titel}, Atelier AA Architekten`}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="truncate text-lg font-medium leading-tight text-white">{titel}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/70">
            {projekt.gebaeudetyp}
          </p>
        </div>
      </div>
    </Link>
  );
}
