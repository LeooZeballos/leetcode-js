// 21. Merge Two Sorted Lists

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

  let result = new ListNode(0);
  let currentNode = result;

  let l1 = list1;
  let l2 = list2;

  while (l1 || l2) {
    if (l1 === null) {
      currentNode.next = new ListNode(l2.val);
      currentNode = currentNode.next;
      l2 = l2.next;
    } else if (l2 === null) {
      currentNode.next = new ListNode(l1.val);
      currentNode = currentNode.next;
      l1 = l1.next;
    } else if (l1.val <= l2.val) {
      currentNode.next = new ListNode(l1.val);
      currentNode = currentNode.next;
      l1 = l1.next;
    } else {
      currentNode.next = new ListNode(l2.val);
      currentNode = currentNode.next;
      l2 = l2.next;
    }

  }
  // skip the initial dummy node
  return result.next;

};

// Test cases
console.log(
  mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4)))
  )
); // [1,1,2,3,4,4]
console.log(mergeTwoLists(new ListNode(), new ListNode())); // []
console.log(mergeTwoLists(new ListNode(), new ListNode(0))); // [0]
console.log(mergeTwoLists(new ListNode(1), new ListNode(1))); // [1,1]
