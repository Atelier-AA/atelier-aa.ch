import { describe, expect, it } from 'vitest';
import {
  alleKantone,
  getKantonBySlug,
  getOrtBySlug,
  kantoneMitProjekten,
  orteInKanton,
  slugify,
} from '@/lib/regionen';

describe('Regionen', () => {
  it('erzeugt URL-taugliche Slugs mit Umlauten', () => {
    expect(slugify('Zürich & Ägeri')).toBe('zuerich-aegeri');
  });

  it('führt jeden Kanton nur einmal und mit Inhalt auf', () => {
    const kantone = alleKantone();
    expect(new Set(kantone.map((kanton) => kanton.kuerzel)).size).toBe(kantone.length);
    expect(kantone.every((kanton) => kanton.projekte.length + kanton.studien.length > 0)).toBe(true);
  });

  it('beschränkt die Footer-Auswahl auf Kantone mit Projekten', () => {
    expect(kantoneMitProjekten().every((kanton) => kanton.projekte.length > 0)).toBe(true);
  });

  it('findet Kanton und Ort über ihre Slugs wieder', () => {
    const aargau = getKantonBySlug('aargau');
    expect(aargau?.kuerzel).toBe('AG');
    const ersterOrt = orteInKanton('AG')[0];
    expect(getOrtBySlug('aargau', ersterOrt.slug)?.ort.ort).toBe(ersterOrt.ort);
  });
});
