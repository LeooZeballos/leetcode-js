// 746. Min Cost Climbing Stairs

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let dp = []
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]);
  }
  return dp[dp.length - 1];
};

// Test cases
let tests = [
  { cost: [10, 15, 20], ans: 15 },
  { cost: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1], ans: 6 },
  { cost: [0, 1, 2, 2], ans: 2 }
];

// Run tests
tests.forEach(test => {
  console.log("Cost: " + test.cost);
  console.log("Ans: " + test.ans);
  console.log("Result: " + minCostClimbingStairs(test.cost));
  console.log();
});
