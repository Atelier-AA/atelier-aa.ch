import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import InsightCard from '@/components/insights/InsightCard';
import { insights, getInsight, getWeitereInsights } from '@/data/insights';
import { formatDatum } from '@/lib/utils';
import { breadcrumbSchema } from '@/lib/schema';

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
    alternates: { canonical: `/insights/${insight.slug}` },
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

  const weitere = getWeitereInsights(slug, 4);

  const BASIS = 'https://www.atelier-aa.ch';
  const url = `${BASIS}/insights/${insight.slug}`;

  /**
   * Strukturierte Daten: Der Beitrag selbst als `Article`. Die Q&A-Paare
   * (`FAQPage`) stehen nicht mehr hier, sondern gesammelt auf /haeufige-fragen —
   * Schema-Markup ohne sichtbaren Seiteninhalt widerspricht den
   * Richtlinien der Suchmaschinen.
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
      breadcrumbSchema([
        { name: 'Startseite', pfad: '/' },
        { name: 'Journal', pfad: '/insights' },
        { name: insight.titel, pfad: `/insights/${insight.slug}` },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className={weitere.length > 0 ? 'pt-32 md:pt-40' : 'pt-32 pb-20 md:pb-28 md:pt-40'}>
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.1em] text-stone mb-4">
              {insight.kategorie} · {formatDatum(insight.datum)} · {insight.lesezeit} Min.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-ink leading-tight">
              {insight.titel}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-graphite leading-relaxed">
              {insight.lead}
            </p>
          </div>
        </Container>

        <Container className="mt-16 md:mt-20">
          <div className="relative aspect-[16/9] w-full max-w-3xl bg-mist">
            <Image
              src={insight.bild}
              alt={insight.titel}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </Container>

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
                {a.bilder && a.bilder.length > 0 && (
                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {a.bilder.map((bild) => (
                      <div key={bild} className="relative aspect-[16/9] w-full bg-mist">
                        <Image src={bild} alt={a.titel} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            <div className="mt-20 md:mt-28 border-t border-mist pt-16">
              <p className="mb-4 text-xs uppercase tracking-widest text-stone">
                Nächster Schritt
              </p>
              <h2 className="mb-6 max-w-[18ch] text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
                Sprechen wir über Ihr Projekt.
              </h2>
              <p className="text-lg text-graphite leading-relaxed mb-8">
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
            <div className="flex flex-wrap gap-x-5 gap-y-8">
              {weitere.map((i) => (
                <div key={i.slug} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]">
                  <InsightCard insight={i} />
                </div>
              ))}
            </div>
            <div className="mt-16 text-right">
              <Button href="/insights" variant="text">
                alle Beiträge lesen
              </Button>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
