// 94. Binary Tree Inorder Traversal

const { TreeNode, constructTree } = require('../utils');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return [];
  let val = [];
  if (root.left) {
    val = val.concat(inorderTraversal(root.left));
  }
  val.push(root.val);
  if (root.right) {
    val = val.concat(inorderTraversal(root.right));
  }
  return val;
};

// Test cases
let tests = [
  {root: [1, null, 2, 3], result: [1, 3, 2]},
  {root: [], result: []},
  {root: [1], result: [1]},
]

// Run tests
tests.forEach(test => {
  console.log("Input: ", test.root);
  console.log("Expected: ", test.result);
  console.log("Output: ", inorderTraversal(constructTree(test.root)));
});
