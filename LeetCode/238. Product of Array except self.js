/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let sum = nums.reduce((total, a) => a * total, 1);
  return nums.map((num) => sum / num);
};

console.log(productExceptSelf([1, 2, 3, 4]));
