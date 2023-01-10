// 589. N-ary Tree Preorder Traversal

function Node(val, children) {
  this.val = val;
  this.children = children;
}

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];
  let result = [root.val];
  for (children of root.children) {
    result = result.concat(preorder(children));
  }
  return result;
};

// Test cases
console.log(
  preorder(
    new Node(1, [
      new Node(3, [new Node(5, []), new Node(6, [])]),
      new Node(2, []),
      new Node(4, []),
    ])
  )
); // [1,3,5,6,2,4]
console.log(
  preorder(
    new Node(1, [
      new Node(2, []),
      new Node(3, [
        new Node(6, []),
        new Node(7, [new Node(11, [new Node(14, [])])]),
      ]),
      new Node(4, [
        new Node(8, [new Node(12, [])]),
      ]),
      new Node(5, [
        new Node(9, [new Node(13, [])]),
        new Node(10, []),
      ]),
    ])
  )
); // [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
