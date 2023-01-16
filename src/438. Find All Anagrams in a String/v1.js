// 438. Find All Anagrams in a String

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let ans = [];
  let charsS = new Map();
  let charSLen = 0;
  let charsP = new Map();
  let charPLen = 0;

  for (let char of p) {
    if (charsP.has(char)) {
      charsP.set(char, charsP.get(char) + 1);
    } else {
      charsP.set(char, 1);
    }
    charPLen++;
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charSLen < charPLen) {
      if (charsS.has(char)) {
        charsS.set(char, charsS.get(char) + 1);
      } else {
        charsS.set(char, 1);
      }
      charSLen++;
    } else {
      // add the new char
      if (charsS.has(char)) {
        charsS.set(char, charsS.get(char) + 1);
      } else {
        charsS.set(char, 1);
      }
      // remove the i - 2 char
      const char2 = s[i - charPLen];
      if (charsS.get(char2) == 1) {
        charsS.delete(char2);
      } else {
        charsS.set(char2, charsS.get(char2) - 1);
      }
    }
    // compare
    if (charSLen == charPLen) {
      let isEqual = true;
      for (let [key, value] of charsP) {
        if (!charsS.has(key) || charsS.get(key) != value) {
          isEqual = false;
          break;
        }
      }
      if (isEqual) {
        ans.push(i - charPLen + 1);
      }
    }
  }
  return ans;
};

// Test cases
let tests = [
  { s: "cbaebabacd", p: "abc", result: [0, 6] },
  { s: "abab", p: "ab", result: [0, 1, 2] },
];

// Run tests
tests.forEach(test => {
  console.log("S: ", test.s, ", P: ", test.p);
  console.log("Expected: ", test.result);
  console.log("Result: ", findAnagrams(test.s, test.p));
  console.log();
});
