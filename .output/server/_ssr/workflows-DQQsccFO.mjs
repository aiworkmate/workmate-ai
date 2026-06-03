import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { P as PageHeader, S as StatusPill } from "./page-primitives-DcyYmWt_.mjs";
import { A as ApiNotConfiguredError, e as endpoints } from "./endpoints-CCL68eY6.mjs";
import { A as ApiNotConfigured, E as EmptyState } from "./empty-states-BWhPl7jq.mjs";
import { u as useTenant } from "./tenant-D9dS_u-I.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";
import { W as Workflow, y as Pause, z as Play, w as ArrowUpRight, T as TriangleAlert } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "./client-Bjnmba1k.mjs";
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
import "./router-klMIKaP_.mjs";
import "./client.server-4MVRtmLM.mjs";
import "../_libs/zod.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




function WorkflowsPage() {
  const {
    ready
  } = useTenant();
  const q = useQuery({
    queryKey: ["workflows"],
    queryFn: () => endpoints.workflows.list(),
    enabled: ready,
    retry: false
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Automation", title: "Workflows", description: "Triggers + actions executed by the backend orchestrator. Permission- and workspace-aware end to end.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "h-3.5 w-3.5" }),
      " New workflow"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: q.error instanceof ApiNotConfiguredError ? /* @__PURE__ */ jsxRuntimeExports.jsx(ApiNotConfigured, { feature: "Workflows" }) : q.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonGrid, {}) : (q.data ?? []).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Workflow, title: "No workflows yet", description: "Create a workflow to trigger actions on conversations, uploads, or schedules." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: q.data.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(WorkflowCard, { w }, w.id)) }) })
  ] });
}
function WorkflowCard({
  w
}) {
  const failureRate = w.runs_total ? Math.round((w.runs_failed ?? 0) / w.runs_total * 1e3) / 10 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/workflows/$id", params: {
    id: w.id
  }, className: "group flex flex-col rounded-xl border border-border bg-card p-5 transition hover:border-primary/40 hover:bg-card/80", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-lg bg-surface-elevated text-primary-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: w.status === "active" ? "success" : w.status === "paused" ? "neutral" : "warning", children: w.status })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-display text-base font-semibold leading-tight", children: w.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground line-clamp-2", children: w.description || "No description" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Trigger", value: w.trigger, mono: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Runs", value: (w.runs_total ?? 0).toLocaleString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Failures", value: `${failureRate}%`, tone: failureRate > 5 ? "warn" : "ok" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: (e) => e.preventDefault(), className: "grid h-8 w-8 place-items-center rounded-md border border-border bg-surface hover:bg-accent", title: w.status === "active" ? "Pause" : "Activate", children: w.status === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3.5 w-3.5 text-success" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground", children: [
        "View runs ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
      ] })
    ] })
  ] });
}
function Stat({
  label,
  value,
  mono,
  tone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-0.5 truncate ${mono ? "font-mono text-[11px]" : "text-sm"} ${tone === "warn" ? "text-warning" : ""}`, children: [
      tone === "warn" && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mr-1 inline h-3 w-3" }),
      value
    ] })
  ] });
}
function SkeletonGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: Array.from({
    length: 6
  }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-44 animate-pulse rounded-xl border border-border bg-card/40" }, i)) });
}
export {
  WorkflowsPage as component
};
