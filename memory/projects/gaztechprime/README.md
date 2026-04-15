# Gaztechprime - Project Wiki

## Admin Panel
- **Env Management:** Всі змінні оточення реєструються та зчитуються ТІЛЬКИ через `lib/config.ts`. Пряме звернення до `process.env` заборонено.
- **Uploads:** Підтримка `local` та `cloudinary` через `UPLOAD_STRATEGY`. Drag-and-Drop сортування.
- **Auth:** NextAuth v5 (Auth.js) з `trustHost: true`.
- **Tables:** Admin listing tables use a reusable `AdminTable` component.
