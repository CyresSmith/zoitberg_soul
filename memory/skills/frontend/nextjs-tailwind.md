# Next.js 15 Dynamic Routes
- **Async Params:** In Next.js 15, `params` and `searchParams` in Page components are now Promises. They must be awaited before accessing properties. 
  - *Incorrect:* `const slug = params.slug`
  - *Correct:* `const { slug } = await params`
- Failure to await params causes hydration errors and build failures in production.

# Daily Log: 2026-04-13 (Maintenance)
- Fixed broken dynamic routing in `/catalog/[category]` and `/catalog/product/[slug]`.
- Restored missing content on the Product Detail page after accidental folder deletion.
- Aligned code with Next.js 15 "Async Params" breaking changes to fix production runtime errors.
- Synchronized `dev` and `master` branches to ensure Vercel reflects the latest fixes.
