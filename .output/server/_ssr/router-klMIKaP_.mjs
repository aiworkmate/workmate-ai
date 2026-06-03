import process from "node:process";
import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { s as supabaseAdmin, r as requireSupabaseAuth } from "./client.server-4MVRtmLM.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./index.mjs";
import { o as objectType, a as arrayType, s as stringType, e as enumType, b as booleanType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/tslib.mjs";
import "../_libs/supabase__functions-js.mjs";

import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




const appCss = "/assets/styles-AD_qnTXv.css";
const AuthContext = reactExports.createContext(void 0);
function AuthProvider({ children }) {
  const [session, setSession] = reactExports.useState(null);
  const [profile, setProfile] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_evt, s) => {
      setSession(s);
      if (s?.user) {
        setTimeout(() => loadProfile(s.user.id), 0);
      } else {
        setProfile(null);
      }
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session?.user) loadProfile(data.session.user.id);
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);
  async function loadProfile(userId) {
    const { data } = await supabase.from("profiles").select("display_name, avatar_url, email").eq("user_id", userId).maybeSingle();
    if (data) setProfile(data);
  }
  const value = {
    user: session?.user ?? null,
    session,
    profile,
    loading,
    signOut: async () => {
      await supabase.auth.signOut();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value, children });
}
function useAuth() {
  const ctx = reactExports.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
const Ctx = reactExports.createContext(null);
const STORAGE_KEY = "workmate.theme";
function readStored() {
  if (typeof window === "undefined") return "light";
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "light" || v === "dark" || v === "system" ? v : "light";
}
function systemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
function ThemeProvider({ children }) {
  const [theme, setThemeState] = reactExports.useState("light");
  const [resolved, setResolved] = reactExports.useState("light");
  reactExports.useEffect(() => {
    setThemeState(readStored());
  }, []);
  reactExports.useEffect(() => {
    const apply = () => {
      const next = theme === "system" ? systemTheme() : theme;
      setResolved(next);
      const root = document.documentElement;
      root.classList.toggle("light", next === "light");
      root.classList.toggle("dark", next === "dark");
      root.style.colorScheme = next;
    };
    apply();
    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: light)");
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    }
  }, [theme]);
  const setTheme = (t) => {
    window.localStorage.setItem(STORAGE_KEY, t);
    setThemeState(t);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ctx.Provider, { value: { theme, resolved, setTheme }, children });
}
function useTheme() {
  const v = reactExports.useContext(Ctx);
  if (!v) throw new Error("useTheme outside ThemeProvider");
  return v;
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-dvh items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground", children: "Error · 404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-5xl font-semibold text-foreground", children: "Lost in the index" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "This route isn't part of the workspace. Head back to the console." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90",
        children: "Return home"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-dvh items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono uppercase tracking-[0.2em] text-destructive", children: "Runtime exception" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-3xl font-semibold", children: "Something derailed." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: error.message || "An unexpected error occurred." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-md border border-border bg-surface px-4 py-2 text-sm hover:bg-accent", children: "Go home" })
    ] })
  ] }) });
}
const Route$n = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AI WorkMate — Secure Enterprise AI Operating System" },
      { name: "description", content: "AI WorkMate is a secure, multi-tenant AI operating system for enterprise workflows — chat, memory, uploads, automations, and analytics." },
      { name: "theme-color", content: "#141432" },
      { property: "og:title", content: "AI WorkMate — Secure Enterprise AI Operating System" },
      { property: "og:description", content: "AI WorkMate is a secure, multi-tenant AI operating system for enterprise workflows — chat, memory, uploads, automations, and analytics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI WorkMate — Secure Enterprise AI Operating System" },
      { name: "twitter:description", content: "AI WorkMate is a secure, multi-tenant AI operating system for enterprise workflows — chat, memory, uploads, automations, and analytics." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/27e9f801-c539-439c-8830-8533bf3935ef" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/27e9f801-c539-439c-8830-8533bf3935ef" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$n.useRouteContext();
  const router2 = useRouter();
  reactExports.useEffect(() => {
    import("./client-Bjnmba1k.mjs").then(({ supabase: supabase2 }) => {
      const { data: { subscription } } = supabase2.auth.onAuthStateChange(() => {
        router2.invalidate();
        queryClient.invalidateQueries();
      });
      return () => subscription.unsubscribe();
    });
  }, [router2, queryClient]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] }) }) });
}
const $$splitComponentImporter$l = () => import("./signup-DoH9cjl7.mjs");
const Route$m = createFileRoute("/signup")({
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./login-DoH9cjl7.mjs");
const Route$l = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./app-Bebe8WKt.mjs");
const Route$k = createFileRoute("/app")({
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./index-Dd51dCSb.mjs");
const Route$j = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "WorkMate X"
    }, {
      name: "description",
      content: "Log in to your WorkMate workspace."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./index-ssafUY87.mjs");
const Route$i = createFileRoute("/app/")({
  head: () => ({
    meta: [{
      title: "Overview · AI WorkMate"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./workflows-DQQsccFO.mjs");
const Route$h = createFileRoute("/app/workflows")({
  head: () => ({
    meta: [{
      title: "Workflows · AI WorkMate"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./verification-BkIBOXIN.mjs");
const Route$g = createFileRoute("/app/verification")({
  head: () => ({
    meta: [{
      title: "Verification · WorkMate X"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./uploads-CC_suTkT.mjs");
const Route$f = createFileRoute("/app/uploads")({
  head: () => ({
    meta: [{
      title: "Documents · AI WorkMate"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./tools-DQtGZyFL.mjs");
const Route$e = createFileRoute("/app/tools")({
  head: () => ({
    meta: [{
      title: "Tool connections · WorkMate X"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./sources-D7kNMzRo.mjs");
const Route$d = createFileRoute("/app/sources")({
  head: () => ({
    meta: [{
      title: "Sources · WorkMate X"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./settings-44AzTOoO.mjs");
const Route$c = createFileRoute("/app/settings")({
  head: () => ({
    meta: [{
      title: "Settings · AI WorkMate"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./projects-DMT1-Ri_.mjs");
const Route$b = createFileRoute("/app/projects")({
  head: () => ({
    meta: [{
      title: "Projects · WorkMate X"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./memory-y2Oghdw4.mjs");
const Route$a = createFileRoute("/app/memory")({
  head: () => ({
    meta: [{
      title: "Memory Center · WorkMate X"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./medical-BvpvOtsn.mjs");
const Route$9 = createFileRoute("/app/medical")({
  head: () => ({
    meta: [{
      title: "Medical assistive · AI WorkMate"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./health-4IU_z-oK.mjs");
const Route$8 = createFileRoute("/app/health")({
  head: () => ({
    meta: [{
      title: "System health · WorkMate X"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./chat-DD2UNQxH.mjs");
const Route$7 = createFileRoute("/app/chat")({
  head: () => ({
    meta: [{
      title: "Chat · AI WorkMate"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./audit-CJ2-5Yl6.mjs");
const Route$6 = createFileRoute("/app/audit")({
  head: () => ({
    meta: [{
      title: "Audit logs · AI WorkMate"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./analytics-Xtaj1bIO.mjs");
const Route$5 = createFileRoute("/app/analytics")({
  head: () => ({
    meta: [{
      title: "Analytics · AI WorkMate"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./agents-DXiwTEfI.mjs");
const Route$4 = createFileRoute("/app/agents")({
  head: () => ({
    meta: [{
      title: "Agents · WorkMate X"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admin-CnGYDOdA.mjs");
const Route$3 = createFileRoute("/app/admin")({
  head: () => ({
    meta: [{
      title: "Admin · AI WorkMate"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const ALLOWED_INTENTS = ["chat", "search", "upload", "medical"];
const LIVE_PATTERNS = [
  /\b(latest|today|tonight|tomorrow|yesterday|this week|this month|right now|currently|recent|recently|breaking|news)\b/i,
  /\b(near me|nearby|in my area)\b/i,
  /\b(who(?:'s| is) (?:the )?best|top \d+|cheapest|fastest|highest rated)\b/i,
  /\b(price|prices|stock|stocks|weather|forecast|score|results|standings)\b/i,
  /\b(202[4-9]|20[3-9]\d)\b/,
  /\b(what(?:'s| is) happening|what happened)\b/i
];
const MEDICAL_PATTERNS = [
  /\b(symptom|diagnos|prescription|dosage|mg\b|patient|icd[- ]?10|cpt|medication|treatment plan)\b/i
];
const UPLOAD_PATTERNS = [
  /\b(this (file|document|pdf|attachment)|the (uploaded|attached) (file|doc|pdf|image))\b/i
];
const SEARCH_PATTERNS = [/\b(search|find|look up|google)\b/i];
function classify(lastUserMessage) {
  const text = lastUserMessage ?? "";
  const needsLiveData = LIVE_PATTERNS.some((re) => re.test(text));
  let intent = "chat";
  if (MEDICAL_PATTERNS.some((re) => re.test(text))) intent = "medical";
  else if (UPLOAD_PATTERNS.some((re) => re.test(text))) intent = "upload";
  else if (needsLiveData || SEARCH_PATTERNS.some((re) => re.test(text))) intent = "search";
  return { intent, needsLiveData, needsMemory: true };
}
function safeRouter(decision) {
  const d = decision ?? {};
  const intent = ALLOWED_INTENTS.includes(d.intent) ? d.intent : "chat";
  return {
    intent,
    needsLiveData: typeof d.needsLiveData === "boolean" ? d.needsLiveData : false,
    needsMemory: typeof d.needsMemory === "boolean" ? d.needsMemory : true
  };
}
function routeMessage(lastUserMessage) {
  try {
    return safeRouter(classify(lastUserMessage));
  } catch {
    return safeRouter(null);
  }
}
const DEFAULT_TIMEOUT = 2500;
async function fetchJson(url, init, timeoutMs) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...init, signal: controller.signal });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}
async function tavilySearch(query, timeoutMs) {
  const key = process.env.TAVILY_API_KEY;
  if (!key) return null;
  const data = await fetchJson(
    "https://api.tavily.com/search",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: key,
        query,
        search_depth: "basic",
        include_answer: true,
        max_results: 5
      })
    },
    timeoutMs
  );
  if (!data) return null;
  const bits = [];
  const sources = [];
  if (data.answer) bits.push(data.answer);
  for (const r of (data.results ?? []).slice(0, 5)) {
    if (r.title || r.content) bits.push(`- ${r.title ?? ""}${r.content ? ` - ${r.content}` : ""}`);
    if (r.url) sources.push(r.url);
  }
  const summary = bits.join("\n").trim();
  if (!summary) return null;
  return { query, summary: summary.slice(0, 2e3), sources: sources.slice(0, 5), provider: "tavily" };
}
async function serpApiSearch(query, timeoutMs) {
  const key = process.env.SERPAPI_API_KEY;
  if (!key) return null;
  const url = `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(query)}&api_key=${key}&num=5`;
  const data = await fetchJson(url, {}, timeoutMs);
  if (!data) return null;
  const bits = [];
  const sources = [];
  if (data.answer_box?.answer) bits.push(data.answer_box.answer);
  else if (data.answer_box?.snippet) bits.push(data.answer_box.snippet);
  if (data.knowledge_graph?.description) bits.push(data.knowledge_graph.description);
  for (const r of (data.organic_results ?? []).slice(0, 5)) {
    if (r.title || r.snippet) bits.push(`- ${r.title ?? ""}${r.snippet ? ` - ${r.snippet}` : ""}`);
    if (r.link) sources.push(r.link);
  }
  const summary = bits.join("\n").trim();
  if (!summary) return null;
  return { query, summary: summary.slice(0, 2e3), sources: sources.slice(0, 5), provider: "serpapi" };
}
async function webSearch(query, timeoutMs = DEFAULT_TIMEOUT) {
  const q = query.trim().slice(0, 300);
  if (!q) return null;
  const startedAt = Date.now();
  try {
    console.log("[web-search] attempt", { provider: "tavily", query: q, timeoutMs });
    const tavily = await tavilySearch(q, timeoutMs);
    if (tavily?.summary) {
      console.log("[web-search] hit", {
        provider: "tavily",
        sources: tavily.sources.length,
        ms: Date.now() - startedAt
      });
      return tavily;
    }
    console.warn("[web-search] miss", { provider: "tavily", ms: Date.now() - startedAt });
  } catch (err) {
    console.warn("[web-search] tavily error", { err: String(err), ms: Date.now() - startedAt });
  }
  try {
    console.log("[web-search] attempt", { provider: "serpapi", query: q, timeoutMs });
    const serp = await serpApiSearch(q, timeoutMs);
    if (serp?.summary) {
      console.log("[web-search] hit", {
        provider: "serpapi",
        sources: serp.sources.length,
        ms: Date.now() - startedAt
      });
      return serp;
    }
    console.warn("[web-search] miss", { provider: "serpapi", ms: Date.now() - startedAt });
  } catch (err) {
    console.warn("[web-search] serpapi error", { err: String(err), ms: Date.now() - startedAt });
  }
  console.warn("[web-search] all providers failed", { query: q, ms: Date.now() - startedAt });
  return null;
}
const DAILY_DECAY = 0.995;
const CATEGORY_WEIGHT = {
  identity: 0.16,
  project: 0.14,
  preference: 0.12,
  knowledge: 0.08,
  interaction: 0.06,
  general: 0
};
const clamp01$1 = (n) => Math.min(1, Math.max(0, n));
const STOP_WORDS = /* @__PURE__ */ new Set([
  "about",
  "after",
  "again",
  "also",
  "because",
  "before",
  "being",
  "could",
  "from",
  "have",
  "into",
  "just",
  "like",
  "more",
  "need",
  "only",
  "over",
  "please",
  "should",
  "that",
  "their",
  "there",
  "these",
  "this",
  "with",
  "what",
  "when",
  "where",
  "which",
  "while",
  "would",
  "your",
  "you",
  "the",
  "and",
  "for",
  "are",
  "but",
  "not",
  "can",
  "will",
  "make",
  "want",
  "need",
  "using",
  "than",
  "then",
  "them",
  "they",
  "our"
]);
function terms(text) {
  return new Set(
    text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/\s+/).map((t) => t.trim()).filter((t) => t.length >= 3 && !STOP_WORDS.has(t))
  );
}
function normalizeContent(content) {
  return content.replace(/\s+/g, " ").trim().slice(0, 500);
}
function relevanceScore(memory, queryTerms) {
  if (queryTerms.size === 0) return 0;
  const memoryTerms = terms(`${memory.category} ${memory.content}`);
  let hits = 0;
  for (const t of queryTerms) if (memoryTerms.has(t)) hits++;
  return hits / Math.max(1, queryTerms.size);
}
function addCandidate(candidates, content, category, confidence, usefulness) {
  const normalized2 = normalizeContent(content ?? "");
  if (normalized2.length < 8 || normalized2.length > 500) return;
  if (candidates.some((c) => c.content.toLowerCase() === normalized2.toLowerCase())) return;
  candidates.push({ content: normalized2, category, confidence: clamp01$1(confidence), usefulness: clamp01$1(usefulness) });
}
function sentenceMatches(text, patterns, max = 3) {
  const sentences = text.replace(/\n+/g, " ").split(new RegExp("(?<=[.!?])\\s+|;\\s+")).map((s) => s.trim()).filter(Boolean);
  const matches = [];
  for (const sentence of sentences) {
    if (matches.length >= max) break;
    if (sentence.length > 260) continue;
    if (patterns.some((re) => re.test(sentence))) matches.push(sentence);
  }
  return matches;
}
function extractMemoryCandidates(userText, assistantText = "") {
  const text = normalizeContent(userText);
  const combined = `${text}
${normalizeContent(assistantText)}`;
  const candidates = [];
  for (const sentence of sentenceMatches(text, [
    /\b(call me|my name is|my preferred name is)\b/i,
    /\b(i work as|i am a|i'm a|my role is|my company is)\b/i
  ])) {
    addCandidate(candidates, sentence, "identity", 0.9, 0.82);
  }
  for (const sentence of sentenceMatches(text, [
    /\b(i prefer|i like|i love|i hate|i usually|i always|i never)\b/i,
    /\b(prefer .*format|keep .*short|be concise|give me steps|use bullets|use markdown)\b/i,
    /\b(favorite tool|preferred workflow|workflow preference)\b/i
  ], 4)) {
    addCandidate(candidates, sentence, "preference", 0.84, 0.78);
  }
  const knownProjects = ["AI WorkMate", "BIM Explorer"];
  for (const project of knownProjects) {
    if (new RegExp(`\\b${project.replace(/ /g, "\\s+")}\\b`, "i").test(combined)) {
      addCandidate(candidates, `Project memory: ${project} is an important ongoing initiative.`, "project", 0.78, 0.76);
    }
  }
  for (const sentence of sentenceMatches(text, [
    /\b(project|app|platform|startup|business|venture|initiative|long-term goal)\b/i,
    /\b(i am building|i'm building|we are building|working on|roadmap|phase)\b/i
  ], 4)) {
    if (/\b(project|app|platform|startup|business|venture|initiative|goal|building|roadmap|phase)\b/i.test(sentence)) {
      addCandidate(candidates, sentence, "project", 0.76, 0.72);
    }
  }
  for (const sentence of sentenceMatches(text, [
    /\b(remember that|important context|key fact|keep in mind)\b/i,
    /\b(works best when|does not work when|the rule is|constraint is)\b/i
  ], 3)) {
    addCandidate(candidates, sentence, "knowledge", 0.74, 0.68);
  }
  for (const sentence of sentenceMatches(text, [
    /\b(i often ask|i usually ask|we often|common request|repeat this workflow|next time)\b/i
  ], 2)) {
    addCandidate(candidates, sentence, "interaction", 0.68, 0.62);
  }
  return candidates.slice(0, 8);
}
async function recallMemories(userId, limit = 8, query = "") {
  try {
    const candidateLimit = Math.min(Math.max(limit * 6, 24), 60);
    const { data, error } = await supabaseAdmin.from("memories").select("id, content, category, pinned, confidence, frequency, usefulness, last_used_at, updated_at").eq("user_id", userId).neq("category", "archived").order("pinned", { ascending: false }).order("usefulness", { ascending: false }).order("frequency", { ascending: false }).order("updated_at", { ascending: false }).limit(candidateLimit);
    if (error || !data) return [];
    const entries = data;
    const queryTerms = terms(query);
    const now = Date.now();
    const ranked = entries.map((e) => {
      const lastUsed = e.last_used_at ? new Date(e.last_used_at).getTime() : now;
      const daysIdle = Math.max(0, (now - lastUsed) / 864e5);
      const usefulness = clamp01$1((e.usefulness ?? 0.5) * Math.pow(DAILY_DECAY, daysIdle));
      const confidence = clamp01$1(e.confidence ?? 0.7);
      const recency = clamp01$1(1 / (1 + daysIdle / 14));
      const frequency = Math.min(1, Math.log1p(e.frequency ?? 0) / Math.log(25));
      const relevance = relevanceScore(e, queryTerms);
      const category = CATEGORY_WEIGHT[e.category] ?? 0;
      const score = (e.pinned ? 0.35 : 0) + usefulness * 0.26 + confidence * 0.14 + relevance * 0.27 + frequency * 0.06 + recency * 0.05 + category;
      return { entry: e, usefulness, score, relevance };
    }).filter(
      (r) => r.entry.pinned || queryTerms.size === 0 || r.relevance > 0 || ["identity", "project", "preference"].includes(r.entry.category) || (r.entry.usefulness ?? 0) >= 0.78
    ).sort((a, b) => b.score - a.score);
    const selected = [];
    const perCategory = /* @__PURE__ */ new Map();
    for (const row of ranked) {
      if (selected.length >= limit) break;
      const category = row.entry.category || "general";
      const count = perCategory.get(category) ?? 0;
      const cap = row.entry.pinned ? limit : category === "identity" || category === "project" ? 3 : 4;
      if (count >= cap && row.relevance < 0.2) continue;
      selected.push(row);
      perCategory.set(category, count + 1);
    }
    if (selected.length) {
      void (async () => {
        try {
          await Promise.all(
            selected.map(
              ({ entry, usefulness }) => supabaseAdmin.from("memories").update({
                frequency: (entry.frequency ?? 1) + 1,
                usefulness,
                last_used_at: new Date(now).toISOString()
              }).eq("id", entry.id)
            )
          );
        } catch {
        }
      })();
    }
    return selected.map((r) => ({ ...r.entry, usefulness: r.usefulness }));
  } catch {
    return [];
  }
}
const MEMORY_KEYWORDS = [
  "i prefer",
  "i like",
  "i love",
  "i hate",
  "i want",
  "i always",
  "i never",
  "i usually",
  "i work as",
  "i am a",
  "remember that",
  "remember to",
  "call me",
  "my name is",
  "my preferred name is"
];
function shouldStoreMemory(text) {
  const t = (text ?? "").toLowerCase().trim();
  if (t.length < 5 || t.length > 500) return false;
  return MEMORY_KEYWORDS.some((k) => t.includes(k));
}
async function storeMemory(userId, content, category = "general", confidence = 0.7, usefulness = 0.65) {
  const trimmed = normalizeContent(content);
  if (!trimmed) return;
  if (category === "general" && !shouldStoreMemory(trimmed)) return;
  try {
    const { data: existing } = await supabaseAdmin.from("memories").select("id, frequency, usefulness, confidence, category").eq("user_id", userId).ilike("content", trimmed).limit(1).maybeSingle();
    if (existing) {
      const row = existing;
      await supabaseAdmin.from("memories").update({
        frequency: (row.frequency ?? 1) + 1,
        usefulness: clamp01$1(Math.max(row.usefulness ?? 0.5, usefulness) + 0.04),
        confidence: clamp01$1(Math.max(row.confidence ?? 0.5, confidence)),
        category: row.category === "general" ? category : row.category,
        last_used_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("id", row.id);
      return;
    }
    await supabaseAdmin.from("memories").insert({
      user_id: userId,
      content: trimmed,
      category,
      confidence: clamp01$1(confidence),
      usefulness: clamp01$1(usefulness),
      pinned: false
    });
  } catch {
  }
}
async function persistMemoryCandidates(userId, candidates) {
  if (!candidates.length) return;
  await Promise.all(
    candidates.map(
      (candidate) => storeMemory(userId, candidate.content, candidate.category, candidate.confidence, candidate.usefulness)
    )
  );
}
async function recordMemoryUseOutcome(memoryIds, params) {
  if (!memoryIds.length) return;
  try {
    const { data } = await supabaseAdmin.from("memories").select("id, category, confidence, frequency, usefulness").in("id", memoryIds);
    if (!data) return;
    await Promise.all(
      data.map((m) => {
        const boost = params.success && !params.wasFallback && params.responseChars > 120 ? 0.025 : -0.06;
        const usefulness = clamp01$1((m.usefulness ?? 0.5) + boost);
        const archive = usefulness < 0.08 && (m.frequency ?? 0) > 5 && !["identity", "project"].includes(m.category);
        return supabaseAdmin.from("memories").update({
          usefulness,
          confidence: archive ? Math.max(0.1, (m.confidence ?? 0.5) - 0.1) : m.confidence,
          category: archive ? "archived" : m.category
        }).eq("id", m.id);
      })
    );
  } catch {
  }
}
function formatMemoriesForPrompt(entries) {
  if (entries.length === 0) return "";
  const labels = {
    identity: "Identity memory",
    preference: "Preference memory",
    project: "Project memory",
    knowledge: "Knowledge memory",
    interaction: "Interaction memory",
    general: "General memory"
  };
  const grouped = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    const category = labels[entry.category] ? entry.category : "general";
    grouped.set(category, [...grouped.get(category) ?? [], entry]);
  }
  const sections = [];
  for (const [category, rows] of grouped) {
    const lines = rows.map((e) => `- ${e.content}`);
    sections.push(`${labels[category] ?? labels.general}:
${lines.join("\n")}`);
  }
  return `Known user context. Use only when relevant and do not mention memory unless asked.
${sections.join("\n\n")}`;
}
const PREF_PATTERNS = [
  /^(?:i (?:prefer|like|love|hate|always|never|usually|work as|am a)\b.{3,200})/i,
  /^(?:call me|my name is|my preferred name is)\b.{2,80}/i,
  /^(?:remember (?:that|to)\b.{3,200})/i
];
function extractPreference(text) {
  const t = text.trim();
  for (const re of PREF_PATTERNS) {
    const m = t.match(re);
    if (m) return m[0].trim();
  }
  return null;
}
const DEFAULT_PROFILE = {
  preferredLength: "balanced",
  communicationStyle: "structured",
  responseCount: 0,
  avgResponseChars: 0,
  memoryEffectiveness: 0.55,
  liveDataEffectiveness: 0.55,
  toolEffectiveness: { web_search: 0.55 },
  recurringTopics: [],
  activeProjects: [],
  lastQualityScore: 0.5,
  updatedAt: (/* @__PURE__ */ new Date(0)).toISOString()
};
const TOPIC_STOP_WORDS = /* @__PURE__ */ new Set([
  "about",
  "after",
  "again",
  "because",
  "before",
  "build",
  "change",
  "could",
  "from",
  "have",
  "make",
  "more",
  "need",
  "please",
  "should",
  "that",
  "their",
  "there",
  "these",
  "this",
  "with",
  "what",
  "when",
  "where",
  "which",
  "would",
  "your",
  "the",
  "and",
  "for",
  "are"
]);
function clamp01(n) {
  return Math.min(1, Math.max(0, n));
}
function safeNumber(value, fallback) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
function sanitizeProfile(value) {
  const raw = value && typeof value === "object" ? value : {};
  return {
    preferredLength: raw.preferredLength === "concise" || raw.preferredLength === "detailed" ? raw.preferredLength : "balanced",
    communicationStyle: raw.communicationStyle === "direct" || raw.communicationStyle === "technical" ? raw.communicationStyle : "structured",
    responseCount: Math.max(0, Math.round(safeNumber(raw.responseCount, 0))),
    avgResponseChars: Math.max(0, Math.round(safeNumber(raw.avgResponseChars, 0))),
    memoryEffectiveness: clamp01(safeNumber(raw.memoryEffectiveness, 0.55)),
    liveDataEffectiveness: clamp01(safeNumber(raw.liveDataEffectiveness, 0.55)),
    toolEffectiveness: raw.toolEffectiveness && typeof raw.toolEffectiveness === "object" && !Array.isArray(raw.toolEffectiveness) ? Object.fromEntries(Object.entries(raw.toolEffectiveness).map(([k, v]) => [k, clamp01(safeNumber(v, 0.55))])) : { web_search: 0.55 },
    recurringTopics: Array.isArray(raw.recurringTopics) ? raw.recurringTopics.slice(0, 12).map((t) => ({
      topic: String(t.topic ?? "").slice(0, 80),
      count: Math.max(1, Math.round(safeNumber(t.count, 1))),
      lastUsedAt: String(t.lastUsedAt ?? (/* @__PURE__ */ new Date(0)).toISOString())
    })).filter((t) => t.topic) : [],
    activeProjects: Array.isArray(raw.activeProjects) ? raw.activeProjects.slice(0, 10).map((p) => ({
      name: String(p.name ?? "").slice(0, 80),
      count: Math.max(1, Math.round(safeNumber(p.count, 1))),
      lastUsedAt: String(p.lastUsedAt ?? (/* @__PURE__ */ new Date(0)).toISOString())
    })).filter((p) => p.name) : [],
    lastQualityScore: clamp01(safeNumber(raw.lastQualityScore, 0.5)),
    updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : (/* @__PURE__ */ new Date(0)).toISOString()
  };
}
async function getProfileSettings(userId) {
  const { data } = await supabaseAdmin.from("profiles").select("settings").eq("user_id", userId).maybeSingle();
  const settings = data?.settings && typeof data.settings === "object" && !Array.isArray(data.settings) ? data.settings : {};
  return settings;
}
function extractTopics(text, max = 5) {
  const counts = /* @__PURE__ */ new Map();
  for (const raw of text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/\s+/)) {
    const word = raw.trim();
    if (word.length < 4 || TOPIC_STOP_WORDS.has(word)) continue;
    counts.set(word, (counts.get(word) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, max).map(([topic]) => topic);
}
function extractProjects(text) {
  const found = /* @__PURE__ */ new Set();
  for (const name of ["AI WorkMate", "BIM Explorer"]) {
    if (new RegExp(`\\b${name.replace(/ /g, "\\s+")}\\b`, "i").test(text)) found.add(name);
  }
  const projectMatch = text.match(/\b(?:project|app|platform|business|venture|initiative)\s+(?:called|named)?\s*([A-Z][A-Za-z0-9 -]{2,50})/);
  if (projectMatch?.[1]) found.add(projectMatch[1].trim());
  return [...found].slice(0, 5);
}
function mergeSignals(existing, values, key, now, max) {
  const rows = [...existing];
  for (const value of values) {
    const normalized2 = value.trim();
    if (!normalized2) continue;
    const current = rows.find((row) => String(row[key]).toLowerCase() === normalized2.toLowerCase());
    if (current) {
      current.count += 1;
      current.lastUsedAt = now;
    } else {
      rows.push({ [key]: normalized2, count: 1, lastUsedAt: now });
    }
  }
  return rows.sort((a, b) => b.count - a.count || b.lastUsedAt.localeCompare(a.lastUsedAt)).slice(0, max);
}
function inferPreferredLength(userText, current) {
  if (/\b(short|brief|concise|quick|summary|tl;?dr)\b/i.test(userText)) return "concise";
  if (/\b(detailed|deep|thorough|complete|step by step|explain)\b/i.test(userText)) return "detailed";
  return current;
}
function inferStyle(userText, current) {
  if (/\b(code|technical|developer|backend|api|database|debug)\b/i.test(userText)) return "technical";
  if (/\b(direct|straight|no fluff|just tell me)\b/i.test(userText)) return "direct";
  if (/\b(plan|steps|checklist|structured|organized)\b/i.test(userText)) return "structured";
  return current;
}
function estimateQuality(params) {
  let score = params.success ? 0.55 : 0.15;
  if (!params.wasFallback) score += 0.12;
  if (params.chars >= 120 && params.chars <= 4500) score += 0.12;
  if (params.latencyMs < 8e3) score += 0.08;
  if (params.memoryHits > 0) score += 0.06;
  if (params.liveUsed) score += 0.04;
  return clamp01(score);
}
async function recallRoutingPreference(userId, intent) {
  try {
    const { data } = await supabaseAdmin.from("routing_stats").select("live_used, success_count, failure_count, avg_latency_ms").eq("user_id", userId).eq("intent", intent);
    if (!data || data.length === 0) return { preferLive: null, avgLatency: 0, sampleSize: 0 };
    const rows = data;
    const liveRow = rows.find((r) => r.live_used);
    const noLiveRow = rows.find((r) => !r.live_used);
    const score = (r) => r ? r.success_count / Math.max(1, r.success_count + r.failure_count) : 0;
    const liveScore = score(liveRow);
    const noLiveScore = score(noLiveRow);
    const sampleSize = rows.reduce((s, r) => s + r.success_count + r.failure_count, 0);
    if (sampleSize < 3) return { preferLive: null, avgLatency: 0, sampleSize };
    const preferLive = Math.abs(liveScore - noLiveScore) < 0.1 ? null : liveScore > noLiveScore;
    const avgLatency = Math.round(
      rows.reduce((s, r) => s + r.avg_latency_ms * (r.success_count + r.failure_count), 0) / Math.max(1, sampleSize)
    );
    return { preferLive, avgLatency, sampleSize };
  } catch {
    return { preferLive: null, avgLatency: 0, sampleSize: 0 };
  }
}
async function recallAdaptiveProfile(userId) {
  try {
    const settings = await getProfileSettings(userId);
    return sanitizeProfile(settings.aiLearning);
  } catch {
    return DEFAULT_PROFILE;
  }
}
function formatAdaptiveProfileForPrompt(profile) {
  const topics = profile.recurringTopics.slice(0, 5).map((t) => t.topic).join(", ");
  const projects = profile.activeProjects.slice(0, 5).map((p) => p.name).join(", ");
  const lines = [
    `Preferred answer length: ${profile.preferredLength}`,
    `Communication style: ${profile.communicationStyle}`,
    topics ? `Recurring topics: ${topics}` : "",
    projects ? `Active projects: ${projects}` : "",
    `Memory effectiveness score: ${profile.memoryEffectiveness.toFixed(2)}`,
    `Live-data effectiveness score: ${profile.liveDataEffectiveness.toFixed(2)}`
  ].filter(Boolean);
  return `Adaptive user profile. Use this to tune tone, detail, and context selection without mentioning it.
${lines.join("\n")}`;
}
async function recordRoutingOutcome(params) {
  const { userId, intent, liveUsed, success, latencyMs } = params;
  try {
    const { data: existing } = await supabaseAdmin.from("routing_stats").select("id, success_count, failure_count, avg_latency_ms").eq("user_id", userId).eq("intent", intent).eq("live_used", liveUsed).maybeSingle();
    if (existing) {
      const e = existing;
      const total = e.success_count + e.failure_count;
      const newAvg = Math.round((e.avg_latency_ms * total + latencyMs) / (total + 1));
      await supabaseAdmin.from("routing_stats").update({
        success_count: e.success_count + (success ? 1 : 0),
        failure_count: e.failure_count + (success ? 0 : 1),
        avg_latency_ms: newAvg,
        last_used_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("id", e.id);
    } else {
      await supabaseAdmin.from("routing_stats").insert({
        user_id: userId,
        intent,
        live_used: liveUsed,
        success_count: success ? 1 : 0,
        failure_count: success ? 0 : 1,
        avg_latency_ms: latencyMs
      });
    }
  } catch {
  }
}
async function logResponseOutcome(params) {
  try {
    await supabaseAdmin.from("response_outcomes").insert({
      user_id: params.userId,
      conversation_id: params.conversationId,
      intent: params.intent,
      live_used: params.liveUsed,
      memory_hits: params.memoryHits,
      latency_ms: params.latencyMs,
      chars: params.chars,
      was_fallback: params.wasFallback
    });
  } catch {
  }
}
async function recordAdaptiveLearning(params) {
  try {
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const settings = await getProfileSettings(params.userId);
    const current = sanitizeProfile(settings.aiLearning);
    const chars = params.assistantText.length;
    const success = chars > 0 && !params.wasFallback;
    const responseCount = current.responseCount + 1;
    const avgResponseChars = Math.round((current.avgResponseChars * current.responseCount + chars) / Math.max(1, responseCount));
    const quality = estimateQuality({
      success,
      wasFallback: params.wasFallback,
      latencyMs: params.latencyMs,
      chars,
      memoryHits: params.memoryHits,
      liveUsed: params.liveUsed
    });
    const memoryDelta = params.memoryHits > 0 ? success ? 0.025 : -0.04 : -5e-3;
    const liveDelta = params.liveUsed ? success && params.latencyMs < 9e3 ? 0.025 : -0.05 : 2e-3;
    const toolEffectiveness = { ...current.toolEffectiveness };
    for (const tool of params.toolNames) {
      toolEffectiveness[tool] = clamp01((toolEffectiveness[tool] ?? 0.55) + (success ? 0.025 : -0.05));
    }
    const next = {
      preferredLength: inferPreferredLength(params.userText, current.preferredLength),
      communicationStyle: inferStyle(params.userText, current.communicationStyle),
      responseCount,
      avgResponseChars,
      memoryEffectiveness: clamp01(current.memoryEffectiveness + memoryDelta),
      liveDataEffectiveness: clamp01(current.liveDataEffectiveness + liveDelta),
      toolEffectiveness,
      recurringTopics: mergeSignals(current.recurringTopics, extractTopics(params.userText), "topic", now, 12),
      activeProjects: mergeSignals(current.activeProjects, extractProjects(`${params.userText}
${params.assistantText}`), "name", now, 10),
      lastQualityScore: quality,
      updatedAt: now
    };
    await supabaseAdmin.from("profiles").update({ settings: { ...settings, aiLearning: next } }).eq("user_id", params.userId);
  } catch {
  }
}
const CACHE_TTL = 5 * 6e4;
class TTLCache {
  constructor(maxEntries = 200, ttlMs = CACHE_TTL) {
    this.maxEntries = maxEntries;
    this.ttlMs = ttlMs;
  }
  maxEntries;
  ttlMs;
  map = /* @__PURE__ */ new Map();
  sweep() {
    const now = Date.now();
    for (const [k, e] of this.map) if (now > e.expires) this.map.delete(k);
  }
  get(key) {
    const e = this.map.get(key);
    if (!e) return void 0;
    if (Date.now() > e.expires) {
      this.map.delete(key);
      return void 0;
    }
    this.map.delete(key);
    this.map.set(key, e);
    return e.value;
  }
  set(key, value) {
    this.sweep();
    if (this.map.size >= this.maxEntries) {
      const oldest = this.map.keys().next().value;
      if (oldest !== void 0) this.map.delete(oldest);
    }
    this.map.set(key, { value, expires: Date.now() + this.ttlMs });
  }
  size() {
    return this.map.size;
  }
}
const liveDataCache = new TTLCache(200, CACHE_TTL);
async function safe(fn, fallback, label = "safe") {
  try {
    return await fn();
  } catch (err) {
    console.warn(`[safe:${label}] swallowed error`, { err: String(err) });
    return fallback;
  }
}
class Metrics {
  fallbackCount = 0;
  fallbackByReason = /* @__PURE__ */ new Map();
  recordFallback(reason) {
    this.fallbackCount++;
    this.fallbackByReason.set(reason, (this.fallbackByReason.get(reason) ?? 0) + 1);
    console.warn("[metrics:fallback]", {
      reason,
      total: this.fallbackCount,
      byReason: Object.fromEntries(this.fallbackByReason)
    });
  }
}
const metrics = new Metrics();
const GATEWAY_URL$1 = "https://ai.gateway.lovable.dev/v1/chat/completions";
const DEFAULT_MODEL_CANDIDATES = [
  "openai/gpt-5.5",
  "openai/gpt-5.2",
  "openai/gpt-5.1",
  "openai/gpt-5",
  "google/gemini-2.5-flash"
];
let cachedWorkingModel = null;
function configuredModels(preferredModels = []) {
  const configured = [
    ...preferredModels,
    process.env.AI_WORKMATE_MODEL,
    process.env.LOVABLE_MODEL,
    process.env.CHAT_MODEL,
    process.env.AI_MODEL
  ].flatMap((value) => (value ?? "").split(",")).map((value) => value.trim()).filter(Boolean);
  const ordered = configured.length > 0 ? [...configured, ...DEFAULT_MODEL_CANDIDATES] : cachedWorkingModel ? [cachedWorkingModel, ...DEFAULT_MODEL_CANDIDATES] : DEFAULT_MODEL_CANDIDATES;
  return Array.from(new Set(ordered));
}
function shouldTryNextModel(response) {
  return response.status === 400 || response.status === 404 || response.status >= 500;
}
async function requestChatCompletion({
  apiKey,
  messages,
  signal,
  preferredModels = []
}) {
  const models = configuredModels(preferredModels);
  const attemptedModels = [];
  let last = null;
  for (const model of models) {
    attemptedModels.push(model);
    const response = await fetch(GATEWAY_URL$1, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model, stream: true, messages }),
      signal
    });
    if (response.ok) {
      cachedWorkingModel = model;
      return { response, model, attemptedModels };
    }
    last = { response, model };
    if (!shouldTryNextModel(response)) break;
    await response.text().catch(() => "");
  }
  if (!last) throw new Error("No chat models configured");
  return { response: last.response, model: last.model, attemptedModels };
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const OWNER_ADMIN_EMAIL = "aidenhaynes43215@gmail.com";
const ControlInput = objectType({
  modelOverride: stringType().trim().max(120).nullable().optional(),
  systemOverride: stringType().trim().max(4e3).nullable().optional(),
  forceLiveData: booleanType().optional(),
  forceMemory: booleanType().optional()
});
const DEFAULT_CONTROL = {
  modelOverride: null,
  systemOverride: null,
  forceLiveData: false,
  forceMemory: false
};
function adminEmails() {
  const configured = (process.env.AI_WORKMATE_OWNER_EMAILS ?? "").split(",").map((email) => email.trim().toLowerCase()).filter(Boolean);
  return /* @__PURE__ */ new Set([OWNER_ADMIN_EMAIL, ...configured]);
}
function normalizeEmail(email) {
  return email ? email.trim().toLowerCase() : null;
}
function sanitizeControl(value) {
  const raw = value && typeof value === "object" ? value : {};
  return {
    modelOverride: typeof raw.modelOverride === "string" && raw.modelOverride.trim() ? raw.modelOverride.trim().slice(0, 120) : null,
    systemOverride: typeof raw.systemOverride === "string" && raw.systemOverride.trim() ? raw.systemOverride.trim().slice(0, 4e3) : null,
    forceLiveData: raw.forceLiveData === true,
    forceMemory: raw.forceMemory === true,
    updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : void 0,
    updatedBy: typeof raw.updatedBy === "string" ? raw.updatedBy : void 0
  };
}
async function getProfileByUserId(userId) {
  const {
    data
  } = await supabaseAdmin.from("profiles").select("user_id, email, settings").eq("user_id", userId).maybeSingle();
  return data;
}
async function isAdminUser(userId, claims) {
  const claimEmail = normalizeEmail(claims?.email);
  if (claimEmail && adminEmails().has(claimEmail)) return true;
  const {
    data: role
  } = await supabaseAdmin.from("user_roles").select("id").eq("user_id", userId).eq("role", "admin").maybeSingle();
  if (role) return true;
  const profile = await getProfileByUserId(userId);
  const profileEmail = normalizeEmail(profile?.email);
  return Boolean(profileEmail && adminEmails().has(profileEmail));
}
async function getAiControlForUser(userId, claims) {
  const admin = await isAdminUser(userId, claims);
  if (!admin) return DEFAULT_CONTROL;
  const profile = await getProfileByUserId(userId);
  const settings = profile?.settings && typeof profile.settings === "object" && !Array.isArray(profile.settings) ? profile.settings : {};
  return sanitizeControl(settings.aiControl);
}
const getAdminControlPanel = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("9933d78bfa6cb9e1110787738c0567db8a38613a65fb146b1299f27474eb7b27"));
const saveAdminAiControl = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => ControlInput.parse(input)).handler(createSsrRpc("6cb2bc8359f73e0a2b8fd5f502234a377b2a1550b70ae905649e080231304fcc"));
const KEEP_RECENT = 12;
const SUMMARIZE_THRESHOLD = 16;
const GATEWAY_URL = "https://ai.gateway.lovable.dev/v1/chat/completions";
const SUMMARY_MODEL = "google/gemini-2.5-flash-lite";
const SUMMARY_TIMEOUT_MS = 8e3;
async function loadConversationSummary(conversationId) {
  try {
    const { data } = await supabaseAdmin.from("conversations").select("summary").eq("id", conversationId).maybeSingle();
    const summary = data?.summary;
    return summary && summary.trim() ? summary : null;
  } catch {
    return null;
  }
}
function trimHistoryWithSummary(messages, storedSummary) {
  if (!Array.isArray(messages) || messages.length <= SUMMARIZE_THRESHOLD) {
    return { messages, summary: storedSummary, trimmedCount: 0 };
  }
  const tail = messages.slice(-KEEP_RECENT);
  const trimmedCount = messages.length - tail.length;
  return { messages: tail, summary: storedSummary, trimmedCount };
}
function formatSummaryForPrompt(summary, trimmedCount) {
  if (!summary) return null;
  const header = trimmedCount > 0 ? `Compressed brief of the earlier ${trimmedCount} turns of this conversation (use as context, do not quote verbatim):` : "Compressed brief of the earlier turns of this conversation:";
  return `${header}
${summary.trim()}`;
}
function maybeRefreshSummary(params) {
  const { conversationId, apiKey, messages, existingSummary } = params;
  if (!apiKey) return;
  if (!Array.isArray(messages) || messages.length <= SUMMARIZE_THRESHOLD) return;
  const older = messages.slice(0, messages.length - KEEP_RECENT);
  if (older.length < 4) return;
  void (async () => {
    try {
      const transcript = older.map((m) => `${m.role.toUpperCase()}: ${m.content.replace(/\s+/g, " ").slice(0, 1200)}`).join("\n").slice(0, 12e3);
      const system = [
        "You compress chat history into a tight operational brief for an AI assistant.",
        "Capture: user identity hints, goals/projects/tasks they care about, decisions made, open questions, preferences, and anything the assistant promised.",
        "Drop pleasantries, repeated context, and chain-of-thought.",
        "Output: 6-12 short bullet points. No preamble. No quotes. No headings."
      ].join(" ");
      const seed = existingSummary?.trim() ? `Existing brief to merge with the new content (keep what's still true, drop what's outdated):
${existingSummary}` : "No prior brief exists. Build one from scratch.";
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), SUMMARY_TIMEOUT_MS);
      let summary = "";
      try {
        const res = await fetch(GATEWAY_URL, {
          method: "POST",
          headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            model: SUMMARY_MODEL,
            stream: false,
            messages: [
              { role: "system", content: system },
              { role: "user", content: `${seed}

Conversation excerpt:
${transcript}` }
            ]
          }),
          signal: controller.signal
        });
        if (!res.ok) return;
        const json = await res.json().catch(() => null);
        summary = json?.choices?.[0]?.message?.content?.trim() ?? "";
      } finally {
        clearTimeout(timeout);
      }
      if (!summary) return;
      summary = summary.slice(0, 3e3);
      await supabaseAdmin.from("conversations").update({ summary }).eq("id", conversationId);
      console.log("[summarizer] refreshed", { conversationId, chars: summary.length, fromTurns: older.length });
    } catch (err) {
      console.warn("[summarizer] failed", { err: String(err) });
    }
  })();
}
const AGENT_BY_INTENT = {
  general: "CEO Agent",
  research: "Research Agent",
  coding: "Coding Agent",
  planning: "Project Manager",
  business: "Business Agent",
  finance: "Finance Agent",
  legal: "Legal Assistant",
  medical: "Medical Research Assistant",
  operations: "Operations Agent"
};
const SUPPORTING_BY_INTENT = {
  research: ["CEO Agent"],
  coding: ["Project Manager"],
  planning: ["CEO Agent", "Operations Agent"],
  business: ["CEO Agent", "Finance Agent"],
  finance: ["CEO Agent"],
  legal: ["CEO Agent"],
  medical: ["Research Agent"],
  operations: ["Project Manager"]
};
function detectIntent(text) {
  const input = text.toLowerCase();
  if (/(code|bug|typescript|react|api|database|schema|architecture|refactor|debug)/i.test(input)) return "coding";
  if (/(research|compare|find sources|citations|benchmark|market scan|analyze competitors)/i.test(input)) return "research";
  if (/(plan|roadmap|milestone|timeline|next steps|sequence|organize)/i.test(input)) return "planning";
  if (/(pricing|go to market|gtm|customer|sales|positioning|launch|strategy)/i.test(input)) return "business";
  if (/(runway|budget|forecast|projection|fundraising|burn)/i.test(input)) return "finance";
  if (/(contract|policy|terms|compliance|legal|risk)/i.test(input)) return "legal";
  if (/(medical|clinical|symptom|treatment|dosage|study)/i.test(input)) return "medical";
  if (/(workflow|ops|operations|handoff|process|automation)/i.test(input)) return "operations";
  return "general";
}
function selectAgent(params) {
  const intent = detectIntent(params.userText);
  const primary = AGENT_BY_INTENT[intent];
  const supporting = [...SUPPORTING_BY_INTENT[intent] ?? []];
  const rationale = [`Primary intent detected: ${intent}`];
  if (params.risk === "high" && !supporting.includes("CEO Agent") && primary !== "CEO Agent") {
    supporting.unshift("CEO Agent");
    rationale.push("High-risk task: added CEO Agent for oversight");
  }
  if (intent === "research") rationale.push("Needs evidence gathering and source comparison");
  if (intent === "coding") rationale.push("Needs systems or implementation reasoning");
  if (intent === "planning") rationale.push("Needs sequencing, milestones, and execution structure");
  return { primary, supporting, rationale };
}
const MODELS = [
  {
    id: "openai/gpt-5.5",
    provider: "openai",
    label: "GPT-5.5",
    strengths: ["general", "coding", "planning", "business"],
    speed: 0.74,
    cost: 0.35,
    reasoning: 0.97,
    reliability: 0.95,
    maxContext: 2e5,
    enabled: true
  },
  {
    id: "openai/gpt-5.2",
    provider: "openai",
    label: "GPT-5.2",
    strengths: ["general", "coding", "business", "operations"],
    speed: 0.8,
    cost: 0.32,
    reasoning: 0.93,
    reliability: 0.93,
    maxContext: 2e5,
    enabled: true
  },
  {
    id: "google/gemini-2.5-flash",
    provider: "google",
    label: "Gemini 2.5 Flash",
    strengths: ["research", "general", "planning", "operations"],
    speed: 0.94,
    cost: 0.12,
    reasoning: 0.84,
    reliability: 0.88,
    maxContext: 1e6,
    enabled: true
  },
  {
    id: "google/gemini-2.5-flash-lite",
    provider: "google",
    label: "Gemini 2.5 Flash Lite",
    strengths: ["general", "operations"],
    speed: 0.98,
    cost: 0.05,
    reasoning: 0.74,
    reliability: 0.82,
    maxContext: 1e6,
    enabled: true
  }
];
function scoreModel(model, intent, risk, effort) {
  const intentFit = model.strengths.includes(intent) ? 0.32 : 0.08;
  const reasoningWeight = risk === "high" ? 0.34 : risk === "medium" ? 0.26 : 0.18;
  const speedWeight = effort === "fast" ? 0.24 : effort === "standard" ? 0.12 : 0.04;
  const contextWeight = intent === "research" ? 0.12 : 0.06;
  const costPenalty = effort === "deep" ? model.cost * 0.04 : model.cost * 0.1;
  return intentFit + model.reasoning * reasoningWeight + model.speed * speedWeight + model.reliability * 0.2 + (model.maxContext >= 2e5 ? 1 : model.maxContext / 2e5) * contextWeight - costPenalty;
}
function selectModel(params) {
  const risk = params.risk ?? "medium";
  const effort = params.effort ?? "standard";
  const intent = detectIntent(params.userText);
  const ranked = MODELS.filter((model) => model.enabled !== false).map((model) => ({ model, score: scoreModel(model, intent, risk, effort) })).sort((a, b) => b.score - a.score);
  const primary = ranked[0]?.model ?? MODELS[0];
  const fallbackModels = ranked.slice(1, 4).map((row) => row.model.id);
  const requiresVerification = params.forceVerification === true || risk === "high" || intent === "research" || intent === "medical" || intent === "legal" || intent === "finance";
  const requiresTools = intent === "research" || /(latest|current|today|right now|compare|source|citation)/i.test(params.userText);
  const rationale = [
    `Detected intent: ${intent}`,
    `Selected primary model: ${primary.label}`,
    risk === "high" ? "High-risk task: optimized for reasoning and reliability" : `Effort mode: ${effort}`
  ];
  if (requiresTools) rationale.push("Tool use recommended for freshness or evidence");
  if (requiresVerification) rationale.push("Verification required before high-confidence output");
  return {
    primaryModel: primary.id,
    fallbackModels,
    rationale,
    requiresVerification,
    requiresTools
  };
}
function clean(text, max = 240) {
  const value = (text ?? "").replace(/\s+/g, " ").trim();
  if (!value) return null;
  return value.slice(0, max);
}
async function retrieveContext(params) {
  const limit = Math.max(1, Math.min(params.limit, 10));
  const [projectRes, memoryRes, sourceRes, verificationRes, taskRes, opRes] = await Promise.all([
    params.projectId ? supabaseAdmin.from("projects").select("name, description, status, notes").eq("id", params.projectId).maybeSingle() : Promise.resolve({ data: null }),
    supabaseAdmin.from("memories").select("content, layer, source, confidence, verified").eq("created_by", params.userId).order("updated_at", { ascending: false }).limit(limit),
    params.projectId || params.conversationId ? supabaseAdmin.from("sources").select("title, snippet, freshness_score, is_verified").or([
      params.projectId ? `project_id.eq.${params.projectId}` : null,
      params.conversationId ? `conversation_id.eq.${params.conversationId}` : null
    ].filter(Boolean).join(",")).order("fetched_at", { ascending: false }).limit(limit) : Promise.resolve({ data: [] }),
    params.projectId || params.conversationId ? supabaseAdmin.from("verification_logs").select("claim, verdict, confidence").or([
      params.projectId ? `project_id.eq.${params.projectId}` : null,
      params.conversationId ? `conversation_id.eq.${params.conversationId}` : null
    ].filter(Boolean).join(",")).order("verified_at", { ascending: false }).limit(limit) : Promise.resolve({ data: [] }),
    params.projectId ? supabaseAdmin.from("tasks").select("title, status, verification_status, assigned_agent").eq("project_id", params.projectId).order("updated_at", { ascending: false }).limit(limit) : Promise.resolve({ data: [] }),
    params.projectId ? supabaseAdmin.from("operational_knowledge").select("title, content, confidence, agent_type").eq("project_id", params.projectId).eq("is_active", true).order("updated_at", { ascending: false }).limit(limit) : Promise.resolve({ data: [] })
  ]);
  const projectSummary = projectRes.data ? clean(`${projectRes.data.name}: ${projectRes.data.description ?? ""} Status: ${projectRes.data.status ?? "unknown"}. ${projectRes.data.notes ?? ""}`, 400) : null;
  return {
    projectSummary,
    memoryItems: (memoryRes.data ?? []).map((row) => clean(`[${row.layer}] ${row.content} (${row.verified ? "verified" : "unverified"}, conf ${row.confidence ?? "?"}, src ${row.source ?? "unknown"})`, 220)).filter(Boolean),
    sourceItems: (sourceRes.data ?? []).map((row) => clean(`${row.title}: ${row.snippet ?? ""} (freshness ${row.freshness_score ?? "?"}, ${row.is_verified ? "verified" : "unverified"})`, 240)).filter(Boolean),
    verificationItems: (verificationRes.data ?? []).map((row) => clean(`${row.claim} -> ${row.verdict} (${row.confidence ?? "?"})`, 220)).filter(Boolean),
    taskItems: (taskRes.data ?? []).map((row) => clean(`${row.title} [${row.status}] via ${row.assigned_agent ?? "unassigned"}, verify=${row.verification_status ?? "unknown"}`, 200)).filter(Boolean),
    operationalNotes: (opRes.data ?? []).map((row) => clean(`${row.title}: ${row.content} (${row.agent_type ?? "system"}, conf ${row.confidence ?? "?"})`, 220)).filter(Boolean)
  };
}
function formatContextPacket(context) {
  const sections = [
    context.projectSummary ? `PROJECT
${context.projectSummary}` : null,
    context.memoryItems.length ? `MEMORY
- ${context.memoryItems.join("\n- ")}` : null,
    context.sourceItems.length ? `SOURCES
- ${context.sourceItems.join("\n- ")}` : null,
    context.verificationItems.length ? `VERIFICATION
- ${context.verificationItems.join("\n- ")}` : null,
    context.taskItems.length ? `TASKS
- ${context.taskItems.join("\n- ")}` : null,
    context.operationalNotes.length ? `OPERATIONAL KNOWLEDGE
- ${context.operationalNotes.join("\n- ")}` : null
  ].filter(Boolean);
  return sections.join("\n\n");
}
function normalized(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/\s+/).map((token) => token.trim()).filter((token) => token.length > 3);
}
function verifyClaim(claim, context) {
  const evidencePool = [
    ...context.memoryItems,
    ...context.sourceItems,
    ...context.verificationItems,
    ...context.operationalNotes,
    ...context.taskItems,
    ...context.projectSummary ? [context.projectSummary] : []
  ];
  const claimTerms = new Set(normalized(claim));
  const matches = evidencePool.filter((item) => {
    const itemTerms = new Set(normalized(item));
    let hits = 0;
    for (const term of claimTerms) if (itemTerms.has(term)) hits += 1;
    return hits >= Math.max(1, Math.ceil(claimTerms.size * 0.25));
  });
  const contradicted = matches.some((item) => /contradicted|false|failed|unverified/i.test(item));
  const verified = matches.some((item) => /verified|supported/i.test(item));
  const confidence = Math.min(0.98, 0.2 + matches.length * 0.18 + (verified ? 0.14 : 0));
  let verdict = "unverified";
  if (contradicted) verdict = "contradicted";
  else if (matches.length >= 3 || matches.length >= 2 && verified) verdict = "supported";
  else if (matches.length >= 1) verdict = "partially_supported";
  return {
    claim,
    verdict,
    confidence: Number(confidence.toFixed(2)),
    evidence: matches.slice(0, 6),
    gaps: matches.length ? [] : ["No strong evidence found in current memory, sources, or verification logs."]
  };
}
const Body = objectType({
  conversationId: stringType().uuid(),
  messages: arrayType(objectType({
    role: enumType(["user", "assistant", "system"]),
    content: stringType().min(1).max(2e4)
  })).min(1).max(50)
});
const FRIENDLY_FALLBACK = "Sorry, something went wrong. Please try again.";
const LIVE_OPTIONAL_GATE_MS = 700;
const LIVE_REQUIRED_GATE_MS = 5200;
const LIVE_OPTIONAL_PROVIDER_TIMEOUT_MS = 1800;
const LIVE_REQUIRED_PROVIDER_TIMEOUT_MS = 2500;
const DEFAULT_AI_CONTROL = {
  modelOverride: null,
  systemOverride: null,
  forceLiveData: false,
  forceMemory: false
};
const LIVE_REQUIRED_PATTERNS = [
  /\b(today|tonight|right now|currently|latest|breaking|news|what(?:'s| is) happening)\b/i,
  /\b(price|trading at|stock|stocks|bitcoin|btc|crypto|weather|forecast|score|scores|standings|who won)\b/i,
  /\b(nba|nfl|nhl|mlb|epl|premier league|game|match)\b.*\b(latest|today|tonight|score|won|result)\b/i
];
function isLiveRequiredQuery(text) {
  return LIVE_REQUIRED_PATTERNS.some((re) => re.test(text));
}
function inferRiskLevel(text, liveRequired) {
  if (liveRequired || /(medical|clinical|legal|contract|compliance|fundraising|runway|budget|forecast|dosage|treatment|security)/i.test(text)) {
    return "high";
  }
  if (/(price|launch|strategy|architecture|migration|database|workflow|automation)/i.test(text)) {
    return "medium";
  }
  return "low";
}
function inferEffortLevel(text) {
  if (/(deep|detailed|thorough|complete|comprehensive|master|step by step|full plan)/i.test(text)) return "deep";
  if (/(quick|brief|short|fast|summary|tldr|tl;dr)/i.test(text)) return "fast";
  return "standard";
}
function log(reqId, stage, status, info = {}) {
  const payload = { reqId, stage, status, ...info };
  if (status === "error") console.error(`[chat:${stage}]`, payload);
  else if (status === "warn") console.warn(`[chat:${stage}]`, payload);
  else console.log(`[chat:${stage}]`, payload);
}
function sseHeaders() {
  return {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache, no-transform",
    "X-Accel-Buffering": "no"
  };
}
function gracefulStream(reqId, message, reason) {
  log(reqId, "llm.stream", "warn", { fallback: true, reason });
  metrics.recordFallback(reason);
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      try {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta: message, isFallback: true, reason })}

`));
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      } catch {
      } finally {
        controller.close();
      }
    }
  });
  return new Response(stream, {
    status: 200,
    headers: { ...sseHeaders(), "X-Chat-Fallback": "1", "X-Chat-Fallback-Reason": reason }
  });
}
function makeUserClient(token) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { storage: void 0, persistSession: false, autoRefreshToken: false }
  });
}
async function fetchConversation(sb, convId) {
  try {
    const { data } = await sb.from("conversations").select("id, user_id, title, workspace_id, organization_id").eq("id", convId).maybeSingle();
    return data ?? null;
  } catch {
    return null;
  }
}
async function cachedWebSearch(query, timeoutMs = LIVE_REQUIRED_PROVIDER_TIMEOUT_MS) {
  const key = query.trim().toLowerCase().slice(0, 300);
  const hit = liveDataCache.get(key);
  if (hit !== void 0) return hit;
  const result = await webSearch(query, timeoutMs);
  if (result) liveDataCache.set(key, result);
  return result;
}
const Route$2 = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const reqId = crypto.randomUUID();
        const t0 = Date.now();
        try {
          const auth = request.headers.get("authorization") ?? "";
          const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
          if (!token) {
            log(reqId, "auth", "warn", { reason: "missing_bearer" });
            return gracefulStream(reqId, "Your session expired. Please sign in again.", "no_token");
          }
          const sb = makeUserClient(token);
          if (!sb) {
            log(reqId, "auth", "error", { reason: "missing_supabase_env" });
            return gracefulStream(reqId, FRIENDLY_FALLBACK, "missing_supabase_env");
          }
          let userId;
          let userEmail = null;
          try {
            const { data: userData, error: userErr } = await sb.auth.getUser(token);
            if (userErr || !userData.user) {
              log(reqId, "auth", "warn", { reason: "invalid_token", err: userErr?.message });
              return gracefulStream(reqId, "Your session expired. Please sign in again.", "invalid_token");
            }
            userId = userData.user.id;
            userEmail = userData.user.email ?? null;
            log(reqId, "auth", "ok", { userId });
          } catch (err) {
            log(reqId, "auth", "error", { err: String(err) });
            return gracefulStream(reqId, FRIENDLY_FALLBACK, "auth_exception");
          }
          const aiControl = await safe(
            () => getAiControlForUser(userId, { email: userEmail ?? void 0, sub: userId }),
            DEFAULT_AI_CONTROL,
            "admin_control"
          );
          let parsed;
          try {
            parsed = Body.parse(await request.json());
            log(reqId, "validate", "ok", { conversationId: parsed.conversationId, messageCount: parsed.messages.length });
          } catch (err) {
            log(reqId, "validate", "error", { err: String(err) });
            return gracefulStream(reqId, "That message couldn't be processed. Please try again.", "bad_input");
          }
          const lastUser = [...parsed.messages].reverse().find((m) => m.role === "user");
          const lastUserText = lastUser?.content ?? "";
          const decision = routeMessage(lastUserText);
          const liveRequired = decision.needsLiveData && isLiveRequiredQuery(lastUserText);
          const needsLiveData = decision.needsLiveData || aiControl.forceLiveData;
          const needsMemory = decision.needsMemory || aiControl.forceMemory;
          const frontierRisk = inferRiskLevel(lastUserText, liveRequired);
          const frontierEffort = inferEffortLevel(lastUserText);
          const frontierAgent = selectAgent({ userText: lastUserText, risk: frontierRisk });
          const frontierModelPlan = selectModel({
            userText: lastUserText,
            risk: frontierRisk,
            effort: frontierEffort,
            forceVerification: liveRequired
          });
          log(reqId, "router", "ok", {
            ...decision,
            needsLiveData,
            needsMemory,
            liveRequired,
            adminControl: {
              modelOverride: Boolean(aiControl.modelOverride),
              systemOverride: Boolean(aiControl.systemOverride),
              forceLiveData: aiControl.forceLiveData,
              forceMemory: aiControl.forceMemory
            },
            frontier: {
              risk: frontierRisk,
              effort: frontierEffort,
              primaryAgent: frontierAgent.primary,
              primaryModel: frontierModelPlan.primaryModel,
              verificationRequired: frontierModelPlan.requiresVerification,
              toolsRecommended: frontierModelPlan.requiresTools
            }
          });
          const tParallel = Date.now();
          const [conv, memories, routingPref, adaptiveProfile, storedSummary] = await Promise.all([
            safe(() => fetchConversation(sb, parsed.conversationId), null, "conv"),
            needsMemory ? safe(() => recallMemories(userId, 8, lastUserText), [], "memory") : Promise.resolve([]),
            safe(
              () => recallRoutingPreference(userId, decision.intent),
              { preferLive: null, avgLatency: 0, sampleSize: 0 },
              "routing_pref"
            ),
            safe(() => recallAdaptiveProfile(userId), null, "adaptive_profile"),
            safe(() => loadConversationSummary(parsed.conversationId), null, "summary")
          ]);
          const trimmed = trimHistoryWithSummary(parsed.messages, storedSummary);
          const summaryBlock = formatSummaryForPrompt(trimmed.summary, trimmed.trimmedCount);
          log(reqId, "router", "ok", { historyTrimmed: trimmed.trimmedCount, summaryChars: summaryBlock?.length ?? 0 });
          const liveAllowedByProfile = liveRequired || !adaptiveProfile || adaptiveProfile.liveDataEffectiveness >= 0.18 || aiControl.forceLiveData;
          const shouldAttemptLive = needsLiveData && liveAllowedByProfile && (liveRequired || routingPref.preferLive !== false || aiControl.forceLiveData);
          const liveGateMs = liveRequired ? LIVE_REQUIRED_GATE_MS : LIVE_OPTIONAL_GATE_MS;
          const liveProviderTimeoutMs = liveRequired ? LIVE_REQUIRED_PROVIDER_TIMEOUT_MS : LIVE_OPTIONAL_PROVIDER_TIMEOUT_MS;
          const livePromise = shouldAttemptLive ? safe(() => cachedWebSearch(lastUserText, liveProviderTimeoutMs), null, "live") : Promise.resolve(null);
          const liveEarly = shouldAttemptLive ? await Promise.race([
            livePromise,
            new Promise((r) => setTimeout(() => r(null), liveGateMs))
          ]) : null;
          const live = routingPref.preferLive === false && !liveRequired && !aiControl.forceLiveData ? null : liveEarly;
          const liveDeferred = shouldAttemptLive && !liveEarly && !liveRequired;
          log(reqId, "router", "ok", { adaptive: { preferLive: routingPref.preferLive, samples: routingPref.sampleSize } });
          log(reqId, "memory", "ok", { hits: memories.length });
          log(reqId, "live", live ? "ok" : "warn", {
            triggered: needsLiveData,
            required: liveRequired,
            attempted: shouldAttemptLive,
            allowedByProfile: liveAllowedByProfile,
            gateMs: liveGateMs,
            providerTimeoutMs: liveProviderTimeoutMs,
            provider: live?.provider ?? null,
            sources: live?.sources.length ?? 0,
            injected: Boolean(live),
            deferred: liveDeferred,
            ms: Date.now() - tParallel
          });
          log(reqId, "tools", "ok", { invoked: shouldAttemptLive ? 1 : 0 });
          if (!conv || conv.user_id !== userId) {
            log(reqId, "router", "warn", { reason: !conv ? "not_found" : "forbidden" });
            return gracefulStream(reqId, "This conversation is no longer available.", "conv_unavailable");
          }
          const frontierContext = await safe(
            () => retrieveContext({ userId, conversationId: conv.id, limit: 5 }),
            {
              projectSummary: null,
              memoryItems: [],
              sourceItems: [],
              verificationItems: [],
              taskItems: [],
              operationalNotes: []
            },
            "frontier_context"
          );
          const frontierContextBlock = formatContextPacket(frontierContext);
          const frontierVerification = frontierModelPlan.requiresVerification ? verifyClaim(lastUserText, frontierContext) : null;
          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            log(reqId, "llm.request", "error", { reason: "missing_api_key" });
            return gracefulStream(reqId, "The AI service is temporarily unavailable. Please try again shortly.", "no_api_key");
          }
          if (lastUser) {
            const userContent = lastUser.content;
            const isNewConv = conv.title === "New conversation";
            void (async () => {
              try {
                await sb.from("messages").insert({
                  conversation_id: conv.id,
                  user_id: userId,
                  role: "user",
                  content: userContent,
                  workspace_id: conv.workspace_id,
                  organization_id: conv.organization_id
                });
                if (isNewConv) {
                  await sb.from("conversations").update({ title: userContent.slice(0, 60).trim() }).eq("id", conv.id);
                }
                log(reqId, "persist", "ok", { kind: "user_message" });
              } catch (err) {
                log(reqId, "persist", "warn", { kind: "user_message", err: String(err) });
              }
            })();
            const pref = extractPreference(userContent);
            if (pref) void storeMemory(userId, pref, "preference", 0.85).catch(() => {
            });
            const candidates = extractMemoryCandidates(userContent);
            if (candidates.length) void persistMemoryCandidates(userId, candidates).catch(() => {
            });
          }
          const contextBlocks = [
            aiControl.systemOverride || "You are AI WorkMate, a secure enterprise AI operating system. Be precise, structured, grounded, and operationally useful. Think in projects, tasks, memory, tools, and verification. Never reveal chain-of-thought or internal tooling. Distinguish clearly between memory, retrieved evidence, assumptions, and verified facts. Use available memory only when relevant. Cite live-data sources when provided. If live web context is provided, treat it as current data and do not claim you lack live access. Adapt answer length and style to the user's learned preferences. Provide only the final answer."
          ];
          contextBlocks.push(`Frontier routing plan:
Primary agent: ${frontierAgent.primary}
Supporting agents: ${frontierAgent.supporting.join(", ") || "none"}
Primary model: ${frontierModelPlan.primaryModel}
Fallback models: ${frontierModelPlan.fallbackModels.join(", ") || "none"}
Verification required: ${frontierModelPlan.requiresVerification ? "yes" : "no"}
Tools recommended: ${frontierModelPlan.requiresTools ? "yes" : "no"}`);
          if (adaptiveProfile) contextBlocks.push(formatAdaptiveProfileForPrompt(adaptiveProfile));
          if (summaryBlock) contextBlocks.push(summaryBlock);
          const memBlock = formatMemoriesForPrompt(memories);
          if (memBlock) contextBlocks.push(memBlock);
          if (frontierContextBlock) contextBlocks.push(`Structured operating context:
${frontierContextBlock}`);
          if (frontierVerification) {
            const evidence = frontierVerification.evidence.length ? `
Evidence:
- ${frontierVerification.evidence.join("\n- ")}` : "";
            const gaps = frontierVerification.gaps.length ? `
Gaps:
- ${frontierVerification.gaps.join("\n- ")}` : "";
            contextBlocks.push(`Verification preflight for the user's latest request:
Verdict: ${frontierVerification.verdict}
Confidence: ${frontierVerification.confidence}${evidence}${gaps}`);
          }
          if (live) {
            const srcs = live.sources.length ? `
Sources: ${live.sources.join(", ")}` : "";
            contextBlocks.push(`Live web context for the user's latest question (use it to ground your answer; cite the sources):
${live.summary}${srcs}`);
          } else if (liveRequired) {
            contextBlocks.push(
              "Live web context was required and the live-data system was attempted before this model call, but no usable Tavily or SerpAPI result returned within the bounded latency budget. Do not claim the product has no live-data system; say the live lookup did not return usable results and ask the user to retry if current data is essential."
            );
          }
          const systemPrompt = { role: "system", content: contextBlocks.join("\n\n") };
          let upstream;
          let model = "unknown";
          let attemptedModels = [];
          const llmStart = Date.now();
          try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 6e4);
            try {
              const result = await requestChatCompletion({
                apiKey,
                messages: [systemPrompt, ...trimmed.messages],
                signal: controller.signal,
                preferredModels: aiControl.modelOverride ? [aiControl.modelOverride, frontierModelPlan.primaryModel, ...frontierModelPlan.fallbackModels] : [frontierModelPlan.primaryModel, ...frontierModelPlan.fallbackModels]
              });
              upstream = result.response;
              model = result.model;
              attemptedModels = result.attemptedModels;
            } finally {
              clearTimeout(timeout);
            }
            log(reqId, "llm.request", upstream.ok ? "ok" : "warn", {
              model,
              attemptedModels,
              status: upstream.status,
              ms: Date.now() - llmStart,
              intent: decision.intent,
              liveRequired,
              liveAttempted: shouldAttemptLive,
              liveInjected: Boolean(live),
              liveUsed: !!live,
              memUsed: memories.length,
              primaryAgent: frontierAgent.primary,
              verificationRequired: frontierModelPlan.requiresVerification,
              toolsRecommended: frontierModelPlan.requiresTools
            });
          } catch (err) {
            log(reqId, "llm.request", "error", { model, err: String(err), ms: Date.now() - llmStart });
            return gracefulStream(reqId, FRIENDLY_FALLBACK, "upstream_fetch_failed");
          }
          if (!upstream.ok || !upstream.body) {
            const txt = await upstream.text().catch(() => "");
            log(reqId, "llm.request", "error", { model, status: upstream.status, body: txt.slice(0, 500) });
            if (upstream.status === 429) {
              return gracefulStream(reqId, "The AI service is busy right now. Please try again in a moment.", "rate_limited");
            }
            if (upstream.status === 402) {
              return gracefulStream(reqId, "AI usage limit reached. Please contact your administrator.", "payment_required");
            }
            return gracefulStream(reqId, FRIENDLY_FALLBACK, `upstream_${upstream.status}`);
          }
          const encoder = new TextEncoder();
          const decoder = new TextDecoder();
          let assembled = "";
          const convId = conv.id;
          const convWorkspaceId = conv.workspace_id;
          const convOrganizationId = conv.organization_id;
          const memoryIds = memories.map((m) => m.id);
          let seq = 0;
          const send = (controller, payload) => {
            try {
              const env = { v: 1, requestId: reqId, seq: seq++, ts: Date.now(), ...payload };
              controller.enqueue(encoder.encode(`data: ${JSON.stringify(env)}

`));
            } catch {
            }
          };
          const stream = new ReadableStream({
            async start(controller) {
              send(controller, { type: "state", phase: "thinking" });
              send(controller, {
                type: "route",
                primaryAgent: frontierAgent.primary,
                supportingAgents: frontierAgent.supporting,
                primaryModel: frontierModelPlan.primaryModel,
                fallbackModels: frontierModelPlan.fallbackModels,
                verificationRequired: frontierModelPlan.requiresVerification,
                toolsRecommended: frontierModelPlan.requiresTools,
                risk: frontierRisk,
                effort: frontierEffort
              });
              if (needsLiveData) {
                send(controller, {
                  type: "tool",
                  name: "web_search",
                  status: live ? "done" : liveDeferred ? "start" : "skipped",
                  sources: live?.sources ?? [],
                  provider: live?.provider ?? null,
                  required: liveRequired
                });
                if (live?.sources.length) send(controller, { type: "sources", sources: live.sources, provider: live.provider });
              }
              if (memories.length) send(controller, { type: "memory", used: memories.length, ids: memoryIds });
              if (frontierVerification) {
                send(controller, {
                  type: "verification",
                  verdict: frontierVerification.verdict,
                  confidence: frontierVerification.confidence,
                  evidence: frontierVerification.evidence,
                  gaps: frontierVerification.gaps
                });
              }
              send(controller, { type: "state", phase: "generating" });
              let progressiveSources = [];
              if (liveDeferred) {
                void livePromise.then((late) => {
                  if (!late?.sources.length) {
                    send(controller, { type: "tool", name: "web_search", status: "skipped", required: liveRequired });
                    return;
                  }
                  progressiveSources = late.sources;
                  send(controller, { type: "tool", name: "web_search", status: "done", sources: late.sources, provider: late.provider, required: liveRequired });
                  send(controller, { type: "sources", sources: late.sources, provider: late.provider });
                }).catch(() => {
                });
              }
              const reader = upstream.body.getReader();
              let buffer = "";
              let firstTokenAt = null;
              let errorStage;
              try {
                while (true) {
                  const { done, value } = await reader.read();
                  if (done) break;
                  buffer += decoder.decode(value, { stream: true });
                  let idx;
                  while ((idx = buffer.indexOf("\n")) !== -1) {
                    const line = buffer.slice(0, idx).trim();
                    buffer = buffer.slice(idx + 1);
                    if (!line.startsWith("data:")) continue;
                    const payload = line.slice(5).trim();
                    if (payload === "[DONE]") continue;
                    try {
                      const json = JSON.parse(payload);
                      const delta = json.choices?.[0]?.delta?.content ?? "";
                      if (!delta) continue;
                      if (firstTokenAt === null) {
                        firstTokenAt = Date.now();
                        console.log("[chat:telemetry:ttft]", {
                          requestId: reqId,
                          ttftMs: firstTokenAt - t0,
                          model,
                          intent: decision.intent,
                          liveRequired,
                          usedLive: !!live,
                          memoryCount: memories.length
                        });
                      }
                      assembled += delta;
                      send(controller, { type: "token", delta });
                    } catch {
                    }
                  }
                }
                log(reqId, "llm.stream", "ok", { chars: assembled.length, ms: Date.now() - llmStart });
              } catch (err) {
                errorStage = "llm";
                log(reqId, "llm.stream", "error", { err: String(err), assembledChars: assembled.length });
                if (!assembled) {
                  send(controller, { type: "token", delta: FRIENDLY_FALLBACK, isFallback: true, reason: "stream_failed" });
                }
              } finally {
                let assistantMessageId = null;
                if (assembled.trim()) {
                  try {
                    const { data: inserted } = await sb.from("messages").insert({
                      conversation_id: convId,
                      user_id: userId,
                      role: "assistant",
                      content: assembled,
                      model,
                      workspace_id: convWorkspaceId,
                      organization_id: convOrganizationId
                    }).select("id").single();
                    assistantMessageId = inserted?.id ?? null;
                    await sb.from("conversations").update({ updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", convId);
                    log(reqId, "persist", "ok", { kind: "assistant_message", chars: assembled.length });
                  } catch (err) {
                    if (!errorStage) errorStage = "persist";
                    log(reqId, "persist", "warn", { kind: "assistant_message", err: String(err) });
                  }
                }
                const totalMs = Date.now() - t0;
                const success = assembled.trim().length > 0;
                const toolNames = shouldAttemptLive ? ["web_search"] : [];
                void recordRoutingOutcome({ userId, intent: decision.intent, liveUsed: !!live, success, latencyMs: totalMs }).catch(() => {
                });
                void logResponseOutcome({
                  userId,
                  conversationId: convId,
                  intent: decision.intent,
                  liveUsed: !!live,
                  memoryHits: memories.length,
                  latencyMs: totalMs,
                  chars: assembled.length,
                  wasFallback: !success
                }).catch(() => {
                });
                void recordMemoryUseOutcome(memoryIds, {
                  success,
                  wasFallback: !success,
                  responseChars: assembled.length
                }).catch(() => {
                });
                void recordAdaptiveLearning({
                  userId,
                  userText: lastUserText,
                  assistantText: assembled,
                  intent: decision.intent,
                  liveUsed: !!live || progressiveSources.length > 0,
                  memoryHits: memories.length,
                  toolNames,
                  latencyMs: totalMs,
                  wasFallback: !success
                }).catch(() => {
                });
                if (success) {
                  const candidates = extractMemoryCandidates(lastUserText, assembled);
                  if (candidates.length) void persistMemoryCandidates(userId, candidates).catch(() => {
                  });
                }
                maybeRefreshSummary({
                  conversationId: convId,
                  apiKey,
                  messages: parsed.messages,
                  existingSummary: storedSummary
                });
                send(controller, {
                  type: "done",
                  messageId: assistantMessageId,
                  memoryIds,
                  intent: decision.intent,
                  liveRequired,
                  liveUsed: !!live || progressiveSources.length > 0,
                  sources: live?.sources ?? progressiveSources,
                  primaryAgent: frontierAgent.primary,
                  supportingAgents: frontierAgent.supporting,
                  primaryModel: model,
                  routedModel: frontierModelPlan.primaryModel,
                  verification: frontierVerification,
                  ttfbMs: firstTokenAt ? firstTokenAt - t0 : null,
                  totalMs
                });
                console.log("[chat:telemetry:done]", {
                  requestId: reqId,
                  ttftMs: firstTokenAt ? firstTokenAt - t0 : null,
                  totalMs,
                  model,
                  liveRequired,
                  usedLive: !!live || progressiveSources.length > 0,
                  memoryCount: memories.length,
                  fallbackUsed: !success,
                  errorStage,
                  primaryAgent: frontierAgent.primary,
                  primaryModel: frontierModelPlan.primaryModel
                });
                try {
                  controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                } catch {
                }
                log(reqId, "llm.stream", "ok", { closed: true, totalMs });
                try {
                  controller.close();
                } catch {
                }
              }
            }
          });
          return new Response(stream, {
            status: 200,
            headers: {
              ...sseHeaders(),
              "X-Request-Id": reqId,
              "X-Chat-Intent": decision.intent,
              "X-Chat-Live": needsLiveData ? "1" : "0",
              "X-Chat-Memory": String(memories.length),
              "X-Chat-Agent": frontierAgent.primary,
              "X-Chat-Model": model
            }
          });
        } catch (err) {
          log(reqId, "llm.stream", "error", { unhandled: true, err: String(err) });
          return gracefulStream(reqId, FRIENDLY_FALLBACK, "unhandled");
        }
      }
    }
  }
});
const $$splitComponentImporter$1 = () => import("./workflows._id-BiavHYdj.mjs");
const Route$1 = createFileRoute("/app/workflows/$id")({
  head: () => ({
    meta: [{
      title: "Workflow · AI WorkMate"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./projects._id-DR3e0msE.mjs");
const Route = createFileRoute("/app/projects/$id")({
  head: () => ({
    meta: [{
      title: "Project · WorkMate X"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SignupRoute = Route$m.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$n
});
const LoginRoute = Route$l.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$n
});
const AppRoute = Route$k.update({
  id: "/app",
  path: "/app",
  getParentRoute: () => Route$n
});
const IndexRoute = Route$j.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$n
});
const AppIndexRoute = Route$i.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppRoute
});
const AppWorkflowsRoute = Route$h.update({
  id: "/workflows",
  path: "/workflows",
  getParentRoute: () => AppRoute
});
const AppVerificationRoute = Route$g.update({
  id: "/verification",
  path: "/verification",
  getParentRoute: () => AppRoute
});
const AppUploadsRoute = Route$f.update({
  id: "/uploads",
  path: "/uploads",
  getParentRoute: () => AppRoute
});
const AppToolsRoute = Route$e.update({
  id: "/tools",
  path: "/tools",
  getParentRoute: () => AppRoute
});
const AppSourcesRoute = Route$d.update({
  id: "/sources",
  path: "/sources",
  getParentRoute: () => AppRoute
});
const AppSettingsRoute = Route$c.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => AppRoute
});
const AppProjectsRoute = Route$b.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => AppRoute
});
const AppMemoryRoute = Route$a.update({
  id: "/memory",
  path: "/memory",
  getParentRoute: () => AppRoute
});
const AppMedicalRoute = Route$9.update({
  id: "/medical",
  path: "/medical",
  getParentRoute: () => AppRoute
});
const AppHealthRoute = Route$8.update({
  id: "/health",
  path: "/health",
  getParentRoute: () => AppRoute
});
const AppChatRoute = Route$7.update({
  id: "/chat",
  path: "/chat",
  getParentRoute: () => AppRoute
});
const AppAuditRoute = Route$6.update({
  id: "/audit",
  path: "/audit",
  getParentRoute: () => AppRoute
});
const AppAnalyticsRoute = Route$5.update({
  id: "/analytics",
  path: "/analytics",
  getParentRoute: () => AppRoute
});
const AppAgentsRoute = Route$4.update({
  id: "/agents",
  path: "/agents",
  getParentRoute: () => AppRoute
});
const AppAdminRoute = Route$3.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => AppRoute
});
const ApiChatRoute = Route$2.update({
  id: "/api/chat",
  path: "/api/chat",
  getParentRoute: () => Route$n
});
const AppWorkflowsIdRoute = Route$1.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => AppWorkflowsRoute
});
const AppProjectsIdRoute = Route.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => AppProjectsRoute
});
const AppProjectsRouteChildren = {
  AppProjectsIdRoute
};
const AppProjectsRouteWithChildren = AppProjectsRoute._addFileChildren(
  AppProjectsRouteChildren
);
const AppWorkflowsRouteChildren = {
  AppWorkflowsIdRoute
};
const AppWorkflowsRouteWithChildren = AppWorkflowsRoute._addFileChildren(
  AppWorkflowsRouteChildren
);
const AppRouteChildren = {
  AppAdminRoute,
  AppAgentsRoute,
  AppAnalyticsRoute,
  AppAuditRoute,
  AppChatRoute,
  AppHealthRoute,
  AppMedicalRoute,
  AppMemoryRoute,
  AppProjectsRoute: AppProjectsRouteWithChildren,
  AppSettingsRoute,
  AppSourcesRoute,
  AppToolsRoute,
  AppUploadsRoute,
  AppVerificationRoute,
  AppWorkflowsRoute: AppWorkflowsRouteWithChildren,
  AppIndexRoute
};
const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AppRoute: AppRouteWithChildren,
  LoginRoute,
  SignupRoute,
  ApiChatRoute
};
const routeTree = Route$n._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$1 as R,
  useAuth as a,
  Route as b,
  createSsrRpc as c,
  getAdminControlPanel as g,
  router as r,
  saveAdminAiControl as s,
  useTheme as u
};
