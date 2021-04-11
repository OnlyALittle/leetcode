/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
	let N = grid.length
	let M = grid[0].length;
	let max = 0;

	function dfs(i, j) {
		if (j < 0 || j >= M || i < 0 || i >= N || grid[i][j] == '0') return 0;

		grid[i][j] = '0'

		return 1 +
			dfs(i - 1, j) +
			dfs(i + 1, j) +
			dfs(i, j + 1) +
			dfs(i, j - 1)
	}

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			max = Math.max(dfs(i, j), max)
		}
	}
	return max
};
// @lc code=end

let data = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,1,1,0,1,0,0,0,0,0,0,0,0],
[0,1,0,0,1,1,0,0,1,0,1,0,0],
[0,1,0,0,1,1,0,0,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,1,1,0,0,0,0]]

console.log(maxAreaOfIsland([[1]]));
console.log(maxAreaOfIsland(data));

