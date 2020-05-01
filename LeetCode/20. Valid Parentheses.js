/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let open = ["{", "(", "["];
  let close = ["}", ")", "]"];
  if (s.length % 2 === 1) {
    return false;
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (open.indexOf(s[i]) >= 0) {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== open[close.indexOf(s[i])]) {
        return false;
      }
    }
  }
  return stack.length > 0 ? false : true;
};

console.log(isValid(""));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid("{[()]}"));
