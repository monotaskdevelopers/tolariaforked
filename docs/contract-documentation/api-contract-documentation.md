<!--
Purpose: Track API contracts used/produced by Tolaria integrations.
Contains: public/internal API descriptions, endpoints, and expected request/response shape at a high level.
Audience: contributors touching model providers, sync, or external integrations.
-->
# API Contract Documentation

## Scope note

Tolaria is currently a client-first application with external service integrations and local command bridges, not a public HTTP API product.
Internal command contracts are implemented through the Tauri bridge and are tracked indirectly through code-level command registration and usage.

## External API contracts in use

| API family | Purpose | Default base URL | Notes |
| --- | --- | --- | --- |
| OpenAI-compatible chat providers | Chat and completion requests | `https://api.openai.com/v1` and configured provider base URLs | Model catalogs and provider settings are driven by `src/shared/aiModelProviderCatalog.json`. |
| Anthropic | Optional completion provider | `https://api.anthropic.com/v1` | Runtime overrides are resolved from provider settings and environment/command flags. |
| Open Router | Optional model routing | `https://openrouter.ai/api/v1` | Kept as pluggable provider entry in shared catalog config. |

## Contract risk notes

- All provider calls should avoid persisting raw API payloads that can contain secrets.
- API keys are never displayed in UI logs by default and should not be included in diagnostic output.
- When adding new integrations, capture request schema changes and response error taxonomy here before merge.

## Update checklist for contributors

When adding/changing an API contract:

1. Add endpoint and auth method summary.
2. Document request schema, response schema, and common error cases.
3. Capture throttling and retry behavior.
4. Link code locations where the contract is consumed and tested.
5. Record security implications and redaction boundaries in `docs/security-concerns.md`.
