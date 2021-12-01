// This one won't make any sense as it uses a function only given on leetcode
// Done as Day 1 of May 2020's Challenges

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
        // I'm basically doing a binary search here
        let left = 1, right = n, mid;
        while (left < right) {
            mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) right = mid;
            else left = mid + 1;
        }
        return left
    };
};
