# Contains Duplicate

Returns `true` if any value appears more than once in an integer array, otherwise `false`. [LeetCode 217](https://neetcode.io/problems/contains-duplicate/)

## Approach (in my own words)

1. A `Set` can only hold unique values — inserting `nums` into one silently drops every duplicate.
2. If the array had duplicates, the `Set` will be smaller than the original array.
3. So the whole check collapses to one line: `nums.length > unique.size`.

The insight that makes it work: I don't have to _find_ the duplicate — I only need to know _whether one exists_, and the `Set` answers that question for me by construction.

## Complexity

- **Time:** `O(n)` — building the `Set` touches every element once.
- **Space:** `O(n)` — the `Set` stores up to `n` values in the worst case (all unique).

## Run it

```bash
node solution.js
```

## Reflection

First problem where the answer felt like it came from a data structure doing the work instead of me writing a loop. The brute-force double loop (`O(n²)`) writes itself; the `Set` version forced me to think in terms of _what operation already exists_ rather than _how to compare every pair_.
