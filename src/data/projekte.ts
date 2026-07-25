import type { Projekt } from '@/types';

/**
 * Referenzprojekte.
 *
 * Titel, Ort, Jahr und Bauherrschaft stammen aus dem Custom-Post-Type `films`
 * der alten Website (Meta-Felder `_ort`, `_jahr`, `_kunde`). Wo dort noch
 * Platzhalter hinterlegt waren ("testkunde", "test AG"), steht hier `null`
 * statt einer erfundenen Angabe.
 *
 * Reihenfolge wie auf der alten Projektübersicht: neuestes Projekt zuerst.
 */
export const projekte: Projekt[] = [
  {
    slug: 'mfh-untersiggenthal',
    title: 'MFH Untersiggenthal',
    ort: 'Untersiggenthal',
    kanton: 'AG',
    kunde: null,
    jahr: '2026',
    beschreibung:
      'Ein Mehrfamilienhaus, das seine Umgebung ernst nimmt. Die vertikale Gliederung der Fassade nimmt den Rhythmus der Nachbarschaft auf und übersetzt ihn in eine ruhige, zeitgemässe Form. Grosszügige Öffnungen und vorgelagerte Balkone verbinden die Wohnräume mit dem Garten.',
    thumbnail: '/images/projekte/mfh-untersiggenthal/thumb.jpg',
    heroImage: '/images/projekte/mfh-untersiggenthal/hero.jpg',
    galerie: [
      '/images/projekte/mfh-untersiggenthal/01.jpg',
      '/images/projekte/mfh-untersiggenthal/02.jpg',
      '/images/projekte/mfh-untersiggenthal/03.jpg',
      '/images/projekte/mfh-untersiggenthal/04.jpg',
    ],
    featured: true,
  },
  {
    slug: 'mfh-sihlaurain',
    title: 'MFH Sihlaurain 2 und 4',
    ort: 'Murgenthal',
    kanton: 'AG',
    kunde: 'Lagos AG',
    jahr: '2025',
    beschreibung:
      'Zwei Mehrfamilienhäuser als Ensemble gedacht. Die Baukörper stehen in einem klaren Verhältnis zueinander und fassen einen gemeinsamen Aussenraum. Durchdachte Grundrisse und ein sorgfältiger Umgang mit Ressourcen prägen das Projekt von der ersten Skizze an.',
    thumbnail: '/images/projekte/mfh-sihlaurain/thumb.png',
    heroImage: '/images/projekte/mfh-sihlaurain/hero.png',
    galerie: [
      '/images/projekte/mfh-sihlaurain/01.jpg',
      '/images/projekte/mfh-sihlaurain/02.jpg',
      '/images/projekte/mfh-sihlaurain/03.jpg',
      '/images/projekte/mfh-sihlaurain/04.jpg',
    ],
    featured: true,
  },
  {
    slug: 'mfh-kuenten',
    title: 'Mehrfamilienhaus Künten',
    ort: 'Künten',
    kanton: 'AG',
    kunde: null,
    jahr: '2024',
    beschreibung:
      'Wohnen am Hang, präzise in die Topografie gesetzt. Die gestaffelten Baukörper reagieren auf das Gelände und schaffen für jede Wohnung einen eigenen Aussenraum mit Aussicht. Zurückhaltende Materialien lassen die Architektur im Kontext ruhig wirken.',
    thumbnail: '/images/projekte/mfh-kuenten/thumb.jpg',
    heroImage: '/images/projekte/mfh-kuenten/hero.jpg',
    galerie: [
      '/images/projekte/mfh-kuenten/01.jpg',
      '/images/projekte/mfh-kuenten/02.jpg',
      '/images/projekte/mfh-kuenten/03.jpg',
      '/images/projekte/mfh-kuenten/04.jpg',
    ],
    featured: true,
  },
  {
    slug: 'mfh-hochwarting',
    title: 'Mehrfamilienhaus Hochwarting',
    ort: 'Glashütten',
    kanton: 'AG',
    kunde: null,
    jahr: '2021',
    beschreibung:
      'Ein Wohnbau mit klarer Ordnung und feinen Details. Die Fassade ist sorgfältig proportioniert, die Materialwahl bewusst reduziert. Innen sind die Grundrisse so organisiert, dass Gemeinschaft und Rückzug gleichermassen möglich sind.',
    thumbnail: '/images/projekte/mfh-hochwarting/thumb.jpg',
    heroImage: '/images/projekte/mfh-hochwarting/hero.jpg',
    galerie: [
      '/images/projekte/mfh-hochwarting/01.jpg',
      '/images/projekte/mfh-hochwarting/02.jpg',
      '/images/projekte/mfh-hochwarting/03.jpg',
      '/images/projekte/mfh-hochwarting/04.jpg',
    ],
    featured: false,
  },
];

export function getProjekt(slug: string): Projekt | undefined {
  return projekte.find((p) => p.slug === slug);
}

export function getWeitereProjekte(currentSlug: string, count = 3): Projekt[] {
  return projekte.filter((p) => p.slug !== currentSlug).slice(0, count);
}

export function getFeaturedProjekte(): Projekt[] {
  return projekte.filter((p) => p.featured);
}
