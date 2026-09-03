import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import ProjektBilder from '@/components/projekte/ProjektBilder';
import { bildMasse } from '@/lib/bildmasse';
import { kleinprojekte, getKleinprojekt } from '@/data/kleinprojekte';
import { breadcrumbSchema } from '@/lib/schema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return kleinprojekte.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const projekt = getKleinprojekt(slug);
  if (!projekt) return { title: 'Seite nicht gefunden' };

  const titel = projekt.strasse ? `${projekt.ort}, ${projekt.strasse}` : projekt.ort;
  return {
    title: titel,
    description: `${projekt.gebaeudetyp} von Atelier AA Architekten GmbH in ${projekt.ort}.`,
    alternates: { canonical: `/kleinprojekte/${projekt.slug}` },
  };
}

export default async function KleinprojektDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projekt = getKleinprojekt(slug);
  if (!projekt) notFound();

  const titel = projekt.strasse ? `${projekt.ort}, ${projekt.strasse}` : projekt.ort;

  /*
   * Diese Seiten sind bewusst nirgends verlinkt und nur über Suchmaschinen
   * erreichbar. Wer hier landet, kam gezielt — und sah bisher 15 Wörter und
   * kein einziges Bild, obwohl die Aufnahmen im Datenbestand liegen. Die
   * Werkliste auf /projekte bleibt unverändert ohne Verweise.
   *
   * Pixelmasse zur Bauzeit lesen, wie bei den Referenzseiten, damit
   * `next/image` das Seitenverhältnis kennt und nichts springt.
   */
  const bilder = await Promise.all(
    (projekt.bilder ?? []).map(async (src, idx) => ({
      src,
      alt: `${projekt.gebaeudetyp}, ${titel}, Ansicht ${idx + 1}, Atelier AA Architekten`,
      ...(await bildMasse(src)),
    })),
  );

  const breadcrumb = breadcrumbSchema([
    { name: 'Startseite', pfad: '/' },
    { name: 'Werkliste', pfad: '/projekte#werkliste' },
    { name: titel, pfad: `/kleinprojekte/${projekt.slug}` },
  ]);

  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-stone">
              {projekt.jahr ?? 'Realisiert'}
            </p>
            <h1 className="mb-8 text-h2 font-normal leading-[1.1] tracking-tight text-ink md:text-h1">
              {titel}
            </h1>
            <p className="text-lg leading-relaxed text-graphite">{projekt.gebaeudetyp}</p>
          </div>

          <div className="flex flex-col justify-between">
            <dl className="grid grid-cols-1 gap-3">
              <div className="flex gap-4">
                <dt className="w-32 shrink-0 text-sm text-stone">Leistungen</dt>
                <dd className="text-sm text-ink">{projekt.leistungen.join(', ')}</dd>
              </div>
            </dl>
          </div>
        </div>

        {bilder.length > 0 && (
          <div className="mt-16 md:mt-24">
            <ProjektBilder bilder={bilder} />
          </div>
        )}
      </Container>
    </div>
  );
}
