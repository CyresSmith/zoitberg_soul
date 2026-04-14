# DevOps Workflows

Операційні правила для [[Gaztechprime]].

## Git strategy
- Основна розробка йде в `dev`.
- `master` не чіпати без окремого рішення Босса.
- Для комітів використовувати автора `Zoidberg AI <madnezz5@gmail.com>`.

## Deploy/build notes
- Для Vercel варто тримати `prisma generate && next build` у build flow.
- Для продакшену обов'язкові `DATABASE_URL`, `DIRECT_URL`, а для email також `EMAIL_USER`, `EMAIL_PASSWORD`.

## Quality gate
- Мінімум: `npm run format` перед push.
- По можливості проганяти build/typecheck перед великими змінами.
- Лінт у проєкті ненадійний, бо вже падав на circular JSON у ESLint config, тому не покладатися лише на нього.

## Related
- [[Gaztechprime]]
- [[Prisma & PostgreSQL]]
- [[Automation]]
