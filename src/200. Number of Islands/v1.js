// 200. Number of Islands

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let visitedNodes = new Set();
  let numIslands = 0;
  const n = grid.length;
  const m = grid[0].length;

  let findIsland = function (x, y) {

    visitedNodes.add(x * m + y);

    // check left
    if (y - 1 >= 0 && grid[x][y - 1] === '1' && !visitedNodes.has(x * m + y - 1)) {
      findIsland(x, y - 1);
    }
    // check right
    if (y + 1 < m && grid[x][y + 1] === '1' && !visitedNodes.has(x * m + y + 1)) {
      findIsland(x, y + 1);
    }
    // check up
    if (x - 1 >= 0 && grid[x - 1][y] === '1' && !visitedNodes.has((x - 1) * m + y)) {
      findIsland(x - 1, y);
    }
    // check down
    if (x + 1 < n && grid[x + 1][y] === '1' && !visitedNodes.has((x + 1) * m + y)) {
      findIsland(x + 1, y);
    }

  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // water
      if (grid[i][j] === '0') {
        visitedNodes.add(i * m + j);
        continue;
      }
      // already visited the node
      if (visitedNodes.has(i * m + j)) {
        continue;
      }
      numIslands++;
      findIsland(i, j);
    }
  }

  return numIslands;
};

// Test cases
let tests = [
  { grid: [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]], expected: 1 },
  { grid: [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]], expected: 3 },
]

// Run tests
tests.forEach(test => {
  console.log(`grid: ${test.grid}, expected: ${test.expected}`);
  console.log(`result: ${numIslands(test.grid)}`);
});
