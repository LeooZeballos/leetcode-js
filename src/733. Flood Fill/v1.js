// 733. Flood Fill

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

  const n = image.length;
  const m = image[0].length;
  const originalColor = image[sr][sc];
  let visitedNodes = new Set();

  let fill = function (x, y, color) {

    if (image[x][y] === color) {
      return;
    }

    // paint the point
    image[x][y] = color;
    visitedNodes.add([x, y]);

    // try to paint up
    if (x - 1 >= 0 && image[x - 1][y] === originalColor && !visitedNodes.has([x - 1, y])) {
      fill(x - 1, y, color);
    }
    // try to paint down
    if (x + 1 < n && image[x + 1][y] === originalColor && !visitedNodes.has([x + 1, y])) {
      fill(x + 1, y, color);
    }
    // try to paint left
    if (y - 1 >= 0 && image[x][y - 1] === originalColor && !visitedNodes.has([x, y - 1])) {
      fill(x, y - 1, color);
    }
    // try to paint right
    if (y + 1 < m && image[x][y + 1] === originalColor && !visitedNodes.has([x, y + 1])) {
      fill(x, y + 1, color);
    }

  }
  fill(sr, sc, color)
  return image;
};

// Test cases
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)); // [[2,2,2],[2,2,0],[2,0,1]]
console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 0)); // [[0,0,0],[0,0,0]]
console.log(floodFill([[0,0,0],[0,0,0]], 1, 0, 2)); // [[2,2,2],[2,2,2]]
