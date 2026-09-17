export type Tier = "S" | "A" | "B" | "C";

export type Decision = "YES" | "NO" | "WATCH" | "HIGH_RISK";

export type ExpectedValue = "Very High" | "High" | "Medium" | "Low" | "Very Low";

export type Difficulty = "Low" | "Medium" | "High";

export interface ScoringBreakdown {
  team: number; // max 18
  investors: number; // max 20
  product: number; // max 12
  tokenomics: number; // max 10
  community: number; // max 8
  traction: number; // max 7
  transparency: number; // max 6
  narrative: number; // max 6
  moat: number; // max 5
  kol_dependency: number; // -5 to 0
  regulatory_risk: number; // -6 to 0
  red_flags: number; // up to -15
  audit_security: number; // max 3
  exit_liquidity: number; // max 5
  conviction: number; // -5 to +5
}

export interface Verdict {
  decision: Decision;
  reasoning: string;
  expected_value: ExpectedValue;
}

export interface VanguardAnalysisJson {
  project: string;
  tier: Tier;
  score: number;
  confidence: number;
  scoring_breakdown: ScoringBreakdown;
  opportunity_type: string;
  difficulty: Difficulty;
  actions_required: string[];
  deadline: string | null;
  verdict: Verdict;
  key_green_flags: string[];
  key_red_flags: string[];
  missing_information: string[];
  sources: string[];
  immediate_recommendation: string;
}

export interface AuditResult {
  id: string;
  timestamp: number;
  query: string;
  rawMarkdown: string;
  parsedJson: VanguardAnalysisJson | null;
  groundingSources?: Array<{ title: string; uri: string }>;
  isPreset?: boolean;
}

export interface ResearchStep {
  step: number;
  name: string;
  description: string;
  tooling: string;
  status: "idle" | "in_progress" | "verified" | "flagged";
}
