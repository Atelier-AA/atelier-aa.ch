import type { MetadataRoute } from 'next';
import { projekte } from '@/data/projekte';
import { insights } from '@/data/insights';
import { team } from '@/data/team';
import { studien } from '@/data/studien';
import { kleinprojekte } from '@/data/kleinprojekte';
import { alleKantone, orteInKanton } from '@/lib/regionen';

const BASIS = 'https://atelier-aa.ch';

/**
 * Adressform. Der statische Export nach Hostpoint legt jede Seite als
 * <Pfad>/index.html ab; Apache liefert das nur unter <Pfad>/ aus. Damit die
 * Sitemap dieselbe Form nennt wie die Canonicals und nicht auf
 * Weiterleitungen zeigt, haengt sie dort einen Schraegstrich an.
 *
 * Auf Vercel bleibt die Variable leer und alles ist wie bisher.
 */
const SCHRAEG = process.env.NEXT_PUBLIC_SCHRAEGSTRICH === '1' ? '/' : '';

/** Adresse zusammensetzen, mit passender Adressform. */
function adr(pfad: string): string {
  if (pfad === '' || pfad === '/') return `${BASIS}/`;
  return `${BASIS}${pfad}${SCHRAEG}`;
}

/**
 * Sitemap für Suchmaschinen und KI-Crawler.
 *
 * Next.js liefert daraus /sitemap.xml. Die Prioritäten spiegeln, was für
 * Auftragsanfragen zählt: Startseite und Projekte zuerst, dann die
 * inhaltstragenden Seiten, rechtliche Seiten zuletzt.
 */
/** Fuer den statischen Export nach Hostpoint: ausdruecklich statisch.
 *  Auf Vercel aendert das nichts, dort ist die Route ohnehin statisch. */
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const heute = new Date();

  const statisch = [
    { pfad: '', prio: 1.0, freq: 'monthly' as const },
    { pfad: '/projekte', prio: 0.9, freq: 'monthly' as const },
    { pfad: '/leistungen', prio: 0.8, freq: 'monthly' as const },
    { pfad: '/leistungen/machbarkeitsstudie', prio: 0.7, freq: 'monthly' as const },
    { pfad: '/leistungen/projektentwicklung', prio: 0.7, freq: 'monthly' as const },
    { pfad: '/leistungen/integrierte-projektabwicklung', prio: 0.5, freq: 'monthly' as const },
    { pfad: '/ueber-uns', prio: 0.8, freq: 'monthly' as const },
    { pfad: '/ueber-uns/team', prio: 0.6, freq: 'monthly' as const },
    { pfad: '/ueber-uns/karriere', prio: 0.4, freq: 'monthly' as const },
    { pfad: '/insights', prio: 0.8, freq: 'weekly' as const },
    { pfad: '/haeufige-fragen', prio: 0.6, freq: 'monthly' as const },
    { pfad: '/kontakt', prio: 0.7, freq: 'yearly' as const },
    { pfad: '/impressum', prio: 0.2, freq: 'yearly' as const },
    { pfad: '/datenschutzerklaerung', prio: 0.2, freq: 'yearly' as const },
  ];

  return [
    ...statisch.map((s) => ({
      url: adr(s.pfad),
      lastModified: heute,
      changeFrequency: s.freq,
      priority: s.prio,
    })),
    ...projekte.map((p) => ({
      url: adr(`/referenzen/${p.slug}`),
      lastModified: heute,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    ...insights.map((i) => ({
      url: adr(`/insights/${i.slug}`),
      lastModified: new Date(i.datum),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    ...team.map((m) => ({
      url: adr(`/ueber-uns/${m.slug}`),
      lastModified: heute,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
    ...studien.map((s) => ({
      url: adr(`/studien/${s.slug}`),
      lastModified: heute,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
    // Fotos der Kleinprojekte erscheinen bewusst nicht auf der Website selbst
    // (siehe KleinprojektCard.tsx), sind aber über die Bilder-Erweiterung der
    // Sitemap für Google Bilder & KI-Crawler weiterhin auffindbar.
    ...kleinprojekte.map((k) => ({
      url: adr(`/kleinprojekte/${k.slug}`),
      lastModified: heute,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
      images: k.bilder.map((b) => `${BASIS}${b}`),
    })),
    ...alleKantone().flatMap((k) => [
      {
        url: adr(`/regionen/${k.slug}`),
        lastModified: heute,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      },
      // Nur Gemeinden mit realisiertem Projekt: Die übrigen stehen auf
      // noindex (siehe regionen/[kanton]/[ort]/page.tsx) und gehören dann
      // auch nicht in die Sitemap — sonst meldet Google sie als
      // "gefunden, nicht indexiert".
      ...orteInKanton(k.kuerzel)
        .filter((o) => o.projekte.length > 0)
        .map((o) => ({
          url: adr(`/regionen/${k.slug}/${o.slug}`),
          lastModified: heute,
          changeFrequency: 'yearly' as const,
          priority: 0.6,
        })),
    ]),
  ];
}
