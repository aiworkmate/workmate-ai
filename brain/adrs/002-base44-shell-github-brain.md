# ADR 002: Base44 Shell, GitHub Brain

## Decision
WorkMate X should use Base44 primarily as the product shell, data shell, and presentation layer.

The heavier intelligence layer should live in the GitHub-controlled codebase and external runtime:
- routing
- model selection
- verification
- workflow orchestration
- memory policies
- evals and regression checks
- long-term operating logic

## Why
This reduces builder-credit waste, keeps intelligence versioned, and makes the system easier to test, review, and improve.

## Shell responsibilities
Base44 should own:
- authentication/session handling
- chat/project/task/document UI
- right-side operating panel
- local entity display and editing
- thin API calls to the external brain

## Brain responsibilities
GitHub/runtime should own:
- orchestrating requests
- selecting agents/models
- retrieving and ranking context
- verification and evidence shaping
- workflow planning/execution logic
- eval harnesses and quality gates

## Implication
The contract between shell and brain must be explicit, typed, and stable.
The frontend should depend on API contracts, not hidden implementation details.
