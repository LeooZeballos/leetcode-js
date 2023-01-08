// 118. Pascal's Triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let pascal = new Array();
  for (let i = 0; i < numRows; i++) {
    let currentRow = new Array();
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currentRow.push(1);
      } else {
        currentRow.push(pascal[i - 1][j - 1] + pascal[i - 1][j])
      }
    }
    pascal.push(currentRow);
  }
  return pascal;
};

// Test cases
console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
