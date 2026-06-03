import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Plug, Search, FileText, Mail, Calendar, Database, Github, Cloud, Briefcase, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { PageHeader, StatusPill } from "@/components/page-primitives";
import { toast } from "sonner";

export const Route = createFileRoute("/app/tools")({
  head: () => ({ meta: [{ title: "Tool connections · WorkMate X" }] }),
  component: ToolsPage,
});

const CATALOG: { tool_type: string; name: string; description: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { tool_type: "web_search", name: "Web Search", description: "Live web retrieval with citations and freshness checks.", icon: Search },
  { tool_type: "documents", name: "Documents", description: "Read/write across your uploaded knowledge corpus.", icon: FileText },
  { tool_type: "email", name: "Email", description: "Read inbox, draft replies, send messages.", icon: Mail },
  { tool_type: "calendar", name: "Calendar", description: "Read events, create holds, propose times.", icon: Calendar },
  { tool_type: "crm", name: "CRM", description: "Sync accounts, contacts, deals, activity.", icon: Briefcase },
  { tool_type: "database", name: "Database", description: "Run scoped queries against connected datasets.", icon: Database },
  { tool_type: "github", name: "GitHub", description: "Read repos, open issues, review PRs.", icon: Github },
  { tool_type: "cloud_storage", name: "Cloud Storage", description: "Browse and ingest files from Drive / Dropbox / S3.", icon: Cloud },
];

function ToolsPage() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const { data: connections = [] } = useQuery({
    queryKey: ["tool_connections", user?.id],
    enabled: !!user,
    queryFn: async () => (await supabase.from("tool_connections").select("*")).data ?? [],
  });

  async function connect(t: typeof CATALOG[number]) {
    if (!user) return;
    const existing = connections.find(c => c.tool_type === t.tool_type);
    if (existing) {
      await supabase.from("tool_connections").update({ status: existing.status === "connected" ? "disconnected" : "connected" }).eq("id", existing.id);
    } else {
      const { error } = await supabase.from("tool_connections").insert({ user_id: user.id, name: t.name, tool_type: t.tool_type, description: t.description, status: "connected" });
      if (error) { toast.error(error.message); return; }
    }
    qc.invalidateQueries({ queryKey: ["tool_connections"] });
  }

  return (
    <div className="flex h-full flex-col overflow-y-auto scrollbar-thin">
      <PageHeader
        eyebrow="Universal tool layer"
        title="Tool connections"
        description="Safely connect the assistant to your work surface. Provenance and status surface in every response."
      />
      <div className="p-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {CATALOG.map(t => {
            const conn = connections.find(c => c.tool_type === t.tool_type);
            const status = conn?.status ?? "disconnected";
            return (
              <div key={t.tool_type} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-start justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-surface-elevated text-primary-glow"><t.icon className="h-5 w-5" /></div>
                  <StatusPill tone={status === "connected" ? "success" : status === "error" ? "danger" : "neutral"}>{status}</StatusPill>
                </div>
                <h3 className="mt-3 font-display text-base font-semibold">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {conn ? `${conn.invocation_count} uses` : "not configured"}
                  </span>
                  <button onClick={() => connect(t)} className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium hover:bg-accent">
                    {status === "connected" ? <><Plug className="h-3 w-3" /> Disconnect</> : <><Plus className="h-3 w-3" /> Connect</>}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
