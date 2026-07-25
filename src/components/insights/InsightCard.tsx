import Image from 'next/image';
import Link from 'next/link';
import Arrow from '@/components/ui/Arrow';
import { formatDatum } from '@/lib/utils';
import type { Insight } from '@/types';

interface InsightCardProps {
  insight: Insight;
  priority?: boolean;
}

/**
 * Beitragskarte in der Insights-Übersicht. Hover-Verhalten wie bei den
 * Projektkarten: Overlay mit weissem Pfeil, Bild leicht vergrössert.
 */
export default function InsightCard({ insight, priority = false }: InsightCardProps) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group block"
      aria-label={`Beitrag lesen: ${insight.titel}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image
          src={insight.bild}
          alt=""
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100">
          <Arrow className="w-[76px] h-[30px] -translate-x-[10px] text-white transition-transform duration-[400ms] ease-out group-hover:translate-x-0" />
        </div>
      </div>

      <p className="mt-5 text-xs uppercase tracking-[0.1em] text-stone">
        {insight.kategorie} · {formatDatum(insight.datum)}
      </p>
      <h3 className="mt-2 text-[1.5rem] md:text-[1.85rem] font-light leading-tight text-ink transition-colors group-hover:text-graphite">
        {insight.titel}
      </h3>
      <p className="mt-3 text-graphite leading-relaxed">{insight.lead}</p>
    </Link>
  );
}
