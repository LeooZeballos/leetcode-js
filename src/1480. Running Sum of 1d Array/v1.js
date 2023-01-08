// 1480. Running Sum of 1d Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let numberSum = Array(nums.length);
  numberSum[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    numberSum[i] = nums[i] + numberSum[i - 1];
  }
  return numberSum;
};

// Test cases
console.log(runningSum([1,2,3,4]));
console.log(runningSum([1,1,1,1,1]));
console.log(runningSum([3,1,2,10,1]));
