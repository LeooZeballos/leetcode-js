// 392. Is Subsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let index = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[index] === t[i]) index++;
  }
  return index === s.length;
};

// Test cases
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
