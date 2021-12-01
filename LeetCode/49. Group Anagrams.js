/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const chars = [...strs[i]].sort().join("");
    const arr = map.get(chars) || [];
    arr.push(strs[i]);
    map.set(chars, arr);
  }
  return Array.from(map.values());
};
