# Log

## [2026-04-14] Функціонал редагування та розширення БД.
- **Database:** Додано поле `images` (String[]) до моделі `Product` у Prisma. Виконано синхронізацію з БД через `prisma db push`.
- **Product Management:**
  - Реалізовано сторінку редагування товару: `/admin/products/[id]`.
  - Оновлено `ProductForm.tsx`: тепер форма універсальна (працює і на створення, і на редагування).
  - Створено серверний екшн `updateProduct` для збереження змін.
- **Code Quality:** Проведено автоматичне форматування Prettier перед пушем.
- **Git:** Коміт `4f2330b` запушено в `dev`.

## [2026-04-14] Уніфікація типів та валідації (Zod + React Hook Form).
- Type Refactor, Form Stabilization, Unified Validation.
- Git: `524332a`.
