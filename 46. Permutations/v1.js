// 46. Permutations

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    const remaining = nums.slice(0, i).concat(nums.slice(i + 1));
    for (const p of permute(remaining)) {
      res.push([first].concat(p));
    }
  }
  return res;
};

// Test cases
console.log(permute([1,2,3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0,1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]
