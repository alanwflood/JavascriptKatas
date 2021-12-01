function highestProductOf3(arr) {
  if (arr.length < 3) {
    throw Error;
  }

  high2 = arr[0] * arr[1];
  high3 = arr[0] * arr[1] * arr[2];
  high = Math.max(arr[0], arr[1]);

  low2 = arr[0] * arr[1];
  low = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    const val = arr[i];
    high3 = Math.max(high3, val * high2, val * low2);
    high2 = Math.max(high2, val * high, val * low);
    low2 = Math.min(low2, val * high, val * low);
    low = Math.min(low, val);
    high = Math.max(high, val);
  }
  return high3;
}

console.log(highestProductOf3([6, 1, 3, 5, 7, 8, 2]));
console.log("should be", 336, "\n\n\n");

console.log(highestProductOf3([-5, -1, -3, -2]));
console.log("should be", -6, "\n\n\n");
