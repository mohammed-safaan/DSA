# Group Anagrams

Groups strings into lists of anagrams — strings with the same letters in different orders end up in the same group. [LeetCode 49](https://leetcode.com/problems/group-anagrams/)

## Approach (in my own words)

1. For every string, build a **fingerprint**: a 26-slot array counting how many times each letter `a–z` appears (via `getAlphabetIndex` mapping a char to its slot).
2. Join that array into a string — this is the group key. Two anagrams produce identical keys because they have identical letter counts.
3. Store each string in a `res` object under its key, creating the array if the key is new.
4. At the end, return `Object.values(res)` — each bucket is one anagram group.

The trick that makes it work: anagrams share the same character-count fingerprint, so the key **is** the group identity — I never compare strings to each other directly. The leftover `isAnagram2` in the file is the earlier idea this problem builds on: if sorting is how I proved two strings are anagrams, counting is the upgrade that works as a grouping key.

## Complexity

- **Time:** `O(m · n)` — for each of the `m` strings, I walk its `n` characters to count. (Sorted-key variants pay `O(m · n log n)` instead.)
- **Space:** `O(m · n)` — the output holds every string once, plus the key arrays.

## Run it

```bash
node solution.js
```

## Reflection

This was the problem where the previous solution clicked into place: Valid Anagram's counter version *was* the seed of this one — same 26-slot count, but used as a lookup key instead of a boolean check. Building a key from a count array (`charCount.join()`) felt hacky until I realized the key never needs to be readable, it just needs to be equal for equal counts. `getAlphabetIndex` (`charCodeAt(0) - 97`) only works because the input is lowercase English letters — a constraint worth naming, because the moment that changes, the fingerprint breaks.
