import { test, expect } from '../../page-objects/fixture';


test.describe('search', () => { 

    const users = JSON.parse(JSON.stringify(require("../../test-data/users.json")));

    test.beforeEach(async ({ page, main, login }) => {
        await page.goto(login.url);
        await login.login(users[0].username, users[0].password);
        await main.monitor.click();
    });

    test('71060 traveler search', async ({ page, main, search }) => {
        await main.search.click();
        await search.travelerSearch.click();
        await search.selectTravelerFilterCriteria('first_name');
        await search.selectTravelerFilterOperator('contains');
        await search.travelerInput.fill('monique');
        await search.addCriteriaTraveler.click();
        await search.selectTravelerFilterCriteria('last_name');
        await search.travelerInput.fill('becker');
        await search.addCriteriaTraveler.click();
        //await page.waitForSelector(busyIndicator, { state: 'hidden' });
        //await page.locator('div.search-page-query-list-pill.ng-scope').last().click();
        //wait(2000);
        //await page.locator('div.flex-table-row.ng-scope').last().isVisible();
        await main.historyLog.click();
        await page.locator('div.history-nav-item.ng-scope').first().click();
        const resultCount = await page.locator('div.flex-table-row.ng-scope').count();
        expect(resultCount).toBe(1);
    });
})


