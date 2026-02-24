import { Locator, Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    // Methods
    async navigateToLoginPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async enterUsername(username: string) {
        await this.usernameInput.fill(username);
        console.log(`Entered username: ${username}`);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
        console.log(`Entered password: ${password}`);
    }

    async clickLoginButton() {
        await this.loginButton.click();
        console.log('Clicked login button');
    }

    async login(username: string, password: string) {
        await this.navigateToLoginPage();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}