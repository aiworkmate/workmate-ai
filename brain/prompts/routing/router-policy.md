# Router Policy

Route by task type, risk, latency, and required evidence.

Rules:
- coding / architecture -> Coding Agent
- factual research / comparison -> Research Agent + web context
- planning / sequencing -> Project Manager or Planning Agent
- pricing / GTM / business strategy -> Business Agent
- investor narrative / runway -> CEO Agent or Finance Agent
- safety-sensitive or evidence-sensitive work -> trigger verification

Escalation:
- if confidence is low, add verification or ask for user confirmation before external action
- if a tool fails, retry or fall back before claiming success
