// 383. Ransom Note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let ransomChars = new Map();
  for (let i = 0; i < Math.max(ransomNote.length, magazine.length); i++) {
    if (i < ransomNote.length) {
      ransomChars.set(ransomNote[i], ransomChars.get(ransomNote[i]) ? ransomChars.get(ransomNote[i]) + 1 : 1);
    }
    if (i < magazine.length) {
      ransomChars.set(magazine[i], (ransomChars.get(magazine[i]) || 0) - 1);
    }
  }
  for ([key, value] of ransomChars) {
    if (value > 0) {
      return false;
    }
  }
  return true;
};

// Test cases
console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("aab", "baa")); // true
console.log(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")); // true
