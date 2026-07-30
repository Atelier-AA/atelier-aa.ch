import Image from 'next/image';
import Link from 'next/link';
import { ortMitKanton } from '@/lib/utils';
import type { Projekt } from '@/types';

interface ProjektCardProps {
  projekt: Projekt;
  priority?: boolean;
}

/**
 * Titel und Ort erscheinen jetzt als Verlauf-Overlay direkt auf dem Bild
 * beim Hover, statt permanent als Text darunter — Bild und Beschriftung
 * verschmelzen zu einer Einheit statt zwei getrennten Blöcken.
 */
export default function ProjektCard({ projekt, priority = false }: ProjektCardProps) {
  return (
    <Link
      href={`/referenzen/${projekt.slug}`}
      className="group block min-w-0"
      aria-label={`Zum Projekt ${projekt.title} in ${ortMitKanton(projekt)}`}
    >
      {/* Quadratisches Bildformat 1:1 aus dem alten Theme
          (`.referenzen-item:not(.referenzen-item--big) .referenzen__immage-inner`). */}
      <div className="relative aspect-square overflow-hidden bg-mist">
        <Image
          src={projekt.thumbnail}
          alt={`${projekt.title}, ${ortMitKanton(projekt)}`}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="truncate text-lg font-medium leading-tight text-white">
            {projekt.title}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/70">
            {ortMitKanton(projekt)}
          </p>
        </div>
      </div>
    </Link>
  );
}
