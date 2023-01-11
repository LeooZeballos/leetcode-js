// 142. Linked List Cycle II

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let set = new Set();
  function cycle(node) {
      if (set.has(node)) return node;
      if (!node) return null;
      set.add(node);
      return cycle(node.next);
  }
  return cycle(head);
};

// Test cases
let n4 = new ListNode(-4);
let n3 = new ListNode(0);
let n2 = new ListNode(2);
let n1 = new ListNode(3);
n4.next = n3;
n3.next = n2;
n2.next = n1;
n1.next = n2; // this creates a cycle
console.log(detectCycle(n4)); // 2
let n5 = new ListNode(2);
let n6 = new ListNode(1);
n6.next = n5;
console.log(detectCycle(n1)); // 0
let n7 = new ListNode(1);
console.log(detectCycle(n7)); // -1
