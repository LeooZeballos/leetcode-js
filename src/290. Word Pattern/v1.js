// 290. Word Pattern

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let patterns = new Map();
  let usedWords = new Set();
  let currentPattern = 0;
  let currentWord = "";
  let words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " || i === s.length - 1) {
      if (i === s.length - 1) {
        currentWord += s[i];
      }
      if (patterns.has(pattern[currentPattern])) {
        if (currentWord !== patterns.get(pattern[currentPattern])) {
          return false;
        }
      } else {
        if (usedWords.has(currentWord)) {
          return false;
        }
        patterns.set(pattern[currentPattern], currentWord);
        usedWords.add(currentWord);
      }
      currentPattern++;
      currentWord = "";
    } else {
      currentWord += s[i];
    }
  }
  if (currentPattern < pattern.length) {
    return false;
  }
  return true;
};

// Test cases
console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("aba", "dog cat fish")); // false
console.log(wordPattern("aaaa", "dog cat cat dog")); // false
console.log(wordPattern("abba", "dog dog dog dog")); // false
