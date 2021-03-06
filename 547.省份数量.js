/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
	let N = isConnected.length;

	let status = Array.from(new Array(N), (item, index) => index);

	function union(i, j) {
		// 找i、j的根
		let iRoot = find(i);
		let jRoot = find(j);
		// 根不同则合并
		if (iRoot !== jRoot) status[iRoot] = jRoot;
		else status[jRoot] = iRoot;
	}

	function find(i) {
		while (i !== status[i]) i = status[i]
		return i;
	}

	for (let i = 0; i < N; i++) {
		for (let j = i + 1; j < N; j++) {
			if (isConnected[i][j] === 1) union(i, j);
		}
	}

	return status.filter((item, index) => item === index).length
};
// @lc code=end

console.log(findCircleNum([[1,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,1,1,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,1,0,0,0,0],[0,0,0,1,0,0,1,0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,1,0],[0,0,0,0,1,0,0,0,0,1,0,1,0,0,1],[0,0,0,0,1,1,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]]))
console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]]))
console.log(findCircleNum([
	[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
	[0,1,0,1,0,0,0,0,0,0,0,0,0,1,0],
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,1,0,1,0,0,0,1,0,0,0,1,0,0,0],
	[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],
	[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
	[0,0,0,1,0,0,0,1,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
	[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
	[0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
	[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],
	[0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
]))
