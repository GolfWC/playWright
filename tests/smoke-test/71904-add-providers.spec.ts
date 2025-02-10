import { test, expect } from '../../page-objects/fixture';


test.describe('providers', () => {

    const users = JSON.parse(JSON.stringify(require("../../test-data/users.json")));

    test.beforeEach(async ({ page, login, main }) => {
        await page.goto(login.url);
        await login.login(users[0].username, users[0].password);
        await main.monitor.click();
        await main.manage.click();
    });

    test('71904 add provider', async ({ page, manage }) => {
        await manage.providers.click();
        await manage.addProvider.click();
        await manage.name.fill('provider1');
        await manage.description.fill('description1');
        await manage.expirationDate.fill('2022-12-31');
        await manage.tokenButton.click();
        await manage.enabled.selectOption('Enabled');
        await manage.certification.selectOption('Certified');
        await manage.transportType.selectOption('Air');
        await manage.transportCode.fill('123');
        await manage.category.selectOption('Regional');
        await manage.IBMMQSenderID.fill('123');
        await manage.SITATEXSenderID.fill('123');
        await manage.email.fill('test@test.com');
        await manage.create.click();
        await expect(page.locator('div.provider-table-row.ng-scope').last().filter({ hasText: 'provider1'})).toBeVisible();
        await manage.providerRow.click();
        await manage.delete.click();
    });
});