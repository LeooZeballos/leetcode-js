// 409. Longest Palindrome

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let set = new Set();
  let count = 0;
  for (let c of s) {
    if (set.has(c)) {
      count += 2;
      set.delete(c);
    } else {
      set.add(c);
    }
  }
  if (set.size > 0) count++;
  return count;
};

// Test cases
console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("bb")); // 2
console.log(longestPalindrome("ccc")); // 3
console.log(longestPalindrome("bananas")); // 5
console.log(longestPalindrome("abccccdd")); // 7
