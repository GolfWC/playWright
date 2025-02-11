import { test, expect, Page, Locator } from '@playwright/test';

export class Manifest {
    readonly page: Page;
    readonly manifestTitle: Locator;
    //service information
    readonly service: Locator;
    readonly route: Locator;
    readonly departurePort: Locator;
    readonly departureTime: Locator;
    readonly arrivalPort: Locator;
    readonly arrivalTime: Locator;
    readonly countDown: Locator;
    //traveler overview
    readonly travelers: Locator;
    readonly crew: Locator;
    //source information
    readonly PNR: Locator;
    readonly API: Locator;
    readonly DCS: Locator;
    readonly BCS: Locator;
    readonly created: Locator;
    readonly lastUpdate: Locator;
    readonly updateCount: Locator;
    readonly analyzed: Locator;

    constructor(page: Page) {
        this.page = page;
        this.manifestTitle = this.page.getByText('Manifest View');
        //service information
        this.service = this.page.locator('class=ng-binding flight-details-info-value');
        this.route = this.page.getByText('Route');
        this.departurePort = this.page.getByText('.ng-binding flight-details-info-value');
        this.departureTime = this.page.getByText('Departure Time');
        this.arrivalPort = this.page.getByText('Arrival Port');
        this.arrivalTime = this.page.getByText('Arrival Time');
        this.countDown = this.page.getByText('Count Down');
        //traveler overview
        this.travelers = this.page.getByText('Travelers');
        this.crew = this.page.getByText('Crew');
        //source information
        this.PNR = this.page.getByText('PNR');
        this.API = this.page.getByText('API');
        this.DCS = this.page.getByText('DCS');
        this.BCS = this.page.getByText('BCS');
        this.created = this.page.getByText('Created');
        this.lastUpdate = this.page.getByText('Last Update');
        this.updateCount = this.page.getByText('Update Count');
        this.analyzed = this.page.getByText('Analyzed');
    }
}