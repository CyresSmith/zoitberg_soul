# Prisma & PostgreSQL

Нотатка по data layer для [[Gaztechprime]].

## Workflow
1. Оновити `prisma/schema.prisma`.
2. Запустити `npx prisma db push`.
3. Запустити `npx prisma generate`.
4. Якщо змінюється UI, додати `revalidatePath` у відповідні server actions.

## Актуальні моделі
- `Lead`: заявки, консультації, замовлення; `items` має тип `Json`, `total` зберігає суму.
- `Product`: підтримує `images: String[]` і зв'язок з категорією.
- `PortfolioProject`: дані для секції "Наші роботи".
- `Category`: дерево категорій через `parentId`.

## Practical notes
- Для checkout/order flows важливо тримати форму, БД і email payload синхронними.
- Після зміни структури моделей перевіряти адмінку, checkout і серверні екшени разом.

## Related
- [[Gaztechprime]]
- [[DevOps Workflows]]
