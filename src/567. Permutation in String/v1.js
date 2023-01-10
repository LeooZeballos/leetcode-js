// 567. Permutation in String

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;

  const containsPermutation = (s, t) => {
    let chars = new Map();
    for (let i = 0; i < s.length; i++) {
      chars.set(s[i], chars.get(s[i]) ? chars.get(s[i]) + 1 : 1);
      chars.set(t[i], (chars.get(t[i]) || 0) - 1);
    }
    for ([key, value] of chars) {
      if (value !== 0) {
        return false;
      }
    }
    return true;
  }
  // check every substring of length s1 in s2 for permutation
  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    if (containsPermutation(s1, s2.substring(i, i + s1.length))) {
      return true;
    }
  }
  // doesn't contain it
  return false;
};

// Test cases
console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
