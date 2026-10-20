import { expect, test } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    if (!sessionStorage.getItem("azuriya:offer-test-initialized")) {
      sessionStorage.removeItem("azuriya:launch-offer-seen");
      sessionStorage.setItem("azuriya:offer-test-initialized", "true");
    }
  });
});

test("launch offer shows the full commercial terms, closes on Escape and can be reopened", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  const offer = page.getByRole("dialog", {
    name: "Your next chapter starts here.",
  });
  await expect(offer).toBeVisible({ timeout: 12_000 });
  await expect(offer.locator(".lop-price")).toContainText("$0");
  await expect(offer.locator(".lop-price")).toContainText("per month");
  await expect(offer.locator(".lop-revenue-share")).toContainText("35%");
  await expect(offer.locator(".lop-availability")).toContainText(
    "97 slots remaining",
  );
  await expect(offer.locator("progress")).toHaveAttribute("value", "97");
  await expect(
    offer.getByRole("link", { name: "Terms & conditions" }),
  ).toHaveAttribute("href", "/legal/terms#launch-offer");
  await expect(offer).not.toContainText("3 remaining");
  await offer.press("Escape");
  await expect(offer).not.toBeVisible();
  expect(
    await page.evaluate(() =>
      sessionStorage.getItem("azuriya:launch-offer-seen"),
    ),
  ).toBe("true");
  const reopen = page.getByRole("button", { name: "View launch offer" });
  await reopen.click();
  await expect(offer).toBeVisible();
  await offer.getByRole("button", { name: "Close launch offer" }).click();
  await expect(reopen).toBeFocused();
  await reopen.click();
  await expect(offer).toBeVisible();
  await page.mouse.click(4, 4);
  await expect(offer).not.toBeVisible();
  await expect(reopen).toBeFocused();
  expect(errors).toEqual([]);
});

test("cookie preferences take priority and do not compete with the offer", async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.removeItem("azuriya:site-consent");
    sessionStorage.removeItem("azuriya:consent-dismissed");
    document.cookie = "azuriya_site_consent=; Path=/; Max-Age=0";
  });
  await page.route("**/api/site-locale", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ locale: "en", source: "browser" }),
    }),
  );
  await page.goto("/");
  const preferences = page.locator(".sf-visitor-dialog");
  const offer = page.locator(".lop-dialog");
  await expect(preferences).toBeVisible();
  // The delay has elapsed while the visitor is still choosing privacy preferences.
  await page.waitForTimeout(2500);
  await expect(offer).not.toBeVisible();
  await preferences.press("Escape");
  await expect(offer).toBeVisible({ timeout: 8000 });
  await expect(page.locator("dialog[open]")).toHaveCount(1);
  await offer.getByRole("link", { name: "View pricing" }).click();
  await expect(page).toHaveURL(/\/pricing$/);
  await expect(offer).not.toBeVisible();
});

test("launch offer artwork and layout remain contained in both themes at desktop, tablet and phone widths", async ({
  page,
}) => {
  const artifacts = path.resolve(
    process.cwd(),
    "../../.local/launch-offer-ui-audit",
  );
  await mkdir(artifacts, { recursive: true });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/pricing");
  for (const theme of ["dark", "light"]) {
    await page.evaluate((value) => {
      localStorage.setItem("azuriya.marketing-theme", value);
      document.documentElement.dataset.marketingTheme = value;
      window.dispatchEvent(new Event("azuriya:marketing-theme-change"));
    }, theme);
    for (const width of [1512, 768, 390, 320]) {
      const height = width === 320 ? 568 : 982;
      await page.setViewportSize({ width, height });
      await page.getByRole("button", { name: "View launch offer" }).click();
      const offer = page.locator(".lop-dialog");
      await expect(offer).toBeVisible();
      const bounds = await offer.boundingBox();
      expect(bounds).not.toBeNull();
      expect(bounds!.x).toBeGreaterThanOrEqual(0);
      expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width);
      expect(bounds!.y).toBeGreaterThanOrEqual(0);
      expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(height);
      expect(
        await offer.evaluate(
          (element) => element.scrollWidth <= element.clientWidth,
        ),
      ).toBe(true);
      const art = offer.locator(".lop-art .az-icon-3d");
      await expect(art).toBeVisible();
      const assetLoaded = await art.evaluate(async (element) => {
        const background = getComputedStyle(element).backgroundImage;
        const url = /^url\(["']?(.*?)["']?\)$/.exec(background)?.[1];
        if (!url) return false;
        const image = new Image();
        image.src = url;
        await image.decode();
        return image.naturalWidth > 0 && image.naturalHeight > 0;
      });
      expect(assetLoaded).toBe(true);
      await page.screenshot({
        path: path.join(artifacts, `offer-${theme}-${width}.png`),
      });
      await offer.press("Escape");
      if (width === 390) {
        await page.locator(".az-menu-toggle").click();
        const menu = page.getByRole("navigation", {
          name: "Mobile navigation",
        });
        await expect(menu).toBeVisible();
        await menu.locator("summary").filter({ hasText: "Products" }).click();
        await expect(
          menu.getByRole("link", { name: /Trading Platform/ }).first(),
        ).toBeVisible();
        expect(
          await menu.evaluate(
            (element) => element.scrollWidth <= element.clientWidth,
          ),
        ).toBe(true);
        await page.screenshot({
          path: path.join(artifacts, `menu-${theme}-390.png`),
        });
        await page.locator(".az-menu-toggle").click();
      }
    }
  }
});

test("a dismissed offer stays dismissed for the session and can be opened on a narrow phone", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const offer = page.locator(".lop-dialog");
  await expect(offer).toBeVisible({ timeout: 12_000 });
  const bounds = await offer.boundingBox();
  expect(bounds).not.toBeNull();
  expect(bounds!.x).toBeGreaterThanOrEqual(0);
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(320);
  expect(bounds!.y).toBeGreaterThanOrEqual(0);
  expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(568);
  expect(
    await offer.evaluate(
      (element) => element.scrollWidth <= element.clientWidth,
    ),
  ).toBe(true);
  await offer.press("Escape");
  // Do not clear the session entry when loading the same page again.
  await page.reload();
  await page.waitForTimeout(2500);
  await expect(offer).not.toBeVisible();
  await page.getByRole("button", { name: "View launch offer" }).click();
  await expect(offer).toBeVisible();
  await offer.getByRole("link", { name: "Contact Sales" }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(offer).not.toBeVisible();
});
