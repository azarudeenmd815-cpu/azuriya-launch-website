import { expect, test } from "@playwright/test";

const menuPaths = {
  Products: ["/platform", "/azuriya-core", "/automation"],
  Traders: ["/trading-platforms", "/copy-trading", "/community"],
  Business: [
    "/brokerage",
    "/broker-pricing",
    "/resources/brokerage-launch-blueprint",
    "/prop-firm",
    "/prop-pricing",
    "/resources/prop-firm-launch-blueprint",
    "/technical-integration",
    "/business-hub",
    "/admin-portal",
  ],
} as const;

test("desktop mega menus expose independent pages and close with Escape or an outside click", async ({
  page,
}) => {
  await page.goto("/");
  const header = page.getByRole("banner");
  const navigation = page.getByRole("navigation", {
    name: "Main navigation",
    exact: true,
  });

  for (const [label, paths] of Object.entries(menuPaths)) {
    const trigger = navigation.getByRole("button", {
      name: label,
      exact: true,
    });
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    for (const path of paths) {
      await expect(header.locator(`a[href="${path}"]:visible`)).toBeVisible();
    }
    await header.locator(`a[href="${paths[0]}"]:visible`).focus();
    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toBeFocused();
  }

  const products = navigation.getByRole("button", {
    name: "Products",
    exact: true,
  });
  const business = navigation.getByRole("button", {
    name: "Business",
    exact: true,
  });
  await products.click();
  await business.click();
  await expect(products).toHaveAttribute("aria-expanded", "false");
  await expect(business).toHaveAttribute("aria-expanded", "true");
  // Click the page below the largest menu, where the header cannot cover it.
  await page.mouse.click(12, 880);
  await expect(business).toHaveAttribute("aria-expanded", "false");

  await products.press("ArrowDown");
  await expect(header.locator('a[href="/platform"]:visible')).toBeFocused();
  await header.locator('a[href="/azuriya-core"]:visible').click();
  await expect(page).toHaveURL(/\/azuriya-core$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("mobile grouped menus expose every destination and close after navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const open = page.getByRole("button", {
    name: "Open navigation",
    exact: true,
  });
  await open.click();
  const mobile = page.getByRole("navigation", {
    name: "Mobile navigation",
    exact: true,
  });
  await expect(mobile).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(mobile).toHaveCount(0);
  await expect(open).toBeFocused();
  await open.click();

  for (const [label, paths] of Object.entries(menuPaths)) {
    const summary = mobile
      .locator("summary")
      .filter({ hasText: new RegExp(`^${label}$`) });
    await summary.click();
    for (const path of paths) {
      await expect(mobile.locator(`a[href="${path}"]`)).toBeVisible();
    }
    await summary.click();
    await expect(mobile.locator(`a[href="${paths[0]}"]`)).toBeHidden();
  }

  await mobile
    .locator("summary")
    .filter({ hasText: /^Business$/ })
    .click();
  await mobile.locator('a[href="/technical-integration"]').click();
  await expect(page).toHaveURL(/\/technical-integration$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation", exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "Open navigation", exact: true }),
  ).toHaveAttribute("aria-expanded", "false");
});

test("every mega menu route renders its own page without embedding the landing hero or pricing section", async ({
  request,
}) => {
  const headings: string[] = [];
  for (const path of Object.values(menuPaths).flat()) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    const html = await response.text();
    const heading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1];
    expect(heading, path).toBeDefined();
    const text = heading!
      .replace(/<[^>]*>/g, "")
      .replaceAll("&amp;", "&")
      .replaceAll("&#x27;", "'")
      .trim();
    expect(text, path).toMatch(/\S/);
    headings.push(text);
    expect(html, path).toContain('id="main-content"');
    expect(html, path).toContain('aria-label="Azuriya site footer"');
    expect(html, path).not.toMatch(
      /class="[^"]*\b(?:az-hero|az-launch-pricing|az-demo-shell|sp-experience)\b/,
    );
  }
  expect(new Set(headings).size).toBe(headings.length);
});

test("product, operations, blueprint and pricing pages fit phone, tablet and desktop layouts in both themes", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");

  for (const theme of ["light", "dark"] as const) {
    await page.evaluate(
      (value) => localStorage.setItem("azuriya.marketing-theme", value),
      theme,
    );
    for (const path of [
      "/platform",
      "/admin-portal",
      "/resources/brokerage-launch-blueprint",
      "/broker-pricing",
    ]) {
      await page.goto(path);
      for (const width of [320, 768, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
        await expect
          .poll(
            () =>
              page.evaluate(
                () => document.documentElement.scrollWidth <= innerWidth,
              ),
            { message: `${path} fits ${width}px in ${theme} theme` },
          )
          .toBe(true);
        await expect(
          page.locator(
            "main .az-hero, main .az-launch-pricing, main .az-demo-shell, main .sp-experience",
          ),
        ).toHaveCount(0);
      }
    }
  }
  expect(errors).toEqual([]);
});
