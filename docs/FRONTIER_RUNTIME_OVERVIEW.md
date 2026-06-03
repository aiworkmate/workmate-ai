# WorkMate Frontier Runtime Overview

This layer adds the first runtime building blocks for a stronger AI operating system inside the app codebase.

Files added:
- `src/lib/chat/frontier/select-agent.server.ts`
- `src/lib/chat/frontier/select-model.server.ts`
- `src/lib/chat/frontier/retrieve-context.server.ts`
- `src/lib/chat/frontier/verify-claim.server.ts`
- `src/lib/chat/frontier/run-task-workflow.server.ts`
- `src/lib/chat/frontier/types.ts`

What this gives WorkMate:
- intent-aware specialist selection
- model routing with fallback plans
- structured context retrieval from projects, memory, sources, verification logs, tasks, and operational knowledge
- lightweight claim verification against current context
- reusable task workflow planning around Goal -> Plan -> Execute -> Verify -> Improve

This is intentionally modular so the current app can adopt it step by step instead of breaking the existing chat path.
