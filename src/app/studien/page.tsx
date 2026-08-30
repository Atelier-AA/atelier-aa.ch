import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import VorhabenCta from '@/components/ui/VorhabenCta';
import StudienGrid from '@/components/studien/StudienGrid';
import { studien } from '@/data/studien';

export const metadata: Metadata = {
  title: 'Studien',
  description:
    'Machbarkeitsstudien, Konzeptstudien und Wettbewerbsbeiträge von Atelier AA Architekten GmbH: Vorabklärungen, bevor aus einem Grundstück ein Bauprojekt wird.',
  alternates: { canonical: '/studien' },
};

export default function StudienPage() {
  return (
    <div className="pt-32 md:pt-40">
      <Container>
        <div className="max-w-3xl mb-10 md:mb-16">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Vorabklärungen</p>
          <h1 className="text-h1 font-normal text-ink leading-tight">
            Studien, die den <span className="font-semibold">Anfang</span> zeigen.
          </h1>
          <p className="mt-6 text-lg text-graphite leading-relaxed">
            Machbarkeitsstudien, Konzeptstudien und Wettbewerbsbeiträge, die Grundlage, bevor
            aus einem Grundstück ein konkretes Bauprojekt wird. Getrennt von den realisierten
            Referenzen, aber genauso Ausdruck unserer Ortskenntnis.
          </p>
        </div>

        <StudienGrid studien={studien} />
      </Container>

      <div className="mt-24 md:mt-32">
        <VorhabenCta />
      </div>
    </div>
  );
}
