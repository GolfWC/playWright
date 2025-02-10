import { test, expect } from '../../page-objects/fixture';


test.describe('login', () => {

    const users = JSON.parse(JSON.stringify(require("../../test-data/users.json")));

    test.beforeEach(async ({ page, login }) => {
        await page.goto(login.url);
    });

    test('3831 APIS Monitor - Login with valid credentials', async ({ page, login, main }) => {
        await login.userName.click();
        await login.userName.fill(users[0].username);
        await login.password.click();
        await login.password.fill(users[0].password);
        await login.loginButton.click();
        await page.waitForSelector('div.side-nav');
        await expect(main.apis).toBeVisible();
    });
});