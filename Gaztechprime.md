# Gaztechprime

B2B e-commerce проєкт для промислового газового обладнання. Основний код живе в `gaztehprime_repo`, а ця note є Obsidian-центром контексту по проєкту.

## Поточний стан
- Next.js 15 + App Router + Tailwind CSS v4.
- Prisma + PostgreSQL (Neon).
- Каталог і категорії працюють від БД.
- Кошик на Zustand, checkout створює `Lead` у БД та шле email.
- Адмінка має CRUD для товарів, категорій, портфоліо та сторінку деталей заявки.
- Додано глобальний loader через `nprogress`.
- Після успішного оформлення замовлення кошик очищується.

## Ключові рішення
- Для навігації використовувати тільки `next/link`.
- Спільні типи експортувати через `@types` (`lib/types/index.ts`).
- Спільні хуки через `@hooks`, утиліти через `@utils`.
- Форми будувати на `react-hook-form` + `zod`.
- Всі SVG зберігати в `/svg`, синхронізувати через `build-icons.js`.
- Git author для комітів: `Zoidberg AI <madnezz5@gmail.com>`.

## Відкриті задачі
- Реальний upload зображень для товарів і портфоліо.
- Повний аудит усіх форм під RHF + zod + disabled submit when invalid.
- Дотиснути end-to-end перевірку cart/checkout/build.
- SEO та фільтрація каталогу.

## Пов'язані notes
- [[KNOWLEDGE]]
- [[Next.js 15 & Tailwind v4]]
- [[Prisma & PostgreSQL]]
- [[DevOps Workflows]]
- [[Automation]]
- [[log]]
