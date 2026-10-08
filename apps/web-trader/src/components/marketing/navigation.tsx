"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowsSplit,
  Bank,
  Buildings,
  CaretDown,
  ChartLineUp,
  ChatCircleDots,
  Code,
  Cube,
  FileText,
  GlobeHemisphereWest,
  List,
  PlugsConnected,
  ShieldCheck,
  Sparkle,
  Stack,
  Trophy,
  X,
} from "@phosphor-icons/react";
import { MarketingBrand } from "./brand";
import { MarketingThemeSwitch } from "./marketing-theme";
import { SiteLanguageButton } from "./site-preferences";
import { localizedUi } from "@/lib/site-language";
import { useSiteLanguage } from "@/lib/site-language-client";
import {
  navigationDirectLinks,
  navigationMenus,
  type NavigationLink,
} from "./navigation-data";
import "./navigation.css";

const icons = {
  platform: ChartLineUp,
  core: Cube,
  automation: Sparkle,
  platforms: GlobeHemisphereWest,
  copy: ArrowsSplit,
  community: ChatCircleDots,
  brokerage: Bank,
  pricing: Stack,
  blueprint: FileText,
  prop: Trophy,
  integration: PlugsConnected,
  business: Buildings,
  "back-office": ShieldCheck,
};

function DestinationLink({
  link,
  currentPath,
  onChoose,
}: {
  link: NavigationLink;
  currentPath?: string;
  onChoose: () => void;
}) {
  const Icon = icons[link.icon as keyof typeof icons] ?? Code;
  return (
    <Link
      href={link.href}
      className="az-menu-destination"
      aria-current={currentPath === link.href ? "page" : undefined}
      onClick={onChoose}
    >
      <span className="az-menu-icon" aria-hidden="true">
        <Icon size={24} weight="regular" />
      </span>
      <span>
        <strong>{link.label}</strong>
        <small>{link.description}</small>
      </span>
      <ArrowUpRight
        className="az-menu-link-arrow"
        size={17}
        aria-hidden="true"
      />
    </Link>
  );
}

export function MarketingNavigation({
  currentPath,
}: {
  homeLinks?: boolean;
  pageLinks?: boolean;
  currentPath?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const triggersRef = useRef<Record<string, HTMLButtonElement | null>>({});
  const copy = localizedUi[useSiteLanguage()];
  const close = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!activeMenu && !mobileOpen) return;
    const dismiss = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      if (activeMenu) {
        triggersRef.current[activeMenu]?.focus();
        setActiveMenu(null);
      } else {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [activeMenu, mobileOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1200px)");
    const reset = () => {
      setActiveMenu(null);
      setMobileOpen(false);
    };
    media.addEventListener("change", reset);
    return () => media.removeEventListener("change", reset);
  }, []);

  return (
    <header
      className="az-header"
      ref={headerRef}
      onBlur={(event) => {
        if (
          event.relatedTarget &&
          !event.currentTarget.contains(event.relatedTarget as Node)
        )
          close();
      }}
    >
      <div className="az-container az-header-inner">
        <Link href="/" aria-label="Azuriya home" onClick={close}>
          <MarketingBrand />
        </Link>
        <nav className="az-desktop-nav" aria-label={copy.mainNavigation}>
          {navigationMenus.map((menu) => (
            <div className={`az-nav-menu az-nav-menu-${menu.id}`} key={menu.id}>
              <button
                type="button"
                ref={(el) => {
                  triggersRef.current[menu.id] = el;
                }}
                className="az-nav-trigger"
                aria-expanded={activeMenu === menu.id}
                aria-controls={`az-menu-${menu.id}`}
                onClick={() =>
                  setActiveMenu(activeMenu === menu.id ? null : menu.id)
                }
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    setActiveMenu(menu.id);
                    requestAnimationFrame(() =>
                      headerRef.current
                        ?.querySelector<HTMLAnchorElement>(
                          `#az-menu-${menu.id} a`,
                        )
                        ?.focus(),
                    );
                  }
                }}
              >
                {menu.label}
                <CaretDown size={14} aria-hidden="true" />
              </button>
              {activeMenu === menu.id && (
                <div
                  id={`az-menu-${menu.id}`}
                  className={`az-mega-menu az-mega-${menu.id}`}
                >
                  <div className="az-mega-groups">
                    {menu.groups.map((group) => (
                      <div className="az-menu-group" key={group.label}>
                        <p className="az-menu-group-label">{group.label}</p>
                        {group.links.map((link) => (
                          <DestinationLink
                            key={link.href}
                            link={link}
                            currentPath={currentPath}
                            onChoose={close}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                  {menu.id === "business" && (
                    <aside className="az-menu-contact">
                      <span className="az-menu-contact-art" aria-hidden="true">
                        <ChatCircleDots size={72} weight="duotone" />
                        <span>
                          <MarketingBrand compact />
                        </span>
                      </span>
                      <strong>Build with Azuriya.</strong>
                      <p>
                        Bring your plans. We’ll help define the right operating
                        stack.
                      </p>
                      <Link
                        className="az-button"
                        href="/contact"
                        onClick={close}
                      >
                        Contact Sales <ArrowUpRight size={16} />
                      </Link>
                    </aside>
                  )}
                </div>
              )}
            </div>
          ))}
          {navigationDirectLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              aria-current={currentPath === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="az-header-actions">
          <Link
            className="az-button-small az-launch-nav"
            href="/contact"
            onClick={close}
          >
            Launch Your Business
          </Link>
          <SiteLanguageButton />
          <MarketingThemeSwitch />
          <button
            ref={toggleRef}
            type="button"
            className="az-menu-toggle"
            aria-label={mobileOpen ? copy.closeNavigation : copy.openNavigation}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setActiveMenu(null);
              setMobileOpen(!mobileOpen);
            }}
          >
            {mobileOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          className="az-mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigationMenus.map((menu) => (
            <details className="az-mobile-group" key={menu.id}>
              <summary>
                {menu.label}
                <CaretDown size={18} aria-hidden="true" />
              </summary>
              {menu.groups.map((group) => (
                <div className="az-mobile-subgroup" key={group.label}>
                  <p className="az-menu-group-label">{group.label}</p>
                  {group.links.map((link) => (
                    <DestinationLink
                      key={link.href}
                      link={link}
                      currentPath={currentPath}
                      onChoose={close}
                    />
                  ))}
                </div>
              ))}
            </details>
          ))}
          {navigationDirectLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              aria-current={currentPath === link.href ? "page" : undefined}
            >
              {link.label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <Link href="/pricing" onClick={close}>
            All Pricing
            <ArrowUpRight size={16} />
          </Link>
          <Link className="az-mobile-contact" href="/contact" onClick={close}>
            Contact Sales
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      )}
    </header>
  );
}
