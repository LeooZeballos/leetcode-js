// 19. Remove Nth Node From End of List

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head.next && n === 1) return null;
  let currentNode = head;
  let nodeToRemove = head;
  // position the node to remove n steps behind the current node and get to the last
  while (currentNode.next) {
    if (n >= 1) {
      currentNode = currentNode.next;
      n--;
    } else {
      currentNode = currentNode.next;
      nodeToRemove = nodeToRemove.next;
    }
  }
  // remove the node
  if (n === 1) {
    return head.next;
  } else if (nodeToRemove.next) {
    nodeToRemove.next = nodeToRemove.next.next;
  } else {
    nodeToRemove.next = null;
  }
  return head;
};

// Test cases
console.log(removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2)); // [1,2,3,5]
console.log(removeNthFromEnd(new ListNode(1), 1)); // []
console.log(removeNthFromEnd(new ListNode(1, new ListNode(2)), 1)); // [1]
console.log(removeNthFromEnd(new ListNode(1, new ListNode(2)), 2)); // [2]
