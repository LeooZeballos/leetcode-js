// 350. Intersection of Two Arrays II

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        result.push(nums1[i]);
        nums2.splice(j, 1);
        break;
      }
    }
  }
  return result;
};

// Test cases
console.log(intersect([1,2,2,1], [2,2])); // [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])); // [4,9]
console.log(intersect([1,5,6,8,4,12], [4,34,52,32,11,1,12])) // [1,4,12]
console.log(intersect([1,2,2,1], [2])) // [2]
