import type { Metadata } from 'next';
import HeroSlider from '@/components/home/HeroSlider';
import IntroSection from '@/components/home/IntroSection';
import KompetenzenReferenzenSection from '@/components/home/KompetenzenReferenzenSection';
import UeberUnsSection from '@/components/home/UeberUnsSection';
import InsightsSection from '@/components/home/InsightsSection';
import AbschlussSection from '@/components/home/AbschlussSection';

export const metadata: Metadata = { robots: { index: false, follow: false } };

const BREITE = 'max-w-[1600px]';

/**
 * Vorschau: dieselbe Startseite, aber mit 1600px statt 1440px Breite —
 * inklusive Header und Footer, die auf genau dieser Route (per usePathname
 * in Header.tsx/Footer.tsx) ebenfalls auf 1600px wechseln, damit alles
 * zusammen einheitlich wirkt. Auf der echten Startseite bleibt alles
 * unverändert bei 1440px.
 */
export default function VorschauStartseiteBreit() {
  return (
    <>
      <div className="relative z-20 bg-white px-6 py-3 text-center text-sm text-ink">
        Vorschau — Startseite (inkl. Header/Footer) bei 1600px statt 1440px
      </div>
      <HeroSlider />
      <IntroSection maxWidth={BREITE} />
      <KompetenzenReferenzenSection maxWidth={BREITE} />
      <UeberUnsSection maxWidth={BREITE} />
      <InsightsSection maxWidth={BREITE} />
      <AbschlussSection maxWidth={BREITE} />
    </>
  );
}
