// 104. Maximum Depth of Binary Tree

const { TreeNode, constructTree } = require('../utils');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

// Test cases
let tests = [
  { root: [3,9,20,null,null,15,7], ans: 3 },
  { root: [1,null,2], ans: 2 },
  { root: [], ans: 0 },
  { root: [0], ans: 1 },
]

// Run tests
tests.forEach(function(test) {
  console.log("Root: ", test.root);
  console.log("Expected: ", test.ans);
  console.log("Output: ", maxDepth(constructTree(test.root)));
  console.log();
});
