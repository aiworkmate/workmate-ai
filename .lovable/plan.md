
# WorkMate X — Full Overhaul Plan

This spec is enormous (12+ entities, 8 product areas, 3-panel shell, mobile UX, trust/health systems). Shipping it well requires phasing — attempting it in one turn produces shallow, half-wired pages. Here's the sequenced plan.

## Phase 1 — Backend foundation (1 migration, this turn after approval)

One Supabase migration adds the missing entities. Existing tables (`conversations`, `messages`, `memories`, `uploads`, `profiles`, `organizations`, `workspaces`, etc.) are **not** touched.

New tables (all RLS-enabled, scoped to `auth.uid()` or workspace via existing `app_private` helpers):

- `projects` — name, description, color, status, workspace_id
- `project_goals` — project_id, title, status, target_date
- `project_milestones` — project_id, title, status, due_date
- `project_decisions` — project_id, title, content, decided_at
- `project_notes` — project_id, title, content
- `tasks` — project_id, goal_id, title, description, status, priority, due_date, assigned_agent, plan (jsonb), blockers, result_summary, verification_status, retry_count, requires_approval, approved
- `documents` — title, type, content, file_url, project_id, tags, is_pinned (links to existing `uploads` bucket)
- `sources` — title, url, type, project_id, conversation_id, snippet, fetched_at, freshness_score, is_verified, tags
- `agent_definitions` — agent_id, label, description, status, routing_keywords, total_invocations, avg_latency_ms, success_rate, last_used
- `operational_knowledge` — title, content, category, source, project_id, agent_type, confidence, applied_count, is_active
- `verification_logs` — claim, verdict, confidence, source, evidence, agent_type, conversation_id, project_id, verified_at
- `tool_connections` — name, tool_type, status, description, last_used, invocation_count, config (jsonb)
- `health_metrics` — metric_name, category, value, unit, status, recorded_at, notes

Additions to existing `memories`:
- `layer` enum (working|session|project|user|knowledge|archive)
- `project_id` (nullable fk)
- `importance` (real)
- `verified` (bool)
- `source` (text)
- `tags` (text[])

Seed: 10 `agent_definitions` rows (CEO, Research, Coding, Business, Marketing, Finance, Legal, Medical, PM, Travel).

## Phase 2 — App shell + 3-panel layout (this turn)

- Rebuild `AppSidebar` with new IA: Chats, Projects, Agents, Memory, Files, Settings (+ collapsible Insights/Admin).
- New `RightOperatingPanel` component: context-aware, shows active project, memory hits, sources, verification, tasks, routing/agent, health badges.
- `app.tsx` becomes a 3-pane responsive grid (sidebar | center | right panel). Right panel collapses to a sheet on mobile (<1024px). Sidebar collapses to icons on tablet, drawer on mobile.
- Mobile composer becomes sticky/floating.

## Phase 3 — New pages (this turn)

- `/app/projects` — grid of project cards (color, status, progress, task count).
- `/app/projects/$id` — workspace with tabs: Overview, Goals, Milestones, Tasks, Notes, Decisions, Files, Memory, Sources, Timeline.
- `/app/agents` — directory of specialist agents with usage stats.
- `/app/sources` — source explorer with freshness/verification filters.
- `/app/tools` — tool connection cards (search, docs, email, calendar, CRM, GitHub, storage) with status.
- `/app/health` — system health dashboard (memory_quality, context_quality, response_quality, search_success, hallucination_risk, latency, routing_quality).
- `/app/verification` — verification log explorer.

## Phase 4 — Refresh existing pages (this turn)

- `/app/memory` → Memory Center: layer tabs, confidence/verification badges, source pills, project linkage, pin/archive.
- `/app/chat` → integrate right operating panel with live context (project, memory hits, sources, agent, verification).
- `/app/uploads` → renamed Files, dual view (uploads + documents).

## Phase 5 — Trust & polish (this turn)

- Shared trust primitives: `<ConfidenceBadge>`, `<VerificationBadge>`, `<SourcePill>`, `<FreshnessIndicator>`, `<AgentChip>`.
- Empty states for every new page tied to seeded sample CTAs.
- Mobile: no horizontal scroll, 44px touch targets, sheet-based right panel.

## What I will NOT change

- Auth flow, Supabase client wiring, RLS helpers
- Existing chat pipeline (`router.server.ts`, `model.server.ts`, `memory.server.ts`, etc.)
- Existing tables' columns (only additive changes to `memories`)
- Edge functions, server function signatures called by the chat UI

## Technical approach

- Frontend reads new tables via `createServerFn` + `requireSupabaseAuth` (matches existing pattern in `src/lib/chat/*.functions.ts` or new `src/lib/projects.functions.ts` etc.).
- New entities have minimal write surfaces this round (create/list/update status); deep editors can come in a follow-up turn.
- Mock/sample data only as empty-state illustrations — real data comes from the new tables.

## Sequence of execution after approval

1. Submit the single Supabase migration (Phase 1) → wait for your approval.
2. Once migration runs, regenerate types are automatic; then implement Phases 2–5 across multiple file edits.
3. Verify build passes and report.

**This will be a large multi-file change.** I will not silently truncate scope — if something needs to slip to a follow-up turn (e.g. deep task editor, workflow execution visualization), I'll call it out explicitly at the end.

Approve to proceed with the Phase 1 migration.
