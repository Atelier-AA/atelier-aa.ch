import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  CONSENT_EVENT,
  CONSENT_STORAGE_KEY,
  ladeEinwilligung,
  speichereEinwilligung,
} from '@/lib/consent';

function browserMitSpeicher(anfang: string | null = null) {
  let wert = anfang;
  const dispatchEvent = vi.fn();
  vi.stubGlobal('window', {
    localStorage: {
      getItem: vi.fn(() => wert),
      setItem: vi.fn((_schluessel: string, neu: string) => { wert = neu; }),
    },
    dispatchEvent,
  });
  vi.stubGlobal('CustomEvent', class { constructor(public type: string) {} });
  return { dispatchEvent, gelesen: () => wert };
}

afterEach(() => vi.unstubAllGlobals());

describe('Cookie-Einwilligung', () => {
  it('liefert serverseitig keine Einwilligung', () => {
    expect(ladeEinwilligung()).toBeNull();
  });

  it('ignoriert ungültige oder unvollständige gespeicherte Werte', () => {
    browserMitSpeicher('{kaputt');
    expect(ladeEinwilligung()).toBeNull();
    browserMitSpeicher(JSON.stringify({ statistik: true }));
    expect(ladeEinwilligung()).toBeNull();
  });

  it('speichert die Auswahl und meldet die Änderung', () => {
    const browser = browserMitSpeicher();
    speichereEinwilligung({ statistik: false, marketing: true });

    expect(JSON.parse(browser.gelesen()!)).toMatchObject({
      notwendig: true,
      statistik: false,
      marketing: true,
    });
    expect(browser.dispatchEvent).toHaveBeenCalledWith(expect.objectContaining({ type: CONSENT_EVENT }));
    expect(ladeEinwilligung()).toMatchObject({ statistik: false, marketing: true });
    expect(CONSENT_STORAGE_KEY).toBe('atelier-aa-cookie-consent');
  });
});
