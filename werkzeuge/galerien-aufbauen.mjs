/**
 * Galerien und Vorschaubilder aus den Quellordnern neu aufbauen.
 *
 * Läuft von Grund auf und ist dadurch wiederholbar: erst werden alle
 * Galeriedateien aus der Quelle erzeugt (auch zuvor gelöschte kommen zurück),
 * dann Vorschaubild und Kachel geschnitten, dann das Vorschaubild aus der
 * Galerie genommen. Videos stehen in der Galerie zuoberst (Vorgabe vom
 * 01.09.2026).
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync, readdirSync, unlinkSync, existsSync, statSync, copyFileSync } from 'fs';
import { execSync } from 'child_process';
import { VORSCHAUBILD } from './titelbilder.mjs';

const man = JSON.parse(readFileSync('werkzeuge/.manifest.json', 'utf8'));
const GAL_MAX = 2000;

/**
 * Zusätzliche Galerieplätze für Videos, deren Ansicht in den Quellfotos nicht
 * vorkommt. Das Bild dort ist ein Einzelbild aus dem Video selbst und wird
 * auf der Seite ohnehin durch das Video ersetzt — es ist reiner Platzhalter.
 * Diese Dateien werden NICHT aus der Quelle neu erzeugt.
 */
const VIDEOPLAETZE = {
  'mfh-sihlaurain':  ['13'],
  /* Hochwarting hatte hier '06'. Der Clip ist am 03.09.2026 entfernt worden;
     das Bild bleibt als gewöhnliches Foto in der Galerie und dient dem
     Journalbeitrag "Kreislauffähig bauen" als Vorschaubild. */
};

/** HEIC vorwandeln — sharp dekodiert es hier nicht. */
function lesbar(p) {
  if (!/\.heic$/i.test(p)) return p;
  const t = '/tmp/heic-' + Math.random().toString(36).slice(2) + '.jpg';
  execSync(`sips -s format jpeg -s formatOptions 100 "${p}" --out "${t}"`, { stdio: 'ignore' });
  return t;
}
/** Grösster Zuschnitt im Zielverhältnis, der in die Quelle passt. */
function masse(qb, qh, maxB, verh) {
  let b = Math.min(maxB, qb), h = Math.round(b / verh);
  if (h > qh) { h = qh; b = Math.round(h * verh); }
  return { b, h };
}
const jpg = p => p.jpeg({ quality: 82, mozjpeg: true, progressive: true });

let zeilen = readFileSync('src/data/projekte.ts', 'utf8').split('\n');
const bericht = [];

for (const [slug, v] of Object.entries(man)) {
  const dir = `public/images/projekte/${slug}`;
  const nrVorschau = VORSCHAUBILD[slug] ?? (v.galerie.findIndex(g => g.quelle === v.titel) + 1);

  // 1. alle Galeriedateien aus der Quelle erzeugen
  for (const g of v.galerie) {
    const q = lesbar(g.quelle);
    const m = await sharp(q, { failOn: 'none' }).metadata();
    let p = sharp(q, { failOn: 'none' }).rotate();
    if (Math.max(m.width, m.height) > GAL_MAX)
      p = p.resize({ width: m.width >= m.height ? GAL_MAX : undefined,
                     height: m.height > m.width ? GAL_MAX : undefined, kernel: 'lanczos3' });
    await jpg(p).toFile(`${dir}/atelier-aa-${slug}-${g.nr}.jpg`);
  }

  // 2. Vorschaubild und Kachel schneiden
  const quelle = lesbar(v.galerie[nrVorschau - 1].quelle);
  const q0 = await sharp(quelle, { failOn: 'none' }).metadata();
  for (const [art, maxB, verh] of [['hero', 2400, 16/9], ['thumb', 1000, 4/3]]) {
    const { b, h } = masse(q0.width, q0.height, maxB, verh);
    await jpg(sharp(quelle, { failOn: 'none' }).rotate()
      .resize({ width: b, height: h, fit: 'cover', position: 'centre', kernel: 'lanczos3' }))
      .toFile(`${dir}/atelier-aa-${slug}-${art}.jpg`);
  }

  // 3. Vorschaubild aus der Galerie nehmen (ausser das Projekt hat nur eines)
  const raus = v.galerie.length > 1 ? String(nrVorschau).padStart(2, '0') : null;
  /* Auf Kundenwunsch entfernte Bilder (03.09.2026), damit ein Neuaufbau sie
     nicht zurückholt. */
  const ENTFERNT = { 'mfh-kuenten': ['03'], 'mfh-hochwarting': ['06'], 'efh-othmarsingen': ['01'] };
  let dateien = [...v.galerie.map(g => g.nr), ...(VIDEOPLAETZE[slug] ?? [])]
    .filter(nr => nr !== raus)
    .filter(nr => !(ENTFERNT[slug] ?? []).includes(nr));
  if (raus && existsSync(`${dir}/atelier-aa-${slug}-${raus}.jpg`))
    unlinkSync(`${dir}/atelier-aa-${slug}-${raus}.jpg`);

  // Blockgrenzen in projekte.ts bestimmen (wird für Videos und Schreiben gebraucht)
  const i = zeilen.findIndex(z => z.trim() === `slug: '${slug}',`);
  let a = i; while (a > 0 && zeilen[a] !== '  {') a--;
  let t = 0, b2 = a;
  for (let k = a; k < zeilen.length; k++) { for (const c of zeilen[k]) { if (c === '{') t++; if (c === '}') t--; } if (t === 0) { b2 = k; break; } }

  // 4. Videos zuoberst
  /*
   * Videos aus den Projektdaten lesen, nicht aus dem Ordner: bei Hochwarting
   * liegen die Videodateien noch da, der Clip ist aber entfernt, weil sein
   * Standbild im neuen Quellordner fehlt. Ein Ordner-Scan hätte dieses Bild
   * grundlos nach vorne sortiert.
   */
  const blockText = zeilen.slice(a, b2 + 1).join('\n');
  const mitVideo = [...blockText.matchAll(/bildPfad: '[^']*-(\d+)\.jpg'/g)].map(m => m[1]);
  const vorne = dateien.filter(nr => mitVideo.includes(nr));
  dateien = [...vorne, ...dateien.filter(nr => !vorne.includes(nr))];

  // 5. projekte.ts schreiben
  const setze = (feld, wert) => {
    const k = zeilen.findIndex((z, idx) => idx >= a && idx <= b2 && z.trim().startsWith(feld + ':'));
    if (k >= 0) zeilen[k] = `      ${feld}: '${wert}',`;
  };
  setze('heroImage', `/images/projekte/${slug}/atelier-aa-${slug}-hero.jpg`);
  setze('thumbnail', `/images/projekte/${slug}/atelier-aa-${slug}-thumb.jpg`);
  const gs = zeilen.findIndex((z, idx) => idx >= a && idx <= b2 && z.trim().startsWith('galerie:'));
  let ge = gs, t2 = 0;
  for (let k = gs; k <= b2; k++) { for (const c of zeilen[k]) { if (c === '[') t2++; if (c === ']') t2--; } if (t2 === 0) { ge = k; break; } }
  zeilen.splice(gs, ge - gs + 1, '      galerie: [',
    ...dateien.map(nr => `        '/images/projekte/${slug}/atelier-aa-${slug}-${nr}.jpg',`), '      ],');

  bericht.push({ slug, nrVorschau, gal: dateien.length, video: vorne });
}
writeFileSync('src/data/projekte.ts', zeilen.join('\n'));
console.log('  Projekt'.padEnd(26) + 'Vorschau'.padEnd(11) + 'Galerie'.padEnd(9) + 'Video zuoberst');
bericht.forEach(b => console.log('  ' + b.slug.padEnd(24) + ('Datei ' + String(b.nrVorschau).padStart(2,'0')).padEnd(11) +
  String(b.gal).padStart(4) + '     ' + (b.video.length ? 'Datei ' + b.video.join(', ') : '—')));
