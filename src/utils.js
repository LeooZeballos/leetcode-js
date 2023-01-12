function constructTree(nodes) {
  if (!nodes || nodes.length === 0) {
    return null;
  }
  var root = new TreeNode(nodes[0]);
  var queue = [root];
  var i = 1;
  while (i < nodes.length) {
    var node = queue.shift();
    if (nodes[i] !== null) {
      node.left = new TreeNode(nodes[i]);
      queue.push(node.left);
    }
    i++;
    if (nodes[i] !== null) {
      node.right = new TreeNode(nodes[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

function constructLinkedList(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }
  var head = new ListNode(arr[0]);
  var node = head;
  for (var i = 1; i < arr.length; i++) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }
  return head;
}


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

module.exports = {
  constructTree,
  TreeNode,
  Node,
  ListNode,
  constructLinkedList,
};