import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createServerFn } from "./index.mjs";
import { r as requireSupabaseAuth, s as supabaseAdmin } from "./client.server-4MVRtmLM.mjs";

import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, b as booleanType, a as arrayType } from "../_libs/zod.mjs";

import "../_libs/h3-v2.mjs";
import "../_libs/unenv.mjs";


import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";





import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/tslib.mjs";
import "../_libs/supabase__functions-js.mjs";
const Input = objectType({
  messageId: stringType().uuid().nullable().optional(),
  conversationId: stringType().uuid().nullable().optional(),
  memoryIds: arrayType(stringType().uuid()).max(32).default([]),
  helpful: booleanType(),
  note: stringType().max(500).optional()
});
const submitMemoryFeedback_createServerFn_handler = createServerRpc({
  id: "484df29116dc20bfb2829d09f3c853c30f9c109bd163bb61b18efd719ce1a718",
  name: "submitMemoryFeedback",
  filename: "src/lib/chat/feedback.functions.ts"
}, (opts) => submitMemoryFeedback.__executeServer(opts));
const submitMemoryFeedback = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => Input.parse(input)).handler(submitMemoryFeedback_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    userId
  } = context;
  const impact = data.helpful ? 0.85 : 0.15;
  await context.supabase.from("memory_feedback").insert({
    user_id: userId,
    message_id: data.messageId ?? null,
    conversation_id: data.conversationId ?? null,
    memory_ids: data.memoryIds,
    helpful: data.helpful,
    impact,
    note: data.note ?? null
  });
  if (data.memoryIds.length) {
    const {
      data: rows
    } = await supabaseAdmin.from("memories").select("id, usefulness").in("id", data.memoryIds).eq("user_id", userId);
    if (rows?.length) {
      await Promise.all(rows.map((m) => {
        const curr = m.usefulness ?? 0.5;
        const next = data.helpful ? Math.min(1, curr + 0.08) : Math.max(0, curr - 0.12);
        return supabaseAdmin.from("memories").update({
          usefulness: next,
          last_used_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", m.id);
      }));
    }
  }
  return {
    ok: true,
    impact
  };
});
export {
  submitMemoryFeedback_createServerFn_handler
};
