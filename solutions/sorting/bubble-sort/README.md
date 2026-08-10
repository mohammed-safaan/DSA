# Bubble Sort

Sorts an array by repeatedly swapping adjacent elements that are in the wrong order — the largest element "bubbles" to the end on each pass.

## Approach (in my own words)

1. Walk the array from left to right, comparing each pair of neighbors.
2. If they're out of order, swap them.
3. After one full pass, the largest element has bubbled to the last position — so the next pass can stop one element earlier.
4. Repeat until a full pass makes **no swaps** — the array is sorted.

The `swapped` flag is the important optimization: if a pass makes no swaps, everything is already in order and we can stop early.

## Complexity

- **Time:** `O(n²)` worst case (reverse-sorted input — every pair gets swapped every pass). Best case `O(n)` if the array is already sorted, thanks to the `swapped` flag.
- **Space:** `O(1)` — swaps happen in place.

## Run it

```bash
# C
gcc solution.c -o bubble_sort
./bubble_sort

# JavaScript
node solution.js
```

## Reflection

Bubble sort was the first algorithm where I saw the growth table from my notes turn into real code — 10 elements is instant, but the nested loops are visibly doing ~n²/2 comparisons. I can see why it's a teaching algorithm rather than a production one.
