import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
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
  };
}

export default async function KleinprojektDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projekt = getKleinprojekt(slug);
  if (!projekt) notFound();

  const titel = projekt.strasse ? `${projekt.ort}, ${projekt.strasse}` : projekt.ort;

  const breadcrumb = breadcrumbSchema([
    { name: 'Startseite', pfad: '/' },
    { name: 'Kleinprojekte', pfad: '/kleinprojekte' },
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
            <h1 className="mb-8 text-4xl font-normal leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
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
      </Container>
    </div>
  );
}
