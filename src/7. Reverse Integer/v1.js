// 7. Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let ans = x.toString().split('').reverse().join("");
  if (ans[ans.length - 1] === '-') {
    ans = parseInt('-' + ans.substring(0, ans.length - 1));
  }

  if (ans > Math.pow(2, 31) - 1 || ans < -1 * Math.pow(2,31)) {
    return 0;
  }
  return parseInt(ans);
};

// Test cases
let tests = [
  { input: 123, output: 321 },
  { input: -123, output: -321 },
  { input: 120, output: 21 },
  { input: 1534236469, output: 0 },
  { input: -2147483648, output: 0 },
];

// Run tests
tests.forEach(test => {
  console.log("Input: " + test.input);
  console.log("Output: " + reverse(test.input));
  console.log("Expected: " + test.output);
  console.log();
});
