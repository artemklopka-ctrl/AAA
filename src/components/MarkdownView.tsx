import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Copy, Check, Download, FileText } from "lucide-react";

interface MarkdownViewProps {
  markdown: string;
  projectName: string;
}

export const MarkdownView: React.FC<MarkdownViewProps> = ({ markdown, projectName }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Vanguard-Audit-${projectName.replace(/[^a-zA-Z0-9_-]/g, "_")}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-emerald-400" />
          <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider">
            Executive Markdown Audit & Table
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono transition-colors border border-zinc-700"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy MD"}</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs font-mono transition-colors border border-emerald-500/30"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .md</span>
          </button>
        </div>
      </div>

      <div className="prose prose-invert max-w-none prose-sm prose-table:border prose-table:border-zinc-800 prose-th:bg-zinc-950 prose-th:text-zinc-200 prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-zinc-800/80 prose-headings:text-zinc-100 font-sans leading-relaxed text-zinc-300">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};
