import {
  ArrowRight,
  ArrowsSplit,
  Bank,
  ChartLineUp,
  ChatCircleDots,
  Check,
  Code,
  Cube,
  Database,
  FileText,
  GearSix,
  GlobeHemisphereWest,
  LockKey,
  PlugsConnected,
  ShieldCheck,
  Sparkle,
  Trophy,
  UsersThree,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";
import type { DestinationVisual } from "./destination-types";

const profiles = {
  platform: {
    name: "Trading workspace",
    icon: ChartLineUp,
    labels: ["Accounts", "Orders", "Activity"],
  },
  core: {
    name: "Azuriya Core",
    icon: Cube,
    labels: ["Trading", "Payments", "CRM", "Community"],
  },
  automation: {
    name: "Workflow connections",
    icon: Sparkle,
    labels: ["Trigger", "Validate", "Action", "Review"],
  },
  brokerage: {
    name: "Brokerage infrastructure",
    icon: Bank,
    labels: ["Account", "Validation", "A-book route"],
  },
  prop: {
    name: "Program lifecycle",
    icon: Trophy,
    labels: ["Evaluation", "Verification", "Funded stage"],
  },
  platforms: {
    name: "Platform connections",
    icon: GlobeHemisphereWest,
    labels: ["MT5", "cTrader", "DXtrade", "TradingView"],
  },
  copy: {
    name: "Copy allocation",
    icon: ArrowsSplit,
    labels: ["Source account", "Allocation", "Account rules"],
  },
  community: {
    name: "Team workspace",
    icon: ChatCircleDots,
    labels: ["Announcements", "Trading desk", "Resources"],
  },
  integration: {
    name: "Connection architecture",
    icon: PlugsConnected,
    labels: ["Provider API", "Adapter", "Azuriya Core"],
  },
  business: {
    name: "Operations hub",
    icon: UsersThree,
    labels: ["Client operations", "Trading desk", "Support"],
  },
  "back-office": {
    name: "BACK OFFICE",
    icon: ShieldCheck,
    labels: ["Account groups", "Permissions", "Review queue"],
  },
};

export function DestinationGraphic({ visual }: { visual: DestinationVisual }) {
  const profile = profiles[visual];
  const Icon = profile.icon;
  return (
    <figure
      className={`dp-graphic dp-graphic-${visual}`}
      aria-label={`${profile.name}: illustrative workflow`}
    >
      <div className="dp-graphic-bar">
        <span>
          <Icon size={19} />
          {profile.name}
        </span>
        <span className="dp-graphic-caption">Workflow illustration</span>
      </div>
      {visual === "platform" && (
        <div className="dp-trading-window">
          <div className="dp-window-tabs">
            {profile.labels.map((label, index) => (
              <span className={index === 1 ? "is-selected" : ""} key={label}>
                {label}
              </span>
            ))}
          </div>
          <div className="dp-order-composition">
            <div className="dp-price-chart">
              <span>Order & market context</span>
              <svg
                viewBox="0 0 300 140"
                role="img"
                aria-label="Illustrative price chart, no live market data"
              >
                <path
                  d="M0 30H300 M0 70H300 M0 110H300"
                  className="dp-chart-grid"
                />
                <path
                  d="M4 108L24 96L42 105L58 78L75 83L93 53L113 60L134 40L153 68L171 57L195 73L213 48L237 51L259 25L280 38L297 17"
                  className="dp-chart-line"
                />
              </svg>
              <small>Illustrative market data</small>
            </div>
            <div className="dp-order-panel">
              <ChartLineUp size={24} />
              <strong>Order review</strong>
              <span>Account context</span>
              <span>Size & instrument</span>
              <span>Validation</span>
              <em>Review before execution</em>
            </div>
          </div>
          <div className="dp-graphic-bottom">
            <ShieldCheck size={17} />
            Account permissions and risk checks
          </div>
        </div>
      )}
      {visual === "core" && (
        <div className="dp-core-map">
          <div className="dp-core-center">
            <img src="/brand/azuriya-mark-blue.png" alt="" />
            <strong>AZURIYA CORE</strong>
            <small>Shared operating context</small>
          </div>
          {profile.labels.map((label, index) => {
            const NodeIcon = [ChartLineUp, Wallet, Database, UsersThree][index];
            return (
              <div className={`dp-core-node dp-core-node-${index}`} key={label}>
                <NodeIcon size={24} />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      )}
      {(visual === "automation" || visual === "integration") && (
        <div className="dp-connection-view">
          <div className="dp-connection-chain">
            {profile.labels.map((label, index) => {
              const NodeIcon =
                visual === "automation"
                  ? [Sparkle, ShieldCheck, GearSix, FileText][index]
                  : [Code, PlugsConnected, Cube][index];
              return (
                <div className="dp-chain-node" key={label}>
                  <NodeIcon size={27} />
                  <strong>{label}</strong>
                  {index < profile.labels.length - 1 && (
                    <ArrowRight size={16} className="dp-chain-arrow" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="dp-code-scope">
            <span>CONNECTION SCOPE</span>
            <div>
              <LockKey size={16} />
              Identity & access mapping
            </div>
            <div>
              <Database size={16} />
              State synchronization
            </div>
            <div>
              <FileText size={16} />
              Reconciliation & audit context
            </div>
          </div>
        </div>
      )}
      {visual === "brokerage" && (
        <div className="dp-broker-flow">
          <div className="dp-broker-account">
            <Bank size={34} />
            <strong>Your brokerage</strong>
            <span>Branded client operations</span>
          </div>
          <div className="dp-broker-controls">
            <span>
              <ShieldCheck size={19} />
              Account validation
            </span>
            <span>
              <GearSix size={19} />
              Group policy & markup
            </span>
          </div>
          <div className="dp-broker-route">
            <PlugsConnected size={26} />
            <div>
              <strong>External liquidity</strong>
              <small>Agreed provider configuration</small>
            </div>
            <ArrowRight size={20} />
          </div>
        </div>
      )}
      {visual === "prop" && (
        <div className="dp-prop-program">
          <div className="dp-stage-track">
            {profile.labels.map((label, index) => (
              <div key={label}>
                <span>{index + 1}</span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
          <div className="dp-rule-review">
            <ShieldCheck size={30} />
            <div>
              <strong>Rules before progression</strong>
              <span>Daily loss · Drawdown · Trading days</span>
            </div>
          </div>
          <div className="dp-rule-pair">
            <div>
              <span>Risk framework</span>
              <strong>Program defined</strong>
            </div>
            <div>
              <span>Payout eligibility</span>
              <strong>Operator review</strong>
            </div>
          </div>
        </div>
      )}
      {visual === "platforms" && (
        <div className="dp-platform-map">
          <div className="dp-platform-tiles">
            {[
              ["MetaTrader 5", "metatrader-5.png"],
              ["cTrader", "ctrader.ico"],
              ["DXtrade", "dxtrade.png"],
              ["TradingView", "tradingview.png"],
            ].map(([label, slug]) => (
              <div key={slug}>
                <span>
                  <img src={`/marketing/platforms/${slug}`} alt="" />
                </span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
          <div className="dp-platform-bridge">
            <PlugsConnected size={24} />
            <strong>Capability-led connection scope</strong>
          </div>
          <p>Account actions · Data access · Provider permissions</p>
        </div>
      )}
      {visual === "copy" && (
        <div className="dp-copy-map">
          <div className="dp-copy-source">
            <ChartLineUp size={28} />
            <strong>Source account</strong>
          </div>
          <div className="dp-copy-engine">
            <ArrowsSplit size={32} />
            <span>Allocation & validation</span>
          </div>
          <div className="dp-copy-followers">
            {["Fixed size", "Proportional", "Account limits"].map((label) => (
              <div key={label}>
                <ShieldCheck size={21} />
                <strong>{label}</strong>
                <small>Follower-specific rules</small>
              </div>
            ))}
          </div>
        </div>
      )}
      {visual === "community" && (
        <div className="dp-community-window">
          <div className="dp-channel-list">
            <strong>Your team</strong>
            {profile.labels.map((label) => (
              <span key={label}># {label}</span>
            ))}
          </div>
          <div className="dp-channel-thread">
            <span>
              <ChatCircleDots size={20} />
              Trading desk
            </span>
            <div>
              <strong>Keep the context together.</strong>
              <p>
                Threads, resources and account conversations in their own
                workspace.
              </p>
            </div>
            <div className="dp-resource-preview">
              <FileText size={23} />
              <span>Shared resources & pinned discussions</span>
            </div>
            <small>Illustrative community layout</small>
          </div>
        </div>
      )}
      {(visual === "business" || visual === "back-office") && (
        <div className="dp-ops-window">
          <div className="dp-ops-heading">
            <img src="/brand/azuriya-mark-blue.png" alt="" />
            <strong>
              {visual === "back-office" ? "BACK OFFICE" : "BUSINESS HUB"}
            </strong>
            <LockKey size={18} />
          </div>
          <div className="dp-ops-rows">
            {profile.labels.map((label, index) => (
              <div key={label}>
                <span>{label}</span>
                <strong>
                  {
                    (visual === "back-office"
                      ? ["Group-scoped", "Role-based", "Approval required"]
                      : [
                          "Account context",
                          "Execution context",
                          "Conversation context",
                        ])[index]
                  }
                </strong>
                <Check size={16} />
              </div>
            ))}
          </div>
          <div className="dp-graphic-bottom">
            <FileText size={17} />
            Traceable responsibility at each handoff
          </div>
        </div>
      )}
    </figure>
  );
}
