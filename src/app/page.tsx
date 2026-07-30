import type { Metadata } from 'next';
import HeroSlider from '@/components/home/HeroSlider';
import IntroSection from '@/components/home/IntroSection';
import KompetenzenReferenzenSection from '@/components/home/KompetenzenReferenzenSection';
import UeberUnsSection from '@/components/home/UeberUnsSection';
import InsightsSection from '@/components/home/InsightsSection';
import AbschlussSection from '@/components/home/AbschlussSection';

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
 * Abschnitt vertreten. Am Ende steht ein eigens gestalteter Kontakt-Aufruf
 * (Statement-Satz, Kontakt-Button und ein dezenter Weg zurück zu den
 * Projekten) statt eines dunkel hinterlegten Blocks.
 */
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <IntroSection />
      <KompetenzenReferenzenSection />
      <UeberUnsSection />
      <InsightsSection />
      <AbschlussSection />
    </>
  );
}
