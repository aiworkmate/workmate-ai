// Chat model selection — calls OpenAI API directly.
// GPT-first with stable fallback so unsupported model aliases do not break chat.

export interface ChatCompletionRequest {
  apiKey: string;
  messages: Array<{ role: "system" | "user" | "assistant"; content: string }>;
  signal?: AbortSignal;
  preferredModels?: string[];
}

export interface ChatCompletionResult {
  response: Response;
  model: string;
  attemptedModels: string[];
}

const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

const DEFAULT_MODEL_CANDIDATES = [
  "gpt-4o",
  "gpt-4o-mini",
  "gpt-4-turbo",
  "gpt-4",
  "gpt-3.5-turbo",
];

let cachedWorkingModel: string | null = null;

function configuredModels(preferredModels: string[] = []): string[] {
  const configured = [
    ...preferredModels,
    process.env.AI_WORKMATE_MODEL,
    process.env.CHAT_MODEL,
    process.env.AI_MODEL,
  ]
    .flatMap((value) => (value ?? "").split(","))
    .map((value) => value.trim())
    .filter(Boolean);

  const ordered = configured.length > 0
    ? [...configured, ...DEFAULT_MODEL_CANDIDATES]
    : cachedWorkingModel
      ? [cachedWorkingModel, ...DEFAULT_MODEL_CANDIDATES]
      : DEFAULT_MODEL_CANDIDATES;

  return Array.from(new Set(ordered));
}

function shouldTryNextModel(response: Response): boolean {
  return response.status === 400 || response.status === 404 || response.status >= 500;
}

export async function requestChatCompletion({
  apiKey,
  messages,
  signal,
  preferredModels = [],
}: ChatCompletionRequest): Promise<ChatCompletionResult> {
  const models = configuredModels(preferredModels);
  const attemptedModels: string[] = [];
  let last: { response: Response; model: string } | null = null;

  for (const model of models) {
    attemptedModels.push(model);
    const response = await fetch(OPENAI_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model, stream: true, messages }),
      signal,
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
