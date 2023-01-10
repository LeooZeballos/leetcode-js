// 100. Same Tree

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
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
console.log(isSameTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)), new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // true
console.log(isSameTree(new TreeNode(1, new TreeNode(2)), new TreeNode(1, null, new TreeNode(2)))); // false
console.log(isSameTree(new TreeNode(1, new TreeNode(2), new TreeNode(1)), new TreeNode(1, new TreeNode(1), new TreeNode(2)))); // false
