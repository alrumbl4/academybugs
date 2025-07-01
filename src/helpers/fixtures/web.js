import { test as base } from '@playwright/test';
import { App } from '../../pages/app'

export const test = base.extend({
  app: async ({ page }, use) => {
    const app = new App(page);
    await use(app);
  },
});


export { expect } from '@playwright/test';