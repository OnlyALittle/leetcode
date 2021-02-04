
var solveSlow = function(board) {
	const m = board.length;
	if (m === 0) return [];
	const n = board[0].length;
	const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

	const bfs = (i, j) => {
		const stack = [[i, j]];
		board[i][j] = 'XX';
		while (stack.length) {
			const [x, y] = stack.shift();
			for(const [dx, dy] of dirs) {
				let newX = x + dx;
				let newY = y + dy;
				if (newX >= m || newX < 0 || newY < 0 || newY >= n) {
					continue;
				}
				if (board[newX][newY] === 'O') {
					board[newX][newY] = 'XX';
					stack.push([newX, newY]);
				}
			}
		}
	}
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
				if (board[i][j] == 'O') bfs(i, j); // 从最外层的O，开始BFS
			}
		}
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === 'XX') board[i][j] = 'O';
			else if (board[i][j] === 'O') board[i][j] = 'X';
		}
	}

}
/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
	const m = board.length;
	if (m === 0) return [];
	const n = board[0].length;
	const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

	const bfs = (i, j) => {
		const stack = [[i, j]];
		board[i][j] = 'XX';
		while (stack.length) {
			const [x, y] = stack.shift();
			for(const [dx, dy] of dirs) {
				let newX = x + dx;
				let newY = y + dy;
				if (newX >= m || newX < 0 || newY < 0 || newY >= n) {
					continue;
				}
				if (board[newX][newY] === 'O') {
					board[newX][newY] = 'XX';
					stack.push([newX, newY]);
				}
			}
		}
	}
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
				if (board[i][j] == 'O') bfs(i, j); // 从最外层的O，开始BFS
			}
		}
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === 'XX') board[i][j] = 'O';
			else if (board[i][j] === 'O') board[i][j] = 'X';
		}
	}

}

// @lc code=end

let temp1 = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
let temp2 = [["O","O"], ["O","O"]];
let temp3 = [["O"]];
let temp4 = [["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]];
let temp5 = [["O","X","X","O","X"],["X","O","O","X","O"],["X","O","X","O","X"],["O","X","O","O","O"],["X","X","O","X","O"]];

solve(temp5);
console.log(temp5);
