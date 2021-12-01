/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = romanCharToInt(s[0]);
  let lastValue = sum;
  let greatestNumberSoFar = sum;

  for (let i = 1; i < s.length; i++) {
    const value = romanCharToInt(s[i]);
    if (value > greatestNumberSoFar) {
      sum = sum - lastValue + (value - lastValue);
    } else {
      greatestNumberSoFar = value;
      sum += value;
    }
    lastValue = value;
  }
  return sum;
};

function romanCharToInt(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
  }
}

console.log(romanToInt("III"), " - ", 3);
console.log(romanToInt("IV"), " - ", 4);
console.log(romanToInt("IX"), " - ", 9);
console.log(romanToInt("LVIII"), " - ", 58);
console.log(romanToInt("MCMXCIV"), " - ", 1994);
