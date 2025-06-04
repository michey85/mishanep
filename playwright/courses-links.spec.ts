import { expect, test } from '@playwright/test';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

test.describe('Course links', () => {
  test('all stepik course links lead to external sites with discount', async ({ page, context }) => {
    await page.goto('http://localhost:3000');

    const links = await page.$$('[data-provider="stepik"]');

    for (const link of links) {
      const url = await link.getAttribute('href');
      expect(url).toBeTruthy();

      if (!url) continue;

      expect(url).toMatch(/^https?:\/\//);
      expect(url.includes('utm_')).toBeTruthy();

      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        link.click({ button: 'middle' }), // open in new tab
      ]);
      await sleep(2000);
      await newPage.waitForLoadState('domcontentloaded');
      expect(newPage.url()).toContain('utm_source=mishanep');
      await newPage.close();
    }
  });
  test('all udemy course links lead to external sites with discount', async ({ page, context }) => {
    await page.goto('http://localhost:3000');

    const links = await page.$$('[data-provider="udemy"]');

    for (const link of links) {
      const url = await link.getAttribute('href');
      expect(url).toBeTruthy();

      if (!url) continue;

      expect(url).toMatch(/^https?:\/\//);
      expect(url.includes('couponCode=')).toBeTruthy();

      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        link.click({ button: 'middle' }), // open in new tab
      ]);
      await sleep(1500);
      await newPage.waitForLoadState('domcontentloaded');
      expect(newPage.url()).toContain('couponCode=');
      await newPage.close();
    }
  });
});
