import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import KleinprojekteGrid from '@/components/kleinprojekte/KleinprojekteGrid';
import { kleinprojekte } from '@/data/kleinprojekte';
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
    <div>
      {/* Kopfbereich auf grauem Grund statt auf Weiss, mit einem Bild aus dem
          Büro rechts. Die Seite öffnete zuvor mit einem reinen Textblock auf
          weisser Fläche — Architektur kam erst darunter. */}
      <div className="bg-mist pt-32 pb-14 md:pt-40 md:pb-16">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone mb-4">
                Referenzen
              </p>
              {/* "Bestand" bleibt dem Hauptclaim vorbehalten, deshalb hier eine
                  andere Aussage, die zur Haltung "keine Architektur nach Schema"
                  passt. */}
              <h1 className="text-h1 font-normal text-ink leading-tight">
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
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/buero/atelier-aa-buero-1.jpg"
                alt="Arbeitsplatz im Büro von Atelier AA Architekten in Obfelden"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1100px) 100vw, 40vw"
              />
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-14 md:pt-16">
        <ProjekteFilter projekte={projekte} />
      </Container>

      {/* Kleinprojekte stehen hier statt auf einer eigenen Seite im Footer:
          Es sind ebenfalls ausgeführte Arbeiten, nur kleiner — und als reine
          Textliste gehören sie unter die Projekte, nicht daneben. */}
      <Container className="mt-20 md:mt-28">
        <div id="kleinprojekte" className="scroll-mt-32 border-t border-mist pt-12">
          <p className="mb-3 text-xs uppercase tracking-widest text-stone">Kleinprojekte</p>
          <p className="mb-10 max-w-lesbar text-graphite leading-relaxed">
            Umbauten, Anbauten und kleinere Aufträge, die wir neben den grösseren
            Projekten ausgeführt haben.
          </p>
          <KleinprojekteGrid projekte={kleinprojekte} />
        </div>
      </Container>

      <div className="mt-24 md:mt-32">
        <VorhabenCta />
      </div>
    </div>
  );
}
