// TODO O(n2) is gross
function LargestPalindromeProduct() {
  minDigit = 100;
  maxDigit = 1000;
  let largest = 0;
  for (let i = minDigit; i < maxDigit; i++) {
    for (let j = minDigit; j < maxDigit; j++) {
      let total = (i * j).toString();
      if (
        total === total.split("").reverse().join("") &&
        Number(total) > largest
      ) {
        largest = Number(total);
      }
    }
  }
  return largest;
}

console.log(LargestPalindromeProduct(2));
