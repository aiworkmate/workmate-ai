import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as useQueryClient, u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { a as useAuth } from "./router-klMIKaP_.mjs";
import { P as PageHeader, E as EmptyState, S as StatusPill } from "./page-primitives-DcyYmWt_.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";
import { P as Plus, F as FolderKanban, Q as Pin, w as ArrowUpRight } from "../_libs/lucide-react.mjs";

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




const COLORS = ["violet", "sky", "emerald", "amber", "rose", "cyan", "indigo", "lime"];
const HUE = {
  violet: 300,
  sky: 240,
  emerald: 160,
  amber: 80,
  rose: 20,
  cyan: 200,
  indigo: 280,
  lime: 130
};
function ProjectsPage() {
  const {
    user
  } = useAuth();
  const qc = useQueryClient();
  const [showNew, setShowNew] = reactExports.useState(false);
  const [name, setName] = reactExports.useState("");
  const [desc, setDesc] = reactExports.useState("");
  const [color, setColor] = reactExports.useState("violet");
  const {
    data: projects = []
  } = useQuery({
    queryKey: ["projects", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("projects").select("id, name, description, color, status, is_pinned, updated_at").order("is_pinned", {
        ascending: false
      }).order("updated_at", {
        ascending: false
      });
      if (error) throw error;
      return data ?? [];
    }
  });
  async function create() {
    if (!name.trim() || !user) return;
    const {
      error
    } = await supabase.from("projects").insert({
      user_id: user.id,
      name: name.trim(),
      description: desc.trim() || null,
      color
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    setName("");
    setDesc("");
    setShowNew(false);
    qc.invalidateQueries({
      queryKey: ["projects"]
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Project operating system", title: "Projects", description: "First-class workspaces with goals, tasks, memory, sources, and decisions.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowNew((v) => !v), className: "inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
      " New project"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 p-6", children: [
      showNew && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "New project" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid gap-3 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "Project name", className: "rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: desc, onChange: (e) => setDesc(e.target.value), placeholder: "Short description", className: "rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "Accent" }),
          COLORS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setColor(c), className: `h-5 w-5 rounded-full border-2 transition ${color === c ? "border-foreground" : "border-transparent"}`, style: {
            background: `oklch(0.7 0.15 ${HUE[c]})`
          } }, c)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: create, className: "ml-auto rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-glow", children: "Create" })
        ] })
      ] }),
      projects.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: FolderKanban, title: "No projects yet", description: "Projects organize chats, goals, tasks, notes, decisions, memory, and sources around real work.", action: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowNew(true), className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow", children: "Create your first project" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/projects/$id", params: {
        id: p.id
      }, className: "group rounded-xl border border-border bg-card p-5 transition hover:border-primary/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full", style: {
              background: `oklch(0.7 0.15 ${HUE[p.color] ?? 300})`
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: p.status === "active" ? "success" : p.status === "paused" ? "warning" : "neutral", children: p.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            p.is_pinned && /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: "h-3.5 w-3.5 text-primary-glow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground transition group-hover:text-primary-glow" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-lg font-semibold", children: p.name }),
        p.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 line-clamp-2 text-sm text-muted-foreground", children: p.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: [
          "updated ",
          new Date(p.updated_at).toLocaleDateString()
        ] })
      ] }, p.id)) })
    ] })
  ] });
}
export {
  ProjectsPage as component
};
