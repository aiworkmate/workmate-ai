import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { a as useAuth } from "./router-klMIKaP_.mjs";
import { P as PageHeader, S as StatusPill } from "./page-primitives-DcyYmWt_.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";
import { M as MessageSquare, b as Brain, c as FileText, W as Workflow, w as ArrowUpRight, x as Sparkles, S as ShieldCheck, A as Activity } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
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
import "./client.server-4MVRtmLM.mjs";
import "../_libs/zod.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




function OverviewPage() {
  const {
    user,
    profile
  } = useAuth();
  const {
    data: stats
  } = useQuery({
    queryKey: ["overview", user?.id],
    queryFn: async () => {
      const [c, m, u] = await Promise.all([supabase.from("conversations").select("id", {
        count: "exact",
        head: true
      }), supabase.from("memories").select("id", {
        count: "exact",
        head: true
      }), supabase.from("uploads").select("id", {
        count: "exact",
        head: true
      })]);
      return {
        conversations: c.count ?? 0,
        memories: m.count ?? 0,
        uploads: u.count ?? 0
      };
    },
    enabled: !!user
  });
  const cards = [{
    label: "Conversations",
    value: stats?.conversations ?? 0,
    icon: MessageSquare,
    to: "/app/chat",
    trend: "+12% vs last week"
  }, {
    label: "Memories",
    value: stats?.memories ?? 0,
    icon: Brain,
    to: "/app/memory",
    trend: "Pinned: 3"
  }, {
    label: "Documents",
    value: stats?.uploads ?? 0,
    icon: FileText,
    to: "/app/uploads",
    trend: "Ready to retrieve"
  }, {
    label: "Active workflows",
    value: 4,
    icon: Workflow,
    to: "/app/workflows",
    trend: "2 ran today"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Operator console", title: `Welcome back, ${profile?.display_name?.split(" ")[0] ?? "there"}.`, description: "Your secure AI operating system at a glance.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "success", children: "All systems nominal" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-4", children: cards.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: "group rounded-xl border border-border bg-card p-5 shadow-elevated transition hover:border-primary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-lg bg-surface-elevated text-primary-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground transition group-hover:text-primary-glow" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-display text-3xl font-semibold tabular-nums", children: c.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-medium text-muted-foreground", children: c.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70", children: c.trend })
    ] }, c.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 px-6 pb-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "Quickstart" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 font-display text-lg font-semibold", children: "Spin up your first secure conversation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary-glow" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Conversations are persisted with row-level security. Memory and tool calls run through the backend orchestrator — never in the browser." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/chat", className: "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }),
            " Start a chat"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/uploads", className: "inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm hover:bg-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }),
            " Upload a document"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/workflows", className: "inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm hover:bg-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "h-4 w-4" }),
            " Browse workflows"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold", children: "Security posture" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Row-level security" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "success", children: "Enforced" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Audit log streaming" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "success", children: "Live" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Tenant isolation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "success", children: "Per-org" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "PII redaction" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "info", children: "Adaptive" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 text-primary-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold", children: "Recent activity" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border text-sm", children: [{
        t: "2m ago",
        e: "Memory promoted to pinned",
        d: "Q3 OKR — clinical ops"
      }, {
        t: "14m ago",
        e: "Workflow run completed",
        d: "intake-triage · 312ms"
      }, {
        t: "1h ago",
        e: "Document indexed",
        d: "policy-v3.pdf · 24 chunks"
      }, {
        t: "3h ago",
        e: "Role updated",
        d: "j.lopez → admin"
      }].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate font-medium", children: row.e }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: row.d })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] text-muted-foreground", children: row.t })
      ] }, row.t)) })
    ] }) })
  ] });
}
export {
  OverviewPage as component
};
