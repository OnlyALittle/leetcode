/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
	let dp = new Array(n+1).fill(n)
	dp[0] = 0;
	for(let i = 1; i * i <= n; i++) {
		let cur = i * i;
		for(let j = cur; j <= n; j++) {
			dp[j] = Math.min(
				(dp[j - cur] || 0) + 1,
				dp[j]
			)
		}
	}
	return dp[n];
};
// @lc code=end

console.log(numSquares(12))
console.log(numSquares(13))
console.log(numSquares(1))