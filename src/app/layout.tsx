import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/cookies/CookieBanner';
import GoogleAnalytics from '@/components/cookies/GoogleAnalytics';
import MarketingPixel from '@/components/cookies/MarketingPixel';
import { firma } from '@/data/firma';
import { team } from '@/data/team';
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
  metadataBase: new URL('https://www.atelier-aa.ch'),
  title: {
    default: 'Atelier AA Architekten | Neubau, Umbau & Generalplanung Zürich, Aargau, Zug',
    template: '%s | Atelier AA Architekten',
  },
  description:
    'Atelier AA Architekten GmbH in Obfelden plant und realisiert Einfamilienhäuser, Mehrfamilienhäuser und Wohnüberbauungen in Zürich, Aargau und Zug — von der Machbarkeitsstudie über Baugesuch und Ausführungsplanung bis zur Bauleitung.',
  keywords: [
    'Architektur',
    'Architekten',
    'Obfelden',
    'Schweiz',
    'Wohnbau',
    'Mehrfamilienhaus',
    'Atelier AA Architekten',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    siteName: 'Atelier AA Architekten',
  },
  // Signet aus dem alten WordPress (dort als site_icon hinterlegt).
  icons: {
    icon: '/favicon-32.png',
    apple: '/apple-touch-icon.png',
  },
  // Kanonische Adresse je Seite: verhindert, dass Varianten derselben Seite als
  // Dubletten gewertet werden und die Sichtbarkeit aufteilen.
  alternates: {
    canonical: '/',
  },
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

/**
 * Strukturierte Firmendaten für Suchmaschinen und KI-Systeme.
 *
 * `ArchitecturalService` ist der spezifische schema.org-Typ für
 * Architekturbüros und ordnet die Seite eindeutig einer Branche, einem Ort und
 * einem Leistungsangebot zu. Genau diese Angaben braucht ein Sprachmodell, um
 * bei Fragen wie "Architekt in Obfelden" die Firma nennen zu können.
 */
const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ArchitecturalService',
  '@id': 'https://www.atelier-aa.ch/#organisation',
  name: firma.name,
  url: 'https://www.atelier-aa.ch',
  logo: 'https://www.atelier-aa.ch/images/logo/atelier-aa-signet-512.png',
  telephone: firma.telefon,
  email: firma.email,
  foundingDate: firma.gruendung,
  vatID: firma.uid,
  address: {
    '@type': 'PostalAddress',
    streetAddress: firma.strasse,
    postalCode: firma.plz,
    addressLocality: firma.ort,
    addressRegion: 'ZH',
    addressCountry: 'CH',
  },
  // Gemeinde-Koordinaten von Obfelden, nicht vermessen — für die Genauigkeit,
  // die dieses Markup braucht, reicht das; eine Adress-genaue Vermessung
  // würde keinen echten Zusatznutzen bringen.
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.2775,
    longitude: 8.4372,
  },
  areaServed: { '@type': 'Country', name: 'Schweiz' },
  knowsLanguage: ['de-CH'],
  founder: { '@type': 'Person', name: firma.vertretungsberechtigt },
  employee: team.map((m) => ({
    '@id': `https://www.atelier-aa.ch/ueber-uns/${m.slug}#person`,
  })),
  description:
    'Atelier AA Architekten GmbH in Obfelden plant und realisiert Wohn- und Gewerbebauten in der Schweiz. Leistungen: Architektur, Umbau und Sanierung, Projektentwicklung und Bauleitung.',
  makesOffer: [
    'Architektur und Entwurf',
    'Umbau und Sanierung',
    'Projektentwicklung',
    'Bauleitung',
  ].map((name) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
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
