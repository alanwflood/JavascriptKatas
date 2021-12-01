/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  // If one of the numbers is empty just return the other
  if (!num1 || !num2) return num1 ? num2 : num1;

  let total = "";
  // Setup a remainder
  let remainder = 0;
  // Setup pointers for the values
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;

  // While we can still loop over both strings
  while (p1 >= 0 || p2 >= 0) {
    // Assign values or 0 if one number can no longer be indexed.
    let v1 = p1 < 0 ? 0 : Number(num1[p1]);
    let v2 = p2 < 0 ? 0 : Number(num2[p2]);
    // Create a value
    let value = v1 + v2 + remainder;

    // If it's greater than 9 we need to increment the remainder
    // else we reset the remainder
    if (value > 9) {
      remainder = 1;
      value -= 10;
    } else remainder = 0;

    // Decrement the pointers
    if (p1 !== -1) p1--;
    if (p2 !== -1) p2--;
    // Add the string to the total
    total = value.toString() + total;
  }
  // If a remainder exists we need to add it to the start of the total
  return remainder > 0 ? remainder + total : total;
};

console.log(addStrings("1", "9"));
