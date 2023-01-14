// 1061. Lexicographically Smallest Equivalent String

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  let arr = new Array(26);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = String.fromCharCode(i + 97);
  }
  for (let i = 0; i < s1.length; i++) {
    let f = arr[s1[i].charCodeAt(0) - 97];
    let s = arr[s2[i].charCodeAt(0) - 97];
    if (f == s) continue;
    let replaceTo = "";
    let replaceFrom = "";
    if (f > s) {
      replaceTo = s;
      replaceFrom = f;
    } else {
      replaceTo = f;
      replaceFrom = s;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == replaceFrom) arr[i] = replaceTo;
    }
  }
  let res = "";
  for (let i = 0; i < baseStr.length; i++) {
    res += arr[baseStr.charCodeAt(i) - 97];
  }
  return res;
};

// Test cases
let tests = [
  { s1: "parker", s2: "morris", baseStr: "parser", result: "makkek" },
  { s1: "hello", s2: "world", baseStr: "hold", result: "hdld" },
  { s1: "leetcode", s2: "programs", baseStr: "sourcecode", result: "aauaaaaada" },
];

// Run tests
tests.forEach((test) => {
  console.log("Input: ", test.s1, test.s2, test.baseStr);
  console.log("Expected: ", test.result);
  console.log("Output: ", smallestEquivalentString(test.s1, test.s2, test.baseStr));
});
