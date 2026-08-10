# Merge Sort

Sorts an array with divide and conquer: split the array in half, sort each half recursively, then merge the two sorted halves back together.

## Approach (in my own words)

1. **Divide** — split the array at the middle.
2. **Conquer** — recursively sort each half (base case: a one-element array is already sorted).
3. **Combine** — merge the two sorted halves: walk both halves with a pointer each, always taking the smaller of the two front elements into the result. Whatever is left over gets appended.

The merging step is where the actual sorting happens — the recursion's job is just to hand back two smaller sorted arrays. This is the algorithm that makes `O(n log n)` concrete: `log n` levels of halving, each level doing `n` work merging.

## Complexity

- **Time:** `O(n log n)` in all cases — best, worst, and average. The halving gives the `log n`, the merging gives the `n` per level.
- **Space:** `O(n)` — the merge step needs temporary arrays sized like the input. (The JS version creates new arrays at every level; the C version allocates per merge.)

## Run it

```bash
# C
gcc solution.c -o merge_sort
./merge_sort

# JavaScript
node solution.js
```

## Reflection

The moment it clicked was realizing the recursion does almost nothing visible — the `merge` function is where the work happens, and it's the simplest possible loop: "two sorted piles, always take the smaller top card." Also the first algorithm where I had to think about *extra memory* as a cost, not just time.
