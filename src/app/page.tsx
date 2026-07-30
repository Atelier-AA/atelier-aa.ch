import type { Metadata } from 'next';
import HeroSlider from '@/components/home/HeroSlider';
import IntroSection from '@/components/home/IntroSection';
import LeistungenSection from '@/components/home/LeistungenSection';
import ReferenzenSection from '@/components/home/ReferenzenSection';
import UeberUnsSection from '@/components/home/UeberUnsSection';
import InsightsSection from '@/components/home/InsightsSection';
import KontaktSection from '@/components/home/KontaktSection';

export const metadata: Metadata = {
  description:
    'Atelier AA Architekten GmbH aus Obfelden: Architektur, Umbau und Verdichtung in der ganzen Schweiz. Mehrfamilienhäuser, Sanierungen und Projektentwicklung — von der Machbarkeitsstudie bis zur Schlüsselübergabe.',
  alternates: { canonical: '/' },
};

/**
 * Startseite.
 *
 * Ablauf, Einsatzgebiet und Partner haben eigene Unterseiten und wiederholen
 * sich hier nicht. Über uns und Kontakt sind mit knappen, eigens gestalteten
 * Abschnitten vertreten — jede Hauptseite hat damit eine Entsprechung auf
 * der Startseite.
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
      <KontaktSection />
    </>
  );
}
