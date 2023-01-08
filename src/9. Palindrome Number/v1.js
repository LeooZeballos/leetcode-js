// 9. Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // negative numbers can't be palindrome
  if (x < 0) return false;

  // first solution, turn to string
  let str = x.toString();

  // iterate to the half of the array
  for (let i = 0; (i < str.length) / 2; i++) {
    // if the opposite number is not equal it returns false
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  // passes
  return true;
};

// Test cases
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));