// 120. Triangle

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  // f is an array of minimum path sums from top to bottom
  let f = [triangle[0][0]];
  // iterate through each row
  for (let i = 1; i < triangle.length; i++) {
    f[i] = f[i - 1] + triangle[i][i];
    for (let j = i - 1; j > 0; j--) {
      f[j] = Math.min(f[j - 1], f[j]) + triangle[i][j];
    }
    f[0] += triangle[i][0];
  }
  let min = f[0];
  for (let i = 1; i < f.length; i++) {
    if (f[i] < min) min = f[i];
  }
  return min;
};

// Test cases
let tests = [
  { triangle: [[2],[3,4],[6,5,7],[4,1,8,3]], ans: 11 },
  { triangle: [[-10]], ans: -10 },
];

// Run tests
tests.forEach(test => {
  console.log("triangle:", test.triangle);
  console.log("expected:", test.ans);
  console.log("result:", minimumTotal(test.triangle));
  console.log();
});
