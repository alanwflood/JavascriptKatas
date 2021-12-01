/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sums = new Set();
  nums = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      twoSum(nums, i, sums);
    }
  }
  return Array.from(sums).map((val) => val.split(" ").map(Number));
};

function twoSum(nums, index, sums) {
  let lo = index + 1;
  let hi = nums.length - 1;
  while (lo < hi) {
    let sum = nums[lo] + nums[hi] + nums[index];
    if (sum < 0) {
      lo++;
    } else if (sum > 0) {
      hi--;
    } else {
      sums.add(`${nums[index]} ${nums[lo]} ${nums[hi]}`);
      lo++;
      hi--;
    }
  }
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-2, 0, 0, 2, 2]));
