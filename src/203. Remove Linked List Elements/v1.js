// 203. Remove Linked List Elements

const { ListNode, constructLinkedList } = require("../utils.js");

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
let tests = [
  {head: [1, 2, 6, 3, 4, 5, 6], val: 6, expected: [1, 2, 3, 4, 5]},
  {head: [1, 2, 2, 1], val: 2, expected: [1, 1]},
  {head: [1, 1], val: 1, expected: []},
  {head: [1], val: 1, expected: []},
  {head: [], val: 1, expected: []},
  {head: [7, 7, 7, 7], val: 7, expected: []},
  {head: [7, 7, 7, 7], val: 6, expected: [7, 7, 7, 7]},
  {head: [1, 2, 2, 1], val: 3, expected: [1, 2, 2, 1]},
]

tests.forEach(test => {
  let head = constructLinkedList(test.head);
  let result = removeElements(head, test.val);
  let resultArr = [];
  while (result) {
    resultArr.push(result.val);
    result = result.next;
  }
  console.log(resultArr, test.expected);
});