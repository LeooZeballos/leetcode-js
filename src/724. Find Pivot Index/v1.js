// 724. Find Pivot Index

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sumLeft = new Array(nums.length);
  let sumRight = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0)
      sumLeft[i] = 0;
    else if (i == 1)
      sumLeft[i] = nums[i - 1]
    else
      sumLeft[i] = nums[i - 1] + sumLeft[i - 1];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1)
      sumRight[i] = 0;
    else if (i == nums.length - 2)
      sumRight[i] = nums[i + 1]
    else
      sumRight[i] = nums[i + 1] + sumRight[i + 1];
  }
  for (let i = 0; i < sumLeft.length; i++) {
    if (sumLeft[i] === sumRight[i]) return i;
  }
  return -1;
};

// Test cases
console.log(pivotIndex([1,7,3,6,5,6])); // 3
console.log(pivotIndex([1,2,3])); // -1
console.log(pivotIndex([2,1,-1])); // 0
