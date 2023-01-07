// 206. Reverse Linked List

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // Current node is the head
  let currentNode = head;
  // Previous node is null
  let previousNode = null;
  // While current node is not null
  while (currentNode) {
    // Next node is the next node of the current node
    let nextNode = currentNode.next;
    // The next node of the current node is the previous node
    currentNode.next = previousNode;
    // The previous node is the current node
    previousNode = currentNode;
    // The current node is the next node
    currentNode = nextNode;
  }
  // Return the previous node
  return previousNode;
};

// Test cases
console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))); // [5,4,3,2,1]
console.log(reverseList(new ListNode(1, new ListNode(2)))); // [2,1]
console.log(reverseList(new ListNode(1))); // [1]
console.log(reverseList(null)); // []
