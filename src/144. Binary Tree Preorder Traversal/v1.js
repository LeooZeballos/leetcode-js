// 144. Binary Tree Preorder Traversal

const { constructTree, TreeNode } = require('../utils');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  let result = [root.val];
  if (root.left) {
    result = result.concat(preorderTraversal(root.left));
  }
  if (root.right) {
    result = result.concat(preorderTraversal(root.right));
  }
  return result;
};

// Test cases
let tests = [
  {input: [1, null, 2, 3], expected: [1, 2, 3]},
  {input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], expected: [1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 13, 7, 14, 15]},
  {input: [], expected: []},
]

// Run tests
for (let test of tests) {
  console.log("Test case: " + test.input);
  console.log("Expected: " + test.expected);
  console.log("Result: " + preorderTraversal(constructTree(test.input)));
}
