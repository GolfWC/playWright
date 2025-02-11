// import { test, expect } from '@playwright/test';
// import { Login } from '../page-objects/loginPage';
// import { Main } from '../page-objects/mainPage';
// import { Search } from '../page-objects/searchPage';
// import { Traveler } from '../page-objects/travelerPage';

// test.describe('traveler explorer', () => { 
//     let login;
//     let main;
//     let search;
//     let traveler;
//     const users = JSON.parse(JSON.stringify(require("../test-data/users.json")));

//     test.beforeEach(async ({ page }) => {
//         login = new Login(page);
//         main = new Main(page);
//         search = new Search(page);
//         traveler = new Traveler(page);
//         await page.goto(login.url);
//         await login.login(users[0].username, users[0].password);
//         await main.search.click();
//         await search.selectTravelerFilterCriteria('first_name');
//         await search.selectTravelerFilterOperator('contains');
//         await search.travelerInput.fill('Ruby');
//         await search.addCriteria.click();
//         await search.selectTravelerFilterCriteria('last_name');
//         await search.selectTravelerFilterOperator('contains');
//         await search.travelerInput.fill('Davis');
//         await search.addCriteria.click();
//         await page.getByText('RUBY DAVIS 07/21/1953 MEX P').click();

//     });

//     test('selected travelr info and travel history', async ({ page }) => {
//         //await expect(page.getByText('RUBY DAVIS 07/21/1953 MEX P')).toBeVisible();
//         //await page.getByText('RUBY DAVIS 07/21/1953 MEX P').click();
//         await expect(traveler.travelerExplorer).toBeVisible();
//         //await expect(traveler.givenName).toHaveText('RUBY');
//         //await expect(traveler.surname).toHaveText('DAVIS');
//         //await expect(traveler.gender).toHaveText('F');
//         //await expect(traveler.nationality).toHaveText('MEX');
//         //await expect(traveler.dateOfBirth).toHaveText('1953-07-21'); 
//         //await expect(traveler.age).toHaveText('70 Years');
//         //await expect(traveler.document).toHaveText('P 666585823');
//         await expect(traveler.travelHistory).toBeVisible();
//     });

//     // test('map view', async ({ page }) => {
//     //     await traveler.map.click();
//     //     await expect(page.locator('path').first()).toHaveScreenshot('images/map.png');
//     // });

//     // test('polar view', async ({ page }) => {
//     //     await traveler.polar.click();
//     //     //await page.locator('.polar-view-graph-container').screenshot({ path: 'screenshot.png' });
//     //     await expect(page.locator('.polar-view-graph-container')).toHaveScreenshot('images/polar.png');
//     // });

//     // test('companion travelers', async ({ page }) => {
//     //     await traveler.companion.click();
//     //     await expect(traveler.companionList).toBeEmpty();
//     // });

//     // test('DCS', async ({ page }) => {
//     //     await traveler.DCS.click();
//     //     await expect(page.locator('datasource-view div').filter({ hasText: 'Source: DCS Reservation Data' }).first()).toHaveScreenshot('images/dcs.png');
//     // });

//     // test('API', async ({ page }) => {
//     //     await traveler.API.click();
//     //     //to do
//     //     //await expect(traveler.companionList).toBeEmpty();
//     // });

//     // test('WL', async ({ page }) => {
//     //     await traveler.WL.click();
//     //     //to do
//     //     //await expect(traveler.companionList).toBeEmpty();
//     // });

//     // test('CWL', async ({ page }) => {
//     //     await traveler.CWL.click();
//     //     //to do
//     //     //await expect(traveler.companionList).toBeEmpty();
//     // });

//     // test('IP', async ({ page }) => {
//     //     await traveler.IP.click();
//     //     //to do
//     //     //await expect(traveler.companionList).toBeEmpty();
//     // });

//     // test('POI', async ({ page }) => {
//     //     await traveler.POI.click();
//     //     //to do
//     //     //await expect(traveler.companionList).toBeEmpty();
//     // });

//     // test('travelers information', async ({ page }) => {
//     //     await traveler.travelerCheck.click();
//     //     //passport
//     //     await expect(traveler.passportType).toHaveText('P');
//     //     await expect(traveler.passportNumber).toHaveText('666585823');
//     //     await expect(traveler.nameOnThePassport).toHaveText('RUBY DAVIS');
//     //     await expect(traveler.passportIssuingCountry).toHaveText('ARG');
//     //     //dual nationality
//     //     await expect(traveler.dualNationality).toHaveText('No records');
//     //     //visa
//     //     await expect(traveler.id).toHaveText('1234001233');
//     //     await expect(traveler.maxStay).toHaveText('30');
//     //     await expect(traveler.visaType).toHaveText('B-2');
//     //     await expect(traveler.dateOfIssue).toHaveText('2017-09-29');
//     //     await expect(traveler.dateOfExpiry).toHaveText('2027-09-29');
//     //     await expect(traveler.purposeOfVisit).toHaveText('Turism');
//     //     await expect(traveler.visaRegistrationNumber).toHaveText('1234');
//     //     await expect(traveler.eVisaNumber).toHaveText('1234');
//     //     //application
//     //     await expect(traveler.applicantName).toHaveText('RUBY DAVIS');
//     //     await expect(traveler.genderApplication).toHaveText('M');
//     //     await expect(traveler.placeOfBirthApplication).toHaveText('Argentina');
//     //     await expect(traveler.dateOfBirthApplication).toHaveText('1990-09-29');
//     //     await expect(traveler.nationalityApplication).toHaveText('Argentina');
//     //     await expect(traveler.passportTypeApplication).toHaveText('P');
//     //     await expect(traveler.passportNumberApplication).toHaveText('666585823');
//     //     await expect(traveler.placeOfIssueApplication).toHaveText('Argentina');
//     //     await expect(traveler.passportExpiryDateApplication).toHaveText('2017-09-29');
//     // });
// });