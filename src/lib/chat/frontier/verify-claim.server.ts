import type { ContextPacket } from "./types";

export type VerificationVerdict = "supported" | "partially_supported" | "unverified" | "contradicted";

export interface VerificationResult {
  claim: string;
  verdict: VerificationVerdict;
  confidence: number;
  evidence: string[];
  gaps: string[];
}

function normalized(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 3);
}

export function verifyClaim(claim: string, context: ContextPacket): VerificationResult {
  const evidencePool = [
    ...context.memoryItems,
    ...context.sourceItems,
    ...context.verificationItems,
    ...context.operationalNotes,
    ...context.taskItems,
    ...(context.projectSummary ? [context.projectSummary] : []),
  ];

  const claimTerms = new Set(normalized(claim));
  const matches = evidencePool.filter((item) => {
    const itemTerms = new Set(normalized(item));
    let hits = 0;
    for (const term of claimTerms) if (itemTerms.has(term)) hits += 1;
    return hits >= Math.max(1, Math.ceil(claimTerms.size * 0.25));
  });

  const contradicted = matches.some((item) => /contradicted|false|failed|unverified/i.test(item));
  const verified = matches.some((item) => /verified|supported/i.test(item));
  const confidence = Math.min(0.98, 0.2 + matches.length * 0.18 + (verified ? 0.14 : 0));

  let verdict: VerificationVerdict = "unverified";
  if (contradicted) verdict = "contradicted";
  else if (matches.length >= 3 || (matches.length >= 2 && verified)) verdict = "supported";
  else if (matches.length >= 1) verdict = "partially_supported";

  return {
    claim,
    verdict,
    confidence: Number(confidence.toFixed(2)),
    evidence: matches.slice(0, 6),
    gaps: matches.length ? [] : ["No strong evidence found in current memory, sources, or verification logs."],
  };
}
