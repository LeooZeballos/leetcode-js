// 387. First Unique Character in a String
// Brute force version

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    let repeated = false;
    for (let j = 0; j < s.length; j++) {
      if (i !== j && s[i] === s[j]) {
        repeated = true;
      }
    }
    if (!repeated) return i;
  }
  return -1;
};

// Test cases
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
