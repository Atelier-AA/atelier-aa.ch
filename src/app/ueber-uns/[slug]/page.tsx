import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import TeamMember from '@/components/ueber-uns/TeamMember';
import { team, getTeamMember } from '@/data/team';
import { firma } from '@/data/firma';
import { breadcrumbSchema } from '@/lib/schema';
import { kurzbeschreibung } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = getTeamMember(slug);

  if (!person) return { title: 'Person nicht gefunden' };

  return {
    title: `${person.name}, ${person.rolle}`,
    description: kurzbeschreibung(
      `${person.name}, ${person.rolle} bei Atelier AA Architekten in Obfelden. Schwerpunkte: ${person.schwerpunkte.join(', ')}.`
    ),
    alternates: { canonical: `/ueber-uns/${person.slug}` },
    openGraph: {
      type: 'profile',
      title: `${person.name}, ${person.rolle}`,
      description: person.kurz,
      images: [person.bild],
    },
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const person = getTeamMember(slug);

  if (!person) notFound();

  const weitere = team.filter((m) => m.slug !== slug);

  // Person-Markup, verknüpft mit der Organisation aus dem Layout. Damit ordnen
  // Suchmaschinen und KI-Systeme die Person dem Büro und ihren Fachgebieten zu.
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://atelier-aa.ch/ueber-uns/${person.slug}#person`,
    name: person.name,
    jobTitle: person.rolle,
    image: `https://atelier-aa.ch${person.bild}`,
    description: person.kurz,
    knowsAbout: person.schwerpunkte,
    worksFor: { '@id': 'https://atelier-aa.ch/#organisation' },
    ...(person.email ? { email: person.email } : {}),
  };

  const breadcrumb = breadcrumbSchema([
    { name: 'Startseite', pfad: '/' },
    { name: 'Büro', pfad: '/ueber-uns' },
    { name: 'Team', pfad: '/ueber-uns/team' },
    { name: person.name, pfad: `/ueber-uns/${person.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="pt-32 md:pt-40">
        <Container>
          <Link
            href="/ueber-uns/team"
            className="text-xs uppercase tracking-widest text-stone transition-colors hover:text-ink"
          >
            Team
          </Link>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
            <div className="relative aspect-[3/4] overflow-hidden bg-mist">
              <Image
                src={person.bild}
                alt={person.bildAlt ?? `Porträt von ${person.name}, ${person.rolle} bei Atelier AA Architekten`}
                fill
                priority
                className="object-cover"
                style={person.bildPosition ? { objectPosition: person.bildPosition } : undefined}
                sizes="(max-width: 1100px) 100vw, 380px"
              />
            </div>

            <div>
              <h1 className="text-h1 font-medium leading-tight text-ink">
                {person.name}
              </h1>
              <p className="mt-3 text-lg text-stone">{person.rolle}</p>

              <p className="mt-8 text-lg text-graphite leading-relaxed">
                {person.kurz}
              </p>

              <div className="mt-10 space-y-5 text-graphite leading-relaxed">
                {person.absaetze.map((a) => (
                  <p key={a.slice(0, 40)}>{a}</p>
                ))}
              </div>

              <div className="mt-12 border-t border-mist pt-8">
                <h2 className="text-xs uppercase tracking-widest text-stone mb-5">
                  Schwerpunkte
                </h2>
                <ul className="space-y-2 text-ink">
                  {person.schwerpunkte.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 border-t border-mist pt-8">
                <h2 className="text-xs uppercase tracking-widest text-stone mb-5">
                  Kontakt
                </h2>
                <p className="text-ink">
                  <a
                    href={`mailto:${person.email ?? firma.email}`}
                    className="transition-colors hover:text-graphite"
                  >
                    {person.email ?? firma.email}
                  </a>
                  <br />
                  <a
                    href={`tel:${firma.telefonHref}`}
                    className="transition-colors hover:text-graphite"
                  >
                    {firma.telefon}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Haltung/editorial-Text steht jetzt auf /ueber-uns (Büro-Seite),
              nicht mehr hier — sonst stand derselbe Text an zwei Stellen. */}

          <section className="mt-20 border-t border-mist pt-16 pb-20 md:mt-28 md:pb-28">
            <h2 className="text-xs uppercase tracking-widest text-stone mb-12">
              Weitere Teammitglieder
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {weitere.map((m) => (
                <TeamMember key={m.slug} member={m} />
              ))}
            </div>
            <div className="mt-16">
              <Button href="/kontakt" variant="text">
                Kontaktieren Sie uns
              </Button>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}
