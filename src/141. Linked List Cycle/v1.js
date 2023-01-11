// 141. Linked List Cycle

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let set = new Set();
  function cycle(node) {
      if (set.has(node)) return node;
      if (!node) return null;
      set.add(node);
      return cycle(node.next);
  }
  return cycle(head) ? true : false;
};

// Test cases
let n1 = new ListNode(3);
let n2 = new ListNode(2);
let n3 = new ListNode(0);
let n4 = new ListNode(-4);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n2; // this creates a cycle
console.log(hasCycle(n1)); // true
let n5 = new ListNode(1);
let n6 = new ListNode(2);
n5.next = n6;
n6.next = n5; // this creates a cycle
console.log(hasCycle(n5)); // true
let n7 = new ListNode(1);
console.log(hasCycle(n7)); // false
