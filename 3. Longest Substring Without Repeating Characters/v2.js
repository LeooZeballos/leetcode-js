// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // maximum substring result
    let start = 0;
    let end = 0;
    let max_length = 0;

    // loop through the array
    while (end < s.length) {
      if (!s.substring(start, end).includes(s[end])) {
        end += 1;
        const window_length = end - start;
        if (window_length > max_length) {
          max_length = window_length;
        }
      } else {
        start += 1;
      }
    }

    // return result
    return max_length;
  };

  // Test cases
  console.log(lengthOfLongestSubstring("abcabcbb")); // abc - 3
  console.log(lengthOfLongestSubstring("bbbbb")); // b - 1
  console.log(lengthOfLongestSubstring("pwwkew")); // wke - 3
  console.log(lengthOfLongestSubstring("aab")) // ab - 2
  console.log(lengthOfLongestSubstring("jbpnbwwd")) // jbpn - 4