// 299. Bulls and Cows

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {

  let bulls = 0
  let cows = 0

  const secretMap = new Map()
  const guessMap = new Map()

  for (let i = 0; i < secret.length; i++) {
    const secretChar = secret[i]
    const guessChar = guess[i]

    if (secretChar === guessChar) {
      bulls++
    } else {
      if (secretMap.has(secretChar)) {
        secretMap.set(secretChar, secretMap.get(secretChar) + 1)
      } else {
        secretMap.set(secretChar, 1)
      }

      if (guessMap.has(guessChar)) {
        guessMap.set(guessChar, guessMap.get(guessChar) + 1)
      } else {
        guessMap.set(guessChar, 1)
      }
    }
  }

  for (const [key, value] of secretMap) {
    if (guessMap.has(key)) {
      cows += Math.min(value, guessMap.get(key))
    }
  }

  return bulls + "A" + cows + "B";
};

// Test cases
let tests = [
  { input: ["1807", "7810"], output: "1A3B" },
  { input: ["1123", "0111"], output: "1A1B" },
]

// Run tests
tests.forEach(test => {
  console.log("Input: " + test.input)
  console.log("Expected: " + test.output)
  console.log("Output: " + getHint(test.input[0], test.input[1]))
  console.log()
})
