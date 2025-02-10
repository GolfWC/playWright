import { test, expect } from '../../page-objects/fixture';


test.describe('login', () => {

    const users = JSON.parse(JSON.stringify(require("../../test-data/users.json")));

    test.beforeEach(async ({ page, login }) => {
        await page.goto(login.url);
    });

    test('3838 APIS Monitor - Logout', async ({ page, login, main }) => {
        await login.login(users[0].username, users[0].password);
        await page.waitForSelector('div.side-nav');
        await expect(main.apis).toBeVisible();
        await main.logout.click();
        await expect(login.logo).toBeVisible();
        await expect(login.userName).toBeVisible();
        await expect(login.password).toBeVisible();
    });
});