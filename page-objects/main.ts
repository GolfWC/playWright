import { test, expect, Page, Locator } from '@playwright/test';

export class Main {
    readonly page: Page;
    readonly logout: Locator;
    readonly currentTime: Locator;
    readonly historyLog: Locator;
    readonly logo: Locator;
    readonly apis: Locator;
    readonly monitor: Locator;
    readonly search: Locator;
    readonly manage: Locator;
    readonly report: Locator;
    readonly messageHub: Locator;


    constructor(page: Page) {
        this.page = page;
        this.logout = this.page.getByRole('banner').getByRole('img').nth(1);
        this.currentTime = this.page.getByTestId('datetime');
        this.historyLog = this.page.locator('header-nav').getByRole('img');
        this.logo = this.page.getByRole('banner').getByRole('img').first();
        this.apis = this.page.getByText('Advance Passenger Information');
        this.monitor = this.page.locator('#side-label-monitor');
        this.search = this.page.locator('#side-label-search');
        this.manage = this.page.locator('#side-label-manage').first();
        this.report = this.page.locator('#side-label-report');
        this.messageHub = this.page.getByTestId('messageHub');
    }
}