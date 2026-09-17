import React from "react";
import { Compass, CheckSquare, Calendar, Gauge, ExternalLink } from "lucide-react";
import { Difficulty } from "../types";

interface OpportunityCardProps {
  opportunityType: string;
  difficulty: Difficulty;
  deadline: string | null;
  actionsRequired: string[];
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opportunityType,
  difficulty,
  deadline,
  actionsRequired,
}) => {
  const difficultyConfig = {
    Low: { text: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" },
    Medium: { text: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" },
    High: { text: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/30" },
  }[difficulty] || { text: "text-zinc-400", bg: "bg-zinc-800 border-zinc-700" };

  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-emerald-400" />
          <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider">
            Opportunity Mechanics & Execution Plan
          </h3>
        </div>
        <span className="text-xs font-mono text-zinc-400">Step 11 Verification</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
          <span className="text-[11px] font-mono text-zinc-400 block mb-1">
            OPPORTUNITY TYPE
          </span>
          <span className="text-sm font-semibold text-zinc-100 font-mono">
            {opportunityType || "General Web3 Protocol"}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
          <span className="text-[11px] font-mono text-zinc-400 block mb-1">
            DIFFICULTY / CAPITAL REQUIRED
          </span>
          <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold border ${difficultyConfig.bg} ${difficultyConfig.text}`}>
            {difficulty}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
          <span className="text-[11px] font-mono text-zinc-400 block mb-1">
            SNAPSHOT / DEADLINE
          </span>
          <div className="flex items-center gap-1.5 text-sm font-mono font-semibold text-zinc-200">
            <Calendar className="w-4 h-4 text-zinc-400" />
            <span>{deadline || "No strict cutoff announced (Ongoing)"}</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-1.5">
          <CheckSquare className="w-4 h-4 text-emerald-400" />
          <span>Mandatory Execution Steps:</span>
        </h4>
        {actionsRequired && actionsRequired.length > 0 ? (
          <ul className="space-y-2">
            {actionsRequired.map((act, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-950/40 border border-zinc-800/80 text-xs text-zinc-200 leading-relaxed font-mono"
              >
                <span className="w-4 h-4 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{act}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-zinc-500 italic">No specific actions required.</p>
        )}
      </div>
    </div>
  );
};
