/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome2 = function (s) {
  for (let i = 0; i < s.length; i++) {
    let string = s.split("");
    string[i] = "";
    console.log(string);
    if (string.join("") === string.reverse().join("")) return true;
  }
  return false;
};

console.log(validPalindrome2("abc"));
