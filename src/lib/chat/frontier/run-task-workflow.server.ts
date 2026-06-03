import type { WorkflowRun } from "./types";
import { selectAgent } from "./select-agent.server";
import { selectModel } from "./select-model.server";

function breakIntoSteps(goal: string): string[] {
  const input = goal.toLowerCase();
  if (/(research|compare|analyze)/i.test(input)) {
    return [
      "Clarify the research target and success criteria",
      "Gather evidence from fresh and credible sources",
      "Compare findings and identify contradictions",
      "Synthesize the result with citations and confidence",
    ];
  }
  if (/(build|ship|implement|code|develop)/i.test(input)) {
    return [
      "Define the technical scope and constraints",
      "Create an implementation plan with dependencies",
      "Execute the highest-leverage build step",
      "Verify correctness, regressions, and next actions",
    ];
  }
  if (/(launch|plan|roadmap|strategy)/i.test(input)) {
    return [
      "Define the desired outcome and constraints",
      "Sequence milestones, workstreams, and dependencies",
      "Assign ownership and execution order",
      "Review risks, blockers, and verification needs",
    ];
  }
  return [
    "Clarify the goal and desired outcome",
    "Create a practical execution plan",
    "Execute the next high-value step",
    "Verify the result and propose follow-up",
  ];
}

export function runTaskWorkflow(params: {
  goal: string;
  risk?: "low" | "medium" | "high";
  effort?: "fast" | "standard" | "deep";
}): WorkflowRun & { modelPlan: ReturnType<typeof selectModel> } {
  const agent = selectAgent({ userText: params.goal, risk: params.risk });
  const modelPlan = selectModel({ userText: params.goal, risk: params.risk, effort: params.effort });
  const steps = breakIntoSteps(params.goal);

  return {
    goal: params.goal,
    steps,
    assignedAgent: agent.primary,
    status: modelPlan.requiresVerification ? "verifying" : "planned",
    verificationRequired: modelPlan.requiresVerification,
    notes: [...agent.rationale, ...modelPlan.rationale],
    modelPlan,
  };
}
