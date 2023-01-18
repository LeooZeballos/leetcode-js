// 190. Reverse Bits

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let ans = 0;
  for (let i = 0; i < 32 ;i++) {
    ans = (ans << 1) | (n&1);
    n = n >> 1;
  }

  return ans >>> 0;
};

// Test cases
let tests = [
  { input: 43261596, output: 964176192 },
  { input: 4294967293, output: 3221225471 },
]

// Run tests
tests.forEach(test => {
  console.log("Input: " + test.input)
  console.log("Expected: " + test.output)
  console.log("Output: " + reverseBits(test.input))
  console.log()
})