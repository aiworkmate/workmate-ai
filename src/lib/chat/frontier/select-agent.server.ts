import type { AgentSelection, FrontierIntent, RiskLevel } from "./types";

const AGENT_BY_INTENT: Record<FrontierIntent, string> = {
  general: "CEO Agent",
  research: "Research Agent",
  coding: "Coding Agent",
  planning: "Project Manager",
  business: "Business Agent",
  finance: "Finance Agent",
  legal: "Legal Assistant",
  medical: "Medical Research Assistant",
  operations: "Operations Agent",
};

const SUPPORTING_BY_INTENT: Partial<Record<FrontierIntent, string[]>> = {
  research: ["CEO Agent"],
  coding: ["Project Manager"],
  planning: ["CEO Agent", "Operations Agent"],
  business: ["CEO Agent", "Finance Agent"],
  finance: ["CEO Agent"],
  legal: ["CEO Agent"],
  medical: ["Research Agent"],
  operations: ["Project Manager"],
};

export function detectIntent(text: string): FrontierIntent {
  const input = text.toLowerCase();
  if (/(code|bug|typescript|react|api|database|schema|architecture|refactor|debug)/i.test(input)) return "coding";
  if (/(research|compare|find sources|citations|benchmark|market scan|analyze competitors)/i.test(input)) return "research";
  if (/(plan|roadmap|milestone|timeline|next steps|sequence|organize)/i.test(input)) return "planning";
  if (/(pricing|go to market|gtm|customer|sales|positioning|launch|strategy)/i.test(input)) return "business";
  if (/(runway|budget|forecast|projection|fundraising|burn)/i.test(input)) return "finance";
  if (/(contract|policy|terms|compliance|legal|risk)/i.test(input)) return "legal";
  if (/(medical|clinical|symptom|treatment|dosage|study)/i.test(input)) return "medical";
  if (/(workflow|ops|operations|handoff|process|automation)/i.test(input)) return "operations";
  return "general";
}

export function selectAgent(params: { userText: string; risk?: RiskLevel }): AgentSelection {
  const intent = detectIntent(params.userText);
  const primary = AGENT_BY_INTENT[intent];
  const supporting = [...(SUPPORTING_BY_INTENT[intent] ?? [])];
  const rationale = [`Primary intent detected: ${intent}`];

  if (params.risk === "high" && !supporting.includes("CEO Agent") && primary !== "CEO Agent") {
    supporting.unshift("CEO Agent");
    rationale.push("High-risk task: added CEO Agent for oversight");
  }

  if (intent === "research") rationale.push("Needs evidence gathering and source comparison");
  if (intent === "coding") rationale.push("Needs systems or implementation reasoning");
  if (intent === "planning") rationale.push("Needs sequencing, milestones, and execution structure");

  return { primary, supporting, rationale };
}
