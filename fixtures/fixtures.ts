import { test as baseTest } from '@playwright/test';

// Define custom fixtures
type CustomFixtures = {
    customData: { username: string; password: string };
};

const test = baseTest.extend<CustomFixtures>({
    // Example fixture: a custom data object
    customData: async ({}, use) => {
        const data = { username: 'Admin', password: 'admin123' };
        await use(data);
    },
});

export { test };