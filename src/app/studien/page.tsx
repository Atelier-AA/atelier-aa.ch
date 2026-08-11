import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import StudienGrid from '@/components/studien/StudienGrid';
import { studien } from '@/data/studien';

export const metadata: Metadata = {
  title: 'Studien',
  description:
    'Machbarkeitsstudien, Konzeptstudien und Wettbewerbsbeiträge von Atelier AA Architekten GmbH — Vorabklärungen, bevor aus einem Grundstück ein Bauprojekt wird.',
  alternates: { canonical: '/studien' },
};

export default function StudienPage() {
  return (
    <div className="pt-32 md:pt-40">
      <Container>
        <div className="max-w-3xl mb-10 md:mb-16">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Vorabklärungen</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-ink leading-tight">
            Studien, die den <span className="font-semibold">Anfang</span> zeigen.
          </h1>
          <p className="mt-6 text-lg text-graphite leading-relaxed">
            Machbarkeitsstudien, Konzeptstudien und Wettbewerbsbeiträge — die Grundlage, bevor
            aus einem Grundstück ein konkretes Bauprojekt wird. Getrennt von den realisierten
            Referenzen, aber genauso Ausdruck unserer Ortskenntnis.
          </p>
        </div>

        <StudienGrid studien={studien.slice(0, 21)} />

        <div className="mt-24 border-t border-mist pt-16 pb-20 md:mt-32 md:pb-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Nächster Schritt</p>
            <h2 className="mb-6 text-4xl font-normal leading-tight text-ink md:text-5xl">
              Fragen Sie sich, ob auf Ihrem <span className="font-semibold">Grundstück</span> mehr
              möglich wäre?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-graphite">
              Wir prüfen in einer Machbarkeitsstudie, was auf Ihrem Grundstück möglich ist — mit
              Volumenstudie und Kostenrahmen.
            </p>
            <Button href="/kontakt" variant="text">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
