import { Locator, Page } from '@playwright/test';

export class DashboardPage {
    private page: Page;
    private dashboardHeader: Locator;
    private adminLink: Locator;
    private pimLink: Locator;
    private leaveLink: Locator;
    private timeLink: Locator;
    private myInfoLink: Locator;
    private dashboardLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardHeader = page.locator('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module');
        this.adminLink = page.locator('//a[normalize-space()="Admin"]');
        this.pimLink = page.locator('//a[normalize-space()="PIM"]');
        this.leaveLink = page.locator('//a[normalize-space()="Leave"]');
        this.timeLink = page.locator('//a[normalize-space()="Time"]');
        this.myInfoLink = page.locator('//a[normalize-space()="My Info"]');
        this.dashboardLink = page.locator('//a[normalize-space()="Dashboard"]');
    }

    //methods

    async getDashboardHeaderText(): Promise<string> {
        return await this.dashboardHeader.textContent() || '';
    }

    async clickAdminLink(): Promise<void> {
        await this.adminLink.click();
    }

    async clickPIMLink(): Promise<void> {
        await this.pimLink.click();
    }

    async clickLeaveLink(): Promise<void> {
        await this.leaveLink.click();
    }

    async clickTimeLink(): Promise<void> {
        await this.timeLink.click();
    }

    async clickMyInfoLink(): Promise<void> {
        await this.myInfoLink.click();
    }

    async clickDashboardLink(): Promise<void> {
        await this.dashboardLink.click();
    }

    async navigateToSection(sectionName: string): Promise<void> {
        await this.page.click(`//a[normalize-space()="${sectionName}"]`);
    }


}