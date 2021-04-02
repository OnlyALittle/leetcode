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
	// n => n个节点的可能性，
	// 4 -》 d[0]*dp[3] + d[1]*dp[2] + d[2]*dp[1] + d[3]*dp[0]

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