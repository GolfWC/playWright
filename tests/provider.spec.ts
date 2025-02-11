// import { test, expect } from '@playwright/test';
// import { Login } from '../page-objects/loginPage';
// import { Main } from '../page-objects/mainPage';
// import { Search } from '../page-objects/searchPage';
// import { Traveler } from '../page-objects/travelerPage';
// import { Manage } from '../page-objects/managePage';

// test.describe('provider', () => { 
//     let login;
//     let main;
//     let search;
//     let traveler;
//     let manage;
//     const users = JSON.parse(JSON.stringify(require("../test-data/users.json")));

//     test.beforeEach(async ({ page }) => {
//         login = new Login(page);
//         main = new Main(page);
//         search = new Search(page);
//         traveler = new Traveler(page);
//         manage = new Manage(page);
//         await page.goto(login.url);
//         await login.login(users[0].username, users[0].password);
//         await main.manage.click();
//     });

//     test('add provider', async ({ page }) => {
//         await manage.providers.click();
//         await manage.addProvider.click();
//         await manage.name.fill('provider1');
//         await manage.description.fill('description1');
//         await manage.expirationDate.fill('2022-12-31');
//         await manage.tokenButton.click();
//         await manage.enabled.selectOption('Enabled');
//         await manage.certification.selectOption('Certified');
//         await manage.transportType.selectOption('Air');
//         await manage.transportcode.fill('123');
//         await manage.category.selectOption('Regional');
//         await manage.IBMMQSenderID.fill('123');
//         await manage.SITATEXSenderID.fill('123');
//         await manage.email.fill('test@test.com');
//         await manage.create.click();
//         //console.log(await manage.providerList.count());
//         //await expect(manage.providerList.count().toBeGreaterThan(0));
//     });

//     test('update provider', async ({ page }) => {
//         await manage.providers.click();
//         await manage.providerRow.click();
//         await manage.description.fill('description2');
//         await manage.update.click();
//         await expect(page.getByText('description2')).toHaveText('description2');
//     });

//     test('delete provider', async ({ page }) => {
//         await manage.providers.click();
//         await manage.providerRow.click();
//         const beforeDeletion = await page.locator('div.provider-table-row.ng-scope').count();
//         await manage.delete.click();
//         await page.locator('div.provider-table-row.ng-scope').last().click();
//         await manage.cancel.click();
//         const AfterDeletion = await page.locator('div.provider-table-row.ng-scope').count();
//         //let result = beforeDeletion - AfterDeletion;
//         await expect(beforeDeletion - AfterDeletion).toBe(1);
//     });

// })