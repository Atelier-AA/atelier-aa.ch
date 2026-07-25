import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
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
    default: 'Atelier AA Architekten – Architektur mit bleibendem Wert',
    template: '%s | Atelier AA Architekten',
  },
  description:
    'Atelier AA Architekten GmbH in Obfelden. Wir planen und realisieren Architekturprojekte mit Sorgfalt, Weitsicht und einem klaren gestalterischen Anspruch.',
  keywords: [
    'Architektur',
    'Architekten',
    'Obfelden',
    'Schweiz',
    'Wohnbau',
    'Mehrfamilienhaus',
    'Atelier AA',
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
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
