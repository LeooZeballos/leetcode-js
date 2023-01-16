// 198. House Robber

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let f = [0, nums[0]];
  for (let i = 2; i <= nums.length; i++) {
    f[i] = Math.max(f[i - 1], f[i - 2] + nums[i - 1]);
  }
  return f[nums.length];
};

// Test cases
let tests = [
  { nums: [1,2,3,1], ans: 4 },
  { nums: [2,7,9,3,1], ans: 12 },
  { nums: [2,1,1,2], ans: 4 },
];

// Run tests
tests.forEach(test => {
  console.log("nums:", test.nums);
  console.log("expected:", test.ans);
  console.log("result:", rob(test.nums));
  console.log();
});
