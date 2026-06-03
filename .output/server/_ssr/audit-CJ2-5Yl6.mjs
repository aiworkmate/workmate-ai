import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { P as PageHeader, S as StatusPill } from "./page-primitives-DcyYmWt_.mjs";
import { e as endpoints, A as ApiNotConfiguredError } from "./endpoints-CCL68eY6.mjs";
import { A as ApiNotConfigured } from "./empty-states-BWhPl7jq.mjs";
import { j as Search, X } from "../_libs/lucide-react.mjs";

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
function AuditPage() {
  const [search, setSearch] = reactExports.useState("");
  const [action, setAction] = reactExports.useState("");
  const [resource, setResource] = reactExports.useState("");
  const [page, setPage] = reactExports.useState(1);
  const [selected, setSelected] = reactExports.useState(null);
  const q = useQuery({
    queryKey: ["audit", {
      search,
      action,
      resource,
      page
    }],
    queryFn: () => endpoints.audit.list({
      search,
      action,
      resource_type: resource,
      page,
      page_size: 25
    }),
    retry: false
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Compliance", title: "Audit logs", description: "Tamper-evident trail of every privileged action across this workspace." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 border-b border-border px-6 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: search, onChange: (e) => {
          setSearch(e.target.value);
          setPage(1);
        }, placeholder: "Search actor, resource…", className: "w-64 rounded-md border border-input bg-surface/60 py-1.5 pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring/40" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: action, onChange: (e) => {
        setAction(e.target.value);
        setPage(1);
      }, placeholder: "Action e.g. workflow.run", className: "rounded-md border border-input bg-surface/60 py-1.5 px-3 text-sm outline-none focus:ring-2 focus:ring-ring/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: resource, onChange: (e) => {
        setResource(e.target.value);
        setPage(1);
      }, placeholder: "Resource type", className: "rounded-md border border-input bg-surface/60 py-1.5 px-3 text-sm outline-none focus:ring-2 focus:ring-ring/40" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: q.error instanceof ApiNotConfiguredError ? /* @__PURE__ */ jsxRuntimeExports.jsx(ApiNotConfigured, { feature: "Audit logs" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-surface text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2", children: "When" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2", children: "Actor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2", children: "Action" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2", children: "Resource" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-border", children: [
          q.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "px-4 py-8 text-center text-xs text-muted-foreground", children: "Loading…" }) }),
          !q.isLoading && (q.data?.items.length ?? 0) === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "px-4 py-8 text-center text-xs text-muted-foreground", children: "No events." }) }),
          q.data?.items.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "cursor-pointer hover:bg-accent/30", onClick: () => setSelected(e), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-mono text-[11px] text-muted-foreground", children: new Date(e.ts).toLocaleString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: e.actor.display_name ?? e.actor.email }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: e.actor.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-muted/50 px-1.5 py-0.5 font-mono text-[11px]", children: e.action }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2 text-xs", children: [
              e.resource_type,
              e.resource_id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                " · ",
                e.resource_id.slice(0, 8)
              ] }) : null
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "neutral", children: "view" }) })
          ] }, e.id))
        ] })
      ] }),
      q.data && q.data.total > q.data.page_size && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border px-4 py-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Page ",
          q.data.page,
          " of ",
          Math.ceil(q.data.total / q.data.page_size)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: page <= 1, onClick: () => setPage((p) => p - 1), className: "rounded border border-border px-2 py-1 disabled:opacity-40", children: "Prev" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: page >= Math.ceil(q.data.total / q.data.page_size), onClick: () => setPage((p) => p + 1), className: "rounded border border-border px-2 py-1 disabled:opacity-40", children: "Next" })
        ] })
      ] })
    ] }) }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx(EventModal, { event: selected, onClose: () => setSelected(null) })
  ] });
}
function EventModal({
  event,
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 grid place-items-center bg-background/70 backdrop-blur", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: (e) => e.stopPropagation(), className: "w-full max-w-xl overflow-hidden rounded-xl border border-border bg-card shadow-elevated", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-5 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-semibold", children: "Event detail" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "grid h-7 w-7 place-items-center rounded-md hover:bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-5 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Action", value: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded bg-muted/50 px-1.5 py-0.5 font-mono text-xs", children: event.action }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "When", value: new Date(event.ts).toLocaleString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Actor", value: `${event.actor.display_name ?? event.actor.email} (${event.actor.email})` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Resource", value: `${event.resource_type}${event.resource_id ? " · " + event.resource_id : ""}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Workspace", value: event.workspace_id ?? "—" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: "Metadata" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-1 max-h-60 overflow-auto rounded-md border border-border bg-surface p-3 font-mono text-[11px]", children: JSON.stringify(event.metadata ?? {}, null, 2) })
      ] })
    ] })
  ] }) });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[120px_1fr] items-baseline gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: value })
  ] });
}
export {
  AuditPage as component
};
