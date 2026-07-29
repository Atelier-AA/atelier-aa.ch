import type { Metadata } from 'next';
import HeroSlider from '@/components/home/HeroSlider';
import IntroSection from '@/components/home/IntroSection';
import LeistungenSection from '@/components/home/LeistungenSection';
import ReferenzenSection from '@/components/home/ReferenzenSection';
import InsightsSection from '@/components/home/InsightsSection';

export const metadata: Metadata = {
  description:
    'Atelier AA Architekten GmbH aus Obfelden: Architektur, Umbau und Verdichtung in der ganzen Schweiz. Mehrfamilienhäuser, Sanierungen und Projektentwicklung — von der Machbarkeitsstudie bis zur Schlüsselübergabe.',
  alternates: { canonical: '/' },
};

/**
 * Startseite.
 *
 * Ablauf, Einsatzgebiet, Partner, häufige Fragen und Kontakt stehen bereits
 * auf eigenen Unterseiten und wiederholen sich hier nicht mehr.
 */
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <IntroSection />
      <LeistungenSection />
      <ReferenzenSection />
      <InsightsSection />
    </>
  );
}
