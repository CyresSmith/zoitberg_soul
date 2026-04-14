# Next.js 15 & Tailwind v4 Patterns 🎨

## 🚀 Основні принципи
- **Routing:** Завжди використовувати `<Link>` з `next/link`.
- **Loading:** Використання `nprogress` для глобальної індикації завантаження.
- **Styling:** Tailwind v4 з використанням `@theme` блоку в `globals.css`.

## 📦 Компоненти
- **Icons:**
  ```tsx
  <Icon name="logo" width={64} height={64} className="text-yellow-500" />
  ```
- **Shared UI:** Всі нові компоненти додавати в `components/ui/` з експортом через `components/ui/index.ts`.

## ⚙️ Конвенції
- Аліаси: `@types`, `@utils`, `@hooks`, `@lib`, `@components`.
