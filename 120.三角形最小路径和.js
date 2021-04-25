/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
	let N = triangle.length;
	let res = triangle[N -1];
	for (let i = N - 2; i >= 0; i--) {
		for (let j = 0; j < i+1; j++) {
			res[j] = Math.min(res[j], res[j+1]) + triangle[i][j];
		}
	}
	return res[0];
};
// @lc code=end

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
console.log(minimumTotal([[-10]]))
console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]))
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))