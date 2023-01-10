// 387. First Unique Character in a String
// Map approach

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let chars = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (chars.has(char)) {
      if (chars.get(char) !== false) {
        chars.set(char, false);
      }
    } else {
      chars.set(char, i);
    }
  }
  for ([key, value] of chars) {
    if (value !== false) {
      return value;
    }
  }
  return -1;
};

// Test cases
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
