// 1833. Maximum Ice Cream Bars

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
  let count = 0;
  while (true) {
    let minPrice = 0;
    for (let i = 1; i < costs.length; i++) {
      if (costs[i] < costs[minPrice]) minPrice = i;
    }
    if (costs[minPrice] <= coins) {
      coins -= costs[minPrice];
      costs.splice(minPrice, 1);
      count++;
    } else {
      break;
    }
  }
  return count;
};

// Test cases
console.log(maxIceCream([1,3,2,4,1], 7)); // 4
console.log(maxIceCream([10,6,8,7,7,8], 5)); // 0
console.log(maxIceCream([1,6,3,1,2,5], 20)); // 6
