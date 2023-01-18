// 136. Single Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++
    } else {
      map[nums[i]] = 1
    }
  }

  for (let key in map) {
    if (map[key] === 1) {
      return key
    }
  }

  return null
};

// Test cases
let tests = [
  { input: [2,2,1], output: 1 },
  { input: [4,1,2,1,2], output: 4 },
  { input: [1], output: 1 },
]

// Run tests
tests.forEach(test => {
  console.log("Input: " + test.input)
  console.log("Expected: " + test.output)
  console.log("Output: " + singleNumber(test.input))
  console.log()
})