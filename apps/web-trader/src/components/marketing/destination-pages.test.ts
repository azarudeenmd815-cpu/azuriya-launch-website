import { describe, expect, it } from "vitest";
import { getSitePage, sitePages } from "./site-pages";
import { navigationMenus, type NavigationLink } from "./navigation-data";
import { destinationDefinitions, getDestination } from "./destination-data";

const destinationPaths = [
  "/platform",
  "/azuriya-core",
  "/automation",
  "/trading-platforms",
  "/copy-trading",
  "/community",
  "/brokerage",
  "/broker-pricing",
  "/resources/brokerage-launch-blueprint",
  "/prop-firm",
  "/prop-pricing",
  "/resources/prop-firm-launch-blueprint",
  "/technical-integration",
  "/business-hub",
  "/admin-portal",
] as const;

describe("independent navigation destinations", () => {
  it("links each mega menu entry to a distinct registered page rather than a landing anchor", () => {
    const links = navigationMenus.flatMap<NavigationLink>((menu) =>
      menu.groups.flatMap<NavigationLink>((group) => [...group.links]),
    );
    expect(links.map((link) => link.href).sort()).toEqual(
      [...destinationPaths].sort(),
    );
    for (const link of links) {
      expect(link.href, link.label).not.toContain("#");
      expect(getSitePage(link.href), link.label).toBeDefined();
    }
  });

  it("resolves each product, trader and business destination exactly once", () => {
    for (const path of destinationPaths) {
      expect(getSitePage(path), path).toBeDefined();
      expect(
        sitePages.filter((page) => page.path === path),
        path,
      ).toHaveLength(1);
    }
    expect(getSitePage("/resources/not-a-launch-blueprint")).toBeUndefined();
  });

  it("uses the dedicated destination content for both its route and page metadata", () => {
    expect(destinationDefinitions.map(({ page }) => page.path).sort()).toEqual(
      [...destinationPaths].sort(),
    );
    for (const path of destinationPaths) {
      const destination = getDestination(path);
      expect(destination, path).toBeDefined();
      expect(getSitePage(path)?.title, path).toBe(destination!.page.title);
      expect(getSitePage(path)?.description, path).toBe(
        destination!.page.description,
      );
    }
    expect(getDestination("/resources/getting-started")).toBeUndefined();
    expect(getDestination("/not-a-product-page")).toBeUndefined();
  });

  it("gives each navigation destination its own page identity and description", () => {
    const pages = destinationPaths.map((path) => getSitePage(path)!);
    expect(pages.every(Boolean)).toBe(true);
    expect(new Set(pages.map((page) => page.title)).size).toBe(pages.length);
    expect(new Set(pages.map((page) => page.description)).size).toBe(
      pages.length,
    );
  });
});
