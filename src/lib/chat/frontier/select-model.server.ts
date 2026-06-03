import type { EffortLevel, FrontierIntent, ModelCandidate, ModelSelection, RiskLevel } from "./types";
import { detectIntent } from "./select-agent.server";

const MODELS: ModelCandidate[] = [
  {
    id: "openai/gpt-5.5",
    provider: "openai",
    label: "GPT-5.5",
    strengths: ["general", "coding", "planning", "business"],
    speed: 0.74,
    cost: 0.35,
    reasoning: 0.97,
    reliability: 0.95,
    maxContext: 200000,
    enabled: true,
  },
  {
    id: "openai/gpt-5.2",
    provider: "openai",
    label: "GPT-5.2",
    strengths: ["general", "coding", "business", "operations"],
    speed: 0.8,
    cost: 0.32,
    reasoning: 0.93,
    reliability: 0.93,
    maxContext: 200000,
    enabled: true,
  },
  {
    id: "google/gemini-2.5-flash",
    provider: "google",
    label: "Gemini 2.5 Flash",
    strengths: ["research", "general", "planning", "operations"],
    speed: 0.94,
    cost: 0.12,
    reasoning: 0.84,
    reliability: 0.88,
    maxContext: 1000000,
    enabled: true,
  },
  {
    id: "google/gemini-2.5-flash-lite",
    provider: "google",
    label: "Gemini 2.5 Flash Lite",
    strengths: ["general", "operations"],
    speed: 0.98,
    cost: 0.05,
    reasoning: 0.74,
    reliability: 0.82,
    maxContext: 1000000,
    enabled: true,
  },
];

function scoreModel(model: ModelCandidate, intent: FrontierIntent, risk: RiskLevel, effort: EffortLevel): number {
  const intentFit = model.strengths.includes(intent) ? 0.32 : 0.08;
  const reasoningWeight = risk === "high" ? 0.34 : risk === "medium" ? 0.26 : 0.18;
  const speedWeight = effort === "fast" ? 0.24 : effort === "standard" ? 0.12 : 0.04;
  const contextWeight = intent === "research" ? 0.12 : 0.06;
  const costPenalty = effort === "deep" ? model.cost * 0.04 : model.cost * 0.1;

  return (
    intentFit +
    model.reasoning * reasoningWeight +
    model.speed * speedWeight +
    model.reliability * 0.2 +
    (model.maxContext >= 200000 ? 1 : model.maxContext / 200000) * contextWeight -
    costPenalty
  );
}

export function selectModel(params: {
  userText: string;
  risk?: RiskLevel;
  effort?: EffortLevel;
  forceVerification?: boolean;
}): ModelSelection {
  const risk = params.risk ?? "medium";
  const effort = params.effort ?? "standard";
  const intent = detectIntent(params.userText);
  const ranked = MODELS
    .filter((model) => model.enabled !== false)
    .map((model) => ({ model, score: scoreModel(model, intent, risk, effort) }))
    .sort((a, b) => b.score - a.score);

  const primary = ranked[0]?.model ?? MODELS[0];
  const fallbackModels = ranked.slice(1, 4).map((row) => row.model.id);
  const requiresVerification =
    params.forceVerification === true ||
    risk === "high" ||
    intent === "research" ||
    intent === "medical" ||
    intent === "legal" ||
    intent === "finance";
  const requiresTools = intent === "research" || /(latest|current|today|right now|compare|source|citation)/i.test(params.userText);

  const rationale = [
    `Detected intent: ${intent}`,
    `Selected primary model: ${primary.label}`,
    risk === "high" ? "High-risk task: optimized for reasoning and reliability" : `Effort mode: ${effort}`,
  ];

  if (requiresTools) rationale.push("Tool use recommended for freshness or evidence");
  if (requiresVerification) rationale.push("Verification required before high-confidence output");

  return {
    primaryModel: primary.id,
    fallbackModels,
    rationale,
    requiresVerification,
    requiresTools,
  };
}
