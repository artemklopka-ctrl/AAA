import React from "react";
import { ShieldCheck, Flame, Terminal, AlertTriangle, Database } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm shadow-emerald-500/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-white font-mono">
                VANGUARD <span className="text-emerald-400">v4.0</span>
              </h1>
              <span className="px-2 py-0.5 text-[11px] font-semibold bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
                AUTONOMOUS DUE DILIGENCE
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              Ex-Lead Crypto Fund Lead (Paradigm / a16z pedigree) • 1,400+ Web3 Audits • Zero Tolerance to Shilling
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>12-Step Protocol: <strong className="text-emerald-400">ENFORCED</strong></span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>15-Factor Matrix: <strong className="text-amber-400">100 PTS</strong></span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Red Flags 2026: <strong className="text-rose-400">ACTIVE</strong></span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>Fact-Check: <strong className="text-cyan-400">STRICT NO_DATA</strong></span>
          </div>
        </div>
      </div>
    </header>
  );
};
