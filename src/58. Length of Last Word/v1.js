// 58. Length of Last Word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var findWord = false;
  var word = '';
  // iterate the string backwards
  for (var i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ' && !findWord) {
      continue;
    } else if (s[i] === ' ' && findWord) {
      break;
    } else if (s[i] !== ' ') {
      if (findWord === false) findWord = true;
      word = s[i] + word;
    }
  }
  return word.length;
};

// Test cases
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6