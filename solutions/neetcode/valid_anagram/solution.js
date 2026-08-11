class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram1(s, t) {
    const sLetters = s.split("").sort();
    const tLetters = t.split("").sort();
    if (tLetters.length != sLetters.length) return false;
    // console.log("sLetters", sLetters);
    // console.log("tLetters", tLetters);

    for (let i = 0; i < sLetters.length; i++) {
      if (sLetters[i] != tLetters[i]) return false;
    }
    return true;
  }

  isAnagram2(s, t) {
    const sLetters = s.split("").sort().join();
    const tLetters = t.split("").sort().join();
    return sLetters == tLetters;
  }

  isAnagram3(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const countS = {};
    const countT = {};
    for (let i = 0; i < s.length; i++) {
      countS[s[i]] = (countS[s[i]] || 0) + 1;
      countT[t[i]] = (countT[t[i]] || 0) + 1;
    }

    for (const key in countS) {
      if (countS[key] !== countT[key]) {
        return false;
      }
    }
    return true;  
  }
}
