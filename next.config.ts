import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Grundlegende Security-Header. Bewusst ohne Content-Security-Policy: Eine
  // CSP müsste jede externe Quelle (Google Analytics, Meta-Pixel, Google
  // Fonts, Vercel) einzeln freigeben und würde bei einem Fehler eher etwas
  // kaputt machen, als etwas zu schützen — dafür bräuchte es einen eigenen,
  // sorgfältig getesteten Anlauf.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Seite wurde von "Expertise" in "Leistungen" umbenannt — alte Links
      // und bereits indexierte Suchergebnisse sollen nicht ins Leere laufen.
      { source: '/expertise', destination: '/leistungen', permanent: true },
      // Altlast der früheren PHP-Website, bei Google noch indexiert.
      { source: '/indexxxx.php', destination: '/', permanent: true },
      // Die Studien-Übersicht ist in die Machbarkeitsstudie aufgegangen:
      // oben das Angebot, unten dieselben Studien als Beleg. Die 69
      // Detailseiten unter /studien/<slug> bleiben unverändert bestehen.
      { source: '/studien', destination: '/leistungen/machbarkeitsstudie', permanent: true },
      // Kleinprojekte stehen jetzt unten auf /projekte. Die 16 Detailseiten
      // unter /kleinprojekte/<slug> bleiben unverändert bestehen.
      { source: '/kleinprojekte', destination: '/projekte', permanent: true },
      // Der Slug schrieb "Riccarda" mit zwei c, der sichtbare Name auf der
      // Website war immer "Ricarda". Vor dem Launch korrigiert; die alte
      // Adresse leitet weiter, weil sie in bereits verschickten Links und in
      // Vercel-Vorschauen vorkommen kann.
      // Sieben Werkliste-Adressen enthielten den Familiennamen der
      // Bauherrschaft. Aus den sichtbaren Daten war er längst entfernt, in der
      // URL und in den Bilddateinamen stand er weiter — und damit auch in der
      // Sitemap. Ersetzt durch Strasse und Ort, was auf der Seite ohnehin
      // steht. Die alten Adressen leiten weiter, falls sie schon indexiert sind.
      {
        source: '/kleinprojekte/efh-bunjaku',
        destination: '/kleinprojekte/efh-fahrweidstrasse-weiningen',
        permanent: true,
      },
      {
        source: '/kleinprojekte/efh-alimi-othmarsingen',
        destination: '/kleinprojekte/efh-waldrueti-othmarsingen',
        permanent: true,
      },
      {
        source: '/kleinprojekte/pool-hug-florin',
        destination: '/kleinprojekte/pool-zug',
        permanent: true,
      },
      {
        source: '/kleinprojekte/efh-epstein-obfelden',
        destination: '/kleinprojekte/efh-fabrikstrasse-obfelden',
        permanent: true,
      },
      {
        source: '/kleinprojekte/mfh-einsele-wuerenlos',
        destination: '/kleinprojekte/mfh-weizenstrasse-wuerenlos',
        permanent: true,
      },
      {
        source: '/kleinprojekte/efh-leemann-obfelden',
        destination: '/kleinprojekte/efh-schuerweidestrasse-obfelden',
        permanent: true,
      },
      {
        source: '/kleinprojekte/umbau-efh-spoetl-zuerich',
        destination: '/kleinprojekte/umbau-efh-schneegloeggliweg-zuerich',
        permanent: true,
      },
      {
        source: '/ueber-uns/riccarda-tscharner',
        destination: '/ueber-uns/ricarda-tscharner',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
