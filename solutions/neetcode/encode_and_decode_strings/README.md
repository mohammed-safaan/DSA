# Encode and Decode Strings

Turns a list of strings into a single string and back — a codec. The catch: strings can contain **any** character, including the separator. [LeetCode 271](https://leetcode.com/problems/encode-and-decode-strings/)

## Approach (in my own words)

**Encode** — write each string as a header plus the string itself: `length#string`. So `["lint", "code"]` becomes `"4#lint4#code"`.

**Decode** — walk the encoded string:

1. Starting at position `i`, scan forward until `#` — the digits before it are the length.
2. Parse that number, then slice the next `length` characters — that's one original string.
3. Jump past it (`i = j + wordLength`) and repeat.

The trick that makes it work: the header makes the format **self-delimiting**. I never rely on `#` being a "special" character — the length tells me exactly where one string ends, so even strings *containing* `#` or digits decode correctly.

## Complexity

- **Time:** `O(n)` — encode walks every character once; decode walks every character once (the header scan just visits digits twice, still linear). `n` = total characters of all strings.
- **Space:** `O(n)` — the encoded output holds every character plus headers.

## Run it

```bash
node solution.js
```

## Reflection

The obvious first idea — join with a delimiter — dies the moment a string contains the delimiter. The length-prefix is the fix, and I want to remember *why* it works: the length is information about the string, not the string itself, so it can't be confused with content. There's a commented-out `indexOf`-based decode in the file — my first attempt. It works, but the manual scan version in the final code made the pointer arithmetic (`i = j + wordLength`) explicit instead of hiding it inside `indexOf`, and I keep the note as a reminder to prefer the version where the loop shape *shows* the algorithm.