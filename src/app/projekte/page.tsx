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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-ink leading-tight">
            Orte mit <span className="font-semibold">Bestand.</span>
          </h1>
          <p className="mt-6 text-lg text-graphite leading-relaxed">
            {projekte.length} realisierte Projekte — Neubau, Umbau und
            Verdichtung, in der ganzen Schweiz. Jedes davon beginnt mit dem
            Zuhören und endet mit einem Ort, der Bestand hat.
          </p>
        </div>

        <ProjekteFilter projekte={projekte} />
      </Container>

      <WeiterLink
        text="Hinter jedem Projekt steht unser Team."
        href="/ueber-uns"
        linkText="Über uns"
      />
    </div>
  );
}
