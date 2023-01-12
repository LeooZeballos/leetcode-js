// 1519. Number of Nodes in the Sub-Tree With the Same Label

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
  // ady list
  let children = Array.from({ length: n }, () => []);
  for (let [par, child] of edges) {
      children[par].push(child);
      children[child].push(par);
  }
  // result
  let res = new Array(n);
  let dfs = function (node, parent) {
      let map = {};
      for (let child of children[node]) {
          if (child === parent) continue;
          let val = dfs(child, node);
          for (let [label, count] of Object.entries(val)) {
              if (!map[label]) map[label] = 0;
              map[label] += count;
          }
      }
      if (!map[labels[node]]) map[labels[node]] = 0;
      map[labels[node]]++;
      res[node] = map[labels[node]];
      return map;
  }

  dfs(0);
  return res;
};

// Test cases
console.log(countSubTrees(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], "abaedcd")); // [2,1,1,1,1,1,1]
console.log(countSubTrees(4, [[0,1],[1,2],[0,3]], "bbbb")); // [4,2,1,1]
console.log(countSubTrees(5, [[0,1],[0,2],[1,3],[0,4]], "aabab")); // [3,2,1,1,1]
console.log(countSubTrees(4, [[0,2],[0,3],[1,2]], "aeed")); // [1,1,2,1]
