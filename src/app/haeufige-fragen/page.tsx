import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import FragenAntworten from '@/components/insights/FragenAntworten';
import { expertiseFragen } from '@/data/expertise';
import { insights } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Häufige Fragen',
  description:
    'Häufige Fragen zu Leistungen, Honorar und Zusammenarbeit mit Atelier AA Architekten GmbH: SIA-Leistungsphasen, Machbarkeitsstudie, Bauleitung, Kostensicherheit und Generalunternehmer.',
  alternates: { canonical: '/haeufige-fragen' },
};

export default function HaeufigeFragenPage() {
  // Fragen aus den Insight-Beiträgen: vorher einzeln je Beitragsseite,
  // jetzt gesammelt hier statt verstreut über 19 Detailseiten.
  const insightFragen = insights.flatMap((i) => i.fragen);

  // FAQPage-Markup zu den sichtbaren Fragen weiter unten — vorher Teil von
  // /leistungen, jetzt als eigenständige Seite ausgelagert.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.atelier-aa.ch/haeufige-fragen#faq',
    inLanguage: 'de-CH',
    mainEntity: [...expertiseFragen, ...insightFragen].map((f) => ({
      '@type': 'Question',
      name: f.frage,
      acceptedAnswer: { '@type': 'Answer', text: f.antwort },
    })),
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
            <h1 className="text-4xl font-normal leading-tight text-ink md:text-5xl lg:text-6xl">
              Fragen zu <span className="font-semibold">Leistungen</span> und{' '}
              <span className="font-semibold">Zusammenarbeit</span>
            </h1>
            <FragenAntworten fragen={expertiseFragen} />
            <FragenAntworten fragen={insightFragen} titel="Fragen aus unseren Fachbeiträgen" />
          </div>
        </Container>
      </div>
    </>
  );
}
