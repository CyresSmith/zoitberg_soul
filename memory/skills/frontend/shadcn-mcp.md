# Shadcn MCP & Skills

## Skills Installed
- `nextjs-patterns`: Next.js 15 best practices (App Router, Server Actions, caching).
- `lb-shadcn-ui-skill`: Full shadcn/ui documentation and registry reference.
- `tailwind-v4-shadcn`: Tailwind v4 specifically for shadcn/ui.

## MCP Server
The shadcn MCP server is initialized via `opencode.json`.
To add new components using AI:
```bash
npx shadcn@latest mcp
```
This allows OpenClaw to search the shadcn registry and install components directly.

## Configuration
- Registry: Official shadcn/ui.
- Components Path: `@components/ui` (mapped to `gaztehprime_repo/components/ui`).
- Framework: Next.js 16 (App Router).
