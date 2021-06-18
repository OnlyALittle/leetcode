/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
	let N = matrix.length;
	let M = matrix[0].length;
	// 以i，j为右下角坐标时的边长
	let dp = Array.from(new Array(N), () => new Array(M).fill(1));

	function isSquare(i, j) {
		if (matrix[i][j] == 0) {
			dp[i][j] = 0;
			return 0
		} else if (i == 0 || j == 0) {
			dp[i][j] = 1
			return 1;
		} else {
			let top = dp[i-1][j];
			let right = dp[i][j-1];
			let leftTop = dp[i-1][j-1];
			dp[i][j] = Math.min(top, right, leftTop) + 1;
			return dp[i][j];
		}
	}

	let max = 0;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			let res = isSquare(i, j);
			max = Math.max(res, max)
		}
	}

	return max * max;
};
// @lc code=end

console.log(maximalSquare(
	[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
))
console.log(maximalSquare(
	[["0","1"],["1","0"]]
))
console.log(maximalSquare(
	[["0"]]
))