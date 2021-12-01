/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let j = 0;
  let finalCount = 0;
  let substringCount = 0;
  let seenChars = new Set();
  while (j < s.length) {
    if (i === s.length) return finalCount;

    if (seenChars.has(s[i])) {
      seenChars.clear();
      substringCount = 0;
      j++;
      i = j;
    } else {
      seenChars.add(s[i]);
      substringCount++;
      i++;
    }

    if (substringCount > finalCount) {
      finalCount = substringCount;
    }
  }
  return finalCount;
};

function slidingWindowVersion(s) {
  /*
   * Sliding window:
   * 1) Slide right, check if window is valid
   * -> If valid, check window length against result
   * -> If invalid, slide from the left until valid
   */
  if (!s || s.length == 0) {
    return 0;
  }

  let result = 0;
  let left = 0;
  let right = 0;
  const windowChars = new Map();

  while (right < s.length) {
    windowChars.set(s[right], (windowChars.get(s[right]) || 0) + 1);
    if (windowChars.get(s[right]) > 1) {
      while (s[left] !== s[right]) {
        windowChars.set(s[left], 0);
        left += 1;
      }

      windowChars.set(s[left], 1);
      left += 1;
    }
    result = Math.max(result, right - left + 1);
    right += 1;
  }
  return result;
}
