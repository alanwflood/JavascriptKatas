function findRepeat(numbers) {
  numbers = numbers.sort();
  console.log(numbers);

  // Find a number that appears more than once
  let floor = 0;
  let ceil = numbers.length - 1;
  while (floor < ceil) {
    let guess = floor + Math.ceil((ceil - floor) / 2);
    if (numbers[guess - 1] === numbers[guess]) return numbers[guess];
    if (numbers[guess] === guess + 1) {
      ceil = guess;
    } else {
      floor = guess;
    }
  }
  return 0;
}

// Tests

let desc = "just the repeated number";
let actual = findRepeat([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = "short array";
actual = findRepeat([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = "medium array";
actual = findRepeat([1, 2, 5, 5, 5, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = "long array";
actual = findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
