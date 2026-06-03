import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import * as Icons from "lucide-react";
import { Bot } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader, StatusPill, EmptyState } from "@/components/page-primitives";

export const Route = createFileRoute("/app/agents")({
  head: () => ({ meta: [{ title: "Agents · WorkMate X" }] }),
  component: AgentsPage,
});

const ACCENT_HUE: Record<string, number> = { violet: 300, sky: 240, emerald: 160, amber: 80, rose: 20, cyan: 200, indigo: 280, lime: 130, teal: 180, slate: 250 };

function AgentsPage() {
  const { data = [] } = useQuery({
    queryKey: ["agent_definitions"],
    queryFn: async () => (await supabase.from("agent_definitions").select("*").order("label")).data ?? [],
  });

  return (
    <div className="flex h-full flex-col overflow-y-auto scrollbar-thin">
      <PageHeader
        eyebrow="Agent orchestration"
        title="Specialist agents"
        description="Routing happens behind the scenes — these specialists collaborate to answer with the right expertise."
        actions={<StatusPill tone="info">Auto-routed</StatusPill>}
      />
      <div className="p-6">
        {data.length === 0 ? (
          <EmptyState icon={Bot} title="No agents available" description="Agent roster is provisioned at the workspace level." />
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.map((a) => {
              const Icon = (Icons[(a.icon ?? "Bot") as keyof typeof Icons] as React.ComponentType<{ className?: string }>) ?? Icons.Bot;
              const hue = ACCENT_HUE[a.accent] ?? 300;
              return (
                <div key={a.id} className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/40">
                  <div className="flex items-start justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-lg" style={{ background: `oklch(0.7 0.15 ${hue} / 0.15)`, color: `oklch(0.85 0.12 ${hue})` }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <StatusPill tone={a.status === "active" ? "success" : "neutral"}>{a.status}</StatusPill>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold">{a.label}</h3>
                  {a.description && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{a.description}</p>}
                  <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    <div><div className="text-sm font-semibold text-foreground tabular-nums">{a.total_invocations}</div>runs</div>
                    <div><div className="text-sm font-semibold text-foreground tabular-nums">{a.avg_latency_ms}ms</div>latency</div>
                    <div><div className="text-sm font-semibold text-foreground tabular-nums">{Math.round((a.success_rate ?? 0) * 100)}%</div>success</div>
                  </div>
                  {a.routing_keywords?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {a.routing_keywords.slice(0, 5).map((k: string) => (
                        <span key={k} className="rounded-full border border-border bg-surface/60 px-2 py-0.5 font-mono text-[10px]">{k}</span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
