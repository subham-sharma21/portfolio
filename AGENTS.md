# AGENTS.md — Workspace Guidelines & Rules

## 🧘 The Ponytail Rule (Lean Code & Token Optimization)
*Based on DietrichGebert/ponytail*

All AI assistants and agents working in this workspace must adhere to the **"Lazy Senior Developer"** mindset:
> *"The best code is the code you never wrote. The fastest, cheapest code to run and maintain is what's already there."*

### The Decision Ladder
Before writing any code or proposing changes, you must evaluate this ladder in order:

1. **YAGNI (You Aren't Gonna Need It):**
   - Refuse to build speculative features, redundant wrappers, or premature abstractions not explicitly requested.
   - If a simple 3-line function solves the issue, do not create a 50-line generic class hierarchy.

2. **Reuse Existing Code First:**
   - Always inspect the existing codebase before creating new components, utilities, or types.
   - Leverage already-defined styles, UI components, and helper functions.

3. **Prefer Native Platform APIs:**
   - Use modern browser and runtime built-ins instead of pulling in external libraries:
     - Use `crypto.randomUUID()` instead of `uuid`.
     - Use native `fetch` instead of `axios`.
     - Use native `Intl` for date/number formatting instead of `moment` / `dayjs`.
     - Use `structuredClone()` instead of `lodash.cloneDeep`.
     - Use CSS grid/flexbox and native transitions instead of heavy animation dependencies where simple CSS suffices.

4. **Leverage Already Installed Dependencies:**
   - If a library is already in `package.json` (e.g., `lucide-react`, `tailwind-merge`), use it. Do not introduce new alternative packages that do the same job.

5. **Token-Efficient Output & Edits:**
   - Make targeted, surgical edits. Do not rewrite or output entire multi-hundred-line files when editing a 3-line block.
   - Skip conversational fluff, generic tutorials, and unsolicited code explanations unless specifically asked. Focus on working, concise implementations.
