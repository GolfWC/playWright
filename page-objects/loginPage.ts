import { test, expect, Page, Locator } from '@playwright/test';

export class Login {
    readonly page: Page;
    readonly url = 'https://iics-apis-v15-0-test-eks.sp-test.io/apis/accessControl?';
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly authenticationType: Locator;
    readonly language: Locator;
    readonly loginError: Locator;
    readonly logo: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.userName = this.page.locator('input[type="text"]');
        this.password = this.page.locator('#loginControl input[type="password"]');
        this.loginButton = this.page.getByRole('button', { name: 'Log In' });
        this.authenticationType = this.page.getByRole('button', { name: 'APIS' });
        this.language = this.page.getByRole('button', { name: 'English' });
        this.loginError = this.page.getByText('The Credentials Entered Do');
        this.logo = this.page.locator('.logo').first();
    }

    async login(username: string, password: string) {
        await this.userName.click();
        await this.userName.fill(username);
        await this.password.click();
        await this.password.fill(password);
        await this.loginButton.click();
    }
}