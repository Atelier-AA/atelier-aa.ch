import { projekte } from '@/data/projekte';
import type { Projekt } from '@/types';

/**
 * Kanton- und Ortschafts-Seiten für die lokale Suche ("Architekt Jonen",
 * "Architekt Kanton Aargau") — nur für Kantone/Orte, in denen wirklich ein
 * Projekt realisiert oder projektiert wurde. Keine generischen Seiten ohne
 * echten Inhalt, um kein Duplicate-Content-/Doorway-Page-Muster zu erzeugen.
 */

const KANTON_NAMEN: Record<string, string> = {
  AG: 'Aargau',
  ZH: 'Zürich',
  ZG: 'Zug',
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-+|-+$)/g, '');
}

export interface KantonMitProjekten {
  kuerzel: string;
  name: string;
  slug: string;
  projekte: Projekt[];
}

export function alleKantone(): KantonMitProjekten[] {
  const kuerzel = Array.from(new Set(projekte.map((p) => p.kanton)));
  return kuerzel.map((k) => ({
    kuerzel: k,
    name: KANTON_NAMEN[k] ?? k,
    slug: slugify(KANTON_NAMEN[k] ?? k),
    projekte: projekte.filter((p) => p.kanton === k),
  }));
}

export function getKantonBySlug(slug: string): KantonMitProjekten | undefined {
  return alleKantone().find((k) => k.slug === slug);
}

export interface OrtMitProjekten {
  ort: string;
  slug: string;
  projekte: Projekt[];
}

export function orteInKanton(kantonKuerzel: string): OrtMitProjekten[] {
  const projekteInKanton = projekte.filter((p) => p.kanton === kantonKuerzel);
  const orte = Array.from(new Set(projekteInKanton.map((p) => p.ort)));
  return orte.map((ort) => ({
    ort,
    slug: slugify(ort),
    projekte: projekteInKanton.filter((p) => p.ort === ort),
  }));
}

export function getOrtBySlug(
  kantonSlug: string,
  ortSlug: string
): { kanton: KantonMitProjekten; ort: OrtMitProjekten } | undefined {
  const kanton = getKantonBySlug(kantonSlug);
  if (!kanton) return undefined;
  const ort = orteInKanton(kanton.kuerzel).find((o) => o.slug === ortSlug);
  if (!ort) return undefined;
  return { kanton, ort };
}
