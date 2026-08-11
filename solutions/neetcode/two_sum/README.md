# Two Sum

Returns the indices of the two numbers that add up to a target. Exactly one valid answer exists. [LeetCode 1](https://neetcode.io/problems/two-sum/)

## Approach (in my own words)

The file has three versions — the file documents the progression:

1. **`twoSum1` (brute force)** — for each `i`, scan every `j > i` and check `nums[j] === target - nums[i]`. Correct, slow.
2. **`twoSum2` / `twoSum3` (hash map)** — walk the array once. For each number `n`, I need to know: _have I already seen `target - n`?_ A `Map` stores each value → its index, so that question is answered in O(1). If the complement exists, return `[complementIndex, i]`; otherwise store `n` and keep going.

The trick that makes it work: I don't precompute anything — I check "have I seen the complement?" _before_ inserting the current number, so I never match an element with itself.

## Complexity

- **Time:** `O(n)` with the hash map (one pass, O(1) lookups) vs `O(n²)` for the brute force.
- **Space:** `O(n)` — the `Map` holds up to `n` entries; brute force needs `O(1)`.

## Run it

```bash
node solution.js
```

## Reflection

`twoSum2` and `twoSum3` are the same idea, two attempts at writing it — `entries()` made the loop read cleaner. The moment it clicked: the complement of `n` is `target - n`, so the problem is really asking _"have I seen this number before, in reverse?"_ — that's a lookup, not a search. I keep reaching for the `Map` before the double loop now, but I kept the brute force in the file because I want the memory of the naive version to stay honest.
