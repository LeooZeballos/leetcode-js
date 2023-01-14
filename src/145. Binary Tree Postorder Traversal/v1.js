// 145. Binary Tree Postorder Traversal

const { TreeNode, constructTree } = require('../utils');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root) return [];
  let val = [];
  if (root.left) {
    val = val.concat(postorderTraversal(root.left));
  }
  if (root.right) {
    val = val.concat(postorderTraversal(root.right));
  }
  val.push(root.val);
  return val;
};

// Test cases
let tests = [
  {root: [1, null, 2, 3], result: [3, 2, 1]},
  {root: [], result: []},
  {root: [1], result: [1]},
]

// Run tests
tests.forEach(test => {
  console.log("Input: ", test.root);
  console.log("Expected: ", test.result);
  console.log("Output: ", postorderTraversal(constructTree(test.root)));
});
