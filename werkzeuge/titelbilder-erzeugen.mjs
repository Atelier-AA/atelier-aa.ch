/**
 * hero (16:9) und thumb (4:3) aus dem Titelbild eines Projekts schneiden.
 *
 * Das Zielmass wird aus der Quelle berechnet, nicht fest vorgegeben. Der erste
 * Versuch nutzte `withoutEnlargement` zusammen mit `fit: cover` — dabei liefert
 * sharp bei Quellen, die kleiner als das Zielfenster sind, ein Bild mit einem
 * ANDEREN Seitenverhältnis statt eines kleineren Zuschnitts. Drei Heroes waren
 * dadurch 4:3 statt 16:9.
 */
import sharp from 'sharp';
import { readFileSync, statSync } from 'fs';
import { basename } from 'path';
import { execSync } from 'child_process';
import { TITELBILDER } from './titelbilder.mjs';

const man = JSON.parse(readFileSync('werkzeuge/.manifest.json', 'utf8'));
const ARTEN = [
  { art: 'hero',  maxB: 2400, verh: 16 / 9 },
  { art: 'thumb', maxB: 1000, verh: 4 / 3 },
];

/** Grösster Zuschnitt im Zielverhältnis, der in die Quelle passt. */
function masse(qb, qh, maxB, verh) {
  let b = Math.min(maxB, qb);
  let h = Math.round(b / verh);
  if (h > qh) { h = qh; b = Math.round(h * verh); }
  return { b, h };
}

/* HEIC vorwandeln — sharp dekodiert es in dieser Fassung nicht. */
function lesbar(p) {
  if (!/\.heic$/i.test(p)) return p;
  const tmp = '/tmp/heic-' + Math.random().toString(36).slice(2) + '.jpg';
  execSync(`sips -s format jpeg -s formatOptions 100 "${p}" --out "${tmp}"`, { stdio: 'ignore' });
  return tmp;
}

let n = 0, falsch = 0;
for (const [slug, v] of Object.entries(man)) {
  const wahl = TITELBILDER[slug] ?? {};
  for (const { art, maxB, verh } of ARTEN) {
    const nr = wahl[art];
    const quelle = lesbar(nr ? v.galerie[nr - 1].quelle : v.titel);
    const q = await sharp(quelle, { failOn: 'none' }).metadata();
    const { b, h } = masse(q.width, q.height, maxB, verh);
    const ziel = `public/images/projekte/${slug}/atelier-aa-${slug}-${art}.jpg`;
    await sharp(quelle, { failOn: 'none' }).rotate()
      .resize({ width: b, height: h, fit: 'cover', position: 'centre', kernel: 'lanczos3' })
      .jpeg({ quality: 82, mozjpeg: true, progressive: true }).toFile(ziel);
    const m = await sharp(ziel).metadata();
    const ok = Math.abs(m.width / m.height - verh) < 0.02;
    if (!ok) falsch++;
    n++;
    if (nr || !ok) console.log('  ' + slug.padEnd(22) + art.padEnd(7) +
      (nr ? 'Nr ' + String(nr).padStart(2,'0') : 'automatisch').padEnd(13) +
      (m.width + 'x' + m.height).padEnd(12) + (m.width/m.height).toFixed(2) + (ok ? '' : '   FALSCH'));
  }
}
console.log('\n  ' + n + ' Dateien erzeugt, falsches Seitenverhältnis: ' + falsch);
