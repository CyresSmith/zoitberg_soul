# Log

## [2026-04-15] Refactor & Tooling | Auth, Uploads, MCP, and Karpathy Method Sync
- **Що зроблено:**
  - **Admin Layout:** Full-height sidebar (`h-screen`) and independent scroll.
  - **Uploads:** `uploadImage` service supporting Local & Cloudinary (`CLOUDINARY_URL`). Added `ImageUpload` component with Drag-and-Drop sorting (`@hello-pangea/dnd`).
  - **Auth:** Refactored `auth.ts` to fix NextAuth v5 TS mismatch error with Next.js 16. Added `trustHost: true` for Vercel. Migrated `middleware.ts` to `proxy.ts`.
  - **MCP & Skills:** Configured shadcn MCP server in `.openclaw/mcp.json`. Installed `nextjs-patterns`, `lb-shadcn-ui-skill`, `tailwind-v4-shadcn`.
  - **Settings Page:** Fully implemented admin settings interface.
  - **Config Centralization:** All `process.env` calls routed through `lib/config.ts`.
  - **Knowledge Base Sync:** Adapted the wiki to strictly use Obsidian native format (flat structure, `[[wikilinks]]`, `index.md`, `log.md`). Removed redundant `MEMORY.md` and duplicate code folders.
- **Конвенції:** Only `gaztechprime` folder is used for code. All config reads must go through `lib/config.ts`. NextAuth v5 requires specific init pattern and `trustHost: true`.
- **Пов'язані notes:** [[Shadcn MCP & UI]], [[Gaztechprime]], [[Next.js 15 & Tailwind v4]]
- **Git Hash:** `c005ea6`

## [2026-04-14] SEO & Forms | React Hook Form & Zod, PWA, Sitemap
- **Що зроблено:** 
  - Форми на сайті переведені на суворий Zod + React Hook Form (Contacts, Checkout).
  - Схеми та типи винесені у `lib/schemas` та `lib/types`.
  - Моделі `Lead` розділено на `Order` та `Consultation`. Відповідно оновлено адмін-панель.
  - Усі таблиці адмін-панелі отримали клікабельні посилання для швидкого переходу.
  - SEO оптимізація: 404, error boundaries, `manifest.ts`, `robots.ts`, `sitemap.ts`.
  - On-Demand Revalidation: Після змін в адмінці автоматично викликається `revalidatePath` для `sitemap.xml` та динамічних сторінок замість ISR-таймерів.
  - `generateMetadata` для динамічного SEO на кожній сторінці товару/категорії.
- **Конвенції:** Обов'язкове використання єдиного стандарту форм. Додано `[[React Hook Form & Zod]]` та `[[SEO & Metadata]]` у Вікі.
- **Git Hash:** `8b4ec76`

## [2026-04-14] Refactor | Obsidian knowledge base cleanup
- **Що зроблено:** прибрано штучну ієрархію `projects/` і `skills/` у `wiki/notes`, контент перенесено в окремі Obsidian-notes верхнього рівня.
- **Файли:** `Gaztechprime.md`, `Next.js 15 & Tailwind v4.md`, `Prisma & PostgreSQL.md`, `DevOps Workflows.md`, `Design to Code.md`, `index.md`, `KNOWLEDGE.md`.
- **Конвенції:** wiki має бути MD-first, з короткими змістовними notes і щільними `[[wikilinks]]`, а не з псевдо-репозиторною структурою.
- **Git Hash:** `e4e8dda`

## [2026-04-14] Deep Work | Gaztechprime evolution
- **Що зроблено:** cart на Zustand, checkout з email/DB, admin CRUD, global loader, UI polish.
- **Файли:** численні зміни в `gaztehprime_repo` + wiki notes.
- **Конвенції:** `next/link`, `@types`, `@hooks`, `@utils`, RHF + zod, `/svg` + `build-icons.js`.
- **Git Hash:** `bc6980f` ... `9bd01c2`

## [2026-04-14] UI/Admin | Меню активної сторінки, заявки, українська локалізація
- **Що зроблено:**
  - Підсвітка активної сторінки в меню хедера.
  - Кнопка "Консультація інженера" на сторінці товару веде на форму консультації в контактах (`/contacts#consultation-form`).
  - Адмінка: списки переведені на перевикористовуваний `AdminTable`, додано/виправлено edit+delete у таблицях.
  - Заявки (`Lead`): статуси + віджет у дашборді з лічильниками (Нові/Не оброблені/Оброблені) + бейдж нових, бейдж NEW у сайдбарі.
  - Статуси в UI повністю українською.
- **Файли:** `components/shared/header.tsx`, `components/shared/product-actions.tsx`, `app/(main)/contacts/page.tsx`, `app/admin/*`, `components/admin/admin-table.tsx`, `lib/utils/lead-status.ts`.
- **Git Hash:** `8e0ac28`, `5c14cd5`, `c93ad9a`

## [2026-04-12] Setup | Karpathy wiki bootstrap
- **Що зроблено:** ініціалізовано `AGENTS.md`, `Automation.md`, `index.md`, `log.md`.
- **Файли:** базові notes wiki.
- **Конвенції:** compounding wiki / wiki-first workflow.
- **Git Hash:** initial setup
