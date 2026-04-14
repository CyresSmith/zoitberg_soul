# Gaztechprime - Project Wiki

## Overview
B2B e-commerce store for industrial gas equipment (SHGRP, GRP, meters, filters). 

## Repositories & Environments
- **GitHub:** `CyresSmith/gaztehprime`
- **Hosting:** Vercel (Auto-deploys from `dev` branch).
- **Branching:** `dev` (active), `master` (prod).

## Project Conventions
- **SVGs:** All SVG files must be stored in the `/svg` directory at the project root.
- **Imports:** Use `@utils` for utility functions (e.g., `cn`).
- **Frontend:** Next.js 15 (App Router), Tailwind CSS v4, shadcn/ui, Lucide Icons.
- **Backend/DB:** Prisma + PostgreSQL.

## Design System (Bender Standard)
- **Palette:** Black (#111827), Industrial Grey, Pure White, Cyber Yellow (#EAB308).
- **Vibe:** Strict, mobile-first, high-conversion B2B.

## Current Project Status (Updated: 2026-04-14)
### Public Pages
- **Home:** Hero section + Popular Categories (Dynamic from DB).
- **Catalog:** Grid view for categories and products.
- **Product Page:** Detailed specs, tabs (specs/desc/docs).
- **Contacts:** Modern industrial UI with contact forms.
- **About:** Company mission, stats, and values.
- **Delivery:** B2B-focused logistics and payment terms.
- **Portfolio:** Grid of completed industrial projects.
- **Checkout:** B2B Cart with VAT (20%) calculation.

### Admin Panel
- **Products:** Listing table and management form.
- **Categories/Leads/Portfolio:** Basic structure and routing ready.

## Next Steps
- Finalize Admin Panel styling (Industrial Dark Theme).
- Implement real image uploading for products/portfolio.
- Refine product filtering logic in the catalog.
