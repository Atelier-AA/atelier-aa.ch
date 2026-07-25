import type { Projekt } from '@/types';

export const projekte: Projekt[] = [
  {
    slug: 'mfh-sihlaurain',
    title: 'MFH Sihlaurain 2 und 4',
    ort: 'Murgenthal',
    kanton: 'AG',
    kunde: 'Lagos AG',
    jahr: '2025',
    beschreibung:
      'Zwei Mehrfamilienhäuser mit hoher Wohnqualität und klarer Formensprache. Die Baukörper fügen sich präzise in die Topografie ein und bieten durchdachte Grundrisse mit grosszügigen Aussenräumen.',
    thumbnail: '/images/projekte/mfh-sihlaurain/thumb.jpg',
    heroImage: '/images/projekte/mfh-sihlaurain/01.jpg',
    galerie: [
      '/images/projekte/mfh-sihlaurain/01.jpg',
      '/images/projekte/mfh-sihlaurain/02.jpg',
      '/images/projekte/mfh-sihlaurain/03.jpg',
      '/images/projekte/mfh-sihlaurain/04.jpg',
    ],
    featured: true,
  },
  {
    slug: 'mfh-hochwarting',
    title: 'MFH Hochwarting',
    ort: 'Baden',
    kanton: 'AG',
    kunde: 'Privat',
    jahr: '2025',
    beschreibung:
      'Ein zeitgenössisches Mehrfamilienhaus mit fein abgestimmten Materialien. Sorgfältig gestaltete Fassadendetails und ein zurückhaltender Umgang mit Farben schaffen eine ruhige, würdevolle Präsenz im Quartier.',
    thumbnail: '/images/projekte/mfh-hochwarting/thumb.jpg',
    heroImage: '/images/projekte/mfh-hochwarting/01.jpg',
    galerie: [
      '/images/projekte/mfh-hochwarting/01.jpg',
      '/images/projekte/mfh-hochwarting/02.jpg',
      '/images/projekte/mfh-hochwarting/03.jpg',
      '/images/projekte/mfh-hochwarting/04.jpg',
    ],
    featured: true,
  },
  {
    slug: 'mfh-kuenten',
    title: 'MFH Künten',
    ort: 'Künten',
    kanton: 'AG',
    kunde: 'Privat',
    jahr: '2024',
    beschreibung:
      'Ein Mehrfamilienhaus, das sich selbstverständlich in die dörfliche Struktur einfügt. Die reduzierte Materialisierung und die klare Volumetrie unterstreichen den zeitgenössischen Charakter des Gebäudes.',
    thumbnail: '/images/projekte/mfh-kuenten/thumb.jpg',
    heroImage: '/images/projekte/mfh-kuenten/01.jpg',
    galerie: [
      '/images/projekte/mfh-kuenten/01.jpg',
      '/images/projekte/mfh-kuenten/02.jpg',
      '/images/projekte/mfh-kuenten/03.jpg',
      '/images/projekte/mfh-kuenten/04.jpg',
    ],
    featured: true,
  },
  {
    slug: 'mfh-untersiggenthal',
    title: 'MFH Untersiggenthal',
    ort: 'Untersiggenthal',
    kanton: 'AG',
    kunde: 'Privat',
    jahr: '2024',
    beschreibung:
      'Ein Projekt geprägt von präzisen Proportionen und einer sorgfältigen Materialwahl. Die Wohnungen orientieren sich zur besten Aussicht und bieten hohe Aufenthaltsqualität in allen Räumen.',
    thumbnail: '/images/projekte/mfh-untersiggenthal/thumb.jpg',
    heroImage: '/images/projekte/mfh-untersiggenthal/01.jpg',
    galerie: [
      '/images/projekte/mfh-untersiggenthal/01.jpg',
      '/images/projekte/mfh-untersiggenthal/02.jpg',
      '/images/projekte/mfh-untersiggenthal/03.jpg',
      '/images/projekte/mfh-untersiggenthal/04.jpg',
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
