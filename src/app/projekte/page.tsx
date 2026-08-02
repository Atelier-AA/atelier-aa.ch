import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjekteFilter from '@/components/projekte/ProjekteFilter';
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
            <span className="font-semibold">Projekte</span>, die{' '}
            <span className="font-semibold">Bestand</span> haben.
          </h1>
          <p className="mt-6 text-lg text-graphite leading-relaxed">
            Von der ersten Skizze bis zur präzisen Umsetzung – jedes Projekt
            ist Ausdruck seines Ortes und seiner Nutzenden. Die folgende
            Auswahl zeigt einen Ausschnitt unserer Arbeit für Bauherrschaften
            in der ganzen Schweiz.
          </p>
        </div>

        <ProjekteFilter projekte={projekte} />

        {/* Abschluss im gleichen Stil wie der Einstieg oben: grosser,
            fett/normal gesetzter Titel, darunter normaler Fliesstext. */}
        <div className="mt-24 max-w-3xl border-t border-mist pt-16 md:mt-32">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">
            Nächster Schritt
          </p>
          <h2 className="mb-6 text-4xl font-normal leading-tight text-ink md:text-5xl">
            <span className="font-semibold">Architektur</span> mit{' '}
            <span className="font-semibold">Verantwortung</span>
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-graphite">
            Jedes Projekt beginnt mit dem Zuhören. Gemeinsam entwickeln wir
            Architektur, die Funktion, Gestaltung und Nachhaltigkeit
            verbindet – mit klarer Haltung und langfristigem Mehrwert.
            Erfahren Sie, welche Kompetenzen wir dafür anbieten – vom
            Vorprojekt bis zum Generalplaner-Mandat.
          </p>
          <Button href="/leistungen" variant="text">
            Kompetenzen ansehen
          </Button>
        </div>
      </Container>
    </div>
  );
}
