/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	let N = grid.length;
	let M = grid[0].length;

	function dfs(i, j) {

		if(
			i < 0 || i > N - 1 ||
			j < 0 || j > M - 1 ||
			grid[i][j] === '2'
		) {
			// 返回
			return;
		} else if(grid[i][j] === '0'){
			// 海
			return;
		}
		grid[i][j] = '2'
		// 陆地
		dfs(i - 1, j) // 上
		dfs(i + 1, j) // 下
		dfs(i, j - 1) // 左
		dfs(i, j + 1) // 右
	}

	let count = 0;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			let item = grid[i][j];
			if (item === '1') {
				count ++;
				dfs(i, j);
			}
		}
	}
	return count;
};
// @lc code=end
let grid = [
	["1","1","1","1","0"],
	["1","1","0","1","0"],
	["1","1","0","0","0"],
	["0","0","0","0","0"]
]

let grid2 = [
	["1","1","0","0","0"],
	["1","1","0","0","0"],
	["0","0","1","0","0"],
	["0","0","0","1","1"]
  ]

let grid3 = [["1","0","1","1","0","1","1"]]

// console.log(numIslands(grid))
// console.log(numIslands(grid2))
console.log(numIslands(grid3))