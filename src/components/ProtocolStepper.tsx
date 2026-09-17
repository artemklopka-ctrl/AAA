import React from "react";
import { CheckCircle2, Loader2, AlertOctagon, CircleDot } from "lucide-react";

export const RESEARCH_STEPS_LIST = [
  { step: 1, name: "Data Extraction", tool: "Message NLP & Entity Resolution" },
  { step: 2, name: "Source Verification", tool: "Web, Docs & Official DNS/X" },
  { step: 3, name: "Team Dox & Track Record", tool: "LinkedIn, GitHub, Crunchbase" },
  { step: 4, name: "Investor Verification", tool: "SEC Filings, On-chain SAFT, PR" },
  { step: 5, name: "Tokenomics & Vesting", tool: "Etherscan, TokenSniffer, Cliff Check" },
  { step: 6, name: "On-Chain Traction", tool: "Dune, DefiLlama, Artemis, Arkham" },
  { step: 7, name: "Community Quality", tool: "Bot Detection, Discord Audit, Engagement" },
  { step: 8, name: "Technical Transparency", tool: "GitHub Commits, OpenZeppelin/CertiK" },
  { step: 9, name: "Red Flags 2026 Checklist", tool: "RugCheck, KOL Shilling, Fake Partners" },
  { step: 10, name: "Narrative & Moat", tool: "Market Timing & Competitive Moat" },
  { step: 11, name: "Opportunity Mechanics", tool: "Testnet/Points Rules, Sybil Filtering" },
  { step: 12, name: "Self-Critique & Score", tool: "Confidence Calibrator & Matrix" },
];

interface ProtocolStepperProps {
  currentStep: number;
  isLoading: boolean;
  hasResult: boolean;
}

export const ProtocolStepper: React.FC<ProtocolStepperProps> = ({
  currentStep,
  isLoading,
  hasResult,
}) => {
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 sm:p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-200 font-mono">
            Institutional 12-Step Research Protocol
          </h3>
        </div>
        <span className="text-xs font-mono text-zinc-400">
          {hasResult
            ? "Protocol completed (12/12 steps verified)"
            : isLoading
            ? `Executing step ${Math.min(currentStep, 12)} of 12...`
            : "Standby — awaiting project query"}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
        {RESEARCH_STEPS_LIST.map((s) => {
          const isDone = hasResult || (isLoading && currentStep > s.step);
          const isCurrent = isLoading && currentStep === s.step;

          return (
            <div
              key={s.step}
              className={`p-2.5 rounded-lg border transition-all duration-200 flex flex-col justify-between ${
                isDone
                  ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-300"
                  : isCurrent
                  ? "bg-amber-950/30 border-amber-500/50 text-amber-200 shadow-sm shadow-amber-500/10"
                  : "bg-zinc-950/40 border-zinc-800/80 text-zinc-500"
              }`}
            >
              <div className="flex items-center justify-between gap-1.5 mb-1.5">
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                  #{s.step}
                </span>
                {isDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : isCurrent ? (
                  <Loader2 className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                ) : (
                  <CircleDot className="w-3.5 h-3.5 text-zinc-600" />
                )}
              </div>
              <div className="text-xs font-medium line-clamp-1 text-zinc-200">
                {s.name}
              </div>
              <div className="text-[10px] text-zinc-400 truncate mt-1">
                {s.tool}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
