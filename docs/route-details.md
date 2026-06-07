<!--
Purpose: Track public and internal routes used by Tolaria.
Contains: the current route set and expected behavior at a high level.
Audience: maintainers adding navigation targets, deep links, or route-like handlers.
-->
# Route Details

## Current status

Tolaria is primarily a desktop-first app built with a local UI shell and Rust backend process, so it does not expose a public web API endpoint set for route-style HTTP requests.

## SPA route model

- The app is packaged as a client UI and uses in-app navigation patterns, not Express-style path routing.
- Shared UI navigation for note/workspace context is handled through internal component state and persisted vault metadata.
- No public route table has been defined in the frontend at this time.

## Tauri command surface (desktop bridge)

The Rust layer exposes behavior to the frontend through Tauri commands. Command names are the practical equivalent of backend entry points.

- Command definitions are implemented in `src-tauri/src/commands/*` and wired through the main app command registration layer.
- Keep any new command additions documented in the API contract file and this document when command surface changes.

## Planned route-style extension

- If an HTTP API is added in the future (for diagnostics, self-hosted mode, or sync endpoints), this file should track:
  - Route path + method
  - Authentication/authorization model
  - Request/response schema
  - Rate-limit and throttling rules
  - Known failure cases and observability signals
