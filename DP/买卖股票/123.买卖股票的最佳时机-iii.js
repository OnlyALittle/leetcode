/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let N = prices.length;
	let dp1, dp2, dp3, dp4;
	dp1 = dp3 = -prices[0] // 两次出售的买入点
	dp2 = dp4 = 0;
	for (let i = 1; i < N; i++) {
		const item = prices[i];
		dp1 = Math.max(dp1, -item) // 找一个最大的买入节点
		dp2 = Math.max(dp2, dp1 + item); // 记录第一次的最大出售点
		// dp3 = Math.max(dp3, -item); // 考虑买第二次
		// dp3 = Math.max(dp3, dp2 - item); // 考虑不买第二次
		dp3 = Math.max(dp3, dp2 - item); // 合并
		dp4 = Math.max(dp4, dp3 + item);
	}
	return dp4;
};
// @lc code=end


console.log(maxProfit([3,3,5,0,0,3,1,4]))
console.log(maxProfit([1,2,3,4,5]))
