// 77. Combinations

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  // res is the result array
  let res = [];
  // If n < k, return empty array
  if (n < k) return res;
  // If n === k, return all numbers from 1 to n in one array
  if (n === k) {
    res.push(Array.from(Array(n), (_, i) => i + 1));
    return res;
  }
  // If k === 1, return all numbers from 1 to n in separate arrays
  if (k === 1) {
    res = Array.from(Array(n), (_, i) => [i + 1]);
    return res;
  }
  // Else, recursively call combine(n - 1, k - 1) and combine(n - 1, k)
  // and combine the results
  for (let i = 1; i <= n - k + 1; i++) {
    for (const c of combine(n - i, k - 1)) {
      res.push([i].concat(c.map(x => x + i)));
    }
  }
  // Return the result
  return res;
};

// Test cases
let tests = [
  { n: 4, k: 2, ans: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]] },
  { n: 1, k: 1, ans: [[1]] },
  { n: 4, k: 1, ans: [[1],[2],[3],[4]] },
  { n: 4, k: 4, ans: [[1,2,3,4]] },
]

// Run tests
tests.forEach(function(test) {
  console.log("N: ", test.n, ", K: ", test.k);
  console.log("Expected: ", test.ans);
  console.log("Output: ", combine(test.n, test.k));
  console.log();
});
