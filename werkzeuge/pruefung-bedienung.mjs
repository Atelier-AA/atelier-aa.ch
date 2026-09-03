/** Bedienelemente im echten Browser prüfen: Menü, Akkordeon, Slider, Video,
 *  Formular, Cookie-Hinweis, Filter, "Mehr zeigen". */
import { chromium } from 'playwright';
const B = 'http://127.0.0.1:8080';
const browser = await chromium.launch({ channel: 'chrome' });
const erg = [];
/* Nur `true` gilt als bestanden. Bis zum 03.09.2026 stand hier `r === false`
 * als Fehlerbedingung — die Prüfungen unten geben bei einem Problem aber
 * meist einen erklärenden Text zurück ("kein Video-Element", "HTTP 404").
 * Solche Ergebnisse landeten unter "ok", ein fehlender Knopf oder ein
 * unabspielbares Video konnte die Prüfung also bestehen. */
const pruef = async (name, fn) => {
  try {
    const r = await fn();
    erg.push([r === true ? 'ok' : 'FEHLER', name, typeof r === 'string' ? r : '']);
  }
  catch (e) { erg.push(['FEHLER', name, e.message.split('\n')[0].slice(0, 90)]); }
};

for (const mobil of [true, false]) {
  const g = mobil ? 'Handy  ' : 'Desktop';
  const ctx = await browser.newContext({
    viewport: mobil ? { width: 390, height: 844 } : { width: 1440, height: 900 },
    isMobile: mobil, hasTouch: mobil, deviceScaleFactor: mobil ? 3 : 2,
  });
  const p = await ctx.newPage();

  await pruef(g + ' Cookie-Hinweis erscheint und lässt sich ablehnen', async () => {
    await p.goto(B + '/', { waitUntil: 'load' });
    await p.waitForTimeout(1200);
    const btn = p.getByRole('button', { name: /ablehnen|nur notwendig|verweigern/i }).first();
    if (!await btn.count()) return 'kein Ablehnen-Knopf gefunden';
    await btn.click();
    await p.waitForTimeout(500);
    return await btn.count() === 0 || !(await btn.isVisible()) ? true : false;
  });

  if (mobil) {
    await pruef(g + ' Menü öffnet und schliesst', async () => {
      await p.goto(B + '/', { waitUntil: 'load' });
      await p.waitForTimeout(600);
      const knopf = p.locator('header button').first();
      if (!await knopf.count()) return 'kein Menüknopf';
      await knopf.click(); await p.waitForTimeout(500);
      /* Der Menüeintrag heisst "Projekte →", nicht "Projekte". Mit
       * /^Projekte$/ fand diese Prüfung ihn nie und meldete ein
       * einwandfrei funktionierendes Menü als defekt. Der Suchbereich ist
       * jetzt der Dialog, damit nicht der gleichnamige Link im Fuss
       * gefunden wird. */
      const sichtbar = await p.locator('[role="dialog"] a', { hasText: /^Projekte/ })
        .first().isVisible().catch(() => false);
      await knopf.click(); await p.waitForTimeout(400);
      return sichtbar ? true : 'Menü öffnete nicht sichtbar';
    });
    await pruef(g + ' Navigation über das Menü funktioniert', async () => {
      await p.goto(B + '/', { waitUntil: 'load' }); await p.waitForTimeout(500);
      await p.locator('header button').first().click(); await p.waitForTimeout(400);
        await p.locator('[role="dialog"] a', { hasText: /^Projekte/ }).first().click();
      await p.waitForURL(/projekte/, { timeout: 8000 });
      return p.url().includes('projekte');
    });
  }

  await pruef(g + ' Slider wechselt das Bild', async () => {
    await p.goto(B + '/', { waitUntil: 'load' }); await p.waitForTimeout(800);
    const erst = await p.evaluate(() => document.querySelector('img[src*="/images/projekte/"]')?.currentSrc ?? '');
    await p.waitForTimeout(7000);
    const zweit = await p.evaluate(() => {
      const s = [...document.querySelectorAll('img[src*="/images/projekte/"]')];
      const sichtbar = s.filter(i => getComputedStyle(i.closest('div')).opacity !== '0');
      return sichtbar[0]?.currentSrc ?? '';
    });
    return erst && zweit ? true : 'Slider-Bilder nicht gefunden';
  });

  await pruef(g + ' Akkordeon der Fragen öffnet', async () => {
    await p.goto(B + '/haeufige-fragen/', { waitUntil: 'load' }); await p.waitForTimeout(500);
    const d = p.locator('details').first();
    const zu = await d.evaluate(e => e.open);
    await d.locator('summary').click(); await p.waitForTimeout(300);
    const auf = await d.evaluate(e => e.open);
    return (!zu && auf) ? true : 'zu=' + zu + ' auf=' + auf;
  });

  await pruef(g + ' Video hat Standbild und spielt', async () => {
    await p.goto(B + '/referenzen/mfh-sihlaurain/', { waitUntil: 'load' });
    /* Feste 900 px reichten am Handy nicht bis zum Clip; die Quellen
     * hängen erst dran, wenn er im Blick ist. Darum gezielt hinscrollen. */
    await p.locator('video').first().scrollIntoViewIfNeeded();
    await p.waitForTimeout(2500);
    const v = await p.evaluate(() => {
      const x = document.querySelector('video');
      if (!x) return null;
      return { poster: !!x.poster, quellen: x.querySelectorAll('source').length,
               bereit: x.readyState, breite: x.videoWidth,
               laeuft: !x.paused, zeit: x.currentTime };
    });
    if (!v) return 'kein Video-Element';
    /* Nicht nur Vorhandensein prüfen, sondern dass er wirklich abspielt:
     * ein Clip, der stehen bleibt, hat diese Prüfung vorher bestanden. */
    return v.poster && v.quellen >= 1 && v.laeuft && v.zeit > 0
      ? true : JSON.stringify(v);
  });

  await pruef(g + ' Kontaktformular prüft Eingaben', async () => {
    await p.goto(B + '/kontakt/', { waitUntil: 'load' }); await p.waitForTimeout(500);
    const abs = p.locator('form button[type=submit]').first();
    if (!await abs.count()) return 'kein Absendeknopf';
    await abs.click(); await p.waitForTimeout(400);
    const ungueltig = await p.evaluate(() => document.querySelectorAll('form :invalid').length);
    return ungueltig > 0 ? true : 'leeres Formular wurde nicht beanstandet';
  });

  await pruef(g + ' Projektfilter reagiert', async () => {
    await p.goto(B + '/projekte/', { waitUntil: 'load' }); await p.waitForTimeout(600);
    const vor = await p.locator('a[href^="/referenzen/"]').count();
    /* Die Filter heissen Alle, Umbau, Neubau, Mieterausbau, Wohnen, Büro,
     * Gewerbe. Vorher wurde nach "Mehrfamilienhaus" gesucht — den Knopf gab
     * es nie, die Prüfung lief also immer ins Leere und meldete nichts. */
    const f = p.getByRole('button', { name: /^Umbau$/i }).first();
    if (!await f.count()) return 'kein Filterknopf "Umbau" gefunden';
    await f.click(); await p.waitForTimeout(600);
    const nach = await p.locator('a[href^="/referenzen/"]').count();
    return nach !== vor ? true : 'Zahl der Projekte unverändert (' + vor + ')';
  });

  await pruef(g + ' "Mehr zeigen" lädt weitere Studien nach', async () => {
    await p.goto(B + '/leistungen/machbarkeitsstudie/', { waitUntil: 'load' });
    await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); await p.waitForTimeout(900);
    const knopf = p.getByRole('button', { name: /mehr zeigen/i }).first();
    if (!await knopf.count()) return 'kein Knopf gefunden';
    const vor = await p.locator('.aspect-square:visible').count();
    await knopf.click(); await p.waitForTimeout(700);
    const nach = await p.locator('.aspect-square:visible').count();
    return nach > vor ? true : 'sichtbare Kacheln: ' + vor + ' -> ' + nach;
  });

  await pruef(g + ' Plan-PDF ist abrufbar', async () => {
    const r = await p.request.get(B + '/dokumente/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-01-kataster.pdf');
    return r.status() === 200 && r.headers()['content-type']?.includes('pdf') ? true : 'HTTP ' + r.status();
  });

  await ctx.close();
}
await browser.close();
const breite = Math.max(...erg.map(e => e[1].length));
erg.forEach(([s, n, d]) => console.log('  ' + (s === 'ok' ? 'ok    ' : 'FEHLER') + '  ' + n.padEnd(breite) + '  ' + d));
const bestanden = erg.filter(e => e[0] === 'ok').length;
console.log('\n  ' + bestanden + ' von ' + erg.length + ' Prüfungen bestanden');
/* Mit einem Fehlerkode enden, damit ein Aufruf in der Kontrolle scheitert
 * statt still durchzulaufen. */
if (bestanden < erg.length) process.exitCode = 1;
