import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bank,
  Check,
  ChartLineUp,
  PlugsConnected,
  Trophy,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { formatOfferMoney, launchOffer } from "@/lib/launch-offer";
import "./pricing-overview.css";

const packageAreas = [
  {
    Icon: ChartLineUp,
    title: "Platform workspace",
    text: "Account activity, operational views and the trading-platform connections defined for your deployment.",
  },
  {
    Icon: UsersThree,
    title: "CRM & back office",
    text: "Client context, operator roles and the administration workflows included in your agreed package.",
  },
  {
    Icon: PlugsConnected,
    title: "A defined launch scope",
    text: "Confirm capacity, connectors and service responsibilities before the operation is configured.",
  },
];

const audiences = [
  {
    Icon: Bank,
    label: "For brokers",
    title: "Brokerage pricing",
    text: "Plan the package around account groups, external liquidity and the client journey.",
    href: "/broker-pricing",
    items: [
      "Platform and CRM package detail",
      "Routing, commission and funding scope",
      "Published platform-cost references",
    ],
  },
  {
    Icon: Trophy,
    label: "For prop firms",
    title: "Prop firm pricing",
    text: "Review the package around program stages, participant support and operator oversight.",
    href: "/prop-pricing",
    items: [
      "Platform and back-office package detail",
      "Program, risk and payout-review scope",
      "Separate participant and business share policies",
    ],
  },
];

const responsibilities = [
  {
    title: "Standard Azuriya package",
    scope: "$0 fixed monthly subscription",
    text: "The included platform workspace, CRM and service scope are recorded in your agreement.",
  },
  {
    title: "Eligible revenue",
    scope: `${launchOffer.revenueSharePercent}% revenue share`,
    text: "Agree the revenue basis, reporting, refunds, taxes and settlement before onboarding.",
  },
  {
    title: "External platforms & providers",
    scope: "Scoped separately",
    text: "Confirm licensing, liquidity accounts, payment-provider charges and other external service requirements.",
  },
  {
    title: "Custom work & operating services",
    scope: "Quoted for the required scope",
    text: "Identify additional connectors, custom development, hosting and support responsibilities in the launch plan.",
  },
];

export function PricingOverview() {
  const remaining = launchOffer.totalSlots - launchOffer.allocatedSlots;
  return (
    <div className="az-container po-content">
      <nav className="po-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Pricing</span>
      </nav>
      <section
        className="po-hero"
        id="pricing-free-offer"
        aria-labelledby="po-title"
      >
        <div>
          <p className="po-label">Pricing & commercial scope</p>
          <h1 id="po-title">
            One package.
            <br />
            Two paths to launch.
          </h1>
          <p className="po-description">
            Choose the operating model you are building. Review the detailed
            package, agree its scope and launch with a clear commercial
            arrangement.
          </p>
          <Link className="po-text-link" href={launchOffer.termsHref}>
            Read the offer terms <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <aside className="po-offer" aria-label="Standard monthly package offer">
          <p className="po-label">Standard Azuriya package</p>
          <div className="po-price">
            <strong>
              {formatOfferMoney(launchOffer.monthlyFee, "$", false)}
            </strong>
            <span>per month</span>
          </div>
          <div className="po-revenue">
            <strong>{launchOffer.revenueSharePercent}%</strong>
            <span>
              share of eligible revenue
              <br />
              <small>Defined in your commercial agreement</small>
            </span>
          </div>
          <div className="po-allocation">
            <div>
              <span>Launch allocation</span>
              <strong>
                {launchOffer.allocatedSlots} / {launchOffer.totalSlots}
              </strong>
            </div>
            <progress
              value={launchOffer.allocatedSlots}
              max={launchOffer.totalSlots}
              aria-label={`${launchOffer.allocatedSlots} of ${launchOffer.totalSlots} launch slots allocated`}
            />
            <p>
              {remaining} slots remaining. Onboarding is subject to eligibility
              and deployment readiness.
            </p>
          </div>
        </aside>
      </section>

      <section className="po-audiences" aria-labelledby="po-audience-title">
        <div className="po-section-heading">
          <p className="po-label">Choose your business model</p>
          <h2 id="po-audience-title">The detail for your operation.</h2>
        </div>
        <div className="po-audience-grid">
          {audiences.map(({ Icon, ...audience }) => (
            <article className="po-audience-card" key={audience.href}>
              <div className="po-audience-top">
                <span className="po-icon">
                  <Icon size={27} aria-hidden="true" />
                </span>
                <span className="po-label">{audience.label}</span>
              </div>
              <h3>{audience.title}</h3>
              <p>{audience.text}</p>
              <ul>
                {audience.items.map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={audience.href}>
                Review {audience.title.toLowerCase()}{" "}
                <ArrowRight size={19} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="po-package" aria-labelledby="po-package-title">
        <div className="po-section-heading">
          <p className="po-label">What the agreement brings together</p>
          <h2 id="po-package-title">Platform, CRM and operating scope.</h2>
        </div>
        <div className="po-package-grid">
          {packageAreas.map(({ Icon, title, text }) => (
            <article key={title}>
              <Icon size={25} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="po-responsibilities"
        id="pricing-commercial-scope"
        aria-labelledby="po-scope-title"
      >
        <div className="po-section-heading">
          <p className="po-label">Commercial responsibilities</p>
          <h2 id="po-scope-title">
            Know what is included.
            <br />
            Know what needs a separate scope.
          </h2>
          <p>
            The $0 price applies to the standard Azuriya monthly package. Your
            agreement records the services, dependencies and responsibilities
            for the actual operation.
          </p>
        </div>
        <dl className="po-scope-list">
          {responsibilities.map(({ title, scope, text }) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>
                <strong>{scope}</strong>
                <p>{text}</p>
              </dd>
            </div>
          ))}
        </dl>
        <Link className="po-text-link" href={launchOffer.termsHref}>
          Review the revenue-share and offer terms{" "}
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </section>

      <section
        className="po-commission"
        id="pricing-markup-example"
        aria-labelledby="po-commission-title"
      >
        <div>
          <p className="po-label">Brokerage commission policy</p>
          <h2 id="po-commission-title">
            Keep the markup separate from the package.
          </h2>
          <p>
            The public illustration uses a $2.00 base plus up to $5.00
            additional markup, for a maximum $7.00 total per lot. Actual rates
            and settlement belong in your brokerage agreement; the example does
            not predict earnings.
          </p>
        </div>
        <Link className="po-text-link" href="/broker-pricing">
          Review the brokerage model <ArrowRight size={19} aria-hidden="true" />
        </Link>
      </section>

      <section
        className="po-next-step"
        id="pricing-planning"
        aria-labelledby="po-next-title"
      >
        <div>
          <p className="po-label">Prepare your scope</p>
          <h2 id="po-next-title">Bring the operation you want to build.</h2>
          <p>
            Share your business model, platform choices, account groups,
            operating regions and funding needs. We can then define the package
            and the external requirements together.
          </p>
        </div>
        <Link className="az-button" href="/contact">
          Discuss your launch scope{" "}
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
