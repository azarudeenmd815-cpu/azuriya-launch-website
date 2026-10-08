export type NavigationLink = {
  label: string;
  description: string;
  href: string;
  icon: string;
};
export const navigationMenus = [
  {
    id: "products",
    label: "Products",
    groups: [
      {
        label: "The Azuriya ecosystem",
        links: [
          {
            label: "Trading Platform",
            description:
              "Accounts, trading workflows and your connected workspace.",
            href: "/platform",
            icon: "platform",
          },
          {
            label: "Azuriya Core",
            description:
              "The operating layer connecting your trading business.",
            href: "/azuriya-core",
            icon: "core",
          },
          {
            label: "Automation & APIs",
            description: "Plan connected workflows around your existing tools.",
            href: "/automation",
            icon: "automation",
          },
        ],
      },
    ],
  },
  {
    id: "traders",
    label: "Traders",
    groups: [
      {
        label: "Your trading workspace",
        links: [
          {
            label: "Trading Platforms",
            description:
              "Explore platform options and connection requirements.",
            href: "/trading-platforms",
            icon: "platforms",
          },
          {
            label: "Copy Trading",
            description:
              "Understand allocation, account controls and trade copying.",
            href: "/copy-trading",
            icon: "copy",
          },
          {
            label: "Community",
            description:
              "Bring conversations, resources and your trading team together.",
            href: "/community",
            icon: "community",
          },
        ],
      },
    ],
  },
  {
    id: "business",
    label: "Business",
    groups: [
      {
        label: "For brokers",
        links: [
          {
            label: "Azuriya for your Brokerage",
            description: "Build and operate your brokerage.",
            href: "/brokerage",
            icon: "brokerage",
          },
          {
            label: "Broker Pricing",
            description: "Package scope and your commercial model.",
            href: "/broker-pricing",
            icon: "pricing",
          },
          {
            label: "Brokerage Launch Blueprint",
            description: "An operational path from planning to launch.",
            href: "/resources/brokerage-launch-blueprint",
            icon: "blueprint",
          },
        ],
      },
      {
        label: "For prop firms",
        links: [
          {
            label: "Azuriya for your Prop Firm",
            description: "Design and manage your prop operation.",
            href: "/prop-firm",
            icon: "prop",
          },
          {
            label: "Prop Pricing",
            description: "Program scope, subscription and revenue share.",
            href: "/prop-pricing",
            icon: "pricing",
          },
          {
            label: "Prop Firm Launch Blueprint",
            description: "Define programs, rules and launch readiness.",
            href: "/resources/prop-firm-launch-blueprint",
            icon: "blueprint",
          },
        ],
      },
      {
        label: "Management & operations",
        links: [
          {
            label: "Technical Integration",
            description: "Map access, connectors and validation.",
            href: "/technical-integration",
            icon: "integration",
          },
          {
            label: "Hub for Business",
            description: "Coordinate your accounts, team and operations.",
            href: "/business-hub",
            icon: "business",
          },
          {
            label: "Back Office",
            description: "Operator roles, configuration and review workflows.",
            href: "/admin-portal",
            icon: "back-office",
          },
        ],
      },
    ],
  },
] as const;
export const navigationDirectLinks = [
  { label: "Integrations", href: "/integrations" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/about" },
] as const;
