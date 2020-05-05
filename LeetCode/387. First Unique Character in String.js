/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  if (s.length === 0) return -1;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], -1);
    else map.set(s[i], i);
  }
  const charIndex = Array.from(map.values()).filter((i) => i > -1)[0];
  return charIndex !== undefined ? charIndex : -1;
};
