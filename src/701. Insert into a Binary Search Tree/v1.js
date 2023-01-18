// 701. Insert into a Binary Search Tree

const { TreeNode, constructTree } = require('../utils')

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val)
  if (root.val > val) root.left = insertIntoBST(root.left, val)
  else root.right = insertIntoBST(root.right, val)
  return root
};

// Test cases
let tests = [
  { input: [[4,2,7,1,3], 5], output: [4,2,7,1,3,5] },
  { input: [[40,20,60,10,30,50,70], 25], output: [40,20,60,10,30,50,70,null,null,25] },
  { input: [[4,2,7,1,3,null,null,null,null,null,null], 5], output: [4,2,7,1,3,5] },
]

// Run tests
tests.forEach(test => {
  console.log("Input: " + test.input)
  console.log("Expected: " + test.output)
  console.log("Output: " + insertIntoBST(constructTree(test.input[0]), test.input[1]))
  console.log()
})
