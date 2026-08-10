import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektGrid from '@/components/projekte/ProjektGrid';
import StudienGrid from '@/components/studien/StudienGrid';
import { alleKantone, getKantonBySlug, orteInKanton } from '@/lib/regionen';
import { breadcrumbSchema } from '@/lib/schema';

interface PageProps {
  params: Promise<{ kanton: string }>;
}

export function generateStaticParams() {
  return alleKantone().map((k) => ({ kanton: k.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { kanton: kantonSlug } = await params;
  const kanton = getKantonBySlug(kantonSlug);
  if (!kanton) return { title: 'Seite nicht gefunden' };

  const anzahl = kanton.projekte.length;
  return {
    title: `Architekt im Kanton ${kanton.name}`,
    description: `Atelier AA Architekten GmbH: ${anzahl} realisierte oder projektierte Bauvorhaben im Kanton ${kanton.name} — Neubau, Umbau und Verdichtung.`,
    alternates: { canonical: `/regionen/${kanton.slug}` },
  };
}

export default async function KantonPage({ params }: PageProps) {
  const { kanton: kantonSlug } = await params;
  const kanton = getKantonBySlug(kantonSlug);
  if (!kanton) notFound();

  const orte = orteInKanton(kanton.kuerzel);

  const breadcrumb = breadcrumbSchema([
    { name: 'Startseite', pfad: '/' },
    { name: `Kanton ${kanton.name}`, pfad: `/regionen/${kanton.slug}` },
  ]);

  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Container>
        <div className="mb-16 max-w-3xl md:mb-24">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">Einsatzgebiet</p>
          <h1 className="text-4xl font-normal leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
            Architekt im{' '}
            <span className="font-semibold">Kanton {kanton.name}</span>
          </h1>
          <p className="mt-10 text-lg leading-relaxed text-graphite md:text-xl">
            {kanton.projekte.length > 0 ? (
              <>
                Im Kanton {kanton.name} haben wir {kanton.projekte.length} realisierte oder
                projektierte Bauvorhaben{kanton.studien.length > 0 && ' sowie zahlreiche Machbarkeits- und Konzeptstudien'} in{' '}
                {orte.length === 1 ? 'dieser Gemeinde' : `insgesamt ${orte.length} Gemeinden`}{' '}
                bearbeitet: {orte.map((o) => o.ort).join(', ')}.
              </>
            ) : (
              <>
                Im Kanton {kanton.name} haben wir Machbarkeitsstudien durchgeführt — in{' '}
                {orte.length === 1 ? 'dieser Gemeinde' : `${orte.length} Gemeinden`}:{' '}
                {orte.map((o) => o.ort).join(', ')}.
              </>
            )}
          </p>
        </div>

        {kanton.projekte.length > 0 && (
          <div className="mb-16 md:mb-24">
            <ProjektGrid projekte={kanton.projekte} />
          </div>
        )}

        {kanton.studien.length > 0 && (
          <div className="mb-16 md:mb-24">
            <h2 className="mb-8 text-xs uppercase tracking-widest text-stone">
              Machbarkeitsstudien im Kanton {kanton.name}
            </h2>
            <StudienGrid studien={kanton.studien} />
          </div>
        )}

        <div className="max-w-3xl border-t border-mist pt-12">
          <h2 className="mb-6 text-xs uppercase tracking-widest text-stone">
            Gemeinden im Kanton {kanton.name}
          </h2>
          <ul className="flex flex-wrap gap-x-3 gap-y-2">
            {orte.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/regionen/${kanton.slug}/${o.slug}`}
                  className="inline-block rounded-full border border-mist px-4 py-2 text-sm text-ink transition-colors hover:border-ink"
                >
                  {o.ort}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 max-w-3xl border-t border-mist pt-16 md:mt-20">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">
            Nächster Schritt
          </p>
          <h2 className="mb-6 max-w-[18ch] text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
            Sie bauen im Kanton {kanton.name}?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-graphite">
            Sprechen Sie mit uns über Ihr Vorhaben — wir kennen die Bauordnungen und
            Abläufe in der Region.
          </p>
          <Button href="/kontakt" variant="text">
            Kontakt aufnehmen
          </Button>
        </div>
      </Container>
    </div>
  );
}
