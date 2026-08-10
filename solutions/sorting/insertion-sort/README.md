# Insertion Sort

Sorts an array the way most people sort playing cards in their hand: take one card, and slide it into its correct position among the cards already held.

## Approach (in my own words)

1. Start with the first element — a single-element array is already sorted.
2. Take the next element (`key`) and compare it backwards against the sorted part.
3. Shift every larger element one position right to make room.
4. Drop the `key` into the gap.
5. Repeat until the whole array has been inserted.

Notice the inner loop is a `while`, not a `for` — it stops early the moment the key finds its place, so partially sorted input is handled cheaply.

## Complexity

- **Time:** `O(n²)` worst case (reverse-sorted input — every key travels all the way back). Best case `O(n)` — already-sorted input only does one comparison per element.
- **Space:** `O(1)` — in place, only one extra variable (`key`).

## Run it

```bash
# C
gcc solution.c -o insertion_sort
./insertion_sort

# JavaScript
node solution.js
```

## Reflection

It shares `O(n²)` with bubble sort, but the card-playing mental model makes it feel natural in a way bubble sort doesn't — and the early-exit `while` taught me that *worst-case* complexity isn't the whole story: the same algorithm can behave very differently on different inputs.
