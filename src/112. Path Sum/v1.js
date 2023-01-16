// 112. Path Sum

const { TreeNode, constructTree } = require('../utils');

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) {
    if (targetSum - root.val === 0) return true;
  }
  if (hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)) return true;
  return false;
};

// Test cases
let tests = [
  { root: [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum: 22, ans: true },
  { root: [1,2,3], targetSum: 5, ans: false },
  { root: [1,2], targetSum: 0, ans: false },
  { root: [1,2], targetSum: 1, ans: false },
];

// Run tests
tests.forEach(test => {
  console.log("root:", test.root, "targetSum:", test.targetSum);
  console.log("expected:", test.ans);
  console.log("result:", hasPathSum(constructTree(test.root), test.targetSum));
  console.log();
});
