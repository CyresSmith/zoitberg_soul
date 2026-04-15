# Gaztechprime

B2B e-commerce проєкт для промислового газового обладнання. Основний код живе в `gaztechprime`, а ця note є Obsidian-центром контексту по проєкту.

## Поточний стан
- Next.js 16 + App Router + Tailwind CSS v4.
- Prisma + PostgreSQL (Neon).
- Авторизація на базі NextAuth v5 (Auth.js) з використанням workaround для Next.js 16 та `trustHost: true` для Vercel.
- MCP Server Shadcn налаштований у `.openclaw/mcp.json`. Можна завантажувати компоненти за допомогою AI через `npx shadcn@latest mcp`.
- Каталог і категорії працюють від БД.
- Сторінка категорії каталогу має перемикач вигляду **Сітка/Список** (підтримує `?view=list`).
- Кошик на Zustand, checkout створює `Lead` у БД та шле email.
- Адмінка має CRUD для товарів, категорій, портфоліо та сторінку деталей заявки. Також є сторінка налаштувань.
- В адмінці таблиці списків винесені в перевикористовуваний компонент `AdminTable`.
- Сайдбар адмінки на весь екран (`h-screen`), контентна частина має власний скрол.
- Завантаження зображень (Local або Cloudinary) через `uploadImage` (керується `UPLOAD_STRATEGY` в `lib/config.ts`).
- Сортування зображень Drag-and-Drop реалізоване через `@hello-pangea/dnd`.
- Для заявок (`Lead`) використовується статус: `NEW | UNPROCESSED | PROCESSED` (в UI все українською).
- У дашборді є віджет заявок з лічильниками: **Нові / Не оброблені / Оброблені** + бейдж нових.
- Додано глобальний loader через `nprogress`.
- Після успішного оформлення замовлення кошик очищується.
- В хедері меню підсвічує поточну сторінку.
- На сторінці товару кнопка "Консультація інженера" веде на форму консультації в контактах (`/contacts#consultation-form`).

## Ключові рішення
- Всі змінні оточення (Env) реєструються та зчитуються ТІЛЬКИ через `lib/config.ts`. Пряме звернення до `process.env` суворо заборонено.
- Для навігації використовувати тільки `next/link`.
- Спільні типи експортувати через `@types` (`lib/types/index.ts`).
- Спільні хуки через `@hooks`, утиліти через `@utils`.
- Форми будувати на `react-hook-form` + `zod`.
- Всі SVG зберігати в `/svg`, синхронізувати через `build-icons.js`.
- Git author для комітів: `Zoidberg AI <madnezz5@gmail.com>`.

## Відкриті задачі
- Повний аудит усіх форм під RHF + zod + disabled submit when invalid.
- Дотиснути end-to-end перевірку cart/checkout/build.
- SEO та фільтрація каталогу.

## Пов'язані notes
- [[KNOWLEDGE]]
- [[Next.js 15 & Tailwind v4]]
- [[Shadcn MCP & UI]]
- [[Prisma & PostgreSQL]]
- [[DevOps Workflows]]
- [[Automation]]
- [[log]]
