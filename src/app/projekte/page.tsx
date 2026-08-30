import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import WeitereArbeiten from '@/components/kleinprojekte/WeitereArbeiten';
import VorhabenCta from '@/components/ui/VorhabenCta';
import ProjekteFilter from '@/components/projekte/ProjekteFilter';
import { projekte } from '@/data/projekte';

export const metadata: Metadata = {
  title: 'Projekte',
  description:
    'Referenzprojekte von Atelier AA Architekten GmbH aus Obfelden ZH: Mehrfamilienhäuser in Untersiggenthal, Adliswil, Künten und Glashütten. Wohnbau, Umbau und Sanierung in der ganzen Schweiz.',
  alternates: { canonical: '/projekte' },
};

export default function ProjektePage() {
  return (
    <div className="pt-32 md:pt-40">
      <Container>
        <div className="max-w-3xl mb-10 md:mb-16">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">
            Referenzen
          </p>
          {/* "Bestand" bleibt dem Hauptclaim vorbehalten, deshalb hier eine
              andere Aussage, die zur Haltung "keine Architektur nach Schema"
              passt. */}
          <h1 className="text-h1 text-ink">
            Jede <span className="font-semibold">Aufgabe</span> verlangt eine
            eigene <span className="font-semibold">Antwort.</span>
          </h1>
          <p className="mt-6 max-w-lesbar text-lg text-graphite leading-relaxed">
            Von der ersten Skizze bis zur präzisen Umsetzung, jedes Projekt
            ist Ausdruck seines Ortes und seiner Nutzenden. Die folgende
            Auswahl zeigt einen Ausschnitt unserer Arbeit für Bauherrschaften
            in der ganzen Schweiz.
          </p>
        </div>

        <ProjekteFilter projekte={projekte} />
      </Container>

      {/* Die kleineren Aufträge stehen hier statt auf einer eigenen Seite:
          ebenfalls ausgeführte Arbeiten, nur kleiner im Umfang. */}
      <Container className="mt-20 md:mt-28">
        <WeitereArbeiten />
      </Container>

      <div className="mt-24 md:mt-32">
        <VorhabenCta />
      </div>
    </div>
  );
}
