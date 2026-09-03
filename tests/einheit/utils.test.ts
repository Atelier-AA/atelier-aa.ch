import { describe, expect, it } from 'vitest';
import { cn, formatDatum, kurzbeschreibung, ortMitKanton } from '@/lib/utils';

describe('Hilfsfunktionen', () => {
  it('verbindet nur vorhandene CSS-Klassen', () => {
    expect(cn('block', false, undefined, 'text-ink', null)).toBe('block text-ink');
  });

  it('kürzt Beschreibungen an einem sinnvollen Satzende', () => {
    const text = 'Der erste Satz ist vollständig. Der zweite Satz würde die verfügbare Länge überschreiten.';
    expect(kurzbeschreibung(text, 55)).toBe('Der erste Satz ist vollständig.');
  });

  it('normalisiert Leerraum und lässt kurze Beschreibungen unverändert', () => {
    expect(kurzbeschreibung('  Ein\n kurzer   Text. ')).toBe('Ein kurzer Text.');
  });

  it('endet nicht auf einem Wort, das einen Anschluss verlangt', () => {
    /* Diese neun Studienbeschreibungen endeten in den Suchergebnissen auf
     * "an der …", "auf …" oder "liegt in der …". */
    const proben = [
      'Ein zweites, grösseres Grundstück an derselben Flurstrasse in Nussbaumen liegt in der',
      'Die Wohnzone 3 in Schlieren erlaubt drei Vollgeschosse bei einer Überbauungsziffer von',
      'Mit 30 % Ausnützung in der Zone W2 ergibt sich für die 880 m² grosse Parzelle an der',
    ];
    for (const p of proben) {
      const gekuerzt = kurzbeschreibung(p + ' hier folgt noch viel mehr Text, der abgeschnitten wird', 90);
      const letztes = gekuerzt.replace(/ …$/, '').split(' ').pop() ?? '';
      /* Geprüft werden die geschlossenen Wortklassen — Artikel, Präpositionen,
       * Konjunktionen, Hilfsverben. Die sind abzählbar. Vollverben wie "liegt"
       * bleiben möglich; sie enden weniger schlimm als eine Präposition, und
       * eine vollständige Verbliste gibt es nicht. */
      expect(letztes.toLowerCase()).not.toMatch(
        /^(der|die|das|den|dem|des|ein|eine|einer|in|im|an|am|auf|von|vom|zu|zur|zum|und|oder|ist|sind)$/
      );
      expect(gekuerzt.length).toBeLessThanOrEqual(92);
    }
  });

  it('formatiert Ort und Datum schweizerisch', () => {
    expect(ortMitKanton({ ort: 'Künten', kanton: 'AG' })).toBe('Künten AG');
    expect(formatDatum('2026-06-18')).toBe('18. Juni 2026');
  });
});
