var changeSimple = function(amount, coins) {
	if (amount === 0 ) return 1;
	else if (coins.length === 0) return 0;
	let dp = Array.from(
		new Array(amount + 1),
		() => new Array(coins.length).fill(0)
	)
	for(let i = 0; i < coins.length; i++) {
		dp[0][i] = 1;
	}

	for(let j = 1; j <= amount; j++) {
		for(let i = 0; i < coins.length; i++) {
			let cur = coins[i];
			if (cur > j) {
				dp[j][i] = dp[j][i - 1] || 0;
			} else {
				dp[j][i] = dp[j - cur][i] + (dp[j][i - 1] || 0)
			}
		}
	}
	return dp[amount][coins.length - 1]
};
/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
	if (amount === 0 ) return 1;
	else if (coins.length === 0) return 0;

	let dp = new Array(amount + 1).fill(0);
	dp[0] = 1;

	for(let i = 0; i < coins.length; i++) {
		let cur = coins[i];
		for(let j = 1; j <= amount; j++) {
			if (cur <= j) {
				dp[j] += dp[j - cur]
			}
		}
	}
	return dp[amount]
};
// @lc code=end

console.log(change(5, [1,2,5]));
console.log(changeSimple(5, [1,2,5]));
console.log(change(3, [2]));
console.log(change(10, [10]));
console.log(change(0, [1]));
console.log(change(7, []));