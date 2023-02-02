// 1071. Greatest Common Divisor of Strings

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  let x = "";
  let currentX = "";
  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    currentX += str1[i];
    // check if it divides
    let divides = true;
    // check str1
    for (let j = 0; j < str1.length && divides; j = j + currentX.length) {
      if (currentX != str1.substring(j, j + currentX.length)) {
        divides = false;
      }
    }
    // check str2
    for (let j = 0; j < str2.length && divides; j = j + currentX.length) {
      if (currentX != str2.substring(j, j + currentX.length)) {
        divides = false;
      }
    }
    if (divides) {
      x = currentX;
    }
  }
  return x;
};

// Test cases
let tests = [
  { str1: "ABCABC", str2: "ABC", expected: "ABC" },
  { str1: "ABABAB", str2: "ABAB", expected: "AB" },
  { str1: "LEET", str2: "CODE", expected: "" },
];

// Run tests
tests.forEach(test => {
  console.log("Input: str1 = " + test.str1 + ", str2 = " + test.str2);
  console.log("Output: " + gcdOfStrings(test.str1, test.str2));
  console.log("Expected: " + test.expected);
  console.log();
});
