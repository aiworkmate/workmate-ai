import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, S as StatusPill } from "./page-primitives-DcyYmWt_.mjs";
import { T as TriangleAlert, e as Stethoscope, V as FileSearch, Y as UserCheck } from "../_libs/lucide-react.mjs";

const sample = {
  caseId: "case-2026-05-2839",
  observations: ["Patient reports persistent headache (7 days), localized frontotemporal, intensity 6/10.", "BP 138/86 (elevated vs. 12-month baseline 122/78).", "No reported visual disturbance, nausea, or photophobia.", "Recent travel: domestic only; no febrile contacts."],
  interpretation: "Pattern is consistent with tension-type or stress-related headache against a backdrop of mildly elevated blood pressure. Migraine and intracranial pathology are lower probability given absence of focal neuro signs.",
  uncertainty: 0.42,
  recommendations: ["Verify BP trend across at least 3 separate readings.", "Screen for sleep disruption and caffeine intake in the last 14 days.", "Consider migraine questionnaire (MIDAS) if pattern persists > 14 days."],
  sources: [{
    ref: "Internal · headache-triage-policy-v4.pdf",
    chunk: "§3.2 Differential triggers"
  }, {
    ref: "Internal · htn-screening-2025.pdf",
    chunk: "§1.1 Confirmation criteria"
  }]
};
function MedicalPage() {
  const uncertaintyPct = Math.round(sample.uncertainty * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Clinician-assistive only", title: "Medical assistive view", description: "Structured assistive output. Not a diagnosis. Requires clinician review before any decision.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "warning", children: "Assistive · review required" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-xl border border-warning/30 bg-warning/5 p-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-warning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "This output is assistive, not diagnostic." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-muted-foreground", children: "A licensed clinician must review and confirm before any care decision. All interactions are audit-logged." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5 lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-4 w-4 text-primary-glow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold", children: sample.caseId })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Observations", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-inside list-disc space-y-1.5 text-sm", children: sample.observations.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: o }, i)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Interpretation", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: sample.interpretation }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Recommendations (assistive)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "list-inside list-decimal space-y-1.5 text-sm", children: sample.recommendations.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: r }, i)) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 font-display text-sm font-semibold", children: "Uncertainty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Model uncertainty" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                uncertaintyPct,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-2 overflow-hidden rounded-full bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-success via-warning to-destructive", style: {
              width: `${uncertaintyPct}%`
            } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "Above 30%: corroborate with additional data before acting." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileSearch, { className: "h-4 w-4 text-primary-glow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold", children: "Evidence sources" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs", children: sample.sources.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-md border border-border bg-surface/40 p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono", children: s.ref }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-muted-foreground", children: s.chunk })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "h-4 w-4 text-success" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold", children: "Clinician review" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90", children: "Mark reviewed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm hover:bg-accent", children: "Request escalation" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: title }),
    children
  ] });
}
export {
  MedicalPage as component
};
