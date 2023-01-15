// 784. Letter Case Permutation

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  // output is the result array
  let output = [];
  // dfs
  const dfs = (str, i) => {
    // If str is the same length as s, push it to output and return
    if (str.length === s.length) {
      output.push(str);
      return;
    }
    // If s[i] is not a letter, add it to str and call dfs again
    if (s[i].toLowerCase() === s[i].toUpperCase()) {
      dfs(str + s[i], i + 1);
      return;
    }
    // Else, call dfs with s[i] as lowercase and uppercase
    dfs(str + s[i].toLowerCase(), i + 1);
    dfs(str + s[i].toUpperCase(), i + 1);
  }
  // Call dfs with empty string and 0
  dfs("", 0);
  // Return output
  return output;
};

// Test cases
let tests = [
  { s: "a1b2", ans: ["a1b2","a1B2","A1b2","A1B2"] },
  { s: "3z4", ans: ["3z4","3Z4"] },
  { s: "12345", ans: ["12345"] },
  { s: "0", ans: ["0"] },
]

// Run tests
tests.forEach(function(test) {
  console.log("S: ", test.s);
  console.log("Expected: ", test.ans);
  console.log("Output: ", letterCasePermutation(test.s));
  console.log();
});
