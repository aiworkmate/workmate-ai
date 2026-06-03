import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as useQueryClient, u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { b as Route, a as useAuth } from "./router-klMIKaP_.mjs";
import { P as PageHeader, E as EmptyState, S as StatusPill } from "./page-primitives-DcyYmWt_.mjs";
import { V as VerificationBadge } from "./trust-badges-DVP8JFeY.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";
import { as as Target, at as Flag, au as ListTodo, av as StickyNote, aw as Gavel, c as FileText, b as Brain, G as Globe, ax as ArrowLeft, ar as CircleCheck, u as Circle, P as Plus } from "../_libs/lucide-react.mjs";

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




function ProjectDetail() {
  const {
    id
  } = Route.useParams();
  const {
    user
  } = useAuth();
  const qc = useQueryClient();
  const [tab, setTab] = reactExports.useState("overview");
  const {
    data: project
  } = useQuery({
    queryKey: ["project", id],
    enabled: !!user,
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("projects").select("*").eq("id", id).single();
      if (error) throw error;
      return data;
    }
  });
  const {
    data: counts
  } = useQuery({
    queryKey: ["project-counts", id],
    enabled: !!user,
    queryFn: async () => {
      const [g, m, t, n, d, f, mem, s] = await Promise.all([supabase.from("project_goals").select("id", {
        count: "exact",
        head: true
      }).eq("project_id", id), supabase.from("project_milestones").select("id", {
        count: "exact",
        head: true
      }).eq("project_id", id), supabase.from("tasks").select("id", {
        count: "exact",
        head: true
      }).eq("project_id", id), supabase.from("project_notes").select("id", {
        count: "exact",
        head: true
      }).eq("project_id", id), supabase.from("project_decisions").select("id", {
        count: "exact",
        head: true
      }).eq("project_id", id), supabase.from("documents").select("id", {
        count: "exact",
        head: true
      }).eq("project_id", id), supabase.from("memories").select("id", {
        count: "exact",
        head: true
      }).eq("project_id", id), supabase.from("sources").select("id", {
        count: "exact",
        head: true
      }).eq("project_id", id)]);
      return {
        goals: g.count ?? 0,
        milestones: m.count ?? 0,
        tasks: t.count ?? 0,
        notes: n.count ?? 0,
        decisions: d.count ?? 0,
        files: f.count ?? 0,
        memory: mem.count ?? 0,
        sources: s.count ?? 0
      };
    }
  });
  const tabs = [{
    id: "overview",
    label: "Overview",
    icon: Target
  }, {
    id: "goals",
    label: "Goals",
    icon: Target,
    count: counts?.goals
  }, {
    id: "milestones",
    label: "Milestones",
    icon: Flag,
    count: counts?.milestones
  }, {
    id: "tasks",
    label: "Tasks",
    icon: ListTodo,
    count: counts?.tasks
  }, {
    id: "notes",
    label: "Notes",
    icon: StickyNote,
    count: counts?.notes
  }, {
    id: "decisions",
    label: "Decisions",
    icon: Gavel,
    count: counts?.decisions
  }, {
    id: "files",
    label: "Files",
    icon: FileText,
    count: counts?.files
  }, {
    id: "memory",
    label: "Memory",
    icon: Brain,
    count: counts?.memory
  }, {
    id: "sources",
    label: "Sources",
    icon: Globe,
    count: counts?.sources
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Project workspace", title: project?.name ?? "Loading…", description: project?.description ?? void 0, actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/projects", className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-sm hover:bg-accent", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
      " All projects"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-10 flex gap-1 overflow-x-auto border-b border-border bg-background/80 px-6 backdrop-blur scrollbar-thin", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(t.id), className: `flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-3 text-sm transition ${tab === t.id ? "border-primary-glow text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "h-3.5 w-3.5" }),
      t.label,
      typeof t.count === "number" && t.count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-surface px-1.5 font-mono text-[10px]", children: t.count })
    ] }, t.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
      tab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsx(Overview, { projectId: id, counts }),
      tab === "goals" && /* @__PURE__ */ jsxRuntimeExports.jsx(Goals, { projectId: id, userId: user?.id, qc }),
      tab === "tasks" && /* @__PURE__ */ jsxRuntimeExports.jsx(Tasks, { projectId: id, userId: user?.id, qc }),
      tab === "milestones" && /* @__PURE__ */ jsxRuntimeExports.jsx(Milestones, { projectId: id, userId: user?.id, qc }),
      tab === "notes" && /* @__PURE__ */ jsxRuntimeExports.jsx(Notes, { projectId: id, userId: user?.id, qc }),
      tab === "decisions" && /* @__PURE__ */ jsxRuntimeExports.jsx(Decisions, { projectId: id, userId: user?.id, qc }),
      tab === "files" && /* @__PURE__ */ jsxRuntimeExports.jsx(Files, { projectId: id }),
      tab === "memory" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectMemory, { projectId: id }),
      tab === "sources" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectSources, { projectId: id })
    ] })
  ] });
}
function Overview({
  counts
}) {
  const cards = [{
    label: "Goals",
    value: counts?.goals ?? 0,
    icon: Target
  }, {
    label: "Milestones",
    value: counts?.milestones ?? 0,
    icon: Flag
  }, {
    label: "Tasks",
    value: counts?.tasks ?? 0,
    icon: ListTodo
  }, {
    label: "Notes",
    value: counts?.notes ?? 0,
    icon: StickyNote
  }, {
    label: "Decisions",
    value: counts?.decisions ?? 0,
    icon: Gavel
  }, {
    label: "Files",
    value: counts?.files ?? 0,
    icon: FileText
  }, {
    label: "Memory",
    value: counts?.memory ?? 0,
    icon: Brain
  }, {
    label: "Sources",
    value: counts?.sources ?? 0,
    icon: Globe
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4", children: cards.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: c.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-4 w-4 text-primary-glow" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-3xl font-semibold tabular-nums", children: c.value })
  ] }, c.label)) });
}
function QuickAdd({
  placeholder,
  onAdd
}) {
  const [v, setV] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: v, onChange: (e) => setV(e.target.value), onKeyDown: (e) => {
      if (e.key === "Enter" && v.trim()) {
        onAdd(v.trim()).then(() => setV(""));
      }
    }, placeholder, className: "flex-1 rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => v.trim() && onAdd(v.trim()).then(() => setV("")), className: "inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
      " Add"
    ] })
  ] });
}
function Goals({
  projectId,
  userId,
  qc
}) {
  const {
    data = []
  } = useQuery({
    queryKey: ["goals", projectId],
    enabled: !!userId,
    queryFn: async () => (await supabase.from("project_goals").select("*").eq("project_id", projectId).order("created_at", {
      ascending: false
    })).data ?? []
  });
  async function add(title) {
    if (!userId) return;
    const {
      error
    } = await supabase.from("project_goals").insert({
      user_id: userId,
      project_id: projectId,
      title
    });
    if (error) toast.error(error.message);
    qc.invalidateQueries({
      queryKey: ["goals", projectId]
    });
    qc.invalidateQueries({
      queryKey: ["project-counts", projectId]
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickAdd, { placeholder: "New goal…", onAdd: add }),
    data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Target, title: "No goals", description: "Outcomes the project is pursuing." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: data.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 rounded-lg border border-border bg-card p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-primary-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm", children: g.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: g.status === "done" ? "success" : "info", children: g.status })
    ] }, g.id)) })
  ] });
}
function Tasks({
  projectId,
  userId,
  qc
}) {
  const {
    data = []
  } = useQuery({
    queryKey: ["tasks", projectId],
    enabled: !!userId,
    queryFn: async () => (await supabase.from("tasks").select("*").eq("project_id", projectId).order("created_at", {
      ascending: false
    })).data ?? []
  });
  async function add(title) {
    if (!userId) return;
    const {
      error
    } = await supabase.from("tasks").insert({
      user_id: userId,
      project_id: projectId,
      title
    });
    if (error) toast.error(error.message);
    qc.invalidateQueries({
      queryKey: ["tasks", projectId]
    });
    qc.invalidateQueries({
      queryKey: ["project-counts", projectId]
    });
  }
  async function toggle(t) {
    const next = t.status === "done" ? "todo" : "done";
    await supabase.from("tasks").update({
      status: next
    }).eq("id", t.id);
    qc.invalidateQueries({
      queryKey: ["tasks", projectId]
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickAdd, { placeholder: "New task…", onAdd: add }),
    data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: ListTodo, title: "No tasks", description: "Goal → Plan → Execute → Verify → Improve." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: data.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 rounded-lg border border-border bg-card p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggle(t), className: "text-primary-glow", children: t.status === "done" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex-1 text-sm ${t.status === "done" ? "line-through text-muted-foreground" : ""}`, children: t.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: t.priority === "urgent" ? "danger" : t.priority === "high" ? "warning" : "neutral", children: t.priority }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VerificationBadge, { status: t.verification_status })
    ] }, t.id)) })
  ] });
}
function Milestones({
  projectId,
  userId,
  qc
}) {
  const {
    data = []
  } = useQuery({
    queryKey: ["milestones", projectId],
    enabled: !!userId,
    queryFn: async () => (await supabase.from("project_milestones").select("*").eq("project_id", projectId).order("due_date", {
      ascending: true,
      nullsFirst: false
    })).data ?? []
  });
  async function add(title) {
    if (!userId) return;
    await supabase.from("project_milestones").insert({
      user_id: userId,
      project_id: projectId,
      title
    });
    qc.invalidateQueries({
      queryKey: ["milestones", projectId]
    });
    qc.invalidateQueries({
      queryKey: ["project-counts", projectId]
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickAdd, { placeholder: "New milestone…", onAdd: add }),
    data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Flag, title: "No milestones", description: "Key checkpoints on the path to project goals." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: data.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 rounded-lg border border-border bg-card p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "h-4 w-4 text-primary-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm", children: m.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: m.due_date ?? "no date" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: m.status === "done" ? "success" : "info", children: m.status })
    ] }, m.id)) })
  ] });
}
function Notes({
  projectId,
  userId,
  qc
}) {
  const {
    data = []
  } = useQuery({
    queryKey: ["notes", projectId],
    enabled: !!userId,
    queryFn: async () => (await supabase.from("project_notes").select("*").eq("project_id", projectId).order("updated_at", {
      ascending: false
    })).data ?? []
  });
  async function add(content) {
    if (!userId) return;
    await supabase.from("project_notes").insert({
      user_id: userId,
      project_id: projectId,
      content
    });
    qc.invalidateQueries({
      queryKey: ["notes", projectId]
    });
    qc.invalidateQueries({
      queryKey: ["project-counts", projectId]
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickAdd, { placeholder: "New note…", onAdd: add }),
    data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: StickyNote, title: "No notes", description: "Capture working thoughts and reference info." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: data.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4", children: [
      n.title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: n.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: n.content }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-mono text-[10px] text-muted-foreground", children: new Date(n.updated_at).toLocaleString() })
    ] }, n.id)) })
  ] });
}
function Decisions({
  projectId,
  userId,
  qc
}) {
  const {
    data = []
  } = useQuery({
    queryKey: ["decisions", projectId],
    enabled: !!userId,
    queryFn: async () => (await supabase.from("project_decisions").select("*").eq("project_id", projectId).order("decided_at", {
      ascending: false
    })).data ?? []
  });
  async function add(title) {
    if (!userId) return;
    await supabase.from("project_decisions").insert({
      user_id: userId,
      project_id: projectId,
      title
    });
    qc.invalidateQueries({
      queryKey: ["decisions", projectId]
    });
    qc.invalidateQueries({
      queryKey: ["project-counts", projectId]
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickAdd, { placeholder: "New decision…", onAdd: add }),
    data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Gavel, title: "No decisions", description: "Track key calls with rationale for future you." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: data.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-lg border border-border bg-card p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { className: "h-4 w-4 text-primary-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: d.title }),
        d.content && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: d.content }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-mono text-[10px] text-muted-foreground", children: new Date(d.decided_at).toLocaleDateString() })
      ] })
    ] }) }, d.id)) })
  ] });
}
function Files({
  projectId
}) {
  const {
    data = []
  } = useQuery({
    queryKey: ["docs", projectId],
    queryFn: async () => (await supabase.from("documents").select("*").eq("project_id", projectId).order("created_at", {
      ascending: false
    })).data ?? []
  });
  if (data.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: FileText, title: "No files", description: "Upload documents from the Files page and link them to this project." });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: data.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 rounded-lg border border-border bg-card p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-primary-glow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm", children: d.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "info", children: d.type })
  ] }, d.id)) });
}
function ProjectMemory({
  projectId
}) {
  const {
    data = []
  } = useQuery({
    queryKey: ["pmem", projectId],
    queryFn: async () => (await supabase.from("memories").select("*").eq("project_id", projectId).order("updated_at", {
      ascending: false
    })).data ?? []
  });
  if (data.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Brain, title: "No project memory", description: "Pin facts, preferences, and context the assistant should recall when working on this project." });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: data.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: m.content }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "info", children: m.layer }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VerificationBadge, { status: m.verified ? "verified" : "unverified" })
    ] })
  ] }, m.id)) });
}
function ProjectSources({
  projectId
}) {
  const {
    data = []
  } = useQuery({
    queryKey: ["psrc", projectId],
    queryFn: async () => (await supabase.from("sources").select("*").eq("project_id", projectId).order("fetched_at", {
      ascending: false
    })).data ?? []
  });
  if (data.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Globe, title: "No sources", description: "Citations and references gathered for this project will appear here." });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: data.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-lg border border-border bg-card p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5 text-primary-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: s.title })
    ] }),
    s.snippet && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 line-clamp-2 text-xs text-muted-foreground", children: s.snippet })
  ] }, s.id)) });
}
export {
  ProjectDetail as component
};
