# SEO & Metadata (Next.js 15)

## Динамічні сторінки (SSG + ISR / SSR)
Замість фонових процесів генерації Sitemap (`export const revalidate = 3600;`), використовуємо **on-demand revalidation**.
Коли ми зберігаємо товар або категорію в адмінці, ми викликаємо `revalidatePath('/sitemap.xml')`, `revalidatePath('/catalog/product/[slug]')` та інші відповідні роути, щоб відразу перегенерувати їх без очікування та кешу.

## `generateMetadata`
На кожній динамічній сторінці товару/категорії має бути реалізована функція `generateMetadata`:
```tsx
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const product = await db.product.findUnique({ where: { slug: resolvedParams.slug } });
    
    // ... генеруємо title, description, openGraph
    return {
        title: product.name,
        description: product.description,
        openGraph: { title: product.name, images: product.images },
    }
}
```

## Глобальні налаштування
- `app/layout.tsx` містить спільні метадані (Title Templates, Keywords, OpenGraph fallback).
- `app/manifest.ts` генерує маніфест для Progressive Web App (PWA).
- `app/sitemap.ts` автоматично мапить базу даних та статичні сторінки для `sitemap.xml`.
- `app/robots.ts` дає ботам доступ до сторінок (і забороняє `/admin/`).
