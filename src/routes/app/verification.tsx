import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { PageHeader, EmptyState, StatusPill } from "@/components/page-primitives";
import { ConfidenceBadge, VerificationBadge, SourcePill } from "@/components/trust-badges";

export const Route = createFileRoute("/app/verification")({
  head: () => ({ meta: [{ title: "Verification · WorkMate X" }] }),
  component: VerificationPage,
});

function VerificationPage() {
  const { user } = useAuth();
  const { data = [] } = useQuery({
    queryKey: ["verification_logs", user?.id],
    enabled: !!user,
    queryFn: async () => (await supabase.from("verification_logs").select("*").order("verified_at", { ascending: false }).limit(100)).data ?? [],
  });

  return (
    <div className="flex h-full flex-col overflow-y-auto scrollbar-thin">
      <PageHeader
        eyebrow="Reality check"
        title="Verification log"
        description="Every claim the assistant checks against an external source is recorded with confidence and provenance."
        actions={<StatusPill tone="info">{data.length} entries</StatusPill>}
      />
      <div className="p-6">
        {data.length === 0 ? (
          <EmptyState icon={ShieldCheck} title="No verifications yet" description="As the assistant cites and checks facts, entries appear here so you can audit confidence and evidence." />
        ) : (
          <ul className="space-y-2">
            {data.map(v => (
              <li key={v.id} className="rounded-xl border border-border bg-card p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <VerificationBadge status={v.verdict} />
                  <ConfidenceBadge value={v.confidence} />
                  {v.source && <SourcePill title={v.source} />}
                  <span className="ml-auto font-mono text-[10px] text-muted-foreground">{new Date(v.verified_at).toLocaleString()}</span>
                </div>
                <p className="mt-3 text-sm font-medium">{v.claim}</p>
                {v.evidence && <p className="mt-1 text-xs text-muted-foreground">{v.evidence}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
