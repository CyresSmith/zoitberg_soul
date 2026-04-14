# Log

## [2026-04-14] Deep Work | Рефакторинг конфігурації та фікс TS помилок.
- **Config Centralization:** Створено `lib/config.ts` для централізованого керування змінними оточення (`process.env`).
- **TypeScript Fix:** Виправлено помилку "Property comes from an index signature" шляхом використання доступу через квадратні дужки `process.env['VAR']` у конфігу.
- **Email Refactor:** Оновлено `lib/email.ts` для використання нового об'єкта `config`.
- **Code Quality:** Проведено автоматичне форматування коду через Prettier перед пушем.
- **Git:** Коміт `812a92b` запушено в `dev`.

## [2026-04-14] Deep Work | Система замовлень та Email-сповіщень.
- Оптимізовано посилання (`Next Link`).
- Налаштовано `createOrder` та `Nodemailer`.
- Додано відсутні UI-компоненти та хуки.

## [2026-04-12] setup | Активація режиму Karpathy-Wiki.
