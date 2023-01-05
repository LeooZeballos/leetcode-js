// 20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Stack for the parentheses
  let stack = [];
  // Loop through the string
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      const lastInStack = stack[stack.length - 1];
      if (
        (lastInStack === "(" && s[i] === ")") ||
        (lastInStack === "[" && s[i] === "]") ||
        (lastInStack === "{" && s[i] === "}")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) return true;
  else return false;
};

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
