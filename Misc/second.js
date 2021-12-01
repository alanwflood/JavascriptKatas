// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function reorderLines(logFileSize, logLines) {
  // WRITE YOUR CODE HERE

  // Reordering by words, then numbers
  // Theres no outline of wether logFileSize will match logLines length;
  // But we can just use logLines in the for loop, if the assumption is
  // only the first n = logLines of the list should be sorted.

  // Split strings from spaces so we can do comparisions between the values
  // ['a1 9 2 3'] >>> ['a1', 9, 2, 3]
  // During sort, check if string can be parsed as a numbers
  // Doing some quick checks on the correct usage of Javascript Array.sort

  // LogLines are an array of strings

  // Setup an array to hold digits and strings, to reduce sort complexity;
  let strings = [];
  let digits = [];

  // We can actually just get the data we're
  // looking for each line instead of iterating
  const lineToData = (line) => {
    const [id, ...data] = line.split("");
    return {
      id,
      data,
    };
  };

  // Get first value from the data string
  const getValue = (string) => {
    return string.slice(string.indexOf(" ") + 1);
  };

  const getFirstValue = (string) => {
    let [first, ...second] = string.split("");
    return second[0];
  };

  const getIdentifier = (string) => {
    let [first, ...second] = string.split(" ");
    return first;
  };

  // Build up two arrays to seperate strings and digits.
  for (let i = 0; i < logFileSize; i++) {
    let line = logLines[i];
    console.log(getFirstValue(line));
    if (isNaN(getFirstValue(line))) strings.push(line);
    else digits.push(line);
  }

  strings.sort((a, b) => {
    let aVal = getValue(a);
    let bVal = getValue(b);
    // localeCompare returns
    // -> 0 if the values are the same;
    // -> -1 if b is greater
    // -> 1 if a is greater;
    let comparison = aVal.localeCompare(bVal);
    // Values are identical so sort by ID
    if (comparison === 0)
      return getIdentifier(a).localeCompare(getIdentifier(b));
    return comparison;
  });
  return digits;
}

console.log(
  reorderLines(6, [
    "r1 box ape bit",
    "br8 eat nim did",
    "w1 has uni gry",
    "b5 xi me nu",
    "t2 13 121 98",
    "f3 52 54 31",
  ])
);

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  return Array.from(
    s
      .split("")
      .reduce((map, c) => {
        map.set(c, (map.get(c) || 0) + 1);
        return map;
      }, new Map())
      .entries()
  )
    .sort((a, b) => b[1] - a[1])
    .reduce((str, [key, value]) => (str += key.repeat(value)), "");
};
