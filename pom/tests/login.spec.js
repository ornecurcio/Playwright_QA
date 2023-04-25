const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');
import dotenv from 'dotenv';
dotenv.config()


test('User must be logged in successfully', async ({ page }) => {
  await page.goto(process.env.URL_SAUCEDO)
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(process.env.SAUCEDO_USER,process.env.SAUCEDO_PASS);
  await expect(page).toHaveURL(process.env.URL_INVENTORY);
});

// test('login with username correct and password incorrect', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/')
//     await page.locator('[data-test="username"]').fill('standard_user')
//     await page.locator('[data-test="password"]').fill('secret_sauce')
//     await page.locator('[data-test="login-button"]').click()
//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
//   });