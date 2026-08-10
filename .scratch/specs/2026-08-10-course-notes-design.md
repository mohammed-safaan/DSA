# Design: Course Notes — Complexity Fundamentals & Core Sorting/Searching Algorithms

- **Date:** 2026-08-10
- **Status:** Approved

## Goal

Document the first course material of the DSA journey — math building blocks, Big O, binary search, bubble sort, merge sort, insertion sort — as portfolio-quality notes and working code, in both C and JavaScript.

## Deliverables

### 1. `docs/notes/README.md` — notes index

- What these notes are (learning journal material).
- Table of contents linking to each note.
- How notes connect to `solutions/` folders (notes explain why; solution READMEs explain how).

### 2. `docs/notes/01-complexity-fundamentals.md` — the note

Structure (explained + reference style):

1. **Math building blocks**
   - Exponentiation: `2 ** 4` — explained in own words, worked example, C (`pow(2, 4)`) and JS (`Math.pow(2, 4)` / `2 ** 4`).
   - Factorial: `!n` — explained, worked example, loop-based C and JS snippet.
   - Logarithms: `log₂(4)` — explained as "how many times to halve/double", worked example, C (`log2`) and JS (`Math.log2`).
2. **Big O**
   - Definition: worst-case growth rate of work as input size grows; why constants and coefficients are dropped.
   - Intuition: "when input size doubles, work grows by…" per class.
3. **The five complexity classes** — each with explanation, a concrete example from the course, and growth table for `n = 10, 100, 1000, 10000`:
   - `O(log n)` → binary search
   - `O(n)` → linear scan
   - `O(n log n)` → merge sort
   - `O(nm)` → nested loops over two different inputs
   - `O(n²)` → bubble sort, insertion sort
4. **Quick-reference table** — one line per class, for fast scanning.
5. **Where to see it in this repo** — links to the four algorithm folders.

### 3. Four algorithm folders in `solutions/`

Layout follows the existing convention `solutions/<topic>/<problem-slug>/`:

```
solutions/binary-search/binary-search/{solution.c, solution.js, README.md}
solutions/sorting/bubble-sort/{solution.c, solution.js, README.md}
solutions/sorting/merge-sort/{solution.c, solution.js, README.md}
solutions/sorting/insertion-sort/{solution.c, solution.js, README.md}
```

**Code conventions:**
- `solution.c`: C99, compiles with `gcc`, contains a `main()` that runs the algorithm on a sample input and prints the result. Compile: `gcc solution.c -o <name> && ./<name>` (Windows: `solution.exe`).
- `solution.js`: plain Node, runnable via `node solution.js`, prints results of the same sample input.
- Both files implement the same algorithm with identical behavior.

**README.md per algorithm:**
- What the algorithm does, in the author's own words.
- Approach explanation.
- Time complexity (and space where non-trivial).
- One-line reflection (what was confusing / what clicked).

## Non-goals

- No test suites (per user's "Notes + code" choice).
- No changes to `CONTEXT.md` mastery map (status updates are the user's judgment).
- No new ADR (structural decision, not an architectural one).
- No changes to `README.md` progress table until problems are actually committed.

## Open considerations

- Binary search C implementation must demonstrate the classic `O(log n)` loop (mid-point halving).
- Sorting implementations must preserve the documented worst-case complexities; merge sort needs extra memory (`O(n)` space) — note it in the README.
