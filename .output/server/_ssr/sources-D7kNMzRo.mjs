import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { a as useAuth } from "./router-klMIKaP_.mjs";
import { P as PageHeader, S as StatusPill, E as EmptyState } from "./page-primitives-DcyYmWt_.mjs";
import { S as SourcePill, V as VerificationBadge, F as FreshnessIndicator } from "./trust-badges-DVP8JFeY.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";
import { j as Search, G as Globe } from "../_libs/lucide-react.mjs";

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




function SourcesPage() {
  const {
    user
  } = useAuth();
  const [q, setQ] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("all");
  const {
    data = []
  } = useQuery({
    queryKey: ["sources", user?.id],
    enabled: !!user,
    queryFn: async () => (await supabase.from("sources").select("*").order("fetched_at", {
      ascending: false
    }).limit(200)).data ?? []
  });
  const filtered = data.filter((s) => {
    if (q && !`${s.title} ${s.snippet}`.toLowerCase().includes(q.toLowerCase())) return false;
    if (filter === "verified" && !s.is_verified) return false;
    if (filter === "fresh" && s.freshness_score < 0.7) return false;
    return true;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Provenance ledger", title: "Sources", description: "Every citation pulled into your work. Filter by freshness and verification to keep responses grounded.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(StatusPill, { tone: "info", children: [
      data.length,
      " indexed"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[200px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search sources…", className: "w-full rounded-md border border-input bg-surface/60 py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring/40" })
        ] }),
        ["all", "verified", "fresh"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `rounded-md border px-3 py-2 text-xs font-medium uppercase tracking-wider ${filter === f ? "border-primary/40 bg-primary/10 text-primary-glow" : "border-border bg-surface/60 text-muted-foreground hover:text-foreground"}`, children: f }, f))
      ] }),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Globe, title: "No sources yet", description: "Sources accumulate automatically as the assistant gathers and cites information for you." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: filtered.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-xl border border-border bg-card p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-surface-elevated text-primary-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SourcePill, { title: s.title, url: s.url ?? void 0 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(VerificationBadge, { status: s.is_verified ? "verified" : "unverified" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FreshnessIndicator, { score: s.freshness_score, fetchedAt: s.fetched_at })
          ] }),
          s.snippet && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 line-clamp-2 text-sm text-muted-foreground", children: s.snippet })
        ] })
      ] }) }, s.id)) })
    ] })
  ] });
}
export {
  SourcesPage as component
};
