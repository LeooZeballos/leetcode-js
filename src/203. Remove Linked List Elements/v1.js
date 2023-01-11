// 203. Remove Linked List Elements

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;
  let current = head;
  let previous = null;
  while (current) {
    if (current.val === val) {
      if (!previous) {
        head = head.next;
        current = head;
      } else {
        previous.next = current.next;
        current = current.next;
      }
    } else {
      previous = current;
      current = current.next;
    }
  }
  return head;
};

// Test cases
console.log(
  removeElements(
    new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          6,
          new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
        )
      )
    ),
    6
  )
); // [1,2,3,4,5]
console.log(removeElements(null, 1)); // []
console.log(
  removeElements(
    new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7)))),
    7
  )
); // []
