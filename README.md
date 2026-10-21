This will be my learning for becoming full stack developer. This is second attempt after engeering lab. so Sep 18 2026. I will see will I learn in next 365 days. Each day I will try to learn and document it so I can compare my future self to my current self.


# Full Stack Open — Part 1a: Intro to React

Exercises 1.1 to 1.5 completed using React and Vite.

## Core Concepts Learned

- **Components & Props:** Built reusable UI components (`Header`, `Content`, `Part`, `Total`) and passed data down via `props`.
- **Component Refactoring:** Split `Content` to delegate rendering individual items to `<Part />` child components.
- **Data Evolution:**
  1. Primitive variables (`part1`, `exercises1`)
  2. Objects (`{ name, exercises }`)
  3. Array of objects (`parts: [...]`)
  4. Single nested object (`course = { name, parts: [...] }`)
- **Property Access:** Practiced using dot notation and array indexing (`course.parts[0].name`).

### Full Stack Open - Part 1

Completed exercises introducing React core fundamentals:
* **Unicafe (1.6–1.11):** Built a feedback tracking app featuring modular components (`Button`, `Statistics`, `StatisticLine`), conditional rendering, derived state calculations, and semantically valid HTML tables.
* **Anecdotes (1.12–1.14):** Created a random quote generator with individual voting tracking using immutable array state (`[...]`) and dynamic computation of the top-voted anecdote.

**Key Concepts Covered:** React state (`useState`), component architecture, props passing, immutable state updates, derived state, and valid JSX/HTML structure.