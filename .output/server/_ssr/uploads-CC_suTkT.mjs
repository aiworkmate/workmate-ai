import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useQueryClient, u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { a as useAuth } from "./router-klMIKaP_.mjs";
import { P as PageHeader, S as StatusPill, E as EmptyState } from "./page-primitives-DcyYmWt_.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "./index.mjs";

import "../_libs/seroval.mjs";
import { L as LoaderCircle, D as Upload, j as Search, c as FileText, E as Trash2 } from "../_libs/lucide-react.mjs";

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




function fmtBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}
function UploadsPage() {
  const {
    user
  } = useAuth();
  const qc = useQueryClient();
  const inputRef = reactExports.useRef(null);
  const [dragging, setDragging] = reactExports.useState(false);
  const [uploading, setUploading] = reactExports.useState(false);
  const [q, setQ] = reactExports.useState("");
  const {
    data: uploads = []
  } = useQuery({
    queryKey: ["uploads", user?.id],
    queryFn: async () => {
      const {
        data
      } = await supabase.from("uploads").select("id, file_name, file_size, mime_type, status, created_at, storage_path").order("created_at", {
        ascending: false
      });
      return data ?? [];
    },
    enabled: !!user
  });
  const filtered = uploads.filter((u) => !q || u.file_name.toLowerCase().includes(q.toLowerCase()));
  async function handleFiles(files) {
    if (!files || !user) return;
    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const path = `${user.id}/${Date.now()}-${file.name}`;
        const {
          error: upErr
        } = await supabase.storage.from("uploads").upload(path, file);
        if (upErr) {
          toast.error(`${file.name}: ${upErr.message}`);
          continue;
        }
        const {
          error: insErr
        } = await supabase.from("uploads").insert({
          user_id: user.id,
          file_name: file.name,
          file_size: file.size,
          mime_type: file.type || null,
          storage_path: path,
          status: "ready"
        });
        if (insErr) {
          toast.error(insErr.message);
          continue;
        }
      }
      qc.invalidateQueries({
        queryKey: ["uploads"]
      });
      toast.success("Upload complete");
    } finally {
      setUploading(false);
    }
  }
  async function remove(row) {
    await supabase.storage.from("uploads").remove([row.storage_path]);
    await supabase.from("uploads").delete().eq("id", row.id);
    qc.invalidateQueries({
      queryKey: ["uploads"]
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-y-auto scrollbar-thin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Document intelligence", title: "Documents", description: "Files are stored in your tenant, indexed by the backend, and gated by RLS.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: "success", children: "RLS enforced" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onDragOver: (e) => {
        e.preventDefault();
        setDragging(true);
      }, onDragLeave: () => setDragging(false), onDrop: (e) => {
        e.preventDefault();
        setDragging(false);
        handleFiles(e.dataTransfer.files);
      }, onClick: () => inputRef.current?.click(), className: `flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-10 text-center transition ${dragging ? "border-primary bg-primary/5" : "border-border bg-surface/40 hover:border-primary/40"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: inputRef, type: "file", multiple: true, className: "hidden", onChange: (e) => handleFiles(e.target.files) }),
        uploading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary-glow" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-6 w-6 text-primary-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-base font-semibold", children: "Drop files or click to upload" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: "PDF, DOCX, TXT, images. Up to 50 MB each." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search documents…", className: "w-full rounded-md border border-input bg-surface/60 py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring/40" })
      ] }),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: FileText, title: "No documents yet", description: "Upload a file to begin. Extraction and indexing happen on the backend." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-surface/50 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: "File" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: "Size" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: "Uploaded" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-12" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: filtered.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-surface/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-medium", children: u.file_name })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-xs text-muted-foreground", children: fmtBytes(u.file_size) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { tone: u.status === "ready" ? "success" : u.status === "failed" ? "danger" : "warning", children: u.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-xs text-muted-foreground", children: new Date(u.created_at).toLocaleString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(u), className: "text-muted-foreground hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) }) })
        ] }, u.id)) })
      ] }) })
    ] })
  ] });
}
export {
  UploadsPage as component
};
