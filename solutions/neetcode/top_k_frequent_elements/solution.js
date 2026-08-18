class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent1(nums, k) {
    const freqs = new Map();
    let res = Array.from({ length: nums.length + 1 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      const key = nums[i];
      if (freqs.has(key)) {
        const value = freqs.get(key) + 1;
        freqs.set(key, value);
      } else {
        freqs.set(key, 0);
      }
    }

    for (const [num, count] of freqs) {
      res[count].push(num);
    }
    let final = [];
    for (let i = res.length - 1; i >= 0; i--) {
      for (let num of res[i]) {
        final.push(num);
        if (final.length == k) return final;
      }
    }
  }
  topKFrequent2(nums, k) {
    const freqs = new Map();

    // Count frequencies
    for (const num of nums) {
      freqs.set(num, (freqs.get(num) ?? 0) + 1);
    }

    // Bucket by frequency
    const buckets = Array.from({ length: nums.length + 1 }, () => []);

    for (const [num, count] of freqs) {
      buckets[count].push(num);
    }

    // Get the k most frequent
    const result = [];

    for (let i = buckets.length - 1; i >= 0; i--) {
      for (const num of buckets[i]) {
        result.push(num);

        if (result.length === k) {
          return result;
        }
      }
    }
  }
}
