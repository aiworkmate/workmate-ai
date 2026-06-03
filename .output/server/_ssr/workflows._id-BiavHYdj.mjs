import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { P as PageHeader, S as StatusPill } from "./page-primitives-DcyYmWt_.mjs";
import { A as ApiNotConfiguredError, e as endpoints } from "./endpoints-CCL68eY6.mjs";
import { A as ApiNotConfigured } from "./empty-states-BWhPl7jq.mjs";
import { R as Route$1 } from "./router-klMIKaP_.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";
import { an as ChevronLeft, y as Pause, z as Play, v as ArrowRight, ao as Terminal, a5 as RotateCw, W as Workflow, ap as CircleDashed, L as LoaderCircle, aq as CircleX, ar as CircleCheck } from "../_libs/lucide-react.mjs";

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
import "./client.server-4MVRtmLM.mjs";
import "../_libs/zod.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




function WorkflowDetail() {
  const {
    id
  } = Route$1.useParams();
  const wf = useQuery({
    queryKey: ["workflow", id],
    queryFn: () => endpoints.workflows.get(id),
    retry: false
  });
  const runs = useQuery({
    queryKey: ["workflow", id, "runs"],
    queryFn: () => endpoints.workflows.runs(id, {
      page: 1,
      page_size: 20
    }),
    retry: false
  });
  const [selectedRun, setSelectedRun] = reactExports.useState(null);
  if (wf.error instanceof ApiNotConfiguredError) return /* @__PURE__ */ jsxRuntimeExports.jsx(ApiNotConfigured, { feature: "Workflows" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-6 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/workflows", className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-3.5 w-3.5" }),
      " All workflows"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Workflow", title: wf.data?.name ?? (wf.isLoading ? "Loading…" : "Workflow"), description: wf.data?.description ?? "", actions: wf.data && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: wf.data.status === "active" ? "success" : "neutral", children: wf.data.status }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-sm hover:bg-accent", children: [
        wf.data.status === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3.5 w-3.5" }),
        wf.data.status === "active" ? "Pause" : "Activate"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 p-6 lg:grid-cols-[1.4fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold", children: "Pipeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap items-stretch gap-2", children: (wf.data?.steps ?? placeholderSteps).map((s, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StepChip, { step: s }),
          i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 text-muted-foreground" })
        ] }, s.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "Workflow steps are defined and executed by the backend orchestrator. This panel is read-only in v1." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-5 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold", children: "Execution history" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: [
            runs.data?.total ?? 0,
            " total"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[420px] divide-y divide-border overflow-y-auto scrollbar-thin", children: [
          runs.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 text-xs text-muted-foreground", children: "Loading runs…" }),
          !runs.isLoading && (runs.data?.items.length ?? 0) === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 text-xs text-muted-foreground", children: "No runs yet." }),
          runs.data?.items.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelectedRun(r), className: `flex w-full items-center gap-3 px-5 py-3 text-left text-sm transition hover:bg-accent/40 ${selectedRun?.id === r.id ? "bg-accent/30" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RunIcon, { status: r.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs", children: r.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
                new Date(r.started_at).toLocaleString(),
                r.duration_ms ? ` · ${Math.round(r.duration_ms)}ms` : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: runTone(r.status), children: r.status })
          ] }, r.id))
        ] })
      ] }),
      selectedRun && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "lg:col-span-2 rounded-xl border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-5 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-3.5 w-3.5 text-primary-glow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-sm font-semibold", children: [
              "Run logs · ",
              selectedRun.id
            ] })
          ] }),
          selectedRun.status === "failed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1 text-xs hover:bg-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "h-3 w-3" }),
            " Retry"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "max-h-80 overflow-auto scrollbar-thin p-4 font-mono text-[11px] leading-relaxed text-muted-foreground", children: (selectedRun.logs ?? []).map((l) => `[${l.ts}] ${l.level.toUpperCase().padEnd(5)} ${l.message}`).join("\n") || "No logs available for this run." })
      ] })
    ] })
  ] });
}
const placeholderSteps = [{
  id: "1",
  type: "trigger",
  name: "Trigger"
}, {
  id: "2",
  type: "action",
  name: "Action"
}];
function StepChip({
  step
}) {
  const tone = step.type === "trigger" ? "bg-primary/15 text-primary-glow border-primary/30" : step.type === "condition" ? "bg-warning/15 text-warning border-warning/30" : "bg-surface-elevated text-foreground border-border";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 rounded-md border px-3 py-2 text-xs ${tone}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "h-3 w-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: step.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase opacity-70", children: step.type })
  ] });
}
function RunIcon({
  status
}) {
  switch (status) {
    case "succeeded":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-success" });
    case "failed":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 text-destructive" });
    case "running":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin text-primary-glow" });
    default:
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleDashed, { className: "h-4 w-4 text-muted-foreground" });
  }
}
function runTone(s) {
  if (s === "succeeded") return "success";
  if (s === "failed") return "danger";
  if (s === "running") return "info";
  return "neutral";
}
export {
  WorkflowDetail as component
};
