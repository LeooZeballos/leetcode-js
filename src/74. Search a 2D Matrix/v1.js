// 74. Search a 2D Matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // search which row has the target
  let row = matrix.length - 1;
  for (let i = 0; i < matrix.length - 1; i++) {
    const lastElement = matrix[i][matrix[i].length - 1];
    if (target <= lastElement) {
      row = i;
      break;
    }
  }
  // search the row
  for (let j = 0; j < matrix[row].length; j++) {
    if (matrix[row][j] === target) {
      return true;
    }
  }
  // didn't found it
  return false;
};

// Test cases
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // false
console.log(searchMatrix([[1],[3]], 3)); // true
