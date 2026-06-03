import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { P as PageHeader, S as StatusPill } from "./page-primitives-DcyYmWt_.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { a as useAuth } from "./router-klMIKaP_.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";
import { ae as Download, A as Activity, af as Zap, b as Brain, T as TriangleAlert } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__query-core.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/unenv.mjs";


import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/tslib.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "./client.server-4MVRtmLM.mjs";
import "../_libs/zod.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




const ranges = {
  "24h": 1,
  "7d": 7,
  "30d": 30,
  "90d": 90
};
function AnalyticsPage() {
  const {
    user
  } = useAuth();
  const [range, setRange] = reactExports.useState("7d");
  const since = reactExports.useMemo(() => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - ranges[range]);
    return d.toISOString();
  }, [range]);
  const outcomesQ = useQuery({
    queryKey: ["response_outcomes", user?.id, range],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("response_outcomes").select("id, intent, live_used, memory_hits, latency_ms, chars, was_fallback, created_at").gte("created_at", since).order("created_at", {
        ascending: true
      }).limit(1e3);
      if (error) throw error;
      return data ?? [];
    },
    enabled: !!user
  });
  const statsQ = useQuery({
    queryKey: ["routing_stats", user?.id],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("routing_stats").select("intent, live_used, success_count, failure_count, avg_latency_ms, last_used_at").order("last_used_at", {
        ascending: false
      }).limit(50);
      if (error) throw error;
      return data ?? [];
    },
    enabled: !!user
  });
  const outcomes = outcomesQ.data ?? [];
  const stats = statsQ.data ?? [];
  const kpis = reactExports.useMemo(() => {
    const n = outcomes.length;
    if (!n) return {
      total: 0,
      avgLatency: 0,
      fallbackRate: 0,
      liveRate: 0,
      avgMemHits: 0
    };
    const sumL = outcomes.reduce((s, o) => s + o.latency_ms, 0);
    const fb = outcomes.filter((o) => o.was_fallback).length;
    const live = outcomes.filter((o) => o.live_used).length;
    const mem = outcomes.reduce((s, o) => s + o.memory_hits, 0);
    return {
      total: n,
      avgLatency: Math.round(sumL / n),
      fallbackRate: fb / n * 100,
      liveRate: live / n * 100,
      avgMemHits: +(mem / n).toFixed(1)
    };
  }, [outcomes]);
  const series = reactExports.useMemo(() => {
    if (!outcomes.length) return [];
    const buckets = 24;
    const first = new Date(outcomes[0].created_at).getTime();
    const last = new Date(outcomes[outcomes.length - 1].created_at).getTime();
    const span = Math.max(last - first, 1);
    const acc = Array.from({
      length: buckets
    }, () => ({
      sum: 0,
      count: 0
    }));
    for (const o of outcomes) {
      const idx = Math.min(buckets - 1, Math.floor((new Date(o.created_at).getTime() - first) / span * buckets));
      acc[idx].sum += o.latency_ms;
      acc[idx].count += 1;
    }
    return acc.map((b) => b.count ? Math.round(b.sum / b.count) : 0);
  }, [outcomes]);
  const maxSeries = Math.max(1, ...series);
  const intentBreakdown = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const o of outcomes) map.set(o.intent, (map.get(o.intent) ?? 0) + 1);
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [outcomes]);
  const maxIntent = Math.max(1, ...intentBreakdown.map(([, v]) => v));
  function exportCsv() {
    const rows = [["created_at", "intent", "latency_ms", "memory_hits", "live_used", "was_fallback", "chars"], ...outcomes.map((o) => [o.created_at, o.intent, o.latency_ms, o.memory_hits, o.live_used, o.was_fallback, o.chars])];
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], {
      type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `aiworkmate-analytics-${range}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  const loading = outcomesQ.isLoading || statsQ.isLoading;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Self-improvement telemetry", title: "Analytics", description: "Live signal from the adaptive routing + memory pipeline.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-md border border-border bg-surface p-0.5", children: Object.keys(ranges).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setRange(r), className: `rounded px-2.5 py-1 text-xs font-medium ${range === r ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`, children: r }, r)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: exportCsv, disabled: !outcomes.length, className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-xs hover:bg-accent disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
        " Export"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 p-6 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { icon: Activity, label: "Responses", value: kpis.total.toLocaleString(), hint: loading ? "loading…" : `last ${range}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { icon: Zap, label: "Avg latency", value: `${kpis.avgLatency}ms`, hint: "end-to-end", tone: kpis.avgLatency < 1500 ? "success" : "warning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { icon: Brain, label: "Memory hits / resp", value: kpis.avgMemHits.toString(), hint: `${kpis.liveRate.toFixed(0)}% live data` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { icon: TriangleAlert, label: "Fallback rate", value: `${kpis.fallbackRate.toFixed(2)}%`, hint: "graceful errors", tone: kpis.fallbackRate < 2 ? "success" : "warning" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 px-6 pb-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-semibold", children: "Latency over time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "info", children: range })
        ] }),
        series.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyChart, { loading }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-48 items-end gap-1.5", children: series.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 rounded-t bg-gradient-to-t from-primary/30 to-primary-glow transition hover:opacity-80", style: {
            height: `${Math.max(4, v / maxSeries * 100)}%`
          }, title: `${v}ms` }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex justify-between font-mono text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "oldest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "median" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "newest" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 font-display text-sm font-semibold", children: "Intent distribution" }),
        intentBreakdown.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyChart, { loading }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: intentBreakdown.map(([name, count]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono truncate", children: name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground tabular-nums", children: count })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-1.5 overflow-hidden rounded bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-primary to-primary-glow", style: {
            width: `${count / maxIntent * 100}%`
          } }) })
        ] }, name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5 lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 font-display text-sm font-semibold", children: "Routing performance by intent" }),
        stats.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyChart, { loading, compact: true }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Intent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Live" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Success" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Failure" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Success rate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Avg latency" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2", children: "Last used" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: stats.map((s, i) => {
            const total = s.success_count + s.failure_count;
            const rate = total ? s.success_count / total * 100 : 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 font-mono", children: s.intent }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: s.live_used ? /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "success", children: "on" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "off" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 tabular-nums", children: s.success_count }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 tabular-nums text-muted-foreground", children: s.failure_count }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 pr-4 tabular-nums", children: [
                rate.toFixed(1),
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 pr-4 tabular-nums", children: [
                s.avg_latency_ms,
                "ms"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", children: new Date(s.last_used_at).toLocaleString() })
            ] }, i);
          }) })
        ] }) })
      ] })
    ] })
  ] });
}
function KpiCard({
  icon: Icon,
  label,
  value,
  hint,
  tone
}) {
  const toneClass = tone === "success" ? "text-success" : tone === "warning" ? "text-warning" : "text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-muted-foreground" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-2xl font-semibold tabular-nums", children: value }),
    hint && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-1 text-xs ${toneClass}`, children: hint })
  ] });
}
function EmptyChart({
  loading,
  compact
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid place-items-center rounded-lg border border-dashed border-border/60 ${compact ? "h-20" : "h-48"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-xs text-muted-foreground", children: loading ? "Loading telemetry…" : "No data yet. Send a few messages in chat to populate this view." }) });
}
export {
  AnalyticsPage as component
};
