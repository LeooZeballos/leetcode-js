// 542. 01 Matrix

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {

  let i, l, j, m;

  let q = [];

  for (i = 0, l = matrix.length; i < l; i++) {
      for ( j = 0, m = matrix[0].length; j < m; j++) {
          if (matrix[i][j] === 0) {
              q.push([i, j, 0]);
          } else {
              matrix[i][j] = Infinity;
          }
      }
  }

  let dir = [[1,0],[0,1],[-1,0],[0,-1]];

  while (q.length) {
      let pos = q.shift();

      if (matrix[pos[0]][pos[1]] > pos[2]) {
          matrix[pos[0]][pos[1]] = pos[2];
      }

      dir.forEach(function(d) {
          let next = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1];
          if (next[0] > -1 && next[0] < matrix.length && next[1] > -1 && next[1] < matrix[0].length) {
              if (matrix[next[0]][next[1]] === Infinity) {
                  q.push(next);
              }
          }
      });
  }

  return matrix;
};

// Test cases
let tests = [
  { mat: [[0,0,0],[0,1,0],[0,0,0]], ans: [[0,0,0],[0,1,0],[0,0,0]] },
  { mat: [[0,0,0],[0,1,0],[1,1,1]], ans: [[0,0,0],[0,1,0],[1,2,1]] },
  { mat: [[0,0,0],[0,1,0],[1,1,1],[1,1,1]], ans: [[0,0,0],[0,1,0],[1,2,1],[2,3,2]] },
  { mat: [[0,0,0],[0,1,0],[1,1,1],[1,1,1],[1,1,1]], ans: [[0,0,0],[0,1,0],[1,2,1],[2,3,2],[3,4,3]] },
  { mat: [[0,0,0],[0,1,0],[1,1,1],[1,1,1],[1,1,1],[1,1,1]], ans: [[0,0,0],[0,1,0],[1,2,1],[2,3,2],[3,4,3],[4,5,4]] },
  { mat: [[0,0,0],[0,1,0],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]], ans: [[0,0,0],[0,1,0],[1,2,1],[2,3,2],[3,4,3],[4,5,4],[5,6,5]] },
  { mat: [[0,0,0],[0,1,0],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]], ans: [[0,0,0],[0,1,0],[1,2,1],[2,3,2],[3,4,3],[4,5,4],[5,6,5],[6,7,6]] },
]

// Run tests
tests.forEach(function(test) {
  console.log("Matrix: ", test.mat);
  console.log("Expected: ", test.ans);
  console.log("Output: ", updateMatrix(test.mat));
  console.log(test.ans.toString() === updateMatrix(test.mat).toString() ? "PASS" : "FAIL");
});
