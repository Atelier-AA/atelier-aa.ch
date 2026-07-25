import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import ProjektHero from '@/components/projekte/ProjektHero';
import ProjektMeta from '@/components/projekte/ProjektMeta';
import ProjektGalerie from '@/components/projekte/ProjektGalerie';
import WeitereProjekte from '@/components/projekte/WeitereProjekte';
import { projekte, getProjekt, getWeitereProjekte } from '@/data/projekte';
import { ortMitKanton } from '@/lib/utils';

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

  return (
    <>
      <div className="pt-24 md:pt-28">
        <ProjektHero image={projekt.heroImage} alt={`${projekt.title}, ${ortMitKanton(projekt)}`} />

        <Container className="mt-16 md:mt-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-stone mb-4">
              Projekt
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

          <ProjektGalerie bilder={projekt.galerie} projektTitel={projekt.title} />
        </Container>
      </div>

      <WeitereProjekte projekte={weitere} />
    </>
  );
}
