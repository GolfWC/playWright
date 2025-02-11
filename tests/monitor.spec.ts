// import { test, expect } from '@playwright/test';
// import { Login } from '../page-objects/loginPage';
// import { Main } from '../page-objects/mainPage';
// //import { ApisSearch } from '../page-objects/apis-search';

// test.describe('monitor tab', () => {
//     let login;
//     let main;
//     let monitor;
//     const users = JSON.parse(JSON.stringify(require("../test-data/users.json")));

//     test.beforeEach(async ({ page }) => {
//         login = new Login(page);
//         main = new Main(page);
//         //search = new ApisSearch(page);
//         await page.goto(login.url);
//         await login.login(users[0].username, users[0].password);
//     });
//     test('monitor tab is visible', async ({ page }) => {
//         const main = new Main(page);
//         await expect(main.monitor).toBeVisible();
//     });
// })
 