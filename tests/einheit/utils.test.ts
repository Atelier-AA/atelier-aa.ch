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

  it('formatiert Ort und Datum schweizerisch', () => {
    expect(ortMitKanton({ ort: 'Künten', kanton: 'AG' })).toBe('Künten AG');
    expect(formatDatum('2026-06-18')).toBe('18. Juni 2026');
  });
});
