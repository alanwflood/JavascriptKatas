/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return string.split("").reverse().join("") === string;
};
