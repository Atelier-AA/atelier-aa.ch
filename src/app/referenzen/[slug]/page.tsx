import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjektBilder from '@/components/projekte/ProjektBilder';
import WeitereProjekte from '@/components/projekte/WeitereProjekte';
import { projekte, getProjekt, getWeitereProjekte } from '@/data/projekte';
import { kurzbeschreibung, ortMitKanton } from '@/lib/utils';
import { alleKantone, slugify } from '@/lib/regionen';
import FragenAntworten from '@/components/insights/FragenAntworten';
import VorhabenCta from '@/components/ui/VorhabenCta';
import MehrLesen from '@/components/ui/MehrLesen';
import { breadcrumbSchema } from '@/lib/schema';
import { bildMasse } from '@/lib/bildmasse';

/**
 * Aus dem PDF-Pfad den Pfad des dazu konvertierten Vorschaubilds ableiten:
 * `/dokumente/projekte/<slug>/<name>.pdf` → `/images/projekte/<slug>/plaene/<name>.jpg`.
 */
function planBild(datei: string): string {
  return datei
    .replace('/dokumente/projekte/', '/images/projekte/')
    .replace(/\/([^/]+)\.pdf$/, '/plaene/$1.jpg');
}

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

  // Titel mit Ort/Kanton statt nur dem Gebäudetyp — "Einfamilienhaus" allein
  // ist als <title> für jede der zwölf Einfamilienhaus-Seiten identisch und
  // damit für Suchmaschinen kaum unterscheidbar.
  const seoTitel = `${projekt.title} ${ortMitKanton(projekt)}`;

  return {
    title: seoTitel,
    description: kurzbeschreibung(projekt.beschreibung),
    alternates: { canonical: `/referenzen/${projekt.slug}` },
    ...(inPlanung && { robots: { index: false, follow: true } }),
    openGraph: {
      title: seoTitel,
      description: kurzbeschreibung(projekt.beschreibung),
      images: [projekt.heroImage],
    },
  };
}

export default async function ProjektDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projekt = getProjekt(slug);

  if (!projekt) notFound();

  const weitere = getWeitereProjekte(slug, 4);
  const kanton = alleKantone().find((k) => k.kuerzel === projekt.kanton);
  const ortSlug = slugify(projekt.ort);
  // Erster Abschnitt bleibt immer sichtbar, weitere stehen auf Mobile hinter
  // "mehr lesen" — sonst steht auf schmalen Bildschirmen der gesamte
  // Projekttext vor dem ersten Bild.
  const [ersterAbschnitt, ...weitereAbschnitte] = projekt.abschnitte;
  const BASIS = 'https://atelier-aa.ch';
  const url = `${BASIS}/referenzen/${projekt.slug}`;

  // Pixelmasse einmal zur Build-Zeit lesen (statische Seite), damit
  // `next/image` ohne `fill` das natürliche Seitenverhältnis kennt —
  // spart automatische Grössenreduktion und AVIF/WebP ein, ohne die Masse
  // pro Bild von Hand zu pflegen.
  const bezeichnung = `${projekt.title}, ${ortMitKanton(projekt)}`;
  const bildPfade = [
    projekt.heroImage,
    ...projekt.galerie,
    ...(projekt.plaene ?? []).map((p) => planBild(p.datei)),
  ];
  const bilder = await Promise.all(
    bildPfade.map(async (src, idx) => ({
      src,
      alt: `${bezeichnung}, Ansicht ${idx + 1}, Atelier AA Architekten`,
      video: projekt.videoClips?.find((v) => v.bildPfad === src),
      ...(await bildMasse(src)),
    }))
  );

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
        description: kurzbeschreibung(projekt.beschreibung),
        image: `${BASIS}${projekt.heroImage}`,
        /*
         * Nur echte Jahreszahlen. Das Feld `jahr` trägt auch Statuswerte wie
         * «im Bau», «baubewilligt» oder «nicht realisiert»; als Schema.org-
         * Datumsangabe sind die ungültig und standen auf 12 Projektseiten.
         * Der Status steckt weiter unten in `creativeWorkStatus`.
         */
        ...(/^\d{4}$/.test(projekt.jahr) ? { dateCreated: projekt.jahr } : {}),
        inLanguage: 'de-CH',
        creator: { '@id': `${BASIS}/#organisation` },
        about: { '@type': 'Thing', name: projekt.typ },
        ...(() => {
          const status = projekt.daten.find((d) => d.label === 'Status')?.wert;
          return status ? { creativeWorkStatus: status } : {};
        })(),
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
      breadcrumbSchema([
        { name: 'Startseite', pfad: '/' },
        { name: 'Projekte', pfad: '/projekte' },
        { name: projekt.title, pfad: `/referenzen/${projekt.slug}` },
      ]),
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
        endet und der Text den Rest seines Inhalts fertig scrollt.
        Auf schmalen Bildschirmen steht der Text zuerst, darunter die Bilder,
        einspaltig ohne Sticky-Verhalten.
      */}
      <div className="flex flex-col pt-[5.4rem] md:pt-[6.3rem] lg:flex-row lg:items-start">
        <div className="order-2 w-full lg:order-1 lg:w-3/5">
          <ProjektBilder bilder={bilder} />
        </div>

        <div className="order-1 w-full px-6 pt-[2.783rem] pb-12 md:px-10 md:pb-16 lg:order-2 lg:sticky lg:top-28 lg:w-2/5 lg:px-16 lg:pb-28">
          <p className="mb-[0.85rem] text-xs font-medium uppercase tracking-widest text-stone">
            {ortMitKanton(projekt)} · {projekt.jahr}
          </p>
          <h1 className="mb-8 text-h1 font-normal leading-[1.1] tracking-tight text-ink">
            {projekt.title}
          </h1>
          {/* Wenn Abschnitte vorhanden sind, enthalten sie bereits denselben
              Text strukturiert mit Zwischenüberschriften — der kurze
              Absatz hier würde ihn doppelt zeigen. `beschreibung` bleibt in
              jedem Fall die Grundlage für Meta-Description und Schema.org. */}
          {projekt.abschnitte.length === 0 && (
            <p className="text-lg leading-relaxed text-graphite">{projekt.beschreibung}</p>
          )}

          {/* Ausführliche Beschreibung in Abschnitten. Gibt der Seite den Text,
              den eine Bildergalerie allein nicht liefert — für Leser wie für
              KI-Systeme. Grösse und Gewicht der Überschriften an
              stage.atelier-aa.ch angeglichen: h1 und h2 in derselben Grösse,
              beide font-medium (500) statt font-light. */}
          {ersterAbschnitt && (
            <section className="mb-14 last:mb-0">
              <h2 className="mb-5 text-h2 font-medium leading-tight text-ink md:text-h1">
                {ersterAbschnitt.titel}
              </h2>
              <div className="space-y-5 leading-relaxed text-graphite">
                {ersterAbschnitt.absaetze.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </section>
          )}

          {weitereAbschnitte.length > 0 && (
            <MehrLesen nurMobil>
              {weitereAbschnitte.map((a) => (
                <section key={a.titel} className="mb-14 last:mb-0">
                  <h2 className="mb-5 text-h2 font-medium leading-tight text-ink md:text-h1">
                    {a.titel}
                  </h2>
                  <div className="space-y-5 leading-relaxed text-graphite">
                    {a.absaetze.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </MehrLesen>
          )}

          {/* Entscheidungslogik statt nur Ergebnis: zeigt, wie gedacht und
              entschieden wurde, nicht nur, was gebaut wurde. Nur bei
              Projekten mit echter, dokumentierter Entscheidung gesetzt. */}
          {projekt.entscheidung && (
            <section className="mt-[2.783rem] border-t border-mist pt-12">
              <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-stone">
                Die Entscheidung
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="mb-1 text-sm font-medium text-ink">Ausgangslage</p>
                  <p className="leading-relaxed text-graphite">
                    {projekt.entscheidung.ausgangslage}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-ink">Die entscheidende Frage</p>
                  <p className="leading-relaxed text-graphite">{projekt.entscheidung.frage}</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-ink">Unsere Entscheidung</p>
                  <p className="leading-relaxed text-graphite">
                    {projekt.entscheidung.entscheidung}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-ink">Resultat</p>
                  <p className="leading-relaxed text-graphite">{projekt.entscheidung.resultat}</p>
                </div>
              </div>
            </section>
          )}

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

          {/* Interne Verlinkung zu den Kanton-/Ortschafts-Seiten — für die
              lokale Suche ("Architekt Jonen"), nicht im Hauptmenü verlinkt. */}
          {kanton && (
            <p className="mt-8 text-sm text-stone">
              Weitere Projekte in{' '}
              <Link
                href={`/regionen/${kanton.slug}/${ortSlug}`}
                className="text-ink underline decoration-stone underline-offset-4 hover:decoration-ink"
              >
                {projekt.ort}
              </Link>{' '}
              oder im{' '}
              <Link
                href={`/regionen/${kanton.slug}`}
                className="text-ink underline decoration-stone underline-offset-4 hover:decoration-ink"
              >
                Kanton {kanton.name}
              </Link>
              .
            </p>
          )}

          <FragenAntworten fragen={projekt.fragen} titel="Fragen zu diesem Projekttyp" />
        </div>
      </div>

      {/* Abschluss-CTA bewusst ausserhalb der zweispaltigen Ansicht, auf
          voller Breite — anders als der übrige Text, der in der schmalen
          Sticky-Spalte steht. Derselbe Baustein wie auf allen anderen Seiten,
          damit der Seitenabschluss überall gleich aussieht: vorher stand hier
          eine handgebaute Kopie ohne Fläche und mit abweichender Schriftgrösse. */}
      <div className="mt-24 md:mt-32">
        <VorhabenCta variante="projektDetail" />
      </div>

      <WeitereProjekte projekte={weitere} />
    </>
  );
}
