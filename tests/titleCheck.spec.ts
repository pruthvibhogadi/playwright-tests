import { expect, test, devices } from '@playwright/test';

test.use(devices['Desktop Firefox']);

test('should be titled', async ({ page, context }) => {
  await context.route('**.jpg', route => route.abort());
  
  // Provide the URL for which we want to verify the Title
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
  console.log('Assertion Completed without Errors!')
});