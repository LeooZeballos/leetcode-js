// 5. Longest Palindromic Substring

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 0) return "";
  if (s.length === 1) return s;
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length - 1; i++) {
    let length = Math.max(expandFromMiddle(s, i, i), expandFromMiddle(s, i, i + 1));
    if (length > end - start) {
      start = i - Math.floor((length - 1) / 2);
      end = i + Math.floor(length / 2) + 1;
    }
  }
  return s.substring(start, end);
};

var expandFromMiddle = function (s, start, end) {
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    start--;
    end++;
  }
  return end - start - 1;
};

// Test cases
console.log(longestPalindrome("babad")); // bab
console.log(longestPalindrome("cbbd")); // bb
console.log(longestPalindrome("aaaa")); // aaaa
console.log(longestPalindrome("a")); // a
