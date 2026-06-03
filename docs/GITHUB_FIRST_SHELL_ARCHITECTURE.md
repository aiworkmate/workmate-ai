# GitHub-First Brain / Base44 Shell Architecture

WorkMate should be developed as a GitHub-first AI operating system.

## Principle
GitHub is the operating brain and source of truth.
Base44 is the shell: interface, state surfaces, and product experience.

## What stays in Base44
- premium 3-panel shell
- mobile-native workspace UX
- project views
- memory center
- task and workflow views
- trust/evidence panel
- entity-backed product data
- auth/session state

## What moves to the GitHub brain
- request routing
- model selection and fallback policy
- verification logic
- context assembly
- memory ranking/extraction policy
- workflow planning and execution policy
- evals and regression gates
- operating heuristics and prompt registry

## Shell-to-brain contract
The shell should call a small number of stable backend endpoints:
- `POST /v1/brain/chat`
- `POST /v1/brain/context`
- `POST /v1/brain/verify`
- `POST /v1/brain/workflows/plan`
- `GET /v1/brain/health`

The chat stream should emit typed events for:
- route
- verification
- memory use
- tool activity
- sources
- token stream
- final completion metadata

## Why this is better
- fewer builder-credit-heavy rewrites
- versioned intelligence in GitHub
- easier testing and evals
- clearer trust surfaces in product
- ability to improve the brain without redesigning the shell every time

## Implementation posture
Base44 should remain thin and intentional.
Do not move core intelligence decisions into scattered UI code.
The shell renders state; the brain decides.
