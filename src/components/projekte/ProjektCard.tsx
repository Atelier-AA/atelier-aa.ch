import Image from 'next/image';
import Link from 'next/link';
import { cn, ortMitKanton } from '@/lib/utils';
import type { Projekt } from '@/types';

interface ProjektCardProps {
  projekt: Projekt;
  priority?: boolean;
  /** Seitenverhältnis der Bildfläche. Standard: quadratisch wie auf /projekte. */
  aspectClassName?: string;
  /** Zusätzliche Klassen am Link — etwa um die Kachel eine Zeilenhöhe
   *  ausfüllen zu lassen statt einem festen Seitenverhältnis zu folgen. */
  className?: string;
}

/**
 * Titel und Ort erscheinen jetzt als Verlauf-Overlay direkt auf dem Bild
 * beim Hover, statt permanent als Text darunter — Bild und Beschriftung
 * verschmelzen zu einer Einheit statt zwei getrennten Blöcken.
 */
export default function ProjektCard({
  projekt,
  priority = false,
  aspectClassName = 'aspect-square',
  className,
}: ProjektCardProps) {
  return (
    <Link
      href={`/referenzen/${projekt.slug}`}
      className={cn(
        'group block min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink',
        className
      )}
      aria-label={`Zum Projekt ${projekt.title} in ${ortMitKanton(projekt)}`}
    >
      {/* Quadratisches Bildformat 1:1 aus dem alten Theme
          (`.referenzen-item:not(.referenzen-item--big) .referenzen__immage-inner`),
          überschreibbar für Abschnitte, die ein anderes Format brauchen. */}
      <div className={`relative overflow-hidden bg-mist ${aspectClassName}`}>
        <Image
          src={projekt.thumbnail}
          alt={`${projekt.title}, ${ortMitKanton(projekt)}, Atelier AA Architekten`}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] group-focus-visible:scale-[1.05]"
          sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100" />

        <div className="absolute inset-x-4 bottom-4 transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
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
