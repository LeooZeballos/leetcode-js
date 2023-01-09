// 144. Binary Tree Preorder Traversal

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

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
console.log(preorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null)))); // [1,2,3]
console.log(preorderTraversal(new TreeNode())); // []
console.log(preorderTraversal(new TreeNode(1))); // [1]
