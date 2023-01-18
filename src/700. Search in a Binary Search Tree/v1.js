// 700. Search in a Binary Search Tree

const { TreeNode, constructTree } = require('../utils');

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) return null
  if (root.val === val) return root
  if (root.val > val) return searchBST(root.left, val)
  if (root.val < val) return searchBST(root.right, val)
};

// Test cases
let tests = [
  { input: [[4, 2, 7, 1, 3], 2], output: [2, 1, 3] },
  { input: [[4, 2, 7, 1, 3], 5], output: null },
]

// Run tests
tests.forEach(test => {
  console.log("Input: " + test.input)
  console.log("Expected: " + test.output)
  console.log("Output: " + searchBST(constructTree(test.input[0]), test.input[1]))
  console.log()
})
