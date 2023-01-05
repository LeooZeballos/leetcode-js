// 53. Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  let max_sum = nums[0];
  let current_sum = max_sum;
  for (let i = 1; i < nums.length; i++) {
    current_sum = Math.max(nums[i] + current_sum, nums[i]);
    max_sum = Math.max(current_sum, max_sum);
  }
  return max_sum;
};

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));
