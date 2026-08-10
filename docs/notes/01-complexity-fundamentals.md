# 01 — Complexity Fundamentals

Everything in this note comes from a DSA course I am taking. It covers the math you need before Big O, then the complexity classes themselves. It's written in my own words because the point of the note is that I understand it — not that I copied it.

## Math building blocks

Three pieces of math show up everywhere in algorithm analysis. None of them are hard; they just need a clear mental model.

### Exponentiation — `2 ** 4`

Repeated multiplication: `2 ** 4` means 2 multiplied by itself 4 times.

```
2 ** 4 = 2 × 2 × 2 × 2 = 16
```

- The **base** is the number being multiplied (2).
- The **exponent** is how many times (4).
- JS: `2 ** 4` → 16, or `Math.pow(2, 4)` → 16
- C: `pow(2, 4)` → 16 (include `<math.h>` and link with `-lm`)

Why it matters: it's the shape of exponential growth. If work doubles per input step, the total is `2 ** n` — and that explodes fast.

### Factorial — `!n`

Multiplication of every integer from n down to 1.

```
5! = 5 × 4 × 3 × 2 × 1 = 120
```

- JS:

```js
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
```

- C (using `long long`, because factorials outgrow `int` quickly):

```c
long long factorial(int n) {
    long long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
```

Why it matters: it's the shape of combinatorial growth. `10!` is already 3,628,800 — this is why brute-force over all permutations is only viable for tiny inputs.

### Logarithms — `log₂(4)`

The inverse of exponentiation. `log₂(4)` asks: "2 to the power of what gives 4?" Answer: 2.

```
log₂(4) = 2   because   2² = 4
log₂(8) = 3   because   2³ = 8
```

A useful way to read it: **how many times can you halve a number before you reach 1?**

```
8 → 4 → 2 → 1   (three halvings, so log₂(8) = 3)
```

- JS: `Math.log2(8)` → 3
- C: `log2(8)` → 3 (include `<math.h>`, link with `-lm`)

Why it matters: this halving model is exactly what binary search does, and it's why `O(log n)` algorithms stay fast even on enormous inputs.

## Big O — the worst-case growth rate

Big O answers one question: **as the input size n grows, how does the amount of work grow?**

Three things to internalize:

1. **Worst case** — we analyze the worst input we can throw at the algorithm. That's what "Big O is the worst-case scenario" means: no input should make it do *more* work than the bound.
2. **Growth rate, not exact work** — constants and coefficients are dropped. `3n + 5` steps is `O(n)`, not `O(3n)`. The shape of the growth is what matters, because constants don't change how it scales.
3. **The doubling test** — double the input size, and each class behaves differently:

| Class | Double the input → | Intuition |
| ----- | ------------------ | --------- |
| `O(log n)` | work increases by 1 | halving — incredibly efficient |
| `O(n)` | work doubles | one pass over the input |
| `O(n log n)` | work slightly more than doubles | divide-and-conquer sorts |
| `O(nm)` | work quadruples if n = m | nested loops over two inputs |
| `O(n²)` | work quadruples | nested loops over one input |

## The five classes

### `O(log n)` — binary search

Halving each step: check the middle, discard half the input, repeat. Doubling the input only adds **one** more step.

**Real example:** [binary search](../solutions/binary-search/binary-search/README.md)

### `O(n)` — linear scan

One pass over the input: 10 items → 10 checks, 100 items → 100 checks. Doubling the input doubles the work.

**Real example:** any single loop over an array.

### `O(n log n)` — merge sort

"Halve, sort each half, merge" — n halvings each doing n work. Doubling the input adds one full extra pass. This is the best a general-purpose comparison sort can do.

**Real example:** [merge sort](../solutions/sorting/merge-sort/README.md)

### `O(nm)` — nested loops over two inputs

One loop runs n times, and each iteration runs a nested loop m times: n × m total work. When n = m it behaves like `O(n²)`. The point of the separate class is that the two inputs are independent — a grid of n rows and m columns, for example.

### `O(n²)` — bubble sort and insertion sort

Nested loops over one input: 10 items → ~100 operations, 100 items → ~10,000. Doubling the input **quadruples** the work. Fine for small arrays, unusable on large ones.

**Real examples:** [bubble sort](../solutions/sorting/bubble-sort/README.md), [insertion sort](../solutions/sorting/insertion-sort/README.md)

## How fast do they grow? (the table that made it click)

Number of operations for a given input size n:

| Class | n = 10 | n = 100 | n = 1,000 | n = 10,000 |
| ----- | ------ | ------- | --------- | ---------- |
| `O(log n)` | ~3 | ~7 | ~10 | ~13 |
| `O(n)` | 10 | 100 | 1,000 | 10,000 |
| `O(n log n)` | ~33 | ~664 | ~9,966 | ~132,877 |
| `O(n²)` | 100 | 10,000 | 1,000,000 | 100,000,000 |

Reading it bottom-up: at n = 10,000 an `O(n²)` algorithm does one hundred million operations, while `O(log n)` does thirteen. That gap is the entire reason algorithm choice matters.

## Quick reference

| Class | Common name | Typical source | Verdict |
| ----- | ----------- | -------------- | ------- |
| `O(log n)` | logarithmic | binary search | excellent |
| `O(n)` | linear | single loop | good |
| `O(n log n)` | linearithmic | merge sort | good — best for sorting |
| `O(nm)` | product | nested loops, two inputs | careful — depends on m |
| `O(n²)` | quadratic | nested loops, one input | okay for small n only |
