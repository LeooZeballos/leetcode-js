// 70. Climbing Stairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let f = [0, 1];
  for (let i = 2; i <= n + 1; i++) {
    f.push(f[i-1] + f[i-2]);
  }
  return f[n + 1];
};

// Test cases
let tests = [
  {n: 2, ans: 2},
  {n: 3, ans: 3},
]

// Run tests
tests.forEach(function(test) {
  console.log("N: ", test.n);
  console.log("Expected: ", test.ans);
  console.log("Output: ", climbStairs(test.n));
});
