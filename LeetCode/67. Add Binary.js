/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a === "0") return b;
  if (b === "0") return a ;

  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let sum = "";

  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    digit1 = i < 0 ? 0 : a.charAt(i) - "0";
    digit2 = j < 0 ? 0 : b.charAt(j) - "0";
    total = digit1 + digit2 + carry;
    sum = `${total % 2}${sum}`;
    carry = Math.floor(total / 2);
  }
  return sum;
};
console.log(addBinary("1010", "1011"));
