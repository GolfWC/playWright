// import { test, expect } from '../../page-objects/fixture';

// test.describe('watch list', () => { 

//     const users = JSON.parse(JSON.stringify(require("../../test-data/users.json")));

//     test.beforeEach(async ({ page, login, main, search }) => {

//         await page.goto(login.url);
//         await login.login(users[0].username, users[0].password);
//         await main.search.click();
//         await search.selectTravelerFilterCriteria('first_name');
//         await search.selectTravelerFilterOperator('contains');
//         await search.travelerInput.fill('Jaime');
//         await search.addCriteriaTraveler.click();
//         await search.selectTravelerFilterCriteria('last_name');
//         await search.selectTravelerFilterOperator('contains');
//         await search.travelerInput.fill('Basurto');
//         await search.addCriteriaTraveler.click();
//         await page.locator('.flex-table-row > div').first().click();
//     });

//     test('64299 watch list info validation', async ({ page, traveler }) => { 
//         await traveler.WL.click();
//         await expect(page.locator('div:nth-child(1) > .wl-hit-group > .wl-tile-value')).toHaveText('BASURTO');
//         await expect(page.locator('div:nth-child(2) > .wl-hit-group > .wl-tile-value').first()).toHaveText('JAIME');
//         await expect(page.locator('div:nth-child(3) > .wl-hit-group > .wl-tile-value').first()).toHaveText('null/null/null');
//         await expect(page.locator('div:nth-child(4) > .wl-hit-group > .wl-tile-value').first()).toHaveText('11114444');
//         await expect(page.locator('div:nth-child(5) > .wl-hit-group > .wl-tile-value').first()).toHaveText('ARG');
//         await expect(page.locator('div:nth-child(6) > .wl-hit-group > .wl-tile-value')).toHaveText('M');
//         await expect(page.locator('div:nth-child(7) > .wl-hit-group > .wl-tile-value')).toBeEmpty();

//     });
// })