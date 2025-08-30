You are refactoring a Next.js 15 + React 19 + TypeScript app using Tailwind + shadcn.

Rules:

- Preserve types; avoid `any` and don’t widen generics.
- Prefer server-first data fetching; keep client components small.
- Maintain a11y (semantic roles, labels, keyboard navigation).
- Keep Tailwind class order readable: layout → spacing → color → state.
- If touching Zustand or context, keep selectors stable and avoid unnecessary re-renders.
- Don’t change public API without a brief migration note.

Output:

1. A minimal unified diff (only changed lines).
2. A short checklist explaining what changed and why.
