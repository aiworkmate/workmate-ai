import { ShieldCheck, ShieldAlert, ShieldQuestion, ExternalLink, Clock, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export function ConfidenceBadge({ value }: { value: number }) {
  const pct = Math.round((value ?? 0) * 100);
  const tone = pct >= 80 ? "success" : pct >= 50 ? "info" : "warning";
  const cls = tone === "success" ? "text-success border-success/30 bg-success/10"
    : tone === "info" ? "text-primary-glow border-primary/30 bg-primary/10"
    : "text-warning border-warning/30 bg-warning/10";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${cls}`}>
      <Sparkles className="h-2.5 w-2.5" /> {pct}% conf
    </span>
  );
}

export function VerificationBadge({ status }: { status: "unverified" | "pending" | "verified" | "rejected" }) {
  const map = {
    verified: { icon: ShieldCheck, label: "Verified", cls: "text-success border-success/30 bg-success/10" },
    pending: { icon: ShieldQuestion, label: "Pending", cls: "text-primary-glow border-primary/30 bg-primary/10" },
    unverified: { icon: ShieldQuestion, label: "Unverified", cls: "text-muted-foreground border-border bg-surface" },
    rejected: { icon: ShieldAlert, label: "Rejected", cls: "text-destructive border-destructive/30 bg-destructive/10" },
  } as const;
  const m = map[status] ?? map.unverified;
  const Icon = m.icon;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${m.cls}`}>
      <Icon className="h-2.5 w-2.5" /> {m.label}
    </span>
  );
}

export function FreshnessIndicator({ score, fetchedAt }: { score: number; fetchedAt?: string }) {
  const fresh = score >= 0.7;
  return (
    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
      <Clock className="h-2.5 w-2.5" />
      {fresh ? "fresh" : "stale"} · {fetchedAt ? new Date(fetchedAt).toLocaleDateString() : "—"}
    </span>
  );
}

export function SourcePill({ title, url }: { title: string; url?: string | null }) {
  const inner = (
    <span className="inline-flex max-w-[14rem] items-center gap-1 truncate rounded-full border border-border bg-surface/60 px-2 py-0.5 text-[11px] hover:border-primary/40">
      <ExternalLink className="h-2.5 w-2.5 shrink-0 text-muted-foreground" />
      <span className="truncate">{title}</span>
    </span>
  );
  return url ? <a href={url} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

export function AgentChip({ label, accent = "violet" }: { label: string; accent?: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
      style={{
        borderColor: `oklch(0.65 0.15 var(--accent-hue, 280) / 0.3)`,
        background: `oklch(0.65 0.15 var(--accent-hue, 280) / 0.1)`,
        color: `oklch(0.85 0.12 var(--accent-hue, 280))`,
      }}
      data-accent={accent}
    >
      <span className="h-1 w-1 rounded-full bg-current" /> {label}
    </span>
  );
}

export function MetricCard({ label, value, unit, status, hint, icon: Icon }: {
  label: string; value: ReactNode; unit?: string; status?: "healthy" | "warning" | "critical" | "unknown";
  hint?: string; icon?: React.ComponentType<{ className?: string }>;
}) {
  const tone = status === "critical" ? "text-destructive" : status === "warning" ? "text-warning" : status === "healthy" ? "text-success" : "text-muted-foreground";
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        {Icon ? <Icon className={`h-4 w-4 ${tone}`} /> : null}
      </div>
      <div className="mt-3 flex items-baseline gap-1">
        <div className="font-display text-3xl font-semibold tabular-nums">{value}</div>
        {unit ? <div className="text-xs text-muted-foreground">{unit}</div> : null}
      </div>
      {hint ? <div className="mt-2 text-[11px] text-muted-foreground">{hint}</div> : null}
    </div>
  );
}
