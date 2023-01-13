// 904. Rotting Oranges

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const height = grid.length;
  const width = grid[0].length;
  let fresh = 0;
  const queue = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
      if (grid[i][j] === 1) fresh++;
    }
  }
  let minute = 0;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();
      if (x - 1 >= 0 && grid[x - 1][y] === 1) {
        grid[x - 1][y] = 2;
        fresh--;
        queue.push([x - 1, y]);
      }
      if (x + 1 < height && grid[x + 1][y] === 1) {
        grid[x + 1][y] = 2;
        fresh--;
        queue.push([x + 1, y]);
      }
      if (y - 1 >= 0 && grid[x][y - 1] === 1) {
        grid[x][y - 1] = 2;
        fresh--;
        queue.push([x, y - 1]);
      }
      if (y + 1 < width && grid[x][y + 1] === 1) {
        grid[x][y + 1] = 2;
        fresh--;
        queue.push([x, y + 1]);
      }
    }
    if (queue.length > 0) minute++;
  }
  return fresh === 0 ? minute : -1;
};

// Test cases
let tests = [
  { grid: [[2,1,1],[1,1,0],[0,1,1]], ans: 4 },
  { grid: [[2,1,1],[0,1,1],[1,0,1]], ans: -1 },
  { grid: [[0,2]], ans: 0 },
]

// Run tests
tests.forEach(function(test) {
  console.log("Grid: ", test.grid);
  console.log("Expected: ", test.ans);
  console.log("Output: ", orangesRotting(test.grid));
});