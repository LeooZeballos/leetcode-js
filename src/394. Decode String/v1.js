// 394. Decode String

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char !== "]") {
      stack.push(char)
    } else {
      let decodedString = ""
      while (stack[stack.length - 1] !== "[") {
        decodedString = stack.pop() + decodedString
      }
      stack.pop()
      let multiplier = ""
      while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
        multiplier = stack.pop() + multiplier
      }
      multiplier = parseInt(multiplier)
      stack.push(decodedString.repeat(multiplier))
    }
  }
  return stack.join("")
};

// Test cases
let tests = [
  { input: "3[a]2[bc]", output: "aaabcbc" },
  { input: "3[a2[c]]", output: "accaccacc" },
  { input: "2[abc]3[cd]ef", output: "abcabccdcdcdef" },
]

// Run tests
tests.forEach(test => {
  console.log("Input: " + test.input)
  console.log("Expected: " + test.output)
  console.log("Output: " + decodeString(test.input))
  console.log()
})
