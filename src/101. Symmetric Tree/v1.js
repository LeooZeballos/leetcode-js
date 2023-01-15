// 101. Symmetric Tree

const { TreeNode, constructTree } = require('../utils');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  let isSym = (left, right) => {
    if ((!left && right) || (left && !right)) return false;
    if (!left && !right) return true;
    return (left.val === right.val && isSym(left.left, right.right) && isSym(left.right, right.left));
  }

  return isSym(root.left, root.right);
};

// Test cases
let tests = [
  { root: [1,2,2,3,4,4,3], ans: true },
  { root: [1,2,2,null,3,null,3], ans: false },
  { root: [], ans: true },
  { root: [1], ans: true },
]

// Run tests
tests.forEach(function(test) {
  console.log("Root: ", test.root);
  console.log("Expected: ", test.ans);
  console.log("Output: ", isSymmetric(constructTree(test.root)));
  console.log();
});
