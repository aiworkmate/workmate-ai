import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useAuth } from "./router-klMIKaP_.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { P as PageHeader, S as StatusPill } from "./page-primitives-DcyYmWt_.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";

import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
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




const tabs = ["Profile", "Workspace", "Notifications", "Integrations", "Security", "Billing"];
function SettingsPage() {
  const {
    user,
    profile
  } = useAuth();
  const [tab, setTab] = reactExports.useState("Profile");
  const [name, setName] = reactExports.useState(profile?.display_name ?? "");
  const [saving, setSaving] = reactExports.useState(false);
  async function saveProfile() {
    if (!user) return;
    setSaving(true);
    const {
      error
    } = await supabase.from("profiles").update({
      display_name: name
    }).eq("user_id", user.id);
    setSaving(false);
    if (error) toast.error(error.message);
    else toast.success("Profile updated");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Configuration", title: "Settings", description: "Manage your profile, workspace, and security preferences." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 border-b border-border bg-background/40 px-6", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(t), className: `relative -mb-px px-3 py-3 text-sm transition ${tab === t ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`, children: [
      t,
      tab === t && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-2 -bottom-px h-px bg-primary-glow" })
    ] }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl space-y-6 p-6", children: [
      tab === "Profile" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Profile", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Display name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), className: "w-full rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: user?.email ?? "", disabled: true, className: "w-full rounded-md border border-input bg-surface/40 px-3 py-2 text-sm text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: saveProfile, disabled: saving, className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 disabled:opacity-50", children: saving ? "Saving…" : "Save changes" }) })
      ] }),
      tab === "Workspace" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Workspace", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Workspace name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { defaultValue: "Clinical Ops", className: "w-full rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Region", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { disabled: true, value: "eu-west-1", className: "w-full rounded-md border border-input bg-surface/40 px-3 py-2 text-sm text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Default model", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { defaultValue: "google/gemini-2.5-flash", className: "w-full rounded-md border border-input bg-background/40 px-3 py-2 text-sm font-mono outline-none focus:ring-2 focus:ring-ring/40" }) })
      ] }),
      tab === "Notifications" && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Notifications", children: ["Workflow failures", "Admin actions", "Weekly digest", "Security alerts"].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: n, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex cursor-pointer items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", defaultChecked: true, className: "peer sr-only" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-5 w-9 rounded-full bg-surface peer-checked:bg-primary transition relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-foreground transition peer-checked:translate-x-4" }) })
      ] }) }, n)) }),
      tab === "Integrations" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "API & integrations", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "API key", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "flex-1 rounded-md border border-border bg-surface/40 px-3 py-2 font-mono text-xs", children: "wm_live_•••••••••••••••••3a9c" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md border border-border bg-surface px-3 py-2 text-xs hover:bg-accent", children: "Rotate" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Webhook URL", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "https://yoursystem.com/hooks/workmate", className: "w-full rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" }) })
      ] }),
      tab === "Security" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Security", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Multi-factor auth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "success", children: "Required for admins" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Session length", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", defaultValue: 480, className: "w-32 rounded-md border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "IP allowlist", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { placeholder: "0.0.0.0/0", rows: 3, className: "w-full rounded-md border border-input bg-background/40 px-3 py-2 font-mono text-xs outline-none focus:ring-2 focus:ring-ring/40" }) })
      ] }),
      tab === "Billing" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Billing", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Plan", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "info", children: "Enterprise" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Seats", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm", children: "26 / 50" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Next invoice", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "$4,820 · June 28, 2026" }) })
      ] })
    ] })
  ] });
}
function Card({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-5 py-3 font-display text-sm font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5 p-5", children })
  ] });
}
function Row({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-3 md:grid-cols-[200px_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children })
  ] });
}
export {
  SettingsPage as component
};
