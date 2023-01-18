// 653. Two Sum IV - Input is a BST

const { TreeNode, constructTree } = require('../utils')

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const set = new Set()
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    if (set.has(k - node.val)) return true
    set.add(node.val)
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  return false
};

// Test cases
let tests = [
  { input: [[5,3,6,2,4,null,7], 9], output: true },
  { input: [[5,3,6,2,4,null,7], 28], output: false },
]

// Run tests
tests.forEach(test => {
  console.log("Input: " + test.input)
  console.log("Expected: " + test.output)
  console.log("Output: " + findTarget(constructTree(test.input[0]), test.input[1]))
  console.log()
})
