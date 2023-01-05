// 13. Roman to Integer

// Not my solution, I wanted the syntax of maps

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(str) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const nextChar = str[i + 1];

    if (
      (char === 'I' && (nextChar === 'V' || nextChar === 'X')) ||
      (char === 'X' && (nextChar === 'L' || nextChar === 'C')) ||
      (char === 'C' && (nextChar === 'D' || nextChar === 'M'))
    ) {
      result += map[nextChar] - map[char];
      i++;
    } else {
      result += map[char];
    }
  }

  return result;
}

// Test cases
console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
