# Valid Anagram

Returns `true` if two strings are anagrams — same letters, possibly different order (e.g. `racecar` / `carrace`). [LeetCode 242](https://neetcode.io/problems/valid-anagram/)

## Approach (in my own words)

Three versions in the file:

1. **`isAnagram1`** — sort both strings, then compare position by position.
2. **`isAnagram2`** — same idea, compressed: `s.split("").sort().join()` and a single `==` comparison. Sorting normalizes both strings to the same order, so equality after sorting _is_ anagram-ness.
3. **`isAnagram3`** — no sorting: count every character of `s` into `countS` and every character of `t` into `countT`, then compare the counts. If both strings have the same letters in the same quantities, they're anagrams.

The trick that makes it work: anagrams have identical **character counts** — sorting is just a heavy-handed way of comparing counts; the counter does it directly.

## Complexity

- **Time:** `O(n log n)` for the sort-based versions; `O(n)` for the counter version — two passes to count, one pass to compare.
- **Space:** `O(n)` for sorting (and the split arrays); the counter version uses a hash map, so `O(k)` where `k` is the number of distinct characters.

## Run it

```bash
node solution.js
```

## Reflection

Writing three versions of the same problem made the trade-off visible: the sort version is easier to reason about, the counter version is faster but demands keeping two objects straight in my head. I also caught myself — the commented-out `console.log` debug lines and a `!=` vs `!==` slip are in the file as a reminder that I wrote this while still thinking in "make it pass" mode. The length check in `isAnagram3` is the guard I almost forgot: two different-length strings can't be anagrams, and checking it first saves work.
