import type { Metadata } from 'next';
import HeroSlider from '@/components/home/HeroSlider';
import IntroSection from '@/components/home/IntroSection';
import LeistungenSection from '@/components/home/LeistungenSection';
import ReferenzenSection from '@/components/home/ReferenzenSection';
import UeberUnsSection from '@/components/home/UeberUnsSection';
import InsightsSection from '@/components/home/InsightsSection';
import WeiterLink from '@/components/ui/WeiterLink';

export const metadata: Metadata = {
  description:
    'Atelier AA Architekten GmbH aus Obfelden: Architektur, Umbau und Verdichtung in der ganzen Schweiz. Mehrfamilienhäuser, Sanierungen und Projektentwicklung — von der Machbarkeitsstudie bis zur Schlüsselübergabe.',
  alternates: { canonical: '/' },
};

/**
 * Startseite.
 *
 * Ablauf, Einsatzgebiet und Partner haben eigene Unterseiten und wiederholen
 * sich hier nicht. Über uns ist mit einem knappen, eigens gestalteten
 * Abschnitt vertreten. Statt eines eigenen, dunkel hinterlegten
 * Kontaktabschnitts führt die Seite am Ende dezent zu den Leistungen weiter
 * — Kontakt ist bereits direkt im Header erreichbar.
 */
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <IntroSection />
      <LeistungenSection />
      <ReferenzenSection />
      <UeberUnsSection />
      <InsightsSection />
      <WeiterLink
        text="Neubau, Umbau oder Verdichtung — sehen Sie, was wir dafür leisten."
        href="/leistungen"
        linkText="Leistungen ansehen"
      />
    </>
  );
}
