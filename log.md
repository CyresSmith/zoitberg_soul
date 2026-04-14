# Log

## [2026-04-14] Повний CRUD для Адмін-панелі.
- **Leads Details:** Створено детальну сторінку замовлення `/admin/leads/[id]`. Відображає склад кошика, дані клієнта, коментарі та загальну суму.
- **Portfolio Management:**
  - Реалізовано повний цикл (створення/редагування/видалення) для розділу "Наші роботи".
  - Створено `PortfolioForm.tsx` (Zod + RHF).
  - Створено сторінки `/admin/portfolio/new` та `/admin/portfolio/[id]`.
- **Categories Refactor:** 
  - Додано можливість редагування категорій через сторінку `/admin/categories/[id]`.
  - Уніфіковано `CategoryForm.tsx` для підтримки існуючих даних.
- **Code Quality:** Проведено форматування Prettier.
- **Git:** Коміт `285971c` у `dev`.

## [2026-04-14] Впровадження глобальних лоадерів.
- Global Loader (NProgress), Layout Optimization.
- Git Hash: `cd6771b`
