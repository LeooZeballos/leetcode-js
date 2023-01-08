// 26. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let index = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  return index;
};

// Test cases
console.log(removeDuplicates([1,1,2])); // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 5
console.log(removeDuplicates([0,1,2,2,3,4,4,4,5,5])); // 6
