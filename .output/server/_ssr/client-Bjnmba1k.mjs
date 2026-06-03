import process from "node:process";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/unenv.mjs";


import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/tslib.mjs";
import "../_libs/supabase__functions-js.mjs";
const __vite_import_meta_env__ = { "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SSR": true, "TSS_DEV_SERVER": "false", "TSS_DEV_SSR_STYLES_BASEPATH": "/", "TSS_DEV_SSR_STYLES_ENABLED": "true", "TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false", "TSS_INLINE_CSS_ENABLED": "false", "TSS_ROUTER_BASEPATH": "", "TSS_SERVER_FN_BASE": "/_serverFn/", "VITE_BASE44_APP_ID": "6a1f60ff1674c6647c8ff7c5", "VITE_BASE44_BACKEND_URL": "https://base44.app", "VITE_BASE44_FUNCTIONS_VERSION": "preview" };
const viteEnv = __vite_import_meta_env__;
const runtimeEnv = typeof process !== "undefined" ? process.env : void 0;
function readEnv(...keys) {
  for (const key of keys) {
    const value = viteEnv[key] || runtimeEnv?.[key];
    if (value) return value;
  }
  return void 0;
}
function createSupabaseClient() {
  const SUPABASE_URL = readEnv("VITE_SUPABASE_URL", "SUPABASE_URL");
  const SUPABASE_PUBLISHABLE_KEY = readEnv(
    "VITE_SUPABASE_PUBLISHABLE_KEY",
    "VITE_SUPABASE_ANON_KEY",
    "SUPABASE_PUBLISHABLE_KEY",
    "SUPABASE_ANON_KEY"
  );
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    const missing = [
      ...!SUPABASE_URL ? ["SUPABASE_URL"] : [],
      ...!SUPABASE_PUBLISHABLE_KEY ? ["SUPABASE_PUBLISHABLE_KEY"] : []
    ];
    const message = `Missing Supabase environment variable(s): ${missing.join(", ")}. Connect Supabase in Lovable Cloud.`;
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      storage: typeof window !== "undefined" ? localStorage : void 0,
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
let _supabase;
const supabase = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  }
});
export {
  supabase
};
