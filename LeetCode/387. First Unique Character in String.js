/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], -1);
    else map.set(s[i], i);
  }
  return Array.from(map.values()).filter((i) => i > -1)[0];
};

console.log(firstUniqChar("leetcode"));
