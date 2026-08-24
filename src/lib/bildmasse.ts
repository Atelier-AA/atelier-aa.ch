import { readFile } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

/**
 * Liest die tatsächlichen Pixelmasse eines Bilds aus `public/` — für
 * `next/image` ohne `fill`, das feste `width`/`height` braucht, um das
 * natürliche Seitenverhältnis zu behalten (siehe ProjektBilder.tsx). Läuft
 * nur zur Build-Zeit (statische Seiten), kein Laufzeitkosten.
 */
export async function bildMasse(oeffentlicherPfad: string): Promise<{ width: number; height: number }> {
  const datei = path.join(process.cwd(), 'public', oeffentlicherPfad);
  const buffer = await readFile(datei);
  const meta = await sharp(buffer).metadata();
  if (!meta.width || !meta.height) {
    throw new Error(`Konnte Bildmasse nicht lesen: ${oeffentlicherPfad}`);
  }
  return { width: meta.width, height: meta.height };
}
