import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function EmptyState({
  icon: Icon,
  title,
  description,
  action
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface/40 p-12 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 grid h-12 w-12 place-items-center rounded-xl bg-surface-elevated text-primary-glow shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 max-w-sm text-sm text-muted-foreground", children: description }),
    action ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: action }) : null
  ] });
}
function PageHeader({
  title,
  description,
  actions,
  eyebrow
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4 border-b border-border bg-background/60 px-6 py-5 backdrop-blur", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      eyebrow ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: eyebrow }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", children: title }),
      description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: description }) : null
    ] }),
    actions ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: actions }) : null
  ] });
}
function StatusPill({ tone = "neutral", children }) {
  const tones = {
    neutral: "bg-surface text-muted-foreground border-border",
    success: "bg-success/10 text-success border-success/30",
    warning: "bg-warning/10 text-warning border-warning/30",
    danger: "bg-destructive/10 text-destructive border-destructive/30",
    info: "bg-primary/10 text-primary-glow border-primary/30"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${tones[tone]}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-current" }),
    children
  ] });
}
export {
  EmptyState as E,
  PageHeader as P,
  StatusPill as S
};
