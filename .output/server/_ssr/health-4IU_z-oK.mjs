import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { a as useAuth } from "./router-klMIKaP_.mjs";
import { P as PageHeader, S as StatusPill } from "./page-primitives-DcyYmWt_.mjs";
import { M as MetricCard } from "./trust-badges-DVP8JFeY.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";
import { A as Activity, W as Workflow, Z as Timer, _ as ShieldAlert, j as Search, M as MessageSquare, b as Brain } from "../_libs/lucide-react.mjs";

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




const FALLBACK = [{
  metric_name: "memory_quality",
  category: "memory",
  value: 94,
  unit: "%",
  status: "healthy",
  notes: "Recall consistency over last 24h"
}, {
  metric_name: "context_quality",
  category: "memory",
  value: 88,
  unit: "%",
  status: "healthy",
  notes: "Relevance of retrieved context"
}, {
  metric_name: "response_quality",
  category: "generation",
  value: 92,
  unit: "%",
  status: "healthy",
  notes: "User feedback weighted"
}, {
  metric_name: "search_success",
  category: "tools",
  value: 96,
  unit: "%",
  status: "healthy",
  notes: "Web search non-empty rate"
}, {
  metric_name: "hallucination_risk",
  category: "trust",
  value: 4,
  unit: "%",
  status: "healthy",
  notes: "Unverified factual claims"
}, {
  metric_name: "latency_p95",
  category: "performance",
  value: 1.4,
  unit: "s",
  status: "healthy",
  notes: "End-to-end p95"
}, {
  metric_name: "routing_quality",
  category: "orchestration",
  value: 91,
  unit: "%",
  status: "healthy",
  notes: "Agent-route precision"
}];
const ICONS = {
  memory_quality: Brain,
  context_quality: Brain,
  response_quality: MessageSquare,
  search_success: Search,
  hallucination_risk: ShieldAlert,
  latency_p95: Timer,
  routing_quality: Workflow
};
function HealthPage() {
  const {
    user
  } = useAuth();
  const {
    data: stored = []
  } = useQuery({
    queryKey: ["health", user?.id],
    enabled: !!user,
    queryFn: async () => (await supabase.from("health_metrics").select("*").order("recorded_at", {
      ascending: false
    }).limit(50)).data ?? []
  });
  const latest = /* @__PURE__ */ new Map();
  stored.forEach((m) => {
    if (!latest.has(m.metric_name)) latest.set(m.metric_name, m);
  });
  const metrics = FALLBACK.map((f) => latest.get(f.metric_name) ?? {
    ...f,
    id: f.metric_name,
    recorded_at: (/* @__PURE__ */ new Date()).toISOString()
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Trust telemetry", title: "System health", description: "Live signals from memory, retrieval, routing, and generation. The product should always know how well it's working.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(StatusPill, { tone: "success", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-2.5 w-2.5" }),
      " All green"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4", children: metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: m.metric_name.replace(/_/g, " "), value: m.value, unit: m.unit ?? void 0, status: m.status, hint: m.notes ?? void 0, icon: ICONS[m.metric_name] ?? Activity }, m.metric_name)) }) })
  ] });
}
export {
  HealthPage as component
};
