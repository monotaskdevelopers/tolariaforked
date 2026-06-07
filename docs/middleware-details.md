<!--
Purpose: Keep middleware inventory explicit for security and observability.
Contains: current middleware (if any), responsibility, and implementation location.
Audience: reviewers extending request pipelines or command middleware-like guard logic.
-->
# Middleware Details

## Current state

There is no centralized HTTP middleware layer in the current desktop-first architecture.

## Security and request-guarding equivalents in-app

Since the app is event/command-driven, middleware-like behavior is implemented at:

- Input validation boundaries in command handlers and utility functions.
- File system and permission checks in Rust command implementations before mutating vault/content data.
- Environment and feature-flag checks around optional integrations.

## Additions to track

When adding request-style middleware in the future, document:

- Middleware name and file path
- Scope (global vs command-specific)
- Security effect (authn/authz/rate-limit/input sanitization)
- Failure mode and logging behavior
- Ownership and migration notes
