// 617. Merge Two Binary Trees

const {constructTree, TreeNode} = require("../utils.js")

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;

    var root = new TreeNode(root1.val + root2.val);
    root.left = mergeTrees(root1.left, root2.left);
    root.right = mergeTrees(root1.right, root2.right);

    return root;
};

var root1 = constructTree([1,3,2,5]);
var root2 = constructTree([2,1,3,null,4,null,7]);
console.log(mergeTrees(root1, root2));

var root1 = constructTree([1]);
var root2 = constructTree([1,2]);
console.log(mergeTrees(root1, root2));
