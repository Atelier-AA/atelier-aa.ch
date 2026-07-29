import Image from 'next/image';
import Link from 'next/link';
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
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        />
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
