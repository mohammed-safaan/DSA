# Binary Search

Finds the index of a target value in a **sorted** array by repeatedly halving the search range.

## Approach (in my own words)

1. Point `low` at the start of the array and `high` at the end.
2. Check the middle element: `mid = low + (high - low) / 2`.
3. If it equals the target — found, return its index.
4. If the middle is smaller than the target, the target must be in the right half — move `low` past `mid`.
5. If the middle is larger, the target must be in the left half — move `high` below `mid`.
6. Repeat until the range is empty (`low > high`) — then the target isn't in the array.

The trick that makes it work: the array is sorted, so each comparison lets us **discard half** the remaining elements with certainty.

## Complexity

- **Time:** `O(log n)` — every step halves the search range, and you can only halve n roughly `log₂(n)` times.
- **Space:** `O(1)` — only three integers, no matter the array size.

## Run it

```bash
# C
gcc solution.c -o binary_search
./binary_search

# JavaScript
node solution.js
```

## Reflection

The "how many times can you halve before reaching 1" model from my notes is literally what this loop does — seeing `O(log n)` stop being abstract and become a shrinking range was the moment it clicked. The `mid = low + (high - low) / 2` form avoids integer overflow that `(low + high) / 2` can hit on huge arrays — a detail worth keeping.
