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
    ];
  },
};

export default nextConfig;
