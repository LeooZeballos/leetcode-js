// 62. Unique Paths

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dp = new Array(m).fill(1).map(() => new Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

// Test cases
let tests = [
  { m: 3, n: 7, ans: 28 },
  { m: 3, n: 2, ans: 3 },
  { m: 3, n: 3, ans: 6 },
]

// Run tests
tests.forEach(function(test) {
  console.log("M: ", test.m, ", N: ", test.n);
  console.log("Expected: ", test.ans);
  console.log("Output: ", uniquePaths(test.m, test.n));
  console.log();
});
