import sharp from 'sharp';
import { readdirSync, statSync, existsSync } from 'fs';
import { join, basename } from 'path';

const QUELLE = '..';
/** Quellordner -> Website-Slug. Von Hand geprüft, nicht geraten. */
export const ZUORDNUNG = {
  'efh-jonen':              '23019 EFH Ajlili in Jonen',
  'mfh-alte-poststrasse':   'MFH Alte Poststrasse Untersiggenthal',
  'mfh-sihlaurain':         'MFH in Sihlaurian 2 und 4',
  'mfh-kuenten':            'Künten AG',
  'mfh-letten':             'MFH Letten Ottenbach',
  'efh-huenenberg':         '22010 Hilla und Yariv Adan',
  'mfh-hochwarting':        'MFH Hohwarting in Glashütten',
  'defh-safenwil':          'DEFH Safenwil',
  'refh-hochfelden':        'MFH Hochfelden',
  'efh-buchs':              'EFH Buchs AG',
  'efh-dietikon':           'Dietikon Zeka',
  'efh-wuerenlos':          'EFH Flühstrasse Würenlos',
  'efh-rupperswil':         'EFH Rupperswil 1047',
  'wohnueberbauung-zelgi':  'MFH Zelgi Untersiggenthal',
  'efh-merenschwand':       'EFH Fischerweg 3 Merenschwand',
  'mfh-wuerenlingen':       'MFH Würenlingen',
  'efh-othmarsingen':       'EFH Othmarsingen',
  'kleintierpraxis-obfelden':'Kleintierpraksis Obfelden',
  'mieterausbau-obfelden':  'Erweiterungen Obbfelden',
  'defh-weiningen':         'DEFH Weiningen',
  'mfh-niederweningen':     'MFH Murzelnstrasse 64 Niederweningen',
};

const BILD = /\.(jpe?g|png)$/i;
/** Bilder eines Quellordners, ohne Archiv-Unterordner. */
export function quellbilder(ordner) {
  for (const name of ['Bilder', 'BIlder', 'bilder']) {
    const d = join(QUELLE, 'Projekte', ordner, name);
    if (!existsSync(d)) continue;
    return readdirSync(d, { withFileTypes: true })
      .filter((e) => e.isFile() && BILD.test(e.name) && !e.name.startsWith('.'))
      .map((e) => join(d, e.name))
      .sort(natuerlich);
  }
  return [];
}
/** Sortierung nach der Zahl am Ende des Namens, nicht alphabetisch:
 *  sonst käme "…11" vor "…2". */
export function natuerlich(a, b) {
  const z = (s) => { const m = basename(s).match(/(\d+)(?=\.[^.]+$)/); return m ? +m[1] : 1e9; };
  const d = z(a) - z(b);
  return d !== 0 ? d : basename(a).localeCompare(basename(b));
}

/** 16x16-Graustufenfinger, überlebt Verkleinern und Neukomprimieren. */
const finger = new Map();
export async function abdruck(p) {
  if (finger.has(p)) return finger.get(p);
  const b = await sharp(p, { failOn: 'none' })
    .resize(24, 24, { fit: 'cover', position: 'center' }).greyscale().raw().toBuffer();
  finger.set(p, b);
  return b;
}
export function unterschied(a, b) {
  let s = 0; for (let i = 0; i < a.length; i++) s += Math.abs(a[i] - b[i]);
  return s / a.length;
}
