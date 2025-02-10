import { test, expect } from '../../page-objects/fixture';

test.describe('interpol', () => { 

    const users = JSON.parse(JSON.stringify(require("../../test-data/users.json")));

    test.beforeEach(async ({ page, login, main }) => {
        await page.goto(login.url);
        await login.login(users[0].username, users[0].password);
        await main.monitor.click();
    });

    test('65458 interpol alerts', async ({ page, main, search, traveler }) => {
        await main.search.click();
        await search.travelerSearch.click();
        await search.selectTravelerFilterCriteria('last_name');
        await search.selectTravelerFilterOperator('contains');
        await search.travelerInput.fill('Bogdanov');
        await search.addCriteriaTraveler.click();
        await page.locator('div.flex-table-row.ng-scope:nth-of-type(2)').click();
        await traveler.IP.click();
        await page.waitForSelector('div.flex-table-row.ng-scope:nth-of-type(2)');
        await expect(page.locator('//*[@id="1"]/div/div[2]/table[1]/tbody/tr[2]/td[1]/div')).toHaveText('High');
        await expect(page.locator('//*[@id="1"]/div/div[2]/table[1]/tbody/tr[2]/td[2]/div')).toHaveText('Wanted');
        await expect(page.locator('//*[@id="1"]/div/div[2]/table[1]/tbody/tr[2]/td[3]/div')).toHaveText('AR');
        await expect(page.locator('//*[@id="1"]/div/div[2]/table[2]/tbody/tr[2]/td[1]/div')).toHaveText('MARIN');
        await expect(page.locator('//*[@id="1"]/div/div[2]/table[2]/tbody/tr[2]/td[2]/div')).toHaveText('BOGDANOV');
        await expect(page.locator('//*[@id="1"]/div/div[2]/table[2]/tbody/tr[2]/td[3]/div')).toHaveText('M');
        await expect(page.locator('//*[@id="1"]/div/div[2]/table[3]/tbody/tr[2]/td[2]/div')).toHaveText('1984-08-14');
        await expect(page.locator('//*[@id="1"]/div/div[2]/table[3]/tbody/tr[2]/td[3]/div')).toHaveText('Belarus');
    });
})
