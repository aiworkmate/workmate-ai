import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Brain, Pin, Search, Plus, Trash2, Archive } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { PageHeader, EmptyState, StatusPill } from "@/components/page-primitives";
import { ConfidenceBadge, VerificationBadge } from "@/components/trust-badges";
import { toast } from "sonner";

export const Route = createFileRoute("/app/memory")({
  head: () => ({ meta: [{ title: "Memory Center · WorkMate X" }] }),
  component: MemoryPage,
});

type Layer = "all" | "working" | "session" | "project" | "user" | "knowledge" | "archive";

const LAYER_DESC: Record<Exclude<Layer, "all">, string> = {
  working: "Active in this turn — short-lived working set.",
  session: "Lasts this session — scratchpad context.",
  project: "Scoped to a project — pulled in when working on it.",
  user: "About you — preferences and facts that persist.",
  knowledge: "Domain knowledge — operational know-how.",
  archive: "Cold storage — preserved but not retrieved by default.",
};

function MemoryPage() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const [q, setQ] = useState("");
  const [draft, setDraft] = useState("");
  const [layer, setLayer] = useState<Layer>("all");
  const [draftLayer, setDraftLayer] = useState<Exclude<Layer, "all">>("user");

  const { data: memories = [] } = useQuery({
    queryKey: ["memories", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await supabase.from("memories")
        .select("id, content, category, pinned, confidence, updated_at, layer, verified, importance, source, tags, project_id")
        .order("pinned", { ascending: false }).order("updated_at", { ascending: false });
      return data ?? [];
    },
  });

  const filtered = memories.filter(m => {
    if (q && !m.content.toLowerCase().includes(q.toLowerCase())) return false;
    if (layer !== "all" && m.layer !== layer) return false;
    return true;
  });

  const counts = memories.reduce<Record<string, number>>((acc, m) => { acc[m.layer] = (acc[m.layer] ?? 0) + 1; return acc; }, {});

  async function addMemory() {
    if (!draft.trim() || !user) return;
    const { error } = await supabase.from("memories").insert({ user_id: user.id, content: draft.trim(), category: "general", layer: draftLayer });
    if (error) { toast.error(error.message); return; }
    setDraft("");
    qc.invalidateQueries({ queryKey: ["memories"] });
  }
  async function togglePin(m: { id: string; pinned: boolean }) {
    await supabase.from("memories").update({ pinned: !m.pinned }).eq("id", m.id);
    qc.invalidateQueries({ queryKey: ["memories"] });
  }
  async function archive(id: string) {
    await supabase.from("memories").update({ layer: "archive" as const }).eq("id", id);
    qc.invalidateQueries({ queryKey: ["memories"] });
  }
  async function removeMemory(id: string) {
    await supabase.from("memories").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["memories"] });
  }

  const LAYERS: { id: Layer; label: string }[] = [
    { id: "all", label: "All" },
    { id: "working", label: "Working" },
    { id: "session", label: "Session" },
    { id: "project", label: "Project" },
    { id: "user", label: "User" },
    { id: "knowledge", label: "Knowledge" },
    { id: "archive", label: "Archive" },
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto scrollbar-thin">
      <PageHeader
        eyebrow="Memory operating system"
        title="Memory Center"
        description="What the orchestrator can recall on your behalf — organized by layer, ranked by confidence and importance."
        actions={<StatusPill tone="info">{memories.length} entries</StatusPill>}
      />

      <div className="space-y-5 p-6">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Capture</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <input
              value={draft} onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") addMemory(); }}
              placeholder="e.g. Quarterly clinical-ops review is every second Wednesday."
              className="min-w-[200px] flex-1 rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40"
            />
            <select value={draftLayer} onChange={e => setDraftLayer(e.target.value as Exclude<Layer, "all">)} className="rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none">
              {(Object.keys(LAYER_DESC) as Array<Exclude<Layer, "all">>).map(l => <option key={l} value={l}>{l}</option>)}
            </select>
            <button onClick={addMemory} className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90">
              <Plus className="h-3.5 w-3.5" /> Save
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {LAYERS.map(l => (
            <button key={l.id} onClick={() => setLayer(l.id)} className={`rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition ${layer === l.id ? "border-primary/40 bg-primary/10 text-primary-glow" : "border-border bg-surface/60 text-muted-foreground hover:text-foreground"}`}>
              {l.label}{l.id !== "all" && counts[l.id] ? <span className="ml-1.5 font-mono text-[10px] text-muted-foreground">{counts[l.id]}</span> : null}
            </button>
          ))}
        </div>

        {layer !== "all" && <p className="text-xs text-muted-foreground">{LAYER_DESC[layer]}</p>}

        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q} onChange={(e) => setQ(e.target.value)}
            placeholder="Search memories…"
            className="w-full rounded-md border border-input bg-surface/60 py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>

        {filtered.length === 0 ? (
          <EmptyState icon={Brain} title="No memories in this view" description="Capture preferences, facts, and recurring context. Memory is layered so retrieval surfaces the right thing at the right time." />
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {filtered.map((m) => (
              <div key={m.id} className="group rounded-xl border border-border bg-card p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusPill tone="info">{m.layer}</StatusPill>
                    <ConfidenceBadge value={m.confidence} />
                    <VerificationBadge status={m.verified ? "verified" : "unverified"} />
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => togglePin(m)} title="Pin" className={`grid h-7 w-7 place-items-center rounded-md hover:bg-accent ${m.pinned ? "text-primary-glow" : "text-muted-foreground"}`}>
                      <Pin className="h-3.5 w-3.5" />
                    </button>
                    <button onClick={() => archive(m.id)} title="Archive" className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground">
                      <Archive className="h-3.5 w-3.5" />
                    </button>
                    <button onClick={() => removeMemory(m.id)} title="Delete" className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground opacity-0 transition hover:bg-accent hover:text-destructive group-hover:opacity-100">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm">{m.content}</p>
                {m.tags?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {m.tags.map((t: string) => <span key={t} className="rounded-full border border-border bg-surface/60 px-1.5 font-mono text-[10px]">{t}</span>)}
                  </div>
                )}
                <div className="mt-3 font-mono text-[10px] text-muted-foreground">updated {new Date(m.updated_at).toLocaleString()}{m.source ? ` · ${m.source}` : ""}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
