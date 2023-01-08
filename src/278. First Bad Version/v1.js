// 278. First Bad Version

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let start = 1;
    let end = n;
    while (start < end) {
      const mid = start + Math.floor((end - start) / 2);
      if (!isBadVersion(mid)) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return start;
  };
};

// Note: without the isBadVersion function, we can't test it in a local env.