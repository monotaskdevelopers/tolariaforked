<!--
Purpose: Catalog reusable UI components and shared component patterns.
Contains: component purpose, location, and maintenance notes.
Audience: frontend contributors and code reviewers.
-->
# Components

## Reusable Components Index

- `src/components/CommandPalette.tsx`
  - Purpose: global command entry for search/actions and workspace shortcuts.
  - Why reusable: used across main app states and keyboard-first navigation flows.
- `src/components/Editor.tsx`
  - Purpose: primary note-editing surface and markdown renderer bridge.
  - Why reusable: contains pluggable content blocks and integrates shared editor utilities.
- `src/components/FilterBuilder.tsx`
  - Purpose: dynamic filtering UI used by note lists and metadata views.
  - Why reusable: accepts structured filter schema and emits normalized filter state.
- `src/components/FolderTree.tsx`
  - Purpose: vault navigation and hierarchical note traversal.
  - Why reusable: central component for both sidebar and alternate layout contexts.
- `src/components/MarkdownContent.tsx`
  - Purpose: render markdown with plugin hooks and safety handling.
  - Why reusable: can be shared where markdown read-mode rendering is needed.
- `src/components/ConflictResolverModal.tsx`
  - Purpose: conflict inspection and resolution modal flow.
  - Why reusable: encapsulates conflict resolution state transitions for safe reuse.
- `src/components/ImageLightbox.tsx`
  - Purpose: shared image viewer for attachment previews.
  - Why reusable: modal behavior and keyboard navigation are standardized.
- `src/components/PropertyBadge.tsx` (if present in neighboring UI modules)
  - Purpose: visual tag and metadata chip rendering.
  - Why reusable: metadata-driven view styling without duplicating tag rendering rules.

## Usage conventions

- Prefer existing shadcn/ui primitives (buttons, inputs, selects, dialogs, switches) before introducing raw HTML form elements.
- Group cross-feature utility components under `src/components` and document in this file in the same commit as creation.
- For new components, include one-line test and one sentence about accessibility behavior in a follow-up docs update.
