# Heartbeat Tasks

## Periodically (2-4 times a day) check the following:
1. **Knowledge Base Audit:** Ensure all recent commits in `gaztechprime` have a corresponding update in `log.md` and relevant `[[Wiki Pages]]`.
2. **Wiki Auto-Commit:** If there are uncommitted changes in the workspace, generate a log entry in `log.md`, commit them, and `git push origin master`.
3. **Repository Sync:** Check if the main repo (`gaztechprime`) has unpushed or uncommitted critical changes that need to be saved or deployed.

*When you perform a check, write the result or status to state/heartbeat-state.json.*
