# WorkMate Cloudflare Runtime Migration

WorkMate should run from GitHub to Cloudflare, with Supabase as the state layer.

## Target posture
- GitHub = source of truth for prompts, routing, verification, evals, workflows
- Cloudflare = live runtime / deployment target
- Supabase = auth, memory, projects, tasks, evidence, logs
- Base44 = optional shell/channel layer only

## Why Cloudflare here
- reduces dependence on Base44 runtime credits
- keeps deployment GitHub-first
- gives a fast edge runtime for the shell and API layer
- works well with the existing TanStack Start + Nitro setup already in this repo

## What already existed in the repo
The current app already uses `@tanstack/react-start` with Nitro, and the Vite config notes Cloudflare as the default build target.
The build emits a Cloudflare Wrangler config at:

- `dist/server/wrangler.json`

That means we do not need to invent a second runtime stack.
We just need to deploy the existing runtime to Cloudflare deliberately.

## Added in this migration step
- Cloudflare-oriented npm scripts in `package.json`
- `.dev.vars.example` for Worker/local runtime variables
- GitHub Actions workflow for Cloudflare deploys

## Local workflow
```bash
npm install
cp .dev.vars.example .dev.vars
npm run build:cloudflare
npm run preview:cloudflare
```

## Deploy from local machine
```bash
npm run build:cloudflare
npm run deploy:cloudflare
```

## Deploy from GitHub Actions
Add these repository secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Recommended additional repository secrets/variables:
- `APP_ORIGIN`
- `SESSION_SECRET`
- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_ANON_KEY`
- `OPENAI_API_KEY`
- `OPENAI_BASE_URL`
- `OPENAI_MODEL`
- `OPENAI_VISION_MODEL`
- `AI_ENDPOINT_STYLE`
- `TAVILY_API_KEY`
- `BRAVE_SEARCH_API_KEY`
- `NEWS_API_KEY`
- `MAPS_API_KEY`
- `VITE_BRAIN_API_BASE_URL` (optional)
- `VITE_BRAIN_CHAT_URL` (optional)

## Runtime note
If `VITE_BRAIN_API_BASE_URL` is left blank, the shell keeps using same-origin `/api/chat`.
If it is set, the shell can target an external GitHub-owned brain API instead.

## Migration sequence I recommend
1. Deploy the current shell/runtime to Cloudflare.
2. Verify auth, chat, memory, uploads, and Supabase connectivity.
3. Move the heavier brain endpoints behind the GitHub-controlled API contract.
4. Point the shell to the external brain with `VITE_BRAIN_API_BASE_URL`.
5. Reduce Base44 to channel/shell usage only, or phase it out fully.

## Important limitation
Moving runtime to Cloudflare reduces Base44 dependence, but iMessage itself still remains a Base44-managed channel if you keep using that channel.
So this migration cuts runtime dependence first; channels can be decoupled later if needed.
