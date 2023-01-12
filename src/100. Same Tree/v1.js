// 100. Same Tree

const { constructTree, TreeNode } = require('../utils');

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if ((!p && q) || (p && !q)) return false;
  if (p.val !== q.val) return false;
  if (!isSameTree(p.left, q.left)) {
    return false;
  }
  if (!isSameTree(p.right, q.right)) {
    return false;
  }
  return true;
};

// Test cases
let tests = [
  [[1,2,3], [1,2,3]],
  [[1,2], [1,null,2]],
  [[1,2,1], [1,1,2]],
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
  console.log("Result: " + isSameTree(constructTree(test[0]), constructTree(test[1])));
}