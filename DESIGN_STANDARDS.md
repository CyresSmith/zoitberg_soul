# Design & Dev Standards

## 1. Mobile-First (UI/UX)
- **Base constraints:** 320px-375px width.
- **Touch targets:** Minimum 44x44px for interactive elements (buttons, links).
- **Typography:** Legible without zooming (min 16px body text).
- **Forms:** Large inputs, native keypads (e.g., `type="tel"`).

## 2. Figma to Code Best Practices
- **Variables & Tokens:** Map Figma colors/typography directly to Tailwind `tailwind.config.ts`.
- **Auto Layout -> Flexbox:** Figma Auto Layout translates 1:1 to Tailwind flex classes (`flex`, `gap`, `items-center`).
- **Components:** Break UI down (shadcn/ui approach). Reusable buttons, cards, headers.
- **Assets:** Export icons as SVGs. Use `<svg>` inline or Next.js `next/image` for WebP optimization.

## 3. Next.js & Tailwind
- **Server Components:** Default to SSR for SEO (crucial for B2B e-commerce). Use `"use client"` only for interactivity.
- **Performance:** Keep Client Components at the leaves of the render tree.
- **Tailwind:** Avoid arbitrary values (`w-[321px]`) unless absolutely necessary. Stick to the grid/spacing scale.