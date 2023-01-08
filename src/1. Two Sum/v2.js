// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let pastNums = new Map();
  // we loop through the array
  for (let i = 0; i < nums.length; i++) {
    if (pastNums.has(target - nums[i])) {
      return [pastNums.get(target - nums[i]), i]
    } else {
      pastNums.set(nums[i], i);
    }
  }
};

// Test cases
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
