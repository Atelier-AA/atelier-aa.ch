import { createHmac, timingSafeEqual } from 'node:crypto';

type Payload = { campaignId: number; exp: number; action: 'send-after-test' };

function secret() {
  const value = process.env.MAILER_SESSION_SECRET;
  if (!value || value.length < 32) throw new Error('MAILER_SESSION_SECRET fehlt oder ist zu kurz.');
  return value;
}

function sign(value: string) {
  return createHmac('sha256', secret()).update(value).digest('base64url');
}

export function createTestToken(campaignId: number) {
  const payload: Payload = {
    campaignId,
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    action: 'send-after-test',
  };
  const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return `${encoded}.${sign(encoded)}`;
}

export function verifyTestToken(token: string, campaignId: number) {
  const [encoded, signature] = (token || '').split('.');
  if (!encoded || !signature) return false;
  const expected = sign(encoded);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  try {
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8')) as Payload;
    return payload.action === 'send-after-test' && payload.campaignId === campaignId && payload.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}
