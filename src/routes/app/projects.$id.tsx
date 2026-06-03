import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { ArrowLeft, Plus, CheckCircle2, Circle, Target, Flag, StickyNote, Gavel, FileText, Brain, Globe, ListTodo } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { PageHeader, EmptyState, StatusPill } from "@/components/page-primitives";
import { VerificationBadge } from "@/components/trust-badges";
import { toast } from "sonner";

export const Route = createFileRoute("/app/projects/$id")({
  head: () => ({ meta: [{ title: "Project · WorkMate X" }] }),
  component: ProjectDetail,
});

type Tab = "overview" | "goals" | "tasks" | "milestones" | "notes" | "decisions" | "files" | "memory" | "sources";

function ProjectDetail() {
  const { id } = Route.useParams();
  const { user } = useAuth();
  const qc = useQueryClient();
  const [tab, setTab] = useState<Tab>("overview");

  const { data: project } = useQuery({
    queryKey: ["project", id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase.from("projects").select("*").eq("id", id).single();
      if (error) throw error;
      return data;
    },
  });

  const { data: counts } = useQuery({
    queryKey: ["project-counts", id],
    enabled: !!user,
    queryFn: async () => {
      const [g, m, t, n, d, f, mem, s] = await Promise.all([
        supabase.from("project_goals").select("id", { count: "exact", head: true }).eq("project_id", id),
        supabase.from("project_milestones").select("id", { count: "exact", head: true }).eq("project_id", id),
        supabase.from("tasks").select("id", { count: "exact", head: true }).eq("project_id", id),
        supabase.from("project_notes").select("id", { count: "exact", head: true }).eq("project_id", id),
        supabase.from("project_decisions").select("id", { count: "exact", head: true }).eq("project_id", id),
        supabase.from("documents").select("id", { count: "exact", head: true }).eq("project_id", id),
        supabase.from("memories").select("id", { count: "exact", head: true }).eq("project_id", id),
        supabase.from("sources").select("id", { count: "exact", head: true }).eq("project_id", id),
      ]);
      return { goals: g.count ?? 0, milestones: m.count ?? 0, tasks: t.count ?? 0, notes: n.count ?? 0, decisions: d.count ?? 0, files: f.count ?? 0, memory: mem.count ?? 0, sources: s.count ?? 0 };
    },
  });

  const tabs: { id: Tab; label: string; icon: React.ComponentType<{ className?: string }>; count?: number }[] = [
    { id: "overview", label: "Overview", icon: Target },
    { id: "goals", label: "Goals", icon: Target, count: counts?.goals },
    { id: "milestones", label: "Milestones", icon: Flag, count: counts?.milestones },
    { id: "tasks", label: "Tasks", icon: ListTodo, count: counts?.tasks },
    { id: "notes", label: "Notes", icon: StickyNote, count: counts?.notes },
    { id: "decisions", label: "Decisions", icon: Gavel, count: counts?.decisions },
    { id: "files", label: "Files", icon: FileText, count: counts?.files },
    { id: "memory", label: "Memory", icon: Brain, count: counts?.memory },
    { id: "sources", label: "Sources", icon: Globe, count: counts?.sources },
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto scrollbar-thin">
      <PageHeader
        eyebrow="Project workspace"
        title={project?.name ?? "Loading…"}
        description={project?.description ?? undefined}
        actions={
          <Link to="/app/projects" className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-sm hover:bg-accent">
            <ArrowLeft className="h-3.5 w-3.5" /> All projects
          </Link>
        }
      />

      <div className="sticky top-0 z-10 flex gap-1 overflow-x-auto border-b border-border bg-background/80 px-6 backdrop-blur scrollbar-thin">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-3 text-sm transition ${tab === t.id ? "border-primary-glow text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
            <t.icon className="h-3.5 w-3.5" />
            {t.label}
            {typeof t.count === "number" && t.count > 0 && <span className="rounded-full bg-surface px-1.5 font-mono text-[10px]">{t.count}</span>}
          </button>
        ))}
      </div>

      <div className="p-6">
        {tab === "overview" && <Overview projectId={id} counts={counts} />}
        {tab === "goals" && <Goals projectId={id} userId={user?.id} qc={qc} />}
        {tab === "tasks" && <Tasks projectId={id} userId={user?.id} qc={qc} />}
        {tab === "milestones" && <Milestones projectId={id} userId={user?.id} qc={qc} />}
        {tab === "notes" && <Notes projectId={id} userId={user?.id} qc={qc} />}
        {tab === "decisions" && <Decisions projectId={id} userId={user?.id} qc={qc} />}
        {tab === "files" && <Files projectId={id} />}
        {tab === "memory" && <ProjectMemory projectId={id} />}
        {tab === "sources" && <ProjectSources projectId={id} />}
      </div>
    </div>
  );
}

function Overview({ counts }: { projectId: string; counts?: Record<string, number> }) {
  const cards = [
    { label: "Goals", value: counts?.goals ?? 0, icon: Target },
    { label: "Milestones", value: counts?.milestones ?? 0, icon: Flag },
    { label: "Tasks", value: counts?.tasks ?? 0, icon: ListTodo },
    { label: "Notes", value: counts?.notes ?? 0, icon: StickyNote },
    { label: "Decisions", value: counts?.decisions ?? 0, icon: Gavel },
    { label: "Files", value: counts?.files ?? 0, icon: FileText },
    { label: "Memory", value: counts?.memory ?? 0, icon: Brain },
    { label: "Sources", value: counts?.sources ?? 0, icon: Globe },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(c => (
        <div key={c.label} className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</div>
            <c.icon className="h-4 w-4 text-primary-glow" />
          </div>
          <div className="mt-3 font-display text-3xl font-semibold tabular-nums">{c.value}</div>
        </div>
      ))}
    </div>
  );
}

function QuickAdd({ placeholder, onAdd }: { placeholder: string; onAdd: (v: string) => Promise<void> }) {
  const [v, setV] = useState("");
  return (
    <div className="mb-4 flex gap-2">
      <input value={v} onChange={e => setV(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && v.trim()) { onAdd(v.trim()).then(() => setV("")); } }} placeholder={placeholder} className="flex-1 rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" />
      <button onClick={() => v.trim() && onAdd(v.trim()).then(() => setV(""))} className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-glow"><Plus className="h-3.5 w-3.5" /> Add</button>
    </div>
  );
}

function Goals({ projectId, userId, qc }: { projectId: string; userId?: string; qc: ReturnType<typeof useQueryClient> }) {
  const { data = [] } = useQuery({ queryKey: ["goals", projectId], enabled: !!userId, queryFn: async () => (await supabase.from("project_goals").select("*").eq("project_id", projectId).order("created_at", { ascending: false })).data ?? [] });
  async function add(title: string) {
    if (!userId) return;
    const { error } = await supabase.from("project_goals").insert({ user_id: userId, project_id: projectId, title });
    if (error) toast.error(error.message);
    qc.invalidateQueries({ queryKey: ["goals", projectId] });
    qc.invalidateQueries({ queryKey: ["project-counts", projectId] });
  }
  return (
    <div>
      <QuickAdd placeholder="New goal…" onAdd={add} />
      {data.length === 0 ? <EmptyState icon={Target} title="No goals" description="Outcomes the project is pursuing." /> : (
        <ul className="space-y-2">
          {data.map(g => (
            <li key={g.id} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
              <Target className="h-4 w-4 text-primary-glow" />
              <span className="flex-1 text-sm">{g.title}</span>
              <StatusPill tone={g.status === "done" ? "success" : "info"}>{g.status}</StatusPill>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Tasks({ projectId, userId, qc }: { projectId: string; userId?: string; qc: ReturnType<typeof useQueryClient> }) {
  const { data = [] } = useQuery({ queryKey: ["tasks", projectId], enabled: !!userId, queryFn: async () => (await supabase.from("tasks").select("*").eq("project_id", projectId).order("created_at", { ascending: false })).data ?? [] });
  async function add(title: string) {
    if (!userId) return;
    const { error } = await supabase.from("tasks").insert({ user_id: userId, project_id: projectId, title });
    if (error) toast.error(error.message);
    qc.invalidateQueries({ queryKey: ["tasks", projectId] });
    qc.invalidateQueries({ queryKey: ["project-counts", projectId] });
  }
  async function toggle(t: { id: string; status: string }) {
    const next = t.status === "done" ? "todo" : "done";
    await supabase.from("tasks").update({ status: next }).eq("id", t.id);
    qc.invalidateQueries({ queryKey: ["tasks", projectId] });
  }
  return (
    <div>
      <QuickAdd placeholder="New task…" onAdd={add} />
      {data.length === 0 ? <EmptyState icon={ListTodo} title="No tasks" description="Goal → Plan → Execute → Verify → Improve." /> : (
        <ul className="space-y-2">
          {data.map(t => (
            <li key={t.id} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
              <button onClick={() => toggle(t)} className="text-primary-glow">{t.status === "done" ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}</button>
              <span className={`flex-1 text-sm ${t.status === "done" ? "line-through text-muted-foreground" : ""}`}>{t.title}</span>
              <StatusPill tone={t.priority === "urgent" ? "danger" : t.priority === "high" ? "warning" : "neutral"}>{t.priority}</StatusPill>
              <VerificationBadge status={t.verification_status} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Milestones({ projectId, userId, qc }: { projectId: string; userId?: string; qc: ReturnType<typeof useQueryClient> }) {
  const { data = [] } = useQuery({ queryKey: ["milestones", projectId], enabled: !!userId, queryFn: async () => (await supabase.from("project_milestones").select("*").eq("project_id", projectId).order("due_date", { ascending: true, nullsFirst: false })).data ?? [] });
  async function add(title: string) {
    if (!userId) return;
    await supabase.from("project_milestones").insert({ user_id: userId, project_id: projectId, title });
    qc.invalidateQueries({ queryKey: ["milestones", projectId] });
    qc.invalidateQueries({ queryKey: ["project-counts", projectId] });
  }
  return (
    <div>
      <QuickAdd placeholder="New milestone…" onAdd={add} />
      {data.length === 0 ? <EmptyState icon={Flag} title="No milestones" description="Key checkpoints on the path to project goals." /> : (
        <ul className="space-y-2">
          {data.map(m => (
            <li key={m.id} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
              <Flag className="h-4 w-4 text-primary-glow" />
              <span className="flex-1 text-sm">{m.title}</span>
              <span className="font-mono text-[10px] text-muted-foreground">{m.due_date ?? "no date"}</span>
              <StatusPill tone={m.status === "done" ? "success" : "info"}>{m.status}</StatusPill>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Notes({ projectId, userId, qc }: { projectId: string; userId?: string; qc: ReturnType<typeof useQueryClient> }) {
  const { data = [] } = useQuery({ queryKey: ["notes", projectId], enabled: !!userId, queryFn: async () => (await supabase.from("project_notes").select("*").eq("project_id", projectId).order("updated_at", { ascending: false })).data ?? [] });
  async function add(content: string) {
    if (!userId) return;
    await supabase.from("project_notes").insert({ user_id: userId, project_id: projectId, content });
    qc.invalidateQueries({ queryKey: ["notes", projectId] });
    qc.invalidateQueries({ queryKey: ["project-counts", projectId] });
  }
  return (
    <div>
      <QuickAdd placeholder="New note…" onAdd={add} />
      {data.length === 0 ? <EmptyState icon={StickyNote} title="No notes" description="Capture working thoughts and reference info." /> : (
        <div className="grid gap-3 md:grid-cols-2">
          {data.map(n => (
            <div key={n.id} className="rounded-lg border border-border bg-card p-4">
              {n.title && <div className="font-medium">{n.title}</div>}
              <p className="text-sm">{n.content}</p>
              <div className="mt-2 font-mono text-[10px] text-muted-foreground">{new Date(n.updated_at).toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Decisions({ projectId, userId, qc }: { projectId: string; userId?: string; qc: ReturnType<typeof useQueryClient> }) {
  const { data = [] } = useQuery({ queryKey: ["decisions", projectId], enabled: !!userId, queryFn: async () => (await supabase.from("project_decisions").select("*").eq("project_id", projectId).order("decided_at", { ascending: false })).data ?? [] });
  async function add(title: string) {
    if (!userId) return;
    await supabase.from("project_decisions").insert({ user_id: userId, project_id: projectId, title });
    qc.invalidateQueries({ queryKey: ["decisions", projectId] });
    qc.invalidateQueries({ queryKey: ["project-counts", projectId] });
  }
  return (
    <div>
      <QuickAdd placeholder="New decision…" onAdd={add} />
      {data.length === 0 ? <EmptyState icon={Gavel} title="No decisions" description="Track key calls with rationale for future you." /> : (
        <ul className="space-y-2">
          {data.map(d => (
            <li key={d.id} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-start gap-3">
                <Gavel className="h-4 w-4 text-primary-glow" />
                <div className="flex-1">
                  <div className="font-medium">{d.title}</div>
                  {d.content && <p className="mt-1 text-sm text-muted-foreground">{d.content}</p>}
                  <div className="mt-2 font-mono text-[10px] text-muted-foreground">{new Date(d.decided_at).toLocaleDateString()}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Files({ projectId }: { projectId: string }) {
  const { data = [] } = useQuery({ queryKey: ["docs", projectId], queryFn: async () => (await supabase.from("documents").select("*").eq("project_id", projectId).order("created_at", { ascending: false })).data ?? [] });
  if (data.length === 0) return <EmptyState icon={FileText} title="No files" description="Upload documents from the Files page and link them to this project." />;
  return (
    <ul className="space-y-2">
      {data.map(d => (
        <li key={d.id} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
          <FileText className="h-4 w-4 text-primary-glow" />
          <span className="flex-1 text-sm">{d.title}</span>
          <StatusPill tone="info">{d.type}</StatusPill>
        </li>
      ))}
    </ul>
  );
}

function ProjectMemory({ projectId }: { projectId: string }) {
  const { data = [] } = useQuery({ queryKey: ["pmem", projectId], queryFn: async () => (await supabase.from("memories").select("*").eq("project_id", projectId).order("updated_at", { ascending: false })).data ?? [] });
  if (data.length === 0) return <EmptyState icon={Brain} title="No project memory" description="Pin facts, preferences, and context the assistant should recall when working on this project." />;
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {data.map(m => (
        <div key={m.id} className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm">{m.content}</p>
          <div className="mt-2 flex items-center gap-2"><StatusPill tone="info">{m.layer}</StatusPill><VerificationBadge status={m.verified ? "verified" : "unverified"} /></div>
        </div>
      ))}
    </div>
  );
}

function ProjectSources({ projectId }: { projectId: string }) {
  const { data = [] } = useQuery({ queryKey: ["psrc", projectId], queryFn: async () => (await supabase.from("sources").select("*").eq("project_id", projectId).order("fetched_at", { ascending: false })).data ?? [] });
  if (data.length === 0) return <EmptyState icon={Globe} title="No sources" description="Citations and references gathered for this project will appear here." />;
  return (
    <ul className="space-y-2">
      {data.map(s => (
        <li key={s.id} className="rounded-lg border border-border bg-card p-3">
          <div className="flex items-center gap-2"><Globe className="h-3.5 w-3.5 text-primary-glow" /><span className="text-sm font-medium">{s.title}</span></div>
          {s.snippet && <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{s.snippet}</p>}
        </li>
      ))}
    </ul>
  );
}
