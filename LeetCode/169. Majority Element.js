/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  const target = Math.ceil(nums.length / 2);
  console.log(target);
  for (let i = 0; i < nums.length; i++) {
    const count = (map.get(nums[i]) || 0) + 1;
    if (count === target) return nums[i];
    map.set(nums[i], count);
  }
};
