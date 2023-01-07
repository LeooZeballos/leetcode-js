// 350. Intersection of Two Arrays II

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let result = [];
  nums1.sort((a,b) => a-b);
  nums2.sort((a,b) => a-b);
  let index1 = 0, index2 = 0;
  while (index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] === nums2[index2]) {
      result.push(nums1[index1]);
      index1++;
      index2++;
    } else if (nums1[index1] > nums2[index2]) {
      index2++;
    } else {
      index1++;
    }
  }
  return result;
};

// Test cases
console.log(intersect([1,2,2,1], [2,2])); // [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])); // [4,9]
console.log(intersect([1,5,6,8,4,12], [4,34,52,32,11,1,12])) // [1,4,12]
console.log(intersect([1,2,2,1], [2])) // [2]
