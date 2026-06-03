import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useQueryClient, u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { a as useAuth } from "./router-klMIKaP_.mjs";
import { P as PageHeader, S as StatusPill, E as EmptyState } from "./page-primitives-DcyYmWt_.mjs";
import { C as ConfidenceBadge, V as VerificationBadge } from "./trust-badges-DVP8JFeY.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";
import { P as Plus, j as Search, b as Brain, Q as Pin, R as Archive, E as Trash2 } from "../_libs/lucide-react.mjs";

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




const LAYER_DESC = {
  working: "Active in this turn — short-lived working set.",
  session: "Lasts this session — scratchpad context.",
  project: "Scoped to a project — pulled in when working on it.",
  user: "About you — preferences and facts that persist.",
  knowledge: "Domain knowledge — operational know-how.",
  archive: "Cold storage — preserved but not retrieved by default."
};
function MemoryPage() {
  const {
    user
  } = useAuth();
  const qc = useQueryClient();
  const [q, setQ] = reactExports.useState("");
  const [draft, setDraft] = reactExports.useState("");
  const [layer, setLayer] = reactExports.useState("all");
  const [draftLayer, setDraftLayer] = reactExports.useState("user");
  const {
    data: memories = []
  } = useQuery({
    queryKey: ["memories", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const {
        data
      } = await supabase.from("memories").select("id, content, category, pinned, confidence, updated_at, layer, verified, importance, source, tags, project_id").order("pinned", {
        ascending: false
      }).order("updated_at", {
        ascending: false
      });
      return data ?? [];
    }
  });
  const filtered = memories.filter((m) => {
    if (q && !m.content.toLowerCase().includes(q.toLowerCase())) return false;
    if (layer !== "all" && m.layer !== layer) return false;
    return true;
  });
  const counts = memories.reduce((acc, m) => {
    acc[m.layer] = (acc[m.layer] ?? 0) + 1;
    return acc;
  }, {});
  async function addMemory() {
    if (!draft.trim() || !user) return;
    const {
      error
    } = await supabase.from("memories").insert({
      user_id: user.id,
      content: draft.trim(),
      category: "general",
      layer: draftLayer
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    setDraft("");
    qc.invalidateQueries({
      queryKey: ["memories"]
    });
  }
  async function togglePin(m) {
    await supabase.from("memories").update({
      pinned: !m.pinned
    }).eq("id", m.id);
    qc.invalidateQueries({
      queryKey: ["memories"]
    });
  }
  async function archive(id) {
    await supabase.from("memories").update({
      layer: "archive"
    }).eq("id", id);
    qc.invalidateQueries({
      queryKey: ["memories"]
    });
  }
  async function removeMemory(id) {
    await supabase.from("memories").delete().eq("id", id);
    qc.invalidateQueries({
      queryKey: ["memories"]
    });
  }
  const LAYERS = [{
    id: "all",
    label: "All"
  }, {
    id: "working",
    label: "Working"
  }, {
    id: "session",
    label: "Session"
  }, {
    id: "project",
    label: "Project"
  }, {
    id: "user",
    label: "User"
  }, {
    id: "knowledge",
    label: "Knowledge"
  }, {
    id: "archive",
    label: "Archive"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Memory operating system", title: "Memory Center", description: "What the orchestrator can recall on your behalf — organized by layer, ranked by confidence and importance.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(StatusPill, { tone: "info", children: [
      memories.length,
      " entries"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "Capture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: draft, onChange: (e) => setDraft(e.target.value), onKeyDown: (e) => {
            if (e.key === "Enter") addMemory();
          }, placeholder: "e.g. Quarterly clinical-ops review is every second Wednesday.", className: "min-w-[200px] flex-1 rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: draftLayer, onChange: (e) => setDraftLayer(e.target.value), className: "rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none", children: Object.keys(LAYER_DESC).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l, children: l }, l)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: addMemory, className: "inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
            " Save"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2", children: LAYERS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLayer(l.id), className: `rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition ${layer === l.id ? "border-primary/40 bg-primary/10 text-primary-glow" : "border-border bg-surface/60 text-muted-foreground hover:text-foreground"}`, children: [
        l.label,
        l.id !== "all" && counts[l.id] ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 font-mono text-[10px] text-muted-foreground", children: counts[l.id] }) : null
      ] }, l.id)) }),
      layer !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: LAYER_DESC[layer] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search memories…", className: "w-full rounded-md border border-input bg-surface/60 py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring/40" })
      ] }),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Brain, title: "No memories in this view", description: "Capture preferences, facts, and recurring context. Memory is layered so retrieval surfaces the right thing at the right time." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: filtered.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-xl border border-border bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "info", children: m.layer }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBadge, { value: m.confidence }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(VerificationBadge, { status: m.verified ? "verified" : "unverified" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => togglePin(m), title: "Pin", className: `grid h-7 w-7 place-items-center rounded-md hover:bg-accent ${m.pinned ? "text-primary-glow" : "text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => archive(m.id), title: "Archive", className: "grid h-7 w-7 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeMemory(m.id), title: "Delete", className: "grid h-7 w-7 place-items-center rounded-md text-muted-foreground opacity-0 transition hover:bg-accent hover:text-destructive group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm", children: m.content }),
        m.tags?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-1", children: m.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-surface/60 px-1.5 font-mono text-[10px]", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 font-mono text-[10px] text-muted-foreground", children: [
          "updated ",
          new Date(m.updated_at).toLocaleString(),
          m.source ? ` · ${m.source}` : ""
        ] })
      ] }, m.id)) })
    ] })
  ] });
}
export {
  MemoryPage as component
};
