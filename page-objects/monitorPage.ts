import { test, expect, Page, Locator } from '@playwright/test';

export class Monitor {
    readonly page: Page;
    readonly monitor: Locator;
    readonly modes: Locator;
    readonly time: Locator;
    readonly allTime: Locator;
    readonly currentTime: Locator;
    readonly onlyPossibleHits: Locator;
    readonly riskAssessmentAlert: Locator;
    readonly watchlistInterpolHit: Locator;
    readonly dataAlert: Locator;

    constructor(page: Page) {
        this.page = page;
        this.monitor = this.page.locator('#side-label-monitor');
        this.modes = this.page.locator('#dd-modes-selected-mode');
        this.time = this.page.locator('#dd-modes-selected-time');
        this.allTime = this.page.locator('#btn-selected-time-all-time');
        this.currentTime = this.page.locator('#btn-selected-time-current-time');
        this.onlyPossibleHits = this.page.locator('#btn-filter-only-issue-unchecked');
        this.riskAssessmentAlert = this.page.getByText('- Risk Assessment Alert');
        this.watchlistInterpolHit = this.page.getByText('- Watchlist/Interpol Hit');
        this.dataAlert = this.page.getByText('- Data Alert');
    }
}