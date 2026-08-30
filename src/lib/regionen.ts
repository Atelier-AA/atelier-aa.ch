import { projekte } from '@/data/projekte';
import { studien } from '@/data/studien';
import type { Projekt, Studie } from '@/types';

/**
 * Kanton- und Ortschafts-Seiten für die lokale Suche ("Architekt Jonen",
 * "Architekt Kanton Aargau") — nur für Kantone/Orte, in denen wirklich ein
 * Projekt realisiert, projektiert oder eine Machbarkeitsstudie durchgeführt
 * wurde. Keine generischen Seiten ohne echten Inhalt, um kein
 * Duplicate-Content-/Doorway-Page-Muster zu erzeugen.
 */

const KANTON_NAMEN: Record<string, string> = {
  AG: 'Aargau',
  ZH: 'Zürich',
  ZG: 'Zug',
  LU: 'Luzern',
  SZ: 'Schwyz',
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
  studien: Studie[];
}

function alleKuerzel(): string[] {
  return Array.from(new Set([...projekte.map((p) => p.kanton), ...studien.map((s) => s.kanton)]));
}

export function alleKantone(): KantonMitProjekten[] {
  return alleKuerzel().map((k) => ({
    kuerzel: k,
    name: KANTON_NAMEN[k] ?? k,
    slug: slugify(KANTON_NAMEN[k] ?? k),
    projekte: projekte.filter((p) => p.kanton === k),
    studien: studien.filter((s) => s.kanton === k),
  }));
}

/**
 * Kantone mit mindestens einem realisierten oder projektierten Bauvorhaben.
 *
 * Für den Footer: Sechs gleichwertige Kantonslinks behaupten sechs
 * gleichwertige Tätigkeitsgebiete. Luzern, Thurgau und Solothurn haben aber
 * kein einziges Projekt, nur je ein bis zwei Studien — wer dort klickt,
 * findet eine fast leere Seite und hat mehr verloren als gewonnen.
 *
 * Bewusst eine Regel statt einer festen Liste: Sobald in einem dieser
 * Kantone ein Projekt dazukommt, erscheint er von selbst wieder. Die Seiten
 * bleiben in allen Fällen bestehen und über die Sitemap auffindbar.
 */
export function kantoneMitProjekten(): KantonMitProjekten[] {
  return alleKantone().filter((k) => k.projekte.length > 0);
}

export function getKantonBySlug(slug: string): KantonMitProjekten | undefined {
  return alleKantone().find((k) => k.slug === slug);
}

export interface OrtMitProjekten {
  ort: string;
  slug: string;
  projekte: Projekt[];
  studien: Studie[];
}

export function orteInKanton(kantonKuerzel: string): OrtMitProjekten[] {
  const projekteInKanton = projekte.filter((p) => p.kanton === kantonKuerzel);
  const studienInKanton = studien.filter((s) => s.kanton === kantonKuerzel);
  const orte = Array.from(
    new Set([...projekteInKanton.map((p) => p.ort), ...studienInKanton.map((s) => s.ort)])
  );
  return orte.map((ort) => ({
    ort,
    slug: slugify(ort),
    projekte: projekteInKanton.filter((p) => p.ort === ort),
    studien: studienInKanton.filter((s) => s.ort === ort),
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
