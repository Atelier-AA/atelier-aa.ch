import type { InsightFrage } from '@/types';

interface FragenAntwortenProps {
  fragen: InsightFrage[];
}

/**
 * Q&A-Abschnitt eines Beitrags.
 *
 * Bewusst als offene Definitionsliste statt als Akkordeon: Der Inhalt ist ohne
 * Interaktion lesbar, durchsuchbar und druckbar — und für Suchmaschinen als
 * FAQ-Struktur erkennbar (siehe FAQPage-Markup auf der Detailseite).
 */
export default function FragenAntworten({ fragen }: FragenAntwortenProps) {
  if (fragen.length === 0) return null;

  return (
    <section className="mt-20 md:mt-28 border-t border-mist pt-16">
      <h2 className="text-2xl md:text-3xl font-light text-ink mb-12">
        Fragen und Antworten
      </h2>
      <dl className="space-y-10">
        {fragen.map((f) => (
          <div key={f.frage} className="border-b border-mist pb-10 last:border-0 last:pb-0">
            <dt className="text-lg md:text-xl font-light text-ink leading-snug mb-3">
              {f.frage}
            </dt>
            <dd className="text-graphite leading-relaxed">{f.antwort}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
