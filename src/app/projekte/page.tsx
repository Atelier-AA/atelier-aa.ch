import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import ProjekteFilter from '@/components/projekte/ProjekteFilter';
import { projekte } from '@/data/projekte';
import Button from '@/components/ui/Button';

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
        </div>

        <ProjekteFilter projekte={projekte} />

        <div className="max-w-3xl mt-32 md:mt-40 py-16 border-t border-mist">
          {/* Abschnitt wörtlich von der alten Projektseite (Post 45). */}
          <h2 className="text-2xl md:text-3xl font-medium text-ink mb-6">
            Architektur mit Verantwortung
          </h2>
          <p className="text-graphite leading-relaxed mb-8">
            Jedes Projekt beginnt mit dem Zuhören. Gemeinsam entwickeln wir Architektur,
            die Funktion, Gestaltung und Nachhaltigkeit verbindet – mit klarer Haltung
            und langfristigem Mehrwert.
          </p>
          <Button href="/ueber-uns" variant="text">
            Mehr über uns
          </Button>
        </div>
      </Container>
    </div>
  );
}
