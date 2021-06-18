/*
 * @lc app=leetcode.cn id=1738 lang=javascript
 *
 * [1738] 找出第 K 大的异或坐标值
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function(matrix, k) {
	let N = matrix.length;
	let M = matrix[0].length;
	let dp = Array.from(new Array(N+1), () => new Array(M+1).fill(0))
	let res = [];
	for (let i = 1; i <= N; i++) {
		for (let j = 1; j <= M; j++) {
			dp[i][j] = dp[i - 1][j] ^ dp[i][j - 1] ^ dp[i - 1][j - 1] ^ matrix[i - 1][j - 1];
			res.push(dp[i][j])
		}
	}
	const data = res.sort((a, b) => b - a)
	return data[k - 1];
};
// @lc code=end

console.log(kthLargestValue(
	[
		[5, 2],
		[1, 6]
	] ,1))
console.log(kthLargestValue(
	[
		[5, 2],
		[1, 6]
	] ,3))


	