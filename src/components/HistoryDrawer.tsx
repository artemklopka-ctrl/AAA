import React from "react";
import { AuditResult } from "../types";
import { History, Trash2, X, ChevronRight } from "lucide-react";

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  audits: AuditResult[];
  activeId: string | null;
  onSelectAudit: (audit: AuditResult) => void;
  onClearHistory: () => void;
}

export const HistoryDrawer: React.FC<HistoryDrawerProps> = ({
  isOpen,
  onClose,
  audits,
  activeId,
  onSelectAudit,
  onClearHistory,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-zinc-950 border-l border-zinc-800 h-full flex flex-col p-5 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-white font-mono uppercase tracking-wider text-sm">
              Audit Intelligence Vault ({audits.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-2.5">
          {audits.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 font-mono text-xs">
              No previous audit records in storage.
            </div>
          ) : (
            audits.map((item) => {
              const isActive = item.id === activeId;
              const tier = item.parsedJson?.tier || "B";
              const score = item.parsedJson?.score ?? "--";
              const decision = item.parsedJson?.verdict?.decision || "WATCH";

              const tierBadgeColors: Record<string, string> = {
                S: "bg-amber-400/10 text-amber-400 border-amber-500/30",
                A: "bg-emerald-400/10 text-emerald-400 border-emerald-500/30",
                B: "bg-sky-400/10 text-sky-400 border-sky-500/30",
                C: "bg-rose-400/10 text-rose-400 border-rose-500/30",
              };

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectAudit(item);
                    onClose();
                  }}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                    isActive
                      ? "bg-zinc-900 border-emerald-500/50 shadow-sm"
                      : "bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900 hover:border-zinc-700"
                  }`}
                >
                  <div className="truncate">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border ${
                          tierBadgeColors[tier] || tierBadgeColors.B
                        }`}
                      >
                        Tier {tier}
                      </span>
                      <span className="text-xs font-mono font-bold text-zinc-200">
                        {score} pts
                      </span>
                      {item.isPreset && (
                        <span className="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">
                          BENCHMARK
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-medium text-zinc-100 truncate">
                      {item.parsedJson?.project || item.query}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                      {new Date(item.timestamp).toLocaleDateString()} • {decision}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-zinc-500 shrink-0" />
                </button>
              );
            })
          )}
        </div>

        {audits.length > 0 && (
          <div className="pt-4 border-t border-zinc-800">
            <button
              onClick={onClearHistory}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-rose-950/30 border border-rose-900/40 text-rose-300 text-xs font-mono hover:bg-rose-900/40 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Audit History</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
