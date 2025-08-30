Generate Vitest + React Testing Library tests.

Constraints:

- Use AAA (Arrange/Act/Assert). No snapshot tests for trivial renders.
- Use queries by role/label; include a11y edge cases.
- Mock network with MSW if needed; avoid manual timers unless essential.
- Use the helper `renderWithProviders` from `@/test/renderWithProviders`.

Output:

- A complete test file.
- Mention any helper updates if required.
