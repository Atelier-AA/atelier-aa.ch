import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjektBilder from '@/components/projekte/ProjektBilder';
import ProjektTextSpalte from '@/components/projekte/ProjektTextSpalte';
import ProjektMeta from '@/components/projekte/ProjektMeta';
import WeitereProjekte from '@/components/projekte/WeitereProjekte';
import { projekte, getProjekt, getWeitereProjekte } from '@/data/projekte';
import { ortMitKanton } from '@/lib/utils';
import FragenAntworten from '@/components/insights/FragenAntworten';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

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

  // Projekte ohne Fotos ("in Planung") vorerst von der Indexierung ausnehmen,
  // damit sie nicht als dünner Duplicate-Content-Cluster gewertet werden —
  // für Website-Besucher:innen bleiben sie unverändert sichtbar. Sobald eine
  // Galerie (z. B. Visualisierungen) vorliegt, ist die Seite kein dünner
  // Inhalt mehr und wird normal indexiert.
  const inPlanung =
    projekt.daten.some((d) => d.label === 'Status' && d.wert === 'In Planung') &&
    projekt.galerie.length === 0;

  return {
    title: projekt.title,
    description: projekt.beschreibung,
    ...(inPlanung && { robots: { index: false, follow: true } }),
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

      {/*
        Zweispaltig: links eine lückenlose Bilderstrecke (Fotos und Pläne
        gleichbehandelt), rechts der gesamte Projekttext. Beide beginnen auf
        gleicher Höhe und scrollen zunächst gemeinsam; sobald die Textspalte
        oben ankommt, bleibt sie dort stehen (position: sticky, ohne eigene
        Maximalhöhe), während die Bilder weiterlaufen — bis der Bildbereich
        endet und der Text den Rest seines Inhalts fertig scrollt. Fährt die
        Maus über den Text, hebt `ProjektTextSpalte` das Sticky-Verhalten
        temporär auf, sodass der Text unabhängig von seiner aktuellen Position
        normal mit den Bildern weiterscrollt.
        Auf schmalen Bildschirmen steht der Text zuerst, darunter die Bilder,
        einspaltig ohne Sticky-Verhalten.
      */}
      <div className="flex flex-col pt-[5.4rem] md:pt-[6.3rem] lg:flex-row lg:items-start">
        <div className="order-2 w-full lg:order-1 lg:w-3/5">
          <ProjektBilder
            heroImage={projekt.heroImage}
            galerie={projekt.galerie}
            plaene={projekt.plaene}
            projektTitel={projekt.title}
          />
        </div>

        <ProjektTextSpalte>
          <p className="mb-[0.85rem] text-xs font-medium uppercase tracking-widest text-stone">
            {ortMitKanton(projekt)} · {projekt.jahr}
          </p>
          <h1 className="mb-8 text-[2rem] font-normal leading-[1.1] tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.5rem]">
            {projekt.title}
          </h1>
          <p className="text-lg leading-relaxed text-graphite">{projekt.beschreibung}</p>

          <ProjektMeta kunde={projekt.kunde} />

          {/* Ausführliche Beschreibung in Abschnitten. Gibt der Seite den Text,
              den eine Bildergalerie allein nicht liefert — für Leser wie für
              KI-Systeme. Grösse und Gewicht der Überschriften an
              stage.atelier-aa.ch angeglichen: h1 und h2 in derselben Grösse,
              beide font-medium (500) statt font-light. */}
          {projekt.abschnitte.map((a) => (
            <section key={a.titel} className="mb-14 last:mb-0">
              <h2 className="mb-5 text-4xl font-medium leading-tight text-ink md:text-5xl">
                {a.titel}
              </h2>
              <div className="space-y-5 leading-relaxed text-graphite">
                {a.absaetze.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          {/* Eckdaten und Leistungsumfang */}
          <div className="mt-[2.783rem] grid grid-cols-1 gap-12 border-t border-mist pt-12 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-stone">
                Eckdaten
              </h2>
              <dl className="space-y-3">
                {projekt.daten.map((d) => (
                  <div key={d.label} className="flex gap-4">
                    <dt className="w-32 shrink-0 text-stone">{d.label}</dt>
                    <dd className="text-ink">{d.wert}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-stone">
                Unsere Leistungen
              </h2>
              <ul className="space-y-2 text-ink">
                {projekt.leistungen.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>

          <FragenAntworten fragen={projekt.fragen} titel="Fragen zu diesem Projekttyp" />
        </ProjektTextSpalte>
      </div>

      {/* Abschluss-CTA bewusst ausserhalb der zweispaltigen Ansicht, auf
          voller Breite — anders als der übrige Text, der in der schmalen
          Sticky-Spalte steht. */}
      <section className="border-t border-mist py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">
              Nächster Schritt
            </p>
            <h2 className="mb-6 max-w-[18ch] text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">
              Planen Sie ein ähnliches Projekt?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-graphite">
              Wir prüfen in einer Machbarkeitsstudie, was auf Ihrem Grundstück
              möglich ist — mit Volumenstudie und Kostenrahmen.
            </p>
            <Button href="/kontakt" variant="text">
              Kontaktieren Sie uns
            </Button>
          </div>
        </Container>
      </section>

      <WeitereProjekte projekte={weitere} />
    </>
  );
}
