import type { MetadataRoute } from 'next';

/**
 * robots.txt.
 *
 * Alle Inhalte sind für Suchmaschinen und KI-Crawler freigegeben — inklusive
 * Google-Extended (Gemini und AI Overviews), das Google separat vom normalen
 * Googlebot auswertet. Ohne diese Freigabe können Antworten in Gemini die Seite
 * nicht als Quelle nutzen.
 */
const GESPERRT = ['/vorschau/', '/mailer', '/api/mailer'];

/** Fuer den statischen Export nach Hostpoint: ausdruecklich statisch.
 *  Auf Vercel aendert das nichts, dort ist die Route ohnehin statisch. */
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // /vorschau/* sind interne Entwurfsseiten, /mailer und /api/mailer der
      // interne Mailing-Bereich: nirgends verlinkt, aber ohne diese Regel
      // technisch crawlbar. Der Zugriffsschutz liegt nicht hier, sondern im
      // Anmeldelink — robots.txt hält nur die Suchmaschinen fern.
      { userAgent: '*', allow: '/', disallow: GESPERRT },
      { userAgent: 'Googlebot', allow: '/', disallow: GESPERRT },
      { userAgent: 'Google-Extended', allow: '/', disallow: GESPERRT },
    ],
    sitemap: 'https://atelier-aa.ch/sitemap.xml',
    host: 'https://atelier-aa.ch',
  };
}
