// 2246. Longest Path With Different Adjacent Characters

/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
  // Build tree with adjacency list
  let n = parent.length;
  let children = new Array(n).fill(0).map(() => []);
  for (let i = 1; i < n; i++) {
    children[parent[i]].push(i);
  }
  // DFS
  let longestPath = 0;
  let dfs = function(node) {
    let longestLenght = 0, longestLenght2 = 0;
    for (let child of children[node]) {
      let lengthOfChild = dfs(child);
      if (s[node] == s[child]) continue;
      if (longestLenght < lengthOfChild) {
        longestLenght2 = longestLenght;
        longestLenght = lengthOfChild;
      } else if (longestLenght2 < lengthOfChild) {
        longestLenght2 = lengthOfChild;
      }
    }
    longestPath = Math.max(longestPath, longestLenght + longestLenght2 + 1);
    return longestLenght + 1;
  }
  dfs(0);
  return longestPath;
};

// Test cases
let tests = [
  { parent: [-1,0,0,1,1,2], s: "abacbe", expected: 3 },
  { parent: [-1,0,0,0], s: "aabc", expected: 3 },
  { parent: [-1,0,1], s: "aab", expected: 2 },
]

// Run tests
tests.forEach(test => {
  console.log(`parent: ${test.parent}, s: ${test.s}, expected: ${test.expected}`);
  console.log(`result: ${longestPath(test.parent, test.s)}`);
});

