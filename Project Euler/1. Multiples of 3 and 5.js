function threeAndFive(limit) {
  let multipleCount = 0;
  for (i = 3; i < limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      multipleCount += i
    }
  }
  return multipleCount;
}

console.log(threeAndFive(10))
console.log(threeAndFive(100))
console.log(threeAndFive(1000))
