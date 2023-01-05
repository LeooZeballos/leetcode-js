// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // we loop through the array
  for (let i = 0; i < nums.length; i++) {
    // we loop through the array again
    for (let j = i + 1; j < nums.length && j !== i; j++) {
      // if the sum of the two numbers is equal to the target, we return the indexes
      if (nums[i] + nums[j] === target) {
        // we return the indexes
        return [i, j];
      }
    }
  }
};
