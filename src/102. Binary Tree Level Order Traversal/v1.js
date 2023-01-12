// 102. Binary Tree Level Order Traversal

const { constructTree, TreeNode } = require('../utils');

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
console.log(levelOrder(constructTree([3, 9, 20, null, null, 15, 7]))); // [[3],[9,20],[15,7]]
console.log(levelOrder(constructTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))); // [[1],[2,3],[4,5,6,7],[8,9,10,11,12,13,14,15]]
console.log(levelOrder(constructTree([]))); // []