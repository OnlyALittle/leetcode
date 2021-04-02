/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
	let dp = new Array(amount + 1).fill(Infinity)
	dp[0] = 0;

	for(let i = 0; i < coins.length; i++) {
		let cur = coins[i];
		for(let j = cur; j < dp.length; j++) {
			dp[j] = Math.min(dp[j - cur] + 1, dp[j]);
		}
	}
	return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
};
// @lc code=end

console.log(coinChange([1,2,5], 11))
console.log(coinChange([2], 3))
console.log(coinChange([1], 0))
console.log(coinChange([1], 1))
console.log(coinChange([1], 2))
