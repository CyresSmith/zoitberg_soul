# Gaztechprime | Project Overview 🏗️

B2B e-commerce платформа для продажу промислового газового обладнання (ШГРП, ГРП, лічильники, фільтри).

## 📊 Поточний статус
- **Core:** Next.js 15 (App Router) + Tailwind CSS v4.
- **Data:** Prisma + PostgreSQL (Neon).
- **Features:** 
  - Динамічний каталог товарів та категорій.
  - Повна B2B система замовлень (Checkout) з розрахунком ПДВ 20%.
  - Автоматичні Email-сповіщення через Nodemailer (`madnezz5@gmail.com`).
  - Адмін-панель: повний CRUD для товарів, категорій, портфоліо та заявок.
  - Кошик: Zustand state з персистентністю.

## 📐 Архітектурні рішення
- **State Management:** Zustand (`lib/hooks/use-cart.ts`).
- **Icons:** Власна система спрайтів (`build-icons.js`) + компонент `<Icon />`.
- **Forms:** React Hook Form + Zod + shadcn/ui.
- **UI:** Industrial Dark Theme (Cyber Yellow accents).

## 🚀 Наступні кроки
- [ ] Реалізація завантаження зображень (S3/UploadThing).
- [ ] Фільтрація товарів за технічними характеристиками.
- [ ] Оптимізація SEO для сторінок категорій.
