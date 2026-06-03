import process from "node:process";
import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createServerFn } from "./index.mjs";
import { r as requireSupabaseAuth, s as supabaseAdmin } from "./client.server-4MVRtmLM.mjs";

import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, b as booleanType, s as stringType } from "../_libs/zod.mjs";
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
async function ensureOwnerAdminRole(userId, claims) {
  const profile = await getProfileByUserId(userId);
  const email = normalizeEmail(claims?.email) ?? normalizeEmail(profile?.email);
  if (!email || !adminEmails().has(email)) return false;
  const {
    data: existing
  } = await supabaseAdmin.from("user_roles").select("id").eq("user_id", userId).eq("role", "admin").maybeSingle();
  if (!existing) {
    await supabaseAdmin.from("user_roles").insert({
      user_id: userId,
      role: "admin"
    });
  }
  return true;
}
async function getAiControlForUser(userId, claims) {
  const admin = await isAdminUser(userId, claims);
  if (!admin) return DEFAULT_CONTROL;
  const profile = await getProfileByUserId(userId);
  const settings = profile?.settings && typeof profile.settings === "object" && !Array.isArray(profile.settings) ? profile.settings : {};
  return sanitizeControl(settings.aiControl);
}
const getAdminControlPanel_createServerFn_handler = createServerRpc({
  id: "9933d78bfa6cb9e1110787738c0567db8a38613a65fb146b1299f27474eb7b27",
  name: "getAdminControlPanel",
  filename: "src/lib/admin/ai-control.server.ts"
}, (opts) => getAdminControlPanel.__executeServer(opts));
const getAdminControlPanel = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(getAdminControlPanel_createServerFn_handler, async ({
  context
}) => {
  const claims = context.claims;
  const ownerRoleEnsured = await ensureOwnerAdminRole(context.userId, claims);
  const admin = ownerRoleEnsured || await isAdminUser(context.userId, claims);
  if (!admin) return {
    admin: false,
    settings: DEFAULT_CONTROL,
    email: normalizeEmail(claims.email)
  };
  const settings = await getAiControlForUser(context.userId, claims);
  return {
    admin: true,
    settings,
    email: normalizeEmail(claims.email)
  };
});
const saveAdminAiControl_createServerFn_handler = createServerRpc({
  id: "6cb2bc8359f73e0a2b8fd5f502234a377b2a1550b70ae905649e080231304fcc",
  name: "saveAdminAiControl",
  filename: "src/lib/admin/ai-control.server.ts"
}, (opts) => saveAdminAiControl.__executeServer(opts));
const saveAdminAiControl = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => ControlInput.parse(input)).handler(saveAdminAiControl_createServerFn_handler, async ({
  data,
  context
}) => {
  const claims = context.claims;
  const ownerRoleEnsured = await ensureOwnerAdminRole(context.userId, claims);
  const admin = ownerRoleEnsured || await isAdminUser(context.userId, claims);
  if (!admin) throw new Error("Forbidden: admin role required");
  const profile = await getProfileByUserId(context.userId);
  const currentSettings = profile?.settings && typeof profile.settings === "object" && !Array.isArray(profile.settings) ? profile.settings : {};
  const nextControl = {
    modelOverride: data.modelOverride?.trim() || null,
    systemOverride: data.systemOverride?.trim() || null,
    forceLiveData: data.forceLiveData === true,
    forceMemory: data.forceMemory === true,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedBy: context.userId
  };
  await supabaseAdmin.from("profiles").update({
    settings: {
      ...currentSettings,
      aiControl: nextControl
    }
  }).eq("user_id", context.userId);
  return {
    ok: true,
    settings: nextControl
  };
});
export {
  getAdminControlPanel_createServerFn_handler,
  saveAdminAiControl_createServerFn_handler
};
