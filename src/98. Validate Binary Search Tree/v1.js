// 98. Validate Binary Search Tree

const { constructTree, TreeNode } = require('../utils');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true;

  let validateBST = function (node, min, max) {
    if (!node) return true;

    if (node.val <= min || node.val >= max) return false;

    return validateBST(node.left, min, node.val) && validateBST(node.right, node.val, max);
  }

  return validateBST(root, -Infinity, Infinity);
};

// Test cases
let tests = [
  [2,1,3],
  [5,1,4,null,null,3,6],
  [5,4,6,null,null,3,7],
]

let expected = [
  true,
  false,
  false,
]

// Run tests
for (let test of tests) {
  console.log("Test case: " + test);
  console.log("Expected: " + expected[tests.indexOf(test)]);
  console.log("Result: " + isValidBST(constructTree(test)));
}
