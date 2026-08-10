# Issue tracker: Local Markdown

Learning tasks and PRDs for this repo live as markdown files in `.scratch/`.

## Conventions

- One topic per directory: `.scratch/<topic-slug>/` (e.g. `.scratch/two-pointers/`)
- The learning goal / PRD is `.scratch/<topic-slug>/PRD.md`
- Individual problems are `.scratch/<topic-slug>/issues/<NN>-<slug>.md`, numbered from `01`
- Triage state is recorded as a `Status:` line near the top of each issue file (see `triage-labels.md` for the role strings)
- Comments and learning notes append to the bottom of the file under a `## Notes` heading

## When a skill says "publish to the issue tracker"

Create a new file under `.scratch/<topic-slug>/` (creating the directory if needed).

## When a skill says "fetch the relevant ticket"

Read the file at the referenced path. The user will normally pass the path or the issue number directly.

## Wayfinding operations

Used by `/wayfinder`. The **map** is a file with one **child** file per ticket.

- **Map**: `.scratch/<topic-slug>/map.md` — the Notes / Decisions-so-far / Fog body.
- **Child ticket**: `.scratch/<topic-slug>/issues/NN-<slug>.md`, numbered from `01`, with the question in the body. A `Type:` line records the ticket type (`research`/`prototype`/`grilling`/`task`); a `Status:` line records `claimed`/`resolved`.
- **Blocking**: a `Blocked by: NN, NN` line near the top. A ticket is unblocked when every file it lists is `resolved`.
- **Frontier**: scan `.scratch/<topic-slug>/issues/` for files that are open, unblocked, and unclaimed; first by number wins.
- **Claim**: set `Status: claimed` and save before any work.
- **Resolve**: append the answer under an `## Answer` heading, set `Status: resolved`, then append a context pointer (gist + link) to the map's Decisions-so-far in `map.md`.
