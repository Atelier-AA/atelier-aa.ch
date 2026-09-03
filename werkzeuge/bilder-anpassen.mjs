import sharp from 'sharp';
import { readdirSync, statSync, readFileSync, writeFileSync, renameSync } from 'fs';
import { join } from 'path';

const ANWENDEN = process.argv.includes('--anwenden');

/**
 * Zielbreiten, abgeleitet aus den tatsächlichen Anzeigebreiten im Layout.
 * Der Inhaltsbereich ist 1440 px breit; der Export liefert jede Datei
 * unverändert aus (images.unoptimized), es gibt also keine Grössenvarianten.
 * Deshalb je Verwendung eine sinnvolle Obergrenze mit Reserve für
 * hochauflösende Bildschirme.
 */
function klasse(p) {
  if (/\/images\/logo\//.test(p)) return null;                      // Signet, nicht anfassen
  if (/\.svg$/i.test(p)) return null;
  if (/\/images\/hero\//.test(p)) return { max: 2400, was: 'Hero, volle Fensterbreite' };
  if (/-hero\.(jpe?g|png)$/i.test(p)) return { max: 2400, was: 'Projekt-Hero, volle Breite' };
  if (/-thumb\.(jpe?g|png)$/i.test(p)) return { max: 1000, was: 'Kachel, 25-33vw' };
  if (/-poster\.(jpe?g|png)$/i.test(p)) return { max: 1920, was: 'Videostandbild' };
  if (/\/plaene\//.test(p)) return { max: 2000, was: 'Plan, zum Lesen' };
  if (/\/images\/team\//.test(p)) return { max: 1200, was: 'Portrait, 380-460 px' };
  if (/\/images\/insights\//.test(p)) return { max: 1400, was: 'Beitragsbild, max 768 px' };
  if (/\/images\/studien\//.test(p)) return { max: 1400, was: 'Studie, halbe Breite' };
  if (/\/images\/kleinprojekte\//.test(p)) return { max: 1800, was: 'Werkliste' };
  if (/\/images\/projekte\//.test(p)) return { max: 2000, was: 'Projektgalerie' };
  return { max: 2000, was: 'übrige Seitenbilder' };
}

const MEDIEN = /\.(jpe?g|png|webp)$/i;
function sammle(d, t = []) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) sammle(p, t); else if (MEDIEN.test(e.name)) t.push(p);
  }
  return t;
}

const dateien = sammle('public/images').sort();
let vorher = 0, nachher = 0, verkleinert = 0, neuKodiert = 0, unverändert = 0, zuKlein = [];
const bericht = [];

for (const datei of dateien) {
  const k = klasse('/' + datei.replace(/^public\//, ''));
  const gr0 = statSync(datei).size;
  vorher += gr0;
  if (!k) { nachher += gr0; unverändert++; continue; }

  const bild = sharp(datei, { failOn: 'none' });
  const m = await bild.metadata();
  const lang = Math.max(m.width, m.height);
  const skalieren = lang > k.max;

  // Zu klein für die Anzeige? Nur melden - Hochskalieren erfindet keine Schärfe.
  if (m.width < k.max * 0.5 && !/thumb|logo|favicon|icon/i.test(datei)) {
    zuKlein.push({ p: datei, w: m.width, h: m.height, soll: k.max, was: k.was });
  }

  let pipe = sharp(datei, { failOn: 'none' });
  if (skalieren) pipe = pipe.resize({ width: m.width >= m.height ? k.max : undefined,
                                      height: m.height > m.width ? k.max : undefined,
                                      kernel: 'lanczos3', withoutEnlargement: true });
  /*
   * Qualität nach Bildart. Pläne und Katasterausschnitte sind
   * Strichzeichnungen: dort erzeugt die übliche Farbunterabtastung 4:2:0
   * Farbsäume an dünnen Linien, und niedrige Qualität lässt Linien
   * ausfransen. Deshalb 4:4:4 und höhere Qualität. Fotos brauchen das
   * nicht und werden dadurch nur unnötig gross.
   */
  const strich = /\/plaene\/|katasterplan|situationsplan|umgebungsplan/i.test(datei);
  const format = (m.format === 'png') ? 'png' : (m.format === 'webp' ? 'webp' : 'jpeg');
  if (format === 'jpeg') pipe = pipe.jpeg(strich
    ? { quality: 92, mozjpeg: true, progressive: true, chromaSubsampling: '4:4:4' }
    : { quality: 82, mozjpeg: true, progressive: true });
  if (format === 'webp') pipe = pipe.webp({ quality: strich ? 92 : 82, effort: 5 });
  if (format === 'png')  pipe = pipe.png({ compressionLevel: 9, palette: false });

  const puffer = await pipe.toBuffer();
  const besser = puffer.length < gr0 * 0.97;   // nur übernehmen, wenn es wirklich spart

  if (skalieren || besser) {
    const m2 = await sharp(puffer).metadata();
    bericht.push({ p: datei, w0: m.width, h0: m.height, w1: m2.width, h1: m2.height,
                   kb0: Math.round(gr0/1024), kb1: Math.round(puffer.length/1024), was: k.was });
    if (ANWENDEN) writeFileSync(datei, puffer);
    nachher += puffer.length;
    if (skalieren) verkleinert++; else neuKodiert++;
  } else { nachher += gr0; unverändert++; }
}

console.log((ANWENDEN ? 'ANGEWENDET' : 'VORSCHAU (nichts geändert)') + '\n' + '='.repeat(70));
console.log('  Dateien geprüft:      ' + dateien.length);
console.log('  verkleinert:          ' + verkleinert);
console.log('  nur neu komprimiert:  ' + neuKodiert);
console.log('  unverändert gelassen: ' + unverändert);
console.log('  vorher:  ' + (vorher/1048576).toFixed(1) + ' MB');
console.log('  nachher: ' + (nachher/1048576).toFixed(1) + ' MB   (-' + Math.round((1-nachher/vorher)*100) + ' %)');

console.log('\nGRÖSSTE EINSPARUNGEN');
bericht.sort((a,b)=>(b.kb0-b.kb1)-(a.kb0-a.kb1)).slice(0,15).forEach(b =>
  console.log('  ' + String(b.kb0).padStart(5) + ' -> ' + String(b.kb1).padStart(4) + ' KB   ' +
    (b.w0+'x'+b.h0).padEnd(11) + ' -> ' + (b.w1+'x'+b.h1).padEnd(11) + '  ' + b.p.replace('public/images/','')));

console.log('\nZU KLEIN FÜR IHRE ANZEIGEFLÄCHE (' + zuKlein.length + ') - Hochskalieren bringt keine Schärfe');
zuKlein.sort((a,b)=>a.w-b.w).forEach(z =>
  console.log('  ' + (z.w+'x'+z.h).padEnd(11) + ' soll ~' + String(z.soll).padEnd(5) + ' ' +
    z.was.padEnd(26) + z.p.replace('public/images/','')));
writeFileSync('werkzeuge/.bilder-plan.json', JSON.stringify({bericht, zuKlein}, null, 1));
