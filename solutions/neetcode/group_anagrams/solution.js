class Solution {
  isAnagram2(s, t) {
    const sLetters = s.split("").sort().join();
    const tLetters = t.split("").sort().join();
    return sLetters == tLetters;
  }
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  getAlphabetIndex(letter) {
    return letter.toLowerCase().charCodeAt(0) - 97;
  }
  groupAnagrams(strs) {
    const res = {};
    for (let s of strs) {
      const charCount = Array(26).fill(0);
      for (let c of s) {
        const index = this.getAlphabetIndex(c);
        charCount[index] += 1;
      }
      const key = charCount.join();
      if (res[key]) {
        res[key].push(s);
      } else {
        res[key] = [s];
      }
    }
    return Object.values(res);
  }
}
