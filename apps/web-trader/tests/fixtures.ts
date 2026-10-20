import { test as base } from "@playwright/test";
export * from "@playwright/test";

// Keep unrelated product journeys independent of the first-visit offer.
// The offer's own specification imports Playwright directly and tests first visits.
export const test = base.extend({
  page: async ({ page }, use) => {
    await page.addInitScript(() => {
      sessionStorage.setItem("azuriya:launch-offer-seen", "true");
    });
    await use(page);
  },
});
