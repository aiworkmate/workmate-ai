import type {
  BrainChatRequest,
  BrainDoneEvent,
  BrainRouteEvent,
  BrainVerificationEvent,
} from "@/lib/api/endpoints";

export type BrainStreamPhase = "idle" | "thinking" | "searching" | "generating" | "streaming";

export interface BrainStateEvent {
  type: "state";
  phase: BrainStreamPhase;
}

export interface BrainToolEvent {
  type: "tool";
  name: string;
  status: "start" | "running" | "stream" | "done" | "error" | "skipped";
  sources?: string[];
  provider?: string | null;
  required?: boolean;
}

export interface BrainSourcesEvent {
  type: "sources";
  sources: string[];
  provider?: string | null;
}

export interface BrainMemoryEvent {
  type: "memory";
  used?: number;
  ids?: string[];
}

export interface BrainTokenEvent {
  type: "token";
  delta: string;
  isFallback?: boolean;
  reason?: string;
}

export type BrainStreamEvent =
  | BrainStateEvent
  | BrainToolEvent
  | BrainSourcesEvent
  | BrainMemoryEvent
  | BrainTokenEvent
  | BrainRouteEvent
  | BrainVerificationEvent
  | BrainDoneEvent;

export interface BrainEnvelope extends Record<string, unknown> {
  requestId?: string;
  seq?: number;
  type?: string;
}

function trimSlash(value: string) {
  return value.replace(/\/$/, "");
}

export function getBrainChatEndpoint() {
  const explicit = (import.meta.env.VITE_BRAIN_CHAT_URL ?? "").trim();
  if (explicit) return explicit;
  const base = (import.meta.env.VITE_BRAIN_API_BASE_URL ?? "").trim();
  if (base) return `${trimSlash(base)}/v1/brain/chat`;
  return "/api/chat";
}

export function getBrainRuntimeMode(): "external" | "internal" {
  const endpoint = getBrainChatEndpoint();
  return endpoint === "/api/chat" ? "internal" : "external";
}

export async function streamBrainChat(params: {
  accessToken: string;
  payload: BrainChatRequest & Record<string, unknown>;
  signal?: AbortSignal;
  onEvent: (event: BrainStreamEvent, envelope: BrainEnvelope) => void;
}): Promise<Response> {
  const endpoint = getBrainChatEndpoint();
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${params.accessToken}`,
      "X-WorkMate-Shell": "base44",
      "X-WorkMate-Brain-Mode": getBrainRuntimeMode(),
    },
    body: JSON.stringify(params.payload),
    signal: params.signal,
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
          const parsed = JSON.parse(payload) as BrainEnvelope;
          if (!parsed.type) continue;
          params.onEvent(parsed as BrainStreamEvent, parsed);
        } catch {
          // keepalive / malformed events are ignored deliberately
        }
      }
    }
  }

  return res;
}
