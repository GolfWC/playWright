import { test as setup, expect } from '@playwright/test';
import { Login } from '../page-objects/login';
import { Main } from '../page-objects/main';

const authFile = 'playwright/.auth/user.json';
const users = JSON.parse(JSON.stringify(require("../test-data/users.json")));


setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  const login = new Login(page);
  const main = new Main(page);
  await page.goto(login.url);
  await login.userName.click();
  await login.userName.fill(users[0].username);
  await login.password.click();
  await login.password.fill(users[0].password);
  await login.loginButton.click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL(login.url);
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(main.apis).toBeVisible();
  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});