import { VanguardAnalysisJson } from "../types";

export function parseVanguardOutput(rawOutput: string): {
  markdown: string;
  json: VanguardAnalysisJson | null;
} {
  if (!rawOutput) {
    return { markdown: "", json: null };
  }

  // Find json block
  const jsonRegex = /```json\s*([\s\S]*?)\s*```/;
  const match = rawOutput.match(jsonRegex);

  let json: VanguardAnalysisJson | null = null;
  let markdown = rawOutput;

  if (match && match[1]) {
    try {
      json = JSON.parse(match[1].trim());
      // Strip the json code block from markdown to prevent duplication
      markdown = rawOutput.replace(match[0], "").trim();
    } catch (e) {
      console.warn("Failed to parse JSON block from agent output:", e);
      // Attempt fallback cleanup
      try {
        const cleaned = match[1]
          .replace(/,\s*([}\]])/g, "$1") // remove trailing commas
          .trim();
        json = JSON.parse(cleaned);
        markdown = rawOutput.replace(match[0], "").trim();
      } catch (err) {
        console.error("Secondary JSON parse attempt failed", err);
      }
    }
  }

  return { markdown, json };
}

export function calculateTotalScore(breakdown: VanguardAnalysisJson["scoring_breakdown"]): number {
  if (!breakdown) return 0;
  const sum =
    (breakdown.team ?? 0) +
    (breakdown.investors ?? 0) +
    (breakdown.product ?? 0) +
    (breakdown.tokenomics ?? 0) +
    (breakdown.community ?? 0) +
    (breakdown.traction ?? 0) +
    (breakdown.transparency ?? 0) +
    (breakdown.narrative ?? 0) +
    (breakdown.moat ?? 0) +
    (breakdown.kol_dependency ?? 0) +
    (breakdown.regulatory_risk ?? 0) +
    (breakdown.red_flags ?? 0) +
    (breakdown.audit_security ?? 0) +
    (breakdown.exit_liquidity ?? 0) +
    (breakdown.conviction ?? 0);

  return Math.max(0, Math.min(100, Math.round(sum)));
}
