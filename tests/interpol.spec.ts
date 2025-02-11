// import { test, expect } from '../page-objects/fixture';
// import { Search } from '../page-objects/searchPage';

// test.describe('interpol', () => { 

//     const users = JSON.parse(JSON.stringify(require("../test-data/users.json")));

//     test.beforeEach(async ({ page, login, main }) => {
//         await page.goto(login.url);
//         await login.login(users[0].username, users[0].password);
//         await main.monitor.click();
//     });

//     test('passenger with interpol hit info is correct', async ({ page, main, search, traveler }) => {
//         await main.search.click();
//         await search.travelerSearch.click();
//         await search.selectTravelerFilterCriteria('last_name');
//         await search.selectTravelerFilterOperator('contains');
//         await search.travelerInput.fill('Bogdanov');
//         await search.addCriteriaTraveler.click();
//         await page.locator('div.flex-table-row.ng-scope:nth-of-type(2)').click();
//         await traveler.IP.click();
//         await expect(page.locator('//*[@id="1"]/div/div[2]/table[1]/tbody/tr[2]/td[1]/div')).toHaveText('High');
//         await expect(page.locator('//*[@id="1"]/div/div[2]/table[1]/tbody/tr[2]/td[2]/div')).toHaveText('Wanted');
//         await expect(page.locator('//*[@id="1"]/div/div[2]/table[1]/tbody/tr[2]/td[3]/div')).toHaveText('AR');
//         await expect(page.locator('//*[@id="1"]/div/div[2]/table[2]/tbody/tr[2]/td[1]/div')).toHaveText('MARIN');
//         await expect(page.locator('//*[@id="1"]/div/div[2]/table[2]/tbody/tr[2]/td[2]/div')).toHaveText('BOGDANOV');
//         await expect(page.locator('//*[@id="1"]/div/div[2]/table[2]/tbody/tr[2]/td[3]/div')).toHaveText('M');
//         await expect(page.locator('//*[@id="1"]/div/div[2]/table[3]/tbody/tr[2]/td[2]/div')).toHaveText('1984-08-14');
//         await expect(page.locator('//*[@id="1"]/div/div[2]/table[3]/tbody/tr[2]/td[3]/div')).toHaveText('Belarus');
//     });

//     test('passenger with interpol hit pdf download', async ({ page, main, search, traveler }) => {
//         await main.search.click();
//         await search.travelerSearch.click();
//         await search.selectTravelerFilterCriteria('last_name');
//         await search.selectTravelerFilterOperator('contains');
//         await search.travelerInput.fill('Bogdanov');
//         await search.addCriteriaTraveler.click();
//         await page.locator('div.flex-table-row.ng-scope:nth-of-type(2)').click();
//         await traveler.IP.click();
//         const page1Promise = page.waitForEvent('popup');
//         await page.locator('alert-view').getByRole('img').first().click();
//         const download2Promise = page.waitForEvent('download');
//         await page.getByRole('row', { name: 'image0.png Download' }).getByRole('button').click();
//         const download2 = await download2Promise;
//         await download2.saveAs('captured_images/image0.png');
//         expect(download2.suggestedFilename()).toBe('image0.png');
//         expect('captured_images/image0.png').toMatch('images/image0.png');
//     });
// })
