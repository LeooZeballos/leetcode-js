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

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

module.exports = {
  constructTree,
  TreeNode
};