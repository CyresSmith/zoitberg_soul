# Log

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
