import type { MetadataRoute } from 'next';
import { projekte } from '@/data/projekte';
import { insights } from '@/data/insights';
import { team } from '@/data/team';
import { studien } from '@/data/studien';
import { kleinprojekte } from '@/data/kleinprojekte';
import { alleKantone, orteInKanton } from '@/lib/regionen';

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
    { pfad: '/studien', prio: 0.7, freq: 'monthly' as const },
    { pfad: '/kleinprojekte', prio: 0.5, freq: 'monthly' as const },
    { pfad: '/leistungen', prio: 0.8, freq: 'monthly' as const },
    { pfad: '/leistungen/machbarkeitsstudie', prio: 0.7, freq: 'monthly' as const },
    { pfad: '/leistungen/projektentwicklung', prio: 0.7, freq: 'monthly' as const },
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
    ...team.map((m) => ({
      url: `${BASIS}/ueber-uns/${m.slug}`,
      lastModified: heute,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
    ...studien.map((s) => ({
      url: `${BASIS}/studien/${s.slug}`,
      lastModified: heute,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
    // Fotos der Kleinprojekte erscheinen bewusst nicht auf der Website selbst
    // (siehe KleinprojektCard.tsx), sind aber über die Bilder-Erweiterung der
    // Sitemap für Google Bilder & KI-Crawler weiterhin auffindbar.
    ...kleinprojekte.map((k) => ({
      url: `${BASIS}/kleinprojekte/${k.slug}`,
      lastModified: heute,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
      images: k.bilder.map((b) => `${BASIS}${b}`),
    })),
    ...alleKantone().flatMap((k) => [
      {
        url: `${BASIS}/regionen/${k.slug}`,
        lastModified: heute,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      },
      ...orteInKanton(k.kuerzel).map((o) => ({
        url: `${BASIS}/regionen/${k.slug}/${o.slug}`,
        lastModified: heute,
        changeFrequency: 'yearly' as const,
        priority: 0.6,
      })),
    ]),
  ];
}
