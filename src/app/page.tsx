import type { Metadata } from 'next';
import HeroSlider from '@/components/home/HeroSlider';
import IntroSection from '@/components/home/IntroSection';
import KompetenzenReferenzenSection from '@/components/home/KompetenzenReferenzenSection';
import UeberUnsSection from '@/components/home/UeberUnsSection';
import InsightsSection from '@/components/home/InsightsSection';
import AbschlussSection from '@/components/home/AbschlussSection';

export const metadata: Metadata = {
  description:
    'Atelier AA Architekten GmbH aus Obfelden plant Architektur, Umbau und Verdichtung mit Schwerpunkt Zürich, Aargau und Zug, auf Anfrage in der ganzen Schweiz. Wir realisieren Mehrfamilienhäuser, Sanierungen und Projektentwicklung von der Machbarkeitsstudie bis zur Schlüsselübergabe.',
  alternates: { canonical: '/' },
};

/**
 * Startseite.
 *
 * Bewusst kompakt gehalten: Ablauf steht jetzt bei den Kompetenzen auf
 * /leistungen (passt dort inhaltlich näher hin), und die fünf Eigenschaften
 * aus der früheren eigenen "Haltung"-Sektion stehen jetzt kompakt innerhalb
 * von UeberUnsSection — sonst standen drei fast gleich schwere
 * "Wir sind gut"-Blöcke direkt hintereinander. Einsatzgebiet und Partner
 * haben weiterhin eigene Unterseiten und wiederholen sich hier nicht. Am
 * Ende steht ein eigens gestalteter Kontakt-Aufruf statt eines dunkel
 * hinterlegten Blocks.
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
