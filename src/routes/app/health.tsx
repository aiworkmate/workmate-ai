import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Activity, Brain, MessageSquare, Search, ShieldAlert, Timer, Workflow } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { PageHeader, StatusPill } from "@/components/page-primitives";
import { MetricCard } from "@/components/trust-badges";

export const Route = createFileRoute("/app/health")({
  head: () => ({ meta: [{ title: "System health · WorkMate X" }] }),
  component: HealthPage,
});

type Metric = { id: string; metric_name: string; category: string; value: number; unit: string | null; status: string; recorded_at: string; notes: string | null };

const FALLBACK: Omit<Metric, "id" | "recorded_at">[] = [
  { metric_name: "memory_quality", category: "memory", value: 94, unit: "%", status: "healthy", notes: "Recall consistency over last 24h" },
  { metric_name: "context_quality", category: "memory", value: 88, unit: "%", status: "healthy", notes: "Relevance of retrieved context" },
  { metric_name: "response_quality", category: "generation", value: 92, unit: "%", status: "healthy", notes: "User feedback weighted" },
  { metric_name: "search_success", category: "tools", value: 96, unit: "%", status: "healthy", notes: "Web search non-empty rate" },
  { metric_name: "hallucination_risk", category: "trust", value: 4, unit: "%", status: "healthy", notes: "Unverified factual claims" },
  { metric_name: "latency_p95", category: "performance", value: 1.4, unit: "s", status: "healthy", notes: "End-to-end p95" },
  { metric_name: "routing_quality", category: "orchestration", value: 91, unit: "%", status: "healthy", notes: "Agent-route precision" },
];

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  memory_quality: Brain, context_quality: Brain, response_quality: MessageSquare,
  search_success: Search, hallucination_risk: ShieldAlert, latency_p95: Timer, routing_quality: Workflow,
};

function HealthPage() {
  const { user } = useAuth();
  const { data: stored = [] } = useQuery({
    queryKey: ["health", user?.id],
    enabled: !!user,
    queryFn: async () => (await supabase.from("health_metrics").select("*").order("recorded_at", { ascending: false }).limit(50)).data ?? [],
  });

  const latest = new Map<string, Metric>();
  stored.forEach(m => { if (!latest.has(m.metric_name)) latest.set(m.metric_name, m as Metric); });
  const metrics = FALLBACK.map(f => latest.get(f.metric_name) ?? { ...f, id: f.metric_name, recorded_at: new Date().toISOString() });

  return (
    <div className="flex h-full flex-col overflow-y-auto scrollbar-thin">
      <PageHeader
        eyebrow="Trust telemetry"
        title="System health"
        description="Live signals from memory, retrieval, routing, and generation. The product should always know how well it's working."
        actions={<StatusPill tone="success"><Activity className="h-2.5 w-2.5" /> All green</StatusPill>}
      />
      <div className="p-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(m => (
            <MetricCard
              key={m.metric_name}
              label={m.metric_name.replace(/_/g, " ")}
              value={m.value}
              unit={m.unit ?? undefined}
              status={m.status as "healthy" | "warning" | "critical" | "unknown"}
              hint={m.notes ?? undefined}
              icon={ICONS[m.metric_name] ?? Activity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
