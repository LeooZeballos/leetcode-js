// 1046. Last Stone Weight

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if (stones.length === 1) return stones[0];
  let sortedStones = stones.sort((a, b) => a - b);
  let lastStone = sortedStones.pop();
  let secondLastStone = sortedStones.pop();
  let diff = lastStone - secondLastStone;
  if (diff > 0) {
    sortedStones.push(diff);
  }
  if (sortedStones.length > 1) {
    return lastStoneWeight(sortedStones);
  } else if (sortedStones.length === 1) {
    return sortedStones[0];
  } else {
    return 0;
  }
};

// Test cases
let tests = [
  { stones: [2,7,4,1,8,1], ans: 1 },
  { stones: [1], ans: 1 },
]

// Run tests
tests.forEach(test => {
  console.log("Stones:", test.stones);
  console.log("Expected:", test.ans);
  console.log("Output:", lastStoneWeight(test.stones));
  console.log();
})
