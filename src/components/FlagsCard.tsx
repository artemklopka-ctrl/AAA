import React from "react";
import { CheckCircle2, AlertTriangle, HelpCircle, ShieldAlert, Link as LinkIcon } from "lucide-react";

interface FlagsCardProps {
  greenFlags: string[];
  redFlags: string[];
  missingInformation: string[];
  sources: string[];
}

export const FlagsCard: React.FC<FlagsCardProps> = ({
  greenFlags,
  redFlags,
  missingInformation,
  sources,
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Green Flags */}
        <div className="bg-zinc-900/60 border border-emerald-950/60 rounded-2xl p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 mb-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Verified Green Flags ({greenFlags?.length || 0})
            </h3>
          </div>

          {greenFlags && greenFlags.length > 0 ? (
            <ul className="space-y-2.5">
              {greenFlags.map((flag, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-emerald-200/90 leading-relaxed p-2 rounded-lg bg-emerald-950/20 border border-emerald-800/30"
                >
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-zinc-500 italic p-3">No significant green flags verified.</p>
          )}
        </div>

        {/* Red Flags 2026 */}
        <div className="bg-zinc-900/60 border border-rose-950/60 rounded-2xl p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                Red Flags 2026 Checklist ({redFlags?.length || 0})
              </h3>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
              STRICT DETECTOR
            </span>
          </div>

          {redFlags && redFlags.length > 0 ? (
            <ul className="space-y-2.5">
              {redFlags.map((flag, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-rose-200/90 leading-relaxed p-2 rounded-lg bg-rose-950/20 border border-rose-800/30"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-xs text-emerald-400/90 p-3 rounded-lg bg-emerald-950/10 border border-emerald-900/30">
              No critical 2026 red flags detected in current public perimeter.
            </div>
          )}
        </div>
      </div>

      {/* Missing Information & Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Missing Info (Rule: NO_DATA + source) */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 mb-3">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Missing Data / Unverified Points
            </h3>
          </div>
          <p className="text-[11px] text-zinc-400 mb-3 font-mono">
            Vanguard Rule: Never hallucinate facts. Incomplete data is marked with NO_DATA and exact target documentation.
          </p>

          {missingInformation && missingInformation.length > 0 ? (
            <ul className="space-y-2">
              {missingInformation.map((info, idx) => (
                <li
                  key={idx}
                  className="p-2.5 rounded-lg bg-zinc-950/50 border border-amber-950/40 text-xs text-zinc-300 font-mono"
                >
                  <span className="text-amber-400 font-bold mr-1.5">[AUDIT GAP]:</span>
                  {info}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-zinc-500 italic">Full transparency verified across primary repositories.</p>
          )}
        </div>

        {/* Primary Sources */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 mb-3">
            <LinkIcon className="w-5 h-5 text-cyan-400" />
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Verified Reference Sources
            </h3>
          </div>
          <p className="text-[11px] text-zinc-400 mb-3 font-mono">
            Primary registry filings, on-chain contracts, and institutional research records:
          </p>

          {sources && sources.length > 0 ? (
            <ul className="space-y-2">
              {sources.map((src, idx) => (
                <li key={idx} className="truncate">
                  <a
                    href={src.startsWith("http") ? src : `https://${src}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 hover:underline font-mono bg-zinc-950/40 px-2.5 py-1.5 rounded border border-zinc-800 w-full truncate"
                  >
                    <span className="truncate">{src}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-zinc-500 italic">Standard web & protocol indexes.</p>
          )}
        </div>
      </div>
    </div>
  );
};
