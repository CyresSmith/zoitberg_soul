# Project Knowledge & Standards (Zoidberg AI) 🦀💎

## 🛠 Tech Stack
- **Framework:** Next.js 15 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Database:** Prisma + PostgreSQL
- **Validation:** Zod + React Hook Form

## 📐 Architecture & Conventions
- **Path Aliases:**
  - `@types`: All shared TypeScript interfaces and types. Source: `lib/types/index.ts`.
  - `@utils`: Shared utility functions (like `cn`). Source: `lib/utils/index.ts`.
  - `@hooks`: Shared React hooks. Source: `lib/hooks/index.ts`.
  - `@lib/*`: Server actions and shared logic.
  - `@components/*`: All UI and domain components.
- **Icon System:**
  - SVGs are stored in `/svg`.
  - Run `node build-icons.js` to generate sprite (`public/icons/sprite.svg`) and types (`lib/types/icon.type.ts`).
  - Always use the `<Icon name="icon-id" />` component.
- **Coding Rules:**
  - **SPA Routing:** Use Next.js `<Link>` instead of native `<a>`.
  - **Type Safety:** Always import shared types via `@types`. Never use relative imports for shared logic.
  - **Form Validation:** Every form must use `react-hook-form` + `zod` schema from `@lib/schemas`.
  - **Clean Code:** Run `npm run format` (Prettier) before every commit.
  - **Commit Author:** Use `madnezz5@gmail.com` for all Git operations to avoid Vercel build conflicts.

## 🔄 Daily Workflow Protocol
1. **Pull:** `git pull` from project and wiki repos.
2. **Scan:** Check `README.md` and `log.md` for current task status.
3. **Execute:** Code -> Format -> Test Build (if possible).
4. **Log:** Update `wiki/notes/log.md` with every significant change.
5. **Push:** Push to `dev` (project) and `master` (wiki).
