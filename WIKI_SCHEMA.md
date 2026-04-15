# Obsidian Wiki Schema (Karpathy Style)

This wiki is a compounding, interlinked collection of knowledge maintained by the LLM (Zoidberg). 
The human (Boss) curates sources and asks questions; the LLM handles the synthesis and bookkeeping.

## Directory Structure
- `wiki/raw/`: Immutable source documents (articles, papers, transcripts).
- `wiki/notes/`: The evolving wiki. MD files created and maintained by the LLM.
- `wiki/assets/`: Images and other attachments.

## Core Files
- `wiki/notes/index.md`: A content-oriented catalog of all wiki pages with one-line summaries. Updated on every ingest.
- `wiki/notes/log.md`: A chronological record of all actions (ingest, query, lint).

## Workflow: Ingest
1. **Source:** Boss provides a URL or file.
2. **Process:** 
   - LLM reads the source and identifies key takeaways.
   - LLM creates/updates pages in `wiki/notes/`.
   - LLM updates `wiki/notes/index.md` with new links and summaries.
   - LLM appends a log entry to `wiki/notes/log.md`.
3. **Refinement:** Boss reviews updates in Obsidian and provides feedback.

## Workflow: Query
1. Boss asks a question.
2. LLM scans `index.md` to find relevant pages.
3. LLM synthesizes an answer. If the answer is a significant discovery, it is filed as a new wiki page.

## Workflow: Lint
- Periodically, the LLM checks for contradictions, orphan pages, or stale claims.
