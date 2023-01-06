// 205. Isomorphic Strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let mapping = new Map();
  let alreadyMapped = new Map();
  for (let i = 0; i < s.length; i++) {
    if (mapping.has(s[i])) {
      if (mapping.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      if (alreadyMapped.has(t[i])) {
        return false;
      } else {
        mapping.set(s[i], t[i]);
        alreadyMapped.set(t[i], true);
      }
    }
  }
  return true;
};

// Test cases
// console.log(isIsomorphic("egg", "add")); // true
// console.log(isIsomorphic("foo", "bar")); // false
// console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("badc", "baba")); // false