import { test, expect } from '../page-objects/fixture';


test.describe('Report', () => {

    const users = JSON.parse(JSON.stringify(require("../test-data/users.json")));

    test.beforeEach(async ({ page, login }) => {
        await page.goto(login.url);
        await login.login(users[0].username, users[0].password);
    });

    test('71083 report data compliance', async ({ page, main, report }) => {
        await main.report.click();
        await report.dataCompliance.click();
        await report.dateRange.click();
        await page.locator('.ranges > ul > li:nth-of-type(3)').click();

        const [download] = await Promise.all([
            page.waitForEvent('download'), 
            report.exportAll.click()
        ]);
        
        await download.saveAs('saved_report/all_flights.pdf');
        await expect('saved_report/all_flights.pdf').toBeTruthy();
    });

});