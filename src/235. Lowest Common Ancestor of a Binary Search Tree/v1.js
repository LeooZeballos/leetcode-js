// 235. Lowest Common Ancestor of a Binary Search Tree

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root.val === p.val || root.val === q.val) return root;
  if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
  if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
  return root;
};

// Test cases
let node6 = new TreeNode(6);
let node2 = new TreeNode(2);
let node8 = new TreeNode(8);
let node0 = new TreeNode(0);
let node4 = new TreeNode(4);
let node7 = new TreeNode(7);
let node9 = new TreeNode(9);
let node3 = new TreeNode(3);
let node5 = new TreeNode(5);
node6.left = node2;
node6.right = node8;
node2.left = node0;
node2.right = node4;
node8.left = node7;
node8.right = node9;
node4.left = node3;
node4.right = node5;

console.log(lowestCommonAncestor(node6, node2, node8)); // node6
console.log(lowestCommonAncestor(node6, node2, node4)); // node2

let root2 = new TreeNode(2, new TreeNode(1));
node2 = new TreeNode(2);
node1 = new TreeNode(1);
node2.left = node1;

console.log(lowestCommonAncestor(node2, node2, node1)); // node2
