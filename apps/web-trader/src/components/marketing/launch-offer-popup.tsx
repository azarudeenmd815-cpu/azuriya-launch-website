"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { launchOffer, formatOfferMoney } from "@/lib/launch-offer";
import { ThreeDIcon } from "./three-d-icon";
import "./launch-offer-popup.css";

const seenStorageKey = "azuriya:launch-offer-seen";
let seenDuringVisit = false;

function offerWasSeen() {
  try {
    return sessionStorage.getItem(seenStorageKey) === "true" || seenDuringVisit;
  } catch {
    return seenDuringVisit;
  }
}

function rememberOffer() {
  seenDuringVisit = true;
  try {
    sessionStorage.setItem(seenStorageKey, "true");
  } catch {
    // The in-memory flag still prevents repeated prompts during this visit.
  }
}

export function LaunchOfferPopup() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeOffer = useCallback(() => {
    dialogRef.current?.close();
    setIsOpen(false);
    const target = previousFocus.current;
    if (target?.isConnected) target.focus({ preventScroll: true });
  }, []);

  const openOffer = useCallback(() => {
    const dialog = dialogRef.current;
    if (
      !dialog ||
      dialog.open ||
      document.querySelector("dialog[open]") ||
      document.visibilityState === "hidden"
    ) {
      return false;
    }
    previousFocus.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    dialog.showModal();
    rememberOffer();
    setIsOpen(true);
    return true;
  }, []);

  useEffect(() => {
    if (pathname !== "/" || offerWasSeen()) return;
    let ready = false;
    let shown = false;
    const attempt = () => {
      if (
        !ready ||
        shown ||
        offerWasSeen() ||
        document.querySelector('.az-header button[aria-expanded="true"]')
      )
        return;
      if (openOffer()) {
        shown = true;
        observer.disconnect();
      }
    };
    // A first-visit privacy dialog always gets the first turn. Observe its
    // close/removal rather than putting a second modal above it.
    const observer = new MutationObserver(attempt);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["open", "aria-expanded"],
    });
    const timer = window.setTimeout(() => {
      ready = true;
      attempt();
    }, 2000);
    document.addEventListener("visibilitychange", attempt);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      document.removeEventListener("visibilitychange", attempt);
    };
  }, [pathname, openOffer]);

  useEffect(() => {
    if (!isOpen) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        className="lop-trigger"
        type="button"
        aria-label="View launch offer"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="azuriya-launch-offer"
        onClick={openOffer}
      >
        <span className="lop-trigger-dot" aria-hidden="true" />
        <span>Launch offer</span>
        <strong>
          {formatOfferMoney(launchOffer.monthlyFee, "$", false)} / mo
        </strong>
      </button>
      <dialog
        ref={dialogRef}
        id="azuriya-launch-offer"
        className="lop-dialog"
        aria-labelledby="lop-title"
        aria-describedby="lop-description"
        onCancel={(event) => {
          event.preventDefault();
          closeOffer();
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            closeOffer();
        }}
      >
        <div className="lop-inner">
          <button
            className="lop-close"
            type="button"
            aria-label="Close launch offer"
            autoFocus
            onClick={closeOffer}
          >
            <span aria-hidden="true" />
          </button>
          <div className="lop-art" aria-hidden="true">
            <ThreeDIcon name="platform" size={190} />
            <span className="lop-art-orbit" />
          </div>
          <div className="lop-content">
            <p className="lop-kicker">THE AZURIYA LAUNCH OFFER</p>
            <h2 id="lop-title">Your next chapter starts here.</h2>
            <p id="lop-description" className="lop-description">
              Bring your trading platform, CRM and back office together in one
              agreed package.
            </p>
            <div className="lop-commercial">
              <div className="lop-price">
                <strong>
                  {formatOfferMoney(launchOffer.monthlyFee, "$", false)}
                </strong>
                <span>
                  per month<small>Fixed Azuriya subscription</small>
                </span>
              </div>
              <div className="lop-revenue-share">
                <strong>{launchOffer.revenueSharePercent}%</strong>
                <span>
                  revenue share<small>Of eligible business revenue</small>
                </span>
              </div>
            </div>
            <div className="lop-availability">
              <div>
                <strong>{launchOffer.remainingSlots} slots remaining</strong>
                <span>of {launchOffer.totalSlots} launch slots</span>
              </div>
              <progress
                value={launchOffer.remainingSlots}
                max={launchOffer.totalSlots}
                aria-label={`${launchOffer.remainingSlots} of ${launchOffer.totalSlots} launch slots remaining`}
              />
            </div>
            <div className="lop-actions">
              <Link className="az-button" href="/contact" onClick={closeOffer}>
                Contact Sales <span aria-hidden="true">↗</span>
              </Link>
              <Link
                className="lop-secondary"
                href="/pricing"
                onClick={closeOffer}
              >
                View pricing
              </Link>
            </div>
            <p className="lop-terms">
              Subject to eligibility and agreed scope. Third-party fees and
              custom work are separate. Enquiries do not reserve a slot.{" "}
              <Link href={launchOffer.termsHref} onClick={closeOffer}>
                Terms & conditions
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
