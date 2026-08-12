import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Seite wurde von "Expertise" in "Leistungen" umbenannt — alte Links
      // und bereits indexierte Suchergebnisse sollen nicht ins Leere laufen.
      { source: '/expertise', destination: '/leistungen', permanent: true },
      // Team-Seite wurde wieder mit der Büro-Seite zusammengelegt.
      { source: '/ueber-uns/team', destination: '/ueber-uns', permanent: true },
    ];
  },
};

export default nextConfig;
