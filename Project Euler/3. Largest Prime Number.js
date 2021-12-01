function LargestPrimeFactors(num) {
  let largestPrime = 2;
  while(num > 2) (num % largestPrime === 0) ? num /= largestPrime : largestPrime++
  return largestPrime;
}

console.log(LargestPrimeFactors(13195))
console.log(LargestPrimeFactors(600851475143))
