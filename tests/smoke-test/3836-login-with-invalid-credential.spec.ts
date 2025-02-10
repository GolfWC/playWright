import { test, expect } from '../../page-objects/fixture';


test.describe('login', () => {

    const users = JSON.parse(JSON.stringify(require("../../test-data/users.json")));

    test.beforeEach(async ({ page, login }) => {
        await page.goto(login.url);
    });

    test('3836 - login with incorrect username and password', async ({ page, login }) => {
        await login.userName.click();
        await login.userName.fill(users[1].username);
        await login.password.click();
        await login.password.fill(users[1].password);
        await login.loginButton.click();
        await page.waitForSelector('#loginControl');
        await expect(login.loginError).toContainText('The Credentials Entered Do Not Match Our Records');
    });
});