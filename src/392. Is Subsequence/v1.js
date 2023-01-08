// 392. Is Subsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length === 0) return true;
  let index = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[index] === t[i]) index++;
    if (index === s.length) return true;
  }
  return false;
};

// Test cases
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
