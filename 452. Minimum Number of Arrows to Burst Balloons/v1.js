// 452. Minimum Number of Arrows to Burst Balloons

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // sort by end point
  points.sort((a, b) => a[1] - b[1]);
  // start with a count of 1 because we have at least one arrow
  let count = 1;
  // set the current end point to the first end point
  let pos = points[0][1];
  // iterate through the points
  for (let i = 1; i < points.length; i++) {
    // if the current end point is greater than or equal to the start point
    if (pos >= points[i][0]) {
      // we don't need to shoot another arrow
      continue;
    }
    // otherwise, we need to shoot another arrow
    count++;
    // set the current end point to the end point of the current point
    pos = points[i][1];
  }
  // return the count
  return count;
};

// Test cases
console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
); // 2
console.log(
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
); // 4
console.log(
  findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ])
); // 2
