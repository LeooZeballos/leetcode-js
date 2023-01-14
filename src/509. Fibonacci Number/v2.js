// 509. Fibonacci Number

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let f = [0, 1]
  for (let i = 2; i <= n; i++) {
    f.push(f[i-1] + f[i-2]);
  }
  return f[n];
};

// Test cases
let tests = [
  {n: 2, ans: 1},
  {n: 3, ans: 2},
  {n: 4, ans: 3},
]

// Run tests
tests.forEach(function(test) {
  console.log("N: ", test.n);
  console.log("Expected: ", test.ans);
  console.log("Output: ", fib(test.n));
});