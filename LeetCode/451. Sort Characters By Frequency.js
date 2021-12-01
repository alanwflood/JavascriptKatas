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
