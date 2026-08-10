# ADR-0001: Language and platform strategy

- **Status:** Accepted
- **Date:** 2026-08-10

## Context

The goal of this repo is to document a DSA learning journey in a way that is credible to recruiters. Two languages are in play: C, which I am learning, and JavaScript, in which I have production experience. Three judge platforms are used: NeetCode, LeetCode and HackerRank.

## Decision

1. **C is used for learning fundamentals.** When a concept is best understood at the memory/pointer level (arrays, linked lists, recursion, trees), write it in C first.
2. **JavaScript is the primary submission language** on judge platforms — concise, readable, and representative of day-to-day work.
3. **Platforms are complementary, not redundant:** NeetCode is the structured curriculum; LeetCode provides breadth and interview-style practice; HackerRank adds routine drills.
4. **Every solution folder documents approach, Big-O, and reflection**, regardless of language (see `CONTEXT.md` conventions).

## Consequences

- Some problems exist in both languages; the C version documents fundamentals, the JS version documents submission. Where both exist, the solution note explains the difference.
- More work per problem than a single-language repo — acceptable because the reflection is the product.
- Problem counts per platform are tracked honestly, with links, so recruiters can verify.
