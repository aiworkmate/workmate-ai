import { supabase } from "./client-Bjnmba1k.mjs";
const BASE_URL = "".replace(/\/$/, "");
class ApiError extends Error {
  status;
  payload;
  constructor(message, status, payload) {
    super(message);
    this.status = status;
    this.payload = payload;
  }
}
class ApiNotConfiguredError extends ApiError {
  constructor() {
    super("Backend API not configured — set VITE_API_BASE_URL.", 0, null);
  }
}
let tenantHeaders = {};
function setTenantHeaders(h) {
  tenantHeaders = h;
}
async function buildHeaders(extra) {
  const h = new Headers({ accept: "application/json", ...extra });
  if (!h.has("content-type") && extra && !("content-type" in extra)) {
    h.set("content-type", "application/json");
  }
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (token) h.set("authorization", `Bearer ${token}`);
  if (tenantHeaders.organizationId) h.set("x-organization-id", tenantHeaders.organizationId);
  if (tenantHeaders.workspaceId) h.set("x-workspace-id", tenantHeaders.workspaceId);
  return h;
}
async function apiRequest(path, opts = {}) {
  if (!BASE_URL) throw new ApiNotConfiguredError();
  const url = new URL(BASE_URL + (path.startsWith("/") ? path : `/${path}`));
  if (opts.query) {
    for (const [k, v] of Object.entries(opts.query)) {
      if (v !== void 0 && v !== null && v !== "") url.searchParams.set(k, String(v));
    }
  }
  const headers = await buildHeaders(opts.headers);
  const { body: _b, query: _q, headers: _h, ...rest } = opts;
  const init = { ...rest, headers };
  if (opts.body !== void 0) {
    init.body = typeof opts.body === "string" ? opts.body : JSON.stringify(opts.body);
  }
  const res = await fetch(url.toString(), init);
  const ctype = res.headers.get("content-type") ?? "";
  const payload = ctype.includes("application/json") ? await res.json().catch(() => null) : await res.text().catch(() => null);
  if (!res.ok) {
    const msg = payload && typeof payload === "object" && "message" in payload ? String(payload.message) : res.statusText;
    throw new ApiError(msg, res.status, payload);
  }
  return payload;
}
const api = {
  get: (path, query) => apiRequest(path, { method: "GET", query }),
  post: (path, body) => apiRequest(path, { method: "POST", body }),
  patch: (path, body) => apiRequest(path, { method: "PATCH", body }),
  put: (path, body) => apiRequest(path, { method: "PUT", body }),
  delete: (path) => apiRequest(path, { method: "DELETE" })
};
const endpoints = {
  // Tenancy
  organizations: {
    list: () => api.get("/v1/organizations")
  },
  workspaces: {
    list: (orgId) => api.get(`/v1/organizations/${orgId}/workspaces`)
  },
  memberships: {
    me: () => api.get("/v1/me/memberships")
  },
  // Conversations / messages
  conversations: {
    list: () => api.get("/v1/conversations"),
    create: (input) => api.post("/v1/conversations", input),
    rename: (id, title) => api.patch(`/v1/conversations/${id}`, { title }),
    remove: (id) => api.delete(`/v1/conversations/${id}`),
    messages: (id) => api.get(`/v1/conversations/${id}/messages`)
  },
  // Memories
  memories: {
    list: (q) => api.get("/v1/memories", q),
    create: (input) => api.post("/v1/memories", input),
    update: (id, patch) => api.patch(`/v1/memories/${id}`, patch),
    remove: (id) => api.delete(`/v1/memories/${id}`)
  },
  // Uploads
  uploads: {
    list: () => api.get("/v1/uploads"),
    initiate: (input) => api.post("/v1/uploads/initiate", input),
    finalize: (id) => api.post(`/v1/uploads/${id}/finalize`),
    remove: (id) => api.delete(`/v1/uploads/${id}`)
  },
  // Workflows
  workflows: {
    list: () => api.get("/v1/workflows"),
    get: (id) => api.get(`/v1/workflows/${id}`),
    create: (input) => api.post("/v1/workflows", input),
    setStatus: (id, status) => api.patch(`/v1/workflows/${id}`, { status }),
    runs: (id, q) => api.get(`/v1/workflows/${id}/runs`, q),
    retry: (id, runId) => api.post(`/v1/workflows/${id}/runs/${runId}/retry`)
  },
  // Audit
  audit: {
    list: (q) => api.get("/v1/audit", q)
  },
  // Analytics
  analytics: {
    overview: () => api.get("/v1/analytics/overview")
  },
  // GitHub-first brain endpoints: Base44 acts as shell, external runtime acts as brain.
  brain: {
    chat: (input) => api.post("/v1/brain/chat", input),
    context: (input) => api.post("/v1/brain/context", input),
    verify: (input) => api.post("/v1/brain/verify", input),
    workflowPlan: (input) => api.post("/v1/brain/workflows/plan", input),
    health: () => api.get("/v1/brain/health")
  }
};
export {
  ApiNotConfiguredError as A,
  endpoints as e,
  setTenantHeaders as s
};
