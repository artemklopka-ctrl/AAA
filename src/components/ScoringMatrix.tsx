import React from "react";
import { ScoringBreakdown } from "../types";
import { Sliders, AlertOctagon, TrendingDown, TrendingUp, ShieldAlert, Sparkles } from "lucide-react";

interface ScoringMatrixProps {
  breakdown: ScoringBreakdown;
  totalScore: number;
}

interface FactorMeta {
  key: keyof ScoringBreakdown;
  label: string;
  max: number;
  isPenalty?: boolean;
  isModifier?: boolean;
  category: "Core" | "Traction & Tech" | "Risk & Penalties" | "Final Modifiers";
}

const FACTORS: FactorMeta[] = [
  // Core
  { key: "team", label: "Founding Team & Track Record", max: 18, category: "Core" },
  { key: "investors", label: "Investor Quality (Tier-1 Weighted)", max: 20, category: "Core" },
  { key: "product", label: "Product Vision & Technical Edge", max: 12, category: "Core" },
  { key: "tokenomics", label: "Tokenomics & Incentive Design", max: 10, category: "Core" },

  // Traction & Tech
  { key: "community", label: "Community Quality (Real vs Fake)", max: 8, category: "Traction & Tech" },
  { key: "traction", label: "Current Traction / On-chain Metrics", max: 7, category: "Traction & Tech" },
  { key: "transparency", label: "Transparency & Execution Velocity", max: 6, category: "Traction & Tech" },
  { key: "narrative", label: "Narrative Strength & Market Timing", max: 6, category: "Traction & Tech" },
  { key: "moat", label: "Competitive Moat", max: 5, category: "Traction & Tech" },
  { key: "audit_security", label: "Audit Quality & Security", max: 3, category: "Traction & Tech" },
  { key: "exit_liquidity", label: "Exit Liquidity Potential", max: 5, category: "Traction & Tech" },

  // Penalties
  { key: "kol_dependency", label: "KOL / Affiliate Dependency Penalty", max: -5, isPenalty: true, category: "Risk & Penalties" },
  { key: "regulatory_risk", label: "Regulatory & Legal Risk Penalty", max: -6, isPenalty: true, category: "Risk & Penalties" },
  { key: "red_flags", label: "Red Flags 2026 Checklist Penalty", max: -15, isPenalty: true, category: "Risk & Penalties" },

  // Final
  { key: "conviction", label: "Overall Conviction (Lead Partner Modifier)", max: 5, isModifier: true, category: "Final Modifiers" },
];

export const ScoringMatrix: React.FC<ScoringMatrixProps> = ({ breakdown, totalScore }) => {
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-zinc-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider">
              15-Factor Weighted Scoring Matrix
            </h3>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5">
            Strict institutional weights with heavy penalties for 2026 red flags & shilling
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-zinc-400">Total Calculated:</span>
          <span className="px-3 py-1 bg-zinc-950 border border-zinc-700 rounded-lg text-sm font-mono font-bold text-emerald-400">
            {totalScore} / 100
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
        {FACTORS.map((f) => {
          const val = breakdown[f.key] ?? 0;

          if (f.isPenalty) {
            const penaltyPercent = Math.min(100, Math.abs(val) / Math.abs(f.max) * 100);
            const hasPenalty = val < 0;
            return (
              <div key={f.key} className="p-3 rounded-xl bg-zinc-950/70 border border-rose-950/50">
                <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                  <div className="flex items-center gap-1.5 text-rose-300 font-medium truncate">
                    <TrendingDown className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span className="truncate">{f.label}</span>
                  </div>
                  <span className={`font-bold ${hasPenalty ? "text-rose-400" : "text-zinc-500"}`}>
                    {val} pts <span className="text-zinc-600">({f.max} max penalty)</span>
                  </span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-rose-500 transition-all duration-500 rounded-full"
                    style={{ width: `${penaltyPercent}%` }}
                  />
                </div>
              </div>
            );
          }

          if (f.isModifier) {
            const isPositive = val >= 0;
            return (
              <div key={f.key} className="p-3 rounded-xl bg-zinc-950/70 border border-indigo-950/50">
                <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                  <div className="flex items-center gap-1.5 text-indigo-300 font-medium truncate">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span className="truncate">{f.label}</span>
                  </div>
                  <span className={`font-bold ${isPositive ? "text-indigo-400" : "text-rose-400"}`}>
                    {val > 0 ? `+${val}` : val} pts <span className="text-zinc-600">(±5 range)</span>
                  </span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${isPositive ? "bg-indigo-500" : "bg-rose-500"}`}
                    style={{ width: `${Math.min(100, (Math.abs(val) / 5) * 100)}%` }}
                  />
                </div>
              </div>
            );
          }

          // Positive standard weights
          const pct = Math.min(100, Math.max(0, (val / f.max) * 100));
          return (
            <div key={f.key} className="p-3 rounded-xl bg-zinc-950/50 border border-zinc-800/80">
              <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                <span className="text-zinc-300 font-medium truncate">{f.label}</span>
                <span className="font-bold text-zinc-200">
                  <strong className={val > f.max * 0.7 ? "text-emerald-400" : val > f.max * 0.4 ? "text-amber-400" : "text-rose-400"}>
                    {val}
                  </strong>
                  <span className="text-zinc-500"> / {f.max}</span>
                </span>
              </div>
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    val > f.max * 0.7
                      ? "bg-emerald-500"
                      : val > f.max * 0.4
                      ? "bg-amber-500"
                      : "bg-rose-500"
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
