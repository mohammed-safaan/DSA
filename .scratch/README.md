# .scratch

Private learning backlog. Tasks, PRDs and wayfinding maps for the learning journey. **Never shared with recruiters** — this folder exists for planning, not portfolio.

## Layout

- One topic per directory: `.scratch/<topic-slug>/`
- Learning goal / PRD: `.scratch/<topic-slug>/PRD.md`
- Individual problems: `.scratch/<topic-slug>/issues/<NN>-<slug>.md`, numbered from `01`

## Issue format

```markdown
# <Problem or task title>

Type: task | research | grilling
Status: needs-triage | needs-info | ready-for-agent | ready-for-human | wontfix
Blocked by:

## Body
<what the task is, problem link, acceptance criteria>

## Notes
<appended over time>
```

See `docs/agents/issue-tracker.md` for the full conventions and `docs/agents/triage-labels.md` for the state vocabulary.
