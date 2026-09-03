/**
 * Projektgalerien aus den lokalen Quellordnern erneuern.
 *
 * Quelle ist `../Projekte/<Projektordner>/Bilder/` — nur die oberste Ebene.
 * Ausgeschlossen sind `Pläne/` (das sind Pläne, kein Galeriebild) und
 * `Archiv…/` (überschriebene alte Stände).
 *
 * Dieses Skript liest nur und schreibt genau eine Datei:
 * `werkzeuge/.manifest.json`. Das eigentliche Erzeugen der Bilder und das
 * Nachführen von `projekte.ts` macht danach `galerien-aufbauen.mjs`.
 *
 * Bis zum 03.09.2026 stand hier ein Schalter `--anwenden` samt Hinweis, ohne
 * ihn werde nur geplant. Der Schalter wurde nie ausgewertet: mit und ohne ihn
 * lief dasselbe. Entfernt, statt ihn scheinbar wirksam zu lassen — ebenso die
 * drei Importe statSync, unlinkSync und renameSync, die von der ursprünglich
 * hier geplanten Anwendung übrig waren und nirgends benutzt werden.
 */
import sharp from 'sharp';
import { readdirSync, existsSync, writeFileSync } from 'fs';
import { join, basename } from 'path';
const BILD = /\.(jpe?g|png|heic|webp|tiff?)$/i;

export const ZUORDNUNG = {
  'efh-jonen':               '23019 EFH Ajlili in Jonen',
  'mfh-alte-poststrasse':    'MFH Alte Poststrasse Untersiggenthal',
  'mfh-sihlaurain':          'MFH in Sihlaurian 2 und 4',
  'mfh-kuenten':             'Künten AG',
  'mfh-letten':              'MFH Letten Ottenbach',
  'efh-huenenberg':          '22010 Hilla und Yariv Adan',
  'mfh-hochwarting':         'MFH Hohwarting in Glashütten',
  'defh-safenwil':           'DEFH Safenwil',
  'refh-hochfelden':         'MFH Hochfelden',
  'efh-buchs':               'EFH Buchs AG',
  'efh-dietikon':            'Dietikon Zeka',
  'efh-wuerenlos':           'EFH Flühstrasse Würenlos',
  'efh-rupperswil':          'EFH Rupperswil 1047',
  'wohnueberbauung-zelgi':   'MFH Zelgi Untersiggenthal',
  'efh-merenschwand':        'EFH Fischerweg 3 Merenschwand',
  'mfh-wuerenlingen':        'MFH Würenlingen',
  'efh-othmarsingen':        'EFH Othmarsingen',
  'defh-weiningen':          'DEFH Weiningen',
  'mfh-niederweningen':      'MFH Murzelnstrasse 64 Niederweningen',
  // Bewusst OHNE Bilder: Mieterausbau erscheint nur in der Werkliste mit
  // Text (Vorgabe vom 01.09.2026), Kleintierpraxis hat keine Quellbilder.
};

/** Nummer am Ende des Namens, robust gegen doppelte Endungen (…1.JPG.JPG). */
function nummer(p) {
  const ohne = basename(p).replace(/(\.[A-Za-z0-9]{2,5})+$/, '');
  const m = ohne.match(/(\d+)\s*$/);
  return m ? +m[1] : null;
}
function sortiere(a, b) {
  const na = nummer(a), nb = nummer(b);
  if (na !== null && nb !== null) return na - nb;
  if (na !== null) return -1;          // Nummerierte zuerst
  if (nb !== null) return 1;
  return basename(a).localeCompare(basename(b));
}

export function quellbilder(ordner) {
  for (const name of ['Bilder', 'BIlder', 'bilder']) {
    const d = join('..', 'Projekte', ordner, name);
    if (!existsSync(d)) continue;
    return readdirSync(d, { withFileTypes: true })
      .filter((e) => e.isFile() && BILD.test(e.name) && !e.name.startsWith('.'))
      .map((e) => join(d, e.name))
      .sort(sortiere);
  }
  return [];
}

/** Titelbild: grösstes Querformat, sonst das grösste überhaupt. */
async function titelbild(bilder) {
  const m = await Promise.all(bilder.map(async (p) => {
    const x = await sharp(p, { failOn: 'none' }).metadata();
    return { p, w: x.width, h: x.height, px: x.width * x.height, ar: x.width / x.height };
  }));
  /*
   * Bewertung: das Hero steht im Format 16:9 über die ganze Breite. Ein Bild
   * mit passendem Seitenverhältnis wird kaum beschnitten, ein 4:3-Bild
   * verliert oben und unten je ein Sechstel. Deshalb zählt die Nähe zu 16:9
   * mehr als die reine Pixelzahl; zu geringe Breite wird bestraft.
   */
  const ZIEL = 16 / 9;
  const bewerte = (x) =>
    Math.abs(x.ar - ZIEL) / ZIEL + (Math.max(0, 2000 - x.w) / 2000) * 0.5;
  const quer = m.filter((x) => x.ar >= 1.3);
  const wahl = (quer.length ? quer : m).sort((a, b) => bewerte(a) - bewerte(b))[0];
  return { wahl, masse: m };
}

const manifest = {};
let gesamtVorher = 0, gesamtNachher = 0;

for (const [slug, ordner] of Object.entries(ZUORDNUNG)) {
  const q = quellbilder(ordner);
  const dir = `public/images/projekte/${slug}`;
  const altGal = existsSync(dir) ? readdirSync(dir).filter((f) => /^atelier-aa-.*\.jpg$/i.test(f)) : [];
  gesamtVorher += altGal.length;

  if (!q.length) { console.log(slug.padEnd(24) + ' KEINE QUELLBILDER - unverändert'); continue; }
  const { wahl, masse } = await titelbild(q);
  gesamtNachher += q.length + 2;

  console.log('\n' + slug + '   <- ' + ordner);
  console.log('   bisher ' + altGal.length + ' Dateien   ->   neu ' + q.length + ' Galerie + hero + thumb');
  masse.forEach((x, i) => {
    const nr = String(i + 1).padStart(2, '0');
    console.log('     ' + nr + '   ' + String(x.w).padStart(5) + 'x' + String(x.h).padEnd(5) +
      (x.p === wahl.p ? '  <= TITELBILD' : '              ') + '  ' + basename(x.p));
  });
  manifest[slug] = {
    ordner,
    galerie: q.map((p, i) => ({ nr: String(i + 1).padStart(2, '0'), quelle: p })),
    titel: wahl.p,
  };
}
console.log('\n' + '='.repeat(70));
console.log('Projekte mit Quelle: ' + Object.keys(manifest).length);
console.log('Dateien bisher: ' + gesamtVorher + '   ->   neu: ' + gesamtNachher);
writeFileSync('werkzeuge/.manifest.json', JSON.stringify(manifest, null, 1));
