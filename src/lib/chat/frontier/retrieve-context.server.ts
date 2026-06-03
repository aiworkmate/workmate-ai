import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type { ContextPacket } from "./types";

function clean(text: string | null | undefined, max = 240): string | null {
  const value = (text ?? "").replace(/\s+/g, " ").trim();
  if (!value) return null;
  return value.slice(0, max);
}

export async function retrieveContext(params: {
  userId: string;
  projectId?: string | null;
  conversationId?: string | null;
  limit?: number;
}): Promise<ContextPacket> {
  const limit = Math.max(1, Math.min(params.limit ?? 5, 10));

  const [projectRes, memoryRes, sourceRes, verificationRes, taskRes, opRes] = await Promise.all([
    params.projectId
      ? supabaseAdmin.from("projects").select("name, description, status, notes").eq("id", params.projectId).maybeSingle()
      : Promise.resolve({ data: null }),
    supabaseAdmin
      .from("memories")
      .select("content, layer, source, confidence, verified")
      .eq("created_by", params.userId)
      .order("updated_at", { ascending: false })
      .limit(limit),
    params.projectId || params.conversationId
      ? supabaseAdmin
          .from("sources")
          .select("title, snippet, freshness_score, is_verified")
          .or([
            params.projectId ? `project_id.eq.${params.projectId}` : null,
            params.conversationId ? `conversation_id.eq.${params.conversationId}` : null,
          ].filter(Boolean).join(","))
          .order("fetched_at", { ascending: false })
          .limit(limit)
      : Promise.resolve({ data: [] }),
    params.projectId || params.conversationId
      ? supabaseAdmin
          .from("verification_logs")
          .select("claim, verdict, confidence")
          .or([
            params.projectId ? `project_id.eq.${params.projectId}` : null,
            params.conversationId ? `conversation_id.eq.${params.conversationId}` : null,
          ].filter(Boolean).join(","))
          .order("verified_at", { ascending: false })
          .limit(limit)
      : Promise.resolve({ data: [] }),
    params.projectId
      ? supabaseAdmin
          .from("tasks")
          .select("title, status, verification_status, assigned_agent")
          .eq("project_id", params.projectId)
          .order("updated_at", { ascending: false })
          .limit(limit)
      : Promise.resolve({ data: [] }),
    params.projectId
      ? supabaseAdmin
          .from("operational_knowledge")
          .select("title, content, confidence, agent_type")
          .eq("project_id", params.projectId)
          .eq("is_active", true)
          .order("updated_at", { ascending: false })
          .limit(limit)
      : Promise.resolve({ data: [] }),
  ]);

  const projectSummary = projectRes.data
    ? clean(`${projectRes.data.name}: ${projectRes.data.description ?? ""} Status: ${projectRes.data.status ?? "unknown"}. ${projectRes.data.notes ?? ""}`, 400)
    : null;

  return {
    projectSummary,
    memoryItems: (memoryRes.data ?? [])
      .map((row) => clean(`[${row.layer}] ${row.content} (${row.verified ? "verified" : "unverified"}, conf ${row.confidence ?? "?"}, src ${row.source ?? "unknown"})`, 220))
      .filter(Boolean) as string[],
    sourceItems: (sourceRes.data ?? [])
      .map((row) => clean(`${row.title}: ${row.snippet ?? ""} (freshness ${row.freshness_score ?? "?"}, ${row.is_verified ? "verified" : "unverified"})`, 240))
      .filter(Boolean) as string[],
    verificationItems: (verificationRes.data ?? [])
      .map((row) => clean(`${row.claim} -> ${row.verdict} (${row.confidence ?? "?"})`, 220))
      .filter(Boolean) as string[],
    taskItems: (taskRes.data ?? [])
      .map((row) => clean(`${row.title} [${row.status}] via ${row.assigned_agent ?? "unassigned"}, verify=${row.verification_status ?? "unknown"}`, 200))
      .filter(Boolean) as string[],
    operationalNotes: (opRes.data ?? [])
      .map((row) => clean(`${row.title}: ${row.content} (${row.agent_type ?? "system"}, conf ${row.confidence ?? "?"})`, 220))
      .filter(Boolean) as string[],
  };
}

export function formatContextPacket(context: ContextPacket): string {
  const sections = [
    context.projectSummary ? `PROJECT\n${context.projectSummary}` : null,
    context.memoryItems.length ? `MEMORY\n- ${context.memoryItems.join("\n- ")}` : null,
    context.sourceItems.length ? `SOURCES\n- ${context.sourceItems.join("\n- ")}` : null,
    context.verificationItems.length ? `VERIFICATION\n- ${context.verificationItems.join("\n- ")}` : null,
    context.taskItems.length ? `TASKS\n- ${context.taskItems.join("\n- ")}` : null,
    context.operationalNotes.length ? `OPERATIONAL KNOWLEDGE\n- ${context.operationalNotes.join("\n- ")}` : null,
  ].filter(Boolean);

  return sections.join("\n\n");
}
