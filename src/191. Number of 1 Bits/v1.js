// 191. Number of 1 Bits

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  while (n !== 0) {
    const bitComparison = n & 1;
    if (bitComparison === 1) count++;
    n >>>= 1;
  }
  return count;
};

// Test cases
let tests = [
  { input: 00000000000000000000000000001011, output: 3 },
  { input: 00000000000000000000000010000000, output: 1 },
]

// Run tests
tests.forEach(test => {
  console.log("Input: " + test.input)
  console.log("Expected: " + test.output)
  console.log("Output: " + hammingWeight(test.input))
  console.log()
})