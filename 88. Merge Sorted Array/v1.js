// 88. Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums2[j] >= nums1[i]) {
      // insert the element
      nums1[k] = nums2[j];
      k--;
      j--;
    } else {
      nums1[k] = nums1[i];
      k--;
      i--;
    }
  }
  // add the remaining
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
};

// Test cases
let nums = [1,2,3,0,0,0];
merge(nums, 3, [2,5,6], 3);
console.log(nums) // [1,2,2,3,5,6]
nums = [1];
merge(nums, 1, [], 0);
console.log(nums); // [1]
nums = [0];
merge(nums, 0, [1], 1);
console.log(nums); // [1]
