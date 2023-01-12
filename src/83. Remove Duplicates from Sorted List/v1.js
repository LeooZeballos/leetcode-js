// 83. Remove Duplicates from Sorted List

const { ListNode } = require("../utils.js");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let current = head;
  while (current) {
    if (current.next) {
      if (current.val === current.next.val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    } else {
      break;
    }
  }
  return head;
};

// Test cases
console.log(deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2))))); // [1, 2]
console.log(deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))))); // [1, 2, 3]
