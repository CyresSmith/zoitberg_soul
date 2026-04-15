# KNOWLEDGE

Це верхньорівнева note з короткими правилами. Деталі винесені в окремі Obsidian-pages, а не в технічні директорії.

## Головні конвенції
- **Multi-Project Isolation:** Ми працюємо над декількома проєктами паралельно. Знання (напр. `[[Gaztechprime]]`, `[[Інший Проєкт]]`), код та конфігурації різних проєктів **суворо ізольовані** та ніколи не змішуються.
- `next/link` для внутрішньої навігації.
- `@types`, `@hooks`, `@utils` як канонічні alias-и.
- RHF + zod для форм.
- `/svg` + `build-icons.js` + `<Icon />` як єдина іконкова система.
- `npm run format` перед push.
- Wiki треба оновлювати разом із значущими змінами в коді.

## Карта знань
- Проєкт: [[Gaztechprime]]
- Frontend: [[Next.js 15 & Tailwind v4]]
- Data layer: [[Prisma & PostgreSQL]]
- Delivery/process: [[DevOps Workflows]]
- Design practice: [[Design to Code]]

## Примітка по структурі
Obsidian-база тут має бути MD-first: окремі змістовні notes, пов'язані [[wikilinks]], а не штучна файлова ієрархія `projects/` і `skills/`, яка дублює структуру коду замість знань.
