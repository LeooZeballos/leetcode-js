// 102. Binary Tree Level Order Traversal

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let arr = [];
  const traverseNode = (root, level) => {
    if (!root) return;
    if (!arr[level]) {
      arr.push([]);
    }
    arr[level].push(root.val);
    traverseNode(root.left, level + 1);
    traverseNode(root.right, level + 1);
  }
  traverseNode(root, 0)
  return arr;
};

// Test cases
console.log(
  levelOrder(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
); // [[3],[9,20],[15,7]]
console.log(levelOrder(new TreeNode(1, null, null))); // [[1]]
console.log(levelOrder(new TreeNode(null, null, null))); // []
