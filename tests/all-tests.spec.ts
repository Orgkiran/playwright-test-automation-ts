import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page';

let loginPage: LoginPage;

test.describe('Login Tests', () => {
  test('should display error message for invalid credentials', {tag: '@smoke'}, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('input[name="username"]', 'invalidUser');
    await page.fill('input[name="password"]', 'invalidPass');
    await page.click('button[type="submit"]');
    const errorMessage = await page.locator('.oxd-alert-content').textContent();
    expect(errorMessage).toContain('Invalid credentials');
  });

  test('should login successfully with valid credentials',{tag: '@smoke'}, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
    const dashboardHeader = await page.locator('.oxd-topbar-header-title').textContent();
    expect(dashboardHeader).toBe('Dashboard');
  });
});

test.describe('Dashboard Tests', () => {
  test('should navigate to Admin section', {tag: '@regression'}, async ({ page }) => {
    loginPage = new LoginPage(page);
    loginPage.login('Admin', 'admin123');
    await page.click('//a[normalize-space()="Admin"]');
    const adminHeader = await page.locator('//div[@class="oxd-topbar-header-title"]//h6').first().textContent();
    expect(adminHeader).toBe('Admin');
  }
  );

  test('should navigate to PIM section', {tag: '@regression'}, async ({ page }) => {
    loginPage = new LoginPage(page);
    loginPage.login('Admin', 'admin123');
    await page.click('//a[normalize-space()="PIM"]');
    const pimHeader = await page.locator('//div[@class="oxd-topbar-header-title"]//h6').first().textContent();
    expect(pimHeader).toBe('PIM');
  });

  test('should navigate to Leave section', {tag: '@regression'}, async ({ page }) => {
    loginPage = new LoginPage(page);
    loginPage.login('Admin', 'admin123');
    await page.click('//a[normalize-space()="Leave"]');
    const leaveHeader = await page.locator('//div[@class="oxd-topbar-header-title"]//h6').first().textContent();
    expect(leaveHeader).toBe('Leave');
  });

  test('should navigate to Time section', {tag: '@regression'}, async ({ page }) => {
    loginPage = new LoginPage(page);
    loginPage.login('Admin', 'admin123');
    await page.click('//a[normalize-space()="Time"]');
    const timeHeader = await page.locator('//div[@class="oxd-topbar-header-title"]//h6').first().textContent();
    expect(timeHeader).toBe('Time');
  });

  test('should navigate to My Info section', {tag: '@regression'}, async ({ page }) => {
    loginPage = new LoginPage(page);
    loginPage.login('Admin', 'admin123');
    await page.click('//a[normalize-space()="My Info"]');
    const myInfoHeader = await page.locator('//div[@class="oxd-topbar-header-title"]//h6').first().textContent();
    expect(myInfoHeader).toBe('PIM');
  });

  test('should navigate to Dashboard section', {tag: '@regression'}, async ({ page }) => {
    loginPage = new LoginPage(page);
    loginPage.login('Admin', 'admin123');
    await page.click('//a[normalize-space()="Dashboard"]');
    const dashboardHeader = await page.locator('//div[@class="oxd-topbar-header-title"]//h6').first().textContent();
    expect(dashboardHeader).toBe('Dashboard');
  });

});