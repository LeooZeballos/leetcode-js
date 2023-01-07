// 167. Two Sum II - Input Array Is Sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let pastNums = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (pastNums.has(target - numbers[i]))
      return [pastNums.get(target - numbers[i]) + 1, i + 1];
    else
      if (!pastNums.has(numbers[i])) pastNums.set(numbers[i], i);
  }
};

// Test cases
console.log(twoSum([2,7,11,15], 9)); // [1,2]
console.log(twoSum([2,3,4], 6)); // [1,3]
console.log(twoSum([-1,0], -1)); // [1,2]
console.log(twoSum([3,24,50,79,88,150,345], 200)) // [3, 6]
