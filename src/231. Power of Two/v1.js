// 231. Power of Two

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 2 || n === 1) {
    return true
  } else if (n < 2) {
    return false
  } else {
    if (isPowerOfTwo(n / 2)) {
      return true
    }
  }
  return false;
};

// Test cases
let tests = [
  { input: 1, output: true },
  { input: 16, output: true },
  { input: 3, output: false },
]

// Run tests
tests.forEach(test => {
  console.log("Input: " + test.input)
  console.log("Expected: " + test.output)
  console.log("Output: " + isPowerOfTwo(test.input))
  console.log()
})