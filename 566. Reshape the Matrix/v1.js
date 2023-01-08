// 566. Reshape the Matrix

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  // illegal dims
  if (mat.length === 0 || mat.length * mat[0].length !== r * c) return mat;
  let newMat = Array.from({length: r}, () => new Array(c).fill(0));
  const n = mat.length, m = mat[0].length;
  for (let i = 0; i < n * m; i++) {
    newMat[Math.floor(i / c)][i % c] = mat[Math.floor(i / m)][i % m];
  }
  return newMat;
};

// Test cases
console.log(matrixReshape([[1,2],[3,4]], 1, 4)); // [[1,2,3,4]]
console.log(matrixReshape([[1,2],[3,4]], 2, 4)); // [[1,2],[3,4]]
console.log(matrixReshape([[1,2],[3,4]], 4, 1)); // [[1],[2],[3],[4]]
console.log(matrixReshape([[1,2],[3,4]], 4, 2)); // [[1,2],[3,4]]
console.log(matrixReshape([[1,2,3,4]], 2, 2)) // [[1,2],[3,4]]