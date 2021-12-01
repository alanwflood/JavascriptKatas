/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 1) return;

  let ref = 0,
    uniqueIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[ref] !== nums[i]) nums[++uniqueIndex] = nums[i];
    ref = i;
  }
  return uniqueIndex + 1;
};
