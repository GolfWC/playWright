// import { test, expect } from '../../page-objects/fixture';


// test.describe('providers', () => {

//     const users = JSON.parse(JSON.stringify(require("../../test-data/users.json")));

//     test.beforeEach(async ({ page, login, main }) => {
//         await page.goto(login.url);
//         await login.login(users[0].username, users[0].password);
//         await main.monitor.click();
//         await main.manage.click();
//     });

//     test('71080 view providers', async ({ page, manage }) => {

//         await manage.providers.click();
//         await manage.filter.click();
//         const resultCount = await page.locator('div.provider-table-row.ng-scope').count();
//         expect(resultCount).toBeGreaterThan(0);
//     });
// });