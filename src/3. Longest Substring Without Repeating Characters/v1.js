// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // maximum substring result
  let max = "";
  let current = "";

  // loop through the array
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      // if the character is not repeated
      if (!current.includes(s[j])) {
        current = current + s[j];
      } else {
        current = "";
        break;
      }
      // if current is the new max
      if (current.length > max.length) {
        max = current;
      }
    }
  }
  // return result
  return max.length;
};

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // abc - 3
console.log(lengthOfLongestSubstring("bbbbb")); // b - 1
console.log(lengthOfLongestSubstring("pwwkew")); // wke - 3
console.log(lengthOfLongestSubstring("aab")) // ab - 2
console.log(lengthOfLongestSubstring("jbpnbwwd")) // jbpn - 4