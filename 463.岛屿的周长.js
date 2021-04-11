/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
	let N = grid.length;
	let M = grid[0].length;

	function dfs(i, j) {
		if (i < 0 || j < 0 || j >= M || i >= N) {
			return 1;
		}
		if (grid[i][j] == '2') {
			return 0;
		}
		if (grid[i][j] == '0') {
			return 1;
		}

		grid[i][j] = '2'
		return dfs(i - 1, j) + 
			dfs(i + 1, j) + 
			dfs(i, j + 1) + 
			dfs(i, j - 1)
	}
	let sum = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) {
				sum += dfs(i, j);
			}
		}
	}
	return sum
};
// @lc code=end

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]))
console.log(islandPerimeter([[1]]))
console.log(islandPerimeter([[1,0]]))
