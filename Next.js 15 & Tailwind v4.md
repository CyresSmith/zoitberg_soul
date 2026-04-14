# Next.js 15 & Tailwind v4

Практичні патерни, які вже закріплені в [[Gaztechprime]].

## Routing
- Використовувати `Link` з `next/link`, не сирі `<a>` для внутрішньої навігації.
- Route-level UX можна підсилювати глобальним progress bar через `nprogress`.

## UI conventions
- Tailwind v4 theme tokens зберігати в `app/globals.css` через `@theme`.
- Спільні UI-елементи тримати в `components/ui`.
- Для інтерактивних елементів підтримувати явний `cursor-pointer`.

## Forms
- Базовий стек: `react-hook-form` + `zod` + shadcn/ui.
- Схеми зберігати централізовано в `lib/schemas`.
- Кнопка submit має бути disabled, поки форма невалідна або pending.

## Shared imports
- `@types`
- `@hooks`
- `@utils`
- `@lib/*`
- `@components/*`

## Related
- [[Gaztechprime]]
- [[KNOWLEDGE]]
