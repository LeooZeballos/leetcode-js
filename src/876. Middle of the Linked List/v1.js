// 876. Middle of the Linked List

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let middle = head;
  let currentNode = head;
  let index = 0;
  while (currentNode) {
    if (index % 2 === 1 && head.next != null) {
      middle = middle.next;
    }
    currentNode = currentNode.next;
    index++;
  }
  return middle;
};

// Test cases
console.log(middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))); // [3,4,5]
console.log(middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))))); // [4,5,6]
