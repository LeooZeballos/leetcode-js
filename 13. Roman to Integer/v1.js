// 13. Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // variable to store the result
  var result = 0;

  // we iterate through the string
  for (let i = 0; i < s.length; i++) {
    // I before a V or X
    if (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
      result -= 1;
      i++;
    }
    // X before a L or C
    if (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
      result -= 10;
      i++;
    }
    // C before a D or M
    if (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
      result -= 100;
      i++;
    }
    // Other cases
    if (s[i] === "M") {
      result += 1000;
    } else if (s[i] === "D") {
      result += 500;
    } else if (s[i] === "C") {
      result += 100;
    } else if (s[i] === "L") {
      result += 50;
    } else if (s[i] === "X") {
      result += 10;
    } else if (s[i] === "V") {
      result += 5;
    } else if (s[i] === "I") {
      result += 1;
    }
  }
  return result;
};

// Test cases
console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
