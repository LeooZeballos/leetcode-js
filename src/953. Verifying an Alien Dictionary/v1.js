// 953. Verifying an Alien Dictionary

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  // validate order function
  const validate = (word1, word2) => {
    for (let i = 0; i < word1.length; i++) {
      if (word2[i] === undefined) return false;
      if (abc.get(word1[i]) < abc.get(word2[i])) return true;
      if (abc.get(word1[i]) > abc.get(word2[i])) return false;
    }
    return true;
  }

  // hashmap of order of chars
  let abc = new Map();
  for (let i = 0; i < order.length; i++) {
    abc.set(order[i], i);
  }
  // for every pair of words from left to right, validate if its sorted
  for (let i = 0; i < words.length - 1; i++) {
    if (!validate(words[i], words[i+1])) return false;
  }
  // else return true
  return true;
};

// Test cases
let tests = [
  { words: ["hello","leetcode"], order: "hlabcdefgijkmnopqrstuvwxyz", out: true },
  { words: ["word","world","row"], order: "worldabcefghijkmnpqstuvxyz", out: false },
  { words: ["apple","app"], order: "abcdefghijklmnopqrstuvwxyz", out: false },
];

// Run tests
tests.forEach(test => {
  console.log("Input: words = " + JSON.stringify(test.words) + ", order = " + test.order);
  console.log("Output: " + isAlienSorted(test.words, test.order));
  console.log("Expected: " + test.out);
  console.log();
});
