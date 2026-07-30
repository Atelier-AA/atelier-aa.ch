import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import ProjekteFilter from '@/components/projekte/ProjekteFilter';
import WeiterLink from '@/components/ui/WeiterLink';
import { projekte } from '@/data/projekte';

export const metadata: Metadata = {
  title: 'Projekte',
  description:
    'Referenzprojekte von Atelier AA Architekten GmbH aus Obfelden ZH: Mehrfamilienhäuser in Untersiggenthal, Adliswil, Künten und Glashütten. Wohnbau, Umbau und Sanierung in der ganzen Schweiz.',
};

export default function ProjektePage() {
  return (
    <div className="pt-32 md:pt-40">
      <Container>
        <div className="max-w-3xl mb-10 md:mb-16">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">
            Referenzen
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-ink leading-tight">
            Projekte
          </h1>
          {/* Erster Satz des alten Schlussabschnitts (Post 45), als Intro-Zeile
              vorgezogen — derselbe Ton wie der Hero-Satz der Startseite. */}
          <p className="mt-6 text-lg text-graphite leading-relaxed">
            Jedes Projekt beginnt mit dem Zuhören.
          </p>
        </div>

        <ProjekteFilter projekte={projekte} />
      </Container>

      <WeiterLink
        text="Wer hat diese Projekte realisiert?"
        href="/ueber-uns"
        linkText="Über uns"
      />
    </div>
  );
}
