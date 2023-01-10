// 242. Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
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
};

// Test cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
