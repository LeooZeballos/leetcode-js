// 1443. Minimum Time to Collect All Apples in a Tree

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
  let children = Array.from({ length: n }, () => []);

  for ([par, child] of edges) {
    children[par].push(child);
    children[child].push(par);
  }

  let res = 0;
  let dfs = function (node, parent) {
      let val = false
      for (let child of children[node]) {
          if (child === parent) continue
          res++
          let bol = dfs(child, node)
          if (bol) res++
          else res--
          val = val || bol
      }
      if (hasApple[node]) return true
      return val
  }

  dfs(0);
  return res;
};

// Test cases
console.log(minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,true,false,true,true,false])); // 8
console.log(minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,true,false,false,true,false])); // 6
console.log(minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,false,false,false,false,false])); // 0
