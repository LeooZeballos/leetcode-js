// 844. Backspace String Compare

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

  const sStack = []
  const tStack = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === "#") {
      sStack.pop()
    } else {
      sStack.push(char)
    }
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i]
    if (char === "#") {
      tStack.pop()
    } else {
      tStack.push(char)
    }
  }

  return sStack.join("") === tStack.join("")

};

// Test cases
let tests = [
  { input: ["ab#c", "ad#c"], output: true },
  { input: ["ab##", "c#d#"], output: true },
  { input: ["a#c", "b"], output: false },
]

// Run tests
tests.forEach(test => {
  console.log("Input: " + test.input)
  console.log("Expected: " + test.output)
  console.log("Output: " + backspaceCompare(test.input[0], test.input[1]))
  console.log()
})
