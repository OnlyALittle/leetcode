/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	function change(i, j) {
		let length = matrix.length - i;
		for (let k = 0; k < Math.ceil(length / 2); k++) {
			console.log



			let temp = matrix[i][j] // 1
			matrix[i][j] = matrix[i + length - 1 - k][j] // 1 -> 7
			matrix[i + length - 1 - k][j] = matrix[i + length - 1][j + length - 1 - k] // 7 -> 9
			matrix[i + length - 1][j + length - 1 - k] =
				matrix[i][j + length - 1 - k] // 9 -> 3
			matrix[i][j + length - 1 - k] = temp // 3 -> 1
		}
	}

	let N = matrix[0].length;
	let step = 0
	while (N) {
		change(step, step);
		N = Math.floor(N / 2)
		step++;
	}

};
// @lc code=end

let t1 = [[1,2,3],[4,5,6],[7,8,9]]
let t2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(t1)
rotate(t2)
console.log(t1)
console.log(t2)
