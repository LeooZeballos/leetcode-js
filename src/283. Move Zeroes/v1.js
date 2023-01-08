// 283. Move Zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let index1 = 0, index2 = 1;
  while (index2 <= nums.length - 1) {
    if (nums[index1] === 0 && nums[index2] !== 0) {
      [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
      index1++;
      index2++;
    } else if (nums[index1] === 0 && nums[index2] === 0) {
      index2++;
    } else if (nums[index2] !== 0 && nums[index2] === 0) {
      index1++;
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return nums;
};

// Test cases
console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([0,0,1])); // [1,0,0]
