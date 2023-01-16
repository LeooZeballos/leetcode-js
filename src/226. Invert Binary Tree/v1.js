// 226. Invert Binary Tree

const { TreeNode, constructTree } = require('../utils');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// Test cases
let tests = [
  { root: [4, 2, 7, 1, 3, 6, 9], ans: [4, 7, 2, 9, 6, 3, 1] },
  { root: [2, 1, 3], ans: [2, 3, 1] },
  { root: [], ans: [] },
];

// Run tests
tests.forEach(test => {
  console.log("root:", test.root);
  console.log("expected:", test.ans);
  console.log("result:", invertTree(constructTree(test.root)));
  console.log();
});
