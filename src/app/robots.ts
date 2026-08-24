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
      // /vorschau/* sind interne Entwurfsseiten, nirgends verlinkt, aber ohne
      // diese Regel technisch crawlbar.
      { userAgent: '*', allow: '/', disallow: '/vorschau/' },
      { userAgent: 'Googlebot', allow: '/', disallow: '/vorschau/' },
      { userAgent: 'Google-Extended', allow: '/', disallow: '/vorschau/' },
    ],
    sitemap: 'https://www.atelier-aa.ch/sitemap.xml',
    host: 'https://www.atelier-aa.ch',
  };
}
