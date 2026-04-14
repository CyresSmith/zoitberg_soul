# Log

## [2026-04-14] Уніфікація типів та валідації (Zod + React Hook Form).
- **Type Refactor:** Оновлено `lib/types/index.ts`. Тепер усі сутності (Category, Product, Lead) типізуються на основі Prisma Client та мають розширені інтерфейси для фронтенду.
- **Form Stabilization:** Виправлено помилку типізації `IntrinsicAttributes` у формах адмінки шляхом явного визначення інтерфейсів пропсів.
- **Unified Validation:** Усі форми проекту переведено на `react-hook-form` + `zod` з використанням схем із `lib/schemas`.
- **Code Quality:** Проведено форматування Prettier.
- **Git:** Коміт `524332a` запушено в `dev`.

## [2026-04-14] Рефакторинг Адмінки та Кошика.
- Побудовано динамічний дашборд.
- Реалізовано Cart Sidebar.
