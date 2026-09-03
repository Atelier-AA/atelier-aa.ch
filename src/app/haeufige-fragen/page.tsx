import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import FragenAntworten from '@/components/insights/FragenAntworten';
import { expertiseFragen } from '@/data/expertise';
import { insights } from '@/data/insights';
import type { FragenGruppe, InsightFrage } from '@/types';

export const metadata: Metadata = {
  title: 'Häufige Fragen',
  description:
    'Häufige Fragen zu Leistungen, Honorar und Zusammenarbeit mit Atelier AA Architekten: Machbarkeitsstudie, Bauleitung und Kostensicherheit.',
  alternates: { canonical: '/haeufige-fragen' },
};

/**
 * Die Themenblöcke in der Reihenfolge der Seite: zuerst die Fragen, die eine
 * Bauherrschaft am Anfang stellt (Auftrag, Kosten, Machbarkeit), danach die
 * fachlichen.
 *
 * Vorher standen alle Fragen in zwei Blöcken von 19 und 59 Stück. Das war
 * fachlich richtig, aber unlesbar — eine Liste von 78 Zeilen, durch die man
 * nur scrollen konnte. Die Blöcke tragen zudem eigene Überschriften, was
 * zusätzliche Suchbegriffe in die Seite bringt.
 */
const GRUPPEN: { schluessel: FragenGruppe; titel: string; anker: string }[] = [
  { schluessel: 'auftrag', titel: 'Zusammenarbeit und Auftrag', anker: 'zusammenarbeit' },
  { schluessel: 'kosten', titel: 'Kosten und Honorar', anker: 'kosten' },
  { schluessel: 'machbarkeit', titel: 'Machbarkeitsstudie und Projektentwicklung', anker: 'machbarkeit' },
  { schluessel: 'bewilligung', titel: 'Bewilligung und Baugesuch', anker: 'bewilligung' },
  { schluessel: 'bestand', titel: 'Umbau, Aufstockung und Bestand', anker: 'bestand' },
  { schluessel: 'energie', titel: 'Energie, Solar und Vorschriften', anker: 'energie' },
  { schluessel: 'technik', titel: 'Gebäudetechnik und Nachweise', anker: 'technik' },
  { schluessel: 'bauweise', titel: 'Bauweise und Material', anker: 'bauweise' },
  { schluessel: 'methoden', titel: 'Design Build, BIM und KI', anker: 'methoden' },
];

export default function HaeufigeFragenPage() {
  // Fragen aus den Insight-Beiträgen: vorher einzeln je Beitragsseite,
  // jetzt gesammelt hier statt verstreut über 19 Detailseiten.
  const alleFragen: InsightFrage[] = [
    ...expertiseFragen,
    ...insights.flatMap((i) => i.fragen),
  ];

  const bloecke = GRUPPEN.map((g) => ({
    ...g,
    fragen: alleFragen.filter((f) => f.gruppe === g.schluessel),
  })).filter((b) => b.fragen.length > 0);

  // FAQPage-Markup zu den sichtbaren Fragen weiter unten — vorher Teil von
  // /leistungen, jetzt als eigenständige Seite ausgelagert. Die Reihenfolge
  // folgt der Darstellung, damit Markup und Seite übereinstimmen.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://atelier-aa.ch/haeufige-fragen#faq',
    inLanguage: 'de-CH',
    mainEntity: bloecke.flatMap((b) =>
      b.fragen.map((f) => ({
        '@type': 'Question',
        name: f.frage,
        acceptedAnswer: { '@type': 'Answer', text: f.antwort },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pt-32 pb-20 md:pb-28 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">
              Häufige Fragen
            </p>
            <h1 className="text-h2 font-normal leading-tight text-ink md:text-h1">
              Fragen zu <span className="font-semibold">Leistungen</span> und{' '}
              <span className="font-semibold">Zusammenarbeit</span>
            </h1>

            {/* Inhaltsverzeichnis: gezielt springen statt durch alle Blöcke
                scrollen. Als <nav> mit Beschriftung, damit Screenreader den
                Zweck erkennen. */}
            <nav aria-labelledby="themen" className="mt-12 border-t border-mist pt-8">
              <h2 id="themen" className="mb-6 text-xs uppercase tracking-widest text-stone">
                Themen
              </h2>
              <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {bloecke.map((b) => (
                  <li key={b.anker}>
                    <a
                      href={`#${b.anker}`}
                      className="group flex items-baseline justify-between gap-3 text-graphite transition-colors hover:text-ink"
                    >
                      <span className="border-b border-transparent transition-colors group-hover:border-ink">
                        {b.titel}
                      </span>
                      <span className="shrink-0 text-xs tabular-nums text-stone">
                        {b.fragen.length}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {bloecke.map((b) => (
              <FragenAntworten
                key={b.anker}
                id={b.anker}
                titel={b.titel}
                fragen={b.fragen}
                kompakt
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
