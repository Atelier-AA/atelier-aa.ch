import type { Metadata } from 'next';
import KleinprojekteGrid from '@/components/kleinprojekte/KleinprojekteGrid';
import { kleinprojekte } from '@/data/kleinprojekte';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Kleinprojekte',
  description:
    'Kleinere realisierte Umbauten und Sanierungen von Atelier AA Architekten GmbH — abseits der grossen Referenzprojekte.',
  alternates: { canonical: '/kleinprojekte' },
};

export default function KleinprojektePage() {
  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <Container>
        <div className="max-w-3xl mb-10 md:mb-16">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Kleinere Arbeiten</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-ink leading-tight">
            Kleinprojekte, <span className="font-semibold">gebaut</span> und bewährt.
          </h1>
          <p className="mt-6 text-lg text-graphite leading-relaxed">
            Umbauten, Sanierungen und kleinere Aufträge — realisiert, aber nicht Teil unserer
            kuratierten Hauptprojekte. Genauso Ausdruck unserer Arbeit, nur im kleineren Massstab.
          </p>
        </div>

        <KleinprojekteGrid projekte={kleinprojekte} />
      </Container>
    </div>
  );
}
