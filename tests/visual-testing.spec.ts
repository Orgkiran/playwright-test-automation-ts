import { test, expect } from '@playwright/test';

test.describe('Visual Testing - Login Page', () => {
    test('should match the visual snapshot of the login page', async ({ page }) => {
        // Navigate to the login page
        await page.goto('https://www.saucedemo.com/');

        // Wait for the page to load completely
        await page.waitForLoadState('networkidle');

        // Take a screenshot of the login page
        const screenshot = await page.screenshot();

        // Compare the screenshot with the baseline
        expect(screenshot).toMatchSnapshot('login-page.png');
    });

    test('should match the visual snapshot after successful login', async ({ page }) => {
        // Navigate to the login page
        await page.goto('https://www.saucedemo.com/');

        // Wait for the page to load completely
        await page.waitForLoadState('networkidle');

        // Perform login
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        // Wait for the inventory page to load completely
        await page.waitForLoadState('networkidle');

        // Take a screenshot of the inventory page
        const screenshot = await page.screenshot();

        // Compare the screenshot with the baseline
        expect(screenshot).toMatchSnapshot('inventory-page.png');
    });
});