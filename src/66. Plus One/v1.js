// 66. Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carries = false;
  digits[digits.length - 1] += 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (carries) {
      digits[i] += 1;
      carries = false;
    }
    if (digits[i] === 11) {
      digits[i] = 1;
      carries = true;
    } else if (digits[i] === 10) {
      digits[i] = 0;
      carries = true;
    } else {
      break;
    }
  }
  if (carries) {
    digits = [1, ...digits];
  }
  return digits;
};

// Test cases
console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([9])); // [1, 0]
console.log(plusOne([9,9])); // [1, 0, 0]
