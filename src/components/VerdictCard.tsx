import React from "react";
import { VanguardAnalysisJson } from "../types";
import { Award, AlertCircle, CheckCircle, Eye, AlertTriangle, ArrowRight, Clock } from "lucide-react";

interface VerdictCardProps {
  data: VanguardAnalysisJson;
  query: string;
  searchThrottled?: boolean;
  isOfflineHeuristic?: boolean;
  modelUsed?: string;
}

export const VerdictCard: React.FC<VerdictCardProps> = ({
  data,
  query,
  searchThrottled,
  isOfflineHeuristic,
  modelUsed,
}) => {
  const tierColors: Record<string, { bg: string; border: string; text: string; badge: string; glow: string }> = {
    S: {
      bg: "from-amber-950/40 via-zinc-900 to-zinc-950",
      border: "border-amber-500/40",
      text: "text-amber-400",
      badge: "bg-amber-400 text-zinc-950 shadow-lg shadow-amber-500/20",
      glow: "text-amber-300",
    },
    A: {
      bg: "from-emerald-950/40 via-zinc-900 to-zinc-950",
      border: "border-emerald-500/40",
      text: "text-emerald-400",
      badge: "bg-emerald-400 text-zinc-950 shadow-lg shadow-emerald-500/20",
      glow: "text-emerald-300",
    },
    B: {
      bg: "from-sky-950/40 via-zinc-900 to-zinc-950",
      border: "border-sky-500/40",
      text: "text-sky-400",
      badge: "bg-sky-400 text-zinc-950 shadow-lg shadow-sky-500/20",
      glow: "text-sky-300",
    },
    C: {
      bg: "from-rose-950/40 via-zinc-900 to-zinc-950",
      border: "border-rose-500/40",
      text: "text-rose-400",
      badge: "bg-rose-500 text-white shadow-lg shadow-rose-500/20",
      glow: "text-rose-300",
    },
  };

  const currentTier = tierColors[data.tier] || tierColors.C;

  const decisionBadge: Record<string, { label: string; icon: React.ReactNode; style: string }> = {
    YES: {
      label: "YES — CONVICTION",
      icon: <CheckCircle className="w-4 h-4 text-emerald-400" />,
      style: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    },
    WATCH: {
      label: "WATCH — CONDITIONAL",
      icon: <Eye className="w-4 h-4 text-amber-400" />,
      style: "bg-amber-500/10 border-amber-500/30 text-amber-300",
    },
    HIGH_RISK: {
      label: "HIGH RISK — EXTREME CAUTION",
      icon: <AlertTriangle className="w-4 h-4 text-rose-400" />,
      style: "bg-rose-500/10 border-rose-500/30 text-rose-300",
    },
    NO: {
      label: "NO — REJECTED",
      icon: <AlertCircle className="w-4 h-4 text-zinc-400" />,
      style: "bg-zinc-800/80 border-zinc-700 text-zinc-300",
    },
  };

  const decisionConfig = decisionBadge[data.verdict.decision] || decisionBadge.WATCH;

  return (
    <div
      className={`rounded-2xl border ${currentTier.border} bg-gradient-to-br ${currentTier.bg} p-6 sm:p-7 shadow-xl backdrop-blur-sm relative overflow-hidden`}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left: Project & Tier summary */}
        <div className="flex items-start gap-4 sm:gap-6">
          <div className="flex flex-col items-center">
            <div
              className={`w-20 h-20 rounded-2xl ${currentTier.badge} flex flex-col items-center justify-center font-mono font-black text-3xl tracking-tighter`}
            >
              <span>{data.tier}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest -mt-1 opacity-90">
                TIER
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-400 mt-2">
              Conf: {data.confidence}%
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {data.project}
              </h2>
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${decisionConfig.style}`}
              >
                {decisionConfig.icon}
                <span>{decisionConfig.label}</span>
              </div>

              {isOfflineHeuristic ? (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-sky-950/50 text-sky-300 border border-sky-500/40 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Vanguard Institutional Heuristic Engine</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Verified Vanguard Protocol Engine</span>
                </div>
              )}
            </div>
            <p className="text-xs text-zinc-400 mt-1.5 font-mono">
              Target query: <span className="text-zinc-200">{query}</span>
              {modelUsed && (
                <span className="text-zinc-500 ml-2">
                  • Engine: <span className="text-zinc-400">{modelUsed}</span>
                </span>
              )}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-lg bg-zinc-950/60 border border-zinc-800">
                <span className="text-zinc-400">Total Score: </span>
                <strong className={`text-base font-bold ${currentTier.text}`}>
                  {data.score}
                </strong>
                <span className="text-zinc-500"> / 100</span>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-zinc-950/60 border border-zinc-800">
                <span className="text-zinc-400">Expected Value: </span>
                <strong className="text-zinc-200">{data.verdict.expected_value}</strong>
              </div>

              {data.deadline && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950/60 border border-zinc-800 text-amber-300">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Deadline: {data.deadline}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Reasoning block */}
        <div className="lg:max-w-md w-full bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-4">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
            <span className="uppercase tracking-wider">Executive Verdict Rationale</span>
            <span className="text-[10px] text-zinc-500">Ex-Paradigm Skeptic Lens</span>
          </div>
          <p className="text-sm text-zinc-200 leading-relaxed font-sans">
            {data.verdict.reasoning}
          </p>
        </div>
      </div>

      {/* Immediate recommendation bottom bar */}
      <div className="mt-6 pt-5 border-t border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-950/40 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 px-6 py-3.5 sm:px-7">
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[10px] uppercase border border-emerald-500/30">
            Immediate Action
          </span>
          <span className="text-zinc-300 font-medium">
            {data.immediate_recommendation}
          </span>
        </div>
        <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1 shrink-0">
          <span>Tier logic: S:86-100 • A:71-85 • B:51-70 • C:≤50 / Red Flag</span>
        </div>
      </div>
    </div>
  );
};
