import { test, expect, Page, Locator } from '@playwright/test';

export class Report {
    readonly page: Page;
    readonly dataCompliance: Locator;
    readonly dateRange: Locator;
    readonly exportAll: Locator;
    readonly exportView: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dataCompliance = this.page.locator('#report-tab-label-data-compliance');
        this.dateRange = this.page.locator('#multiDateRange');
        this.exportView = this.page.locator('#btn-export-data-compliance-current-view');
        this.exportAll = this.page.locator('#btn-export-data-compliance-all-pages');
    }
}