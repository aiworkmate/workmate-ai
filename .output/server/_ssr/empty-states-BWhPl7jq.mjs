import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as TriangleAlert } from "../_libs/lucide-react.mjs";
function ApiNotConfigured({ feature }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md rounded-xl border border-warning/30 bg-warning/5 p-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mx-auto h-6 w-6 text-warning" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-base font-semibold", children: "Backend not connected" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
      feature,
      " is served by the AI WorkMate Node.js backend. Set",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded bg-muted/60 px-1.5 py-0.5 font-mono text-[11px]", children: "VITE_API_BASE_URL" }),
      " ",
      "to point at your backend and reload."
    ] })
  ] }) });
}
function EmptyState({
  icon: Icon,
  title,
  description,
  action
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-sm text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-10 w-10 place-items-center rounded-md border border-border bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-muted-foreground" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-base font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: description }),
    action && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: action })
  ] }) });
}
export {
  ApiNotConfigured as A,
  EmptyState as E
};
