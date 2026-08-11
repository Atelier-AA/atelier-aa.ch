import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import TeamGrid from '@/components/ueber-uns/TeamGrid';
import OffeneStellen from '@/components/ueber-uns/OffeneStellen';
import { team } from '@/data/team';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Das Team von Atelier AA Architekten GmbH in Obfelden ZH — geführt von Alisami Aljili.',
  alternates: { canonical: '/ueber-uns/team' },
};

/**
 * Reine Team-Seite, losgelöst von der Firmenphilosophie auf /ueber-uns.
 * Die Karriere-CTA (OffeneStellen) steht hier statt auf der Firmenseite,
 * weil sie sich an Menschen richtet, die zum Team dazustossen möchten.
 */
export default function TeamPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Startseite', pfad: '/' },
    { name: 'Über uns', pfad: '/ueber-uns' },
    { name: 'Team', pfad: '/ueber-uns/team' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="pt-32 md:pt-40">
        <Container>
          <p className="mb-10 text-xs uppercase tracking-widest text-stone">Team</p>
          <h1 className="mb-6 max-w-2xl text-4xl font-normal leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
            Die Menschen hinter{' '}
            <span className="font-semibold">Atelier AA Architekten.</span>
          </h1>
          <p className="mb-14 max-w-xl text-lg leading-relaxed text-graphite">
            Ein kleines, eingespieltes Team mit klaren Rollen — von der ersten
            Machbarkeitsstudie bis zur Bauleitung begleiten Sie dieselben
            Ansprechpersonen durch Ihr Projekt.
          </p>
          <TeamGrid members={team.slice(0, 2)} lgCols={3} />
          <div className="mt-8 md:mt-10">
            <TeamGrid members={team.slice(2)} lgCols={3} />
          </div>
        </Container>
      </div>

      <div className="mt-16 md:mt-20">
        <OffeneStellen />
      </div>
    </>
  );
}
