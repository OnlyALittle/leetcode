/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
	let dp = new Array(n+1).fill(0);
	dp[0] = 1;
	dp[1] = 1;

	for(let i = 2; i <= n; i++) {
		let t = 0;
		for(let j = 1; j <= i; j++) {
			t += (dp[j - 1] * dp[i - j])
		}
		dp[i] = t;
	}
	return dp[n]
};
// @lc code=end

console.log(numTrees(2))
console.log(numTrees(3))