/**
 * Fehlende Projektvideos aus ../videos/ einbauen.
 *
 * Die Dateien dort tragen nichtssagende Namen (`hf_2026…`). Die Zuordnung
 * wurde über den Bildinhalt einzelner Videobilder gegen die Projektfotos
 * ermittelt, nicht über den Dateinamen.
 *
 * Kodierung an den bestehenden Projektvideos ausgerichtet: 1280 px breit,
 * rund 600 kbit/s, ohne Tonspur.
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync, existsSync, mkdirSync, unlinkSync, statSync } from 'fs';
import { execSync } from 'child_process';

const Q = '../videos';
const AUFTRAG = [
  { slug: 'mfh-sihlaurain', nr: '13', quelle: 'hf_20260821_171007_b714d863-fb02-413d-82b6-5756ad7bb214.mp4',
    neuerPlatz: true,  grund: 'Adliswil, Perspektive nicht in der Galerie' },
  { slug: 'mfh-kuenten',    nr: '02', quelle: 'hf_20260821_171041_14d37e19-9864-4d35-9245-4eb8cd9d7fc3.mp4',
    neuerPlatz: false, grund: 'entspricht Foto 02 (Abweichung 2.4)' },
  { slug: 'mfh-hochwarting', nr: '06', quelle: 'hf_20260821_171000_d05fc8ca-299b-4290-90bc-472383da6e02.mp4',
    neuerPlatz: true,  grund: 'Standbild ist das alte Foto 05, in der Quelle nicht mehr vorhanden' },
];

let zeilen = readFileSync('src/data/projekte.ts', 'utf8').split('\n');

for (const a of AUFTRAG) {
  const vd = `public/images/projekte/${a.slug}/videos`;
  mkdirSync(vd, { recursive: true });
  const basis = `atelier-aa-${a.slug}-${a.nr}`;
  const quelle = `${Q}/${a.quelle}`;

  // MP4 und WebM, 1280 px breit, ohne Ton
  execSync(`ffmpeg -nostdin -v error -y -i "${quelle}" -vf "scale=1280:-2:flags=lanczos" ` +
    `-c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -an -movflags +faststart "${vd}/${basis}.mp4"`);
  execSync(`ffmpeg -nostdin -v error -y -i "${quelle}" -vf "scale=1280:-2:flags=lanczos" ` +
    `-c:v libvpx-vp9 -crf 36 -b:v 0 -row-mt 1 -deadline good -cpu-used 3 -pix_fmt yuv420p -an "${vd}/${basis}.webm"`);
  // Standbild
  execSync(`ffmpeg -nostdin -v error -y -ss 0.3 -i "${quelle}" -frames:v 1 /tmp/poster-roh.jpg`);
  await sharp('/tmp/poster-roh.jpg').resize({ width: 1280, kernel: 'lanczos3' })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true }).toFile(`${vd}/${basis}-poster.jpg`);

  // Platzhalterbild in der Galerie, wo das Video keine Entsprechung hat
  if (a.neuerPlatz) {
    await sharp('/tmp/poster-roh.jpg').resize({ width: 2000, kernel: 'lanczos3' })
      .jpeg({ quality: 82, mozjpeg: true, progressive: true })
      .toFile(`public/images/projekte/${a.slug}/${basis}.jpg`);
  }

  const kb = f => Math.round(statSync(`${vd}/${basis}.${f}`).size / 1024);
  console.log('  ' + a.slug.padEnd(18) + 'Nr ' + a.nr + '   mp4 ' + String(kb('mp4')).padStart(4) +
    ' KB, webm ' + String(kb('webm')).padStart(4) + ' KB' +
    (a.neuerPlatz ? '   + neues Galeriebild' : '') + '   (' + a.grund + ')');
}

// Alte Hochwarting-Videodateien mit Nummer 05 entfernen
for (const f of ['mp4', 'webm', '-poster.jpg']) {
  const p = `public/images/projekte/mfh-hochwarting/videos/atelier-aa-mfh-hochwarting-05${f.startsWith('-') ? f : '.' + f}`;
  if (existsSync(p)) { unlinkSync(p); console.log('  entfernt: ' + p.split('/').pop()); }
}
console.log('\n  Videodateien erzeugt. Die Einträge in projekte.ts setzt das nächste Skript.');
