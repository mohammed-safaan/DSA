# Top K Frequent Elements

Returns the `k` most frequently occurring elements in an array. Order doesn't matter. [LeetCode 347](https://leetcode.com/problems/top-k-frequent-elements/)

## Approach (in my own words)

Two versions in the file — the second one is the clean rewrite of the first:

1. **Count frequencies** — one pass with a `Map`: `num → count`. (`?? 0` makes the else-branch from `topKFrequent1` disappear.)
2. **Bucket by frequency** — create `nums.length + 1` empty buckets. A bucket's **index is a frequency**, so a number appearing 3 times lands in `buckets[3]`. No sorting needed — the index does the ordering.
3. **Collect top k** — walk buckets from highest index down, pushing numbers into the result until it holds `k` elements.

The trick that makes it work: frequencies are bounded (0 to `n`), so I can use the frequency itself as an index and get ordering for free. The `Map` answers "how often?", the buckets answer "who appears that often?" — two questions, two structures.

## Complexity

- **Time:** `O(n)` — count pass, bucket pass, and the final pass each touch the input once. This is the win over sorting by frequency (`O(n log n)`).
- **Space:** `O(n)` — the `Map` and the buckets together hold at most every unique value once.

## Run it

```bash
node solution.js
```

## Reflection

This problem taught me the **bucket sort algorithm** — the idea that when values are bounded integers, you can skip comparisons entirely and use the value as an index. I'd only ever sorted by comparing; buckets are the first "sorting" I've seen that's `O(n)`. Two stumbles worth keeping on record: in `topKFrequent1` I initialized a new value to `0` instead of `1` (off-by-one that `?? 0` fixed by making the increment happen in one expression), and I had to remind myself the buckets array needs `n + 1` slots because a number can appear up to `n` times — index `n` is legal. Also, a subtle trap I want to remember: if two numbers tie at the same frequency, both land in the same bucket, and the answer may include only one of them depending on `k` — the bucket treats them as equally valid.