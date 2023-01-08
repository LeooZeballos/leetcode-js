// 977. Squares of a Sorted Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));
  nums = nums.map((a) => Math.pow(a, 2));
  return nums;
};

// Test cases
console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); // [4,9,9,49,121]
