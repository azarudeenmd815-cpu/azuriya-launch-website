import type { DestinationDefinition } from "./destination-types";

export const productDestinations: DestinationDefinition[] = [
  {
    page: {
      path: "/platform",
      title: "A clearer view of your trading operation.",
      navLabel: "Trading platform",
      eyebrow: "Azuriya platform",
      description:
        "Put account activity, team coordination and operating decisions in one workspace, with the platform context each task needs.",
      kind: "product",
      highlights: [
        {
          title: "Accounts in context",
          text: "Identify the team, platform and group behind each account.",
        },
        {
          title: "Focused workspaces",
          text: "Move from the overview into funding, risk, support or configuration.",
        },
        {
          title: "An inspectable preview",
          text: "Explore example data, local drafts and clearly simulated trading.",
        },
      ],
      sections: [
        {
          id: "platform-daily-work",
          title: "Start with the account. Follow the work.",
          paragraphs: [
            "A balance alone rarely explains an operational question. Your team also needs to know where the account trades, which group it belongs to and which process is waiting for a decision.",
            "The Azuriya workspace brings that context into the account journey. Use the overview to identify an issue, then open the relevant view for its details.",
          ],
          bullets: [
            "Account and platform identification",
            "Funding requests and their review state",
            "Trading activity with order and position context",
            "Community questions beside the team they concern",
          ],
          links: [
            {
              label: "Explore the dashboard preview",
              href: "/dashboard-preview",
            },
          ],
        },
        {
          id: "platform-operator-responsibility",
          title: "Give each operator a deliberate scope.",
          paragraphs: [
            "Analysts, support staff and administrators need different views and different permissions. A shared interface should make their responsibilities clearer as the operation grows.",
            "Plan report access, payment review and platform configuration separately. Account ownership and server permissions continue to govern the actions available in a connected deployment.",
          ],
          bullets: [
            "Reporting access for analysts",
            "Account context for support teams",
            "Review queues for funding operators",
            "Scoped settings for administrators",
          ],
          links: [{ label: "Review the back office", href: "/admin-portal" }],
        },
        {
          id: "platform-deployment-boundary",
          title: "Configure the connections around the workspace.",
          paragraphs: [
            "Azuriya's platform proposition is a management layer around your configured trading stack. Available account and order actions depend on each platform's interface, connector and granted access.",
            "The public terminal and dashboard demonstrate the experience with simulated execution. Production planning defines the platform connections, reconciliation and operational responsibilities before activation.",
          ],
          bullets: [
            "Select the required platforms and account groups",
            "Confirm read and write capabilities for each connector",
            "Define synchronization and exception handling",
            "Agree the deployment and commercial scope",
          ],
          links: [
            {
              label: "Plan technical integration",
              href: "/technical-integration",
            },
            {
              label: "Explore supported planning options",
              href: "/trading-platforms",
            },
          ],
        },
      ],
      related: [
        "/azuriya-core",
        "/admin-portal",
        "/technical-integration",
        "/community",
      ],
      cta: { label: "Discuss your platform requirements", href: "/contact" },
      faqs: [
        {
          question: "Is the public trading terminal live?",
          answer:
            "The public terminal uses simulated execution and example account data. It does not place orders with an external trading platform or move real funds.",
        },
        {
          question: "Does Azuriya replace every external trading platform?",
          answer:
            "The proposition brings configured platforms into a common management workspace. The trading actions available are determined by the selected platform, connector and access permissions.",
        },
        {
          question: "What should I bring to a platform discussion?",
          answer:
            "Bring your account groups, platform choices, operator roles and funding workflow. These establish which connections and capabilities your deployment needs.",
        },
      ],
    },
    details: {
      layout: "product",
      visual: "platform",
      statement: {
        label: "Workspace design",
        title: "The next action, with its context.",
        text: "A useful operating view connects the account, its platform and the person responsible for the next decision.",
      },
      capabilities: [
        {
          title: "Account workspace",
          text: "Review account groups, positions and platform context in focused views.",
        },
        {
          title: "Operational queues",
          text: "Inspect funding and support work with a visible state and owner.",
        },
        {
          title: "Business controls",
          text: "Review brokerage and prop program configuration within the same portal.",
        },
        {
          title: "Team coordination",
          text: "Organize members, channels and resources around the operating team.",
        },
      ],
      workflow: [
        {
          label: "01",
          title: "Identify",
          text: "Select the account or team that needs attention.",
        },
        {
          label: "02",
          title: "Inspect",
          text: "Open the appropriate workspace and review its detail.",
        },
        {
          label: "03",
          title: "Review",
          text: "Check the action, permission and affected scope.",
        },
        {
          label: "04",
          title: "Configure",
          text: "Agree the connections required for production use.",
        },
      ],
      specification: [
        {
          label: "Primary purpose",
          value: "Trading operations and management",
        },
        {
          label: "Platform access",
          value: "Configured connectors and permissions",
        },
        {
          label: "Public environment",
          value: "Example data and simulated execution",
        },
        { label: "Deployment scope", value: "Defined for your operation" },
      ],
    },
  },
  {
    page: {
      path: "/azuriya-core",
      title: "The operating layer between your systems.",
      navLabel: "Azuriya Core",
      eyebrow: "Azuriya Core",
      description:
        "Connect account context, business workflows and the tools your operation relies on through a defined, coordinated infrastructure.",
      kind: "product",
      highlights: [
        {
          title: "Shared context",
          text: "Keep the account, team and platform relationship visible across workflows.",
        },
        {
          title: "Defined connections",
          text: "Scope the connector and permitted actions for each external system.",
        },
        {
          title: "Operational continuity",
          text: "Plan how states, exceptions and responsibilities move between services.",
        },
      ],
      sections: [
        {
          id: "core-operating-context",
          title: "Connect the work behind the interface.",
          paragraphs: [
            "Brokerage, prop programs, CRM and payments each carry a different part of the business. The Core proposition coordinates those areas around a shared account and operating context.",
            "A connection starts with a defined relationship: which account belongs to which platform, what information the operator can see and which service owns the authoritative state.",
          ],
          bullets: [
            "Account-to-platform relationships",
            "Team and operator responsibilities",
            "Funding and program status context",
            "Business workflow handoffs",
          ],
          links: [{ label: "See the platform workspace", href: "/platform" }],
        },
        {
          id: "core-connection-contract",
          title: "Agree the contract for every connection.",
          paragraphs: [
            "External systems do not share identical interfaces. A connection needs a supported action set, an access model and a clear definition of how updates are exchanged.",
            "Define identifier mappings, synchronization frequency and exception ownership during integration planning. A catalog entry helps identify an option; it does not establish a live connection.",
          ],
          bullets: [
            "Supported account and order actions",
            "Provider access and platform permissions",
            "Identifiers and event mappings",
            "Reconciliation and retry responsibilities",
          ],
          links: [
            {
              label: "Review integration planning",
              href: "/technical-integration",
            },
            { label: "Browse the ecosystem", href: "/integrations" },
          ],
        },
        {
          id: "core-business-scope",
          title: "Build the operating scope around your model.",
          paragraphs: [
            "A brokerage needs pricing, liquidity and account administration. A prop operation needs program rules, participant progress and payout review. Core provides the organizing layer for the workflows you choose to configure.",
            "The standard Azuriya package is offered at $0 per month with a 35% share of eligible revenue. The agreement defines the included package and revenue basis; external platform licensing, provider services and custom work are scoped separately.",
          ],
          bullets: [
            "Choose the initial business model",
            "Identify the systems already in use",
            "Prioritize the launch connections",
            "Confirm operating and commercial responsibilities",
          ],
          links: [
            { label: "Explore the business hub", href: "/business-hub" },
            { label: "Review package terms", href: "/pricing" },
          ],
        },
      ],
      related: [
        "/platform",
        "/technical-integration",
        "/automation",
        "/business-hub",
      ],
      cta: { label: "Plan your connected operation", href: "/contact" },
      faqs: [
        {
          question: "Is Core a separate trading venue?",
          answer:
            "Core describes Azuriya's interconnected operating layer. It coordinates configured systems and workflows; execution access depends on the chosen trading platform and infrastructure.",
        },
        {
          question: "Does every ecosystem entry connect automatically?",
          answer:
            "No. Each connection needs a confirmed interface, provider access, supported actions and an agreed implementation scope. Catalog entries identify planning options.",
        },
        {
          question: "What does the $0 monthly offer include?",
          answer:
            "It applies to the standard Azuriya monthly package and carries a 35% share of eligible revenue. Included services, the revenue basis and settlement are defined in the agreement. External services and custom work are scoped separately.",
        },
      ],
    },
    details: {
      layout: "operations",
      visual: "core",
      statement: {
        label: "Connected operations",
        title: "One account context. Several specialist systems.",
        text: "Coordinate the handoffs between platforms, CRM, payments and business administration while preserving each system's role.",
      },
      capabilities: [
        {
          title: "Platform relationships",
          text: "Associate accounts with their configured trading environment.",
        },
        {
          title: "Business workflows",
          text: "Bring brokerage and prop administration into a coherent operating scope.",
        },
        {
          title: "Funding context",
          text: "Plan how provider states enter review and reconciliation workflows.",
        },
        {
          title: "Integration planning",
          text: "Define capabilities, permissions and exception ownership per connector.",
        },
      ],
      workflow: [
        {
          label: "01",
          title: "Map",
          text: "Document the services and accounts that make up the operation.",
        },
        {
          label: "02",
          title: "Define",
          text: "Assign state ownership and the permitted actions between systems.",
        },
        {
          label: "03",
          title: "Connect",
          text: "Agree and configure the required interfaces.",
        },
        {
          label: "04",
          title: "Reconcile",
          text: "Set review and exception processes for the connected workflow.",
        },
      ],
      specification: [
        { label: "Role", value: "Interconnected operating layer" },
        {
          label: "Connection basis",
          value: "Agreed interfaces and provider access",
        },
        {
          label: "Business scope",
          value: "Brokerage, prop and supporting operations",
        },
        {
          label: "Monthly package",
          value: "$0 + 35% revenue share; terms apply",
        },
      ],
    },
  },
  {
    page: {
      path: "/automation",
      title: "Connect the repeatable work in your operation.",
      navLabel: "Automation",
      eyebrow: "Automation workflows",
      description:
        "Plan event-driven handoffs between the systems your team uses, with explicit triggers, review steps and exception handling.",
      kind: "product",
      highlights: [
        {
          title: "Clear triggers",
          text: "Identify the account or provider event that begins a workflow.",
        },
        {
          title: "Useful handoffs",
          text: "Connect information to the team or system that needs it next.",
        },
        {
          title: "Visible exceptions",
          text: "Define review, retry and reconciliation before activation.",
        },
      ],
      sections: [
        {
          id: "automation-workflow-design",
          title: "Give every workflow a beginning and an owner.",
          paragraphs: [
            "Automation planning starts with a specific operating task. Define the event, the information it carries and the action the receiving system is allowed to take.",
            "Account status updates, funding notifications and internal review handoffs are useful starting points. Keep payment approval and sensitive account changes under the appropriate permissions and review policy.",
          ],
          bullets: [
            "Account status and CRM context",
            "Funding event notifications",
            "Support and review queue handoffs",
            "Operational reporting updates",
          ],
          links: [
            { label: "Explore the business workflows", href: "/business-hub" },
          ],
        },
        {
          id: "automation-tool-selection",
          title: "Choose tools around the connection you need.",
          paragraphs: [
            "The ecosystem directory includes automation tools such as Zapier, Make and n8n as planning options. Their suitability depends on the available APIs, webhooks, access permissions and required data handling.",
            "A workflow connector is different from a native trading strategy builder. This proposition covers operational connections and agreed integrations; it does not claim built-in strategy generation or backtesting.",
          ],
          bullets: [
            "Confirm the source event and destination interface",
            "Map identifiers and required fields",
            "Define credential and permission scope",
            "Review the tool's service and usage requirements",
          ],
          links: [
            { label: "Browse automation tools", href: "/integrations" },
            {
              label: "Discuss a technical connection",
              href: "/technical-integration",
            },
          ],
        },
        {
          id: "automation-exception-policy",
          title: "Plan what happens when a handoff fails.",
          paragraphs: [
            "An event may arrive twice, arrive late or fail to reach its destination. Define how the workflow identifies duplicates, handles retries and alerts the operator responsible for review.",
            "Before activation, test the intended actions against the actual connected environment. Public dashboard interactions are demonstration states and do not run external automations.",
          ],
          bullets: [
            "Duplicate-event handling",
            "Retry and escalation policy",
            "Reconciliation with the source system",
            "Operator review for sensitive actions",
          ],
          links: [
            {
              label: "Review back-office responsibilities",
              href: "/admin-portal",
            },
          ],
        },
      ],
      related: [
        "/azuriya-core",
        "/technical-integration",
        "/integrations",
        "/admin-portal",
      ],
      cta: { label: "Scope an automation workflow", href: "/contact" },
      faqs: [
        {
          question: "Does this include a native strategy builder?",
          answer:
            "The automation proposition covers operational workflows and configured connections. A native strategy builder, strategy marketplace or backtesting engine is not represented as an available Azuriya capability.",
        },
        {
          question: "Are Zapier, Make or n8n already connected?",
          answer:
            "The directory identifies automation options for planning. A specific connection requires agreed APIs or webhooks, permissions, provider terms and implementation scope.",
        },
        {
          question: "Can an automation approve funding or change an account?",
          answer:
            "That depends on the connected interface and your operating policy. Sensitive actions require the appropriate authorization, validation and review; an automation must preserve those controls.",
        },
      ],
    },
    details: {
      layout: "product",
      visual: "automation",
      statement: {
        label: "Workflow planning",
        title: "A trigger. A handoff. A clear result.",
        text: "Define the information that moves between systems and the operator who owns exceptions when the expected result is missing.",
      },
      capabilities: [
        {
          title: "Event mapping",
          text: "Describe the source event, identifiers and destination fields.",
        },
        {
          title: "Tool selection",
          text: "Review API and webhook capabilities against the workflow requirements.",
        },
        {
          title: "Review boundaries",
          text: "Keep approval and account permissions attached to sensitive actions.",
        },
        {
          title: "Exception handling",
          text: "Plan duplicate detection, retries and reconciliation responsibilities.",
        },
      ],
      workflow: [
        {
          label: "01",
          title: "Trigger",
          text: "Identify the confirmed source event.",
        },
        {
          label: "02",
          title: "Map",
          text: "Define fields, account context and destination access.",
        },
        {
          label: "03",
          title: "Review",
          text: "Apply the authorization and approval policy.",
        },
        {
          label: "04",
          title: "Reconcile",
          text: "Confirm the expected state or send the exception for review.",
        },
      ],
      specification: [
        { label: "Purpose", value: "Operational workflow connections" },
        { label: "Interfaces", value: "Scoped APIs and webhooks" },
        { label: "Tool availability", value: "Assessed for each integration" },
        { label: "Public preview", value: "No external automations executed" },
      ],
    },
  },
  {
    page: {
      path: "/brokerage",
      title: "Plan the operation behind your brokerage.",
      navLabel: "Brokerage",
      eyebrow: "For brokers",
      description:
        "Define account policies, external liquidity, pricing and client support as one coordinated brokerage workflow.",
      kind: "product",
      highlights: [
        {
          title: "A-book direction",
          text: "Plan execution through configured external liquidity infrastructure.",
        },
        {
          title: "Group-level policy",
          text: "Review instruments, leverage and commission settings by account group.",
        },
        {
          title: "Connected operations",
          text: "Bring funding and client questions into the same operating context.",
        },
      ],
      sections: [
        {
          id: "brokerage-routing-plan",
          title: "Choose the route before presenting the service.",
          paragraphs: [
            "Azuriya's brokerage proposition follows an A-book direction with external liquidity. Provider eligibility, instrument coverage and account arrangements form part of the launch scope.",
            "Routing choices need to fit the platform and the instruments being offered. Define the provider relationship, symbol mapping and operational escalation path together.",
          ],
          bullets: [
            "External liquidity and provider arrangements",
            "Instrument coverage and symbol mappings",
            "Regional routing requirements",
            "Monitoring and reconciliation ownership",
          ],
          links: [
            { label: "Explore liquidity infrastructure", href: "/liquidity" },
            {
              label: "Read the brokerage launch blueprint",
              href: "/resources/brokerage-launch-blueprint",
            },
          ],
        },
        {
          id: "brokerage-policy-review",
          title: "Make the account policy easy to inspect.",
          paragraphs: [
            "Account groups give operators a defined scope for instruments, leverage and commissions. A review should show the affected group and the proposed policy before a connected server action is authorized.",
            "The public commission example separates a $2.00 base from up to $5.00 additional markup. Actual pricing, provider charges and settlement must be agreed for the operation.",
          ],
          bullets: [
            "Instrument precision, sessions and volume steps",
            "Leverage and group eligibility",
            "Base commission and additional markup",
            "Operator permissions and change review",
          ],
          links: [
            { label: "Review back-office controls", href: "/admin-portal" },
          ],
        },
        {
          id: "brokerage-commercial-package",
          title: "Put the package and responsibilities in writing.",
          paragraphs: [
            "The standard Azuriya monthly package is $0 per month with a 35% share of eligible revenue. The agreement defines the revenue basis, included services and settlement process.",
            "External trading-platform licensing, liquidity services, payment providers and custom work are scoped separately. Launch planning should also name the team responsible for client support, funding review and execution exceptions.",
          ],
          bullets: [
            "Standard package and included scope",
            "Revenue-share basis and settlement",
            "External provider and platform requirements",
            "Client support and operations ownership",
          ],
          links: [
            { label: "See broker pricing", href: "/broker-pricing" },
            { label: "Plan the business workflow", href: "/business-hub" },
          ],
        },
      ],
      related: [
        "/broker-pricing",
        "/resources/brokerage-launch-blueprint",
        "/liquidity",
        "/technical-integration",
      ],
      cta: { label: "Plan your brokerage", href: "/contact" },
      faqs: [
        {
          question: "Is the brokerage preview connected to liquidity?",
          answer:
            "The public preview illustrates the routing and configuration concept with simulated execution. Live provider accounts and platform connectivity must be established for the actual deployment.",
        },
        {
          question: "Is $0 the entire monthly Azuriya package?",
          answer:
            "Yes. The supplied offer applies to the standard Azuriya monthly package and carries a 35% share of eligible revenue. External platform licensing, provider services and custom work are scoped separately in the agreement.",
        },
        {
          question: "Can I set a different markup for each group?",
          answer:
            "Group-level commission configuration is part of the management proposition and demonstrated with local drafts. Available production actions depend on the configured platform connector, permissions and agreed pricing policy.",
        },
      ],
    },
    details: {
      layout: "product",
      visual: "brokerage",
      statement: {
        label: "Brokerage planning",
        title: "Execution, pricing and people in one plan.",
        text: "Treat the liquidity route, account policy and client workflow as connected operating decisions.",
      },
      capabilities: [
        {
          title: "Liquidity planning",
          text: "Define external providers, instrument coverage and routing responsibilities.",
        },
        {
          title: "Account groups",
          text: "Review platform, leverage and instrument policies for a specific scope.",
        },
        {
          title: "Commission context",
          text: "Separate underlying commission from the additional markup.",
        },
        {
          title: "Client operations",
          text: "Plan the handoff between support, funding review and administration.",
        },
      ],
      workflow: [
        {
          label: "01",
          title: "Choose the model",
          text: "Define instruments, platforms and the intended client workflow.",
        },
        {
          label: "02",
          title: "Scope providers",
          text: "Confirm external liquidity, funding and licensing requirements.",
        },
        {
          label: "03",
          title: "Set the policies",
          text: "Review account groups, pricing and operator responsibilities.",
        },
        {
          label: "04",
          title: "Prepare launch",
          text: "Agree configuration, reconciliation and commercial terms.",
        },
      ],
      specification: [
        {
          label: "Execution proposition",
          value: "A-book with external liquidity",
        },
        {
          label: "Operating scope",
          value: "Accounts, pricing, funding and support",
        },
        {
          label: "Monthly package",
          value: "$0 + 35% revenue share; terms apply",
        },
        { label: "External services", value: "Scoped separately" },
        { label: "Public execution", value: "Simulated" },
      ],
    },
  },
  {
    page: {
      path: "/prop-firm",
      title: "Give your prop program a complete operating framework.",
      navLabel: "Prop firm",
      eyebrow: "For prop firms",
      description:
        "Bring evaluation stages, risk definitions, participant support and payout review into a program your operators can inspect and explain.",
      kind: "product",
      highlights: [
        {
          title: "Defined stages",
          text: "Plan evaluation, verification and funded-stage transitions together.",
        },
        {
          title: "Explainable rules",
          text: "Keep targets, daily loss and drawdown definitions beside account progress.",
        },
        {
          title: "Payout context",
          text: "Review eligibility, timing and participant verification as one policy.",
        },
      ],
      sections: [
        {
          id: "prop-program-specification",
          title: "Write the full program specification.",
          paragraphs: [
            "A challenge needs more than an account size and target. Define what participants may trade, how long they have and what must happen before they can progress.",
            "The preview includes one-step and two-step examples. Use those views to examine the structure, then agree the actual rules, platform requirements and participant terms for your program.",
          ],
          bullets: [
            "Evaluation stages and progression criteria",
            "Account size, leverage and platform requirements",
            "Trading-day and time-limit definitions",
            "Reset and verification policies",
          ],
          links: [
            {
              label: "Read the prop launch blueprint",
              href: "/resources/prop-firm-launch-blueprint",
            },
          ],
        },
        {
          id: "prop-risk-definitions",
          title: "Make the rule and its calculation agree.",
          paragraphs: [
            "Daily loss, maximum loss and trailing drawdown describe different constraints. Operators and participants need the same definitions for equity treatment, reset times and breach handling.",
            "Dashboard graphics help explain progress, while authoritative program decisions require server-calculated values and the actual participant agreement. Define how disputed states are reviewed before accepting participants.",
          ],
          bullets: [
            "Daily-loss reset and calculation basis",
            "Static or trailing drawdown policy",
            "Stage and breach decision ownership",
            "Participant support and review procedure",
          ],
          links: [
            { label: "Review risk management", href: "/risk-management" },
            {
              label: "Inspect the dashboard preview",
              href: "/dashboard-preview",
            },
          ],
        },
        {
          id: "prop-payout-and-commercial-scope",
          title: "Keep participant payouts and package terms clear.",
          paragraphs: [
            "Define payout eligibility, profit-share settings, minimum amounts and review timing together. Participant verification and destination confirmation should be visible parts of the operator workflow.",
            "The standard Azuriya monthly package is $0 per month with a 35% share of eligible business revenue under the agreement. That commercial term is separate from the participant profit-share policy. External platform licensing, provider services and custom work are scoped separately.",
          ],
          bullets: [
            "Participant share and payout cycle",
            "Verification and minimum payout requirements",
            "Capital and payment-provider arrangements",
            "Azuriya package and business revenue-share terms",
          ],
          links: [
            { label: "See prop pricing", href: "/prop-pricing" },
            { label: "Explore the back office", href: "/admin-portal" },
          ],
        },
      ],
      related: [
        "/prop-pricing",
        "/resources/prop-firm-launch-blueprint",
        "/risk-management",
        "/community",
      ],
      cta: { label: "Plan your prop program", href: "/contact" },
      faqs: [
        {
          question: "Does the preview issue funded accounts?",
          answer:
            "No. The account sizes, progress and balances are demonstration data. Capital arrangements, account issuance and participant terms belong to the actual prop business.",
        },
        {
          question:
            "Is Azuriya's 35% revenue share the participant profit split?",
          answer:
            "No. It is the commercial revenue-share term for the standard Azuriya monthly package. Your participant profit-share and payout policy are defined separately for your program.",
        },
        {
          question: "Does the public dashboard decide passes or breaches?",
          answer:
            "The public dashboard shows illustrative states. Authoritative stage and breach decisions require server-calculated rules, configured platform data and the program's participant terms.",
        },
      ],
    },
    details: {
      layout: "product",
      visual: "prop",
      statement: {
        label: "Program operations",
        title: "The rulebook and the operator view, aligned.",
        text: "Design the program stages, calculation definitions and review processes together so each decision has a clear basis.",
      },
      capabilities: [
        {
          title: "Program structure",
          text: "Inspect evaluation stages, account settings and transition criteria.",
        },
        {
          title: "Risk definitions",
          text: "Plan daily-loss, drawdown and timing conventions explicitly.",
        },
        {
          title: "Participant support",
          text: "Organize announcements, rule resources and individual account questions.",
        },
        {
          title: "Payout review",
          text: "Bring eligibility, verification and destination review into one policy.",
        },
      ],
      workflow: [
        {
          label: "01",
          title: "Define",
          text: "Write the stages and participant requirements.",
        },
        {
          label: "02",
          title: "Validate",
          text: "Check risk calculations and timing definitions.",
        },
        {
          label: "03",
          title: "Configure",
          text: "Scope platforms, operator roles and program workflows.",
        },
        {
          label: "04",
          title: "Review",
          text: "Agree payout procedures and launch responsibilities.",
        },
      ],
      specification: [
        {
          label: "Program examples",
          value: "One-step and two-step evaluations",
        },
        {
          label: "Rule decisions",
          value: "Server-calculated in a configured deployment",
        },
        { label: "Monthly package", value: "$0 + 35% business revenue share" },
        { label: "Participant share", value: "Separate program policy" },
        { label: "Public accounts", value: "Demonstration data" },
      ],
    },
  },
  {
    page: {
      path: "/trading-platforms",
      title: "Choose platforms by the work they need to do.",
      navLabel: "Trading platforms",
      eyebrow: "Platform ecosystem",
      description:
        "Explore trading-platform options, compare the access your operation needs and define a connector scope for each selected environment.",
      kind: "product",
      highlights: [
        {
          title: "Recognizable options",
          text: "Explore MetaTrader, cTrader, TradeLocker, DXtrade and other platform identities.",
        },
        {
          title: "Capability planning",
          text: "Separate account data, administration and execution requirements.",
        },
        {
          title: "A broader ecosystem",
          text: "Find trading tools alongside CRM, payments, bridges and automation options.",
        },
      ],
      sections: [
        {
          id: "platform-selection",
          title: "Start with the required account journey.",
          paragraphs: [
            "Platform selection affects onboarding, account administration and the trading experience. List the specific actions your team and clients need before comparing interfaces.",
            "The catalog includes MetaTrader 4, MetaTrader 5, cTrader, TradeLocker, DXtrade and Match-Trader. Their names identify ecosystem options; the available connection must be confirmed for your deployment.",
          ],
          bullets: [
            "Read account balances, positions and history",
            "Provision or administer the required account groups",
            "Identify permitted execution actions",
            "Support the intended funding and client workflow",
          ],
          links: [
            { label: "Browse the platform directory", href: "/integrations" },
          ],
        },
        {
          id: "platform-capability-mapping",
          title: "Compare connector actions, not just platform names.",
          paragraphs: [
            "A platform may expose different interfaces for trading and administration. Provider access and server permissions determine which actions can be implemented through a configured connector.",
            "Instrument names, volume steps and order states also differ. Map these details before planning account synchronization or a copy workflow across environments.",
          ],
          bullets: [
            "Account and group identifier mapping",
            "Symbol, precision and volume-step conventions",
            "Order and position state handling",
            "Read, write and manager permission boundaries",
          ],
          links: [
            {
              label: "Review technical integration",
              href: "/technical-integration",
            },
            { label: "Explore copy workflows", href: "/copy-trading" },
          ],
        },
        {
          id: "platform-surrounding-services",
          title: "Plan the tools around the trading platform.",
          paragraphs: [
            "A production operation also needs CRM context, funding, support and reporting. The 500+ ecosystem directory groups these services so platform planning can include the supporting workflow.",
            "Catalog inclusion does not imply a commercial partnership, implemented integration or equivalent functionality across tools. Licensing, access and custom connection requirements are confirmed separately.",
          ],
          bullets: [
            "CRM and back-office requirements",
            "Bridge and liquidity arrangements",
            "Funding and reconciliation processes",
            "Automation and operational reporting needs",
          ],
          links: [
            { label: "Explore Azuriya Core", href: "/azuriya-core" },
            { label: "Browse the complete ecosystem", href: "/integrations" },
          ],
        },
      ],
      related: [
        "/integrations",
        "/technical-integration",
        "/platform",
        "/copy-trading",
      ],
      cta: { label: "Discuss your platform choices", href: "/contact" },
      faqs: [
        {
          question: "Does the directory mean every platform is integrated?",
          answer:
            "No. The directory identifies ecosystem options for planning. Each integration requires confirmed provider access, supported interfaces, permissions and an agreed implementation scope.",
        },
        {
          question: "Can the same actions be used on every platform?",
          answer:
            "Capabilities vary by platform and connector. Account data, manager access and execution actions should be checked separately for each selected environment.",
        },
        {
          question: "What does the 500+ ecosystem figure cover?",
          answer:
            "It refers to catalog entries across trading platforms and supporting categories such as CRM, payments, bridges, journals and automation. It does not represent 500 live Azuriya integrations.",
        },
      ],
    },
    details: {
      layout: "product",
      visual: "platforms",
      statement: {
        label: "Platform planning",
        title: "A platform name starts the discussion.",
        text: "The useful next step is identifying which account, manager and execution actions your operation actually requires.",
      },
      capabilities: [
        {
          title: "Platform discovery",
          text: "Review recognizable trading environments and their official websites.",
        },
        {
          title: "Action mapping",
          text: "Separate account data, configuration and execution requirements.",
        },
        {
          title: "Connector scope",
          text: "Confirm permissions, symbols and state conventions per connection.",
        },
        {
          title: "Ecosystem planning",
          text: "Include CRM, payments, liquidity and automation in the platform choice.",
        },
      ],
      workflow: [
        {
          label: "01",
          title: "Select",
          text: "Shortlist platforms around your account journey.",
        },
        {
          label: "02",
          title: "Confirm",
          text: "Check provider access, licensing and required interfaces.",
        },
        {
          label: "03",
          title: "Map",
          text: "Define identifiers, instrument rules and supported actions.",
        },
        {
          label: "04",
          title: "Scope",
          text: "Agree the connector and surrounding operating workflow.",
        },
      ],
      specification: [
        {
          label: "Directory scope",
          value: "Trading platforms and supporting tools",
        },
        {
          label: "Integration status",
          value: "Confirmed for each scoped connection",
        },
        {
          label: "Action availability",
          value: "Platform and permission dependent",
        },
        {
          label: "Provider identity",
          value: "Official links; no partnership implied",
        },
      ],
    },
  },
  {
    page: {
      path: "/copy-trading",
      title: "Coordinate copying at the individual account level.",
      navLabel: "Copy trading",
      eyebrow: "Copy trading workflows",
      description:
        "Plan the relationship between a master instruction and each follower, including account sizing, platform mappings and exceptions.",
      kind: "product",
      highlights: [
        {
          title: "Master relationship",
          text: "Identify the source account and the followers assigned to it.",
        },
        {
          title: "Separate sizing",
          text: "Treat each follower's volume and limits as its own policy.",
        },
        {
          title: "Per-account results",
          text: "Review follower states with their individual execution context.",
        },
      ],
      sections: [
        {
          id: "copy-follower-policy",
          title: "Define the relationship before the instruction moves.",
          paragraphs: [
            "A master order provides the source instruction. The follower still has its own account ownership, available instruments and applicable risk checks.",
            "Plan the relationship and volume policy for each follower. The preview illustrates different follower sizes so operators can inspect the distinction between the master instruction and the receiving account.",
          ],
          bullets: [
            "Master and follower account identification",
            "Account consent and permitted access",
            "Follower volume policy and limits",
            "Pause and exception review responsibilities",
          ],
          links: [{ label: "Explore account context", href: "/platform" }],
        },
        {
          id: "copy-platform-mapping",
          title: "Check the meaning of each copied action.",
          paragraphs: [
            "An instrument label or order action may mean something different on another platform. A configured copy workflow needs symbol mapping, supported order actions and compatible sizing rules.",
            "The public illustration uses platform labels to explain the route. It does not certify live copying between those services or establish access to a participant's account.",
          ],
          bullets: [
            "Instrument and symbol correspondence",
            "Precision and minimum volume steps",
            "Order lifecycle and supported modifications",
            "Platform-specific rejection conditions",
          ],
          links: [
            {
              label: "Compare platform requirements",
              href: "/trading-platforms",
            },
            { label: "Scope the connector", href: "/technical-integration" },
          ],
        },
        {
          id: "copy-result-review",
          title: "Review the result on every follower.",
          paragraphs: [
            "The master result cannot confirm what happened on every follower. Different sizing, account restrictions, market conditions or execution prices can produce different outcomes.",
            "Define how rejected, delayed or paused instructions reach an operator. Keep copied execution subject to account validation and risk controls, with reconciliation against the receiving platform.",
          ],
          bullets: [
            "Per-follower execution state",
            "Rejected and delayed instruction review",
            "Pause, resume and escalation policies",
            "Account-level reconciliation",
          ],
          links: [
            { label: "Review risk responsibilities", href: "/risk-management" },
            { label: "Inspect the public preview", href: "/dashboard-preview" },
          ],
        },
      ],
      related: [
        "/trading-platforms",
        "/technical-integration",
        "/risk-management",
        "/community",
      ],
      cta: { label: "Plan your copy workflow", href: "/contact" },
      faqs: [
        {
          question: "Does the public copy preview execute trades?",
          answer:
            "No. It illustrates the master-to-follower workflow and account sizing with example data. Live copying needs configured connectors, authorized accounts and production execution infrastructure.",
        },
        {
          question: "Will every follower get the same outcome?",
          answer:
            "Follower sizing, account constraints, prices and execution conditions may differ. A copied instruction does not promise identical results or performance.",
        },
        {
          question: "Can any two catalog platforms be connected for copying?",
          answer:
            "Compatibility must be assessed for the selected interfaces, instruments, order actions and access permissions. A catalog entry alone does not establish cross-platform copy support.",
        },
      ],
    },
    details: {
      layout: "product",
      visual: "copy",
      statement: {
        label: "Copy operations",
        title: "One source instruction. Separate account decisions.",
        text: "Make follower sizing, platform compatibility and the resulting account state visible throughout the copying workflow.",
      },
      capabilities: [
        {
          title: "Relationship planning",
          text: "Map the source account, followers and granted access.",
        },
        {
          title: "Sizing policy",
          text: "Define volume and account limits separately for each follower.",
        },
        {
          title: "Platform mapping",
          text: "Review symbols, order actions and volume conventions.",
        },
        {
          title: "Result oversight",
          text: "Plan per-account state review and execution reconciliation.",
        },
      ],
      workflow: [
        {
          label: "01",
          title: "Assign",
          text: "Establish the authorized master and follower relationship.",
        },
        {
          label: "02",
          title: "Validate",
          text: "Check the instrument, sizing and account constraints.",
        },
        {
          label: "03",
          title: "Route",
          text: "Use the configured connector's supported actions.",
        },
        {
          label: "04",
          title: "Review",
          text: "Reconcile each follower's result and exceptions.",
        },
      ],
      specification: [
        { label: "Sizing", value: "Individual follower policy" },
        { label: "Platform scope", value: "Connector-dependent compatibility" },
        {
          label: "Required controls",
          value: "Ownership, validation and risk checks",
        },
        {
          label: "Public workflow",
          value: "Illustrative; no external execution",
        },
      ],
    },
  },
  {
    page: {
      path: "/community",
      title: "A working home for your trading community.",
      navLabel: "Community",
      eyebrow: "Community workspace",
      description:
        "Organize the conversations, session resources and member roles that support your trading team, with clear boundaries around account administration.",
      kind: "product",
      highlights: [
        {
          title: "Purposeful channels",
          text: "Give announcements, trading discussion and support their own spaces.",
        },
        {
          title: "Findable context",
          text: "Keep useful charts, resources and follow-up replies together.",
        },
        {
          title: "Defined community roles",
          text: "Plan moderation and mentoring separately from trading permissions.",
        },
      ],
      sections: [
        {
          id: "community-channel-plan",
          title: "Make it obvious where each conversation belongs.",
          paragraphs: [
            "A growing community needs a channel plan people can understand. Separate announcements from open discussion, and give account questions a clear route to the appropriate support team.",
            "Use threads for follow-up questions and pinned context for information members return to. This keeps the next reply close to the chart, session or policy that prompted it.",
          ],
          bullets: [
            "Announcement and market-discussion channels",
            "Account-support conversations",
            "Threads, replies and pinned context",
            "Member directory and presence filters",
          ],
          links: [
            {
              label: "Explore the community preview",
              href: "/dashboard-preview",
            },
          ],
        },
        {
          id: "community-session-context",
          title: "Let the session continue after the meeting.",
          paragraphs: [
            "A useful trading discussion includes the chart and the reasoning around it. The preview shows annotated attachments, resource links and reply threads to demonstrate that continuity.",
            "Events, polls and voice-room controls show how session coordination can fit into the workspace. Public interactions remain local examples; they do not publish to other members or establish a live call.",
          ],
          bullets: [
            "Chart and document context",
            "Pinned preparation and follow-up resources",
            "Event and poll interaction examples",
            "Voice-room control previews",
          ],
          links: [
            {
              label: "Explore the educator workflow",
              href: "/solutions/educators",
            },
          ],
        },
        {
          id: "community-permission-boundary",
          title: "Give moderators the right authority.",
          paragraphs: [
            "A mentor may need to host a discussion; a moderator may need to manage channel content. Neither responsibility automatically grants access to an account's trading or funding controls.",
            "Review community capabilities alongside the operating roles in your deployment plan. Team membership, account ownership and administrative permissions should remain distinct and explicit.",
          ],
          bullets: [
            "Mentor and moderator capabilities",
            "Channel and content-management policy",
            "Team-specific permission scope",
            "Separate account and funding authority",
          ],
          links: [
            { label: "Review back-office permissions", href: "/admin-portal" },
            { label: "Plan the business workspace", href: "/business-hub" },
          ],
        },
      ],
      related: [
        "/platform",
        "/business-hub",
        "/solutions/educators",
        "/copy-trading",
      ],
      cta: { label: "Plan your community workspace", href: "/contact" },
      faqs: [
        {
          question: "Do public-preview messages reach other people?",
          answer:
            "No. The preview uses example members and local interaction states. Messages, replies and settings are not sent to a live shared community.",
        },
        {
          question: "Can I test the voice-room controls?",
          answer:
            "You can inspect join, leave, mute and sharing states in the preview. It does not activate a microphone, capture a screen or establish a call.",
        },
        {
          question: "Can a community role change a member's trading account?",
          answer:
            "Community capabilities and trading-account permissions are separate. Account actions require authenticated ownership, appropriate operator access and the configured platform's controls.",
        },
      ],
    },
    details: {
      layout: "product",
      visual: "community",
      statement: {
        label: "Community operations",
        title: "The discussion and its context belong together.",
        text: "Give members clear channels, reusable resources and an obvious path from a question to the right person.",
      },
      capabilities: [
        {
          title: "Channel structure",
          text: "Organize announcements, trading discussion and account support.",
        },
        {
          title: "Shared context",
          text: "Keep charts, documents, pinned posts and replies connected.",
        },
        {
          title: "Member coordination",
          text: "Review directories, presence, event interest and team roles.",
        },
        {
          title: "Permission planning",
          text: "Separate community moderation from trading and funding authority.",
        },
      ],
      workflow: [
        {
          label: "01",
          title: "Organize",
          text: "Define the channels and the questions each space serves.",
        },
        {
          label: "02",
          title: "Assign",
          text: "Plan mentor, moderator and member capabilities.",
        },
        {
          label: "03",
          title: "Share",
          text: "Keep session resources and follow-up discussion together.",
        },
        {
          label: "04",
          title: "Support",
          text: "Route account questions to the authorized operating team.",
        },
      ],
      specification: [
        {
          label: "Workspace purpose",
          value: "Team communication and resources",
        },
        { label: "Role scope", value: "Community capabilities per team" },
        {
          label: "Account authority",
          value: "Separate authenticated permissions",
        },
        { label: "Public interactions", value: "Local demonstration states" },
      ],
    },
  },
];
