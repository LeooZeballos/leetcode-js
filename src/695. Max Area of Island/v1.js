// 695. Max Area of Island

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let visitedNodes = new Set();
  let maxIsland = 0;
  const n = grid.length;
  const m = grid[0].length;

  let findIsland = function (x, y, count) {

    count++;
    visitedNodes.add(x * m + y);

    // check left
    if (y - 1 >= 0 && grid[x][y - 1] === 1 && !visitedNodes.has(x * m + y - 1)) {
      count = findIsland(x, y - 1, count);
    }
    // check right
    if (y + 1 < m && grid[x][y + 1] === 1 && !visitedNodes.has(x * m + y + 1)) {
      count = findIsland(x, y + 1, count);
    }
    // check up
    if (x - 1 >= 0 && grid[x - 1][y] === 1 && !visitedNodes.has((x - 1) * m + y)) {
      count = findIsland(x - 1, y, count);
    }
    // check down
    if (x + 1 < n && grid[x + 1][y] === 1 && !visitedNodes.has((x + 1) * m + y)) {
      count = findIsland(x + 1, y, count);
    }

    return count;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // water
      if (grid[i][j] === 0) {
        visitedNodes.add(i * m + j);
        continue;
      }
      // already visited the node
      if (visitedNodes.has(i * m + j)) {
        continue;
      }
      maxIsland = Math.max(maxIsland, findIsland(i, j, 0));
    }
  }

  return maxIsland;
};

// Test cases
console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]])); // 6
console.log(maxAreaOfIsland([[0,0,0,0,0,0,0,0]])); // 0
