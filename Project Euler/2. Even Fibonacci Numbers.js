function evenFibonacciNumbers() {
  const max = 4_000_000;

  let sum = 0;
  let i = 1;
  let j = 1;
  while (true) {
    let fib = i + j
    if (fib > max) break;

    if (fib % 2 === 0) {
      sum += fib;
      console.log("fib:", fib);
      console.log("sum:", sum);
    }

    i = j;
    j = fib;
  }
  return sum;
}

console.log(evenFibonacciNumbers())
