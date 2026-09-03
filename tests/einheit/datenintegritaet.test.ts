import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { insights } from '@/data/insights';
import { kleinprojekte } from '@/data/kleinprojekte';
import { projekte } from '@/data/projekte';
import { studien } from '@/data/studien';
import { team } from '@/data/team';

const sammlungen = [
  ['Projekte', projekte],
  ['Kleinprojekte', kleinprojekte],
  ['Studien', studien],
  ['Insights', insights],
  ['Team', team],
] as const;

function existiertUnterPublic(oeffentlicherPfad: string): boolean {
  const relativ = oeffentlicherPfad.replace(/^\/+/, '');
  const publicWurzel = path.resolve(process.cwd(), 'public');
  const datei = path.resolve(publicWurzel, relativ);
  return datei.startsWith(`${publicWurzel}${path.sep}`) && fs.existsSync(datei);
}

describe('Datenintegrität', () => {
  for (const [name, eintraege] of sammlungen) {
    it(`${name} hat eindeutige, nicht leere Slugs`, () => {
      const slugs: string[] = eintraege.map((eintrag) => eintrag.slug);
      expect(slugs.every((slug: string) => slug.trim().length > 0)).toBe(true);
      expect(new Set(slugs).size).toBe(slugs.length);
    });
  }

  it('hat keine leeren Pflichtfelder in den zentralen Datensätzen', () => {
    for (const projekt of projekte) {
      expect([projekt.slug, projekt.title, projekt.ort, projekt.kanton, projekt.jahr,
        projekt.typ, projekt.beschreibung, projekt.thumbnail, projekt.heroImage]
        .every((wert) => wert.trim().length > 0), projekt.slug).toBe(true);
      expect(projekt.kategorien.length, projekt.slug).toBeGreaterThan(0);
      expect(projekt.leistungen.length, projekt.slug).toBeGreaterThan(0);
    }
    for (const studie of studien) {
      expect([studie.slug, studie.ort, studie.kanton, studie.kategorie, studie.analyse]
        .every((wert) => wert.trim().length > 0), studie.slug).toBe(true);
    }
    for (const projekt of kleinprojekte) {
      expect([projekt.slug, projekt.ort, projekt.kanton, projekt.gebaeudetyp]
        .every((wert) => wert.trim().length > 0), projekt.slug).toBe(true);
      expect(projekt.leistungen.length, projekt.slug).toBeGreaterThan(0);
    }
    for (const insight of insights) {
      expect([insight.slug, insight.titel, insight.lead, insight.kategorie, insight.datum, insight.bild]
        .every((wert) => wert.trim().length > 0), insight.slug).toBe(true);
    }
    for (const mitglied of team) {
      expect([mitglied.slug, mitglied.name, mitglied.rolle, mitglied.bild, mitglied.kurz]
        .every((wert) => wert.trim().length > 0), mitglied.slug).toBe(true);
    }
  });

  it('findet alle genannten Medien und Pläne unter public', () => {
    const pfade = [
      ...projekte.flatMap((projekt) => [
        projekt.thumbnail,
        projekt.heroImage,
        ...projekt.galerie,
        ...(projekt.plaene ?? []).map((plan) => plan.datei),
      ]),
      ...kleinprojekte.flatMap((projekt) => projekt.bilder),
      ...studien.flatMap((studie) => [studie.luftbild, studie.katasterplan, studie.projektbild].filter((pfad): pfad is string => Boolean(pfad))),
      ...insights.map((insight) => insight.bild),
      ...team.map((mitglied) => mitglied.bild),
    ];
    expect(pfade.filter((pfad) => !existiertUnterPublic(pfad))).toEqual([]);
  });

  it('verknüpft jeden Video-Clip mit einem Galeriebild', () => {
    const fehler = projekte.flatMap((projekt) =>
      (projekt.videoClips ?? [])
        .filter((clip) => !projekt.galerie.includes(clip.bildPfad))
        .map((clip) => `${projekt.slug}: ${clip.bildPfad}`),
    );
    expect(fehler).toEqual([]);
  });
});
