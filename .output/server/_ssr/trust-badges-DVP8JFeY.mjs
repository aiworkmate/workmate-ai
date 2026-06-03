import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { _ as ShieldAlert, ay as ShieldQuestionMark, S as ShieldCheck, x as Sparkles, az as Clock, aA as ExternalLink } from "../_libs/lucide-react.mjs";
function ConfidenceBadge({ value }) {
  const pct = Math.round((value ?? 0) * 100);
  const tone = pct >= 80 ? "success" : pct >= 50 ? "info" : "warning";
  const cls = tone === "success" ? "text-success border-success/30 bg-success/10" : tone === "info" ? "text-primary-glow border-primary/30 bg-primary/10" : "text-warning border-warning/30 bg-warning/10";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${cls}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-2.5 w-2.5" }),
    " ",
    pct,
    "% conf"
  ] });
}
function VerificationBadge({ status }) {
  const map = {
    verified: { icon: ShieldCheck, label: "Verified", cls: "text-success border-success/30 bg-success/10" },
    pending: { icon: ShieldQuestionMark, label: "Pending", cls: "text-primary-glow border-primary/30 bg-primary/10" },
    unverified: { icon: ShieldQuestionMark, label: "Unverified", cls: "text-muted-foreground border-border bg-surface" },
    rejected: { icon: ShieldAlert, label: "Rejected", cls: "text-destructive border-destructive/30 bg-destructive/10" }
  };
  const m = map[status] ?? map.unverified;
  const Icon = m.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${m.cls}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-2.5 w-2.5" }),
    " ",
    m.label
  ] });
}
function FreshnessIndicator({ score, fetchedAt }) {
  const fresh = score >= 0.7;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-2.5 w-2.5" }),
    fresh ? "fresh" : "stale",
    " · ",
    fetchedAt ? new Date(fetchedAt).toLocaleDateString() : "—"
  ] });
}
function SourcePill({ title, url }) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex max-w-[14rem] items-center gap-1 truncate rounded-full border border-border bg-surface/60 px-2 py-0.5 text-[11px] hover:border-primary/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-2.5 w-2.5 shrink-0 text-muted-foreground" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: title })
  ] });
  return url ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: url, target: "_blank", rel: "noreferrer", children: inner }) : inner;
}
function MetricCard({ label, value, unit, status, hint, icon: Icon }) {
  const tone = status === "critical" ? "text-destructive" : status === "warning" ? "text-warning" : status === "healthy" ? "text-success" : "text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: label }),
      Icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 ${tone}` }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-semibold tabular-nums", children: value }),
      unit ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: unit }) : null
    ] }),
    hint ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[11px] text-muted-foreground", children: hint }) : null
  ] });
}
export {
  ConfidenceBadge as C,
  FreshnessIndicator as F,
  MetricCard as M,
  SourcePill as S,
  VerificationBadge as V
};
