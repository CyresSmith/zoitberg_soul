# Heartbeat Tasks

## Periodically (2-4 times a day) check the following:
1. **Knowledge Base Audit:** Ensure all recent commits in `gaztehprime_repo` have a corresponding update in `memory/YYYY-MM-DD.md` and the Obsidian wiki repository (`wiki/notes`).
2. **Wiki Auto-Commit:** If there are uncommitted changes or unstaged notes in `wiki/notes/`, generate a log entry in `wiki/notes/log.md`, commit them, and `git push origin master`.
3. **Repository Sync:** Check if the main repo (`gaztehprime_repo`) has unpushed or uncommitted critical changes that need to be saved or deployed.

*When you perform a check, write the result or status to memory/heartbeat-state.json.*
