import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/cookies/CookieBanner';
import GoogleAnalytics from '@/components/cookies/GoogleAnalytics';
import MarketingPixel from '@/components/cookies/MarketingPixel';
import { firma } from '@/data/firma';
import { team } from '@/data/team';
import { organisationSchema } from '@/lib/schema';
import './globals.css';

// Inter als Variable Font — wie im alten WordPress-Theme, das
// `fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap`
// eingebunden hat. Ohne `weight` liefert next/font die Variable-Achse aus, statt
// einzelne statische Schnitte.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://atelier-aa.ch'),
  title: {
    default: 'Atelier AA Architekten | Zürich, Aargau, Zug',
    template: '%s | Atelier AA Architekten',
  },
  description:
    'Atelier AA Architekten GmbH aus Obfelden plant und realisiert Wohnbauten in Zürich, Aargau und Zug, von der Machbarkeitsstudie bis zur Bauleitung.',
  /*
   * Bestätigung für die Google Search Console. Google akzeptiert zwei Wege:
   * dieses Meta-Element im HTML oder einen TXT-Eintrag im DNS. Das Element
   * hier deckt die Eigenschaft "URL-Präfix" ab und muss stehen bleiben —
   * Google prüft es regelmässig nach, nicht nur einmal.
   */
  verification: {
    google: 'WTHRvG73rntQ64LxInu_fcHSdYIdXlXqRAM44eO6hzA',
  },
  keywords: [
    'Architektur',
    'Architekten',
    'Obfelden',
    'Schweiz',
    'Wohnbau',
    'Mehrfamilienhaus',
    'Atelier AA Architekten',
  ],
  // Fallback-Vorschaubild für Seiten ohne eigenes openGraph-Bild (z. B.
  // /leistungen, /projekte, /kontakt) — ohne das bleibt die Linkvorschau in
  // WhatsApp/LinkedIn/Facebook leer, wenn eine Seite kein eigenes Bild setzt.
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    siteName: 'Atelier AA Architekten',
    images: [
      {
        url: '/images/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-hero.jpg',
        width: 2400,
        height: 1340,
        alt: 'Atelier AA Architekten',
      },
    ],
  },
  /*
   * Nur Kartenform und Ersatzbild global. Titel und Beschreibung standen
   * hier fest und wurden von keiner Unterseite überschrieben — geteilte
   * Projekt- und Journalseiten zeigten deshalb alle denselben Text statt
   * ihres eigenen. Ohne diese zwei Felder greift X auf die Angaben aus
   * openGraph zurück, und die setzt jede Seite selbst.
   */
  twitter: {
    card: 'summary_large_image',
    images: ['/images/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-hero.jpg'],
  },
  // Signet aus dem alten WordPress (dort als site_icon hinterlegt).
  icons: {
    icon: '/favicon-32.png',
    apple: '/apple-touch-icon.png',
  },
  // Kanonische Adresse je Seite: verhindert, dass Varianten derselben Seite als
  // Dubletten gewertet werden und die Sichtbarkeit aufteilen.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema(firma, team)) }}
        />
          <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
          <Footer />
          <GoogleAnalytics />
          <MarketingPixel />
          <CookieBanner />
      </body>
    </html>
  );
}
