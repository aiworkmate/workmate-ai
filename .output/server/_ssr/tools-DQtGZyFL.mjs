import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useQueryClient, u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { a as useAuth } from "./router-klMIKaP_.mjs";
import { P as PageHeader, S as StatusPill } from "./page-primitives-DcyYmWt_.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";
import { j as Search, c as FileText, H as Mail, I as Calendar, J as Briefcase, K as Database, N as Github, O as Cloud, d as Plug, P as Plus } from "../_libs/lucide-react.mjs";

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




const CATALOG = [{
  tool_type: "web_search",
  name: "Web Search",
  description: "Live web retrieval with citations and freshness checks.",
  icon: Search
}, {
  tool_type: "documents",
  name: "Documents",
  description: "Read/write across your uploaded knowledge corpus.",
  icon: FileText
}, {
  tool_type: "email",
  name: "Email",
  description: "Read inbox, draft replies, send messages.",
  icon: Mail
}, {
  tool_type: "calendar",
  name: "Calendar",
  description: "Read events, create holds, propose times.",
  icon: Calendar
}, {
  tool_type: "crm",
  name: "CRM",
  description: "Sync accounts, contacts, deals, activity.",
  icon: Briefcase
}, {
  tool_type: "database",
  name: "Database",
  description: "Run scoped queries against connected datasets.",
  icon: Database
}, {
  tool_type: "github",
  name: "GitHub",
  description: "Read repos, open issues, review PRs.",
  icon: Github
}, {
  tool_type: "cloud_storage",
  name: "Cloud Storage",
  description: "Browse and ingest files from Drive / Dropbox / S3.",
  icon: Cloud
}];
function ToolsPage() {
  const {
    user
  } = useAuth();
  const qc = useQueryClient();
  const {
    data: connections = []
  } = useQuery({
    queryKey: ["tool_connections", user?.id],
    enabled: !!user,
    queryFn: async () => (await supabase.from("tool_connections").select("*")).data ?? []
  });
  async function connect(t) {
    if (!user) return;
    const existing = connections.find((c) => c.tool_type === t.tool_type);
    if (existing) {
      await supabase.from("tool_connections").update({
        status: existing.status === "connected" ? "disconnected" : "connected"
      }).eq("id", existing.id);
    } else {
      const {
        error
      } = await supabase.from("tool_connections").insert({
        user_id: user.id,
        name: t.name,
        tool_type: t.tool_type,
        description: t.description,
        status: "connected"
      });
      if (error) {
        toast.error(error.message);
        return;
      }
    }
    qc.invalidateQueries({
      queryKey: ["tool_connections"]
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Universal tool layer", title: "Tool connections", description: "Safely connect the assistant to your work surface. Provenance and status surface in every response." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: CATALOG.map((t) => {
      const conn = connections.find((c) => c.tool_type === t.tool_type);
      const status = conn?.status ?? "disconnected";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-surface-elevated text-primary-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: status === "connected" ? "success" : status === "error" ? "danger" : "neutral", children: status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-base font-semibold", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: t.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: conn ? `${conn.invocation_count} uses` : "not configured" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => connect(t), className: "inline-flex items-center gap-1 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium hover:bg-accent", children: status === "connected" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plug, { className: "h-3 w-3" }),
            " Disconnect"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }),
            " Connect"
          ] }) })
        ] })
      ] }, t.tool_type);
    }) }) })
  ] });
}
export {
  ToolsPage as component
};
