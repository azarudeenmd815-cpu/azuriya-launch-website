import type { CSSProperties } from "react";
import "./three-d-icon.css";

const positions = {
  brokerage: [0, 0],
  prop: [1, 0],
  core: [2, 0],
  platform: [3, 0],
  automation: [0, 1],
  integration: [1, 1],
  "back-office": [2, 1],
  community: [3, 1],
  copy: [0, 2],
  funding: [1, 2],
  security: [2, 2],
  global: [3, 2],
  api: [0, 3],
  blueprint: [1, 3],
  pricing: [2, 3],
  analytics: [3, 3],
} as const;
export type ThreeDIconName = keyof typeof positions;
type ThreeDIconProps = {
  size?: number | string;
  className?: string;
  style?: CSSProperties;
  weight?: string;
  color?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

/** One optimized transparent atlas keeps the rendered icon family visually consistent. */
export function ThreeDIcon({
  name,
  size = 40,
  className = "",
  style,
}: ThreeDIconProps & { name: ThreeDIconName }) {
  const [column, row] = positions[name];
  return (
    <span
      className={`az-icon-3d ${className}`}
      aria-hidden="true"
      data-icon-3d={name}
      style={{
        width: size,
        height: size,
        backgroundPosition: `${(column * 100) / 3}% ${(row * 100) / 3}%`,
        ...style,
      }}
    />
  );
}

function icon(name: ThreeDIconName) {
  return function RenderedIcon(props: ThreeDIconProps) {
    return <ThreeDIcon name={name} {...props} />;
  };
}

export const Bank = icon("brokerage");
export const ChartLineUp = icon("platform");
export const ChartBar = icon("analytics");
export const ChartPieSlice = icon("analytics");
export const Trophy = icon("prop");
export const FlagCheckered = icon("prop");
export const Cube = icon("core");
export const SquaresFour = icon("core");
export const Stack = icon("core");
export const DiamondsFour = icon("core");
export const Database = icon("back-office");
export const Buildings = icon("back-office");
export const BuildingOffice = icon("back-office");
export const GearSix = icon("automation");
export const Lightning = icon("automation");
export const GitBranch = icon("automation");
export const Sparkle = icon("automation");
export const PlugsConnected = icon("integration");
export const ArrowsLeftRight = icon("integration");
export const ChatCircleDots = icon("community");
export const ChatsCircle = icon("community");
export const Users = icon("community");
export const UsersThree = icon("community");
export const UserCircle = icon("community");
export const Copy = icon("copy");
export const ArrowsSplit = icon("copy");
export const Wallet = icon("funding");
export const CreditCard = icon("funding");
export const CurrencyDollar = icon("pricing");
export const Coins = icon("pricing");
export const ShieldCheck = icon("security");
export const LockKey = icon("security");
export const GlobeHemisphereWest = icon("global");
export const Globe = icon("global");
export const Code = icon("api");
export const FileText = icon("blueprint");
export const BookOpen = icon("blueprint");
export const SlidersHorizontal = icon("automation");
