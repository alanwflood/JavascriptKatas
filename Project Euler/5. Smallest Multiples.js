function gcd(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function smallestMultiple(n) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i / gcd(i, result);
  }
  return result;
}

console.log(smallestMultiple(20));
