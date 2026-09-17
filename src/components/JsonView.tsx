import React, { useState } from "react";
import { VanguardAnalysisJson } from "../types";
import { Copy, Check, Download, Code2 } from "lucide-react";

interface JsonViewProps {
  data: VanguardAnalysisJson | null;
  projectName: string;
}

export const JsonView: React.FC<JsonViewProps> = ({ data, projectName }) => {
  const [copied, setCopied] = useState(false);

  if (!data) {
    return (
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-center text-zinc-500 font-mono text-sm">
        No parsed JSON block available for this audit.
      </div>
    );
  }

  const jsonString = JSON.stringify(data, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Vanguard-Audit-${projectName.replace(/[^a-zA-Z0-9_-]/g, "_")}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-emerald-400" />
          <div>
            <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider">
              Strictly Validated JSON Block
            </h3>
            <p className="text-[11px] text-zinc-400 font-mono">
              Machine-readable institutional schema for programmatic hedge fund pipeline
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono transition-colors border border-zinc-700"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy JSON"}</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs font-mono transition-colors border border-emerald-500/30"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .json</span>
          </button>
        </div>
      </div>

      <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800/80 overflow-x-auto max-h-[550px]">
        <pre className="text-xs font-mono text-emerald-400/90 leading-relaxed">
          <code>{jsonString}</code>
        </pre>
      </div>
    </div>
  );
};
