// 14. Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // vars
  let result = "";
  let min_index = 0;
  reference = strs[0];

  // loop
  for (let i = 0; i < reference.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== reference[i]) return result;
    }
    result += reference[i];
  }

  return result;
};

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["dog", "dog", "dog"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["a", "b"]));
console.log(longestCommonPrefix(["a", "a"]));
