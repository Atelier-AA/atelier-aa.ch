import type { MetadataRoute } from 'next';
import { projekte } from '@/data/projekte';
import { insights } from '@/data/insights';

const BASIS = 'https://www.atelier-aa.ch';

/**
 * Sitemap für Suchmaschinen und KI-Crawler.
 *
 * Next.js liefert daraus /sitemap.xml. Die Prioritäten spiegeln, was für
 * Auftragsanfragen zählt: Startseite und Projekte zuerst, dann die
 * inhaltstragenden Seiten, rechtliche Seiten zuletzt.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const heute = new Date();

  const statisch = [
    { pfad: '', prio: 1.0, freq: 'monthly' as const },
    { pfad: '/projekte', prio: 0.9, freq: 'monthly' as const },
    { pfad: '/expertise', prio: 0.8, freq: 'monthly' as const },
    { pfad: '/ueber-uns', prio: 0.8, freq: 'monthly' as const },
    { pfad: '/insights', prio: 0.8, freq: 'weekly' as const },
    { pfad: '/kontakt', prio: 0.7, freq: 'yearly' as const },
    { pfad: '/impressum', prio: 0.2, freq: 'yearly' as const },
    { pfad: '/datenschutzerklaerung', prio: 0.2, freq: 'yearly' as const },
  ];

  return [
    ...statisch.map((s) => ({
      url: `${BASIS}${s.pfad}`,
      lastModified: heute,
      changeFrequency: s.freq,
      priority: s.prio,
    })),
    ...projekte.map((p) => ({
      url: `${BASIS}/referenzen/${p.slug}`,
      lastModified: heute,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    ...insights.map((i) => ({
      url: `${BASIS}/insights/${i.slug}`,
      lastModified: new Date(i.datum),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
