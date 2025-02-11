// import { test, expect } from '../../page-objects/fixture';


// test.describe('search', () => { 

//     const users = JSON.parse(JSON.stringify(require("../../test-data/users.json")));

//     test.beforeEach(async ({ page, main, login }) => {
//         await page.goto(login.url);
//         await login.login(users[0].username, users[0].password);
//         await main.monitor.click();
//     });

//     test('71059 flights search', async ({ page, main, search }) => {
//         await main.search.click();
//         await search.flightsSearch.click();
//         await search.selectFlightFilterCriteria('trip_reference');
//         await search.selectFlightFilterOperator('contains');
//         await search.flightInput.fill('0908');
//         await search.addCriteriaFlights.click();
//         await search.selectFlightFilterCriteria('archived');
//         await search.flightSelection.selectOption('Show');
//         await search.addCriteriaFlights.click();
//         await main.historyLog.click();
//         await page.locator('div.history-nav-item.ng-scope').first().click();
//         const resultCount = await page.locator('div.flex-table-row.ng-scope').count();
//         expect(resultCount).toBe(3);
//     });
// })


