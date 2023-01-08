// 557. Reverse Words in a String III

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let reversedString = "";
  let currentWord = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      reversedString += currentWord + " ";
      currentWord = "";
    } else {
      currentWord = s[i] + currentWord;
    }
  }
  if (currentWord !== "") reversedString += currentWord;
  return reversedString;
};

// Test cases
console.log(reverseWords("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("God Ding")); // "doG gniD"
