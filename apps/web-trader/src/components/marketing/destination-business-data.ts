import { formatOfferMoney, launchOffer } from "../../lib/launch-offer";
import type { DestinationDefinition } from "./destination-types";

const monthlyPrice = `${formatOfferMoney(launchOffer.monthlyFee, "$", false)} / month`;
const revenueShare = `${launchOffer.revenueSharePercent}% revenue share`;

export const businessDestinations: DestinationDefinition[] = [
  {
    page: {
      path: "/broker-pricing",
      title: "Your brokerage. One clear commercial package.",
      navLabel: "Broker pricing",
      eyebrow: "Brokerage pricing",
      description: `${monthlyPrice} for the entire standard Azuriya package, with ${revenueShare}. Review the trading platform, CRM and operating scope together before choosing your launch configuration.`,
      kind: "solution",
      visual: "commercial",
      highlights: [
        {
          title: monthlyPrice,
          text: "The standard Azuriya monthly package brings the platform and CRM proposition into one commercial offer.",
        },
        {
          title: revenueShare,
          text: "The revenue basis, reporting and settlement arrangements are defined in your commercial agreement.",
        },
        {
          title: "A scoped launch",
          text: "Confirm your account groups, platform access and provider requirements before the implementation begins.",
        },
      ],
      sections: [
        {
          id: "broker-platform-scope",
          title:
            "Trading infrastructure for the brokerage you intend to operate.",
          paragraphs: [
            "Choose the platform experience and account structure around your clients. The brokerage scope brings trading-account context, pricing policy and the intended A-book route into the implementation brief.",
            "Connected capabilities depend on the selected platform, connector permissions and provider arrangements. Agree those capabilities before treating a catalog entry as a production connection.",
          ],
          bullets: [
            "Branded trading workspace and client account context.",
            "Trading-platform and connector selection.",
            "Account groups, leverage and instrument policy configuration.",
            "Separate base commission and additional markup settings.",
            "A-book routing and external liquidity configuration planning.",
            "Copy-trading relationships and account-level allocation scope.",
            "Execution exceptions, connection visibility and reporting requirements.",
          ],
          links: [
            { label: "Explore the brokerage solution", href: "/brokerage" },
            { label: "Review platform options", href: "/trading-platforms" },
          ],
        },
        {
          id: "broker-crm-scope",
          title: "CRM, client support and back office in the same brief.",
          paragraphs: [
            "A brokerage package needs to account for the work around a trading account. Define the client journey, the teams who support it and the controls that connect member activity with operations.",
            "The CRM and client-portal scope should be assessed alongside the platform subscription, rather than presented as an unrelated second requirement. Seats, brands, permissions and integration scope are agreed for your operation.",
          ],
          bullets: [
            "Client portal, teams and account visibility.",
            "Operator roles and delegated administration.",
            "Funding methods, status tracking and approval workflows.",
            "Community channels, member support and escalation paths.",
            "Instrument, payment and operational configuration reviews.",
            "Analytics, statements and reconciliation requirements.",
            "API access and automation requirements within the agreed connector scope.",
          ],
          links: [
            { label: "Explore the back office", href: "/admin-portal" },
            { label: "Plan operational workflows", href: "/business-hub" },
          ],
        },
        {
          id: "broker-commercial-scope",
          title: "Understand the monthly offer and every separate dependency.",
          paragraphs: [
            `The standard Azuriya package is ${monthlyPrice}, with ${revenueShare}. The offer covers the entire standard monthly package; it is not a setup-only price. The revenue-share calculation, eligible revenue, reporting and settlement need to be agreed in the commercial terms.`,
            "Third-party platform licences, liquidity and payment-provider charges, external services and custom work are assessed separately. The final scope records who supplies each dependency and any associated charges.",
          ],
          bullets: [
            "Review the package against your intended account and client journey.",
            "Confirm platform, CRM and operator requirements together.",
            "Record third-party licences, usage charges and provider terms.",
            "Agree the revenue basis and commercial reporting responsibilities.",
            "Confirm availability before making a launch commitment.",
          ],
          links: [
            { label: "Read launch-offer terms", href: launchOffer.termsHref },
            { label: "Prepare a brokerage inquiry", href: "/contact" },
          ],
        },
      ],
      related: [
        "/brokerage",
        "/resources/brokerage-launch-blueprint",
        "/technical-integration",
        "/admin-portal",
      ],
      cta: { label: "Discuss your brokerage package", href: "/contact" },
      faqs: [
        {
          question: "Does $0 apply to the platform and CRM monthly package?",
          answer: `Yes. The offer is ${monthlyPrice} for the entire standard Azuriya package, with ${revenueShare}. It is not limited to development or setup. Review the commercial agreement for the package scope and revenue basis.`,
        },
        {
          question: "Are external platform and provider charges included?",
          answer:
            "Third-party licences, liquidity, payment processing, external services and custom work are scoped separately. The implementation brief should identify each required provider and the applicable commercial terms.",
        },
        {
          question: "Do the packages guarantee a particular account limit?",
          answer:
            "Account capacity, operator access and connected capabilities are confirmed for the chosen deployment. The page does not assign unverified account, seat or platform limits to your operation.",
        },
      ],
    },
    details: {
      layout: "pricing",
      visual: "brokerage",
      statement: {
        label: "Platform + CRM + operations",
        title: "Price the complete brokerage stack.",
        text: "Compare the monthly platform and CRM scope as one operating package, then review provider dependencies and the agreed revenue-share model.",
      },
      capabilities: [
        {
          title: "Trading platform",
          text: "Plan the branded experience, platform connectors, client accounts and supported trading actions around your selected infrastructure.",
        },
        {
          title: "CRM & client portal",
          text: "Map onboarding context, member support, team responsibilities and account visibility into a coherent client journey.",
        },
        {
          title: "Brokerage controls",
          text: "Define account-group policies, instruments, commission markups and the intended external liquidity route.",
        },
        {
          title: "Funding & oversight",
          text: "Specify provider connections, approval states, reconciliation and reporting before operational handoff.",
        },
      ],
      workflow: [
        {
          label: "01 · Scope",
          title: "Build the package brief",
          text: "List your platform, CRM, client groups and required operator workflows.",
        },
        {
          label: "02 · Commercials",
          title: "Agree the complete model",
          text: "Confirm the standard package, the revenue basis and separately supplied provider services.",
        },
        {
          label: "03 · Implementation",
          title: "Validate the launch configuration",
          text: "Review connected capabilities, permissions and acceptance criteria with the operating team.",
        },
      ],
      specification: [
        { label: "Standard monthly package", value: monthlyPrice },
        { label: "Commercial model", value: revenueShare },
        { label: "Package review", value: "Platform + CRM + back office" },
        { label: "External dependencies", value: "Scoped separately" },
        { label: "Launch terms", value: "Agreement required" },
      ],
    },
  },
  {
    page: {
      path: "/prop-pricing",
      title: "A clear package for your prop program.",
      navLabel: "Prop pricing",
      eyebrow: "Prop firm pricing",
      description: `${monthlyPrice} for the entire standard Azuriya package, with ${revenueShare}. Scope evaluation stages, participant accounts, program controls and payout reviews around the prop firm you want to operate.`,
      kind: "solution",
      visual: "commercial",
      highlights: [
        {
          title: monthlyPrice,
          text: "The monthly offer covers the standard Azuriya package for your agreed prop-operation scope.",
        },
        {
          title: "Program-first planning",
          text: "Specify stages, participant rules and operator responsibility before selecting account and platform configuration.",
        },
        {
          title: revenueShare,
          text: "Define eligible revenue, reporting and settlement in the commercial agreement before launch.",
        },
      ],
      sections: [
        {
          id: "prop-program-scope",
          title: "Specify the program, not just the account screen.",
          paragraphs: [
            "A prop package needs a precise program definition. Begin with the evaluation model and account lifecycle, then describe what participants must complete and how operators review each transition.",
            "The scope should record the chosen platform, available connector actions and account environments. Published participant rules and their implementation need to describe the same program.",
          ],
          bullets: [
            "One-step or two-step evaluation structure.",
            "Account-size, stage and progression configuration.",
            "Profit targets, trading-day requirements and evaluation timing.",
            "Static or trailing drawdown policy definitions.",
            "Daily-loss calculation and reset conventions.",
            "Platform, leverage and reset-policy requirements.",
            "Participant progress and exception-review views.",
          ],
          links: [
            { label: "Explore prop program controls", href: "/prop-firm" },
            { label: "Review platform choices", href: "/trading-platforms" },
          ],
        },
        {
          id: "prop-operations-scope",
          title: "Give the program team the detail it needs.",
          paragraphs: [
            "Participant support, program administration and payout review involve different responsibilities. Define the operator roles and queues alongside the client portal and CRM scope.",
            "Payout timing and participant profit-share settings are program policies. They are separate from the Azuriya commercial revenue share and must be recorded clearly in the operating brief.",
          ],
          bullets: [
            "Participant portal and account visibility.",
            "Program administration and role-scoped reviews.",
            "Risk-rule usage, headroom and breach context.",
            "Payout eligibility, cycle and minimum requirements.",
            "Verification, destination confirmation and review responsibilities.",
            "Announcements, participant support and community channels.",
            "Reporting, reconciliation and connected workflow requirements.",
          ],
          links: [
            {
              label: "Review back-office responsibility",
              href: "/admin-portal",
            },
            { label: "Explore participant communication", href: "/community" },
          ],
        },
        {
          id: "prop-commercial-scope",
          title: "Keep the package and program economics distinct.",
          paragraphs: [
            `The entire standard Azuriya monthly package is ${monthlyPrice}, with ${revenueShare}. Agree the revenue basis, reporting and settlement for your business as part of the commercial arrangement.`,
            "External platform licences, payment services, account infrastructure and custom integrations are assessed separately. Capital arrangements, participant fees and participant profit-share policies belong in your program definition; this monthly package does not establish those values.",
          ],
          bullets: [
            "Confirm the standard Azuriya package for the intended program.",
            "Document platform and external service dependencies.",
            "Define Azuriya revenue share separately from participant profit share.",
            "Agree implementation acceptance criteria and operator handoff.",
            "Review offer availability and the launch agreement.",
          ],
          links: [
            { label: "Read launch-offer terms", href: launchOffer.termsHref },
            { label: "Prepare a prop firm inquiry", href: "/contact" },
          ],
        },
      ],
      related: [
        "/prop-firm",
        "/resources/prop-firm-launch-blueprint",
        "/technical-integration",
        "/admin-portal",
      ],
      cta: { label: "Discuss your prop firm package", href: "/contact" },
      faqs: [
        {
          question: "Is the $0 monthly offer only for development?",
          answer: `No. It applies to the entire standard Azuriya monthly package, with ${revenueShare}. Connected platform and provider requirements, custom work and other external charges are scoped separately.`,
        },
        {
          question: "Is the 35% revenue share the participant profit split?",
          answer:
            "No. It describes the Azuriya commercial model. Participant profit-share, payout eligibility and program economics are separate policies defined by your prop operation and the relevant agreements.",
        },
        {
          question:
            "Does the package include funded capital or issued accounts?",
          answer:
            "The package describes Azuriya software and operating scope. Capital arrangements, platform accounts and the conditions for participant progression must be established for the actual program.",
        },
      ],
    },
    details: {
      layout: "pricing",
      visual: "prop",
      statement: {
        label: "Program + portal + oversight",
        title: "Plan the whole prop operation.",
        text: "Bring evaluation design, participant access and operator controls into one package review. Keep program policies distinct from the commercial revenue-share arrangement.",
      },
      capabilities: [
        {
          title: "Evaluation programs",
          text: "Define stages, targets, account sizes and progression rules as a program that participants and operators can understand.",
        },
        {
          title: "Risk-policy context",
          text: "Specify daily-loss and drawdown definitions, timing conventions and the review path for exceptions.",
        },
        {
          title: "Participant workspace",
          text: "Connect account visibility, program announcements and participant support through the portal and CRM scope.",
        },
        {
          title: "Payout operations",
          text: "Plan eligibility, verification, review queues and records around your program's agreed payout conditions.",
        },
      ],
      workflow: [
        {
          label: "01 · Define",
          title: "Describe the program",
          text: "Record stages, participant rules, account environments and support responsibilities.",
        },
        {
          label: "02 · Agree",
          title: "Confirm the package",
          text: "Review the monthly offer, commercial revenue share and separately supplied services.",
        },
        {
          label: "03 · Validate",
          title: "Test the participant lifecycle",
          text: "Check progress, rule interpretation, exceptions and payout-review states against the agreed program.",
        },
      ],
      specification: [
        { label: "Standard monthly package", value: monthlyPrice },
        { label: "Azuriya commercial model", value: revenueShare },
        {
          label: "Participant profit split",
          value: "Defined by program policy",
        },
        { label: "External dependencies", value: "Scoped separately" },
        { label: "Program capacity", value: "Confirmed in deployment scope" },
      ],
    },
  },
  {
    page: {
      path: "/resources/brokerage-launch-blueprint",
      title: "Your brokerage launch, from brief to handoff.",
      navLabel: "Brokerage launch blueprint",
      eyebrow: "Brokerage launch blueprint",
      description:
        "A practical operating blueprint for your client journey, platform connections, A-book routing, funding controls and team responsibilities. Turn the launch concept into a scope that can be reviewed and validated.",
      kind: "article",
      visual: "brokerage",
      highlights: [
        {
          title: "A usable launch brief",
          text: "Describe who the service serves, what an account can do and who owns each operational decision.",
        },
        {
          title: "A connected scope",
          text: "Map trading platforms, liquidity, funding, client support and reporting into the same operating plan.",
        },
        {
          title: "A reviewable handoff",
          text: "Record acceptance checks, unresolved dependencies and the team responsible for launch readiness.",
        },
      ],
      sections: [
        {
          id: "brokerage-brief",
          title: "Start with a client journey the team can follow.",
          paragraphs: [
            "Write the journey from first contact to an active account, then from a funding request to account visibility and support. Each step should name the person or system responsible for moving it forward.",
            "Identify the operating entity, intended client groups, account ownership and platform experience. Record any provider or professional review required for the business; a software blueprint does not replace the arrangements needed to operate it.",
          ],
          bullets: [
            "Audience, account groups and intended instruments.",
            "Brand, portal access and client-support journey.",
            "Account ownership and operator permission requirements.",
            "Commercial package, commission structure and provider dependencies.",
          ],
          links: [
            { label: "Review brokerage pricing", href: "/broker-pricing" },
            { label: "Explore the brokerage experience", href: "/brokerage" },
          ],
        },
        {
          id: "brokerage-infrastructure-map",
          title: "Map the route and the records it must produce.",
          paragraphs: [
            "For every selected trading platform, list required account, order and reporting actions. Confirm which actions the connector can support and which require a separate operator or provider workflow.",
            "The intended A-book route needs an agreed liquidity relationship, instrument mapping and execution configuration. Funding needs its own processing, approval and reconciliation states. Treat the result of each step as evidence for the next one.",
          ],
          bullets: [
            "Trading-platform access and supported account actions.",
            "Symbols, precision, volume steps and permitted order types.",
            "Provider route, pricing policy and exception handling.",
            "Payment methods, currencies, fees and approval responsibilities.",
            "Account records, execution records and funding reconciliation.",
          ],
          links: [
            {
              label: "Plan the technical integration",
              href: "/technical-integration",
            },
            { label: "Review back-office controls", href: "/admin-portal" },
          ],
        },
        {
          id: "brokerage-acceptance",
          title: "Agree what ready means before the launch date.",
          paragraphs: [
            "Define a set of account journeys the operating team can validate. Include successful actions, permissions that should refuse an action, incomplete provider responses and the records needed to resolve a discrepancy.",
            "The final handoff should identify the approved scope, provider dependencies, owners of unresolved items and support escalation paths. Schedule a launch only when those dependencies and required reviews are understood.",
          ],
          bullets: [
            "Verify authenticated account ownership and role boundaries.",
            "Check configuration review and authorization before changes.",
            "Validate order rejection, connection recovery and execution records.",
            "Trace funding processing through approval to reconciliation.",
            "Prepare reporting, support escalation and operating runbooks.",
          ],
          links: [
            { label: "Prepare your launch inquiry", href: "/contact" },
            { label: "Explore business operations", href: "/business-hub" },
          ],
        },
      ],
      related: [
        "/brokerage",
        "/broker-pricing",
        "/technical-integration",
        "/business-hub",
      ],
      cta: { label: "Prepare a brokerage launch brief", href: "/contact" },
      faqs: [
        {
          question:
            "What should I prepare before discussing a brokerage launch?",
          answer:
            "Prepare the intended audience, account groups, instruments, preferred platforms, funding requirements and operational owners. Add your commercial expectations and any existing provider relationships.",
        },
        {
          question: "Does the blueprint set a guaranteed launch time?",
          answer:
            "No. Timing depends on agreed scope, platform access, provider arrangements, required reviews and validation results. The blueprint helps identify those dependencies before a date is committed.",
        },
        {
          question:
            "Does this guide establish permission to operate a brokerage?",
          answer:
            "No. It is an operational planning guide for the software and connected workflows. The operator must separately establish the relevant business, provider, commercial and professional requirements for the intended service.",
        },
      ],
    },
    details: {
      layout: "blueprint",
      visual: "brokerage",
      statement: {
        label: "The launch deliverable",
        title: "One brief. Every operating dependency.",
        text: "Create a document that connects the client journey with account policies, provider access, authorization and the evidence needed for a confident operational handoff.",
      },
      capabilities: [
        {
          title: "Client journey map",
          text: "Describe access, account setup, funding, trading context and support from the client's perspective.",
        },
        {
          title: "Infrastructure register",
          text: "List platform, liquidity and payment dependencies with access requirements and responsible owners.",
        },
        {
          title: "Operating policy",
          text: "Record account-group, instrument, pricing and approval rules before configuration begins.",
        },
        {
          title: "Acceptance plan",
          text: "Define complete journeys, exception cases and the records the launch team will inspect.",
        },
      ],
      workflow: [
        {
          label: "01 · Brief",
          title: "Describe the service",
          text: "Identify the clients, accounts, workflows and business owner.",
        },
        {
          label: "02 · Scope",
          title: "Confirm the stack",
          text: "Agree platform capabilities, liquidity, payments and the commercial package.",
        },
        {
          label: "03 · Review",
          title: "Validate the journeys",
          text: "Check permissions, funding, execution and records against the agreed scope.",
        },
        {
          label: "04 · Handoff",
          title: "Assign operational ownership",
          text: "Record readiness, remaining dependencies and ongoing support responsibilities.",
        },
      ],
      specification: [
        { label: "Primary input", value: "Client and account journey" },
        { label: "Technical scope", value: "Platform + liquidity + funding" },
        { label: "Review scope", value: "Permissions and reconciliation" },
        { label: "Launch output", value: "Agreed operating handoff" },
      ],
    },
  },
  {
    page: {
      path: "/resources/prop-firm-launch-blueprint",
      title: "Turn your prop program into an operating plan.",
      navLabel: "Prop firm launch blueprint",
      eyebrow: "Prop firm launch blueprint",
      description:
        "Define evaluation stages, rule calculations, participant communication and payout-review responsibility. Build the launch brief around the complete program lifecycle.",
      kind: "article",
      visual: "prop",
      highlights: [
        {
          title: "Rules with definitions",
          text: "Specify loss calculations, stage transitions and timing conventions before configuring the program.",
        },
        {
          title: "A participant journey",
          text: "Plan the experience from account access and evaluation progress to review and support.",
        },
        {
          title: "Visible responsibility",
          text: "Assign program administration, exceptions and payout review to the appropriate operators.",
        },
      ],
      sections: [
        {
          id: "prop-program-definition",
          title:
            "Write a program specification people can interpret consistently.",
          paragraphs: [
            "Start with the stages and the conditions for moving between them. Account size, profit target and trading-day requirements need enough context for participants and operators to reach the same interpretation.",
            "For daily loss and drawdown, specify the basis, timing and treatment of account activity. Static and trailing rules differ; a short label is not a complete policy definition.",
          ],
          bullets: [
            "Evaluation model, stages and progression conditions.",
            "Account environment, sizes, leverage and reset policy.",
            "Profit targets and minimum trading-day requirements.",
            "Daily-loss basis, reset convention and breach handling.",
            "Maximum-loss policy and static or trailing drawdown definition.",
          ],
          links: [
            { label: "Explore prop firm controls", href: "/prop-firm" },
            { label: "Review the prop package", href: "/prop-pricing" },
          ],
        },
        {
          id: "prop-lifecycle-map",
          title: "Connect every participant state to an operator workflow.",
          paragraphs: [
            "Map account access, active evaluation, stage review, exceptions and payout eligibility. Each state should explain what the participant sees and which operator can review or change it.",
            "Keep community moderation separate from program authority. A support conversation can carry useful account context without granting the moderator permission to change a loss rule or approve a payout.",
          ],
          bullets: [
            "Platform-account access and participant ownership.",
            "Progress, rule usage and account-headroom presentation.",
            "Stage transitions, resets and exception-review responsibility.",
            "Payout eligibility, verification and destination confirmation.",
            "Participant announcements, support channels and escalation.",
          ],
          links: [
            {
              label: "Plan the technical connections",
              href: "/technical-integration",
            },
            { label: "Review participant community tools", href: "/community" },
          ],
        },
        {
          id: "prop-program-validation",
          title: "Validate the rules and the handoff as one lifecycle.",
          paragraphs: [
            "Build example journeys that reach each important program state. Include a normal progression, a loss-limit boundary, an exception requiring review and a payout request that does not yet meet the stated conditions.",
            "Compare the displayed progress with the authoritative platform and program records. The handoff should identify approved policies, connected capabilities, operator permissions and the owner of every external dependency.",
          ],
          bullets: [
            "Check stage and eligibility decisions against the documented rules.",
            "Validate daily-loss resets and drawdown interpretation.",
            "Confirm permission boundaries for program and payout reviews.",
            "Reconcile account activity and participant progress.",
            "Record the commercial package, provider terms and support process.",
          ],
          links: [
            { label: "Prepare your prop launch brief", href: "/contact" },
            { label: "Explore back-office reviews", href: "/admin-portal" },
          ],
        },
      ],
      related: [
        "/prop-firm",
        "/prop-pricing",
        "/admin-portal",
        "/technical-integration",
      ],
      cta: { label: "Prepare a prop firm launch brief", href: "/contact" },
      faqs: [
        {
          question: "Which rule details should the launch brief include?",
          answer:
            "Include evaluation stages, profit targets, trading-day requirements, daily-loss calculation and reset timing, drawdown definitions, stage transitions and payout eligibility. Record the operator responsible for exceptions.",
        },
        {
          question: "Does this blueprint specify a participant profit split?",
          answer:
            "The operator defines participant profit-share and payout policies for the program. Those values are distinct from Azuriya's commercial revenue-share arrangement and should be documented separately.",
        },
        {
          question: "Can the public preview issue a funded account?",
          answer:
            "No. The website illustrates program administration with example states. Live account issuance, capital arrangements and participant terms require the actual configured operation and its relevant agreements.",
        },
      ],
    },
    details: {
      layout: "blueprint",
      visual: "prop",
      statement: {
        label: "The program deliverable",
        title: "A rulebook your operations can follow.",
        text: "Connect the participant's published requirements to stage decisions, account records, exception reviews and payout eligibility before planning the operational handoff.",
      },
      capabilities: [
        {
          title: "Program specification",
          text: "Document stages, account environments, targets and the conditions for progressing through the program.",
        },
        {
          title: "Rule definitions",
          text: "Set explicit calculation bases, timing conventions and review requirements for daily loss and drawdown.",
        },
        {
          title: "Participant journey",
          text: "Map access, progress, communication and support to the participant's current program state.",
        },
        {
          title: "Review responsibilities",
          text: "Assign program exceptions and payout eligibility to authorized operators with clear decision records.",
        },
      ],
      workflow: [
        {
          label: "01 · Program",
          title: "Define the stages",
          text: "Describe the participant requirements and account environments.",
        },
        {
          label: "02 · Rules",
          title: "Specify the calculations",
          text: "Agree loss, drawdown, progression and payout definitions.",
        },
        {
          label: "03 · Validation",
          title: "Walk through the lifecycle",
          text: "Check normal journeys, rule boundaries and exception cases.",
        },
        {
          label: "04 · Handoff",
          title: "Confirm the operating team",
          text: "Record access, dependencies, review owners and support responsibilities.",
        },
      ],
      specification: [
        { label: "Primary input", value: "Program and participant rules" },
        { label: "Account scope", value: "Evaluation and stage lifecycle" },
        { label: "Validation scope", value: "Rules + eligibility + records" },
        { label: "Launch output", value: "Agreed program handoff" },
      ],
    },
  },
  {
    page: {
      path: "/technical-integration",
      title: "Connect the capability. Verify the complete workflow.",
      navLabel: "Technical integration",
      eyebrow: "Management & operations",
      description:
        "Plan trading-platform, funding and business-system connections around explicit capabilities, scoped access and reliable records. Give every integration a defined purpose and an acceptance path.",
      kind: "solution",
      visual: "network",
      highlights: [
        {
          title: "Capability-led scope",
          text: "Separate account visibility, order actions, funding status and reporting requirements for each connection.",
        },
        {
          title: "Controlled access",
          text: "Define the server, tenant, account groups and permissions that an integration is allowed to reach.",
        },
        {
          title: "Reconciled outcomes",
          text: "Verify the result in the source system and the operational record, including failures and recovery.",
        },
      ],
      sections: [
        {
          id: "integration-capability",
          title: "Begin with the action your operator needs.",
          paragraphs: [
            "A platform name is the start of an integration discussion. The useful scope describes what the team must read, create, review or reconcile and the account context in which that action takes place.",
            "Trading, copy workflows, payment processing and business automation have different permissions and state models. Agree each capability against the selected service's interface and the intended operating environment.",
          ],
          bullets: [
            "Account identity, ownership and group information.",
            "Instrument data, positions and supported order operations.",
            "Master and follower relationships for copy-trading scope.",
            "Payment processing, approval and account-credit status.",
            "Reporting, event delivery and operational automation.",
          ],
          links: [
            {
              label: "Review trading-platform options",
              href: "/trading-platforms",
            },
            { label: "Explore automation scope", href: "/automation" },
          ],
        },
        {
          id: "integration-access",
          title: "Set the access boundary before configuring the connection.",
          paragraphs: [
            "Record the platform server or provider environment, the account groups in scope and the operations permitted for each role. MT5 Manager and other administration interfaces require their own authorized access and capability review.",
            "Credentials belong in the controlled deployment configuration. Authenticated tenant and account ownership, order validation and risk checks remain necessary wherever the connector enables an account action.",
          ],
          bullets: [
            "Separate preview, test and production environments.",
            "Confirm delegated administration and read-only access requirements.",
            "Restrict actions to the authorized tenant and account scope.",
            "Define provider, platform and operator responsibilities.",
            "Record the access needed for recovery and support.",
          ],
          links: [
            {
              label: "Review back-office permission scope",
              href: "/admin-portal",
            },
            { label: "Explore Azuriya Core", href: "/azuriya-core" },
          ],
        },
        {
          id: "integration-acceptance",
          title: "Prove the state transition, then reconcile the record.",
          paragraphs: [
            "An acknowledged request is not the same as a completed operation. Acceptance should trace the action through processing, the source-system result and the record available to the operator.",
            "Define how failures, delayed events and retries appear in the workspace. Reconciliation should make discrepancies discoverable without treating a local screen update as confirmation of an external account or financial change.",
          ],
          bullets: [
            "Compare requested actions with supported connector behavior.",
            "Check authorization refusals and invalid account actions.",
            "Validate delayed responses, duplicate events and connection recovery.",
            "Trace order, funding and configuration records to their source.",
            "Agree release acceptance and ongoing monitoring responsibilities.",
          ],
          links: [
            { label: "Prepare an integration brief", href: "/contact" },
            { label: "Explore the integration catalog", href: "/integrations" },
          ],
        },
      ],
      related: [
        "/trading-platforms",
        "/automation",
        "/azuriya-core",
        "/admin-portal",
      ],
      cta: { label: "Scope a technical integration", href: "/contact" },
      faqs: [
        {
          question: "Does a catalog listing mean the integration is live?",
          answer:
            "No. The catalog supports discovery. A production connection requires agreed capabilities, permitted access, provider arrangements and validation for the selected environment.",
        },
        {
          question: "What belongs in a technical integration brief?",
          answer:
            "Include the service and environment, required account actions, ownership and permissions, relevant instruments or currencies, processing states, source records and the people responsible for exceptions.",
        },
        {
          question: "How are custom connections priced?",
          answer:
            "Custom work and external provider requirements are reviewed separately from the standard Azuriya monthly package. The agreed scope should state the implementation responsibilities and any applicable charges.",
        },
      ],
    },
    details: {
      layout: "operations",
      visual: "integration",
      statement: {
        label: "From interface to operation",
        title: "An integration is a complete journey.",
        text: "Define the capability, control its access and validate the resulting state in both the connected service and the operator's records.",
      },
      capabilities: [
        {
          title: "Capability mapping",
          text: "Document the supported reads, writes and review actions for the platform or provider you want to connect.",
        },
        {
          title: "Access planning",
          text: "Scope environments, servers, account groups and delegated permissions before configuration.",
        },
        {
          title: "State reconciliation",
          text: "Connect processing states and external outcomes to clear account and operational records.",
        },
        {
          title: "Release validation",
          text: "Agree successful journeys, refused actions, failures and recovery cases as acceptance criteria.",
        },
      ],
      workflow: [
        {
          label: "01 · Capability",
          title: "Describe the required action",
          text: "List the service, account context and outcome the operator needs.",
        },
        {
          label: "02 · Access",
          title: "Agree the connection boundary",
          text: "Confirm environments, permissions and provider responsibility.",
        },
        {
          label: "03 · Records",
          title: "Map the state lifecycle",
          text: "Define processing, completion, exceptions and source reconciliation.",
        },
        {
          label: "04 · Acceptance",
          title: "Validate before handoff",
          text: "Test the complete journeys and assign monitoring and support ownership.",
        },
      ],
      specification: [
        { label: "Scope unit", value: "Capability and account action" },
        { label: "Access boundary", value: "Tenant + account + environment" },
        { label: "Connector availability", value: "Confirmed per service" },
        { label: "Acceptance evidence", value: "Source and operator records" },
        { label: "Custom work", value: "Separately agreed scope" },
      ],
    },
  },
  {
    page: {
      path: "/business-hub",
      title: "Bring the operating team into the same picture.",
      navLabel: "Hub for business",
      eyebrow: "Management & operations",
      description:
        "Connect account support, platform context, program activity and commercial oversight around clear team responsibilities. Plan the daily operating workspace for your brokerage or prop firm.",
      kind: "solution",
      visual: "portal",
      highlights: [
        {
          title: "Account context",
          text: "Give support and operations a shared reference for the client, account and platform involved.",
        },
        {
          title: "Defined ownership",
          text: "Separate community support, configuration authority, reporting and financial review responsibilities.",
        },
        {
          title: "Operational continuity",
          text: "Keep review queues, reporting needs and escalation paths in the same implementation scope.",
        },
      ],
      sections: [
        {
          id: "business-workspace",
          title: "Organize the workspace around daily decisions.",
          paragraphs: [
            "A business hub starts with the people operating the service. Describe the questions each team needs to answer, from an account-support request to a program exception or a funding status that needs investigation.",
            "The platform concept gives those teams dedicated workspaces while preserving a common account and team context. The exact deployment should reflect the operating model and the connected services behind it.",
          ],
          bullets: [
            "Account and client context for support teams.",
            "Brokerage policy and prop program review views.",
            "Funding requests, approval states and reconciliation context.",
            "Reporting and analytics requirements for the operating team.",
          ],
          links: [
            { label: "Explore the platform workspace", href: "/platform" },
            { label: "Review the back office", href: "/admin-portal" },
          ],
        },
        {
          id: "business-handoffs",
          title: "Make the handoff between teams explicit.",
          paragraphs: [
            "Community moderators, support agents and operations managers may discuss the same account while having different authority. Plan a handoff that carries the relevant context and routes the decision to an authorized operator.",
            "A queue should explain what is waiting, what evidence is available and who owns the next step. Configuration review, account investigation and payout or funding approval need their own responsibilities.",
          ],
          bullets: [
            "Role-scoped access and account visibility.",
            "Support-to-operations escalation requirements.",
            "Review ownership for configuration and program changes.",
            "Approval responsibility for funding and payout requests.",
            "Decision records and follow-up context.",
          ],
          links: [
            { label: "Plan community roles", href: "/community" },
            {
              label: "Review technical dependencies",
              href: "/technical-integration",
            },
          ],
        },
        {
          id: "business-reporting",
          title: "Set the reporting scope around the business you run.",
          paragraphs: [
            "Define the records the team needs for daily review and the figures used for commercial reconciliation. The source, calculation responsibility and review period should be clear for each report.",
            "Account activity, provider status and commercial revenue-share reporting are different views of the operation. Agree how they relate and which systems provide the authoritative records before creating automated summaries.",
          ],
          bullets: [
            "Client, account and program activity requirements.",
            "Funding and payout processing records.",
            "Platform and provider reconciliation responsibilities.",
            "Commercial reporting and settlement requirements.",
            "Automation triggers and exception-review scope.",
          ],
          links: [
            { label: "Explore operating automation", href: "/automation" },
            {
              label: "Prepare your business workspace brief",
              href: "/contact",
            },
          ],
        },
      ],
      related: ["/platform", "/admin-portal", "/brokerage", "/prop-firm"],
      cta: { label: "Plan your business workspace", href: "/contact" },
      faqs: [
        {
          question:
            "How is the business hub different from the integration catalog?",
          answer:
            "The business hub describes your team's operating workspace, responsibilities and handoffs. The integration catalog is a separate directory for discovering platform and service options.",
        },
        {
          question:
            "Can support teams see context without full administration?",
          answer:
            "The access model should grant each role the visibility and actions it needs. Production permissions are agreed and enforced for the deployment, with account ownership and administrative authority kept explicit.",
        },
        {
          question: "What should an operations brief cover?",
          answer:
            "Describe your teams, account journeys, review queues, reporting needs and escalation paths. Identify connected services, authoritative records and the operator responsible for each decision.",
        },
      ],
    },
    details: {
      layout: "operations",
      visual: "business",
      statement: {
        label: "The daily operating view",
        title: "Context for the team. Ownership for the decision.",
        text: "Bring support, accounts, program activity and commercial oversight into a workspace where each team understands its responsibility and the next operational step.",
      },
      capabilities: [
        {
          title: "Shared account context",
          text: "Connect support work to the relevant client, team, platform and current account state.",
        },
        {
          title: "Operational queues",
          text: "Define what requires review, the evidence available and who owns the next decision.",
        },
        {
          title: "Team responsibility",
          text: "Plan role boundaries across community, support, configuration and financial review.",
        },
        {
          title: "Reporting scope",
          text: "Agree the source records and review requirements behind account, funding and commercial summaries.",
        },
      ],
      workflow: [
        {
          label: "01 · People",
          title: "Map the operating team",
          text: "Identify roles, account visibility and decision authority.",
        },
        {
          label: "02 · Work",
          title: "Define the daily queues",
          text: "Describe support, account, configuration and financial-review journeys.",
        },
        {
          label: "03 · Handoff",
          title: "Connect the responsibility",
          text: "Agree escalation, reporting and source reconciliation across teams.",
        },
      ],
      specification: [
        { label: "Audience", value: "Brokerage and prop operators" },
        { label: "Workspace scope", value: "Accounts + teams + operations" },
        { label: "Decision authority", value: "Role-scoped responsibilities" },
        { label: "Reporting basis", value: "Agreed source records" },
      ],
    },
  },
  {
    page: {
      path: "/admin-portal",
      title: "The back office behind every account decision.",
      navLabel: "Back office",
      eyebrow: "Back office & administration",
      description:
        "Plan operator roles, account-group policies, instrument settings and funding reviews in a dedicated administration workspace. Keep configuration scope and decision records visible together.",
      kind: "product",
      visual: "admin",
      highlights: [
        {
          title: "Scoped administration",
          text: "Choose the tenant, server and account group before reviewing the settings an operator can change.",
        },
        {
          title: "Clear review states",
          text: "Inspect proposed configuration changes and the person responsible for authorizing them.",
        },
        {
          title: "Traceable decisions",
          text: "Connect account and funding reviews to their supporting operational records.",
        },
      ],
      sections: [
        {
          id: "back-office-access",
          title: "Define the operator's responsibility before their access.",
          paragraphs: [
            "Begin with the roles in your operation: community support, account administration, operations management and reporting. Each role needs an explicit boundary for the information it can inspect and the actions it can take.",
            "Platform administration access must also match the configured server and account groups. An MT5 Manager connection or another platform interface can only support the capabilities and permissions available to that connection.",
          ],
          bullets: [
            "Tenant, server and account-group visibility.",
            "Delegated capabilities for operators and analysts.",
            "Separation of community roles from account authority.",
            "Authenticated ownership and review permissions.",
          ],
          links: [
            {
              label: "Plan platform administration access",
              href: "/technical-integration",
            },
            { label: "Explore business team workflows", href: "/business-hub" },
          ],
        },
        {
          id: "back-office-configuration",
          title: "Review the policy, the change and the accounts it affects.",
          paragraphs: [
            "Group policy ties leverage, commission configuration and instrument availability to the appropriate accounts. A useful review explains the proposed values and their scope before an authorized operator applies a change in a connected deployment.",
            "Instrument and operational settings carry their own dependencies. Precision, volume steps, sessions, order policy, adapter configuration and synchronization requirements should be reviewed in their platform context.",
          ],
          bullets: [
            "Account-group leverage and separate commission markup settings.",
            "Instrument precision, volume steps and session configuration.",
            "Permitted order actions and policy requirements.",
            "Adapters, synchronization and event-delivery scope.",
            "Before-and-after review with explicit authorization responsibility.",
          ],
          links: [
            { label: "Review brokerage controls", href: "/brokerage" },
            { label: "Review prop program policies", href: "/prop-firm" },
          ],
        },
        {
          id: "back-office-funding-audit",
          title: "Keep funding status and review evidence in the same view.",
          paragraphs: [
            "Payment processing, operator approval and account reconciliation are separate steps. The back-office scope should make the current state visible and identify the evidence required to resolve a request or discrepancy.",
            "Account and configuration decisions need traceable records. Agree which service provides the source result, what the operator reviews and how the action is recorded. The public dashboard demonstrates local drafts and review states; it does not apply server settings or move funds.",
          ],
          bullets: [
            "Payment methods, currencies and provider availability.",
            "Deposit and withdrawal limits and fee-policy configuration.",
            "Processing, approval and reconciliation states.",
            "Payout-review responsibility for prop programs.",
            "Configuration, account and financial decision records.",
          ],
          links: [
            { label: "Plan the back-office scope", href: "/contact" },
            { label: "Explore the connected platform", href: "/platform" },
          ],
        },
      ],
      related: [
        "/business-hub",
        "/technical-integration",
        "/brokerage",
        "/prop-firm",
      ],
      cta: { label: "Plan your back office", href: "/contact" },
      faqs: [
        {
          question:
            "Can an analyst have reporting access without full administration?",
          answer:
            "That is part of the role-scoping discussion. Define reporting visibility separately from configuration, account and funding authority, then confirm that the selected platform connections can enforce the intended access.",
        },
        {
          question: "Does reviewing a draft change a trading server?",
          answer:
            "The public dashboard produces local review summaries. Production changes need an authenticated connection, authorized operator, supported platform capability and the agreed review process.",
        },
        {
          question: "Why keep payment processing and approval separate?",
          answer:
            "A provider response describes a processing state. Account credit, withdrawal completion and reconciliation can require additional checks or approval under the operation's configured rules. The review should show the full journey.",
        },
      ],
    },
    details: {
      layout: "operations",
      visual: "back-office",
      statement: {
        label: "The administration workspace",
        title: "See the scope before making the change.",
        text: "Put operator permission, account policy, configuration review and funding evidence beside the decisions they support.",
      },
      capabilities: [
        {
          title: "Roles & access",
          text: "Define account visibility, delegated administration and reporting permissions for the people operating the service.",
        },
        {
          title: "Accounts & instruments",
          text: "Scope account-group policy, leverage, pricing, symbol settings and order requirements together.",
        },
        {
          title: "Funding reviews",
          text: "Connect provider processing, approvals and account reconciliation to the responsible operator.",
        },
        {
          title: "Review & audit context",
          text: "Record proposed changes, authorization and supporting source-system results for operational decisions.",
        },
      ],
      workflow: [
        {
          label: "01 · Scope",
          title: "Select the operating context",
          text: "Identify the tenant, server, account group and authorized operator.",
        },
        {
          label: "02 · Review",
          title: "Inspect the intended change",
          text: "Compare proposed configuration and supporting account or funding evidence.",
        },
        {
          label: "03 · Reconcile",
          title: "Confirm the resulting record",
          text: "Review the source-system outcome and the operational decision record.",
        },
      ],
      specification: [
        {
          label: "Administration scope",
          value: "Tenant + server + account group",
        },
        { label: "Permission model", value: "Delegated operator capabilities" },
        { label: "Configuration flow", value: "Scoped draft and review" },
        {
          label: "Funding flow",
          value: "Processing + approval + reconciliation",
        },
        {
          label: "Public demonstration",
          value: "Local drafts and example records",
        },
      ],
    },
  },
];
