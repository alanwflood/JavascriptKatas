export function runner(input: string, windowSize: number = 3) {
  const dataset = input.split(/\r?\n/).map(line => parseInt(line, 10));

  let count = 0;
  // Zero based assignment
  let zeroBasedWindowSize = -1 + windowSize

  let i = zeroBasedWindowSize;
  // Setup for looping
  let prevSum = dataset[i - 2] + dataset[i - 1] + dataset[i];
  let sum = 0;

  while(i++ <= dataset.length - zeroBasedWindowSize) {
    sum = dataset[i - 2] + dataset[i - 1] + dataset[i];
    if (sum > prevSum) count++
    prevSum = sum;
  }
  return count;
}
