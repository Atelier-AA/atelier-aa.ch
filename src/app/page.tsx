import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import HeroSlider from '@/components/home/HeroSlider';
import IntroSection from '@/components/home/IntroSection';
import LeistungenSection from '@/components/home/LeistungenSection';
import ReferenzenSection from '@/components/home/ReferenzenSection';
import AblaufSection from '@/components/home/AblaufSection';
import RegionenSection from '@/components/home/RegionenSection';
import InsightsSection from '@/components/home/InsightsSection';
import PartnerSection from '@/components/home/PartnerSection';
import KontaktSection from '@/components/home/KontaktSection';
import FragenAntworten from '@/components/insights/FragenAntworten';
import { startseiteFragen } from '@/data/startseite';

export const metadata: Metadata = {
  description:
    'Atelier AA Architekten GmbH aus Obfelden: Architektur, Umbau und Verdichtung in den Kantonen Zürich, Aargau und Zug. Mehrfamilienhäuser, Sanierungen und Projektentwicklung — von der Machbarkeitsstudie bis zur Schlüsselübergabe.',
  alternates: { canonical: '/' },
};

/**
 * Startseite.
 *
 * Die Abschnittsfolge ist auf zwei Leserichtungen ausgelegt: Menschen, die
 * scrollen (Bild, Haltung, Leistungen, Referenzen, Ablauf, Region, Fachbeiträge,
 * Partner, Kontakt) — und Maschinen, die den Text auswerten und dabei
 * Leistungen, Ortsnamen und Antworten auf konkrete Fragen finden sollen.
 */
export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.atelier-aa.ch/#faq',
    inLanguage: 'de-CH',
    mainEntity: startseiteFragen.map((f) => ({
      '@type': 'Question',
      name: f.frage,
      acceptedAnswer: { '@type': 'Answer', text: f.antwort },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSlider />
      <IntroSection />
      <LeistungenSection />
      <ReferenzenSection />
      <AblaufSection />
      <RegionenSection />
      <InsightsSection />
      <PartnerSection />

      <Container>
        <div className="max-w-3xl">
          <FragenAntworten fragen={startseiteFragen} titel="Häufige Fragen" />
        </div>
      </Container>

      <KontaktSection />
    </>
  );
}
