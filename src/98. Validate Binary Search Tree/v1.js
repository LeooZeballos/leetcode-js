// 98. Validate Binary Search Tree

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

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
console.log(isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3)))); // true
console.log(isValidBST(new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6))))); // false
console.log(isValidBST(new TreeNode(5, new TreeNode(4), new TreeNode(6, new TreeNode(3), new TreeNode(7))))); // false