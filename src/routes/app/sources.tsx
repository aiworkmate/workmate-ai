import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Globe, Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { PageHeader, EmptyState, StatusPill } from "@/components/page-primitives";
import { FreshnessIndicator, VerificationBadge, SourcePill } from "@/components/trust-badges";

export const Route = createFileRoute("/app/sources")({
  head: () => ({ meta: [{ title: "Sources · WorkMate X" }] }),
  component: SourcesPage,
});

function SourcesPage() {
  const { user } = useAuth();
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | "verified" | "fresh">("all");

  const { data = [] } = useQuery({
    queryKey: ["sources", user?.id],
    enabled: !!user,
    queryFn: async () => (await supabase.from("sources").select("*").order("fetched_at", { ascending: false }).limit(200)).data ?? [],
  });

  const filtered = data.filter(s => {
    if (q && !`${s.title} ${s.snippet}`.toLowerCase().includes(q.toLowerCase())) return false;
    if (filter === "verified" && !s.is_verified) return false;
    if (filter === "fresh" && s.freshness_score < 0.7) return false;
    return true;
  });

  return (
    <div className="flex h-full flex-col overflow-y-auto scrollbar-thin">
      <PageHeader
        eyebrow="Provenance ledger"
        title="Sources"
        description="Every citation pulled into your work. Filter by freshness and verification to keep responses grounded."
        actions={<StatusPill tone="info">{data.length} indexed</StatusPill>}
      />
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap gap-2">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search sources…" className="w-full rounded-md border border-input bg-surface/60 py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring/40" />
          </div>
          {(["all","verified","fresh"] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`rounded-md border px-3 py-2 text-xs font-medium uppercase tracking-wider ${filter === f ? "border-primary/40 bg-primary/10 text-primary-glow" : "border-border bg-surface/60 text-muted-foreground hover:text-foreground"}`}>{f}</button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <EmptyState icon={Globe} title="No sources yet" description="Sources accumulate automatically as the assistant gathers and cites information for you." />
        ) : (
          <ul className="space-y-2">
            {filtered.map(s => (
              <li key={s.id} className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-surface-elevated text-primary-glow"><Globe className="h-4 w-4" /></div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <SourcePill title={s.title} url={s.url ?? undefined} />
                      <VerificationBadge status={s.is_verified ? "verified" : "unverified"} />
                      <FreshnessIndicator score={s.freshness_score} fetchedAt={s.fetched_at} />
                    </div>
                    {s.snippet && <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{s.snippet}</p>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
