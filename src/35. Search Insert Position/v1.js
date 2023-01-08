// 35. Search Insert Position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target > nums[i]) {
      continue;
    } else {
      return i;
    }
  }
  return nums.length;
};

// Test cases
console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4
