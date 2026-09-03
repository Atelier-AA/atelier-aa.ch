import { expect, test } from 'playwright/test';

const seiten = [
  ['Startseite', '/'],
  ['Projektübersicht', '/projekte/'],
  ['Projektseite', '/referenzen/efh-jonen/'],
  ['Kontakt', '/kontakt/'],
  ['Häufige Fragen', '/haeufige-fragen/'],
] as const;

test.describe('Statischer Export', () => {
  for (const [name, url] of seiten) {
    test(`${name} lädt erfolgreich`, async ({ page }) => {
      const antwort = await page.goto(url);
      expect(antwort?.status()).toBe(200);
      await expect(page.locator('body')).toBeVisible();
    });
  }

  test('lädt vor und nach dem Ablehnen keine Google-Analyse', async ({ page }) => {
    const analyseAnfragen: string[] = [];
    page.on('request', (anfrage) => {
      if (/googletagmanager\.com|google-analytics\.com/.test(anfrage.url())) {
        analyseAnfragen.push(anfrage.url());
      }
    });

    await page.goto('/');
    await page.waitForTimeout(500);
    expect(analyseAnfragen).toEqual([]);

    await page.getByRole('button', { name: 'Alle ablehnen' }).click();
    await page.waitForTimeout(500);
    expect(analyseAnfragen).toEqual([]);
  });

  test('beanstandet leere Pflichtfelder im Kontaktformular', async ({ page }) => {
    await page.goto('/kontakt/');
    await page.getByRole('button', { name: 'Absenden' }).click();

    const vorname = page.locator('#vorname');
    expect(await vorname.evaluate((feld: HTMLInputElement) => feld.validity.valueMissing)).toBe(true);
    await expect(vorname).toBeFocused();
  });

  test('hat auf Handybreite keinen waagrechten Überlauf', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    for (const [, url] of seiten) {
      await page.goto(url);
      const hatUeberlauf = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );
      expect(hatUeberlauf, `Waagrechter Überlauf auf ${url}`).toBe(false);
    }
  });

  test('jedes Bild hat einen nicht leeren Alternativtext', async ({ page }) => {
    for (const [, url] of seiten) {
      await page.goto(url);
      const bilderOhneAlt = await page.locator('img').evaluateAll((bilder) =>
        bilder.filter((bild) => !bild.getAttribute('alt')?.trim()).map((bild) => bild.getAttribute('src')),
      );
      expect(bilderOhneAlt, `Bilder ohne alt auf ${url}`).toEqual([]);
    }
  });
});
