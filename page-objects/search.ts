import { test, expect, Page, Locator } from '@playwright/test';

export class Search {
    readonly page: Page;
    readonly searchTitle: Locator;
    readonly flightsSearch: Locator;
    readonly flightFilter: Locator;
    readonly flightOperator: Locator;
    readonly flightInput: Locator;
    readonly flightSelection: Locator;
    readonly travelerSearch: Locator;
    readonly travelerFilter: Locator;
    readonly travelerOperator: Locator;
    readonly travelerInput: Locator;
    readonly genderSelection: Locator;
    readonly addCriteriaTraveler: Locator;
    readonly addCriteriaFlights: Locator;
    readonly filter1: Locator;


    constructor(page: Page) {
        this.page = page;
        this.searchTitle = this.page.locator('header-nav').getByText('Search');
        //flight search filter
        this.flightsSearch = this.page.getByText('Flights Search');
        this.flightFilter = this.page.locator('flight-query-builder #select-selected-field');
        this.flightOperator = this.page.locator('flight-query-builder #selected-selected-operator');
        this.flightInput = this.page.getByRole('textbox');
        this.flightSelection = this.page.locator('#select-limited-input').last(); // options: Show, Hide
        
        //traveler search filter
        this.travelerSearch = this.page.getByText('Traveler Search');
        this.travelerFilter = this.page.locator('traveler-query-builder #select-selected-field');
        this.travelerOperator = this.page.locator('traveler-query-builder #selected-selected-operator');
        this.travelerInput = this.page.getByRole('textbox');
        this.genderSelection = this.page.locator('#select-limited-input').first();

        this.addCriteriaTraveler = this.page.locator('traveler-query-builder').getByText('Add Criteria');
        this.addCriteriaFlights = this.page.locator('flight-query-builder').getByText('Add Criteria');
        //this.addCriteria = this.page.locator('traveler-query-builder').getByText('Add Criteria');
        //this.filter1 = this.page.getByText('Contains', { exact: true }).nth(1);
    }

    async addTravelerFilterCriteria(criteria: string, operator: string, input: string) {
        await this.selectTravelerFilterCriteria(criteria);
        await this.selectTravelerFilterOperator(operator);
        await this.travelerInput.fill(input);
        
    }

    async addFlightFilterCriteria(criteria: string, operator: string, input: string) {
        await this.selectFlightFilterCriteria(criteria);
        await this.selectFlightFilterOperator(operator);
        await this.flightInput.fill(input);
    }

    async selectTravelerFilterCriteria(criteria: string) {
        switch (criteria) {
            case 'first_name':
                await this.travelerFilter.selectOption('first_name');
                break;
            case 'last_name':
                await this.travelerFilter.selectOption('last_name');
                break;
            case 'gender':
                await this.travelerFilter.selectOption('gender');
                break;
            case 'email':
                await this.travelerFilter.selectOption('email');
                break;
            case 'docnumber':
                await this.travelerFilter.selectOption('docnumber');
                break;
            case 'nationality':
                await this.travelerFilter.selectOption('nationality');
                break;
            case 'dob':
                await this.travelerFilter.selectOption('dob');
                break
        }
    }

    async selectFlightFilterCriteria(criteria: string) {
        switch (criteria) {
            case 'trip_reference':
                await this.flightFilter.selectOption('trip_reference');
                break;
            case 'mode':
                await this.flightFilter.selectOption('mode');
                break;
            case 'archived':
                await this.flightFilter.selectOption('archived');
                break;
            case 'transport_code':
                await this.flightFilter.selectOption('operator_code');
                break
        }
    }

    async selectTravelerFilterOperator(operator: string) {
        switch (operator) {
            case 'Contains':
                await this.travelerOperator.selectOption('Contains');
                break;
            case 'equals':
                await this.travelerOperator.selectOption('equals');
                break;
            case 'not_equals':
                await this.travelerOperator.selectOption('not_equals');
                break;
            case 'before':
                await this.travelerOperator.selectOption({ label: 'Before' });
                break;
            case 'after':
                await this.travelerOperator.selectOption({ label: 'After' });
                break;
            case 'custom':
                await this.travelerOperator.selectOption({ label: 'Custom' });
                break
        }
    }

    async selectFlightFilterOperator(operator: string) {
        switch (operator) {
            case 'Contains':
                await this.travelerOperator.selectOption('Contains');
                break;
            case 'equals':
                await this.travelerOperator.selectOption('equals');
                break;
            case 'not_equals':
                await this.travelerOperator.selectOption('not_equals');
                break
        }
    }

    async selectGender(gender: string) {
        switch(gender) {
            case 'male':
                await this.travelerOperator.selectOption({ label: 'Male' });
                break;
            case 'female':
                await this.travelerOperator.selectOption({ label: 'Female' });
                break;
        }
    }
}