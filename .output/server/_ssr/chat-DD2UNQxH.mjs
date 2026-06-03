import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useQueryClient, u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { supabase } from "./client-Bjnmba1k.mjs";
import { a as useAuth, c as createSsrRpc } from "./router-klMIKaP_.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { e as endpoints, A as ApiNotConfiguredError } from "./endpoints-CCL68eY6.mjs";
import { h as highlighter, v as vscDarkPlus } from "../_libs/react-syntax-highlighter.mjs";
import { c as createServerFn } from "./index.mjs";
import { r as requireSupabaseAuth } from "./client.server-4MVRtmLM.mjs";

import "../_libs/seroval.mjs";
import { P as Plus, j as Search, M as MessageSquare, p as Check, X, $ as Pencil, E as Trash2, i as Menu, x as Sparkles, S as ShieldCheck, b as Brain, a0 as Lightbulb, c as FileText, a1 as Code, a2 as ChartBar, G as Globe, a3 as Wrench, a4 as Copy, a5 as RotateCw, a6 as ThumbsUp, a7 as ThumbsDown, a8 as Paperclip, a9 as Image, aa as Mic, ab as Square, L as LoaderCircle, ac as Send, ad as CircleAlert } from "../_libs/lucide-react.mjs";
import { M as Markdown$1 } from "../_libs/react-markdown.mjs";
import { r as remarkGfm } from "../_libs/remark-gfm.mjs";
import { o as objectType, s as stringType, b as booleanType, a as arrayType } from "../_libs/zod.mjs";

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
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




import "../_libs/babel__runtime.mjs";
import "../_libs/refractor.mjs";
import "../_libs/hastscript.mjs";
import "../_libs/property-information.mjs";
import "../_libs/comma-separated-tokens.mjs";
import "../_libs/space-separated-tokens.mjs";
import "../_libs/hast-util-parse-selector.mjs";
import "../_libs/parse-entities.mjs";
import "../_libs/character-entities-legacy.mjs";
import "../_libs/character-reference-invalid.mjs";
import "../_libs/is-decimal.mjs";
import "../_libs/is-hexadecimal.mjs";
import "../_libs/is-alphanumerical.mjs";
import "../_libs/is-alphabetical.mjs";
import "../_libs/decode-named-character-reference+[...].mjs";
import "../_libs/character-entities.mjs";
import "../_libs/devlop.mjs";
import "../_libs/unified.mjs";
import "../_libs/bail.mjs";
import "../_libs/extend.mjs";
import "../_libs/is-plain-obj.mjs";
import "../_libs/trough.mjs";
import "../_libs/vfile.mjs";
import "../_libs/vfile-message.mjs";
import "../_libs/unist-util-stringify-position.mjs";
import "../_libs/remark-parse.mjs";
import "../_libs/mdast-util-from-markdown.mjs";
import "../_libs/micromark-util-decode-numeric-character-reference+[...].mjs";
import "../_libs/micromark-util-decode-string.mjs";
import "../_libs/micromark-util-normalize-identifier+[...].mjs";
import "../_libs/micromark.mjs";
import "../_libs/micromark-util-combine-extensions+[...].mjs";
import "../_libs/micromark-util-chunked.mjs";
import "../_libs/micromark-factory-space.mjs";
import "../_libs/micromark-util-character.mjs";
import "../_libs/micromark-core-commonmark.mjs";
import "../_libs/micromark-util-classify-character+[...].mjs";
import "../_libs/micromark-util-resolve-all.mjs";
import "../_libs/micromark-util-subtokenize.mjs";
import "../_libs/micromark-factory-destination.mjs";
import "../_libs/micromark-factory-label.mjs";
import "../_libs/micromark-factory-title.mjs";
import "../_libs/micromark-factory-whitespace.mjs";
import "../_libs/micromark-util-html-tag-name.mjs";
import "../_libs/mdast-util-to-string.mjs";
import "../_libs/remark-rehype.mjs";
import "../_libs/mdast-util-to-hast.mjs";
import "../_libs/ungap__structured-clone.mjs";
import "../_libs/micromark-util-sanitize-uri.mjs";
import "../_libs/unist-util-position.mjs";
import "../_libs/trim-lines.mjs";
import "../_libs/unist-util-visit.mjs";
import "../_libs/unist-util-visit-parents.mjs";
import "../_libs/unist-util-is.mjs";
import "../_libs/hast-util-to-jsx-runtime.mjs";
import "../_libs/style-to-js.mjs";
import "../_libs/style-to-object.mjs";
import "../_libs/inline-style-parser.mjs";
import "../_libs/hast-util-whitespace.mjs";
import "../_libs/estree-util-is-identifier-name.mjs";
import "../_libs/html-url-attributes.mjs";
import "../_libs/micromark-extension-gfm.mjs";
import "../_libs/micromark-extension-gfm-autolink-literal+[...].mjs";
import "../_libs/micromark-extension-gfm-footnote+[...].mjs";
import "../_libs/micromark-extension-gfm-strikethrough+[...].mjs";
import "../_libs/micromark-extension-gfm-table.mjs";
import "../_libs/micromark-extension-gfm-task-list-item+[...].mjs";
import "../_libs/mdast-util-gfm.mjs";
import "../_libs/mdast-util-gfm-autolink-literal+[...].mjs";
import "../_libs/ccount.mjs";
import "../_libs/mdast-util-find-and-replace.mjs";
import "../_libs/escape-string-regexp.mjs";
import "../_libs/mdast-util-gfm-footnote.mjs";
import "../_libs/mdast-util-gfm-strikethrough.mjs";
import "../_libs/mdast-util-gfm-table.mjs";
import "../_libs/markdown-table.mjs";
import "../_libs/mdast-util-to-markdown.mjs";
import "../_libs/longest-streak.mjs";
import "../_libs/mdast-util-phrasing.mjs";
import "../_libs/mdast-util-gfm-task-list-item.mjs";
function createPending(file) {
  return {
    clientId: crypto.randomUUID(),
    file,
    previewUrl: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
    status: "uploading",
    progress: 0
  };
}
function releasePending(p) {
  if (p.previewUrl) URL.revokeObjectURL(p.previewUrl);
}
async function uploadAttachment(pending, onProgress) {
  try {
    const initiated = await endpoints.uploads.initiate({
      file_name: pending.file.name,
      mime_type: pending.file.type || null,
      size: pending.file.size
    });
    await putWithProgress(initiated.upload_url, pending.file, (pct) => {
      onProgress({ ...pending, status: "uploading", progress: pct });
    });
    onProgress({ ...pending, status: "processing", progress: 1 });
    const finalized = await endpoints.uploads.finalize(initiated.upload.id);
    const done = { ...pending, status: "uploaded", progress: 1, upload: finalized };
    onProgress(done);
    return done;
  } catch (err) {
    if (err instanceof ApiNotConfiguredError) {
      return simulate(pending, onProgress);
    }
    const failed = {
      ...pending,
      status: "failed",
      error: err instanceof Error ? err.message : "Upload failed"
    };
    onProgress(failed);
    return failed;
  }
}
async function simulate(pending, onProgress) {
  for (let i = 1; i <= 5; i++) {
    await new Promise((r) => setTimeout(r, 80));
    onProgress({ ...pending, status: "uploading", progress: i / 5 });
  }
  const fake = {
    id: pending.clientId,
    workspace_id: "preview",
    file_name: pending.file.name,
    mime_type: pending.file.type || null,
    size: pending.file.size,
    status: "ready",
    thumbnail_url: pending.previewUrl,
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  const done = { ...pending, status: "uploaded", progress: 1, upload: fake };
  onProgress(done);
  return done;
}
function putWithProgress(url, file, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    if (file.type) xhr.setRequestHeader("Content-Type", file.type);
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) onProgress(e.loaded / e.total);
    };
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) resolve();
      else reject(new Error(`Upload failed (${xhr.status})`));
    };
    xhr.onerror = () => reject(new Error("Network error"));
    xhr.send(file);
  });
}
function toMessageAttachment(p) {
  if (!p.upload) return null;
  return {
    id: p.upload.id,
    upload_id: p.upload.id,
    file_name: p.upload.file_name,
    mime_type: p.upload.mime_type,
    size: p.upload.size,
    thumbnail_url: p.upload.thumbnail_url ?? p.previewUrl
  };
}
function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}
function PendingAttachmentCard({
  attachment,
  onRemove
}) {
  const { file, previewUrl, status, progress, error } = attachment;
  const isImage = previewUrl !== null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative flex items-center gap-2 overflow-hidden rounded-md border border-border bg-surface/60 p-1.5 pr-2 text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded bg-muted", children: [
      isImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: previewUrl ?? void 0, alt: file.name, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-muted-foreground" }),
      status === "uploading" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center bg-background/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin text-primary-glow" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate font-medium", title: file.name, children: file.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-muted-foreground", children: [
        status === "uploading" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          Math.round(progress * 100),
          "%"
        ] }),
        status === "processing" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "processing…" }),
        status === "uploaded" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ready" })
        ] }),
        status === "failed" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3 text-destructive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: error ?? "failed" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatBytes(file.size) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: onRemove,
        className: "ml-1 grid h-5 w-5 place-items-center rounded text-muted-foreground hover:bg-accent hover:text-foreground",
        "aria-label": `Remove ${file.name}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
      }
    )
  ] });
}
function MessageAttachmentChip({ attachment }) {
  const isImage = attachment.mime_type?.startsWith("image/");
  if (isImage && attachment.thumbnail_url) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: attachment.thumbnail_url,
        target: "_blank",
        rel: "noreferrer",
        className: "block overflow-hidden rounded-md border border-border",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: attachment.thumbnail_url, alt: attachment.file_name, className: "max-h-60 w-auto object-cover" })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-md border border-border bg-surface/70 px-2 py-1.5 text-xs", children: [
    isImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-3.5 w-3.5 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5 text-muted-foreground" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: attachment.file_name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: formatBytes(attachment.size) })
  ] });
}
function Composer({ disabled, isStreaming, onSend, onStop }) {
  const [text, setText] = reactExports.useState("");
  const [pending, setPending] = reactExports.useState([]);
  const [dragOver, setDragOver] = reactExports.useState(false);
  const [focused, setFocused] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const imageInputRef = reactExports.useRef(null);
  const textareaRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = Math.min(el.scrollHeight, 200) + "px";
  }, [text]);
  const canSend = Boolean(text.trim() || pending.some((p) => p.status === "uploaded")) && !isStreaming && !pending.some((p) => p.status === "uploading" || p.status === "processing");
  const addFiles = reactExports.useCallback((files) => {
    const next = [];
    for (const file of Array.from(files)) {
      if (file.size > 25 * 1024 * 1024) continue;
      next.push(createPending(file));
    }
    if (!next.length) return;
    setPending((curr) => [...curr, ...next]);
    for (const p of next) {
      uploadAttachment(p, (update) => {
        setPending((curr) => curr.map((c) => c.clientId === update.clientId ? update : c));
      });
    }
  }, []);
  const removePending = (clientId) => {
    setPending((curr) => {
      const target = curr.find((c) => c.clientId === clientId);
      if (target) releasePending(target);
      return curr.filter((c) => c.clientId !== clientId);
    });
  };
  const handleSubmit = async () => {
    if (!canSend) return;
    const attachments = pending.map(toMessageAttachment).filter((a) => a !== null);
    const value = text.trim();
    setText("");
    pending.forEach(releasePending);
    setPending([]);
    await onSend(value, attachments);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      onDragEnter: (e) => {
        e.preventDefault();
        setDragOver(true);
      },
      onDragOver: (e) => {
        e.preventDefault();
        setDragOver(true);
      },
      onDragLeave: () => setDragOver(false),
      onDrop: (e) => {
        e.preventDefault();
        setDragOver(false);
        if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
      },
      className: `mx-auto max-w-3xl rounded-2xl border bg-surface/70 backdrop-blur-xl transition-all duration-200 ${dragOver ? "border-primary/70 shadow-glow ring-4 ring-primary/20" : focused ? "border-primary/40 shadow-elevated" : "border-border shadow-soft"}`,
      children: [
        pending.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 border-b border-border/60 p-2.5", children: pending.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PendingAttachmentCard, { attachment: p, onRemove: () => removePending(p.clientId) }, p.clientId)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 p-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              ref: textareaRef,
              value: text,
              onChange: (e) => setText(e.target.value),
              onFocus: () => setFocused(true),
              onBlur: () => setFocused(false),
              onKeyDown: (e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              },
              rows: 1,
              placeholder: dragOver ? "Drop files to attach…" : "Ask anything — Shift+Enter for new line",
              disabled,
              className: "max-h-[200px] min-h-[28px] w-full resize-none bg-transparent px-2.5 py-1.5 text-[15px] leading-6 outline-none placeholder:text-muted-foreground/60 disabled:opacity-50"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ComposerIconButton, { onClick: () => fileInputRef.current?.click(), label: "Attach files", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "h-[18px] w-[18px]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ComposerIconButton, { onClick: () => imageInputRef.current?.click(), label: "Attach image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-[18px] w-[18px]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ComposerIconButton, { onClick: () => {
              }, label: "Voice (coming soon)", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "h-[18px] w-[18px]" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: fileInputRef,
                type: "file",
                multiple: true,
                className: "hidden",
                onChange: (e) => {
                  if (e.target.files?.length) {
                    addFiles(e.target.files);
                    e.target.value = "";
                  }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: imageInputRef,
                type: "file",
                accept: "image/*",
                multiple: true,
                className: "hidden",
                onChange: (e) => {
                  if (e.target.files?.length) {
                    addFiles(e.target.files);
                    e.target.value = "";
                  }
                }
              }
            ),
            isStreaming && onStop ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onStop,
                type: "button",
                className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-destructive/90 text-destructive-foreground shadow-soft transition hover:bg-destructive active:scale-95",
                "aria-label": "Stop generation",
                title: "Stop generating",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "h-3.5 w-3.5 fill-current" })
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleSubmit,
                disabled: !canSend,
                className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow transition-all disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none enabled:hover:scale-105 active:scale-95",
                "aria-label": "Send message",
                children: isStreaming ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function ComposerIconButton({ onClick, label, disabled, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick,
      disabled,
      "aria-label": label,
      title: label,
      className: "grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent",
      children
    }
  );
}
function CodeBlock({ language, value }) {
  const [copied, setCopied] = reactExports.useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative my-3 overflow-hidden rounded-md border border-border bg-[#1e1e1e]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/60 bg-black/30 px-3 py-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: language || "text" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: copy, className: "flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] text-muted-foreground hover:text-foreground", children: [
        copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3" }),
        copied ? "Copied" : "Copy"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      highlighter,
      {
        language: language || "text",
        style: vscDarkPlus,
        customStyle: { margin: 0, padding: "12px 14px", background: "transparent", fontSize: 12.5 },
        PreTag: "div",
        children: value.replace(/\n$/, "")
      }
    )
  ] });
}
function Markdown({ content }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose-workmate text-sm leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Markdown$1,
    {
      remarkPlugins: [remarkGfm],
      components: {
        code({ className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          const value = String(children ?? "");
          const isInline = !match && !value.includes("\n");
          if (isInline) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded bg-muted/60 px-1 py-0.5 font-mono text-[12px]", ...props, children });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: match?.[1] ?? "", value });
        },
        a({ children, ...props }) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { ...props, className: "text-primary-glow underline underline-offset-2", target: "_blank", rel: "noreferrer", children });
        },
        ul({ children }) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "my-2 list-disc space-y-1 pl-5", children });
        },
        ol({ children }) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "my-2 list-decimal space-y-1 pl-5", children });
        },
        h1({ children }) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 mb-2 font-display text-lg font-semibold", children });
        },
        h2({ children }) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 mb-2 font-display text-base font-semibold", children });
        },
        h3({ children }) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 mb-2 font-display text-sm font-semibold", children });
        },
        p({ children }) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-2 whitespace-pre-wrap", children });
        },
        blockquote({ children }) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "my-2 border-l-2 border-primary/50 bg-muted/30 px-3 py-1 italic", children });
        },
        table({ children }) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-3 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "min-w-full text-xs", children }) });
        },
        th({ children }) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-border bg-muted/40 px-2 py-1 text-left font-medium", children });
        },
        td({ children }) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-border px-2 py-1 align-top", children });
        }
      },
      children: content
    }
  ) });
}
function MessageBubble({
  message,
  streaming,
  statusLabel,
  tools,
  sources,
  brainMeta,
  feedback,
  onFeedback,
  onCopy,
  onRetry,
  onEdit,
  onDelete
}) {
  const isUser = message.role === "user";
  const [copied, setCopied] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(false);
  const [draft, setDraft] = reactExports.useState(message.content);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    onCopy?.();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group flex animate-msg-in gap-3 sm:gap-4 ${isUser ? "justify-end" : "justify-start"}`, children: [
    !isUser && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-primary text-[11px] font-bold text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex min-w-0 flex-col gap-2 ${isUser ? "max-w-[88%] items-end sm:max-w-[78%]" : "max-w-full flex-1 items-start"}`, children: [
      isUser ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl rounded-tr-md bg-gradient-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground shadow-glow", children: [
        editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: draft,
              onChange: (e) => setDraft(e.target.value),
              rows: Math.min(8, Math.max(2, draft.split("\n").length)),
              className: "w-full resize-none rounded-lg bg-black/20 p-2 text-sm text-inherit outline-none ring-1 ring-white/20",
              autoFocus: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setDraft(message.content);
              setEditing(false);
            }, className: "rounded-md px-2.5 py-1 text-xs opacity-80 hover:opacity-100", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              onEdit?.(draft);
              setEditing(false);
            }, disabled: !draft.trim() || draft === message.content, className: "rounded-md bg-black/20 px-2.5 py-1 text-xs font-medium ring-1 ring-white/20 disabled:opacity-40", children: "Save & resend" })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-pretty", children: message.content }),
        message.attachments && message.attachments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-1.5", children: message.attachments.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(MessageAttachmentChip, { attachment: a }, a.id)) })
      ] }) : (
        /* ASSISTANT — open layout, no bubble */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full text-[15px] leading-7 text-foreground", children: [
          streaming && !message.content ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 py-1.5 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex gap-1", "aria-hidden": true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 animate-bounce rounded-full bg-primary-glow [animation-delay:-0.3s]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 animate-bounce rounded-full bg-primary-glow [animation-delay:-0.15s]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 animate-bounce rounded-full bg-primary-glow" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: statusLabel ?? "Thinking…" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose-message animate-in fade-in duration-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { content: message.content }),
            streaming && message.content && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-0.5 inline-block h-4 w-[3px] translate-y-0.5 rounded-sm bg-primary-glow cursor-blink align-middle" })
          ] }),
          message.attachments && message.attachments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: message.attachments.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(MessageAttachmentChip, { attachment: a }, a.id)) }),
          brainMeta && (brainMeta.agent || brainMeta.model || brainMeta.verificationVerdict || brainMeta.runtimeMode) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-1.5 animate-in fade-in duration-200", children: [
            brainMeta.agent && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-3 w-3 text-primary-glow" }),
              " ",
              brainMeta.agent
            ] }),
            brainMeta.model && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-primary-glow" }),
              " ",
              brainMeta.model
            ] }),
            brainMeta.verificationVerdict && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3 w-3 text-success" }),
              " verify: ",
              brainMeta.verificationVerdict,
              typeof brainMeta.verificationConfidence === "number" ? ` ${Math.round(brainMeta.verificationConfidence * 100)}%` : ""
            ] }),
            brainMeta.runtimeMode && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-3 w-3" }),
              " brain: ",
              brainMeta.runtimeMode
            ] })
          ] }),
          streaming && tools && tools.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1.5 animate-in fade-in duration-200", children: tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: [
            t.name === "web_search" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3 w-3 text-primary-glow" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-3 w-3" }),
            t.name.replace(/_/g, " "),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${t.status === "running" ? "animate-status-pulse bg-primary-glow" : t.status === "done" ? "bg-success" : t.status === "error" ? "bg-destructive" : "bg-muted-foreground/40"}` })
          ] }, t.name)) })
        ] })
      ),
      !isUser && sources && sources.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 animate-in fade-in duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80", children: "Live sources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: sources.slice(0, 6).map((src, i) => {
          let host = src;
          try {
            host = new URL(src).hostname.replace(/^www\./, "");
          } catch {
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: src,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-2.5 py-1 text-[11px] text-muted-foreground transition hover:border-primary/40 hover:bg-accent hover:text-foreground",
              title: src,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3 w-3" }),
                " ",
                host
              ]
            },
            `${src}-${i}`
          );
        }) })
      ] }),
      !isUser && !streaming && (message.tools_used?.length || message.memories_used?.length) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: [
        message.memories_used && message.memories_used.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full border border-border bg-surface/60 px-2 py-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-3 w-3 text-primary-glow" }),
          " ",
          message.memories_used.length,
          " memor",
          message.memories_used.length === 1 ? "y" : "ies"
        ] }),
        message.tools_used?.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full border border-border bg-surface/60 px-2 py-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: `h-3 w-3 ${t.status === "error" ? "text-destructive" : "text-muted-foreground"}` }),
          t.name
        ] }, t.name))
      ] }) : null,
      !editing && !streaming && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-0.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-within:opacity-100 ${isUser ? "flex-row-reverse" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { onClick: handleCopy, label: copied ? "Copied" : "Copy", children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5" }) }),
        isUser && onEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { onClick: () => setEditing(true), label: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }) }),
        !isUser && onRetry && /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { onClick: onRetry, label: "Regenerate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "h-3.5 w-3.5" }) }),
        !isUser && onFeedback && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { onClick: () => onFeedback(true), label: "Helpful", active: feedback === "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { onClick: () => onFeedback(false), label: "Not helpful", active: feedback === "down", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsDown, { className: "h-3.5 w-3.5" }) })
        ] }),
        onDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { onClick: onDelete, label: "Delete", danger: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
      ] })
    ] }),
    isUser && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-border bg-surface text-[10px] font-bold shadow-soft", children: "You" })
  ] });
}
function ActionButton({ onClick, label, danger, active, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick,
      title: label,
      "aria-label": label,
      "aria-pressed": active,
      className: `grid h-7 w-7 place-items-center rounded-md transition-colors ${active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent"} ${danger ? "hover:text-destructive" : "hover:text-foreground"}`,
      children
    }
  );
}
function ConversationItem({ title, active, onSelect, onRename, onDelete }) {
  const [editing, setEditing] = reactExports.useState(false);
  const [draft, setDraft] = reactExports.useState(title);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (editing) inputRef.current?.select();
  }, [editing]);
  reactExports.useEffect(() => {
    setDraft(title);
  }, [title]);
  const commit = () => {
    const v = draft.trim();
    if (v && v !== title) onRename(v);
    setEditing(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group relative flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm transition-colors ${active ? "bg-accent text-accent-foreground shadow-soft" : "text-foreground/85 hover:bg-surface/80"}`, children: [
    active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-primary-glow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: `h-3.5 w-3.5 shrink-0 ${active ? "text-primary-glow" : "text-muted-foreground"}` }),
    editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref: inputRef,
          value: draft,
          onChange: (e) => setDraft(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") commit();
            if (e.key === "Escape") {
              setDraft(title);
              setEditing(false);
            }
          },
          className: "min-w-0 flex-1 rounded-md bg-background px-2 py-0.5 text-sm outline-none ring-1 ring-ring/50"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: commit, className: "grid h-6 w-6 place-items-center rounded hover:bg-accent", "aria-label": "Save", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-success" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setDraft(title);
        setEditing(false);
      }, className: "grid h-6 w-6 place-items-center rounded hover:bg-accent", "aria-label": "Cancel", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3 text-muted-foreground" }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onSelect, onDoubleClick: () => setEditing(true), className: "min-w-0 flex-1 truncate text-left", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(true), className: "grid h-6 w-6 place-items-center rounded hover:bg-background", "aria-label": "Rename", title: "Rename", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3 w-3 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onDelete, className: "grid h-6 w-6 place-items-center rounded hover:bg-background", "aria-label": "Delete", title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3 text-muted-foreground hover:text-destructive" }) })
      ] })
    ] })
  ] });
}
const SUGGESTIONS = [
  { icon: Lightbulb, title: "Brainstorm ideas", prompt: "Help me brainstorm 10 creative product ideas for a B2B SaaS targeting small dental clinics." },
  { icon: FileText, title: "Summarize a document", prompt: "Summarize the key takeaways from a document I'll paste — focus on action items and risks." },
  { icon: Search, title: "Research a topic", prompt: "Research the current state of agentic AI frameworks and compare LangGraph, CrewAI, and AutoGen." },
  { icon: Code, title: "Explain code", prompt: "Explain this code and suggest improvements:\n\n```\n// paste code here\n```" },
  { icon: ChartBar, title: "Analyze data", prompt: "I have a dataset of monthly sales. Walk me through how to analyze it for seasonality and growth trends." },
  { icon: Sparkles, title: "Draft an email", prompt: "Draft a polite, concise email to a client explaining a 2-week project delay and a new timeline." }
];
function ChatWelcome({ onPick, name }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center px-4 py-12 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-8 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-7 w-7 text-primary-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-primary opacity-50 blur-xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-balance text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl", children: name ? `Welcome back, ${name.split(" ")[0]}` : "How can I help you today?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-balance text-center text-sm text-muted-foreground sm:text-base", children: "Ask anything. Upload a document. Research a topic. Memory and tools are always on." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3", children: SUGGESTIONS.map(({ icon: Icon, title, prompt }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => onPick(prompt),
        className: "group relative flex items-start gap-3 rounded-xl border border-border bg-surface/50 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface hover:shadow-soft",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/50 text-primary-glow transition-colors group-hover:bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 line-clamp-2 text-xs text-muted-foreground", children: prompt })
          ] })
        ]
      },
      title
    )) })
  ] });
}
const Input = objectType({
  messageId: stringType().uuid().nullable().optional(),
  conversationId: stringType().uuid().nullable().optional(),
  memoryIds: arrayType(stringType().uuid()).max(32).default([]),
  helpful: booleanType(),
  note: stringType().max(500).optional()
});
const submitMemoryFeedback = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => Input.parse(input)).handler(createSsrRpc("484df29116dc20bfb2829d09f3c853c30f9c109bd163bb61b18efd719ce1a718"));
function trimSlash(value) {
  return value.replace(/\/$/, "");
}
function getBrainChatEndpoint() {
  const explicit = "".trim();
  if (explicit) return explicit;
  const base = "".trim();
  if (base) return `${trimSlash(base)}/v1/brain/chat`;
  return "/api/chat";
}
function getBrainRuntimeMode() {
  const endpoint = getBrainChatEndpoint();
  return endpoint === "/api/chat" ? "internal" : "external";
}
async function streamBrainChat(params) {
  const endpoint = getBrainChatEndpoint();
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${params.accessToken}`,
      "X-WorkMate-Shell": "base44",
      "X-WorkMate-Brain-Mode": getBrainRuntimeMode()
    },
    body: JSON.stringify(params.payload),
    signal: params.signal
  });
  if (!res.ok || !res.body) return res;
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    let idx;
    while ((idx = buf.indexOf("\n\n")) !== -1) {
      const block = buf.slice(0, idx);
      buf = buf.slice(idx + 2);
      for (const line of block.split("\n")) {
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (!payload || payload === "[DONE]") continue;
        try {
          const parsed = JSON.parse(payload);
          if (!parsed.type) continue;
          params.onEvent(parsed, parsed);
        } catch {
        }
      }
    }
  }
  return res;
}
function ChatPage() {
  const {
    user,
    session,
    profile
  } = useAuth();
  const qc = useQueryClient();
  const [convSearch, setConvSearch] = reactExports.useState("");
  const [activeId, setActiveId] = reactExports.useState(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = reactExports.useState(false);
  const [streamingText, setStreamingText] = reactExports.useState("");
  const [isStreaming, setIsStreaming] = reactExports.useState(false);
  const [phase, setPhase] = reactExports.useState("idle");
  const [liveTools, setLiveTools] = reactExports.useState([]);
  const [liveSources, setLiveSources] = reactExports.useState([]);
  const [streamRoute, setStreamRoute] = reactExports.useState(null);
  const [streamVerification, setStreamVerification] = reactExports.useState(null);
  const brainRuntimeMode = getBrainRuntimeMode();
  const [responseMeta, setResponseMeta] = reactExports.useState({});
  const [feedbackState, setFeedbackState] = reactExports.useState({});
  const [overlay, setOverlay] = reactExports.useState({});
  const scrollRef = reactExports.useRef(null);
  const activeRequestIdRef = reactExports.useRef(null);
  const lastSeqRef = reactExports.useRef(-1);
  const abortRef = reactExports.useRef(null);
  const conversationsQ = useQuery({
    queryKey: ["conversations", user?.id],
    queryFn: async () => {
      const {
        data
      } = await supabase.from("conversations").select("id, title, updated_at").order("updated_at", {
        ascending: false
      });
      return data ?? [];
    },
    enabled: !!user
  });
  const conversations = conversationsQ.data ?? [];
  reactExports.useEffect(() => {
    if (!activeId && conversations.length > 0) setActiveId(conversations[0].id);
  }, [conversations, activeId]);
  const messagesQ = useQuery({
    queryKey: ["messages", activeId],
    queryFn: async () => {
      if (!activeId) return [];
      const {
        data
      } = await supabase.from("messages").select("id, role, content, created_at").eq("conversation_id", activeId).order("created_at", {
        ascending: true
      });
      return data ?? [];
    },
    enabled: !!activeId
  });
  const dbMessages = messagesQ.data ?? [];
  const localOverlay = activeId ? overlay[activeId] ?? [] : [];
  const messages = [...dbMessages, ...localOverlay.filter((o) => !dbMessages.some((d) => d.id === o.id || d.role === o.role && d.content === o.content))];
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages.length, streamingText]);
  async function createConversation() {
    if (!user) return;
    const {
      data,
      error
    } = await supabase.from("conversations").insert({
      user_id: user.id,
      title: "New conversation"
    }).select("id, title, updated_at").single();
    if (error) {
      toast.error(error.message);
      return;
    }
    qc.invalidateQueries({
      queryKey: ["conversations"]
    });
    setActiveId(data.id);
  }
  async function deleteConversation(id) {
    const {
      error
    } = await supabase.from("conversations").delete().eq("id", id);
    if (error) {
      toast.error(error.message);
      return;
    }
    qc.invalidateQueries({
      queryKey: ["conversations"]
    });
    if (activeId === id) setActiveId(null);
  }
  async function renameConversation(id, title) {
    qc.setQueryData(["conversations", user?.id], (old = []) => old.map((c) => c.id === id ? {
      ...c,
      title
    } : c));
    const {
      error
    } = await supabase.from("conversations").update({
      title
    }).eq("id", id);
    if (error) {
      toast.error(error.message);
      qc.invalidateQueries({
        queryKey: ["conversations"]
      });
    }
  }
  async function deleteMessage(id) {
    if (!activeId) return;
    const {
      error
    } = await supabase.from("messages").delete().eq("id", id);
    if (error) {
      toast.error(error.message);
      return;
    }
    qc.invalidateQueries({
      queryKey: ["messages", activeId]
    });
  }
  async function sendMessage(text, attachments) {
    if (!text && attachments.length === 0 || !session) return;
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;
    activeRequestIdRef.current = null;
    lastSeqRef.current = -1;
    let convId = activeId;
    if (!convId) {
      if (!user) return;
      const autoTitle = text ? text.slice(0, 60) : "New conversation";
      const {
        data,
        error
      } = await supabase.from("conversations").insert({
        user_id: user.id,
        title: autoTitle
      }).select("id").single();
      if (error) {
        toast.error(error.message);
        return;
      }
      convId = data.id;
      setActiveId(convId);
      qc.invalidateQueries({
        queryKey: ["conversations"]
      });
    }
    const existing = conversations.find((c) => c.id === convId);
    if (existing && existing.title === "New conversation" && text) {
      renameConversation(convId, text.slice(0, 60));
    }
    setIsStreaming(true);
    setStreamingText("");
    setPhase("thinking");
    setLiveTools([]);
    setLiveSources([]);
    setStreamRoute(null);
    setStreamVerification(null);
    const optimisticUserMsg = {
      id: `temp-${Date.now()}`,
      role: "user",
      content: text,
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      attachments: attachments.length ? attachments : void 0
    };
    setOverlay((curr) => ({
      ...curr,
      [convId]: [...curr[convId] ?? [], optimisticUserMsg]
    }));
    let assembled = "";
    let doneMeta = null;
    try {
      const history = [...messages.map((m) => ({
        role: m.role,
        content: m.content
      })), {
        role: "user",
        content: text
      }];
      const res = await streamBrainChat({
        accessToken: session.access_token,
        payload: {
          conversationId: convId,
          messages: history,
          attachments
        },
        signal: ac.signal,
        onEvent: (j, envelope) => {
          if (typeof envelope.requestId === "string") {
            if (activeRequestIdRef.current && envelope.requestId !== activeRequestIdRef.current) {
              return;
            }
            if (!activeRequestIdRef.current) activeRequestIdRef.current = envelope.requestId;
          }
          if (typeof envelope.seq === "number") {
            if (envelope.seq <= lastSeqRef.current) return;
            lastSeqRef.current = envelope.seq;
          }
          switch (j.type) {
            case "state":
              if (j.phase) setPhase(j.phase);
              break;
            case "route":
              setStreamRoute(j);
              break;
            case "verification":
              setStreamVerification(j);
              break;
            case "tool": {
              const evt = {
                name: j.name,
                status: j.status
              };
              if (evt.name === "web_search" && (evt.status === "running" || evt.status === "start")) setPhase("searching");
              setLiveTools((curr) => {
                const next = curr.filter((t) => t.name !== evt.name);
                next.push(evt);
                return next;
              });
              if (Array.isArray(j.sources) && j.sources.length) {
                setLiveSources((curr) => Array.from(/* @__PURE__ */ new Set([...curr, ...j.sources])));
              }
              break;
            }
            case "sources":
              if (Array.isArray(j.sources)) {
                setLiveSources((curr) => Array.from(/* @__PURE__ */ new Set([...curr, ...j.sources])));
              }
              break;
            case "memory":
              break;
            case "token":
              if (j.delta) {
                assembled += j.delta;
                setStreamingText(assembled);
                setPhase("streaming");
              }
              break;
            case "done":
              doneMeta = {
                ...j,
                memoryIds: Array.isArray(j.memoryIds) ? j.memoryIds : []
              };
              break;
            default:
              if ("delta" in j && typeof j.delta === "string") {
                assembled += j.delta;
                setStreamingText(assembled);
                setPhase("streaming");
              }
          }
        }
      });
      if (!res.ok || !res.body) {
        const errText = await res.text().catch(() => "");
        console.error("[chat] http error", res.status, errText.slice(0, 300));
        toast.error(`Chat error: ${res.status}`);
        assembled = "Sorry, something went wrong. Please try again.";
        return;
      }
      const headerReqId = res.headers.get("X-Request-Id");
      if (headerReqId) activeRequestIdRef.current = headerReqId;
      if (res.headers.get("X-Chat-Live") === "1") setPhase("searching");
    } catch (err) {
      if (err?.name === "AbortError") return;
      console.error("[chat] stream failure", err);
      toast.error("Connection lost. Please try again.");
      if (!assembled) assembled = "Sorry, something went wrong. Please try again.";
    } finally {
      if (assembled.trim()) {
        const finalAssistant = {
          id: `temp-asst-${Date.now()}`,
          role: "assistant",
          content: assembled,
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        };
        setOverlay((curr) => ({
          ...curr,
          [convId]: [...curr[convId] ?? [], finalAssistant]
        }));
      }
      if (doneMeta?.messageId) {
        const meta = doneMeta;
        setResponseMeta((curr) => ({
          ...curr,
          [meta.messageId]: {
            memoryIds: meta.memoryIds,
            sources: liveSources,
            route: streamRoute,
            verification: streamVerification,
            model: typeof meta.primaryModel === "string" ? meta.primaryModel : null
          }
        }));
      }
      if (abortRef.current === ac) abortRef.current = null;
      setIsStreaming(false);
      setStreamingText("");
      setPhase("idle");
      setLiveTools([]);
      qc.invalidateQueries({
        queryKey: ["messages", convId]
      });
      qc.invalidateQueries({
        queryKey: ["conversations"]
      });
      setTimeout(() => {
        setOverlay((curr) => ({
          ...curr,
          [convId]: []
        }));
        setLiveSources([]);
      }, 4e3);
    }
  }
  async function handleFeedback(messageId, helpful) {
    setFeedbackState((curr) => ({
      ...curr,
      [messageId]: helpful ? "up" : "down"
    }));
    const meta = responseMeta[messageId];
    try {
      await submitMemoryFeedback({
        data: {
          messageId,
          conversationId: activeId,
          memoryIds: meta?.memoryIds ?? [],
          helpful
        }
      });
      toast.success(helpful ? "Thanks — boosted those memories." : "Got it — we'll use those less.");
    } catch (err) {
      console.error("[feedback] failed", err);
      toast.error("Couldn't save feedback");
      setFeedbackState((curr) => {
        const next = {
          ...curr
        };
        delete next[messageId];
        return next;
      });
    }
  }
  async function retryLastAssistant() {
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (!lastUser) return;
    const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant");
    if (lastAssistant && !lastAssistant.id.startsWith("temp-")) {
      await supabase.from("messages").delete().eq("id", lastAssistant.id);
      qc.invalidateQueries({
        queryKey: ["messages", activeId]
      });
    }
    sendMessage(lastUser.content, lastUser.attachments ?? []);
  }
  async function editAndResend(messageId, newContent) {
    const idx = messages.findIndex((m) => m.id === messageId);
    if (idx < 0) return;
    const tail = messages.slice(idx);
    for (const m of tail) {
      if (!m.id.startsWith("temp-")) {
        await supabase.from("messages").delete().eq("id", m.id);
      }
    }
    qc.invalidateQueries({
      queryKey: ["messages", activeId]
    });
    sendMessage(newContent, []);
  }
  const activeConv = conversations.find((c) => c.id === activeId);
  const messagesLoading = messagesQ.isLoading && !!activeId;
  function stopStream() {
    abortRef.current?.abort();
    abortRef.current = null;
    setIsStreaming(false);
    setPhase("idle");
  }
  function selectConversation(id) {
    setActiveId(id);
    setMobileDrawerOpen(false);
  }
  const filteredConversations = reactExports.useMemo(() => {
    const q = convSearch.trim().toLowerCase();
    if (!q) return conversations;
    return conversations.filter((c) => c.title.toLowerCase().includes(q));
  }, [conversations, convSearch]);
  const sidebarBody = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-3 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold", children: "Conversations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: createConversation, className: "inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground shadow-glow transition hover:opacity-90 active:scale-95", title: "New chat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
        " New"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: convSearch, onChange: (e) => setConvSearch(e.target.value), placeholder: "Search conversations", className: "h-8 w-full rounded-lg border border-border bg-background/60 pl-8 pr-2.5 text-xs outline-none placeholder:text-muted-foreground/70 focus:border-primary/40 focus:ring-2 focus:ring-ring/30" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto scrollbar-thin px-2 py-2", children: conversationsQ.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ConversationSkeletons, {}) : filteredConversations.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-10 text-center text-xs text-muted-foreground", children: convSearch ? "No matches." : "No conversations yet. Start one below." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: filteredConversations.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(ConversationItem, { id: c.id, title: c.title, active: activeId === c.id, onSelect: () => selectConversation(c.id), onRename: (t) => renameConversation(c.id, t), onDelete: () => deleteConversation(c.id) }, c.id)) }) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden w-72 shrink-0 flex-col border-r border-border bg-surface/30 lg:flex", children: sidebarBody }),
    mobileDrawerOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-40 flex lg:hidden", role: "dialog", "aria-modal": "true", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Close conversations", className: "absolute inset-0 bg-background/70 backdrop-blur-sm", onClick: () => setMobileDrawerOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "relative z-10 flex h-full w-72 max-w-[85vw] flex-col border-r border-border bg-surface shadow-elevated animate-in slide-in-from-left", children: sidebarBody })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThreadHeader, { title: activeConv?.title ?? "New conversation", canRename: !!activeConv, onRename: (t) => activeConv && renameConversation(activeConv.id, t), onOpenDrawer: () => setMobileDrawerOpen(true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "relative flex-1 overflow-y-auto scrollbar-thin", children: messagesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSkeleton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSkeleton, { align: "right" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSkeleton, {})
      ] }) : messages.length === 0 && !isStreaming ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-mesh opacity-60", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChatWelcome, { name: profile?.display_name || void 0, onPick: (prompt) => sendMessage(prompt, []) }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6", children: [
        messages.map((m) => {
          const meta = responseMeta[m.id];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(MessageBubble, { message: m, sources: m.role === "assistant" ? meta?.sources : void 0, brainMeta: m.role === "assistant" ? {
            agent: meta?.route?.primaryAgent,
            model: meta?.model ?? meta?.route?.primaryModel ?? void 0,
            verificationVerdict: meta?.verification?.verdict,
            verificationConfidence: meta?.verification?.confidence,
            runtimeMode: brainRuntimeMode
          } : void 0, feedback: m.role === "assistant" ? feedbackState[m.id] ?? null : void 0, onFeedback: m.role === "assistant" && !m.id.startsWith("temp-") ? (helpful) => handleFeedback(m.id, helpful) : void 0, onEdit: m.role === "user" ? (next) => editAndResend(m.id, next) : void 0, onRetry: m.role === "assistant" ? retryLastAssistant : void 0, onDelete: m.id.startsWith("temp-") ? void 0 : () => deleteMessage(m.id) }, m.id);
        }),
        isStreaming && /* @__PURE__ */ jsxRuntimeExports.jsx(MessageBubble, { message: {
          id: "streaming",
          role: "assistant",
          content: streamingText
        }, streaming: true, tools: liveTools, sources: liveSources, brainMeta: {
          agent: streamRoute?.primaryAgent,
          model: streamRoute?.primaryModel,
          verificationVerdict: streamVerification?.verdict,
          verificationConfidence: streamVerification?.confidence,
          runtimeMode: brainRuntimeMode
        }, statusLabel: phase === "searching" ? "Searching the web…" : phase === "generating" ? "Generating answer…" : phase === "thinking" ? "Thinking…" : void 0 })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong border-t border-border px-3 pb-safe pt-3 sm:px-4 sm:pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Composer, { isStreaming, onSend: sendMessage, onStop: stopStream }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-2 max-w-3xl text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60", children: "AI WorkMate can make mistakes. Verify important information." })
      ] })
    ] })
  ] });
}
function ThreadHeader({
  title,
  canRename,
  onRename,
  onOpenDrawer,
  brainRuntimeMode
}) {
  const [editing, setEditing] = reactExports.useState(false);
  const [draft, setDraft] = reactExports.useState(title);
  reactExports.useEffect(() => setDraft(title), [title]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-6 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-2 text-sm", children: [
      onOpenDrawer && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onOpenDrawer, className: "grid h-7 w-7 shrink-0 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground lg:hidden", "aria-label": "Open conversations", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 shrink-0 text-primary-glow" }),
      editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: draft, onChange: (e) => setDraft(e.target.value), onKeyDown: (e) => {
          if (e.key === "Enter") {
            if (draft.trim() && draft !== title) onRename(draft.trim());
            setEditing(false);
          }
          if (e.key === "Escape") {
            setDraft(title);
            setEditing(false);
          }
        }, className: "min-w-0 rounded bg-surface px-2 py-0.5 text-sm font-semibold outline-none ring-1 ring-ring/40", autoFocus: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          if (draft.trim() && draft !== title) onRename(draft.trim());
          setEditing(false);
        }, className: "grid h-6 w-6 place-items-center rounded hover:bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-success" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setDraft(title);
          setEditing(false);
        }, className: "grid h-6 w-6 place-items-center rounded hover:bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5 text-muted-foreground" }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-display font-semibold", children: title }),
        canRename && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(true), className: "grid h-6 w-6 place-items-center rounded text-muted-foreground hover:bg-accent hover:text-foreground", title: "Rename", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3 w-3" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3 text-success" }),
      " e2e audited",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-border", children: "·" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-3 w-3 text-primary-glow" }),
      " memory: on",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-border", children: "·" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-primary-glow" }),
      " brain: ",
      brainRuntimeMode
    ] })
  ] });
}
function ConversationSkeletons() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 p-1", children: Array.from({
    length: 6
  }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-full animate-pulse rounded-md bg-surface/80" }, i)) });
}
function MessageSkeleton({
  align = "left"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-3 ${align === "right" ? "justify-end" : "justify-start"}`, children: [
    align === "left" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 shrink-0 animate-pulse rounded-md bg-surface" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-2/3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-full animate-pulse rounded bg-surface" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-5/6 animate-pulse rounded bg-surface" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-2/3 animate-pulse rounded bg-surface" })
    ] })
  ] });
}
export {
  ChatPage as component
};
