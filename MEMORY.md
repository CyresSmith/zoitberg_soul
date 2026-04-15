# Master Index: Knowledge & Memory
*(Maintained via the Karpathy Method)*

This file serves as the root index for the agent's long-term memory and acquired skills. All details are stored in subdirectories so they can be semantically searched by the `memory_search` tool.

## Directory Structure
- `/memory/projects/` - Specific context, credentials, and architecture for active projects.
  - [Gaztechprime](/memory/projects/gaztechprime/README.md)
- `/memory/skills/` - General, reusable knowledge gained from projects (Frontend, Backend, Design, DevOps).
  - [Frontend: Next.js & Tailwind](/memory/skills/frontend/nextjs-tailwind.md)
  - [Frontend: React Hook Form & Zod](/memory/skills/frontend/forms.md)
  - [Design: Figma Workflows](/memory/skills/design/figma-to-code.md)
  - [DevOps: Git & Previews](/memory/skills/devops/workflows.md)
- `/memory/YYYY-MM-DD.md` - Daily logs of work done (raw journal).

## Daily Update Protocol
1. At the end of a deep work session (or end of day), write raw events to `memory/YYYY-MM-DD.md`.
2. Extract generic technical lessons (e.g., a new Tailwind trick, a Turbopack bug) and place them in the relevant `/memory/skills/` folder.
3. Update project status in `/memory/projects/<name>/README.md`.
4. Keep this root `MEMORY.md` file clean as an index.