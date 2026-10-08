import type { SitePage } from "./site-types";

export type DestinationVisual =
  | "platform"
  | "core"
  | "automation"
  | "brokerage"
  | "prop"
  | "platforms"
  | "copy"
  | "community"
  | "integration"
  | "business"
  | "back-office";

export type DestinationDetails = {
  layout: "product" | "operations" | "blueprint" | "pricing";
  visual: DestinationVisual;
  statement: { label: string; title: string; text: string };
  capabilities: { title: string; text: string }[];
  workflow: { label: string; title: string; text: string }[];
  specification: { label: string; value: string }[];
};

export type DestinationDefinition = {
  page: SitePage;
  details: DestinationDetails;
};
