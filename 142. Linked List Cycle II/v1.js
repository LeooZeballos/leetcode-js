// 142. Linked List Cycle II

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
console.log(detectCycle([3,2,0,-4], 1)); // 1
console.log(detectCycle([1,2], 0)); // 0
console.log(detectCycle([1], -1)); // -1
