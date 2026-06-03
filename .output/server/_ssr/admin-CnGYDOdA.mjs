import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useQueryClient, u as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { P as PageHeader, S as StatusPill } from "./page-primitives-DcyYmWt_.mjs";
import { g as getAdminControlPanel, s as saveAdminAiControl } from "./router-klMIKaP_.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";
import { ah as Lock, f as Shield, ai as BrainCircuit, aj as Earth, ak as SlidersHorizontal, al as RotateCcw, am as Save } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
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
import "./client.server-4MVRtmLM.mjs";
import "../_libs/zod.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




function AdminPage() {
  const qc = useQueryClient();
  const controlQ = useQuery({
    queryKey: ["admin-ai-control"],
    queryFn: () => getAdminControlPanel(),
    retry: false
  });
  const panel = controlQ.data;
  const [modelOverride, setModelOverride] = reactExports.useState("");
  const [systemOverride, setSystemOverride] = reactExports.useState("");
  const [forceLiveData, setForceLiveData] = reactExports.useState(false);
  const [forceMemory, setForceMemory] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!panel?.settings) return;
    setModelOverride(panel.settings.modelOverride ?? "");
    setSystemOverride(panel.settings.systemOverride ?? "");
    setForceLiveData(panel.settings.forceLiveData);
    setForceMemory(panel.settings.forceMemory);
  }, [panel?.settings]);
  const saveMutation = useMutation({
    mutationFn: () => saveAdminAiControl({
      data: {
        modelOverride: modelOverride.trim() || null,
        systemOverride: systemOverride.trim() || null,
        forceLiveData,
        forceMemory
      }
    }),
    onSuccess: () => {
      toast.success("AI controls saved");
      qc.invalidateQueries({
        queryKey: ["admin-ai-control"]
      });
    },
    onError: (err) => toast.error(err.message || "Could not save AI controls")
  });
  const resetControls = () => {
    setModelOverride("");
    setSystemOverride("");
    setForceLiveData(false);
    setForceMemory(false);
  };
  const admin = panel?.admin === true;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Owner administration", title: "Admin", description: "Control the AI runtime, model preference, memory behavior, and live-data behavior from a server-gated owner panel.", actions: admin ? /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "success", children: "owner admin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "warning", children: "restricted" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 p-6", children: controlQ.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground", children: "Loading admin controls..." }) : !admin ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-md bg-surface-elevated text-warning", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-semibold", children: "Admin role required" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "This panel is available only to the configured owner email or users with the backend admin role." })
      ] })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-success" }),
            " Access"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Signed in as" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-mono text-xs", children: panel.email ?? "verified user" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Role" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "success", children: "admin" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "h-4 w-4 text-primary-glow" }),
            " Model"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-mono text-xs text-muted-foreground", children: modelOverride.trim() || "GPT-first automatic fallback" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-4 w-4 text-primary-glow" }),
            " Orchestration"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(StatusPill, { tone: forceLiveData ? "info" : "neutral", children: [
              "live ",
              forceLiveData ? "forced" : "auto"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(StatusPill, { tone: forceMemory ? "info" : "neutral", children: [
              "memory ",
              forceMemory ? "forced" : "auto"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-display text-base font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-4 w-4 text-primary-glow" }),
              " AI Runtime Controls"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Changes apply to your authenticated chat sessions and are enforced by the backend before the LLM request." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: resetControls, className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-sm hover:bg-accent", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-3.5 w-3.5" }),
              " Reset"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => saveMutation.mutate(), disabled: saveMutation.isPending, className: "inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 disabled:opacity-60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-3.5 w-3.5" }),
              " ",
              saveMutation.isPending ? "Saving" : "Save"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "Model override" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: modelOverride, onChange: (e) => setModelOverride(e.target.value), placeholder: "openai/gpt-5.5", className: "mt-2 w-full rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "System instruction override" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: systemOverride, onChange: (e) => setSystemOverride(e.target.value), placeholder: "Leave empty to use the stable AI WorkMate system prompt.", rows: 8, className: "mt-2 w-full resize-y rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 rounded-md border border-border bg-surface/50 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: forceLiveData, onChange: (e) => setForceLiveData(e.target.checked), className: "mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium", children: "Force live data" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-xs text-muted-foreground", children: "Always attempts Tavily then SerpAPI for chat requests." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 rounded-md border border-border bg-surface/50 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: forceMemory, onChange: (e) => setForceMemory(e.target.checked), className: "mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium", children: "Force memory" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-xs text-muted-foreground", children: "Always retrieves ranked memory even when routing would skip it." })
              ] })
            ] }),
            panel.settings.updatedAt ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-surface/40 p-3 font-mono text-[11px] text-muted-foreground", children: [
              "Updated ",
              new Date(panel.settings.updatedAt).toLocaleString()
            ] }) : null
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AdminPage as component
};
