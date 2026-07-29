import Image from 'next/image';
import Link from 'next/link';
import Arrow from '@/components/ui/Arrow';
import { ortMitKanton } from '@/lib/utils';
import type { Projekt } from '@/types';

interface ProjektCardProps {
  projekt: Projekt;
  priority?: boolean;
}

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
          // scale(1.02) über 0.5s wie `.referenzen__image a:hover … img` im alten Theme.
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        {/* Dunkles Overlay + weisser Pfeil beim Hover — 1:1 aus dem alten Theme
            (`.referenzen-item .referenzen__image a:before/:after`): Overlay
            rgba(0,0,0,0.5), Pfeil von translateX(-10px) auf 0, beides 0.4s. */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100">
          <Arrow className="w-[76px] h-[30px] -translate-x-[10px] text-white transition-transform duration-[400ms] ease-out group-hover:translate-x-0" />
        </div>
      </div>

      {/* Titel unter dem Bild, darunter der Ort mit Kantonskürzel. Immer
          einzeilig — kleinere, feste Schriftgrösse statt der früheren
          Eskalation bis 2.25rem, die lange, ungetrennte Wörter wie
          "Doppeleinfamilienhaus" zum Umbrechen oder Überlaufen brachte.
          truncate als Sicherheitsnetz für extreme Einzelfälle. */}
      <h3 className="mt-4 truncate text-lg font-medium leading-tight text-ink transition-colors group-hover:text-graphite md:text-xl">
        {projekt.title}
      </h3>
      <p className="mt-1 uppercase tracking-[0.1em] text-stone">
        {ortMitKanton(projekt)}
      </p>
    </Link>
  );
}
