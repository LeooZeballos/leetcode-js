// 116. Populating Next Right Pointers in Each Node

const {Node, constructTree} = require("../utils.js")

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) {
    return null;
  }
  let queue = [root];
  while (queue.length > 0) {
    let nextQueue = [];
    let prev = null;
    for (let node of queue) {
      if (prev) {
        prev.next = node;
      }
      prev = node;
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }
    queue = nextQueue;
  }
  return root;
};

// Test cases
tests = [
  [1,2,3,4,5,6,7],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [],
  [1],
  [1,2],
]

// Run tests
for (let test of tests) {
  console.log(connect(constructTree(test)));
}