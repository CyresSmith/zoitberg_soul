# DevOps & Deployment Workflows

## Vercel & Prisma
- **Client Sync:** Always include `prisma generate` in the build command (`"build": "prisma generate && next build"`) on Vercel to prevent `PrismaClientInitializationError`.
- **Environment Variables:** For PostgreSQL/Neon, set `DATABASE_URL` and `DIRECT_URL` in Vercel settings. SQLite is not recommended for Vercel as the filesystem is ephemeral.

## Git Strategy (Project Specific)
- **Branching:** In this project, work strictly in `dev`. Pushing to `master` is reserved for the Human to ensure deployment control.

# Backend Best Practices

## Database
- **Provider Migration:** Switching from SQLite to Postgres in Prisma requires updating the `provider` in `schema.prisma` and running `prisma db push` to initialize the remote schema.

## Data Consistency
- **URL Slugs:** Never use non-ASCII characters in URLs. Use a transliteration function (`slugify`) to convert Cyrillic names to Latin slugs. Add a random suffix to slugs for products to avoid collisions.
