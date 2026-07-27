import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import ProjektHero from '@/components/projekte/ProjektHero';
import ProjektMeta from '@/components/projekte/ProjektMeta';
import ProjektGalerie from '@/components/projekte/ProjektGalerie';
import ProjektPlaene from '@/components/projekte/ProjektPlaene';
import WeitereProjekte from '@/components/projekte/WeitereProjekte';
import { projekte, getProjekt, getWeitereProjekte } from '@/data/projekte';
import { ortMitKanton } from '@/lib/utils';
import FragenAntworten from '@/components/insights/FragenAntworten';
import Button from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projekte.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const projekt = getProjekt(slug);

  if (!projekt) return { title: 'Projekt nicht gefunden' };

  return {
    title: projekt.title,
    description: projekt.beschreibung,
    openGraph: {
      title: projekt.title,
      description: projekt.beschreibung,
      images: [projekt.heroImage],
    },
  };
}

export default async function ProjektDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projekt = getProjekt(slug);

  if (!projekt) notFound();

  const weitere = getWeitereProjekte(slug, 3);
  const BASIS = 'https://www.atelier-aa.ch';
  const url = `${BASIS}/referenzen/${projekt.slug}`;

  /**
   * Strukturierte Daten für das Projekt.
   *
   * `CreativeWork` mit Ortsangabe und Leistungsumfang macht das Projekt für
   * Suchmaschinen und KI-Systeme als Referenz eines Architekturbüros lesbar.
   * Die Q&A-Paare stehen zusätzlich als `FAQPage` — Fragen wie «was kostet ein
   * Mehrfamilienhaus» werden so direkt beantwortbar.
   */
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${url}#projekt`,
        name: `${projekt.title}, ${projekt.ort} ${projekt.kanton}`,
        description: projekt.beschreibung,
        image: `${BASIS}${projekt.heroImage}`,
        dateCreated: projekt.jahr,
        inLanguage: 'de-CH',
        creator: { '@id': `${BASIS}/#organisation` },
        about: { '@type': 'Thing', name: projekt.typ },
        locationCreated: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: projekt.ort,
            addressRegion: projekt.kanton,
            addressCountry: 'CH',
          },
        },
        keywords: [projekt.typ, ...projekt.leistungen, projekt.ort, projekt.kanton].join(', '),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: 'de-CH',
        mainEntity: projekt.fragen.map((f) => ({
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

      <div className="pt-24 md:pt-28">
        <ProjektHero image={projekt.heroImage} alt={`${projekt.title}, ${ortMitKanton(projekt)}`} />

        <Container className="mt-16 md:mt-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-stone mb-4">
              {projekt.typ} · {ortMitKanton(projekt)} · {projekt.jahr}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-ink leading-tight mb-8">
              {projekt.title}
            </h1>
            <p className="text-lg text-graphite leading-relaxed">
              {projekt.beschreibung}
            </p>
          </div>

          <ProjektMeta
            kunde={projekt.kunde}
            ort={ortMitKanton(projekt)}
            jahr={projekt.jahr}
          />

          {/* Ausführliche Beschreibung in Abschnitten. Gibt der Seite den Text,
              den eine Bildergalerie allein nicht liefert — für Leser wie für
              KI-Systeme. */}
          <div className="max-w-3xl">
            {projekt.abschnitte.map((a) => (
              <section key={a.titel} className="mb-14 last:mb-0">
                <h2 className="mb-5 text-xl md:text-2xl font-light leading-snug text-ink">
                  {a.titel}
                </h2>
                <div className="space-y-5 text-graphite leading-relaxed">
                  {a.absaetze.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <ProjektGalerie bilder={projekt.galerie} projektTitel={projekt.title} />

          {projekt.plaene && <ProjektPlaene plaene={projekt.plaene} />}

          {/* Eckdaten und Leistungsumfang */}
          <div className="mt-20 grid max-w-4xl grid-cols-1 gap-12 border-t border-mist pt-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-xs uppercase tracking-widest text-stone">
                Eckdaten
              </h2>
              <dl className="space-y-3">
                {projekt.daten.map((d) => (
                  <div key={d.label} className="flex gap-4">
                    <dt className="w-40 shrink-0 text-stone">{d.label}</dt>
                    <dd className="text-ink">{d.wert}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="mb-6 text-xs uppercase tracking-widest text-stone">
                Unsere Leistungen
              </h2>
              <ul className="space-y-2 text-ink">
                {projekt.leistungen.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <FragenAntworten
              fragen={projekt.fragen}
              titel="Fragen zu diesem Projekttyp"
            />
          </div>

          <div className="mt-20 max-w-3xl border-t border-mist pt-16">
            <h2 className="mb-6 text-2xl md:text-3xl font-light text-ink">
              Planen Sie ein ähnliches Projekt?
            </h2>
            <p className="mb-8 text-graphite leading-relaxed">
              Wir prüfen in einer Machbarkeitsstudie, was auf Ihrem Grundstück
              möglich ist — mit Volumenstudie und Kostenrahmen.
            </p>
            <Button href="/kontakt" variant="text">
              Kontaktieren Sie uns
            </Button>
          </div>
        </Container>
      </div>

      <WeitereProjekte projekte={weitere} />
    </>
  );
}
