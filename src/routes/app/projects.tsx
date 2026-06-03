import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FolderKanban, Plus, Pin, ArrowUpRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { PageHeader, EmptyState, StatusPill } from "@/components/page-primitives";
import { toast } from "sonner";

export const Route = createFileRoute("/app/projects")({
  head: () => ({ meta: [{ title: "Projects · WorkMate X" }] }),
  component: ProjectsPage,
});

const COLORS = ["violet","sky","emerald","amber","rose","cyan","indigo","lime"] as const;
const HUE: Record<string, number> = { violet:300, sky:240, emerald:160, amber:80, rose:20, cyan:200, indigo:280, lime:130 };

function ProjectsPage() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const [showNew, setShowNew] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("violet");

  const { data: projects = [] } = useQuery({
    queryKey: ["projects", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("id, name, description, color, status, is_pinned, updated_at")
        .order("is_pinned", { ascending: false })
        .order("updated_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  async function create() {
    if (!name.trim() || !user) return;
    const { error } = await supabase.from("projects").insert({ user_id: user.id, name: name.trim(), description: desc.trim() || null, color });
    if (error) { toast.error(error.message); return; }
    setName(""); setDesc(""); setShowNew(false);
    qc.invalidateQueries({ queryKey: ["projects"] });
  }

  return (
    <div className="flex h-full flex-col overflow-y-auto scrollbar-thin">
      <PageHeader
        eyebrow="Project operating system"
        title="Projects"
        description="First-class workspaces with goals, tasks, memory, sources, and decisions."
        actions={
          <button onClick={() => setShowNew(v => !v)} className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90">
            <Plus className="h-3.5 w-3.5" /> New project
          </button>
        }
      />

      <div className="space-y-6 p-6">
        {showNew && (
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">New project</div>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Project name" className="rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" />
              <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Short description" className="rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Accent</span>
              {COLORS.map(c => (
                <button key={c} onClick={() => setColor(c)} className={`h-5 w-5 rounded-full border-2 transition ${color === c ? "border-foreground" : "border-transparent"}`} style={{ background: `oklch(0.7 0.15 ${HUE[c]})` }} />
              ))}
              <button onClick={create} className="ml-auto rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-glow">Create</button>
            </div>
          </div>
        )}

        {projects.length === 0 ? (
          <EmptyState
            icon={FolderKanban}
            title="No projects yet"
            description="Projects organize chats, goals, tasks, notes, decisions, memory, and sources around real work."
            action={<button onClick={() => setShowNew(true)} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow">Create your first project</button>}
          />
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((p) => (
              <Link key={p.id} to="/app/projects/$id" params={{ id: p.id }} className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/40">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full" style={{ background: `oklch(0.7 0.15 ${HUE[p.color] ?? 300})` }} />
                    <StatusPill tone={p.status === "active" ? "success" : p.status === "paused" ? "warning" : "neutral"}>{p.status}</StatusPill>
                  </div>
                  <div className="flex items-center gap-2">
                    {p.is_pinned && <Pin className="h-3.5 w-3.5 text-primary-glow" />}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary-glow" />
                  </div>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.name}</h3>
                {p.description && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>}
                <div className="mt-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">updated {new Date(p.updated_at).toLocaleDateString()}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
