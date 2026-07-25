import type { MetadataRoute } from 'next';

/**
 * robots.txt.
 *
 * Alle Inhalte sind für Suchmaschinen und KI-Crawler freigegeben — inklusive
 * Google-Extended (Gemini und AI Overviews), das Google separat vom normalen
 * Googlebot auswertet. Ohne diese Freigabe können Antworten in Gemini die Seite
 * nicht als Quelle nutzen.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: 'https://www.atelier-aa.ch/sitemap.xml',
    host: 'https://www.atelier-aa.ch',
  };
}
