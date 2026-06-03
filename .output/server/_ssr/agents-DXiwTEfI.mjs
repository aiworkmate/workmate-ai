import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { B as Bot, ag as Icons } from "../_libs/lucide-react.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { P as PageHeader, S as StatusPill, E as EmptyState } from "./page-primitives-DcyYmWt_.mjs";

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
const ACCENT_HUE = {
  violet: 300,
  sky: 240,
  emerald: 160,
  amber: 80,
  rose: 20,
  cyan: 200,
  indigo: 280,
  lime: 130,
  teal: 180,
  slate: 250
};
function AgentsPage() {
  const {
    data = []
  } = useQuery({
    queryKey: ["agent_definitions"],
    queryFn: async () => (await supabase.from("agent_definitions").select("*").order("label")).data ?? []
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Agent orchestration", title: "Specialist agents", description: "Routing happens behind the scenes — these specialists collaborate to answer with the right expertise.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "info", children: "Auto-routed" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Bot, title: "No agents available", description: "Agent roster is provisioned at the workspace level." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: data.map((a) => {
      const Icon = Icons[a.icon ?? "Bot"] ?? Bot;
      const hue = ACCENT_HUE[a.accent] ?? 300;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-xl border border-border bg-card p-5 transition hover:border-primary/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg", style: {
            background: `oklch(0.7 0.15 ${hue} / 0.15)`,
            color: `oklch(0.85 0.12 ${hue})`
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: a.status === "active" ? "success" : "neutral", children: a.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-base font-semibold", children: a.label }),
        a.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 line-clamp-2 text-sm text-muted-foreground", children: a.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-3 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground tabular-nums", children: a.total_invocations }),
            "runs"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-foreground tabular-nums", children: [
              a.avg_latency_ms,
              "ms"
            ] }),
            "latency"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-foreground tabular-nums", children: [
              Math.round((a.success_rate ?? 0) * 100),
              "%"
            ] }),
            "success"
          ] })
        ] }),
        a.routing_keywords?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1", children: a.routing_keywords.slice(0, 5).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-surface/60 px-2 py-0.5 font-mono text-[10px]", children: k }, k)) })
      ] }, a.id);
    }) }) })
  ] });
}
export {
  AgentsPage as component
};
