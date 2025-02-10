import { test as base } from '@playwright/test';
import { Login } from './login';
import { Main } from './main';
import { Manage } from './manage';
import { Search } from './search';
import { Traveler } from './traveler';
import { Monitor } from './monitor';
import { Manifest } from './manifest';
import { Report } from './report';

type MyFixtures = {
    login: Login;
    main: Main;
    manage: Manage;
    search: Search;
    traveler: Traveler;
    monitor: Monitor;
    manifest: Manifest;
    report: Report;
};

export const test = base.extend<MyFixtures>({
    login: async ({ page }, use) => {
        const login = new Login(page);
        await use(login);
    },
    main: async ({ page }, use) => {
        const main = new Main(page);
        await use(main);
    },
    manage: async ({ page }, use) => {
        const manage = new Manage(page);
        await use(manage);
    },
    search: async ({ page }, use) => {
        const search = new Search(page);
        await use(search);
    },
    traveler: async ({ page }, use) => {
        const traveler = new Traveler(page);
        await use(traveler);
    },
    monitor: async ({ page }, use) => {
        const monitor = new Monitor(page);
        await use(monitor);
    },
    manifest: async ({ page }, use) => {
        const manifest = new Manifest(page);
        await use(manifest);
    },
    report: async ({ page }, use) => {
        const report = new Report(page);
        await use(report);
    }
});

export { expect } from '@playwright/test';