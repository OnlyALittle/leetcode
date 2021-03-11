/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let amount = 0;
	for (let i = 0; i < prices.length; i++) {
		if (prices[i + 1] > prices[i]) {
			amount += prices[i + 1] - prices[i]
		}
	}
	return amount
};
// @lc code=end

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4,5]))
console.log(maxProfit([7,6,4,3,1]))

