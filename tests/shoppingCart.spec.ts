import { test, expect } from '@playwright/test';

test('Online Shopping Flow - Tests', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  await page.getByText('Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();
  await page.locator('[data-test="product_sort_container"]').selectOption('hilo');
  
  await page.getByRole('link', { name: 'Sauce Labs Fleece Jacket' }).filter({ hasText: 'Sauce Labs Fleece Jacket' }).click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByText('Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();
  await page.locator('[data-test="product_sort_container"]').selectOption('hilo');
  
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  
  await page.getByRole('link', { name: 'Test.allTheThings() T-Shirt (Red)' }).filter({ hasText: 'Test.allTheThings() T-Shirt (Red)' }).click();
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  
  await page.locator('#shopping_cart_container a').click();
  await page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Playwright');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Tester');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('10000');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  // Asserting if the Order is Confirmed
  await expect(page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' })).toBeVisible()
  await expect(page.getByRole('img', { name: 'Pony Express' })).toBeVisible()

});