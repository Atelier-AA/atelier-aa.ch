import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elindo Immobilien – Exklusive Immobilien. Persönlich vermittelt.',
  description:
    'Ihr Partner für hochwertige Immobilien und Projektentwicklungen in der Schweiz. Über 15 Jahre Erfahrung im Immobilienmarkt.',
  keywords: ['Immobilien', 'Zürich', 'Schweiz', 'Makler', 'Kaufen', 'Verkaufen', 'Elindo'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="pt-20">{children}</body>
    </html>
  );
}
