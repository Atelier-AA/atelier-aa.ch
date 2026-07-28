import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FragenAntworten from '@/components/insights/FragenAntworten';
import InsightCard from '@/components/insights/InsightCard';
import { insights, getInsight, getWeitereInsights } from '@/data/insights';
import { formatDatum } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) return { title: 'Beitrag nicht gefunden' };

  return {
    title: insight.titel,
    description: insight.lead,
    openGraph: {
      type: 'article',
      title: insight.titel,
      description: insight.lead,
      images: [insight.bild],
      publishedTime: insight.datum,
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) notFound();

  const weitere = getWeitereInsights(slug, 2);

  const BASIS = 'https://www.atelier-aa.ch';
  const url = `${BASIS}/insights/${insight.slug}`;

  /**
   * Strukturierte Daten in einem Graph: Der Beitrag selbst als `Article`, die
   * Q&A-Paare als `FAQPage`. Beides zusammen erlaubt KI-Systemen, den Text
   * einer Quelle, einem Datum und einem Thema zuzuordnen und die Antworten
   * direkt zu zitieren.
   *
   * Die Antworten stehen zusätzlich als sichtbarer Text im HTML — Markup allein
   * genügt nicht, es muss den Seiteninhalt widerspiegeln.
   */
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: insight.titel,
        description: insight.lead,
        image: `${BASIS}${insight.bild}`,
        datePublished: insight.datum,
        dateModified: insight.datum,
        inLanguage: 'de-CH',
        articleSection: insight.kategorie,
        author: { '@id': `${BASIS}/#organisation` },
        publisher: { '@id': `${BASIS}/#organisation` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        about: insight.abschnitte.map((a) => ({ '@type': 'Thing', name: a.titel })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: 'de-CH',
        mainEntity: insight.fragen.map((f) => ({
          '@type': 'Question',
          name: f.frage,
          acceptedAnswer: { '@type': 'Answer', text: f.antwort },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.1em] text-stone mb-4">
              {insight.kategorie} · {formatDatum(insight.datum)} · {insight.lesezeit} Min.
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-tight">
              {insight.titel}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-graphite leading-relaxed">
              {insight.lead}
            </p>
          </div>
        </Container>

        <div className="relative mt-16 md:mt-20 aspect-[16/9] w-full bg-mist">
          <Image
            src={insight.bild}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <Container className="mt-16 md:mt-24">
          <div className="max-w-3xl">
            {insight.abschnitte.map((a) => (
              <section key={a.titel} className="mb-14 last:mb-0">
                <h2 className="text-xl md:text-2xl font-medium text-ink leading-snug mb-5">
                  {a.titel}
                </h2>
                <div className="space-y-5 text-graphite leading-relaxed">
                  {a.absaetze.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            <FragenAntworten fragen={insight.fragen} />

            <div className="mt-20 md:mt-28 border-t border-mist pt-16">
              <h2 className="text-2xl md:text-3xl font-medium text-ink mb-6">
                Sprechen wir über Ihr Projekt.
              </h2>
              <p className="text-graphite leading-relaxed mb-8">
                Wir beraten Sie gerne — offen, konkret und ohne Verpflichtung.
              </p>
              <Button href="/kontakt" variant="text">
                Kontaktieren Sie uns
              </Button>
            </div>
          </div>
        </Container>
      </article>

      {weitere.length > 0 && (
        <section className="py-20 md:py-28 border-t border-mist mt-20">
          <Container>
            <h2 className="text-xs uppercase tracking-widest text-stone mb-12">
              Weitere Beiträge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {weitere.map((i) => (
                <InsightCard key={i.slug} insight={i} />
              ))}
            </div>
            <div className="mt-16">
              <Link
                href="/insights"
                className="text-sm uppercase tracking-[0.1em] text-ink hover:text-stone transition-colors"
              >
                Alle Beiträge
              </Link>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
