// 704. Binary Search - must be O(log n)

/**
 * @param {number[]} nums // sorted in ascending order
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

// Test cases
console.log(search([-1,0,3,5,9,12], 9)) // 4
console.log(search([-1,0,3,5,9,12], 2)) // -1
console.log(search([5], 5)) // 0
console.log(search([2,5], 5)) // 1
console.log(search([2,5], 2)) // 0
console.log(search([2,5], 6)) // -1
