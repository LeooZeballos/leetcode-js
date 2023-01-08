// 344. Reverse String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
  }
  return s;
};

// Test cases
console.log(reverseString(["h","e","l","l","o"])); // ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])); // ["h","a","n","n","a","H"]
