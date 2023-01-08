// 189. Rotate Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let copy = [...nums];
  for (let i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length] = copy[i];
  }
  return nums;
};

// Test cases
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
