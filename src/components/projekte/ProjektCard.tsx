import Image from 'next/image';
import Link from 'next/link';
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
      aria-label={`Zum Projekt ${projekt.title} in ${projekt.ort}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mist mb-4">
        <Image
          src={projekt.thumbnail}
          alt={`${projekt.title}, ${projekt.ort}`}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        />
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg md:text-xl font-light text-ink group-hover:text-graphite transition-colors">
          {projekt.title}
        </h3>
        <p className="text-sm text-stone whitespace-nowrap">{projekt.ort}</p>
      </div>
    </Link>
  );
}
