// 283. Move Zeroes - ChatGPT simplified version

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let index1 = 0, index2 = 0;
  while (index2 < nums.length) {
    if (nums[index2] !== 0) {
      nums[index1] = nums[index2];
      index1++;
    }
    index2++;
  }
  while (index1 < nums.length) {
    nums[index1] = 0;
    index1++;
  }
  return nums;
};

// Test cases
console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([0,0,1])); // [1,0,0]
