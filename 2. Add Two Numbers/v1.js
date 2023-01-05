// 2. Add Two Numbers

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let carries = 0;
  let currentNode = result;

  while (l1 || l2) {
    // we add the carried sum
    let sum = carries;
    // we sum the l1 val if it exists
    if (l1) {
      sum += l1.val;
      // we set the next node
      l1 = l1.next;
    }
    // we sum the l2 val if it exists
    if (l2) {
      sum += l2.val;
      // we set the next node
      l2 = l2.next;
    }
    // if the sum is more than or equal to 10, we carry and we substract 10
    if (sum >= 10) {
      carries = 1;
      sum -= 10;
    } else {
      carries = 0;
    }

    // create a new node and append it to the result linked list
    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;
  }

  if (carries) {
    currentNode.next = new ListNode(carries);
  }

  return result.next; // skip the initial dummy node
};

console.log(
  addTwoNumbers(
    new ListNode(2, new ListNode(4, new ListNode(3))),
    new ListNode(5, new ListNode(6, new ListNode(4)))
  )
);
console.log(addTwoNumbers(new ListNode(0), new ListNode(0)));
console.log(
  addTwoNumbers(
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
        )
      )
    ),
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
  )
);
