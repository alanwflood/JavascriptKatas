function* windowGenerator(inputArray, size) {
  let index = 0;

  while (index + size <= inputArray.length) {
    yield inputArray
      .slice(index, index + size)
      .sort()
      .join("");
    index++;
  }
}

function toWindows(inputArray, size) {
  //compute the entire sequence of windows into an array
  return Array.from(windowGenerator(inputArray, size));
}

function checkInclusion(p, c) {
  if (p > c.length) return false;
  const container = c.split("");
  const result = toWindows(container, p.length);
  const perm = p.split("").sort().join("");
  return result.some((val) => val === perm);
}

console.log(checkInclusion("eidbaooo", "ab"));
console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
