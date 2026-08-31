import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { studien, getStudie, studieTitel } from '@/data/studien';
import { kurzbeschreibung, ortMitKanton } from '@/lib/utils';
import { breadcrumbSchema } from '@/lib/schema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return studien.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const studie = getStudie(slug);
  if (!studie) return { title: 'Seite nicht gefunden' };

  const titel = studieTitel(studie);
  return {
    title: `${studie.kategorie}: ${titel}`,
    description: kurzbeschreibung(
      `${studie.kategorie} von Atelier AA Architekten GmbH in ${ortMitKanton({ ort: studie.ort, kanton: studie.kanton })}: ${studie.analyse}`
    ),
    alternates: { canonical: `/studien/${studie.slug}` },
  };
}

export default async function StudieDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const studie = getStudie(slug);
  if (!studie) notFound();

  const titel = studieTitel(studie);

  // Für Wettbewerbsbeiträge/Konzeptstudien mit echtem Projektbild statt
  // Luftbild/Katasterplan: dasselbe Bild nicht doppelt anzeigen.
  const bilder = [
    studie.luftbild && { src: studie.luftbild, titel: 'Luftbild' },
    studie.katasterplan && { src: studie.katasterplan, titel: 'Amtlicher Katasterplan' },
    !studie.luftbild && !studie.katasterplan && studie.projektbild
      ? { src: studie.projektbild, titel: 'Projektbild' }
      : null,
  ].filter((b): b is { src: string; titel: string } => Boolean(b));

  const BASIS = 'https://www.atelier-aa.ch';
  const url = `${BASIS}/studien/${studie.slug}`;

  /**
   * Strukturierte Daten fürs GEO/lokale SEO — analog zu den Referenzprojekten:
   * `CreativeWork` mit echter Ortsangabe macht auch Studien als eigenständige
   * lokale Relevanzquelle lesbar, ohne erfundene Details (keine SIA-Phasen
   * o. Ä., die für Studien nicht dokumentiert sind).
   */
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${url}#studie`,
        name: `${studie.kategorie}: ${titel}`,
        description: kurzbeschreibung(studie.analyse),
        inLanguage: 'de-CH',
        creator: { '@id': `${BASIS}/#organisation` },
        about: { '@type': 'Thing', name: studie.kategorie },
        locationCreated: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: studie.ort,
            addressRegion: studie.kanton,
            addressCountry: 'CH',
          },
        },
        keywords: [studie.kategorie, studie.ort, studie.kanton].join(', '),
        ...(studie.datum && { dateCreated: studie.datum }),
      },
      breadcrumbSchema([
        { name: 'Startseite', pfad: '/' },
        { name: 'Studien', pfad: '/studien' },
        { name: titel, pfad: `/studien/${studie.slug}` },
      ]),
    ],
  };

  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-mist pb-16 lg:grid-cols-2 lg:gap-20 lg:pb-20">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-stone">
              {studie.kategorie}
              {studie.datum ? ` · ${studie.datum}` : ''}
            </p>
            <h1 className="mb-8 text-h2 font-normal leading-[1.1] tracking-tight text-ink md:text-h1">
              {studie.ort}
              {studie.strasse && (
                <>
                  , <span className="font-semibold">{studie.strasse}</span>
                </>
              )}
            </h1>
            <p className="text-lg leading-relaxed text-graphite">{studie.analyse}</p>
          </div>

          <div className="flex flex-col justify-between">
            {studie.kennzahlen.length > 0 && (
              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {studie.kennzahlen.map((k) => (
                  <div key={k.label} className="flex gap-4">
                    <dt className="w-32 shrink-0 text-sm text-stone">{k.label}</dt>
                    <dd className="text-sm text-ink">{k.wert}</dd>
                  </div>
                ))}
              </dl>
            )}
            <Button href="/kontakt" variant="text" className="mt-8">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>

        {bilder.length > 0 && (
          <div
            className={`mt-16 grid grid-cols-1 gap-6 md:mt-20 ${bilder.length > 1 ? 'md:grid-cols-2' : ''}`}
          >
            {bilder.map((b) => (
              <figure key={b.src}>
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src={b.src}
                    alt={`${b.titel}, ${titel}, Atelier AA Architekten`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="mt-3 text-xs uppercase tracking-widest text-stone">
                  {b.titel}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
