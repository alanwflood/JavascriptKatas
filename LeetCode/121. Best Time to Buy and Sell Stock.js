// Find min, find max, if max comes before min,remove max
// Find min, find max, if min comes before min, we have a winner
// if min == max return 0;

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitOld = function (prices) {
  if (prices.length <= 1) {
    return 0;
  }

  let min = 0;
  let max = 0;
  let maxProfit = 0;
  if (prices[0] > prices[1]) {
    min = 1;
    max = 0;
  } else {
    min = 0;
    max = 1;
    maxProfit = prices[max] - prices[min];
  }

  for (let i = 2; i < prices.length; i++) {
    if (prices[i] < prices[min]) {
      min = i;
      if (min < max) maxProfit = prices[max] - prices[min];
    } else if (prices[i] > prices[min]) {
      max = i;
      if (min < max) maxProfit = Math.max(prices[max] - prices[min], maxProfit);
    }
  }
  return maxProfit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0;
  }

  let min = prices[0];
  let profit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  return profit > 0 ? profit : 0;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2]));
console.log(maxProfit([2, 4, 1]));
