import Image from 'next/image';
import Link from 'next/link';
import { formatDatum } from '@/lib/utils';
import type { Insight } from '@/types';

interface InsightCardProps {
  insight: Insight;
  priority?: boolean;
}

/**
 * Gleiches Karten-Muster wie ProjektCard auf der Projektseite: quadratisches
 * Bild, Titel und Metadaten als Verlauf-Overlay beim Hover statt permanent
 * darunter.
 */
export default function InsightCard({ insight, priority = false }: InsightCardProps) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group block min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      aria-label={`Beitrag lesen: ${insight.titel}, ${insight.kategorie}, ${formatDatum(insight.datum)}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-mist">
        <Image
          src={insight.bild}
          alt={`${insight.titel}, Atelier AA Architekten`}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] group-focus-visible:scale-[1.05]"
          sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100" />

        <div className="absolute inset-x-4 bottom-4 transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
          <p className="truncate text-lg font-medium leading-tight text-white">
            {insight.titel}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/70">
            {insight.kategorie} · {formatDatum(insight.datum)}
          </p>
        </div>
      </div>
    </Link>
  );
}
