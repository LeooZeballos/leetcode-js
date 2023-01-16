// 424. Longest Repeating Character Replacement

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  // sliding window
  var arr = new Array(26);
  let largestCount = 0, beg = 0, maxlen = 0;
  // iterate through the string
  for (let i = 0; i < s.length; i++) {
    // update the array
    arr[s[i]] = (arr[s[i]] || 0) + 1;
    // update the largest count
    largestCount = Math.max(largestCount, arr[s[i]]);
    // update the window
    if (i - beg + 1 - largestCount > k) {
      // remove the first char
      arr[s[beg]] -= 1;
      // update the window
      beg += 1;
    }
    // update the maxlen
    maxlen = Math.max(maxlen, i - beg + 1);
  }
  // return the maxlen
  return maxlen;
};

// Test cases
let tests = [
  { s: "ABAB", k: 2, ans: 4 },
  { s: "AABABBA", k: 1, ans: 4 },
];

// Run tests
tests.forEach(test => {
  console.log("s:", test.s, "k:", test.k);
  console.log("expected:", test.ans);
  console.log("result:", characterReplacement(test.s, test.k));
  console.log();
});
