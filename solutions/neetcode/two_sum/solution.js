class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum1(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === diff) {
          return [i, j];
        }
      }
    }
  }

  twoSum2(nums, target) {
    const obj = new Map();
    for (let [i, n] of nums.entries()) {
      const diff = target - n;
      if (obj.has(diff)) {
        return [obj.get(diff), i];
      }
      obj.set(n, i);
    }
  }
  twoSum3(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const n = nums[i];
      const diff = target - n;

      if (map.has(diff)) {
        return [map.get(diff), i];
      }

      map.set(n, i);
    }
  }
}
