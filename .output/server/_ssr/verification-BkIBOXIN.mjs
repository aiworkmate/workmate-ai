import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { a as useAuth } from "./router-klMIKaP_.mjs";
import { P as PageHeader, S as StatusPill, E as EmptyState } from "./page-primitives-DcyYmWt_.mjs";
import { V as VerificationBadge, C as ConfidenceBadge, S as SourcePill } from "./trust-badges-DVP8JFeY.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";
import { S as ShieldCheck } from "../_libs/lucide-react.mjs";

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




function VerificationPage() {
  const {
    user
  } = useAuth();
  const {
    data = []
  } = useQuery({
    queryKey: ["verification_logs", user?.id],
    enabled: !!user,
    queryFn: async () => (await supabase.from("verification_logs").select("*").order("verified_at", {
      ascending: false
    }).limit(100)).data ?? []
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Reality check", title: "Verification log", description: "Every claim the assistant checks against an external source is recorded with confidence and provenance.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(StatusPill, { tone: "info", children: [
      data.length,
      " entries"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: ShieldCheck, title: "No verifications yet", description: "As the assistant cites and checks facts, entries appear here so you can audit confidence and evidence." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: data.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-xl border border-border bg-card p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(VerificationBadge, { status: v.verdict }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBadge, { value: v.confidence }),
        v.source && /* @__PURE__ */ jsxRuntimeExports.jsx(SourcePill, { title: v.source }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto font-mono text-[10px] text-muted-foreground", children: new Date(v.verified_at).toLocaleString() })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-medium", children: v.claim }),
      v.evidence && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: v.evidence })
    ] }, v.id)) }) })
  ] });
}
export {
  VerificationPage as component
};
