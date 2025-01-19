import { expect, test } from 'vitest';

test('App includes "Vite + React" text', async () => {
  const app = await import('./App?raw');
  expect(app.default).toContain('Vite + React');
});

