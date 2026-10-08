import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle,
  FileText,
  PlugsConnected,
  ShieldCheck,
  SlidersHorizontal,
} from "@phosphor-icons/react/dist/ssr";
import { MarketingNavigation } from "./navigation";
import { MarketingSurface } from "./marketing-theme";
import { SiteFooter } from "./site-footer";
import { DestinationGraphic } from "./destination-graphic";
import type { DestinationDefinition } from "./destination-types";
import { getSitePage } from "./site-pages";
import {
  formatOfferMoney,
  launchOffer,
  leverateReference,
  leverateSource,
} from "@/lib/launch-offer";
import "./marketing.css";
import "./marketing-light-theme.css";
import "./marketing-reference-theme.css";
import "./destination-page.css";

function CommercialPanel({ prop }: { prop: boolean }) {
  return (
    <div className="dp-commercial-panel">
      <div className="dp-commercial-heading">
        <ShieldCheck size={23} />
        <span>
          {prop ? "PROP OPERATIONS PACKAGE" : "BROKERAGE OPERATIONS PACKAGE"}
        </span>
      </div>
      <div className="dp-commercial-price">
        <strong>{formatOfferMoney(launchOffer.monthlyFee, "$", false)}</strong>
        <span>per month</span>
      </div>
      <p>Standard Azuriya monthly package</p>
      <div className="dp-share-term">
        <strong>{launchOffer.revenueSharePercent}%</strong>
        <span>
          revenue share
          <br />
          <small>Under your commercial agreement</small>
        </span>
      </div>
      <dl>
        <div>
          <dt>Trading platform & CRM</dt>
          <dd>One agreed package</dd>
        </div>
        <div>
          <dt>Capacity & connectors</dt>
          <dd>Defined in scope</dd>
        </div>
        <div>
          <dt>Provider costs & custom work</dt>
          <dd>Quoted separately</dd>
        </div>
      </dl>
      <div className="dp-slot-note">
        <strong>
          {launchOffer.allocatedSlots} / {launchOffer.totalSlots}
        </strong>
        <span>
          launch slots allocated ·{" "}
          {launchOffer.totalSlots - launchOffer.allocatedSlots} remaining
        </span>
      </div>
      <Link href={launchOffer.termsHref}>
        Read the offer terms <ArrowUpRight size={15} />
      </Link>
    </div>
  );
}

function BrokerageReference() {
  return (
    <section
      className="dp-price-reference"
      aria-labelledby="subscription-reference"
    >
      <div>
        <span className="dp-label">PUBLISHED SUBSCRIPTION REFERENCE</span>
        <h2 id="subscription-reference">
          Platform + CRM. The complete monthly tally.
        </h2>
        <p>
          Leverate’s published monthly list prices provide a third-party
          reference for the subscription components. These are separate products
          and scopes, not former Azuriya prices.
        </p>
      </div>
      <div className="dp-reference-grid">
        {leverateReference.map((reference) => (
          <article key={reference.name}>
            <h3>{reference.name}</h3>
            <dl>
              <div>
                <dt>Trading platform</dt>
                <dd>{formatOfferMoney(reference.platform, "€", false)}</dd>
              </div>
              <div>
                <dt>CRM & client portal</dt>
                <dd>+ {formatOfferMoney(reference.crm, "€", false)}</dd>
              </div>
              <div className="dp-reference-total">
                <dt>Combined monthly subscription</dt>
                <dd>{formatOfferMoney(reference.total, "€", false)}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <a href={leverateSource} target="_blank" rel="noreferrer">
        View the published reference <ArrowUpRight size={15} />
      </a>
    </section>
  );
}

export function DestinationPage({
  destination,
}: {
  destination: DestinationDefinition;
}) {
  const { page, details } = destination;
  const pricing = details.layout === "pricing";
  const blueprint = details.layout === "blueprint";
  const capabilityIcons = [
    SlidersHorizontal,
    ShieldCheck,
    PlugsConnected,
    FileText,
  ];
  return (
    <MarketingSurface
      className={`az-marketing az-destination-page dp-layout-${details.layout}`}
    >
      <a className="az-skip-link" href="#main-content">
        Skip to content
      </a>
      <MarketingNavigation currentPath={page.path} />
      <main id="main-content" className="az-container dp-main">
        <nav className="dp-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{page.navLabel}</span>
        </nav>
        <section className="dp-hero">
          <div className="dp-hero-copy">
            <span className="dp-label">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
            <div className="dp-hero-actions">
              <Link className="az-button" href={page.cta?.href ?? "/contact"}>
                {page.cta?.label ?? "Discuss your requirements"}
                <ArrowUpRight size={17} />
              </Link>
              <a
                className="dp-text-link"
                href={blueprint ? "#launch-roadmap" : "#page-scope"}
              >
                {blueprint ? "Explore the blueprint" : "Explore the scope"}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
          {pricing ? (
            <CommercialPanel prop={page.path === "/prop-pricing"} />
          ) : (
            <DestinationGraphic visual={details.visual} />
          )}
        </section>
        <div className="dp-value-strip">
          {page.highlights.map((highlight) => (
            <div key={highlight.title}>
              <CheckCircle size={19} />
              <div>
                <strong>{highlight.title}</strong>
                <p>{highlight.text}</p>
              </div>
            </div>
          ))}
        </div>
        <section className="dp-statement" id="page-scope">
          <span className="dp-label">{details.statement.label}</span>
          <h2>{details.statement.title}</h2>
          <p>{details.statement.text}</p>
        </section>
        {blueprint && (
          <div className="dp-blueprint-note">
            <FileText size={24} />
            <p>
              An operational planning blueprint. Provider access, legal
              responsibilities and production configuration are confirmed for
              your specific business.
            </p>
          </div>
        )}
        <section
          className={`dp-capabilities ${pricing ? "dp-package-scope" : ""}`}
          aria-label={pricing ? "Package scope" : "Core capabilities"}
        >
          {details.capabilities.map((capability, index) => {
            const Icon = capabilityIcons[index % capabilityIcons.length];
            return (
              <article key={capability.title}>
                <span className="dp-capability-icon">
                  <Icon size={25} />
                </span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            );
          })}
        </section>
        <section
          className="dp-workflow"
          id="launch-roadmap"
          aria-labelledby="workflow-title"
        >
          <div className="dp-section-heading">
            <span className="dp-label">
              {blueprint
                ? "YOUR LAUNCH ROADMAP"
                : pricing
                  ? "FROM SCOPE TO AGREEMENT"
                  : "HOW THE WORK CONNECTS"}
            </span>
            <h2 id="workflow-title">
              {blueprint
                ? "Each stage has a clear deliverable."
                : pricing
                  ? "Agree the scope before you launch."
                  : "A clear workflow for your team."}
            </h2>
          </div>
          <ol data-step-count={details.workflow.length}>
            {details.workflow.map((step, index) => (
              <li key={step.title}>
                <span className="dp-step-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="dp-step-label">{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <div className="dp-detail-layout">
          <aside className="dp-scope-summary">
            <span className="dp-label">AT A GLANCE</span>
            <h2>
              {pricing ? "Your commercial scope" : "The operating context"}
            </h2>
            <dl>
              {details.specification.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <nav aria-label="On this page">
              {page.sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                  <ArrowRight size={14} />
                </a>
              ))}
            </nav>
          </aside>
          <div className="dp-details">
            {page.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>
                        <Check size={17} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.links && (
                  <div className="dp-detail-links">
                    {section.links.map((link) => (
                      <Link href={link.href} key={link.href}>
                        {link.label}
                        <ArrowUpRight size={16} />
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
        {page.path === "/broker-pricing" && <BrokerageReference />}
        {page.faqs && (
          <section className="dp-faq">
            <div className="dp-section-heading">
              <span className="dp-label">YOUR QUESTIONS</span>
              <h2>Details worth understanding.</h2>
            </div>
            <div>
              {page.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}
        <section className="dp-related" aria-labelledby="related-topics">
          <div>
            <span className="dp-label">CONTINUE EXPLORING</span>
            <h2 id="related-topics">The next part of your stack.</h2>
          </div>
          <div>
            {page.related.slice(0, 3).map((path) => {
              const related = getSitePage(path);
              return related ? (
                <Link key={path} href={path}>
                  <span>{related.navLabel}</span>
                  <strong>
                    {related.description}
                    <ArrowUpRight size={20} />
                  </strong>
                </Link>
              ) : null;
            })}
          </div>
        </section>
        <section className="dp-final-cta">
          <div>
            <h2>Let’s define your next step.</h2>
            <p>
              Tell us about your operation, your platforms and the workflows
              your team needs.
            </p>
          </div>
          <Link className="az-button" href="/contact">
            Contact Sales
            <ArrowUpRight size={18} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </MarketingSurface>
  );
}
