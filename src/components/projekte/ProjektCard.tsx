import Image from 'next/image';
import Link from 'next/link';
import { SignetIcon } from '@/components/layout/Logo';
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
      className="group block"
      aria-label={`Zum Projekt ${projekt.title} in ${ortMitKanton(projekt)}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image
          src={projekt.thumbnail}
          alt={`${projekt.title}, ${ortMitKanton(projekt)}`}
          fill
          priority={priority}
          // scale(1.02) über 0.5s wie `.referenzen__image a:hover … img` im alten Theme.
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        />

        {/* Dunkles Overlay + Signet (das "A") beim Hover — Weiterentwicklung
            des alten Theme-Effekts (`.referenzen-item .referenzen__image
            a:before/:after`): Overlay rgba(0,0,0,0.5), Zeichen von
            translateY(10px) auf 0, beides 0.4s. */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100">
          <SignetIcon className="h-[44px] translate-y-[10px] text-white transition-transform duration-[400ms] ease-out group-hover:translate-y-0 md:h-[52px]" />
        </div>
      </div>

      {/* Titel unter dem Bild, darunter der Ort mit Kantonskürzel —
          `.referenzen__titel` (2.25rem, margin-top 1.25rem) und
          `.referenzen__ort` (uppercase, 0.1em Laufweite). */}
      <h3 className="mt-5 text-[1.5rem] md:text-[1.85rem] lg:text-[2rem] xl:text-[2.25rem] font-medium leading-tight text-ink transition-colors group-hover:text-graphite">
        {projekt.title}
      </h3>
      <p className="mt-1 uppercase tracking-[0.1em] text-stone">
        {ortMitKanton(projekt)}
      </p>
    </Link>
  );
}
