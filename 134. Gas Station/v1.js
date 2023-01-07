// 134. Gas Station

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let start = gas.length - 1;
  let end = 0;
  gasInTank = gas[start] - cost[start];
  while (start >= end) {
    if (gasInTank >= 0) {
      gasInTank += gas[end] - cost[end];
      end++;
    } else {
      start--;
      gasInTank += gas[start] - cost[start];
    }
  }
  return gasInTank >= 0 ? start : -1;
};

// Test cases
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // -1
