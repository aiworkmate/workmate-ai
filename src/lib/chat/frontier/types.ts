export type FrontierIntent =
  | "general"
  | "research"
  | "coding"
  | "planning"
  | "business"
  | "finance"
  | "legal"
  | "medical"
  | "operations";

export type RiskLevel = "low" | "medium" | "high";
export type EffortLevel = "fast" | "standard" | "deep";

export interface FrontierMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ModelCandidate {
  id: string;
  provider: string;
  label: string;
  strengths: FrontierIntent[];
  speed: number;
  cost: number;
  reasoning: number;
  reliability: number;
  maxContext: number;
  enabled?: boolean;
}

export interface AgentSelection {
  primary: string;
  supporting: string[];
  rationale: string[];
}

export interface ModelSelection {
  primaryModel: string;
  fallbackModels: string[];
  rationale: string[];
  requiresVerification: boolean;
  requiresTools: boolean;
}

export interface ContextPacket {
  projectSummary: string | null;
  memoryItems: string[];
  sourceItems: string[];
  verificationItems: string[];
  taskItems: string[];
  operationalNotes: string[];
}

export interface WorkflowRun {
  goal: string;
  steps: string[];
  assignedAgent: string;
  status: "planned" | "executing" | "verifying" | "completed" | "blocked";
  verificationRequired: boolean;
  notes: string[];
}
